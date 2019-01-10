import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFeeStructureComponent } from './assign-fee-structure.component';

describe('AssignFeeStructureComponent', () => {
  let component: AssignFeeStructureComponent;
  let fixture: ComponentFixture<AssignFeeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignFeeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
