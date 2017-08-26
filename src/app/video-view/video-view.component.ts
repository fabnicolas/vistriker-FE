import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  private route: ActivatedRoute;
  video_id: string;

  getVideoUrl(){
    return "https://www.youtube.com/embed/"+this.video_id+"?rel=1&loop=1&autoplay=1"+
           "&showinfo=0&controls=1&autohide=1&playlist="+this.video_id;
  }

  constructor(route: ActivatedRoute) {this.route=route;}

  ngOnInit() {
    this.route.queryParams.subscribe(paramsroute => this.video_id=paramsroute['v']);
  }

}
