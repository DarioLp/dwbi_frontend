import { Component, OnInit, NgZone } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  chartOptions: ChartOptions = {
    responsive: true
  };
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [];
  flag = false;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  setData(quantities, labels, employee: string) {
    this.chartData = [];
    this.chartLabels = [];
    this.chartData.push({ data: quantities, label: employee });
    this.chartLabels = labels;
    this.flag = true;

    this.zone.run(() => {

    });
  }

}
