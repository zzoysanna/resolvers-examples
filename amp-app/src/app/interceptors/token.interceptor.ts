import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(environment.tokenKey);
    if(req.url.includes(environment.rest) && token) {
      const newReq = req.clone({
        params: req.params.set('token', token),
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }

}
