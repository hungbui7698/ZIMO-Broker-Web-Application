import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddNetworkFlavour.css";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import { serverurl } from "../../../../../logik/logik";

const AddNetworkFlavour = (props) => {
  const [show, setShow] = useState(false);
  const sendInfoToServer = async () => {
    const importData = getAllData();

    try {
      fetch(`${serverurl}/networkflavour`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      }).then(() => {
        setShow(false);
        props.refresh();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllData = () => {
    var Name = document.getElementById("NetworkFlavourName").value;
    var Vertical = document.getElementById("Vertical").value;
    var Organization = props.user;
    var Dynamic = document.getElementById("Dynamic").value;
    var Throughput = document.getElementById("Throughput").value;
    var DataVolume = document.getElementById("DataVolume").value;
    var Latency = document.getElementById("Latency").value;
    var Reliability = document.getElementById("Reliability").value;
    var UserDensity = document.getElementById("UserDensity").value;
    var DataSecurity = document.getElementById("DataSecurity").value;
    var Isolation = document.getElementById("Isolation").value;
    var EnergyEfficiency = document.getElementById("EnergyEfficiency").value;
    var TrafficType = document.getElementById("TrafficType").value;
    var TypicalDataProfile =
      document.getElementById("TypicalDataProfile").value;
    var Features = document.getElementById("Features").value;
    var SLA = document.getElementById("SLA").value;
    var DeviceType = document.getElementById("DeviceType").value;
    var DeviceVelocity = document.getElementById("DeviceVelocity").value;
    var data = {
      name: Name,
      organization: Organization,
      flavourAttribute: {
        useCase: { vertical: Vertical },
        operations: { dynamic: Dynamic },
        connectivity: {
          throughput: Throughput,
          dataVolume: DataVolume,
          latency: Latency,
          reliability: Reliability,
          userDensity: UserDensity,
          dataSecurity: DataSecurity,
          isolation: Isolation,
          energyEfficiency: EnergyEfficiency,
          trafficType: TrafficType,
          typicalDataProfile: TypicalDataProfile,
        },
        ESIN: { features: Features },
        business: { SLA: SLA },
        device: { deviceType: DeviceType, deviceVelocity: DeviceVelocity },
      },
    };
    console.log(data)
    return data;
  };
  return (
    <div className="AddNetworkFlavour">
      <AddCircleOutlineTwoToneIcon
        type="button"
        className="AddButton"
        onClick={() => setShow(true)}
      />

      <Modal
        scrollable={true}
        show={show}
        size="xl"
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Network Flavour's information
            <input
              id="NetworkFlavourName"
              placeholder="Network Flavour Name"
            ></input>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tbody>
              {vertical_questionaire.map((elem) => (
                <tr className="row g-0" key={elem.attribute}>
                  <td className="col-3">{elem.attribute}</td>
                  <td className="col-9">
                    <table className="table">
                      <tbody>
                        {elem.sub_attribute.map((sub_elem) => (
                          <tr className="row g-0" key={sub_elem.description}>
                            <td className="col-7">{sub_elem.description}</td>
                            <td className="col-5">
                              {sub_elem.options && (
                                <select className="col-12" id={sub_elem.id}>
                                  {sub_elem.options.map((v_elem) => (
                                    <option
                                      value={v_elem.value}
                                      key={v_elem.value}
                                    >
                                      {v_elem.label}
                                    </option>
                                  ))}
                                </select>
                              )}
                              {sub_elem.inputvalue && (
                                <input
                                  type="number"
                                  className="col-12"
                                  id={sub_elem.inputvalue}
                                />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={sendInfoToServer}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNetworkFlavour;
const vertical_questionaire = [
  {
    attribute: "Usecase",
    sub_attribute: [
      {
        id: "Vertical",
        description: "In which Vertical is your app used?",
        options: [
          { value: "AR/VR Providers", label: "AR/VR Providers" },
          { value: "Automative", label: "Automative" },
          {
            value: "Critical Communications",
            label: "Critical Communications",
          },
          { value: "EDGE", label: "EDGE" },
          { value: "Energy", label: "Energy" },
          { value: "Gaming", label: "Gaming" },
          {
            value: "Government & Public Safety",
            label: "Government & Public Safety",
          },
          { value: "Healthcare", label: "Healthcare" },
          {
            value: "Industrial IoT; Critical Comm.",
            label: "Industrial IoT; Critical Comm.",
          },
          {
            value: "Industrial/Manufacturing",
            label: "Industrial/Manufacturing",
          },
          { value: "Media & Entertainment", label: "Media & Entertainment" },
          { value: "Public Safety", label: "Public Safety" },
          { value: "Security", label: "Security" },
          { value: "Smart Cities", label: "Smart Cities" },
          { value: "Special needs", label: "Special needs" },
          { value: "Special vehicles", label: "Special vehicles" },
          { value: "Transport & Logistics", label: "Transport & Logistics" },
          { value: "Utilities", label: "Utilities" },
        ],
      },
    ],
  },
  {
    attribute: "Operations",
    sub_attribute: [
      {
        id: "Dynamic",
        description:
          "How dynamic your communication service would need to be? E.g., do you need to change the maximum data rate suddenly?",
        options: [
          { value: "Dynamic", label: "Dynamic" },
          {
            value: "Static",
            label: "Static",
          },
        ],
      },
    ],
  },
  {
    attribute: "Connectivity",
    sub_attribute: [
      {
        id: "Throughput",
        description:
          "Needed data rate (Throughput) – typical / minimum / maximum",
        options: [
          { value: "Very low", label: "Very low (<100 kbps)" },
          {
            value: "Low",
            label: "Low (100 kbps – 1 Mbps)",
          },
          { value: "Moderate", label: " Moderate (1 Mbps – 10 Mbps)" },
          { value: "High", label: "High (10 Mbps-1 Gbps)" },
          { value: "Very high", label: "Very high (> 1 Gbps)" },
        ],
      },
      {
        id: "DataVolume",
        description: "Data Volume per device",
        options: [
          { value: "No Cap", label: "No Cap" },
          {
            value: "High data volume",
            label: "High data volume: 100GB – 1TB per month",
          },
          { value: "Low Data Volume", label: "Low Data Volume: ~1GB" },
          {
            value: "High frequency of small data packets",
            label: "High frequency of small data packets",
          },
        ],
      },
      {
        id: "Latency",
        description: "Latency (the response time)",
        options: [
          { value: "Ultra-low", label: "Ultra-low (<1 ms)" },
          {
            value: "Low",
            label: "Low (1-10 ms)",
          },
          { value: "Moderate", label: "Moderate (10-100 ms)" },
          {
            value: "Not critical",
            label: "Not critical (>100 ms)",
          },
        ],
      },
      {
        id: "Reliability",
        description: "Reliability",
        options: [
          {
            value: "Uptime critical at any time",
            label: "Uptime critical at any time",
          },
          {
            value: "Extremely high",
            label: "Extremely high (>99.999 %)",
          },
          { value: "High", label: "High (>99.9)" },
          {
            value: " Moderate",
            label: " Moderate (>90 %)",
          },
          {
            value: " Not critical",
            label: " Not critical",
          },
        ],
      },
      {
        id: "UserDensity",
        description:
          "Typical number of simultaneously communicating devices within the area of operations",
        inputvalue: "UserDensity",
      },
      {
        id: "DataSecurity",
        description:
          "Data security: How critical the data protection (encryption, integrity, identity, etc.) is?",
        options: [
          {
            value: "encryption",
            label: "encryption",
          },
          {
            value: "integrity",
            label: "integrity",
          },
          { value: "identity", label: "identity" },
        ],
      },
      {
        id: "Isolation",
        description:
          "Isolation: Does the use case require isolation for security reasons. Network Resource allocation:",
        options: [
          {
            value: "Sharing",
            label: "Shared with other use cases/enterprises ",
          },
          {
            value: "Dedicated",
            label: "Dedicated for this use cases",
          },
          {
            value: "Hybrid",
            label: "Hybrid depending on latency and bandwidth",
          },
        ],
      },
      {
        id: "EnergyEfficiency",
        description:
          "Energy efficiency of the devices. Are terminals transmitting actively (active calls / data transmission vs. idle):",
        options: [
          {
            value: "Always",
            label: "Always",
          },
          {
            value: "Often",
            label: "Often",
          },
          { value: "Rarely", label: "Rarely" },
        ],
      },
      {
        id: "TrafficType",
        description: "Traffic type",
        options: [
          {
            value: "Transmitting mostly",
            label: "Transmitting mostly (uplink traffic)",
          },
          {
            value: "Receiving mostly",
            label: "Receiving mostly (downlink traffic)",
          },
          {
            value: "Receiving and transmitting about the same",
            label:
              "Receiving and transmitting about the same (such as voice and video calls)",
          },
          {
            value: "Varying",
            label: "Varying: Bursty traffic patterns (Uplink and downlink)",
          },
        ],
      },
      {
        id: "TypicalDataProfile",
        description: "Typical data profile. Traffic of typical usage mostly: ",
        options: [
          {
            value: "Voice",
            label: "Voice",
          },
          {
            value: "Video",
            label: "Video",
          },
          { value: "Text", label: "Text /messages" },
          { value: " Telematics data", label: "Telematics data" },
        ],
      },
    ],
  },
  {
    attribute: "Enterprise specific infrastructure needs",
    sub_attribute: [
      {
        id: "Features",
        description: "Features",
        options: [
          { value: "Data storage systems", label: "Data storage systems" },
          {
            value: "Cloud computing",
            label: "Cloud computing",
          },
          {
            value: "Edge computing",
            label: "Edge computing",
          },
          {
            value: "Big data analytics",
            label: "Big data analytics",
          },
          {
            value: "ID/asset management",
            label: "ID/asset management",
          },
          {
            value: "Positioning platform",
            label: "Positioning platform",
          },
        ],
      },
    ],
  },
  {
    attribute: "Business",
    sub_attribute: [
      {
        id: "SLA",
        description:
          "Service Level Agreement (SLA) for own infra or outsourced: Is there high reliability required by contract, or is it best-effort basis?",
        options: [
          {
            value: "high reliability",
            label: "high reliability required by contract",
          },
          {
            value: "best-effort basis",
            label: "best-effort basis",
          },
        ],
      },
    ],
  },
  {
    attribute: "Device",
    sub_attribute: [
      {
        id: "DeviceType",
        description: "Type of devices",
        options: [
          { value: "Smartphones", label: "Smartphones" },
          {
            value: "Sensors",
            label: "Sensors",
          },
          { value: "IoT modules", label: "IoT modules" },
          { value: "Special devices", label: "Special devices" },
        ],
      },
      {
        id: "DeviceVelocity",
        description:
          "Identify Mobility patterns for each type of device. Are majority of the type of devices: Moving [typical velocity range of mobiles?",
        inputvalue: "DeviceVelocity",
      },
    ],
  },
];
