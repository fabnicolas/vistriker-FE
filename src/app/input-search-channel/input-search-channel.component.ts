import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchChannelDataService } from '../search-channel-data.service';
import { MdSnackBar } from '@angular/material';


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

  constructor(private snackbar:MdSnackBar, private service_SearchChannelData:SearchChannelDataService) {
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

  autoSubmitOnIdle(selection:string=null){
    let input_search=(!selection) ? this.inputSuggestsController.value : selection;
    if(this.autoSubmitInput) clearTimeout(this.autoSubmitInput);
    this.autoSubmitInput = setTimeout(() => {
      if(input_search) this.service_SearchChannelData.setActualChannelName(input_search);
    }, 1000);
    if(input_search){
      this.snackbar.open("Channel '"+input_search+"' will be loaded as soon as you stop typing (1 sec idle)...", "Close", {duration: 1000});
    }else{
      this.snackbar.dismiss();
    }
  }

}