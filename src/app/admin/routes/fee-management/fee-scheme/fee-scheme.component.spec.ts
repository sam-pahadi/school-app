import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSchemeComponent } from './fee-scheme.component';

describe('FeeSchemeComponent', () => {
  let component: FeeSchemeComponent;
  let fixture: ComponentFixture<FeeSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
