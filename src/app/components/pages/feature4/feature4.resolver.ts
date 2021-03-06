import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Feature4Resolver implements Resolve<any> {
  public resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<any> {
    return of();
  }
}
