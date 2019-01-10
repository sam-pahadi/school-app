import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassDivisionComponent } from './manage-class-division.component';

describe('ManageClassDivisionComponent', () => {
  let component: ManageClassDivisionComponent;
  let fixture: ComponentFixture<ManageClassDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClassDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
