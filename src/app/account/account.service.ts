import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register/register.model';
import { environment } from 'src/environments/environment.development';
import { Observable, ReplaySubject, map, of } from 'rxjs';
import { Login } from '../models/login/login';
import { User } from '../models/user/user';
import { Route, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSouce = new ReplaySubject <User | null>(1);
  user$ = this.userSouce.asObservable();
  isUserAdmin: boolean = false; // Initialize as false
  // url : string = environment.apiBaseUrl+'/Register';

  constructor(private http: HttpClient, private router: Router) { }


checkCredentials(username: string, password: string): boolean {
  return username === 'admin@mail.com' && password === '123456';
}

refreshUser(jwt: string | null){
  if(jwt === null){
    this.userSouce.next(null);
    return of(undefined);
  }

  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + jwt);

  return this.http.get<User>(`${environment.apiBaseUrl}/account/refresh-user-token`,{headers}).pipe(
    map((user:User) =>{
      if(user){
        this.setUser(user);
      }
    })
)
}

login(model: Login): Observable<User | null> {
  return this.http.post<User>(`${environment.apiBaseUrl}/account/login`, model)
    .pipe(
      map((user: User) => {
        if (user) {
          this.setUser(user);
          this.isUserAdmin = true;
        }
        return user;
      }),
      finalize(() => {
        this.user$.subscribe({
          next: (user) => {
            if (user === null) {
              this.router.navigateByUrl('/');
            }
          },
        });
      })
    );
}


// login(model: Login){
//   return this.http.post<User>(`${environment.apiBaseUrl}/account/login`, model)
//   .pipe(
//     map((user:User) =>{
//       if(user){
//         this.setUser(user);
//         //return user;
//       }
//       //return null;
//     })
//   );
// }

logout(){
  localStorage.removeItem(environment.userKey);
  this.userSouce.next(null);
  this.router.navigateByUrl('/account/login');
  
}

  register(model: Register){
    return this.http.post(`${environment.apiBaseUrl}/account/register`, model)
  }

getJWT(){
  const key = localStorage.getItem(environment.userKey);
  if(key){
    const user: User = JSON.parse(key);
    return user.jwt;
  }else{
    return null;
  }
}

  private setUser(user: User){
    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.userSouce.next(user);

    // this.user$.subscribe({
    //   next:Response => console.log(Response)
    // })
  }
}
