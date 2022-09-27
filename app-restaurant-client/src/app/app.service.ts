import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './MenuItem';
import { User } from './User';
import { BehaviorSubject } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private currentUser = new BehaviorSubject<User | null>(null);

  cast = this.currentUser.asObservable();

  m: MenuItem = {
    id: -1,
    name: '',
    category: {
      id: -1,
      name: '',
    },
    price: null,
  };

  private selectedItem = new BehaviorSubject<MenuItem>(this.m);

  selected = this.selectedItem.asObservable();

  public page: number;

  constructor(private http: HttpClient, private router: Router) {
    this.editUser(localStorage.getItem('user'));
    this.page = 0;
  }

  getAllMenuItems() {
    return this.http.get<any>(
      `http://localhost:8080/api/menu-items?page=${this.page}&size=5`
    );
  }

  filterByName(name: string) {
    return this.http.get<MenuItem[]>(
      `http://localhost:8080/api/menu-items/filter=${name}`
    );
  }

  increasePage() {
    this.page++;
    return this.getAllMenuItems();
  }

  decreasePage() {
    this.page--;
    return this.getAllMenuItems();
  }

  saveUser(username: string, password: string) {
    var newUser = new User(username, password);
    return this.http.post<User>(`http://localhost:8080/api/users`, newUser);
  }

  checkCredentials(username: string, password: string) {
    var checkUser = new User(username, password);
    return this.http.post<User>(
      `http://localhost:8080/api/users/check`,
      checkUser
    );
  }

  setLoggedUser(user: any) {
    this.editUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    if (user !== null) this.router.navigate(['home']);
  }

  editUser(newUser: any) {
    this.currentUser.next(newUser);
  }

  changeSelected(selected: any) {
    this.selectedItem.next(selected);
  }
  logout() {
    localStorage.setItem('user', JSON.stringify(null));
    this.editUser(null);
  }

  deleteMenuItem(i: number) {
    return this.http.delete<any>(`http://localhost:8080/api/menu-items/${i}`);
  }

  getCategories() {
    return this.http.get<Category[]>(`http://localhost:8080/api/categories`);
  }

  createOrUpdateMenuItem(menuItem: MenuItem) {
    return this.http.post<MenuItem>(
      `http://localhost:8080/api/menu-items`,
      menuItem
    );
  }
}
