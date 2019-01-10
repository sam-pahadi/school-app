import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptCancellationReportComponent } from './receipt-cancellation-report.component';

describe('ReceiptCancellationReportComponent', () => {
  let component: ReceiptCancellationReportComponent;
  let fixture: ComponentFixture<ReceiptCancellationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptCancellationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptCancellationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
