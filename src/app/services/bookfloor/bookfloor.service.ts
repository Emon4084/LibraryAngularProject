import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BookFloor } from '../../models/bookfloor/bookfloor.model';


@Injectable({
  providedIn: 'root'
})
export class BookFloorService {
  url: string = environment.apiBaseUrl + '/BookFloors';
  constructor(private http: HttpClient) { }

  getBookFloors(): Observable<BookFloor[]> {
    return this.http.get<BookFloor[]>(this.url);
  }

  getBookFloor(id: number): Observable<BookFloor | null> {
    return this.http.get<BookFloor>(`${this.url}/${id}`);
  }

  postBookFloor(bookFloorData: BookFloor): Observable<BookFloor | null> {
    return this.http.post<BookFloor>(this.url, bookFloorData);
  }

  // putBookFloor(publisherData: BookFloor): Observable<BookFloor | null> {
  //   return this.http.put<BookFloor>(`${this.url}/${publisherData.publisherId}`, publisherData);
  // }

  putBookFloor(id: number, bookFloorData: BookFloor): Observable<any> {
    // Modify this method to not expect JSON response
    return this.http.put(`${this.url}/${id}`, bookFloorData, { responseType: 'text' });
  }

  deleteBookFloor(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
