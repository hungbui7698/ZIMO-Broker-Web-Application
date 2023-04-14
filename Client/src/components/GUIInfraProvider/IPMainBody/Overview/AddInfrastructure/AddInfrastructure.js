import React from "react";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import { Modal, Button } from "react-bootstrap";
import "./AddInfrastructure.css";
import { serverurl } from "../../../../../logik/logik";
const AddInfrastructure = (props) => {
  const [type, setType] = React.useState("Network");
  const resetLatLng = () => {
    props.setSelectedLat();
    props.setSelectedLng();
    props.handleShow();
  };
  const sendInfoToServer = async () => {
    const importData = getAllData();
    try {
      fetch(`${serverurl}/infrastructure`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      }).then(() => {
        props.refresh();
        props.handleClose();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllData = () => {
    var Name = document.getElementById("Name").value;
    var lat = document.getElementById("lat").value;
    var lng = document.getElementById("lng").value;
    var radius = document.getElementById("radius").value;
    var data;
    if (type === "Network") {
      var Availability = document.getElementById("Availability").value;
      var DelayTolerance = document.getElementById("DelayTolerance").value;
      var DC_Availability = document.getElementById("DC_Availability").value;
      var DC_Periodicity = document.getElementById("DC_Periodicity").value;
      var GuaranteedDownlinkThroughput = document.getElementById(
        "GuaranteedDownlinkThroughput"
      ).value;
      var MaximumDownlinkThroughput = document.getElementById(
        "MaximumDownlinkThroughput"
      ).value;
      var MaximumDownlinkThroughputPerUEValue = document.getElementById(
        "MaximumDownlinkThroughputPerUEValue"
      ).value;
      var NetworkSliceEnergyEfficiencyKPI = document.getElementById(
        "NetworkSliceEnergyEfficiencyKPI"
      ).value;
      var GroupCommunicationSupport = document.getElementById(
        "GroupCommunicationSupport"
      ).value;
      var MaximumSupportedPacketSize = document.getElementById(
        "MaximumSupportedPacketSize"
      ).value;
      var MissionCriticalSupport = document.getElementById(
        "MissionCriticalSupport"
      ).value;
      var MissionCriticalCapabilitySupport = document.getElementById(
        "MissionCriticalCapabilitySupport"
      ).value;
      var MissionCriticalServiceSupport = document.getElementById(
        "MissionCriticalServiceSupport"
      ).value;
      var MMTelSupport = document.getElementById("MMTelSupport").value;
      var NBIoTSupport = document.getElementById("NBIoTSupport").value;
      var MaximumNumberOfPDUSessions = document.getElementById(
        "MaximumNumberOfPDUSessions"
      ).value;
      var MaximumNumberOfUEs =
        document.getElementById("MaximumNumberOfUEs").value;
      var PM_Availability = document.getElementById("PM_Availability").value;
      var PM_MonitoringSampleFrequency = document.getElementById(
        "PM_MonitoringSampleFrequency"
      ).value;
      var PP_Availability = document.getElementById("PP_Availability").value;
      var PP_PredictionFrequency = document.getElementById(
        "PP_PredictionFrequency"
      ).value;
      var PS_Availability = document.getElementById("PS_Availability").value;
      var PS_PredictionFrequency = document.getElementById(
        "PS_PredictionFrequency"
      ).value;
      var PS_Accuracy = document.getElementById("PS_Accuracy").value;
      var RootCauseInvestigation = document.getElementById(
        "RootCauseInvestigation"
      ).value;
      var sessionAndServiceContinuitySupport = document.getElementById(
        "sessionAndServiceContinuitySupport"
      ).value;
      var SimultaneousUseClass = document.getElementById(
        "SimultaneousUseClass"
      ).value;
      var a3GPP5QI = document.getElementById("a3GPP5QI").value;
      var ResourceType = document.getElementById("ResourceType").value;
      var PriorityLevel = document.getElementById("PriorityLevel").value;
      var PacketDelayBudget =
        document.getElementById("PacketDelayBudget").value;
      var PacketErrorRate = document.getElementById("PacketErrorRate").value;
      var AveragingWindow = document.getElementById("AveragingWindow").value;
      var MaximumDataBurstVolume = document.getElementById("MaximumDataBurstVolume").value;
      var MaximumPacketLossRate = document.getElementById(
        "MaximumPacketLossRate"
      ).value;
      var SupportForNonIPTraffic = document.getElementById(
        "SupportForNonIPTraffic"
      ).value;
      var SupportedDeviceVelocity = document.getElementById(
        "SupportedDeviceVelocity"
      ).value;
      var Synchronicity_Availability = document.getElementById(
        "Synchronicity_Availability"
      ).value;
      var Synchronicity_Accuracy = document.getElementById(
        "Synchronicity_Accuracy"
      ).value;
      var UEDensity = document.getElementById("UEDensity").value;
      var GuaranteedUplinkThroughput = document.getElementById(
        "GuaranteedUplinkThroughput"
      ).value;
      var MaximumUplinkThroughput = document.getElementById(
        "MaximumUplinkThroughput"
      ).value;
      var MaximumUplinkThroughputPerUEValue = document.getElementById(
        "MaximumUplinkThroughputPerUEValue"
      ).value;
      var UserManagementOpenness = document.getElementById(
        "UserManagementOpenness"
      ).value;
      var V2XCommunicationMode = document.getElementById(
        "V2XCommunicationMode"
      ).value;
      var LatencyFromUPFToApplicationServer = document.getElementById(
        "LatencyFromUPFToApplicationServer"
      ).value;
      var NSSAA = document.getElementById("NSSAA").value;
      var MultimediaPriorityService = document.getElementById(
        "MultimediaPriorityService"
      ).value;
      var MultimediaPriorityServiceCapabilitySupport = document.getElementById(
        "MultimediaPriorityServiceCapabilitySupport"
      ).value;
      var MultimediaPriorityServiceSupport = document.getElementById(
        "MultimediaPriorityServiceSupport"
      ).value;

      data = {
        type: type,
        name: Name,
        provider: props.user,
        GSTAttributes: {
          availability: Availability,
          areaOfService: {
            lat: lat,
            lng: lng,
            radius: radius,
          },
          delayTolerance: DelayTolerance,
          deterministicCommunication: {
            availability: DC_Availability,
            periodicity: DC_Periodicity,
          },
          downlinkThroughputPerNetworkSlice: {
            guaranteedDownlinkthroughput: GuaranteedDownlinkThroughput,
            maximumDownlinkThroughput: MaximumDownlinkThroughput,
          },
          downlinkThroughputPerUE: {
            maximumDownlinkThroughputPerUEValue:
              MaximumDownlinkThroughputPerUEValue,
          },
          energyEfficiency: {
            networkSliceEnergyEfficiencyKPI: NetworkSliceEnergyEfficiencyKPI,
          },
          groupCommunicationSupport: GroupCommunicationSupport,
          maximumSupportedPacketSize: MaximumSupportedPacketSize,
          missionCriticalSupport: {
            missionCriticalSupport: MissionCriticalSupport,
            missionCriticalCapabilitySupport: MissionCriticalCapabilitySupport,
            missionCriticalServiceSupport: MissionCriticalServiceSupport,
          },
          MMTelSupport: MMTelSupport,
          NBIoTSupport: NBIoTSupport,
          maximumNumberOfPDUSessions: MaximumNumberOfPDUSessions,
          maximumNumberOfUEs: MaximumNumberOfUEs,
          performanceMonitoring: {
            availability: PM_Availability,
            monitoringSampleFrequency: PM_MonitoringSampleFrequency,
          },
          performancePrediction: {
            availability: PP_Availability,
            predictionFrequency: PP_PredictionFrequency,
          },
          positioningSupport: {
            availability: PS_Availability,
            predictionFrequency: PS_PredictionFrequency,
            accuracy: PS_Accuracy,
          },
          rootCauseInvestigation: RootCauseInvestigation,
          sessionAndServiceContinuitySupport:
            sessionAndServiceContinuitySupport,
          simultaneousUseClass: SimultaneousUseClass,
          sliceQualityOfService: {
            a3GPP5QI: a3GPP5QI,
            resourceType: ResourceType,
            priorityLevel: PriorityLevel,
            packetDelayBudget: PacketDelayBudget,
            packetErrorRate: PacketErrorRate,
            averagingWindow: AveragingWindow,
            maximumDataBurstVolume: MaximumDataBurstVolume,
            maximumPacketLossRate: MaximumPacketLossRate,
          },
          supportForNonIPTraffic: SupportForNonIPTraffic,
          supportedDeviceVelocity: SupportedDeviceVelocity,
          synchronicity: {
            availability: Synchronicity_Availability,
            accuracy: Synchronicity_Accuracy,
          },
          UEDensity: UEDensity,
          uplinkThroughputPerNetworkSlice: {
            guaranteedUplinkThroughput: GuaranteedUplinkThroughput,
            maximumUplinkThroughput: MaximumUplinkThroughput,
          },
          uplinkThroughputPerUE: {
            maximumUplinkThroughputPerUEValue:
              MaximumUplinkThroughputPerUEValue,
          },
          userManagementOpenness: UserManagementOpenness,
          V2XCommunicationMode: V2XCommunicationMode,
          latencyFromUPFToApplicationServer: LatencyFromUPFToApplicationServer,
          NSSAA: NSSAA,
          multimediaPriorityService: {
            multimediaPriorityService: MultimediaPriorityService,
            multimediaPriorityServiceCapabilitySupport:
              MultimediaPriorityServiceCapabilitySupport,
            multimediaPriorityServiceSupport: MultimediaPriorityServiceSupport,
          },
        },
      };
    }
    if (type === "Cloud") {
      var CPU = document.getElementById("CPU").value;
      var RAM = document.getElementById("RAM").value;
      var Storage = document.getElementById("Storage").value;
      data = {
        type: type,
        name:Name,
        provider: props.user,
        areaOfService: {
          lat: lat,
          lng: lng,
          radius: radius,
        },
        cloudAttributes:{
        CPU: CPU,
        RAM: RAM,
        Storage: Storage,
        }
      };
    }

    return data;
  };
  const Slice_Attribute = [
    {
      attribute_name: "Availability",
      attribute_id: "Availability",
    },
    {
      attribute_name: "Area of Service",
      attribute_id: "AreaOfService",
      sub_attributes: [
        {
          sub_attribute_name: "latitude",
          sub_attribute_id: "lat",
          defaultValue: props.selectedLat,
        },
        {
          sub_attribute_name: "longtitude",
          sub_attribute_id: "lng",
          defaultValue: props.selectedLng,
        },
        { sub_attribute_name: "radius", sub_attribute_id: "radius" },
      ],
    },
    {
      attribute_name: "Delay Tolerance",
      attribute_id: "DelayTolerance",
      optionValue: ["not supported", "supported"],
    },
    {
      attribute_name: "Deterministic Communication",
      attribute_id: "DeterministicCommunication",
      sub_attributes: [
        {
          sub_attribute_name: "Availability",
          sub_attribute_id: "DC_Availability",
          optionValue: ["not supported", "supported"],
        },
        {
          sub_attribute_name: "Periodicity",
          sub_attribute_id: "DC_Periodicity",
        },
      ],
    },
    {
      attribute_name: "Downlink Throughput Per Network Slice",
      attribute_id: "DownlinkThroughputPerNetworkSlice",
      sub_attributes: [
        {
          sub_attribute_name: "Guaranteed downlink throughput",
          sub_attribute_id: "GuaranteedDownlinkThroughput",
        },
        {
          sub_attribute_name: "Maximum downlink throughput",
          sub_attribute_id: "MaximumDownlinkThroughput",
        },
      ],
    },
    {
      attribute_name: "Downlink maximum throughput per UE",
      attribute_id: "DownlinkMaximumThroughputPerUE",
      sub_attributes: [
        {
          sub_attribute_name: "Maximum downlink throughput per UE value",
          sub_attribute_id: "MaximumDownlinkThroughputPerUEValue",
        },
      ],
    },
    {
      attribute_name: "Energy efficiency",
      attribute_id: "EnergyEfficiency",
      sub_attributes: [
        {
          sub_attribute_name: "Network slice energy efficiency KPI",
          sub_attribute_id: "NetworkSliceEnergyEfficiencyKPI",
          optionValue: ["not supported", "supported"],
        },
      ],
    },
    {
      attribute_name: "Group communication support",
      attribute_id: "GroupCommunicationSupport",
      optionValue: [
        "not supported",
        "Single Cell Point to Multipoint (SCPTM)",
        "Broadcast/Multicast",
        "Broadcast/Multicast + SC-PTM",
        "Unicast",
      ],
    },
    {
      attribute_name: "Maximum supported packet size",
      attribute_id: "MaximumSupportedPacketSize",
    },
    {
      attribute_name: "Mission critical support",
      attribute_id: "MissionCriticalSupportx",
      sub_attributes: [
        {
          sub_attribute_name: "Mission critical support",
          sub_attribute_id: "MissionCriticalSupport",
          optionValue: ["not supported", "supported"],
        },
        {
          sub_attribute_name: "Mission-critical capability support",
          sub_attribute_id: "MissionCriticalCapabilitySupport",
          optionValue: [
            "",
            "Inter-user prioritization",
            "Pre-emption",
            "Local control",
          ],
        },
        {
          sub_attribute_name: "Mission-critical service support",
          sub_attribute_id: "MissionCriticalServiceSupport",
          optionValue: ["", "MCPTT", "MCData", "MCVideo", "MC interworking"],
        },
      ],
    },
    {
      attribute_name: "MMTel support",
      attribute_id: "MMTelSupport",
      optionValue: ["not supported", "supported"],
    },
    {
      attribute_name: "NB-IoT Support",
      attribute_id: "NBIoTSupport",
      optionValue: ["not supported", "supported"],
    },
    {
      attribute_name: "Maximum number of PDU sessions",
      attribute_id: "MaximumNumberOfPDUSessions",
    },
    {
      attribute_name: "Maximum number of UEs",
      attribute_id: "MaximumNumberOfUEs",
    },
    {
      attribute_name: "Performance monitoring",
      attribute_id: "PerformanceMonitoring",
      sub_attributes: [
        {
          sub_attribute_name: "Availability",
          sub_attribute_id: "PM_Availability",
        },
        {
          sub_attribute_name: "Monitoring sample frequency",
          sub_attribute_id: "PM_MonitoringSampleFrequency",
          optionValue: ["", "Per second", "Per minute", "Per hour"],
        },
      ],
    },
    {
      attribute_name: "Performance prediction",
      attribute_id: "PerformancePrediction",
      sub_attributes: [
        {
          sub_attribute_name: "Availability",
          sub_attribute_id: "PP_Availability",
          optionValue: [
            "",
            "Throughput",
            "Latency",
            "Service Request Success Rate",
          ],
        },
        {
          sub_attribute_name: "Prediction frequency",
          sub_attribute_id: "PP_PredictionFrequency",
          optionValue: ["", "Per second", "Per minute", "Per hour"],
        },
      ],
    },
    {
      attribute_name: "Positioning support",
      attribute_id: "PositioningSupport",
      sub_attributes: [
        {
          sub_attribute_name: "Availability",
          sub_attribute_id: "PS_Availability",
          optionValue: [
            "",
            "CIDE-CID (LTE and NR)",
            "OTDOA (LTE and NR)",
            "RF fingerprinting",
            "AECID",
            "Hybrid positioning",
            "NET-RTK",
          ],
        },
        {
          sub_attribute_name: "Prediction frequency",
          sub_attribute_id: "PS_PredictionFrequency",
          optionValue: ["", "Per second", "Per minute", "Per hour"],
        },
        {
          sub_attribute_name: "Accuracy",
          sub_attribute_id: "PS_Accuracy",
        },
      ],
    },
    {
      attribute_name: "Root cause investigation",
      attribute_id: "RootCauseInvestigation",
      optionValue: [
        "not supported",
        "Passive investigation",
        "Active investigation",
      ],
    },
    {
      attribute_name: "Session and Service Continuity support",
      attribute_id: "sessionAndServiceContinuitySupport",
      optionValue: ["", "SSC mode 1", "SSC mode 2", "SSC mode 3"],
    },
    {
      attribute_name: "Simultaneous Use Class",
      attribute_id: "SimultaneousUseClass",
      optionValue: [
        "",
        "Can be used simultaneously with any network slice",
        "Can be used simultaneously with any network slices with same SST value but different SD values",
        "Can be used simultaneously with any network slice with the same SD value but different SST value",
        "Cannot be used simultaneously with any another network slice",
        "Operator defined class",
      ],
    },
    {
      attribute_name: "Slice quality of service",
      attribute_id: "SliceQualityOfService",
      sub_attributes: [
        {
          sub_attribute_name: "3GPP 5QI",
          sub_attribute_id: "a3GPP5QI",
        },
        {
          sub_attribute_name: "Resource Type",
          sub_attribute_id: "ResourceType",
          optionValue: ["", "GBR", "Delay critical GBR", "Non-GBR"],
        },
        {
          sub_attribute_name: "Priority Level",
          sub_attribute_id: "PriorityLevel",
        },
        {
          sub_attribute_name: "Packet Delay Budget",
          sub_attribute_id: "PacketDelayBudget",
        },
        {
          sub_attribute_name: "Packet Error Rate",
          sub_attribute_id: "PacketErrorRate",
        },
        {
          sub_attribute_name: "Averaging Window",
          sub_attribute_id: "AveragingWindow",
        },
        {
          sub_attribute_name: "Maximum Data Burst Volume",
          sub_attribute_id: "MaximumDataBurstVolume",
        },
        {
          sub_attribute_name: "Maximum Packet Loss Rate",
          sub_attribute_id: "MaximumPacketLossRate",
        },
      ],
    },
    {
      attribute_name: "Support for non-IP traffic",
      attribute_id: "SupportForNonIPTraffic",
      optionValue: ["not supported", "Supported"],
    },
    {
      attribute_name: "Supported device velocity",
      attribute_id: "SupportedDeviceVelocity",
    },
    {
      attribute_name: "Synchronicity",
      attribute_id: "Synchronicity",
      sub_attributes: [
        {
          sub_attribute_name: "Availability",
          sub_attribute_id: "Synchronicity_Availability",
          optionValue: [
            "Not supported",
            "Between BS and UE",
            "Between BS and UE & UE and UE",
          ],
        },
        {
          sub_attribute_name: "Accuracy",
          sub_attribute_id: "Synchronicity_Accuracy",
        },
      ],
    },
    {
      attribute_name: "UE density",
      attribute_id: "UEDensity",
    },
    {
      attribute_name: "Uplink Throughput Per Network Slice",
      attribute_id: "UplinkThroughputPerNetworkSlice",
      sub_attributes: [
        {
          sub_attribute_name: "Guaranteed uplink throughput",
          sub_attribute_id: "GuaranteedUplinkThroughput",
        },
        {
          sub_attribute_name: "Maximum uplink throughput",
          sub_attribute_id: "MaximumUplinkThroughput",
        },
      ],
    },
    {
      attribute_name: "Uplink maximum throughput per UE",
      attribute_id: "UplinkThroughputPerUE",
      sub_attributes: [
        {
          sub_attribute_name: "Maximum uplink throughput per UE value",
          sub_attribute_id: "MaximumUplinkThroughputPerUEValue",
        },
      ],
    },
    {
      attribute_name: "User management openness",
      attribute_id: "UserManagementOpenness",
      optionValue: ["not supported", "Supported"],
    },
    {
      attribute_name: "V2X communication mode",
      attribute_id: "V2XCommunicationMode",
      optionValue: [
        "not supported",
        "YES-EUTRA",
        "YES- NR",
        "YES -NR and E-UTRA",
      ],
    },
    {
      attribute_name: "Latency from (last) UPF to Application Server",
      attribute_id: "LatencyFromUPFToApplicationServer",
    },
    {
      attribute_name:
        "Network Slice Specific Authentication and Authorization (NSSAA) Required",
      attribute_id: "NSSAA",
      optionValue: ["not supported", "Supported"],
    },
    {
      attribute_name: "Multimedia Priority Service",
      attribute_id: "MultimediaPriorityServicex",
      sub_attributes: [
        {
          sub_attribute_name: "Multimedia Priority Service",
          sub_attribute_id: "MultimediaPriorityService",
          optionValue: ["Non-MPS", "MPS"],
        },
        {
          sub_attribute_name: "Multimedia Priority Service capability support",
          sub_attribute_id: "MultimediaPriorityServiceCapabilitySupport",
          optionValue: ["", "User prioritization", "Pre-emption"],
        },
        {
          sub_attribute_name: "Multimedia Priority Service support",
          sub_attribute_id: "MultimediaPriorityServiceSupport",
          optionValue: [
            "",
            "MPS for MMTel voice",
            "MPS for MMTel video",
            "MPS for Data",
          ],
        },
      ],
    },
  ];

  return (
    <div className="AddInfrastructure">
      <AddCircleOutlineTwoToneIcon
        type="button"
        className="AddButton"
        onClick={resetLatLng}
      />

      <Modal
        scrollable={true}
        show={props.show}
        size="xl"
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Infrastructure's information
            <input id="Name" placeholder="Infra Name"></input>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tbody>
              <tr>
                <td>Type</td>
                <td>
                  <select
                    id="type"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  >
                    <option value="Network">Network</option>
                    <option value="Cloud">Cloud</option>
                  </select>
                </td>
              </tr>
              {type === "Cloud" && (
                <>
                  <tr className="row g-0">
                    <td className="col-3">Area of Service</td>
                    <td className="col-9">
                      <table className="table table-striped">
                        <tbody>
                          <tr className="row g-0">
                            <td className="col-7">Latitude</td>
                            <td className="col-5">
                              <input
                              id="lat"
                                className="col-12"
                                type="number"
                                defaultValue={props.selectedLat}
                              />
                            </td>
                          </tr>
                          <tr className="row g-0">
                            <td className="col-7">Longtitude</td>
                            <td className="col-5">
                              <input id="lng"
                                className="col-12"
                                type="number"
                                defaultValue={props.selectedLng}
                              />
                            </td>
                          </tr>
                          <tr className="row g-0">
                            
                            <td className="col-7">Radius</td>
                            <td className="col-5">
                              <input id="radius" className="col-12" type="number" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>CPU</td>
                    <td>
                      <input id="CPU" type="number" min="1" />
                    </td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>
                      <input id="RAM" type="number" min="1" />
                    </td>
                  </tr>
                  <tr>
                    <td>Storage</td>
                    <td>
                      <input id="Storage" type="number" min="1" />
                    </td>
                  </tr>
                </>
              )}

              {type === "Network" && (
                <>
                  {Slice_Attribute.map((elem) => (
                    <tr className="row g-0" key={elem.attribute_name}>
                      <td className="col-3">{elem.attribute_name}</td>
                      <td className="col-9">
                        <table className="table table-striped">
                          <tbody>
                            {!elem.sub_attributes && (
                              <tr className="row g-0">
                                <td className="col-7"></td>
                                <td className="col-5">
                                  {!elem.optionValue && (
                                    <input
                                      type="number"
                                      className="col-12"
                                      id={elem.attribute_id}
                                      defaultValue={elem.defaultValue}
                                    />
                                  )}
                                  {elem.optionValue && (
                                    <select
                                      className="col-12"
                                      id={elem.attribute_id}
                                    >
                                      {elem.optionValue.map((v_elem) => (
                                        <option value={v_elem} key={v_elem}>
                                          {v_elem}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </td>
                              </tr>
                            )}
                            {elem.sub_attributes &&
                              elem.sub_attributes.map((sub_elem) => (
                                <tr
                                  className="row g-0"
                                  key={sub_elem.sub_attribute_id}
                                >
                                  <td className="col-7">
                                    {sub_elem.sub_attribute_name}
                                  </td>
                                  <td className="col-5">
                                    {sub_elem.optionValue && (
                                      <select
                                        className="col-12"
                                        id={sub_elem.sub_attribute_id}
                                      >
                                        {sub_elem.optionValue.map((v_elem) => (
                                          <option value={v_elem} key={v_elem}>
                                            {v_elem}
                                          </option>
                                        ))}
                                      </select>
                                    )}
                                    {!sub_elem.optionValue && (
                                      <input
                                        className="col-12"
                                        id={sub_elem.sub_attribute_id}
                                        type="number"
                                        defaultValue={sub_elem.defaultValue}
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
                </>
              )}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => sendInfoToServer()}>
            Add Infrastructure
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddInfrastructure;
