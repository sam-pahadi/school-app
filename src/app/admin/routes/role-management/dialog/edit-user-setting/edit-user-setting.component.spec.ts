import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserSettingComponent } from './edit-user-setting.component';

describe('EditUserSettingComponent', () => {
  let component: EditUserSettingComponent;
  let fixture: ComponentFixture<EditUserSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
