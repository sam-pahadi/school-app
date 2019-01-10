import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeHeadComponent } from './fee-head.component';

describe('FeeHeadComponent', () => {
  let component: FeeHeadComponent;
  let fixture: ComponentFixture<FeeHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
