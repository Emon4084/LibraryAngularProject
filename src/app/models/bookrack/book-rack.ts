import { Shelf } from "../shelf/shelf.model";

export class BookRack {
    constructor(
      public bookRackId: number,
      public bookRackName: string,
      public shelfId: number,
      public shelf: Shelf 
    ) {}
  }