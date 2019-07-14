import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chartOptions: ChartOptions = {
    responsive: true
  };
  chartLabels: Label[] = ['January', 'February', 'Mars', 'April'];
  chartData: ChartDataSets[] = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];


  public barChartOptions: ChartOptions = {
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
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public barChartLegend = true;
  public barChartType: ChartType = 'bar';

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    try {
      await this.apiService.getIndex();
      await this.apiService.getHome();


    } catch (e) {
      console.log(e);
    }
  }
  onChartClick(event) {
    console.log(event);
  }

}
