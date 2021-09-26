import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgxPrintModule } from 'ngx-print';
import { FileSaverModule } from 'ngx-filesaver';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MmccComponent } from './mmcc/mmcc.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    MmccComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    CustomersComponent,
    InvoicesComponent,
    PrintInvoiceComponent,
    InvoiceDetailsComponent,
    AddCustomerComponent,
    AddInvoiceComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPrintModule,
    FileSaverModule 
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
