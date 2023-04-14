const axios = require('axios');

let ODLControllerAddr = process.env.ODLControllerAddr || 'localhost'

const cleanConfig = async () => {
    try {
        await axios({
            url: `http://${ODLControllerAddr}:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/flow-node-inventory:meter/1`,
            method: 'delete',
            headers: {
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            }
        })

        await axios({
            url: `http://${ODLControllerAddr}:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/table/0/flow/2`,
            method: 'delete',
            headers: {
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const applyConfig = async (bandwidth) => {
    try {
        await axios({
            url: `http://${ODLControllerAddr}:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/flow-node-inventory:meter/1`,
            method: 'put',
            headers: {
                'Content-Type': 'application/xml',
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            },
            data: `
                <meter xmlns="urn:opendaylight:flow:inventory">
                    <meter-id>1</meter-id>
                    <flags>meter-kbps meter-burst</flags>
                    <container-name>abcd</container-name>
                    <meter-band-headers>
                        <meter-band-header> 
                            <band-id>0</band-id>
                            <meter-band-types>
                                <flags>ofpmbt-drop</flags>
                            </meter-band-types>
                            <drop-rate>${bandwidth}</drop-rate>
                            <drop-burst-size>100</drop-burst-size>
                        </meter-band-header>
                    </meter-band-headers>
                    <meter-name>M</meter-name>
                </meter>
            `
        })

        await axios({
            url: `http://${ODLControllerAddr}:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/table/0/flow/2`,
            method: 'put',
            headers: {
                'Content-Type': 'application/xml',
                'Authorization': 'Basic YWRtaW46YWRtaW4='
            },
            data: `
                <flow xmlns="urn:opendaylight:flow:inventory">
                    <priority>99</priority>
                    <flow-name>F1</flow-name>
                    <match>
                        <ethernet-match>
                            <ethernet-type>
                                <type>2048</type>
                            </ethernet-type>
                        </ethernet-match>
                        <in-port>1</in-port>
                    </match>
                    <id>2</id>
                    <table_id>0</table_id>
                    <instructions>
                        <instruction>
                            <order>0</order>
                            <apply-actions>
                                <action>
                                   <order>0</order>
                                   <output-action>
                                        <output-node-connector>2</output-node-connector>
                                   </output-action>
                                </action>
                            </apply-actions>
                        </instruction>
                        <instruction>
                            <order>1</order>
                            <meter>
                                <meter-id>1</meter-id>
                            </meter>
                        </instruction>
                    </instructions>
                </flow>
            `   
        })            
    } catch (err) {
        console.log(err);
    }
}

exports.initConfig = async () => {
    try {
        applyConfig(8000);
    } catch (err) {
        console.log(err);
    }
} 

exports.postSliceRequest = async (req, res) => {
    try {
        let sliceconfig = { ...req.body.sliceconfig };
        let bandwidth = sliceconfig.uplink_slice;

        await cleanConfig();
        await applyConfig(bandwidth);
        

    } catch (err) {
        res.status(500).json({
            "message": "Communication to ODL Controller failed."
        })
    }
}