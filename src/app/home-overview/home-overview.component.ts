import { Component } from '@angular/core';
import { System } from '../models/system';
import { Patient } from '../models/patient';
import { examplePatients } from '../mockData/example-patients';
import { exampleSystems } from '../mockData/example-systems';
import Utils from '../models/utils';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.css',
})
export class HomeOverviewComponent {
  /**
   * Typically this data would come from services in ngOnInit, but
   * in the interest of time for this example I have saved them in a useable
   * format and directly used the variables here. I also made some methods in utils
   * to help get the data in the right format since it is being used directly.
   */
  systemList: System[] = [];
  currentPatientList: Patient[] = [];
  Utils = Utils;

  constructor() {
    this.systemList = exampleSystems.sort((a, b) =>
      a.aeTitle.localeCompare(b.aeTitle)
    );

    let patientList = examplePatients.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );

    this.currentPatientList = patientList.filter((p) => {
      return p.studyInfo.studyTimeEnd === undefined;
    });
  }

  /**
   * If I were to do pagination, I would look at the element size
   * and the row height, thus finding how many rows are on the screen
   * per scroll. If this was server-side pagination, once the bottom
   * of the displayed table is shown (known via number of rolls),
   * I would make a server call for the next batch, and display that instead.
   * Since this was a quick POC for UI/UX, I decided not to implement a
   * full mock server, but in production this would help with showing
   * a lot of data without having the user wait for all the data to load.
   */
  onScroll() {
    console.log('scroll event logged');
  }
}
