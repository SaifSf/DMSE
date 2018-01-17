import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sfscomp2Component } from './sfscomp2.component';

describe('Sfscomp2Component', () => {
  let component: Sfscomp2Component;
  let fixture: ComponentFixture<Sfscomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sfscomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sfscomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
