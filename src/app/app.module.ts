import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule
  } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialContentGridComponent } from './material-content-grid/material-content-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MaterialSidenavComponent,
    MaterialToolbarComponent,
    MaterialContentGridComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
