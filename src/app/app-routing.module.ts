import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderQueryComponent } from './order-query/order-query.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'order-query', component: OrderQueryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
