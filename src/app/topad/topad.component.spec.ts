import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopadComponent } from './topad.component';

describe('TopadComponent', () => {
  let component: TopadComponent;
  let fixture: ComponentFixture<TopadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
