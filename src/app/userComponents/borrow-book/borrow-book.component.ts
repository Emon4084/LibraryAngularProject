import { Component, OnInit } from '@angular/core';
import { BorrowBookService } from './borrow-book.service';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book/book.model';
import { ActivatedRoute } from '@angular/router'; 
import { environment } from 'src/environments/environment.development';
import { Borrowedbook } from 'src/app/models/borrowedbook/borrowedbook.model';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {
  book!: Book;
  bookId: number | undefined; 

  constructor(
    private borrowBookService: BorrowBookService,
    private bookService: BookService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.bookId = idParam ? +idParam : undefined; 
    if (this.bookId !== undefined) {
      this.loadBook(this.bookId); 
    }
  }

  loadBook(id: number): void {
    this.bookService.getBook(id).subscribe(
      (book) => {
        console.log(book); 
        if (book) {
          this.book = book;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  sendRequest() {
    if (this.bookId !== undefined) {
      const requestBody = {
        bookId: this.bookId
      };

      this.borrowBookService.sendBookRequest(requestBody).subscribe({
        next: (response) => {
          console.log('Request sent successfully', response);
        },
        error: (error) => {
          console.error('Error sending request', error);
        }
      });
    }
}

  
}
