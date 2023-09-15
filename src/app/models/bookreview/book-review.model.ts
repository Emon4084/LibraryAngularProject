import { Book } from "../book/book.model";
import { ApplicationUser } from "../userinfo/applicationuser.model";

export class BookReview {
  constructor(
    public bookReviewId: number,
    public BookId: number,
    public book: Book,
    public userId: number,
    public user: ApplicationUser,
    public comments: string ,
    public isActive:boolean
    
  ) { }
 
}
