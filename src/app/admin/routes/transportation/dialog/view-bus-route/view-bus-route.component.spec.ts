import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusRouteComponent } from './view-bus-route.component';

describe('ViewBusRouteComponent', () => {
  let component: ViewBusRouteComponent;
  let fixture: ComponentFixture<ViewBusRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBusRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
