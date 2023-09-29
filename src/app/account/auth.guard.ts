import { Injectable } from '@angular/core';

import { 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanActivate,
  Router  
} from '@angular/router';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean {
    // Check if the user is logged in.
      if(localStorage.getItem('isLoggedIn') === 'true') {
        return true;
      }
      // The user is not logged in, so redirect them to the login page.
    this.router.navigate(['/login']);
    return false;
  }
  

  public isLoggedIn(): boolean {
    let status = false;
    if(localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else{
      status = false;
    }
    return status; 
  }
}