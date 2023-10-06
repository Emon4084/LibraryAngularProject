import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book/book.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string = environment.apiBaseUrl+'/book';

  constructor(private http: HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }
  
  getBook(id: number): Observable<Book | null> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  postBook(formData: FormData): Observable<Book | null> {
    // Create headers with 'multipart/form-data' Content-Type
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<Book>(this.url, formData, { headers });
  }

  putBook(id: number, BookData: Book): Observable<any> {
    return this.http.put(`${this.url}/${id}`, BookData, { responseType: 'text' });
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
