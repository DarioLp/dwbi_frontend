import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LineChartMulDimComponent } from '../line-chart-mul-dim/line-chart-mul-dim.component';

@Component({
  selector: 'app-annual-amount',
  templateUrl: './annual-amount.component.html',
  styleUrls: ['./annual-amount.component.css']
})
export class AnnualAmountComponent implements OnInit {

  @ViewChild(LineChartMulDimComponent, { static: false }) lineChart: LineChartMulDimComponent;
  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService,
  ) { }

  async ngOnInit() {
    const years: Array<any> = ['2017', 2018, 2019];
    const results: Array<any> = [];
    this.ngxService.start();
    const labels = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    for (const y of years) {
      const result = await this.apiService.post('annualAmount', { year: y });
      results.push(result);
    }
    this.lineChart.setData(results, labels, years);
    this.ngxService.stop();

  }

}
