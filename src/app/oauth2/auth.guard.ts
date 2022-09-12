import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) { };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    this.authService.isAuthenticated().pipe(
      take(1)
    ).subscribe(
      (res) => {
        console.log('CanActivate called', res);
        if (res) {
          return true;
        } else {
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
