import { ViewChild, Component } from '@angular/core';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode=0;

  @ViewChild(MaterialSidenavComponent) mdsidenav : MaterialSidenavComponent;
  channelName = "NoCopyrightSounds";

  openChildSidenav = function(){
    this.mdsidenav.openSideNav();
  }
}
