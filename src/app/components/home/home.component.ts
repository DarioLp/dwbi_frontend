import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(BarChartComponent, { static: false }) barChart: BarChartComponent;
  selectMode = 'grafic';
  actualMode = 'grafic';
  timeForVehicle = [];
  dataForTable = [];
  constructor(
    private apiService: ApiService,
    private zone: NgZone) { }

  async ngOnInit() {
    try {
      this.dataForTable = await this.apiService.get('timeForvehicle') as Array<any>;
      for (const data of this.dataForTable) {
        this.timeForVehicle.push({ label: data.vehiculo, data: data.tiempo });
      }
      this.barChart.setData(this.timeForVehicle);


    } catch (e) {
      console.log(e);
    }
  }

  async change() {
    this.actualMode = this.selectMode;
    if (this.actualMode === 'grafic') {
      this.barChart.setData(this.timeForVehicle);
    }
    this.zone.run(() => { });
  }

}
