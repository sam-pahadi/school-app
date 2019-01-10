
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydashbordComponent } from './mydashbord.component';

describe('MydashbordComponent', () => {
  let component: MydashbordComponent;
  let fixture: ComponentFixture<MydashbordComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MydashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
