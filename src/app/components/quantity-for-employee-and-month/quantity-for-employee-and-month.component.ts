import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-quantity-for-employee-and-month',
  templateUrl: './quantity-for-employee-and-month.component.html',
  styleUrls: ['./quantity-for-employee-and-month.component.css']
})
export class QuantityForEmployeeAndMonthComponent implements OnInit {
  @ViewChild(LineChartComponent, { static: false }) lineChart: LineChartComponent;

  values = [];
  employees = [];
  employee: any;
  months = [{
    id: '01',
    name: 'Enero',
  }, {
    id: '02',
    name: 'Febrero',
  }, {
    id: '03',
    name: 'Marzo',
  }, {
    id: '04',
    name: 'Abril',
  }, {
    id: '05',
    name: 'Mayo',
  }, {
    id: '06',
    name: 'Junio',
  }, {
    id: '07',
    name: 'Julio',
  }, {
    id: '08',
    name: 'Agosto',
  }, {
    id: '09',
    name: 'Septiembre',
  }, {
    id: '10',
    name: 'Octubre',
  }, {
    id: '11',
    name: 'Noviembre',
  }, {
    id: '12',
    name: 'Diciembre',
  }];
  years = [2017, 2018, 2019];
  year: number;
  month: string;
  constructor(
    private apiService: ApiService,
    private zone: NgZone) {
    this.year = this.years[0];
    this.month = '05';
  }

  async ngOnInit() {
    this.employees = await this.apiService.get('getEmployees') as Array<any>;
    this.employee = this.employees[0].dni;
    this.filter();
  }

  async filter() {
    const body = {
      employee: this.employee,
      year: this.year,
      month: this.month
    };

    try {
      this.values = await this.apiService.post('QuantityForEaD', body) as Array<any>;
      console.log(this.values);
      const found = this.employees.find((employee) => {
        return employee.dni == this.employee;
      });
      const quantities = [];
      const labels = [];
      for (const val of this.values) {
        quantities.push(val.cantidad);
        labels.push(val.fecha);
      }
      this.lineChart.setData(quantities, labels, found.nombre);
    } catch (e) {
      console.log(e);
    }
  }

}
