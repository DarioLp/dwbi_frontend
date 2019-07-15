import { Component, OnInit, NgZone } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // Pie
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  pieChartLabels: Label[] = [];
  pieChartData: number[] = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartColors = [
    { backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'] },
  ];

  data = [];
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  setData(data: Array<any>) {
    this.data = data;
    this.pieChartLabels = [];
    this.pieChartData = [];
    for (const d of this.data) {
      this.pieChartLabels.push(d.label);
      this.pieChartData.push(d.data);
      // this.pieChartColors[0].backgroundColor.push(this.getRandomColor());
    }
    this.zone.run(() => {
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
