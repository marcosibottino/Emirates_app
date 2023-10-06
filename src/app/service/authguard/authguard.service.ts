import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, UrlTree,  ActivatedRouteSnapshot, Router } from '@angular/router';
import { person } from 'src/assets/data/users';
import { AuthenticateService } from '../authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router, private authenticateService: AuthenticateService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    for(const p of person){
      if (this.authenticateService.user === p.user && this.authenticateService.pass === p.pass) {
        return true;
      } else {
        return this.router.createUrlTree(['/home'])
      }
    }
    return this.router.createUrlTree(['/home']);
  }
}
