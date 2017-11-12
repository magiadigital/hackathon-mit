import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    private _authservice: AuthService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let tmp = this._authservice.isLoggedin();
      console.log(tmp);

      if (this._authservice.isLoggedin()) {
        return true;
      } else {
        window.alert('You don\'t have permission to view this page');
        this.router.navigate(['']);
        return false;
      }
    }
}
