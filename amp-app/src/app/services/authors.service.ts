import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authorsStream = new BehaviorSubject<Author[]>(null);

  constructor(
    private http: HttpClient,
  ) { }

  public search(query: string): Observable<Author[]> {
    this.http.get<Author[]>(`${environment.rest}/authors`).pipe(
      map(authors => authors.filter(author => this.checkAuthorName(author.name, query))),
    ).subscribe(
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

  public checkAuthorName(author: string, query: string): boolean {
    const [name, surname] = author.toLowerCase().split(' ');
    return name.startsWith(query) || surname.startsWith(query);
  }
}
