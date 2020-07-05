import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanLoad {
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean {
    alert('а права админа у вас есть?');
    return true;
  }
  // canLoad(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   alert('а права админа у вас есть?');
  //   return true;
  // }
  
}
