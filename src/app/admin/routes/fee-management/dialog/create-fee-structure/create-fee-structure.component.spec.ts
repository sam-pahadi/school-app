import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeeStructureComponent } from './create-fee-structure.component';

describe('CreateFeeStructureComponent', () => {
  let component: CreateFeeStructureComponent;
  let fixture: ComponentFixture<CreateFeeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
