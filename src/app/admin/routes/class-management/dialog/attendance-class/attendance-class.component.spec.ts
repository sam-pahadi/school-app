import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceClassComponent } from './attendance-class.component';

describe('AttendanceClassComponent', () => {
  let component: AttendanceClassComponent;
  let fixture: ComponentFixture<AttendanceClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
