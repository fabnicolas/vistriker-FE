import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoOptionsButtonComponent } from './video-options-button.component';

describe('VideoOptionsButtonComponent', () => {
  let component: VideoOptionsButtonComponent;
  let fixture: ComponentFixture<VideoOptionsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoOptionsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoOptionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
