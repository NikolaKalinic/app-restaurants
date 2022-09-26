import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-restaurant-client';

  public logged: boolean;

  constructor(private appService: AppService) {
    this.logged = false;
  }

  ngOnInit() {
    this.appService.cast.subscribe((user) =>
      user === null ? (this.logged = false) : (this.logged = true)
    );
  }

  logout() {
    this.logged = false;
    this.appService.logout();
  }
}
