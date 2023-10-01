import { BookCopy } from "../bookcopy/bookcopy.model";
import { BookFloor } from "../bookfloor/bookfloor.model";
import { BookRack } from "../bookrack/book-rack";


export class Shelf {
  constructor(
    public shelfId: number,
    public isActive:boolean,
    public shelfName: string,
    public bookFloorId: number,
    public bookfloor: BookFloor,
     bookCopies?: BookCopy[],
     bookracks?:BookRack[]
  ) {}
}
