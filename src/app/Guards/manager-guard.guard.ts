import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../Services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.auth.isManager())
    return true;
    else{
      window.alert("only manager can access")
      return false;
    }
  }
  constructor(private auth:AuthserviceService){}
}
