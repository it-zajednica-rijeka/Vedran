import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

// const routes: Routes = [];
const routes: Routes = [
  {path : 'customers', component : CustomerListComponent},
  {path : 'orders', component : OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
