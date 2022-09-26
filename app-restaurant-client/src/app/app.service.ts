import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

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
}
