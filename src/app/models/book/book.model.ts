import { Bookauthor } from "../bookauthor/bookauthor.model";

export interface Book {
  bookId?:number;
  title?: string;
  isbn?: string;
  publisherId?: number;
  publishedYear?: Date;
  edition?: string;
  totalCopies?: number;
  language?: string;
  description?: string;
  bookPrice?: number;
  ddcCode?: string;
  isActive?: boolean;
  cover?: string;
  isDigital?: boolean;
  eBook?: string;
  publisherAgreement?: boolean;
  agreementBookCopy?: string;
  categoryId?: number;
  bookAuthor?: Bookauthor[];
  authorIds?: number[];
  authorIdsToRemove?: number[];
  coverFileName: string;
  eBookFileName: string;
  agreementFileName:string;
}
