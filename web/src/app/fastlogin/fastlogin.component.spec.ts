import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastloginComponent } from './fastlogin.component';

describe('FastloginComponent', () => {
  let component: FastloginComponent;
  let fixture: ComponentFixture<FastloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
