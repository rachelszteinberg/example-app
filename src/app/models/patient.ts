export interface Patient {
  firstName: string;
  lastName: string;
  dob: string;
  pronouns?: string;
  sex: string;
  gender: string;
  admittedDT?: string;
  referredPhysician?: string;
  studyInfo : ScanInformation;

}

export interface ScanInformation {
  studyTimeStart: string;
  studyTimeEnd?: string;
  sourceAE: string;
  destinationAE: string;
  scanType: string;
  scanLength: string;
  studyUID?: string;
  algo?: string; 
}
