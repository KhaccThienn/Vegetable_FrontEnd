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
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAllAccount(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/read-account`, httpOptions).pipe(
      tap(o => console.log("Get All")),
      catchError(this.handleError("getAllAccount", []))
    )
  }

  createAccount(acc: any): Observable<any> {
    return this.httpClient.post<any>(`${URLAPI}/create-account`, acc, httpOptions)
      .pipe(
        tap(_ => console.log("Createid : " + acc.id)),
        catchError(this.handleError<any>("createAccount"))
      )
  }

  private handleError<T>(operator = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
