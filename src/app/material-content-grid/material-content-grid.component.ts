import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-material-content-grid',
  templateUrl: './material-content-grid.component.html',
  styleUrls: ['./material-content-grid.component.css'],
  host: {'(window:resize)': 'onResize($event)'}
})
export class MaterialContentGridComponent implements OnInit {
  @Input('channel') channel_name : string;
  private http: Http;
  private route: ActivatedRoute;

  arr_videos: Array<any>;

  numcols: number = 6;

  constructor(http: Http, route: ActivatedRoute){
    this.http=http;
    this.route=route;
    this.handleResponsiveLayout(window.screen.width);
  }

  ngOnInit() {
    this.route.data.subscribe(
      dataroute => {
       this.http.get('http://localhost:8200/get_videos/'+dataroute.channel)
        .map(response => response.json())
        .subscribe(res => this.arr_videos = res);
      }
    );
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
