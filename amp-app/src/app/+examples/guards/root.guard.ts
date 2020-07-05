import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate {
  canActivate(): boolean {
    return confirm('Are you admin?');
  }
}
