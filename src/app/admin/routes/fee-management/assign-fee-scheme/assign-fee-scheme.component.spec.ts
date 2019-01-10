import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFeeSchemeComponent } from './assign-fee-scheme.component';

describe('AssignFeeSchemeComponent', () => {
  let component: AssignFeeSchemeComponent;
  let fixture: ComponentFixture<AssignFeeSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignFeeSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFeeSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
