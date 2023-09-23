import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/models/author/author.model';
import { Book } from 'src/app/models/book/book.model';
import { Category } from 'src/app/models/category/category.model';
import { Publisher } from 'src/app/models/publisher/publisher.model';
import { AuthorService } from 'src/app/services/author/author.service';
import { BookService } from 'src/app/services/book/book.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { PublisherService } from 'src/app/services/publisher/publisher.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() book?: Book 
  
  
  @Output() onRemoveBook = new EventEmitter<number>();
  @Output() onEditBook = new EventEmitter<number>();
  books: Book[] = [];
  authors: Author[] = [];
  publishers: Publisher[] = [];
  categories: Category[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
    this.getPublishers();
    this.getCategories();

  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((res) => {
      this.books = res;
    });
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((res) => {
      this.authors = res;
    });
  }

  getPublishers(): void {
    this.publisherService.getPublishers().subscribe((res) => {
      this.publishers = res;
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  deleteBookClicked() {
    this.onRemoveBook.emit(this.book?.bookId);
  }

  editBookClicked() {
    this.onEditBook.emit(this.book?.bookId);
  }

  getPublisherName(publisherId: number | undefined): string {
  
    const publisher = this.publishers.find((p) => p.publisherId === publisherId);
    return publisher ? publisher.publisherName : '';
  }
  

  getCategoryName(categoryId: number| undefined): string {
    const category = this.categories.find((c) => c.categoryId === categoryId);
    console.log(this.book?.authorIds); 
    return category ? category.categoryName : '';
  }

  getAuthorName(authorId: number|undefined): string {
    const author = this.authors.find((a) => a.authorId === authorId);
    console.log(this.book?.authorIds); 
    return author ? `${author.firstName} ${author.lastName}` : '';
  }

  getCoverImageUrl(coverFileName: string): string {
    return  coverFileName;
  }
  getEbokFileUrl(eBookFileName: string): string {
    return  eBookFileName;
  }
  getAgreementFileUrl(agreementFileName: string): string {
    return  agreementFileName;
  }
  
}

