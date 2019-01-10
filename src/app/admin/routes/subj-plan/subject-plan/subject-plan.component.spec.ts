import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPlanComponent } from './subject-plan.component';

describe('SubjectPlanComponent', () => {
  let component: SubjectPlanComponent;
  let fixture: ComponentFixture<SubjectPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
