import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'src/app/models/author/author.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
baseUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  getAuthor(){
    return this.http.get(this.baseUrl + '/Author');
  }
}
