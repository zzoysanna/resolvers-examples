import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new Subject<boolean>();

  constructor() { }

  public start(): void {
    this.isLoading.next(true);
  }

  public stop(): void {
    this.isLoading.next(false);
  }

  public showLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }


}
