import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfo } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user: UserInfo

  constructor(private authService: AuthService) {
    this.user = {
      username: '',
      password: '',
    }
  }

  ngOnInit(): void { }

  incomplete(): boolean | null {
    if (this.user.username && this.user.password) return null
    return true
  }

  login(): void {
    this.authService.login(this.user)
  }
}
