import { Category } from './category';

export class MenuItem implements MenuItemInterface {
  public id: number;
  public name: string;
  public price: number;
  public category: Category;

  constructor(miCfg: MenuItemInterface) {
    this.id = miCfg.id;
    this.name = miCfg.name;
    this.price = miCfg.price;
    this.category = miCfg.category;
  }
}

export interface MenuItemInterface {
  id: number;
  name: string;
  price: number;
  category: Category;
}
