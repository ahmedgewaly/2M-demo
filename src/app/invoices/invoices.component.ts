import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import customers from '../mmccData/customers.json';
import { CustomerService } from '../_services/customer.service';

import{ GlobalConstants } from '../_common/global-constants';

declare function loadDataTable() : any;
declare var toastr: any;


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
 
  customer:any;

  constructor(private Activatedroute:ActivatedRoute,
    private router:Router, private customerService: CustomerService) { 

  }

  ngOnInit(): void {
    // this.loadInvoices();
    this.loadLocalInvoices();
    loadDataTable();
  }
  loadLocalInvoices() :any{
    const customerId = this.Activatedroute.snapshot.queryParamMap.get('customerId')||0;
    this.customer = customers.find((c: { id: string | number; })=> c.id == customerId);
  }

  loadInvoices():any {
    const customerId = this.Activatedroute.snapshot.queryParamMap.get('customerId')||0;

    this.customerService.getCustomers().subscribe({
      next: data => {
        this.customer = data.find((c: { id: string | number; })=> c.id == customerId);
      },
      error: error => {
          // alert('There was an error! '+ JSON.stringify(error));
          toastr.error('Failed to load Invoices for '+this.customer?.name+ ': ' + error.statusText, GlobalConstants.siteTitle);
      }
  });
  }

}
