import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExamMarksComponent } from './upload-exam-marks.component';

describe('UploadExamMarksComponent', () => {
  let component: UploadExamMarksComponent;
  let fixture: ComponentFixture<UploadExamMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadExamMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExamMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
