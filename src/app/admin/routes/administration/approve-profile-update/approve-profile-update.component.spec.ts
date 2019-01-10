import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProfileUpdateComponent } from './approve-profile-update.component';

describe('ApproveProfileUpdateComponent', () => {
  let component: ApproveProfileUpdateComponent;
  let fixture: ComponentFixture<ApproveProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
