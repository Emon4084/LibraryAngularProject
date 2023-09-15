import { Author } from "../author/author.model";
import { Book } from "../book/book.model";

export class Bookauthor {
  constructor(
    public authorId: number,
    public bookId?: number,
    public book?: Book,
    public isActive?: boolean,
    public author?: Author []    

  ) { }

}
