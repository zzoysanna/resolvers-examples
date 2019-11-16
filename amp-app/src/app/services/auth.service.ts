import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized = new BehaviorSubject<boolean>(null);
  private userKey = 'user';
  private tokenKey = 'user-token';

  constructor() { }

  public checkLogin(): void {
    const user = localStorage.getItem(this.userKey);
    const token = localStorage.getItem(this.tokenKey);

    this.isAuthorized.next(!!user && !!token)
  }

  public login(email: string, password: string): void {
    localStorage.setItem(this.userKey, btoa(email));
    localStorage.setItem(this.tokenKey, btoa((new Date()).toString()));
    this.isAuthorized.next(true);
    console.log('logged in successfully');
  }

  public logout(): void {
    if(this.isAuthorized) {
      localStorage.removeItem(this.userKey);
      localStorage.removeItem(this.tokenKey);
      this.isAuthorized.next(false);
    }
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthorized;
  }

  public getUserInfo(): string {
    if(this.isAuthorized) {
      return atob(localStorage.getItem(this.userKey));
    }
  }
}
