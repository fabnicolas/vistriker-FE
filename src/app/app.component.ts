import { ViewChild, ContentChild, Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Array<any>;
  @ViewChild(MaterialSidenavComponent) mdsidenav : MaterialSidenavComponent;

  constructor(private http: Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

  openChildSidenav = function(){
    this.mdsidenav.openSideNav();
  }
}
