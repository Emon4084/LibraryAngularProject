import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book.model';
import { HomeService } from './home.service';
import { Author } from 'src/app/models/author/author.model';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  
books!:Book[];
authors: Author[] = [];

  constructor(private homeService: HomeService,
    private authorService: AuthorService,)
     { }

  ngOnInit() {

this.getAuthors();

    this.homeService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
  
        console.log('Books:', this.books);
      },
      (error) => {
        console.error('Error fetching book data:', error);
      }
    );   
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((res) => {
      this.authors = res;
    });
  }

  getAuthorName(authorId: number|undefined): string {
    const author = this.authors.find((a) => a.authorId === authorId);
    // console.log(this.books?.authorIds); 
    return author ? `${author.firstName} ${author.lastName}` : '';
  }


}
