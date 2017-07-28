import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-material-content-grid',
  templateUrl: './material-content-grid.component.html',
  styleUrls: ['./material-content-grid.component.css']
})
export class MaterialContentGridComponent implements OnInit {
  arr_videos: Array<any>;

  constructor(private http: Http){
    this.http.get('http://localhost:8200/get_sample_videos')
      .map(response => response.json())
      .subscribe(res => this.arr_videos = res);
  }

  ngOnInit() {
  }

}
