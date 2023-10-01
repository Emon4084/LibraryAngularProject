import { Book } from "../book/book.model";
import { Borrowedbook } from "../borrowedbook/borrowedbook.model";
import { Inspection } from "../inspection/inspection.model";
import { Shelf } from "../shelf/shelf.model";

export enum BookCondition {
  ToRepair,
  Damaged,
}

export class BookCopy {
  constructor(
    public bookCopyId: number,
    public callNumber: string,
    public isAvailable: boolean,
    public isActive: boolean,
    public condition: BookCondition,
    public bookId: number,
    public shelfId: number,
    public shelf?: Shelf,
    public book?: Book,
    public borrowedBooks?: Borrowedbook[],
    public inspections?: Inspection[]
  ) {}
}
