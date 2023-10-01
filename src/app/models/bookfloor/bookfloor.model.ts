import { Shelf } from "../shelf/shelf.model";

export class BookFloor {
  constructor(
    public bookFloorId: number,
    public bookFloorName: string,
    public isActive: boolean,
    
    shelves?: Shelf[]

  ) { }
}

