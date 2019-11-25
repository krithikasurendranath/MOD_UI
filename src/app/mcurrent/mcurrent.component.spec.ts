import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McurrentComponent } from './mcurrent.component';

describe('McurrentComponent', () => {
  let component: McurrentComponent;
  let fixture: ComponentFixture<McurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
