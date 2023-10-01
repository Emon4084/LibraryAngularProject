import { Book } from "../book/book.model";
import { BookCopy } from "../bookcopy/bookcopy.model";
import { ApplicationUser } from "../userinfo/applicationuser.model";

export class Borrowedbook {
  constructor(
    public BorrowID: Number = 0,
    public userInofId?: number,
    public UserInfo?: ApplicationUser,
    public bookId?: Number,
    public book?: Book,
    public copyId?: Number,
    public copy?: BookCopy,
    public BorrowDate?: string,
    public DueDate?: string, 
    public IsReturned?: boolean,
    public ActualReturnDate?: string 
  ) { }
}
