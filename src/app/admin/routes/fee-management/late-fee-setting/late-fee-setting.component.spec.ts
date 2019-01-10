import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateFeeSettingComponent } from './late-fee-setting.component';

describe('LateFeeSettingComponent', () => {
  let component: LateFeeSettingComponent;
  let fixture: ComponentFixture<LateFeeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateFeeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateFeeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
