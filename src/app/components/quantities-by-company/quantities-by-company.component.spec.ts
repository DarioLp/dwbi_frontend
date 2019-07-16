import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitiesByCompanyComponent } from './quantities-by-company.component';

describe('QuantitiesByCompanyComponent', () => {
  let component: QuantitiesByCompanyComponent;
  let fixture: ComponentFixture<QuantitiesByCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantitiesByCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitiesByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
