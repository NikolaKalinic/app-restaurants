import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppService } from '../app.service';
import { MenuItem } from '../MenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public menuItems: MenuItem[];
  public filterName: string;
  constructor(private router: Router, private appService: AppService) {
    this.menuItems = [];
    this.filterName = '';
  }

  ngOnInit(): void {
    this.appService
      .getAllMenuItems()
      .subscribe((res) => (this.menuItems = res));
  }

  findByName() {
    this.appService
      .filterByName(this.filterName)
      .subscribe((res) => (this.menuItems = res));
  }
}
