import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchChannelComponent } from './input-search-channel.component';

describe('InputSearchChannelComponent', () => {
  let component: InputSearchChannelComponent;
  let fixture: ComponentFixture<InputSearchChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
