import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './page/login/login.page';
import { AuthGuard } from './service/auth-guard.service';
import { SocialAuthButtonsComponent } from './component/social-auth-buttons/social-auth-buttons.component';

@NgModule({
  declarations: [
    LoginPage,
    SocialAuthButtonsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    NbButtonModule,
  ],
  providers: [
    AuthGuard,
  ],
})
export class AuthModule { }
