import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { QuantityForEmployeeComponent } from './components/quantity-for-employee/quantity-for-employee.component';
import { QuantityForTurnComponent } from './components/quantity-for-turn/quantity-for-turn.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quantity-employee', component: QuantityForEmployeeComponent },
  { path: 'quantity-turn', component: QuantityForTurnComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
