import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class NgxLogoutComponent implements OnInit {

  constructor(
    protected authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    this.authService.logout();
  }

}
