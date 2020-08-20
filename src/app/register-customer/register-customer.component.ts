import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerServiceService } from "../customer-service.service";

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  customer:Customer = new Customer();
  data:any;

  constructor(private registerService: CustomerServiceService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.registerService.registerCustomer(this.customer).subscribe(data=>{
      alert(JSON.stringify(data));
    });
  }
}
