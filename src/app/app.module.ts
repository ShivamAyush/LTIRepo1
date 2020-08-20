import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CustomerServiceService } from "./customer-service.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    LoginCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
