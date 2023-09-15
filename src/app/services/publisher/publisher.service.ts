// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class PublisherService {
//   url: string = environment.apiBaseUrl+'/Publishers' // Use the apiBaseUrl from environment

//   constructor(private http: HttpClient) { }

//   getPublishers(): Observable<any[]> {
//     return this.http.get<any[]>(this.url);
//   }

//   getPublisher(id: number): Observable<any> {
//     return this.http.get<any>(`${this.url}/${id}`);
//   }

//   postPublisher(publisherData: any): Observable<any> {
//     return this.http.post<any>(this.url, publisherData);
//   }

//   putPublisher(publisherId: number, publisherData: any): Observable<any> {
//     return this.http.put<any>(`${this.url}/${publisherId}`, publisherData);
//   }
  

//   deletePublisher(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.url}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Publisher } from '../../models/publisher/publisher.model';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  url : string = environment.apiBaseUrl+'/Publishers';

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.url);
  }

  getPublisher(id: number): Observable<Publisher | null> {
    return this.http.get<Publisher>(`${this.url}/${id}`);
  }

  postPublisher(publisherData: Publisher): Observable<Publisher | null> {
    return this.http.post<Publisher>(this.url, publisherData);
  }

  // putPublisher(publisherData: Publisher): Observable<Publisher | null> {
  //   return this.http.put<Publisher>(`${this.url}/${publisherData.publisherId}`, publisherData);
  // }

  putPublisher(id: number, publisherData: Publisher): Observable<any> {
    // Modify this method to not expect JSON response
    return this.http.put(`${this.url}/${id}`, publisherData, { responseType: 'text' });
  }

  deletePublisher(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
