import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusRouteComponent } from './add-bus-route.component';

describe('AddBusRouteComponent', () => {
  let component: AddBusRouteComponent;
  let fixture: ComponentFixture<AddBusRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
