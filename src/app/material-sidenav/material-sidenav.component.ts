import { Output, ViewChild, EventEmitter, Component, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-sidenav',
  templateUrl: './material-sidenav.component.html',
  styleUrls: ['./material-sidenav.component.css']
})
export class MaterialSidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav : MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  openSideNav = function(){
    this.sidenav.open();
  }

}
