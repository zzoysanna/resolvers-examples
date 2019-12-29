import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authorsStream = new BehaviorSubject<Author[]>(null);

  constructor(
    private http: HttpClient,
  ) { }

  public search(query: string): Observable<Author[]> {
    this.http.get<Author[]>(`${environment.rest}/authors?textFragment=${query}`).subscribe(
      authors => {
        this.authorsStream.next(authors);
      }
    );
    return this.authorsStream;
  }

  public getAll(): Observable<Author[]> {
    this.http.get<Author[]>(`${environment.rest}/authors`).subscribe(
      authors => {
        this.authorsStream.next(authors);
      }
    );
    return this.authorsStream;
  }
}
