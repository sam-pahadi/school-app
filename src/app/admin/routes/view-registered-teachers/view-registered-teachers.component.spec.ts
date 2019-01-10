import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisteredTeachersComponent } from './view-registered-teachers.component';

describe('ViewRegisteredTeachersComponent', () => {
  let component: ViewRegisteredTeachersComponent;
  let fixture: ComponentFixture<ViewRegisteredTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegisteredTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisteredTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
