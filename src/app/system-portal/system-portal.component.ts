import { Component } from '@angular/core';
import { PushRules, System } from '../models/system';
import { exampleSystems } from '../mockData/example-systems';
import Utils from '../models/utils';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-system-portal',
  templateUrl: './system-portal.component.html',
  styleUrl: './system-portal.component.css',
})
export class SystemPortalComponent {
  systemList: System[] = [];
  Utils = Utils;

  fb : FormBuilder;
  rulesForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.systemList = exampleSystems.sort((a, b) =>
      a.aeTitle.localeCompare(b.aeTitle)
    );

    this.fb = formBuilder;
    this.rulesForm = this.fb.group({
      rules: this.fb.array([this.fb.group({key:'', value:''})])
    })
  }

  isSystemSelected(system: System, currentRules: PushRules) {
    return currentRules.sourceDevices?.includes(system.aeTitle);
  }

  toggleOn(system: System) {
    return system.pushRules.returnToSource === true;
  }

  get rules() {
    return this.rulesForm.get('rules') as FormArray;
  }

  addRule() {
    this.rules.push(this.fb.group({value:''}));
  }

  deleteRule(index: number) {
    this.rules.removeAt(index);
  }
}
