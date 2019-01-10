import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateHouseDialogComponent } from './allocate-house-dialog.component';

describe('AllocateHouseDialogComponent', () => {
  let component: AllocateHouseDialogComponent;
  let fixture: ComponentFixture<AllocateHouseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateHouseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateHouseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
