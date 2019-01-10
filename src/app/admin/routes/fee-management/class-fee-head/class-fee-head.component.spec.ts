import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFeeHeadComponent } from './class-fee-head.component';

describe('ClassFeeHeadComponent', () => {
  let component: ClassFeeHeadComponent;
  let fixture: ComponentFixture<ClassFeeHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassFeeHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFeeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
