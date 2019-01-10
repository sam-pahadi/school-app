import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationDatatableComponent } from './communication-datatable.component';

describe('CommunicationDatatableComponent', () => {
  let component: CommunicationDatatableComponent;
  let fixture: ComponentFixture<CommunicationDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
