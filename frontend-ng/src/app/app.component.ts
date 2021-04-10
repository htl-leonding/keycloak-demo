import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-ng';
  user: string[] = [];

  constructor(private authService: AuthService, private httpClient: HttpClient){ }

  ngOnInit(): void {
    this.authService.init();
  }

  login() {
    this.authService.login();
  }

  getLoggedInUser() {
    this.httpClient.get<string[]>('http://localhost:8080/hello-resteasy/user').subscribe(user => {
      this.user = user;
    })
  }
}
