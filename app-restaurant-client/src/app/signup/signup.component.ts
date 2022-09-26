import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public password: string;
  public username: string;
  public passwordRepeat: string;
  public wrongPassword: boolean;
  constructor(private appService: AppService) {
    this.password = '';
    this.passwordRepeat = '';
    this.username = '';
    this.wrongPassword = false;
  }

  checkPassword() {
    if (this.password !== this.passwordRepeat || this.password === '') {
      this.wrongPassword = true;
      return;
    }
    this.appService
      .saveUser(this.username, this.password)
      .subscribe((res) => console.log(res));
  }
  ngOnInit(): void {}
}
