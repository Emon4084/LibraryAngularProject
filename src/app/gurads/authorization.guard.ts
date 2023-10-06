// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { AccountService } from '../account/account.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators'; // Import map operator
// import { User } from '../models/user/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthorizationGuard implements CanActivate {

//   constructor(private accountService: AccountService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot
//   ): Observable<boolean> {
//     return this.accountService.user$.pipe(
//       map((user: User | null) => {
//         if (user) {
//           return true;
//         } else {
//           this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } }); 
//           return false;
//         }
//       })
//     );
//   }
// }
