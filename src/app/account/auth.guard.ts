import { Injectable } from '@angular/core';

import { 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanActivate,
  Router  
} from '@angular/router';
import { AccountService } from './account.service';
import { Observable, map } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean> {
      // if(localStorage.getItem('isLoggedIn') === 'true') {
      //   return true;
      // }
      return this.accountService.user$.pipe(
        map((user: User | null) => {
          if (user || localStorage.getItem('isLoggedIn') === 'true') {
            return true;
          } else {
            this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } }); 
            return false;
          }
        })
      );
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