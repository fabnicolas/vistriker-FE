import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSidenavComponent } from './material-sidenav.component';

describe('MaterialSidenavComponent', () => {
  let component: MaterialSidenavComponent;
  let fixture: ComponentFixture<MaterialSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
