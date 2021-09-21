import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { CustomerService } from '../_services/customer.service';


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
  constructor(private fileSaverService: FileSaverService, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, address, mobile } = this.form;
    this.saveCustomer(this.form);
  }
  saveCustomer(data: any){
    // const data: any = "Test saved file";
    // this.fileSaverService.save(data, "D://Ehab/Test-File.txt");
    this.customerService.createCustomer(data).subscribe({
      next: data => {
        this.sucessMessage = data;
      },
      error: error => {
          this.isAddCustomerFailed = true;
          this.errorMessage = error;
      }
  });
  }

  
}
