import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegValComponent } from './reg-val.component';

describe('RegValComponent', () => {
  let component: RegValComponent;
  let fixture: ComponentFixture<RegValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
