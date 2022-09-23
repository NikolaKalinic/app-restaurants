export class Category implements CategoryInterface {
  public id: number;
  public name: string;

  constructor(category: CategoryInterface) {
    this.id = category.id;
    this.name = category.name;
  }
}
export interface CategoryInterface {
  id: number;
  name: string;
}
