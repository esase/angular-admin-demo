import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  constructor(
    private authService: NbAuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginWith(type: string) {
    switch(type) {
      case 'google' :
        this.authService.authenticate('google')
          .pipe(take(1))
          .subscribe(() => {
            this.router.navigateByUrl('/');
          });
          break;
    }
  }
}
