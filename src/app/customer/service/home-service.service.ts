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
export class HomeServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/category/read-category`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllCategory", []))
    )
  }

  getAllNewProduct(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/product/read-new-product`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllCategory", []))
    )
  }

  getAllProduct(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/product/read-product`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllCategory", []))
    )
  }

  getAllSaleProduct(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/product/read-sale-product`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllCategory", []))
    )
  }

  getAllProductByCate(cateID: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/product/read-product-by-cate/${cateID}`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllCategory", []))
    )
  }

  getProductByID(id: any): Observable<any> {
    return this.httpClient.get<any>(`${URLAPI}/product/read-product-by-id/${id}`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getProductByID", []))
    )
  }

  private handleError<T>(operator = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
