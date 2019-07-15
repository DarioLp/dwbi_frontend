import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityForTurnComponent } from './quantity-for-turn.component';

describe('QuantityForTurnComponent', () => {
  let component: QuantityForTurnComponent;
  let fixture: ComponentFixture<QuantityForTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityForTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityForTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
