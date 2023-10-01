import { Author } from "../author/author.model";
import { Category } from "../category/category.model";
import { ApplicationUser } from "../userinfo/applicationuser.model";

export class UserPreference {

  constructor(
    public userPreferenceId: number,
    public isActive:boolean,
    public userInfoId: string,
    public user: ApplicationUser,
    public categoryId: number,
    public category: Category,
    public authorId: number,
    public author: Author 
  ) { }
}
