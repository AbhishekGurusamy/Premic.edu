import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/service/toast.service';
import { User } from 'src/app/shared/user.model';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private route:Router, private toast:ToastService, private user: User){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.user.uid){
      return true;
    }
    this.route.navigate(['login'])
    return false;
  }
  
}
