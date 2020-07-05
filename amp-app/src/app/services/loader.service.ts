import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new Subject<boolean>();
  private statusArray = [];

  public start(): void {
    this.statusArray.push(1);
    this.isLoading.next(true);
  }

  public stop(): void {
    if(this.statusArray.length) {
      this.statusArray.splice(this.statusArray.length - 1, 1);
      this.isLoading.next(!!this.statusArray.length)
    }
  }

  public showLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

}
