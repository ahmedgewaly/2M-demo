import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  isLoggedIn = false;
  user ?: any;
  constructor(public myapp: AppComponent) { 
    this.user = this.myapp.getUser();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.myapp.isLoggedIn;
  
  }

}
