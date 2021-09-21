import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user ?: any;

  constructor(public myapp: AppComponent) { 

    this.user = this.myapp.getUser();
    
  }

  ngOnInit(): void {
    this.isLoggedIn = this.myapp.isLoggedIn;
  }

  logout(): void {
    this.myapp.logout();
  }

}
