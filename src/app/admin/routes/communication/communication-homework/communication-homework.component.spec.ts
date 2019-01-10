import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationHomeworkComponent } from './communication-homework.component';

describe('CommunicationHomeworkComponent', () => {
  let component: CommunicationHomeworkComponent;
  let fixture: ComponentFixture<CommunicationHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
