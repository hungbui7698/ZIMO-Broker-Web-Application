import React from "react";
import { Button } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import "./InfrastructureInformation.css";
import { serverurl } from "../../../../../logik/logik";
const InfrastructureInformation = (props) => {
  const Slice_Attribute = props.selectedInfra &&
    props.selectedInfra.type === "Network" && [
      {
        attribute_name: "Availability",
        attribute_id: "Availability",
        value: props.selectedInfra.GSTAttributes.availability,
      },
      {
        attribute_name: "Area of Service",
        attribute_id: "AreaOfService",
        sub_attributes: [
          {
            sub_attribute_name: "latitude",
            sub_attribute_id: "lat",
            defaultValue: props.selectedLat,
            value: props.selectedInfra.GSTAttributes.areaOfService.lat,
          },
          {
            sub_attribute_name: "longtitude",
            sub_attribute_id: "lng",
            defaultValue: props.selectedLng,
            value: props.selectedInfra.GSTAttributes.areaOfService.lng,
          },
          {
            sub_attribute_name: "radius",
            sub_attribute_id: "radius",
            value: props.selectedInfra.GSTAttributes.areaOfService.radius,
          },
        ],
      },
      {
        attribute_name: "Delay Tolerance",
        attribute_id: "DelayTolerance",
        value: props.selectedInfra.GSTAttributes.delayTolerance,
        optionValue: ["not supported", "supported"],
      },
      {
        attribute_name: "Deterministic Communication",
        attribute_id: "DeterministicCommunication",
        sub_attributes: [
          {
            sub_attribute_name: "Availability",
            sub_attribute_id: "DC_Availability",
            value:
              props.selectedInfra.GSTAttributes.deterministicCommunication
                .availability,
            optionValue: ["not supported", "supported"],
          },
          {
            sub_attribute_name: "Periodicity",
            sub_attribute_id: "DC_Periodicity",
            value:
              props.selectedInfra.GSTAttributes.deterministicCommunication
                .periodicity,
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
            value:
              props.selectedInfra.GSTAttributes
                .downlinkThroughputPerNetworkSlice.guaranteedDownlinkthroughput,
          },
          {
            sub_attribute_name: "Maximum downlink throughput",
            sub_attribute_id: "MaximumDownlinkThroughput",
            value:
              props.selectedInfra.GSTAttributes
                .downlinkThroughputPerNetworkSlice.maximumDownlinkThroughput,
          },
        ],
      },
      {
        attribute_name: "Downlink throughput per UE",
        attribute_id: "DownlinkThroughputPerUE",
        sub_attributes: [
          {
            sub_attribute_name: "Maximum downlink throughput per UE value",
            sub_attribute_id: "MaximumDownlinkThroughputPerUEValue",
            value:
              props.selectedInfra.GSTAttributes.downlinkThroughputPerUE
                .maximumDownlinkThroughputPerUEValue,
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
            value:
              props.selectedInfra.GSTAttributes.energyEfficiency
                .networkSliceEnergyEfficiencyKPI,
            optionValue: ["not supported", "supported"],
          },
        ],
      },
      {
        attribute_name: "Group communication support",
        attribute_id: "GroupCommunicationSupport",
        value: props.selectedInfra.GSTAttributes.groupCommunicationSupport,
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
        value: props.selectedInfra.GSTAttributes.maximumSupportedPacketSize,
      },
      {
        attribute_name: "Mission critical support",
        attribute_id: "MissionCriticalSupportx",
        sub_attributes: [
          {
            sub_attribute_name: "Mission critical support",
            value:
              props.selectedInfra.GSTAttributes.missionCriticalSupport
                .missionCriticalSupport,
            sub_attribute_id: "MissionCriticalSupport",
            optionValue: ["not supported", "supported"],
          },
          {
            sub_attribute_name: "Mission-critical capability support",
            sub_attribute_id: "MissionCriticalCapabilitySupport",
            value:
              props.selectedInfra.GSTAttributes.missionCriticalSupport
                .missionCriticalCapabilitySupport,
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
            value:
              props.selectedInfra.GSTAttributes.missionCriticalSupport
                .missionCriticalServiceSupport,
            optionValue: ["", "MCPTT", "MCData", "MCVideo", "MC interworking"],
          },
        ],
      },
      {
        attribute_name: "MMTel support",
        attribute_id: "MMTelSupport",
        value: props.selectedInfra.GSTAttributes.MMTelSupport,
        optionValue: ["not supported", "supported"],
      },
      {
        attribute_name: "NB-IoT Support",
        attribute_id: "NBIoTSupport",
        value: props.selectedInfra.GSTAttributes.NBIoTSupport,
        optionValue: ["not supported", "supported"],
      },
      {
        attribute_name: "Maximum number of PDU sessions",
        attribute_id: "MaximumNumberOfPDUSessions",
        value: props.selectedInfra.GSTAttributes.maximumNumberOfPDUSessions,
      },
      {
        attribute_name: "Maximum number of UEs",
        attribute_id: "MaximumNumberOfUEs",
        value: props.selectedInfra.GSTAttributes.maximumNumberOfUEs,
      },
      {
        attribute_name: "Performance monitoring",
        attribute_id: "PerformanceMonitoring",
        sub_attributes: [
          {
            sub_attribute_name: "Availability",
            sub_attribute_id: "PM_Availability",
            value:
              props.selectedInfra.GSTAttributes.performanceMonitoring
                .availability,
          },
          {
            sub_attribute_name: "Monitoring sample frequency",
            sub_attribute_id: "PM_MonitoringSampleFrequency",
            value:
              props.selectedInfra.GSTAttributes.performanceMonitoring
                .monitoringSampleFrequency,
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
            value:
              props.selectedInfra.GSTAttributes.performancePrediction
                .availability,
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
            value:
              props.selectedInfra.GSTAttributes.performancePrediction
                .predictionFrequency,
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
            value:
              props.selectedInfra.GSTAttributes.positioningSupport.availability,
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
            value:
              props.selectedInfra.GSTAttributes.positioningSupport
                .predictionFrequency,
            optionValue: ["", "Per second", "Per minute", "Per hour"],
          },
          {
            sub_attribute_name: "Accuracy",
            sub_attribute_id: "PS_Accuracy",
            value:
              props.selectedInfra.GSTAttributes.positioningSupport.accuracy,
          },
        ],
      },
      {
        attribute_name: "Root cause investigation",
        attribute_id: "RootCauseInvestigation",
        value: props.selectedInfra.GSTAttributes.rootCauseInvestigation,
        optionValue: [
          "not supported",
          "Passive investigation",
          "Active investigation",
        ],
      },
      {
        attribute_name: "Session and Service Continuity support",
        attribute_id: "sessionAndServiceContinuitySupport",
        value:
          props.selectedInfra.GSTAttributes.sessionAndServiceContinuitySupport,
        optionValue: ["", "SSC mode 1", "SSC mode 2", "SSC mode 3"],
      },
      {
        attribute_name: "Simultaneous Use Class",
        attribute_id: "SimultaneousUseClass",
        value: props.selectedInfra.GSTAttributes.simultaneousUseClass,
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
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService.a3GPP5QI,
          },
          {
            sub_attribute_name: "Resource Type",
            sub_attribute_id: "ResourceType",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .resourceType,
            optionValue: ["", "GBR", "Delay critical GBR", "Non-GBR"],
          },
          {
            sub_attribute_name: "Priority Level",
            sub_attribute_id: "PriorityLevel",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .priorityLevel,
          },
          {
            sub_attribute_name: "Packet Delay Budget",
            sub_attribute_id: "PacketDelayBudget",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .packetDelayBudget,
          },
          {
            sub_attribute_name: "Packet Error Rate",
            sub_attribute_id: "PacketErrorRate",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .packetErrorRate,
          },
          {
            sub_attribute_name: "Averaging Window",
            sub_attribute_id: "AveragingWindow",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .averagingWindow,
          },
          {
            sub_attribute_name: "Maximum Data Burst Volume",
            sub_attribute_id: "MaximumDataBurstVolume",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .maximumDataBurstVolume,
          },
          {
            sub_attribute_name: "Maximum Packet Loss Rate",
            sub_attribute_id: "MaximumPacketLossRate",
            value:
              props.selectedInfra.GSTAttributes.sliceQualityOfService
                .maximumPacketLossRate,
          },
        ],
      },
      {
        attribute_name: "Support for non-IP traffic",
        attribute_id: "SupportForNonIPTraffic",
        value: props.selectedInfra.GSTAttributes.supportForNonIPTraffic,
        optionValue: ["not supported", "Supported"],
      },
      {
        attribute_name: "Supported device velocity",
        attribute_id: "SupportedDeviceVelocity",
        value: props.selectedInfra.GSTAttributes.supportedDeviceVelocity,
      },
      {
        attribute_name: "Synchronicity",
        attribute_id: "Synchronicity",
        sub_attributes: [
          {
            sub_attribute_name: "Availability",
            sub_attribute_id: "Synchronicity_Availability",
            value: props.selectedInfra.GSTAttributes.synchronicity.availability,
            optionValue: [
              "Not supported",
              "Between BS and UE",
              "Between BS and UE & UE and UE",
            ],
          },
          {
            sub_attribute_name: "Accuracy",
            sub_attribute_id: "Synchronicity_Accuracy",
            value: props.selectedInfra.GSTAttributes.synchronicity.accuracy,
          },
        ],
      },
      {
        attribute_name: "UE density",
        attribute_id: "UEDensity",
        value: props.selectedInfra.GSTAttributes.UEDensity,
      },
      {
        attribute_name: "Uplink Throughput Per Network Slice",
        attribute_id: "UplinkThroughputPerNetworkSlice",
        sub_attributes: [
          {
            sub_attribute_name: "Guaranteed uplink throughput",
            sub_attribute_id: "GuaranteedUplinkThroughput",
            value:
              props.selectedInfra.GSTAttributes.uplinkThroughputPerNetworkSlice
                .guaranteedUplinkThroughput,
          },
          {
            sub_attribute_name: "Maximum uplink throughput",
            sub_attribute_id: "MaximumUplinkThroughput",
            value:
              props.selectedInfra.GSTAttributes.uplinkThroughputPerNetworkSlice
                .maximumUplinkThroughput,
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
            value:
              props.selectedInfra.GSTAttributes.uplinkThroughputPerUE
                .maximumUplinkThroughputPerUEValue,
          },
        ],
      },
      {
        attribute_name: "User management openness",
        attribute_id: "UserManagementOpenness",
        value: props.selectedInfra.GSTAttributes.userManagementOpenness,
        optionValue: ["not supported", "Supported"],
      },
      {
        attribute_name: "V2X communication mode",
        attribute_id: "V2XCommunicationMode",
        value: props.selectedInfra.GSTAttributes.V2XCommunicationMode,
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
        value:
          props.selectedInfra.GSTAttributes.latencyFromUPFToApplicationServer,
      },
      {
        attribute_name:
          "Network Slice Specific Authentication and Authorization (NSSAA) Required",
        attribute_id: "NSSAA",
        value: props.selectedInfra.GSTAttributes.NSSAA,
        optionValue: ["not supported", "Supported"],
      },
      {
        attribute_name: "Multimedia Priority Service",
        attribute_id: "MultimediaPriorityServicex",
        sub_attributes: [
          {
            sub_attribute_name: "Multimedia Priority Service",
            sub_attribute_id: "MultimediaPriorityService",
            value:
              props.selectedInfra.GSTAttributes.multimediaPriorityService
                .multimediaPriorityService,
            optionValue: ["Non-MPS", "MPS"],
          },
          {
            sub_attribute_name:
              "Multimedia Priority Service capability support",
            sub_attribute_id: "MultimediaPriorityServiceCapabilitySupport",
            value:
              props.selectedInfra.GSTAttributes.multimediaPriorityService
                .multimediaPriorityServiceCapabilitySupport,
            optionValue: ["", "User prioritization", "Pre-emption"],
          },
          {
            sub_attribute_name: "Multimedia Priority Service support",
            sub_attribute_id: "MultimediaPriorityServiceSupport",
            value:
              props.selectedInfra.GSTAttributes.multimediaPriorityService
                .multimediaPriorityServiceSupport,
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

  const deleteFlavour = (id) => {
    fetch(`${serverurl}/infrastructure?id=${id}`, {
      method: "DELETE",
    })
      .then(props.setSelectedInfra(null))
      .then(props.refresh());
  };
  const sendInfoToServer = async () => {
    const importData = getEditedData();
    try {
      fetch(`${serverurl}/infrastructure?id=${props.selectedInfra._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      }).then(() => {
        props.setEdit(false);
        props.setSelectedInfra(null);
        props.refresh();
      });
    } catch (error) {
      console.log(props.selectedInfra);
    }
  };
  const getEditedData = () => {
    var Name = document.getElementById("Name").value;
    var lat = document.getElementById("lat").value;
    var lng = document.getElementById("lng").value;
    var radius = document.getElementById("radius").value;
    var data;
    if (props.selectedInfra.type === "Network") {
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
      var MaximumDataBurstVolume = document.getElementById(
        "MaximumDataBurstVolume"
      ).value;
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
        type: props.selectedInfra.type,
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
    if (props.selectedInfra.type === "Cloud") {
      var CPU = document.getElementById("CPU").value;
      var RAM = document.getElementById("RAM").value;
      var Storage = document.getElementById("Storage").value;
      data = {
        name: Name,
        type: props.selectedInfra.type,
        provider: props.user,
        areaOfService: {
          lat: lat,
          lng: lng,
          radius: radius,
        },
        cloudAttributes: {
          CPU: CPU,
          RAM: RAM,
          Storage: Storage,
        },
      };
    }

    return data;
  };

  return (
    <div className="InfrastructureInformation">
      {!props.selectedInfra && <h2>Network/Cloud Details</h2>}
      {!props.selectedInfra && <h5>Select an infrastructure to see detail</h5>}
      {props.selectedInfra && (
        <h2>
          {props.selectedInfra.type} details:
          <SettingsTwoToneIcon
            className="button"
            type="button"
            onClick={() => props.setEdit(!props.edit)}
          />
          <DeleteIcon
            className="button"
            type="button"
            onClick={() => deleteFlavour(props.selectedInfra._id)}
          ></DeleteIcon>
        </h2>
      )}
      <div className="table-scroll">
        <table className="table">
          <tbody>
            {props.selectedInfra &&<tr className="row g-0">
              <td className="col-3">Name</td>
              {!props.edit && (
                <td className="col-9">{props.selectedInfra.name}</td>
              )}
              {props.edit&& (
                <td className="col-9">
                  <input
                    type="text"
                    className="col-12"
                    id="Name"
                    defaultValue={props.selectedInfra.name}
                  />
                </td>
              )}
            </tr>}
            {props.selectedInfra && props.selectedInfra.type === "Network" && (
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
                                {!props.edit && elem.value}
                                {props.edit && !elem.optionValue && (
                                  <input
                                    type="number"
                                    className="col-12"
                                    id={elem.attribute_id}
                                    defaultValue={elem.value}
                                  />
                                )}
                                {props.edit && elem.optionValue && (
                                  <select
                                    defaultValue={elem.value}
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
                                  {!props.edit && sub_elem.value}
                                  {sub_elem.optionValue && props.edit && (
                                    <select
                                      className="col-12"
                                      id={sub_elem.sub_attribute_id}
                                      defaultValue={sub_elem.value}
                                    >
                                      {sub_elem.optionValue.map((v_elem) => (
                                        <option value={v_elem} key={v_elem}>
                                          {v_elem}
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                  {!sub_elem.optionValue && props.edit && (
                                    <input
                                      className="col-12"
                                      id={sub_elem.sub_attribute_id}
                                      type="number"
                                      defaultValue={sub_elem.value}
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

            {props.selectedInfra && props.selectedInfra.type === "Cloud" && (
              <>
                <tr className="row g-0">
                  <td className="col-3">Area of Service</td>
                  <td className="col-9">
                    <table className="table table-striped">
                      <tbody>
                        <tr className="row g-0">
                          <td className="col-7">Latitude</td>
                          <td className="col-5">
                            {!props.edit &&
                              props.selectedInfra.areaOfService.lat}
                            {props.edit && (
                              <input
                                className="col-12"
                                id="lat"
                                type="number"
                                defaultValue={
                                  props.selectedInfra.areaOfService.lat
                                }
                              />
                            )}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col-7">Longtitude</td>
                          <td className="col-5">
                            {!props.edit &&
                              props.selectedInfra.areaOfService.lng}
                            {props.edit && (
                              <input
                                className="col-12"
                                id="lng"
                                type="number"
                                defaultValue={
                                  props.selectedInfra.areaOfService.lng
                                }
                              />
                            )}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col-7">Radius</td>
                          <td className="col-5">
                            {!props.edit &&
                              props.selectedInfra.areaOfService.radius}
                            {props.edit && (
                              <input
                                className="col-12"
                                id="radius"
                                type="number"
                                defaultValue={
                                  props.selectedInfra.areaOfService.radius
                                }
                              />
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-3">Cloud Attributes</td>
                  <td className="col-9">
                    <table className="table table-striped">
                      <tbody>
                        <tr className="row g-0">
                          <td className="col-7">CPU</td>
                          <td className="col-5">
                            {!props.edit &&
                              props.selectedInfra.cloudAttributes.CPU}
                            {props.edit && (
                              <input
                                className="col-12"
                                id="CPU"
                                type="number"
                                defaultValue={
                                  props.selectedInfra.cloudAttributes.CPU
                                }
                              />
                            )}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col-7">RAM</td>
                          <td className="col-5">
                            {!props.edit &&
                              props.selectedInfra.cloudAttributes.RAM}
                            {props.edit && (
                              <input
                                className="col-12"
                                id="RAM"
                                type="number"
                                defaultValue={
                                  props.selectedInfra.cloudAttributes.RAM
                                }
                              />
                            )}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col-7">Storage</td>
                          <td className="col-5">
                            {!props.edit &&
                              props.selectedInfra.cloudAttributes.Storage}
                            {props.edit && (
                              <input
                                className="col-12"
                                id="Storage"
                                type="number"
                                defaultValue={
                                  props.selectedInfra.cloudAttributes.Storage
                                }
                              />
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        {props.edit && (
          <>
            <Button
              variant="primary "
              className="buttonright"
              onClick={sendInfoToServer}
            >
              Update
            </Button>
            <Button
              variant="secondary "
              className="buttonright"
              onClick={() => props.setEdit(false)}
            >
              Close
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default InfrastructureInformation;
