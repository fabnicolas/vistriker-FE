import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-material-content-grid',
  templateUrl: './material-content-grid.component.html',
  styleUrls: ['./material-content-grid.component.css'],
  host: {'(window:resize)': 'onResize($event)'}
})
export class MaterialContentGridComponent implements OnInit {
  channel_name : string;

  http: Http;
  route: ActivatedRoute;

  arr_videos: Array<any>;

  numcols: number = 6;

  constructor(http: Http, route: ActivatedRoute){
    this.http=http;
    this.route=route;
    this.handleResponsiveLayout(window.screen.width);
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.loadChannel(data));
    this.route.params.subscribe(params => this.loadChannel(params));
  }

  onResize(event) {
    this.handleResponsiveLayout(event.target.innerWidth);
  }

  handleResponsiveLayout(width){
    if(width < 650)      this.numcols=1;
    else if(width < 750) this.numcols=2;
    else if(width < 950) this.numcols=4;
    else                 this.numcols=6;
  }

  loadChannel(param_loaded){
    let param_channel;
    if(param_loaded.hasOwnProperty('channel'))            param_channel=param_loaded['channel']
    else if(param_loaded.hasOwnProperty('channel_name'))  param_channel=param_loaded['channel_name']
    if(!this.channel_name || this.channel_name != param_channel){
      this.channel_name = param_channel;
      this.http.get(environment.backend_url+'/get_videos/'+this.channel_name)
        .map(response => response.json())
        .subscribe(res => this.arr_videos = res);
    }
  }

}
