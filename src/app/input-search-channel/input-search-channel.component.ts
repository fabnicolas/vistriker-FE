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
  inputSuggestsController: FormControl;
  filteredSuggests: any;
  autoSubmitInput: any;

  default_channel_list = [
    'Zeb89', 'ZombieBest', 'Quei due sul Server', 'Quei due sul Server 2', 'Parliamo di Videogiochi',
    'Yamato Animation', 'NoCopyrightSounds', 'SamuX', 'Pyrocynical'
  ];

  constructor() {
    this.inputSuggestsController = new FormControl();
    this.filteredSuggests = this.inputSuggestsController.valueChanges
        .startWith(null)
        .map(name => this.filterSuggests(name));
    this.inputSuggestsController.setValue(null);
  }

  filterSuggests(val: string) {
    return val ? this.default_channel_list.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.default_channel_list;
  }

  autoSubmitOnIdle(){
    console.log("Invoked NOW: "+this.inputSuggestsController.value);
    if(this.autoSubmitInput) clearTimeout(this.autoSubmitInput);
    this.autoSubmitInput = setTimeout(() => {
      console.log("Invoked later: "+this.inputSuggestsController.value);
    }, 2000);
  }

}