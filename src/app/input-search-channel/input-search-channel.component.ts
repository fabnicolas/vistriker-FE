import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-input-search-channel',
  templateUrl: './input-search-channel.component.html',
  styleUrls: ['./input-search-channel.component.css']
})
export class InputSearchChannelComponent {
  stateCtrl: FormControl;
  filteredStates: any;

  states = [
    'Zeb89', 'ZombieBest', 'Quei due sul Server', 'Quei due sul Server 2', 'Parliamo di Videogiochi',
    'Yamato Animation', 'NoCopyrightSounds', 'SamuX', 'Pyrocynical'
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
    this.stateCtrl.setValue(null);
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
  }

}