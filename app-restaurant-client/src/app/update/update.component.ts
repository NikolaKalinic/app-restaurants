import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Category } from '../category';
import { MenuItem, MenuItemInterface } from '../MenuItem';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public categories: Category[];
  public newMenuItem: MenuItem;
  @Output() updateView: EventEmitter<void> = new EventEmitter();
  constructor(private appService: AppService) {
    this.categories = [];
    this.newMenuItem = {
      id: -1,
      name: '',
      category: { id: -1, name: '' },
      price: null,
    };
  }

  ngOnInit(): void {
    this.appService.getCategories().subscribe((res) => (this.categories = res));

    this.appService.selected.subscribe((res) => (this.newMenuItem = res));
  }

  async createMenuItem() {
    console.log(this.newMenuItem);
    const response = await this.appService
      .createOrUpdateMenuItem(this.newMenuItem)
      .toPromise();

    this.updateView.emit();
  }
}
