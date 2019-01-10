import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousYearFeesComponent } from './previous-year-fees.component';

describe('PreviousYearFeesComponent', () => {
  let component: PreviousYearFeesComponent;
  let fixture: ComponentFixture<PreviousYearFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousYearFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousYearFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
