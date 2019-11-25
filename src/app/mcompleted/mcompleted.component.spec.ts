import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McompletedComponent } from './mcompleted.component';

describe('McompletedComponent', () => {
  let component: McompletedComponent;
  let fixture: ComponentFixture<McompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
