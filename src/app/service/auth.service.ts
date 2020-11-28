import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface UserInfo {
  username: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(user: UserInfo): void {
    if (user.username === 'master8@lemoncode.net' && user.password === '12345678') {
      localStorage.setItem('Angulab.logged', 'true')
      localStorage.setItem('Angulab.username', user.username)
      this.router.navigateByUrl('/dashboard')
    }
  }

  logout(): void {
    localStorage.removeItem('Angulab.logged')
  }

  isLogged(): boolean {
    return !!localStorage.getItem('Angulab.logged')
  }

  username(): string {
    return localStorage.getItem('Angulab.username') || ''
  }

  checkAccess(): void {
    if (!this.isLogged()) this.router.navigateByUrl('/')
  }
}
