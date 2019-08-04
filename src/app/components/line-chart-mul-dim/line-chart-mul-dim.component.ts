import { Component, OnInit, NgZone } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart-mul-dim',
  templateUrl: './line-chart-mul-dim.component.html',
  styleUrls: ['./line-chart-mul-dim.component.css']
})
export class LineChartMulDimComponent implements OnInit {





  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];



  chartOptions: ChartOptions = {
    responsive: true
  };
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [];
  flag = false;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  setData(quantities: Array<any>, chartLabels: Array<string>, labels: any) {
    this.chartData = [];
    this.chartLabels = [];
    for (let index = 0; index < quantities.length; index++) {
      this.chartData.push({ data: quantities[index], label: labels[index] });
    }
    this.chartLabels = chartLabels;
    this.flag = true;
    this.zone.run(() => {

    });
  }

}