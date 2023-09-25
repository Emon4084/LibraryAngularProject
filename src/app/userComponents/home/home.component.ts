import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book.model';
import { HomeService } from './home.service';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  
books!:Book[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
  
        // Log the received data to the console for debugging
        console.log('Books:', this.books);
      },
      (error) => {
        console.error('Error fetching book data:', error);
      }
    );
   
  }
}
