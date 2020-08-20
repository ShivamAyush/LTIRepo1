import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../loginDto';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  loginDto: LoginDto = new LoginDto();
  data:any;

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.customerService.loginCustomer(this.loginDto).subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }
}
