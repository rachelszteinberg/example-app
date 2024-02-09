import { Patient } from "../models/patient";

export const examplePatients: Patient[] = [
  {
    firstName: "Sarah",
    lastName: "Williams",
    dob: "1988-12-03",
    pronouns: "she/her",
    sex: "F",
    gender: "Female",
    admittedDT: "2024-02-08T08:15:00",
    referredPhysician: "Dr. Davis",
    studyInfo: {
      studyTimeStart: "2024-02-08T08:45:00",
      sourceAE: "SystemB",
      destinationAE: "PACS",
      scanType: "Ultrasound",
      scanLength: "75",
      algo: "Enhanced imaging algorithm"
    }
  },
  {
    firstName: "David",
    lastName: "Lee",
    dob: "1990-07-18",
    sex: "M",
    gender: "Male",
    admittedDT: "2024-02-07T11:20:00",
    referredPhysician: "Dr. Johnson",
    studyInfo: {
      studyTimeStart: "2024-02-07T11:50:00",
      studyTimeEnd: "2024-02-07T13:15:00",
      studyUID: "1234-abcd-5678-efgh",
      sourceAE: "SystemE",
      destinationAE: "PACS",
      scanType: "MRI",
      scanLength: "85"
    }
  },
  {
    firstName: "Amanda",
    lastName: "Davis",
    dob: "1972-09-25",
    pronouns: "she/her",
    sex: "F",
    gender: "Female",
    admittedDT: "2024-02-06T13:45:00",
    referredPhysician: "Dr. Johnson",
    studyInfo: {
      studyTimeStart: "2024-02-06T14:15:00",
      studyTimeEnd: "2024-02-06T15:30:00",
      studyUID: "5678-efgh-1234-abcd",
      sourceAE: "SystemF",
      destinationAE: "PACS",
      scanType: "CT",
      scanLength: "75"
    }
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    dob: "1985-05-28",
    sex: "M",
    gender: "Male",
    admittedDT: "2024-02-05T09:00:00",
    referredPhysician: "Dr. Williams",
    studyInfo: {
      studyTimeStart: "2024-02-05T09:30:00",
      studyTimeEnd: "2024-02-05T10:45:00",
      studyUID: "1234-efgh-1234-abcd",
      sourceAE: "SystemC",
      destinationAE: "PACS",
      scanType: "X-ray",
      scanLength: "75"
    }
  },
  {
    firstName: "Emma",
    lastName: "Miller",
    dob: "1978-11-12",
    sex: "F",
    gender: "Female",
    admittedDT: "2024-02-04T10:10:00",
    referredPhysician: "Dr. Brown",
    studyInfo: {
      studyTimeStart: "2024-02-04T10:40:00",
      sourceAE: "SystemD",
      destinationAE: "PACS",
      scanType: "MRI",
      scanLength: "80"
    }
  }
];
