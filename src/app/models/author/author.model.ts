import { Bookauthor } from "../bookauthor/bookauthor.model";
import { UserPreference } from "../userpreference/user-preference.model";

export class Author {
  constructor(
    public authorId: number ,
    public firstName: string,
    public lastName:string,
    public birthDate:Date,
    public biography:string,
    public Email: string,
    public Phone: string,
    public isActive:boolean,
    bookAuthor?: Bookauthor[],
    userPreference?: UserPreference[]
    ) { }

}
