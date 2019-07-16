import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { LineChartComponent } from '../line-chart/line-chart.component';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @ViewChild(LineChartComponent, { static: false }) lineChart: LineChartComponent;
  values = [];
  companies = [];
  company: any;
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
  mode = 'orders';
  constructor(private apiService: ApiService) {
    this.year = this.years[0];
    this.month = '05';
  }

  async ngOnInit() {
    this.companies = await this.apiService.get('getCompanies') as Array<any>;
    this.company = this.companies[0].dni;
    this.filter();
  }

  async filter() {
    const body = {
      company: this.company,
      year: this.year,
      month: this.month
    };
    try {
      const url = (this.mode === 'orders') ? 'quantityForCompany' : 'amountForCompany';
      this.values = await this.apiService.post(url, body) as Array<any>;
      const found = this.companies.find((company) => {
        return company.company_id == this.company;
      });
      const quantities = [];
      const labels = [];
      for (const val of this.values) {
        quantities.push(val.cantidad);
        labels.push(val.fecha);
      }
      this.lineChart.setData(quantities, labels, found.company_name);
    } catch (e) {
      console.log(e);
    }
  }

}
