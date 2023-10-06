import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrowedbook } from 'src/app/models/borrowedbook/borrowedbook.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookService {
  private apiUrl: string = environment.apiBaseUrl + '/borrowbook';

  constructor(private http: HttpClient) { }

  getAllBorrowedBooks() {
    return this.http.get(`${this.apiUrl}/all-borrowlist`);
  }

  getRequestedBooksByUserName(username: string) {
    return this.http.get(`${this.apiUrl}/requested-books/${username}`);
  }

  getCancelledBooks() {
    return this.http.get(`${this.apiUrl}/cancelled-books`);
  }

  sendBookRequest(borrowedBook: Borrowedbook):Observable<any> {
    // const headers = new HttpHeaders();
    return this.http.post(`${this.apiUrl}/book-request`, borrowedBook);
  }
}
