﻿// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { AuthService } from '../_services/auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private AuthService: AuthService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const account = this.AuthService.accountValue;
//         if (account) {
//             // check if route is restricted by role
//             // if (route.data.roles && !route.data.roles.includes(account.role)) {
//             //     // role not authorized so redirect to home page
//             //     this.router.navigate(['/']);
//             //     return false;
//             // }

//             // authorized so return true
//             return true;
//         }

//         // not logged in so redirect to login page with the return url 
//         this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
//         return false;
//     }
// }