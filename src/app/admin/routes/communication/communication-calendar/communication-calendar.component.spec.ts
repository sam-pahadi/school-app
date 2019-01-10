import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationCalendarComponent } from './communication-calendar.component';

describe('CommunicationCalendarComponent', () => {
  let component: CommunicationCalendarComponent;
  let fixture: ComponentFixture<CommunicationCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
