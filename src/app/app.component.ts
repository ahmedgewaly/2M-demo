import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mmcc';

  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;

  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;

      this.router.navigate(['dashboard']);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  getUser():any{
    return this.tokenStorageService.getUser();
  }

}