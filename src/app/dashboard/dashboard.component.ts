import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

declare var toastr: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user ?: any;
  constructor(public myapp: AppComponent) { 
    this.user = this.myapp.getUser();
  }

  ngOnInit(): void {
    toastr.success('Welcome back ' + this.user.username, '2M - Customs Clearance', );
  }

}
