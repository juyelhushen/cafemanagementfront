import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { GlobalConstant } from '../shared/global-constant';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public router: Router,
    public auth: AuthService,
    private snackBar: SnackbarService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token: any = localStorage.getItem('token');

    var tokenPayload: any;

    try {
      tokenPayload = jwt_decode(token);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }


    let expectedRole = '';

    for (let i = 0; i < expectedRoleArray['length']; i++) {
      if (expectedRoleArray[i] == tokenPayload.role) {
        expectedRole = tokenPayload.role;
      }
    }

    if (tokenPayload.role == 'ADMIN' || tokenPayload.role == 'USER')  {
      if (this.auth.isAuthenticated() && tokenPayload.role == expectedRole) {
        return true;
      } else {
        this.snackBar.openSnackBar(GlobalConstant.unauthorized, GlobalConstant.error);
        this.router.navigate(['/cafe/dashboard']);
        return false;
      }
    } else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }

  }


}
