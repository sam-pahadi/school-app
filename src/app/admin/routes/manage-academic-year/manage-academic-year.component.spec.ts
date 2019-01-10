import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicYearComponent } from './manage-academic-year.component';

describe('ManageAcademicYearComponent', () => {
  let component: ManageAcademicYearComponent;
  let fixture: ComponentFixture<ManageAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
