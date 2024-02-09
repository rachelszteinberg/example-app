import { PushRules } from '../models/system';
import Utils from './utils';

describe('HomeOverviewComponent', () => {

  it('should getDisplayDate', () => {
    let dob = '2001-01-11';
    expect(Utils.getDisplayDate(dob)).toEqual('Jan 11, 2001');
  });

  it('should fail to getDisplayDate with invalid string', () => {
    let dob = 'dob';
    expect(Utils.getAge(dob)).toEqual('ERR');
  });

  it('should getAge', () => {
    let dob = '2000-01-01';
    jasmine.clock().install();
    var baseTime = new Date(2019, 1, 1);
    jasmine.clock().mockDate(baseTime);
    expect(Utils.getAge(dob)).toEqual('19');
    jasmine.clock().uninstall();
  });

  it('should getAge if upcoming in the year', () => {
    let dob = '2000-11-01';
    jasmine.clock().install();
    var baseTime = new Date(2019, 1, 1);
    jasmine.clock().mockDate(baseTime);
    expect(Utils.getAge(dob)).toEqual('18');
    jasmine.clock().uninstall();
  });

  it('should fail to getAge with invalid string', () => {
    let dob = 'dob';
    jasmine.clock().install();
    var baseTime = new Date(2019, 1, 1);
    jasmine.clock().mockDate(baseTime);
    expect(Utils.getAge(dob)).toEqual('ERR');
    jasmine.clock().uninstall();
  });

  it('should return a string of rules', () => {
    let rules : PushRules = {
      returnToSource: true,
      sourceDevices: ["DeviceA", "DeviceB"],
      "00080018": "exampleUID"
    };
    let expectedStr = "returnToSource=true, sourceDevices=DeviceA,DeviceB, 00080018=exampleUID";
    expect(Utils.getPushRulesString(rules)).toEqual(expectedStr);
  });

});
