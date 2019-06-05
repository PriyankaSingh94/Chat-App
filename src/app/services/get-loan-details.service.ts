import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetLoanDetailsService {

  uri = 'http://localhost:4000/loans';

  constructor(private http: HttpClient) { }

  getLoans() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
