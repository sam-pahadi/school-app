import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseNumberComponent } from './udise-number.component';

describe('UdiseNumberComponent', () => {
  let component: UdiseNumberComponent;
  let fixture: ComponentFixture<UdiseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdiseNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdiseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
