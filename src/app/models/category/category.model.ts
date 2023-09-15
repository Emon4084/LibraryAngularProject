import { Book } from "../book/book.model";
import { Subcategory } from "../subcategory/subcategory.model";
import { UserPreference } from "../userpreference/user-preference.model";

export class Category {
  constructor(
    public categoryId: number,
    public categoryName: string,
    public ddcCode: string,
    public isActive:boolean,
    public subcategories?: Subcategory[],
    public book?: Book[],
    public userPreference?: UserPreference[]

  ) { }
}
