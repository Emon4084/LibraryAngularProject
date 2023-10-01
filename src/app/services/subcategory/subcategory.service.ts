import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from 'src/app/models/subcategory/subcategory.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  url:string = environment.apiBaseUrl+'/subcategory';

  constructor(private http: HttpClient) { }

  getSubcategories(): Observable<Subcategory[]>{
    return this.http.get<Subcategory[]>(this.url);
  }

  getSubcategory(id: number):Observable<Subcategory | null>{
    return this.http.get<Subcategory>(`${this.url}/${id}`);
  }

  postSubcategory(formData: FormData): Observable<Subcategory | null>{
    const headers = new HttpHeaders();
    headers.append('Content-type', 'multipart/form-data');

    return this.http.post<Subcategory>(this.url, formData, {headers});
  }

  putSubcategory(id: number, SubcategoryData: Subcategory): Observable<any>{
    return this.http.put(`${this.url}/${id}`, SubcategoryData, {responseType: 'text'});
  }

  deleteSubcategory(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
