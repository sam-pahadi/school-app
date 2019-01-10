import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadWiseFeeReportComponent } from './head-wise-fee-report.component';

describe('HeadWiseFeeReportComponent', () => {
  let component: HeadWiseFeeReportComponent;
  let fixture: ComponentFixture<HeadWiseFeeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadWiseFeeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadWiseFeeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
