import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { MmccComponent } from './mmcc/mmcc.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';

const routes: Routes = [
  {path: '', component: MmccComponent},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers', component: CustomersComponent},
  // {path: 'customers/invoices/:id', component: InvoicesComponent},
  {path: 'createcustomer', component: AddCustomerComponent},
  {path: 'customers/invoices', component: InvoicesComponent},
  {path: 'customers/invoices/invoiceDetails', component: InvoiceDetailsComponent},
  {path: 'customers/invoices/addInvoice', component: AddInvoiceComponent},
  {path: 'customers/invoices/printInvoice', component: PrintInvoiceComponent},
  { path: '', redirectTo: 'mmcc', pathMatch: 'full' }
  
  // ,  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
