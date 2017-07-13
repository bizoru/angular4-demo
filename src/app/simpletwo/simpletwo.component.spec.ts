import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletwoComponent } from './simpletwo.component';

describe('SimpletwoComponent', () => {
  let component: SimpletwoComponent;
  let fixture: ComponentFixture<SimpletwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
