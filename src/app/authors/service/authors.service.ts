import {inject, Injectable} from '@angular/core';
import {Author} from '../../books/model/book';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id);
  }

  public addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(Url + '/authors', author);
  }
}
