import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

declare function loadDashboard(data:any) : any;
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
    if(this.user.showGreeting){
      loadDashboard(this.user.username);
      this.user.showGreeting = false;
      this.myapp.saveUser(this.user);
    }
    
    
    
  }

}
