import { System, SystemStatus } from "../models/system";

export const exampleSystems: System[] = [
  {
    id: 1,
    aeTitle: "SystemA",
    manufacturer: "ABC Electronics",
    hardwareVersion: "V1.2",
    softwareVersion: "V3.1",
    status: SystemStatus.Ready,
    pushRules: {
      returnToSource: true,
      sourceDevices: ["SystemA", "SystemB"],
      "00080018": "abcd-1234"
    }
  },
  {
    id: 2,    
    aeTitle: "SystemB",
    manufacturer: "XYZ Technologies",
    hardwareVersion: "V2.0",
    softwareVersion: "V2.5",
    status: SystemStatus.InProgress,
    warnings: ["Low battery"],
    pushRules: {
      returnToSource: false
    }
  },
  {
    id: 3,
    aeTitle: "SystemC",
    manufacturer: "DEF Systems",
    hardwareVersion: "V1.0",
    softwareVersion: "V1.0",
    status: SystemStatus.Offline,
    pushRules: {
      returnToSource: true,
      sourceDevices: ["SystemC"]
    }
  },
  {
    id: 4,
    aeTitle: "SystemD",
    manufacturer: "GHI Solutions",
    hardwareVersion: "V2.1",
    softwareVersion: "V4.0",
    status: SystemStatus.Ready,
    pushRules: {
      returnToSource: false
    }
  },
  {
    id: 5,
    aeTitle: "SystemE",
    manufacturer: "LMN Technologies",
    hardwareVersion: "V1.5",
    softwareVersion: "V3.2",
    status: SystemStatus.Ready,
    pushRules: {
      returnToSource: true,
      sourceDevices: ["SystemD"]
    }
  },
  {
    id: 6,
    aeTitle: "SystemF",
    manufacturer: "JKL Innovations",
    hardwareVersion: "V3.0",
    softwareVersion: "V2.7",
    status: SystemStatus.InProgress,
    warnings: ["Overheating"],
    pushRules: {
      returnToSource: true,
      sourceDevices: ["SystemE", "SystemF"]
    }
  }
];

