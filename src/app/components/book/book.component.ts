import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book/book.model';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/services/author/author.service';
import { PublisherService } from 'src/app/services/publisher/publisher.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Author } from 'src/app/models/author/author.model';
import { Publisher } from 'src/app/models/publisher/publisher.model';
import { Category } from 'src/app/models/category/category.model';
import { BookListComponent } from './book-list/book-list.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('eBInput') eBInput: any;
  @ViewChild('agCInput') agCInput: any;

  @ViewChild('addBookButton') addBookButton: any;

  bookForm: FormGroup;
  books: Book[] = [];
  booksToDisplay: Book[];

  authors: Author[] = [];
  publishers: Publisher[] = [];
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
    private categoryService: CategoryService
  ) {
    this.bookForm = fb.group({
      title: [''],
      isbn: [''],
      publisherId: [''],
      publishedYear: [''],
      edition: [''],
      totalCopies: [''],
      language: [''],
      description: [''],
      bookPrice: [''],
      ddcCode: [''],
      isActive: false,
      isDigital: false,
      publisherAgreement: false,
      categoryId: [''],
      authorIds: [[]],
      // Add 'cover' and 'eBook' properties to the form
      cover: [''],
      eBook: [''],
      agreementBookCopy:['']
    });

    this.booksToDisplay = this.books;
  }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
    this.getPublishers();
    this.getCategories();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((res) => {
      this.books = res;
      this.booksToDisplay = this.books;
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

  addBook() {
    const selectedAuthorIds = this.bookForm.get('authorIds')?.value || [];

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('isbn', this.bookForm.get('isbn')?.value);
    formData.append('publisherId', this.bookForm.get('publisherId')?.value);
    formData.append('publishedYear', this.bookForm.get('publishedYear')?.value);
    formData.append('edition', this.bookForm.get('edition')?.value);
    formData.append('totalCopies', this.bookForm.get('totalCopies')?.value);
    formData.append('language', this.bookForm.get('language')?.value);
    formData.append('description', this.bookForm.get('description')?.value);
    formData.append('bookPrice', this.bookForm.get('bookPrice')?.value);
    formData.append('ddcCode', this.bookForm.get('ddcCode')?.value);
    formData.append('isActive', this.bookForm.get('isActive')?.value);
    formData.append('isDigital', this.bookForm.get('isDigital')?.value);
    formData.append('publisherAgreement', this.bookForm.get('publisherAgreement')?.value);
    formData.append('categoryId', this.bookForm.get('categoryId')?.value);

    // Append the selected author IDs as an array
    selectedAuthorIds.forEach((authorId:number) => {
      formData.append('authorIds', authorId.toString());
    });

    // Append the 'cover' and 'eBook' files
    const coverInput = this.fileInput.nativeElement;
    if (coverInput.files && coverInput.files.length > 0) {
      formData.append('cover', coverInput.files[0]);
    }

    const eBookInput =  this.eBInput.nativeElement;
    if (eBookInput.files && eBookInput.files.length>0) {
      formData.append('eBook', eBookInput.files[0]);
    }

    const agreementBookCopyInput =  this.agCInput.nativeElement;
    if (agreementBookCopyInput.files &&  agreementBookCopyInput.files.length>0) {
      formData.append('agreementBookCopy', agreementBookCopyInput.files[0]);
    }

    this.bookService.postBook(formData).subscribe((res) => {
      if (res !== null) {
        this.books.unshift(res); // Add the response to the beginning of the array
        this.bookForm.reset();
        console.log(res);
      }
    });
  }
}
