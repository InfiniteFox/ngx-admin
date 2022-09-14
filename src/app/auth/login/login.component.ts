import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject, NB_AUTH_OPTIONS } from '@nebular/auth';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class NgxLoginComponent {
  redirectDelay = 0;
  showMessages: any = {};
  strategy = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted = false;
  rememberMe = false;

  constructor(
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    private authService: AuthService,
    private router: Router,
  ) {
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.authService.login(this.user).pipe(take(1)).subscribe(
      (res) => {
        this.submitted = false;
        if (res) {
          // Redict to admin
          this.router.navigate(['/pages']);
        } else {
          this.errors = ['Error, please check the email and password'];
        }
      },
    );

  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}

