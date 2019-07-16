import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityByCompanyComponent } from './quantity-by-company.component';

describe('QuantityByCompanyComponent', () => {
  let component: QuantityByCompanyComponent;
  let fixture: ComponentFixture<QuantityByCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityByCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
