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

  setData() {
    this.chartData.push({ data: [330, 600, 260, 700], label: 'Account A' });
    this.chartData.push({ data: [120, 455, 100, 340], label: 'Account B' });
    this.chartData.push({ data: [45, 67, 800, 500], label: 'Account C' });
    this.chartLabels.push('January', 'February', 'Mars', 'April');

    this.zone.run(() => {

    });
    this.flag = true;
  }

}
