import { Bookauthor } from "../bookauthor/bookauthor.model"

export interface Author {
  authorId: number
  firstName: string
  lastName: string
  birthDate: string
  biography: string
  email: string
  phone: string
  isActive: boolean
  //bookAuthor: Bookauthor[]
}