import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomadComponent } from './bottomad.component';

describe('BottomadComponent', () => {
  let component: BottomadComponent;
  let fixture: ComponentFixture<BottomadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
