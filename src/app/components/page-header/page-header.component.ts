
import { Component, OnInit } from '@angular/core';

import { Component,OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit{
    search : String ="";

    currentUser$!: Observable<User |null>

    currentUser$!: Observable<User |null>;
  

    constructor(public accountService: AccountService){}

    clearSearch() {
    this.search = '';
    //this.filteredItems = []; // Clear the filtered items when clearing the search
    }

    ngOnInit(): void {
      this.currentUser$ = this.accountService.user$
    }
    logout(){
      this.accountService.logout();
    }
}