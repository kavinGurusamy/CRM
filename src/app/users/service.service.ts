import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { userModel } from './model'
const url = environment.apiUrl + "/user"

@Injectable({
  providedIn: 'root'
})
export class Service {
  
  constructor( private http: HttpClient) {    }

  createUser(user: userModel): Observable<userModel>{
     return this.http.post<userModel>(url,user).pipe()
  }
}
