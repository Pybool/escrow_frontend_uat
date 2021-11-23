import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // console.log("mmmmmmmmm",this.auth.accountValue)
      if (this.auth.gettoken()) {
          console.log("mmmmmmmmm")
        return true;
      }
      this.router.navigate(['/Login'])
    //   window.alert('You don\'t have permission to view this page');
      return false;
  }
}

