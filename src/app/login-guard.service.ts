import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor() { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
    // return false;
     return route.params['usnm'] === 'nirali';
  }
}