import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-quantities-by-company',
  templateUrl: './quantities-by-company.component.html',
  styleUrls: ['./quantities-by-company.component.css']
})
export class QuantitiesByCompanyComponent implements OnInit {
  @ViewChild(BarChartComponent, { static: false }) barChart: BarChartComponent;
  mode = 'count';
  quantities = [];
  constructor(
    private apiService: ApiService,
    private zone: NgZone) { }

  async ngOnInit() {

  }

  async filter() {
    const body = {
      mode: this.mode,
    };
    try {
      const data = await this.apiService.post('quantityByCompany', body) as Array<any>;
      this.quantities = [];
      for (const d of data) {
        this.quantities.push({ label: d.company, data: d.cantidad });
      }
      console.log(this.quantities);
      this.barChart.setData(this.quantities);
      this.zone.run(() => { });
    } catch (e) {
      console.log(e);
    }

  }

}
