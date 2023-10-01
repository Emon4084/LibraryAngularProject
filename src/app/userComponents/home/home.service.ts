import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from 'src/app/models/book/book.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

getBooks(){
 return this.http.get<Book[]>(this.baseUrl + '/Book');
}
}

