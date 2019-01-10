import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadShareComponent } from './upload-share.component';

describe('UploadShareComponent', () => {
  let component: UploadShareComponent;
  let fixture: ComponentFixture<UploadShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
