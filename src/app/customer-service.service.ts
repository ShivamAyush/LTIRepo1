import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from './customer';
import { LoginDto } from "./loginDto";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  registerCustomer(customer: Customer)
  {
    return this.http.post("http://localhost:8282/register" , customer);
  }

  loginCustomer(loginDto: LoginDto)
  {
    return this.http.post("http://localhost:8282/login" , loginDto); 
  }
}
