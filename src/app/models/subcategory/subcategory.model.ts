import { Category } from "../category/category.model";

export class Subcategory {
  constructor(

    public subCategoryId: number,
    public ddcCode: string,
    public name: string,
    public isActive:boolean,
    public categoryId: number,
    public category: Category
  ) { }

}
