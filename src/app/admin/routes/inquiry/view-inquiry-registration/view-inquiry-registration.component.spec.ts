import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInquiryRegistrationComponent } from './view-inquiry-registration.component';

describe('ViewInquiryRegistrationComponent', () => {
  let component: ViewInquiryRegistrationComponent;
  let fixture: ComponentFixture<ViewInquiryRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInquiryRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInquiryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
