import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryManagerComponent } from './inquiry-manager.component';

describe('InquiryManagerComponent', () => {
  let component: InquiryManagerComponent;
  let fixture: ComponentFixture<InquiryManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
