import { Book } from "../book/book.model";
import { ApplicationUser } from "../userinfo/applicationuser.model";

export class BookWishlist {
  constructor(
    public bookwishListId: number, 
    public isActive:boolean,
    public userId: string,
    public user: ApplicationUser,
    public bookId: number,
    public book: Book
  ) { }
}
