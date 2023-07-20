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
export class FavouriteService {

  constructor(private httpClient: HttpClient) { }

  getAllFavByUser(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/favourite/read-favourite/${id}`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllFavByUser", []))
    )
  }

  addToFavourite(data: any): Observable<any> {
    return this.httpClient.post<any>(`${URLAPI}/favourite/post-favourite`, data, httpOptions)
      .pipe(
        tap(_ => console.log("Create : ", data)),
        catchError(this.handleError<any>("addToFavourite"))
      )
  }

  private handleError<T>(operator = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
