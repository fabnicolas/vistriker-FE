import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import * as YT_IFrame_API from './ytiframeapi'

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent implements OnInit, AfterViewInit {
  private route: ActivatedRoute;
  video_id: string;
  @ViewChild('ytdivplayer') ytdivplayer;

  getVideoId(){
    return this.video_id;
  }

  getVideoUrl(){
    return "https://www.youtube.com/embed/"+this.video_id+"?rel=1&loop=1&autoplay=1"+
           "&showinfo=0&controls=1&autohide=1&controls=1&playlist="+this.video_id;
  }

  constructor(route: ActivatedRoute) {this.route=route;}

  ngOnInit() {
    this.route.queryParams.subscribe(paramsroute => this.video_id=paramsroute['v']);
  }

  
  ngAfterViewInit() {
    console.log(YT_IFrame_API)
    YT_IFrame_API.load(function(YT) {
      new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'M7lc1UVf-VE'
      });
    });
  }

}
