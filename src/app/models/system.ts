export interface System {
  id?: number;
  aeTitle: string;
  manufacturer: string;
  hardwareVersion: string;
  softwareVersion: string;
  status: SystemStatus;
  warnings?: string[];
  pushRules: PushRules;
}

export interface PushRules {
  [key: string]: any;
  returnToSource?: boolean;
  sourceDevices?: string[];
}

export enum SystemStatus {
  Ready = 'Ready',
  InProgress = 'In Progress',
  Offline = 'Offline',
}
