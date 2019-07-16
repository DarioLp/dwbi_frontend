import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodForDateComponent } from './food-for-date.component';

describe('FoodForDateComponent', () => {
  let component: FoodForDateComponent;
  let fixture: ComponentFixture<FoodForDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodForDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodForDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
