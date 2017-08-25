import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialToolbarComponent } from './material-toolbar.component';
import { MdToolbarModule } from '@angular/material';

describe('MaterialToolbarComponent', () => {
  let component: MaterialToolbarComponent;
  let fixture: ComponentFixture<MaterialToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialToolbarComponent ],
      imports: [
        MdToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
