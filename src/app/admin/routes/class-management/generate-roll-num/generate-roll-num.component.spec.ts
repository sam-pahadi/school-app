import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRollNumComponent } from './generate-roll-num.component';

describe('GenerateRollNumComponent', () => {
  let component: GenerateRollNumComponent;
  let fixture: ComponentFixture<GenerateRollNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateRollNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateRollNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
