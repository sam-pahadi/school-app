import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBusRouteComponent } from './manage-bus-route.component';

describe('ManageBusRouteComponent', () => {
  let component: ManageBusRouteComponent;
  let fixture: ComponentFixture<ManageBusRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBusRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBusRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
