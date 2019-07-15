import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-quantity-for-turn',
  templateUrl: './quantity-for-turn.component.html',
  styleUrls: ['./quantity-for-turn.component.css']
})
export class QuantityForTurnComponent implements OnInit {
  @ViewChild(BarChartComponent, { static: false }) barChart: BarChartComponent;
  @ViewChild(PieChartComponent, { static: false }) pieChart: PieChartComponent;

  selectMode = 'grafic';
  actualMode = 'grafic';
  quantityForTurn = [];
  dataForTable = [];
  constructor(
    private apiService: ApiService,
    private zone: NgZone) { }

  async ngOnInit() {
    try {
      this.dataForTable = await this.apiService.get('cantidadPorTurno') as Array<any>;
      for (const data of this.dataForTable) {
        this.quantityForTurn.push({ label: data.horario, data: data.cantidad });
      }
      this.pieChart.setData(this.quantityForTurn);


    } catch (e) {
      console.log(e);
    }
  }

  async change() {
    this.actualMode = this.selectMode;
    if (this.actualMode === 'grafic') {
      this.pieChart.setData(this.quantityForTurn);
    }

    this.zone.run(() => { });
  }

}
