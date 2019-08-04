import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-food-for-date',
  templateUrl: './food-for-date.component.html',
  styleUrls: ['./food-for-date.component.css']
})
export class FoodForDateComponent implements OnInit {

  @ViewChild(LineChartComponent, { static: false }) lineChart: LineChartComponent;
  values = [];
  foods = [];
  food: any;
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
  type: string;
  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService
  ) {
    this.year = this.years[0];
    this.month = '05';
  }

  async ngOnInit() {
    this.foods = await this.apiService.get('getFoods') as Array<any>;
    this.food = 1311;
    this.type = 'plato_principal_id';
  }

  async filter() {
    const body = {
      type: this.type,
      food: this.food,
      year: this.year,
      month: this.month
    };
    try {
      const url = (this.mode === 'orders') ? 'quantityForFood' : 'amountForFood';
      this.ngxService.start();
      this.values = await this.apiService.post(url, body) as Array<any>;
      const found = this.foods.find((food) => {
        return food.id == this.food;
      });
      const quantities = [];
      const labels = [];
      for (const val of this.values) {
        quantities.push(val.cantidad);
        labels.push(val.fecha);
      }
      this.lineChart.setData(quantities, labels, found.food_name);
      this.ngxService.stop();
    } catch (e) {
      console.log(e);
    }
  }

}
