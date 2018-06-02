import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../models/appState';
import { Company } from './company';
import { LOAD_COMPANIES } from '../reducers/company.reducer';

@Injectable()
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor (
    private store: Store<AppState>,
    private http: Http
  ) { }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get(`${this.API_BASE}/company/${companyId}`)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(this.errorHandler)
      );
  }

  loadCompanies() {
    return this.http.get(`${this.API_BASE}/company`)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(this.errorHandler)
      );
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(this.errorHandler)
      );
  }
  
  addCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    
    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), options)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(this.errorHandler)
      );
  }

  updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    
    return this.http.post(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), options)
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError(this.errorHandler)
      );
  }

  errorHandler(err) {
    console.error('CUSTOM ERROR');
    return Observable.throw(err);
  }
}
