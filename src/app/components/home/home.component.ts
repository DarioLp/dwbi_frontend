import { Component, OnInit, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(BarChartComponent, { static: false }) barChart: BarChartComponent;
  selectMode = 'grafic';
  actualMode = 'grafic';
  fechaDesdeParam = '';
  fechaHastaParam = '';
  timeForVehicle = [];
  dataForTable = [];


  constructor(
    private apiService: ApiService,
    private zone: NgZone,
    private ngxService: NgxUiLoaderService) { }

  async ngOnInit() {
    this.filter();
  }

  async change() {
    this.actualMode = this.selectMode;
    if (this.actualMode === 'grafic') {
      this.barChart.setData(this.timeForVehicle);
    }
    this.zone.run(() => { });
  }

  async filter() {
    const body = {
      desde: this.fechaDesdeParam,
      hasta: this.fechaHastaParam
    };
    this.timeForVehicle = [];
    try {
      this.ngxService.start();
      this.dataForTable = await this.apiService.post('timeForvehicle', body) as Array<any>;
      for (const data of this.dataForTable) {
        this.timeForVehicle.push({ label: data.vehiculo, data: data.tiempo });
      }
      this.barChart.setData(this.timeForVehicle);
      this.ngxService.stop();
    } catch (e) {
      console.log(e);
    }

    this.change();
  }


}
