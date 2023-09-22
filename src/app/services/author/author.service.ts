import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = `${environment.apiBaseUrl}/author`; // Use the apiBaseUrl from environment

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getAuthor(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  postAuthor(authorData: any): Observable<any> {
    return this.http.post<any>(this.url, authorData);
  }

  putAuthor(id: any, authorData: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, authorData);
  }

  deleteAuthor(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
