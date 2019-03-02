import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgotGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return false;
    //  return route.params['usnm'] === 'nirali';
    if(route.params['usnm']){
      alert('Successful!');
      return true; 
    }else{
      // return false;
      alert('You must enter a username');
    }
  }
}
