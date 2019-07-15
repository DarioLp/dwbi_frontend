import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(BarChartComponent, { static: false }) barChart: BarChartComponent;
  @ViewChild(LineChartComponent, { static: false }) lineChart: LineChartComponent;

  selectMode = 'grafic';
  actualMode = 'grafic';
  timeForVehicle = [];

  constructor(
    private apiService: ApiService,
    private zone: NgZone) { }

  async ngOnInit() {
    try {
      await this.apiService.getIndex();
      await this.apiService.getHome();
      this.timeForVehicle = await this.apiService.getTimeForVehicle() as Array<any>;
      this.barChart.setData(this.timeForVehicle);
      // this.lineChart.setData();

    } catch (e) {
      console.log(e);
    }
  }

  async change() {
    this.actualMode = this.selectMode;
    this.barChart.setData(this.timeForVehicle);
    this.zone.run(() => { });
  }

}
