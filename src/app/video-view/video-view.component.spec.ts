import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoViewComponent } from './video-view.component';
import { SafePipe } from '../safe.pipe';
import { RouterTestingModule } from '@angular/router/testing';


describe('VideoViewComponent', () => {
  let component: VideoViewComponent;
  let fixture: ComponentFixture<VideoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoViewComponent, SafePipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
