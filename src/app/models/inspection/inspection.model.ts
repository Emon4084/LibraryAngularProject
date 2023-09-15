import { Borrowedbook } from "../borrowedbook/borrowedbook.model";
import { BookCopy } from "../bookcopy/bookcopy.model";

export class Inspection {
  constructor(
    public inspectionId: number, 
    public Comment: string,
    public copyId: number,
    public isActive:boolean,
    public bookcopyId:number,
    public bookcopy: BookCopy,
    public borrowBookId: number,
    public borrowedBook?: Borrowedbook
  ) { }
}
