import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit{
    search : String ="";
  
    clearSearch() {
    this.search = '';
    //this.filteredItems = []; // Clear the filtered items when clearing the search
    }

    ngOnInit(): void {
      
    }
}