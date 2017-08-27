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
    Observable.combineLatest(      
      this.route.data,
      this.route.params,
      (data, queryParams) => ({data, queryParams})
    ).subscribe(provider => {
      console.log(provider);
       if(provider.queryParams['channel_name'] != undefined) this.channel_name = provider.queryParams['channel_name'];
       else                                                  this.channel_name = provider.data['channel'];
       this.http.get(environment.backend_url+'/get_videos/'+this.channel_name)
       .map(response => response.json())
         .subscribe(res => this.arr_videos = res);
      }
    )
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
