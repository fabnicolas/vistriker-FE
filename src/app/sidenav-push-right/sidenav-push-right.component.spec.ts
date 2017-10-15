import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPushRightComponent } from './sidenav-push-right.component';

describe('SidenavPushRightComponent', () => {
  let component: SidenavPushRightComponent;
  let fixture: ComponentFixture<SidenavPushRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavPushRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavPushRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
