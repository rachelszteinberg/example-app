import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { examplePatients } from '../mockData/example-patients';
import Utils from '../models/utils';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrl: './patient-page.component.css',
})
export class PatientPageComponent {
  patientList: Patient[] = [];
  Utils = Utils;

  constructor() {
    this.patientList = examplePatients.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
  }

}
