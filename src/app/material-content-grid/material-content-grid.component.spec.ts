import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialContentGridComponent } from './material-content-grid.component';
import { VideoViewComponent } from '../video-view/video-view.component';
import { MdGridListModule } from '@angular/material';
import { CONST_ROUTING, RouterModule } from '../app.routing';
import { SafePipe } from '../safe.pipe';

describe('MaterialContentGridComponent', () => {
  let component: MaterialContentGridComponent;
  let fixture: ComponentFixture<MaterialContentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MaterialContentGridComponent, 
        VideoViewComponent,
        SafePipe
      ],
      imports: [
        MdGridListModule,
        CONST_ROUTING,
        RouterModule,
        HttpModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialContentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
