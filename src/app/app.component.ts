import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  :host nb-layout-header ::ng-deep nav {
    justify-content: flex-end;
  }
`],
})
export class AppComponent {
  isAuthenticated$: Observable<boolean>;
  title = 'angular-admin';
  
  constructor(
    private authService: NbAuthService,
    private router: Router,
  ) {
    this.isAuthenticated$ = this.authService.onAuthenticationChange();
  }

  home() {
    this.router.navigateByUrl('/');
  }

  logout() {
    this.authService.logout('google')
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigateByUrl('auth/login');
      });
  }

}
