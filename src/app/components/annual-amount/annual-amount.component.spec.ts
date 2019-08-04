import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualAmountComponent } from './annual-amount.component';

describe('AnnualAmountComponent', () => {
  let component: AnnualAmountComponent;
  let fixture: ComponentFixture<AnnualAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
