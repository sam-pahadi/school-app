import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCardClassDivisionComponent } from './class-division.component';

describe('ClassDivisionComponent', () => {
  let component: ReportCardClassDivisionComponent;
  let fixture: ComponentFixture<ReportCardClassDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCardClassDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardClassDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
