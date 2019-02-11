import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }
  
  getUserByName(name: string): Observable<any> {
    return this._http.get(`https://api.github.com/users/${name}`)
  }
}
