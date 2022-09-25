import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';

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
}
