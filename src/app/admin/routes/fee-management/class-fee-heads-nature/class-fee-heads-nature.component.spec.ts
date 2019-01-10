import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFeeHeadsNatureComponent } from './class-fee-heads-nature.component';

describe('ClassFeeHeadsNatureComponent', () => {
  let component: ClassFeeHeadsNatureComponent;
  let fixture: ComponentFixture<ClassFeeHeadsNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassFeeHeadsNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFeeHeadsNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
