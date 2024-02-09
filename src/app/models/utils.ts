import { Patient, ScanInformation } from "./patient";
import { PushRules, System } from "./system";

export default class Utils {
    
  /**
   *
   * @param dateStr String of date of birth in YYYY-MM-DD format
   * @returns String of date of birth in Mmm DD, YYYY format
   */
  static getDisplayDate(dateStr: string): string {
    if (new Date(dateStr)) {
      return new Date(dateStr).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      });
    } else {
      return 'ERR';
    }
  }

  /**
   *
   * @param dateStr String of date of birth in YYYY-MM-DD format
   * @returns string of age
   */
  static getAge(dateStr: string): string {
    var today = new Date();
    var birthDate = new Date(dateStr);
    const validDateInput =
      birthDate instanceof Date && !isNaN(birthDate.valueOf());
    if (validDateInput) {
      var age = today.getFullYear() - birthDate.getFullYear();
      var monthDiff = today.getMonth() - birthDate.getMonth();
      var birthdayPast = today.getDate() < birthDate.getDate();
      if (monthDiff < 0 || (monthDiff === 0 && birthdayPast)) {
        age--;
      }
      return String(age);
    } else {
      return 'ERR';
    }
  }

  /**
   *
   * @param rules A list of rules to determine where to send completed studies
   * @returns A string list to display on the UI table
   */
  static getPushRulesString(rules: PushRules): string {
    const stringArr: string[] = [];
    let keyArr = this.getRuleKeys(rules);
    if (keyArr.length > 0) {
      for (const key of keyArr) {
        let value: any = rules[key];
        let ruleStr = key + '=' + value.toString();
        stringArr.push(ruleStr);
      }
    }
    return stringArr.join(', ');
  }

  static getRuleKeys(rules: PushRules){
    return Object.keys(rules);
  }


  /**
   * NOTE: Since this UI will ONLY be using hard-coded mock data,
   * the results here have also been harded
   */
  static getTimeRemaining(studyInfo: ScanInformation): string {
    //const startTime = new Date(studyInfo.studyTimeStart);
    // const currentTime =  new Date();
    const totalTime = Number(studyInfo.scanLength);
    const elapsedTimeMin = Math.round(totalTime / 3.14);
    const remainingMin = totalTime - elapsedTimeMin;
    console.log('totalTime', totalTime);
    console.log('elapsedTimeMin', elapsedTimeMin);
    console.log('remainingMin', remainingMin);

    return String(remainingMin);
  }

  static showWarning(patient: Patient, systemList: System[]) {
    let systemAE = patient.studyInfo.sourceAE;
    let system: System = systemList.filter((sys) => {
      return systemAE === sys.aeTitle;
    })[0];
    if (system && system.warnings && system.warnings.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
