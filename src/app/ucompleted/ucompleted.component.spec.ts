import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcompletedComponent } from './ucompleted.component';

describe('UcompletedComponent', () => {
  let component: UcompletedComponent;
  let fixture: ComponentFixture<UcompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
