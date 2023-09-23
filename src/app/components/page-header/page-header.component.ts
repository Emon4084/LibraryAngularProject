import { Component,OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit{
    search : String ="";
  
    constructor(public accountService: AccountService){}

    clearSearch() {
    this.search = '';
    //this.filteredItems = []; // Clear the filtered items when clearing the search
    }

    ngOnInit(): void {
      
    }
    logout(){
      this.accountService.logout();
    }
}