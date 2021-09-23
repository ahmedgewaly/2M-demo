import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import customers from '../mmccData/customers.json';
import{ GlobalConstants } from '../_common/global-constants';

declare function loadDataTable() : any;
declare var toastr: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList:any;
  constructor(private customerService: CustomerService) { 
   
  }
  
  ngOnInit(): void {
    // this.getAllCustomers();
    this.getLocalAllCustomers();
    loadDataTable();
  } 

  private getLocalAllCustomers(){
    this.customerList = customers;
  }
  private getAllCustomers() {
    this.customerService.getCustomers().subscribe({
      next: data => {
        this.customerList = data;
      },
      error: error => {
        // alert('There was an error! ' + JSON.stringify(error));
        toastr.error('Failed to load Customers: ' + error.statusText, GlobalConstants.siteTitle);
      }
    });
  }
}
