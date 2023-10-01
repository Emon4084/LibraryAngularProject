import { Injectable } from '@angular/core';
import { Category } from '../../models/category/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = environment.apiBaseUrl + '/Categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getCategory(id: number): Observable<Category | null> {
    return this.http.get<Category>(`${this.url}/${id}`);
  }

  postCategory(categoryData: Category): Observable<Category | null> {
    return this.http.post<Category>(this.url, categoryData);
  }



  putCategory(id: number, categoryData: Category): Observable<any> {
    // Modify this method to not expect JSON response
    return this.http.put(`${this.url}/${id}`, categoryData, { responseType: 'text' });
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
