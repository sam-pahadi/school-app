import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateHouseComponent } from './allocate-house.component';

describe('AllocateHouseComponent', () => {
  let component: AllocateHouseComponent;
  let fixture: ComponentFixture<AllocateHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
