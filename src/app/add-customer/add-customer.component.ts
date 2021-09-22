import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileSaverService } from 'ngx-filesaver';
import { CustomerService } from '../_services/customer.service';

declare var toastr: any;

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  form: any = {
    name:null,
    address:null,
    mobile:null
  };
  isAddCustomerFailed = false;
  errorMessage = '';
  sucessMessage = '';
  messageTitle= '2M - Customs Clearance';
  constructor(private fileSaverService: FileSaverService, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    const { name, address, mobile } = this.form;
    if(f.form.valid){
      console.log('Saving Customer =>'+this.form.name);
      this.saveCustomer(this.form);
    }else{
      if(f.form.value.name == null){
        this.showRequiredError('Name');
      }
      if(f.form.value.address == null){
        this.showRequiredError('Address');
      }
      if(f.form.value.mobile == null){
        this.showRequiredError('Mobile');
      }
    }
    
  }
  showRequiredError(filedName: string){
    toastr.error('Customer '+filedName+' is required!', this.messageTitle);
  }


  saveCustomer(data: any){
    // const data: any = "Test saved file";
    // this.fileSaverService.save(data, "D://Ehab/Test-File.txt");
    this.customerService.createCustomer(data).subscribe({
      next: data => {
        this.sucessMessage = data;

        toastr.success(data, this.messageTitle);
      },
      error: error => {
          this.isAddCustomerFailed = true;
          this.errorMessage = error;
          toastr.error('Add Customer is failed: ' + error.statusText, this.messageTitle);
      }
  });
  }

  
}
