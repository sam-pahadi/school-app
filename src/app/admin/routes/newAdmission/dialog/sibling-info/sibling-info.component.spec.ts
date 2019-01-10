import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingInfoComponent } from './sibling-info.component';

describe('SiblingInfoComponent', () => {
  let component: SiblingInfoComponent;
  let fixture: ComponentFixture<SiblingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
