import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
}) 
export class CustomerService {
   

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getCustomers(): Observable<any> {
    const headers = new HttpHeaders().set( 'Access-Control-Allow-Origin', '*' );
    return this.http.get(API_URL + 'customers', { responseType:"json"})

  }

  createCustomer(data: any): Observable<any> {
    return this.http.put(API_URL + 'customers', data, { responseType: 'text' });
  }

  updateCustomer(id: any, data: any): Observable<any> {
    return this.http.put(API_URL + 'customers', data, { responseType: 'json' });
  }

  
}
