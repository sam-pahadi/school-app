import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationEventComponent } from './communication-event.component';

describe('CommunicationEventComponent', () => {
  let component: CommunicationEventComponent;
  let fixture: ComponentFixture<CommunicationEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
