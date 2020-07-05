import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, finalize } from "rxjs/operators";
import { LoaderService } from "../../services/loader.service";

@Injectable({
  providedIn: 'root'
})
export class WaitForItGuard implements CanActivate {
  constructor(
    private loader: LoaderService,
  ){}

  canActivate(): Observable<boolean> {
    this.loader.start();
    console.log('wait for it started');

    return of(true).pipe(
      delay(1000),
      finalize(() => {
        this.loader.stop();
        console.log('wait for it stopped');
      }),
    );
  }
  
}
