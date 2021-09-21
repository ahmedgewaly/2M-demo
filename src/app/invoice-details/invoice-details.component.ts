import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import customers from '../mmccData/customers.json';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {
  invoice;

  constructor(private Activatedroute:ActivatedRoute,
    private router:Router) { 
      const customerId = this.Activatedroute.snapshot.queryParamMap.get('customerId')||0;
      const invoiceId = this.Activatedroute.snapshot.queryParamMap.get('invoiceId')||0;
   
     const customer = customers.find((c: { id: string | number; })=> c.id == customerId);
     this.invoice = customer.invoices.find((c: { id: string | number; })=> c.id == invoiceId);
    }

  ngOnInit(): void {
    
  }

}
