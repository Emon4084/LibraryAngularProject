import { Book } from "../book/book.model";

export class Publisher {
  constructor(
    public publisherId: number,
    public publisherName: string,
    public address: string,
    public email: string,
    public phoneNumber: string,
    public isActive: boolean,
    books?: Book[]

  ) { }
}
