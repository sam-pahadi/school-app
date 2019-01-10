import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAppFeatureComponent } from './teacher-app-feature.component';

describe('TeacherAppFeatureComponent', () => {
  let component: TeacherAppFeatureComponent;
  let fixture: ComponentFixture<TeacherAppFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAppFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAppFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
