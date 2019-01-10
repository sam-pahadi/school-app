import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAppFeatureComponent } from './parent-app-feature.component';

describe('ParentAppFeatureComponent', () => {
  let component: ParentAppFeatureComponent;
  let fixture: ComponentFixture<ParentAppFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAppFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAppFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
