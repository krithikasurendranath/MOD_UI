import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcurrentComponent } from './ucurrent.component';

describe('UcurrentComponent', () => {
  let component: UcurrentComponent;
  let fixture: ComponentFixture<UcurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
