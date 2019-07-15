import { Component, OnInit, NgZone } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  data: Array<any>;

  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Promedio minutos de viaje' },
  ];
  barChartLegend = true;
  barChartType: ChartType = 'bar';

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  setData(data: Array<any>) {
    this.data = data;
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    for (const d of this.data) {
      this.barChartLabels.push(d.label);
      this.barChartData[0].data.push(d.data);
    }
    this.zone.run(() => {
    });
  }

}
