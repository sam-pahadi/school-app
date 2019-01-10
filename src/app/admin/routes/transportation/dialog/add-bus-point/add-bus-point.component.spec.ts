import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusPointComponent } from './add-bus-point.component';

describe('AddBusPointComponent', () => {
  let component: AddBusPointComponent;
  let fixture: ComponentFixture<AddBusPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
