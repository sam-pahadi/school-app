import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationNoticeComponent } from './communication-notice.component';

describe('CommunicationNoticeComponent', () => {
  let component: CommunicationNoticeComponent;
  let fixture: ComponentFixture<CommunicationNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
