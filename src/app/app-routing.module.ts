import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';

const routes: Routes = [
  { path: 'register', component: RegisterCustomerComponent },
  { path: 'login', component: LoginCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
