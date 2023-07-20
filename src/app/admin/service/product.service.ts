import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Product } from '../models/product.model';


const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

const URLAPI = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${URLAPI}/product/read-product`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllProduct", []))
    )
  }

  searchByKeyword(name: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/product/read-product-by-name/${name}`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("searchByKeyword", []))
    )
  }



  getOneProduct(id: any): Observable<any> {
    return this.httpClient.get<any>(`${URLAPI}/product/read-product-by-id/${id}`, httpOptions)
      .pipe(
        tap(_ => console.log("Get cate by id: " + id)),
        catchError(this.handleError<Product>("Get cate by id: " + id))
      )
  }

  createProduct(pro: any): Observable<Product> {
    return this.httpClient.post<Product>(`${URLAPI}/product/post-product`, pro, httpOptions)
      .pipe(
        tap(_ => console.log("Createid : " + pro.id)),
        catchError(this.handleError<Product>("createProduct"))
      )
  }


  updateProduct(id: any, pro: any): Observable<any> {
    return this.httpClient.put<Product>(`${URLAPI}/product/edit-product/${id}`, pro, httpOptions)
      .pipe(
        tap(_ => console.log("update : " + pro.id)),
        catchError(this.handleError<Product>("updateProduct"))
      )
  }

  deleteProduct(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${URLAPI}/product/delete-product/${id}`)
      .pipe(
        tap(_ => console.log("Delete ID: " + id)),
        catchError(this.handleError<any>("deleteProduct"))
      )
  }

  private handleError<T>(operator = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
