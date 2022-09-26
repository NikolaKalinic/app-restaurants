import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public showError: boolean;
  public currentLoggedUser: User | null | string;
  constructor(private appService: AppService) {
    this.username = '';
    this.password = '';
    this.showError = false;
    this.currentLoggedUser = null;
  }

  ngOnInit(): void {
    this.showError = false;
  }
  checkCredentials() {
    this.appService
      .checkCredentials(this.username, this.password)
      .subscribe((res) => {
        if (res === null) {
          this.showError = true;
        } else {
          this.showError = false;
        }
        this.appService.setLoggedUser(res);
      });
  }
}
