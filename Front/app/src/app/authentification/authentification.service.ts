import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private url = "http://localhost:3000/authentification"
  
  constructor(private http: HttpClient) { }

  authentification(login : String, password: String) : Promise<any>{
    let params = new HttpParams();
    params = login ? params.append('login', login.toString()) : params;
    params = password ? params.append('password', password.toString()) : params;

    return this.http.get(this.url, {params}).toPromise();
  }

}
