import { ViewChild, Component } from '@angular/core';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { Router /*RouterModule, ActivatedRoute*/ } from '@angular/router';
import { SearchChannelDataService } from './search-channel-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode=0;
  subscription_SearchChannelData: Subscription;

  constructor(private router: Router, private service_SearchChannelData:SearchChannelDataService){
    this.subscription_SearchChannelData = this.service_SearchChannelData.getActualChannel_asObservable().subscribe(channel_name =>
      this.router.navigate(['channel',channel_name])
    );
  }

  ngOnDestroy(){
    this.subscription_SearchChannelData.unsubscribe();
  }

  @ViewChild(MaterialSidenavComponent) mdsidenav : MaterialSidenavComponent;
  channelName = "NoCopyrightSounds";

  openChildSidenav = function(){
    this.mdsidenav.openSideNav();
  }
}
