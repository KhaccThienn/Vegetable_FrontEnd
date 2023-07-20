import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

const URLAPI = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  createAccount(acc: any): Observable<any> {
    return this.httpClient.post<any>(`${URLAPI}/create-account`, acc, httpOptions)
      .pipe(
        tap(_ => console.log("Createid : " + acc.id)),
        catchError(this.handleError<any>("createAccount"))
      )
  }

  loginAccount(acc: any): Observable<any> {
    return this.httpClient.post<any>(`${URLAPI}/login-account`, acc, httpOptions)
      .pipe(
        tap(_ => console.log("Create : ", acc)),
        catchError(this.handleError<any>("loginAccount"))
      )
  }



  private handleError<T>(operator = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
