import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignementService {
  private url = "http://localhost:3000/assignement"
  
  constructor(private http: HttpClient) { }

  get() {
    let params = new HttpParams();
    return this.http.post<Promise<Array<Assignment>>>(this.url, {params}).toPromise();
  }

  add(titre : any ,nom : any, dateDeRendu : any , rendu : any, noter : any, detail :any, auteur : any, remarque : any, note : any) {
    let params = new HttpParams();
    params = titre ? params.append('titre', titre) : params;
    params = nom ? params.append('nom', nom) : params;
    params = dateDeRendu ? params.append('dateDeRendu', formatDate(dateDeRendu, "YYYY-MM-dd", 'en-US').toString()) : params;
    params = rendu ? params.append('rendu', String(rendu)) : params;
    params = noter ? params.append('noter', String(noter)) : params;
    params = detail ? params.append('detail', String(detail)) : params;
    params = auteur ? params.append('auteur', auteur) : params;
    params = remarque ? params.append('remarque', remarque) : params;
    params = note ? params.append('note', note) : params;
    return this.http.get(this.url +"/add", {params, responseType: 'text'}).toPromise();
  }

  delete(titre : any ,nom : any, dateDeRendu : any , rendu : any, noter : any, detail :any, auteur : any, remarque : any, note : any) {
    let params = new HttpParams();
    params = titre ? params.append('titre', titre) : params;
    params = nom ? params.append('nom', nom) : params;
    params = dateDeRendu ? params.append('dateDeRendu', formatDate(dateDeRendu, "YYYY-MM-dd", 'en-US').toString()) : params;
    params = rendu ? params.append('rendu', String(rendu)) : params;
    params = noter ? params.append('noter', String(noter)) : params;
    params = detail ? params.append('detail', String(detail)) : params;
    params = auteur ? params.append('auteur', auteur) : params;
    params = remarque ? params.append('remarque', remarque) : params;
    params = note ? params.append('note', note) : params;
    return this.http.get(this.url + "/delete", {params, responseType: 'text'}).toPromise();
  }

  update(titre : any ,nom : any, dateDeRendu : any , rendu : any, noter : any, detail :any, auteur : any, remarque : any, note : any) {
    let params = new HttpParams();
    params = titre ? params.append('titre', titre) : params;
    params = nom ? params.append('nom', nom) : params;
    params = dateDeRendu ? params.append('dateDeRendu', formatDate(dateDeRendu, "YYYY-MM-dd", 'en-US').toString()) : params;
    params = rendu ? params.append('rendu', String(rendu)) : params;
    params = noter ? params.append('noter', String(noter)) : params;
    params = detail ? params.append('detail', String(detail)) : params;
    params = auteur ? params.append('auteur', auteur) : params;
    params = remarque ? params.append('remarque', remarque) : params;
    params = note ? params.append('note', note) : params;
    return this.http.get(this.url + "/update", {params, responseType: 'text'}).toPromise();
  }

}