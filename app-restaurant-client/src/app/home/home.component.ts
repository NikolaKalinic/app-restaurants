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
  public logged: boolean;
  public page: number = 0;
  public totalPages: number | null = null;
  constructor(private router: Router, public appService: AppService) {
    this.menuItems = [];
    this.filterName = '';
    this.logged = false;
  }

  ngOnInit(): void {
    this.appService.cast.subscribe((user) =>
      user === null ? (this.logged = false) : (this.logged = true)
    );
    this.appService.getAllMenuItems().subscribe((res) => {
      this.menuItems = res.content;
      this.totalPages = res.totalPages - 1;
    });
  }

  findByName() {
    this.appService
      .filterByName(this.filterName)
      .subscribe((res) => (this.menuItems = res));
  }

  async deleteMenuItem(i: MenuItem) {
    const response = await this.appService.deleteMenuItem(i.id).toPromise();
    this.appService
      .getAllMenuItems()
      .subscribe((res) => (this.menuItems = res));
  }

  update() {
    this.appService
      .getAllMenuItems()
      .subscribe((res) => (this.menuItems = res));
  }

  updateItem(menuItem: MenuItem) {
    this.appService.changeSelected(menuItem);
  }

  decreasePage() {
    this.page--;
    this.appService
      .decreasePage()
      .subscribe((res) => (this.menuItems = res.content));
  }

  increasePage() {
    this.page++;
    this.appService
      .increasePage()
      .subscribe((res) => (this.menuItems = res.content));
  }
}
