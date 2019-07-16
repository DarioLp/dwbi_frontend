import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityForEmployeeAndMonthComponent } from './quantity-for-employee-and-month.component';

describe('QuantityForEmployeeAndMonthComponent', () => {
  let component: QuantityForEmployeeAndMonthComponent;
  let fixture: ComponentFixture<QuantityForEmployeeAndMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityForEmployeeAndMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityForEmployeeAndMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
