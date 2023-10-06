import { Book } from "../book/book.model";
import { BookCopy } from "../bookcopy/bookcopy.model";
import { ApplicationUser } from "../userinfo/applicationuser.model";

export class Borrowedbook {
  constructor(
    public BorrowID?: number,
    public userInfoId?: number,
    public UserInfo?: ApplicationUser,
    public bookId?: number,
    public book?: Book,
    public copyId?: number,
    public copy?: BookCopy,
    public BorrowDate?: string,
    public DueDate?: string, 
    public IsReturned?: boolean,
    public ActualReturnDate?: string 
  ) { }
}
