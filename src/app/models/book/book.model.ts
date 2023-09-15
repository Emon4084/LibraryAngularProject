import { Bookauthor } from "../bookauthor/bookauthor.model";
import { BookCopy } from "../bookcopy/bookcopy.model";
import { BookReview } from "../bookreview/book-review.model";
import { BookWishlist } from "../bookwishlist/wishlist.model";
import { Borrowedbook } from "../borrowedbook/borrowedbook.model";
import { Category } from "../category/category.model";
import { Publisher } from "../publisher/publisher.model";

// export class Book {
//   constructor(
    // public BookId?: number,
    // public Title?: string,
    // public ISBN?: string,
    //
    // public PublisherId?: string,
    // public Publisher?: Publisher,
    // public PublishedYear?: string,
    // public Edition?: string,
    // public TotalCopies?: string,
    // public Language?: string,
    // public Description?: string,
    // public BookPrice?: number,
    // public RentPrice?: string,
    // public DDCCode?: string,
    // public Cover?: string,

    // //[NotMapped] 
    // //    public IFormFile Cover { get; set; }

    // public IsDigital?: string,

    // //[NotMapped]
    // //    public IFormFile EBook { get; set; }

    
    // public PublisherAgreement?: string,
    // //[NotMapped]
    // //    public IFormFile AgreementCopy { get; set; }

    // public CategoryId: number=0,
    // public category?: Category

    export class Book {
      constructor(
        public bookId: number,
        public title: string ,
        public isbn: string ,
        public publisherId:number ,
        public publisher: Publisher,
        public publishedYear: Date,
        public edition: string ,
        public totalCopies: number,
        public language: string ,
        public description: string,
        public bookPrice: number ,
        public rentPrice: number ,
        public ddcCode: string,
        public isActive: boolean,
        public cover: File ,
        public isDigital: boolean,
        public eBook: File ,
        public publisherAgreement: boolean,
        public agreementBookCopy: File ,
        public categoryId: number,
        public category: Category,
        public bookAuthor?: Bookauthor[] ,
        public copies?: BookCopy[] ,
        public bookReviews?: BookReview[] ,
        public bookWishlists?: BookWishlist[] ,
        public borrowedBooks?: Borrowedbook[]
      ) {}
    }

