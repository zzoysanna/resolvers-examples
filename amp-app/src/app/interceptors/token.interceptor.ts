import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { LoaderService } from "../services/loader.service";
import { delay, finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(environment.tokenKey);

    if(req.url.includes(environment.rest) && token) {
      // this.loaderService.start();
      const newReq = req.clone({
        params: req.params.set('token', token),
      });
      return next.handle(newReq).pipe(
        // finalize(() => this.loaderService.stop()),
      );
    }

    return next.handle(req);
  }

}
