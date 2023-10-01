import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './models/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isUserAdmin: boolean = false; // Initialize as false
  //currentUser$!: Observable<User |null>
  
  // Check if the email matches the admin email
  private checkAdminByUserName(userName: string): boolean {
    
    return userName.toLowerCase() === 'admin@mail.com';
  }
  constructor(private accountService: AccountService){}

  ngOnInit():void{
    this.refreshUser();

    this.accountService.user$.subscribe((user) => {
      if (user) {
        this.isUserAdmin = this.checkAdminByUserName(user.userName); 
      }
    });
  }

  
  private refreshUser(): void {
    const jwt = this.accountService.getJWT();
    if (jwt) {
      this.accountService.refreshUser(jwt).pipe(take(1)).subscribe({
        next: _ => {},
        error: _ => {
          this.accountService.logout();
        }
      });
    } else {
      this.accountService.refreshUser(null).pipe(take(1)).subscribe();
    }
  }


  // Add your logic here to check the user's credentials
  //   checkCredentials(username: string, password: string): any {
  //    return username === 'admin@mail.com' && password === '123456';
  //  }

  // private refreshUser(){
  //   const jwt = this.accountService.getJWT();
  //   if(jwt){
  //     this.accountService.refreshUser(jwt).subscribe({
  //       next: _=> {},
  //       error: _ => {
  //         this.accountService.logout();
  //       }
  //     })
  //   }
  //   else{
  //     this.accountService.refreshUser(null).subscribe();
  //   }
  // }

  
}