import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRegComponent } from './device-reg.component';

describe('DeviceRegComponent', () => {
  let component: DeviceRegComponent;
  let fixture: ComponentFixture<DeviceRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
