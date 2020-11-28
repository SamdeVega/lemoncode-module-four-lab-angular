import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lemoncode-module-four-lab-angular';

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  isLogged(): boolean {
    return this.authService.isLogged()
  }
}
