import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Category } from '../models/category.model';


const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

const URLAPI = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${URLAPI}/category/read-category`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("getAllCategory", []))
    )
  }

  searchByKeyword(name: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${URLAPI}/category/read-category-by-name/${name}`, httpOptions).pipe(
      tap(o => console.log("Get ALl")),
      catchError(this.handleError("searchByKeyword", []))
    )
  }


  getOneCategory(id: any): Observable<Category> {
    return this.httpClient.get<Category>(`${URLAPI}/category/read-category-by-id/${id}`)
      .pipe(
        tap(_ => console.log("Get cate by id: " + id)),
        catchError(this.handleError<Category>("Get cate by id: " + id))
      )
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${URLAPI}/category/post-category`, category, httpOptions)
      .pipe(
        tap(_ => console.log("Createid : " + category.id)),
        catchError(this.handleError<Category>("createCategory"))
      )
  }


  updateCategory(id: any, category: any): Observable<any> {
    return this.httpClient.put<Category>(`${URLAPI}/category/edit-category/${id}`, category, httpOptions)
      .pipe(
        tap(_ => console.log("update : " + category.id)),
        catchError(this.handleError<Category>("updateCategory"))
      )
  }

  deleteCategory(id: any): Observable<Category> {
    return this.httpClient.delete<Category>(`${URLAPI}/category/delete-category/${id}`)
      .pipe(
        tap(_ => console.log("Delete ID: " + id)),
        catchError(this.handleError<Category>("deleteCategory"))
      )
  }

  private handleError<T>(operator = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
