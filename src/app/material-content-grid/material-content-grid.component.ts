import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

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
    this.route.data.subscribe(
      dataroute => {console.log("ok");this.channel_name=dataroute.channel;}, null, function(){console.log("ok");
        this.route.queryParams.subscribe(params => {
          if(params['channel_name']=='') this.channel_name=params['channel_name'];
        }, null, function(){
          this.http.get(environment.backend_url+'/get_videos/'+this.channel_name)
           .map(response => response.json())
           .subscribe(res => this.arr_videos = res);
        });
    });
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

}
