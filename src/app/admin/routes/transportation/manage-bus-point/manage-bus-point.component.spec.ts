import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBusPointComponent } from './manage-bus-point.component';

describe('ManageBusPointComponent', () => {
  let component: ManageBusPointComponent;
  let fixture: ComponentFixture<ManageBusPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBusPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBusPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
