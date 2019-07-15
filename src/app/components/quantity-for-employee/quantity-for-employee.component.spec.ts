import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityForEmployeeComponent } from './quantity-for-employee.component';

describe('QuantityForEmployeeComponent', () => {
  let component: QuantityForEmployeeComponent;
  let fixture: ComponentFixture<QuantityForEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityForEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
