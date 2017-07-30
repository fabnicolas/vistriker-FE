import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-material-content-grid',
  templateUrl: './material-content-grid.component.html',
  styleUrls: ['./material-content-grid.component.css'],
  host: {'(window:resize)': 'onResize($event)'}
})
export class MaterialContentGridComponent implements OnInit {
  arr_videos: Array<any>;

  numcols: number = 6;

  constructor(private http: Http){
    this.http.get('http://localhost:8200/get_videos/NoCopyrightSounds')
      .map(response => response.json())
      .subscribe(res => this.arr_videos = res);
    this.handleResponsiveLayout(window.screen.width);
  }

  ngOnInit() {
  }

  onResize(event) {
    this.handleResponsiveLayout(event.target.innerWidth);
  }

  handleResponsiveLayout(width){
    if(width < 750)      this.numcols=2;
    else if(width < 950) this.numcols=4;
    else                 this.numcols=6;
  }

}
