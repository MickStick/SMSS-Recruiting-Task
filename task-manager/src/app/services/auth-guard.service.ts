import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    }else {
      this.router.navigate(['/login']);
    }
  }

}
