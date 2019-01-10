import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationConsentComponent } from './communication-consent.component';

describe('CommunicationConsentComponent', () => {
  let component: CommunicationConsentComponent;
  let fixture: ComponentFixture<CommunicationConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
