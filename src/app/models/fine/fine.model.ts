import { Borrowedbook } from "../borrowedbook/borrowedbook.model";

export class Fine {
  constructor(
    public fineID: number,
    //
    public borrowedBookId: number,
    public borrowedBook: Borrowedbook,
    public faidAmount: Number,
    public paidDate: Date,
    public isPaid: boolean,
    public isActive:boolean,
  ) { }
}
