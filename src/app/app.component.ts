import { ViewChild, Component } from '@angular/core';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MaterialSidenavComponent) mdsidenav : MaterialSidenavComponent;
  channelName = "NoCopyrightSounds";

  openChildSidenav = function(){
    this.mdsidenav.openSideNav();
  }
}
