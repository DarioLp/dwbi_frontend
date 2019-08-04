import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartMulDimComponent } from './line-chart-mul-dim.component';

describe('LineChartMulDimComponent', () => {
  let component: LineChartMulDimComponent;
  let fixture: ComponentFixture<LineChartMulDimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartMulDimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartMulDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
