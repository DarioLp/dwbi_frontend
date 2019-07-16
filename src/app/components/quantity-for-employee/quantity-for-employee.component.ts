import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
@Component({
  selector: 'app-quantity-for-employee',
  templateUrl: './quantity-for-employee.component.html',
  styleUrls: ['./quantity-for-employee.component.css']
})
export class QuantityForEmployeeComponent implements OnInit {

  @ViewChild(BarChartComponent, { static: false }) barChart: BarChartComponent;

  selectMode = 'grafic';
  actualMode = 'grafic';
  fechaDesdeParam = ``;
  fechaHastaParam = ``;
  quantityForEmployee = [];
  dataForTable = [];
  constructor(
    private apiService: ApiService,
    private zone: NgZone) { }

  async ngOnInit() {
    this.filter();
  }

  async change() {
    this.actualMode = this.selectMode;
    if (this.actualMode === 'grafic') {
      this.barChart.setData(this.quantityForEmployee);
    }

    this.zone.run(() => { });
  }

  async filter(){
    var query = ``;
    if(this.fechaDesdeParam && this.fechaHastaParam) query = `?fechaDesde='${this.fechaDesdeParam}'&fechaHasta='${this.fechaHastaParam}'`;
    if(this.fechaDesdeParam && !this.fechaHastaParam) query = `?fechaDesde='${this.fechaDesdeParam}'`;
    if(!this.fechaDesdeParam && this.fechaHastaParam) query = `?fechaHasta='${this.fechaHastaParam}'`;
    
    this.quantityForEmployee = [];
    try {
      this.dataForTable = await this.apiService.get(`cantidadPorEmpleado${query}`) as Array<any>;
      for (const data of this.dataForTable) {
        this.quantityForEmployee.push({ label: data.nombre, data: data.cantidad });
      }
      this.barChart.setData(this.quantityForEmployee);


    } catch (e) {
      console.log(e);
    }

    this.change();
  }

}
