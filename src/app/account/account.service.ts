import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register/register.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // url : string = environment.apiBaseUrl+'/Register';

  constructor(private http: HttpClient) { }

// postRegister(registarData: Register): Observable<Register | null> {
//   return this.http.post<Register>(this.url, registarData);
// }

  register(model: Register){
    return this.http.post(`${environment.apiBaseUrl}/account/register`, model)
  }
}

