import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { FormsModule } from '@angular/forms';
import { QuantityForEmployeeComponent } from './components/quantity-for-employee/quantity-for-employee.component';
import { QuantityForTurnComponent } from './components/quantity-for-turn/quantity-for-turn.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { CompanyComponent } from './components/company/company.component';
import { FoodForDateComponent } from './components/food-for-date/food-for-date.component';
import { QuantitiesByCompanyComponent } from './components/quantities-by-company/quantities-by-company.component';
import {
  QuantityForEmployeeAndMonthComponent
} from './components/quantity-for-employee-and-month/quantity-for-employee-and-month.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AnnualAmountComponent } from './components/annual-amount/annual-amount.component';
import { LineChartMulDimComponent } from './components/line-chart-mul-dim/line-chart-mul-dim.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    BarChartComponent,
    LineChartComponent,
    QuantityForEmployeeComponent,
    QuantityForTurnComponent,
    PieChartComponent,
    QuantityForEmployeeAndMonthComponent,
    CompanyComponent,
    FoodForDateComponent,
    QuantitiesByCompanyComponent,
    AnnualAmountComponent,
    LineChartMulDimComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ChartsModule,
    NgbModule,
    NgxUiLoaderModule

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
