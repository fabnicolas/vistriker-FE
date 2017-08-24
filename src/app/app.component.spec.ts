import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { CONST_ROUTING, RouterModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule
  } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialContentGridComponent } from './material-content-grid/material-content-grid.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { SafePipe } from './safe.pipe';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        MaterialSidenavComponent,
        MaterialToolbarComponent,
        MaterialContentGridComponent,
        VideoViewComponent,
        SafePipe
      ], 
      imports: [
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
        MdToolbarModule, MdIconModule, MdGridListModule,
        CONST_ROUTING,
        RouterModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
