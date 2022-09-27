import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './MenuItem';
import { User } from './User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private currentUser = new BehaviorSubject<User | null>(null);
  cast = this.currentUser.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.editUser(localStorage.getItem('user'));
  }

  getAllMenuItems() {
    return this.http.get<MenuItem[]>('http://localhost:8080/api/menu-items');
  }

  filterByName(name: string) {
    return this.http.get<MenuItem[]>(
      `http://localhost:8080/api/menu-items/filter=${name}`
    );
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

  logout() {
    localStorage.setItem('user', JSON.stringify(null));
    this.editUser(null);
  }

  deleteMenuItem(i: number) {
    return this.http.delete<any>(`http://localhost:8080/api/menu-items/${i}`);
  }
}
