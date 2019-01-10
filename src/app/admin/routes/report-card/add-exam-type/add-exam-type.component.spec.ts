import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamTypeComponent } from './add-exam-type.component';

describe('AddExamTypeComponent', () => {
  let component: AddExamTypeComponent;
  let fixture: ComponentFixture<AddExamTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
