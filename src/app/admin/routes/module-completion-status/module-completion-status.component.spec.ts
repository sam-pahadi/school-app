import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCompletionStatusComponent } from './module-completion-status.component';

describe('ModuleCompletionStatusComponent', () => {
  let component: ModuleCompletionStatusComponent;
  let fixture: ComponentFixture<ModuleCompletionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCompletionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCompletionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
