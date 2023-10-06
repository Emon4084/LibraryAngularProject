import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    this.accountService.user$.pipe(take(1)).subscribe({
      next: user =>{
        if(user){
          //clone from the coming request and add authrization header to that
          request = request.clone({
            setHeaders:{
              Authorization: 'Bearer ${user.jwt}'
            }
          })
        }
      }
    })

    // const token = this.accountService.getJWT();

    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    // }

    return next.handle(request);
  }
}
