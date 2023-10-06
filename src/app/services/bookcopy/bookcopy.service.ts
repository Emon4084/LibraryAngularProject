import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookcopyService {
  private apiUrl: string = environment.apiBaseUrl + 'bookCopy';

  constructor(private http: HttpClient) { }

 
  getAllBookCopies() {
    return this.http.get(`${this.apiUrl}`);
  }


  getBookCopyById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }


  addBookCopy(bookCopy: any):Observable<any> {
    return this.http.post(`${this.apiUrl}`, bookCopy);
  }


  editBookCopy(id: number, bookCopy: any) {
    return this.http.put(`${this.apiUrl}/${id}`, bookCopy);
  }


  deleteBookCopy(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
  searchBookCopy(searchString: string) {
    return this.http.get(`${this.apiUrl}/SearchBookCopy/${searchString}`);
  }

 
  getActiveBookCopies() {
    return this.http.get(`${this.apiUrl}/GetActiveBookCopy`);
  }

  
  getInactiveBookCopies() {
    return this.http.get(`${this.apiUrl}/GetInactiveBookCopies`);
  }

  getGoodConditionBookCopies() {
    return this.http.get(`${this.apiUrl}/GoodCondition`);
  }

  
  getToRepairBookCopies() {
    return this.http.get(`${this.apiUrl}/GetToRepairCopies`);
  }

 
  getDamagedBookCopies() {
    return this.http.get(`${this.apiUrl}/GetDamagedCopies`);
  }
}
