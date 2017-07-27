import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialContentGridComponent } from './material-content-grid.component';

describe('MaterialContentGridComponent', () => {
  let component: MaterialContentGridComponent;
  let fixture: ComponentFixture<MaterialContentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialContentGridComponent ]
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
