import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { QuantityForEmployeeComponent } from './components/quantity-for-employee/quantity-for-employee.component';
import { QuantityForTurnComponent } from './components/quantity-for-turn/quantity-for-turn.component';
import { CompanyComponent } from './components/company/company.component';
import {
  QuantityForEmployeeAndMonthComponent
} from './components/quantity-for-employee-and-month/quantity-for-employee-and-month.component';
import { FoodForDateComponent } from './components/food-for-date/food-for-date.component';
import { QuantitiesByCompanyComponent } from './components/quantities-by-company/quantities-by-company.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quantity-employee', component: QuantityForEmployeeComponent },
  { path: 'quantity-turn', component: QuantityForTurnComponent },
  { path: 'quantity-date-employee', component: QuantityForEmployeeAndMonthComponent },
  { path: 'quantities-company', component: QuantitiesByCompanyComponent },
  { path: 'monthly-company', component: CompanyComponent },
  { path: 'monthly-food-date', component: FoodForDateComponent },
  { path: 'quantity-date-employee', component: QuantityForEmployeeAndMonthComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
