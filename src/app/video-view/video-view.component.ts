import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  youtube_player: any;

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
    var _yt_video_reference=this;
    YT_IFrame_API.load(function(YT) {
      var ytplayer=new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: _yt_video_reference.video_id,
        playerVars: {controls: 1, showinfo: 0, autoplay: 1, rel: 0, modestbranding: 1}
      });
      console.log(ytplayer);
    });
  }

}
