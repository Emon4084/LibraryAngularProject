import { BookReview } from "../bookreview/book-review.model";
import { Borrowedbook } from "../borrowedbook/borrowedbook.model";
import { SubscriptionPlan } from "../subscriptionplan/subscription-plan.model"
import { UserPreference } from "../userpreference/user-preference.model";

export class ApplicationUser {
  constructor(

    // public userInfoId: number = 0,
    // public identityUserId?: string,
    // public roleId?: string, 
    // // public IdentityRole Role,

    // public IsSubscribed?: boolean, 
    // public ProfileImage?: string, 
    // //[NotMapped]
    // //public IFormFile UserImage 
    // public subscriptionId?: number,
    // public subscriptionPlan?: SubscriptionPlan,
    // public userPreference?: UserPreference,
    // public bookReview?: BookReview, 
    // public TransactionId?: string

    
    public roleId: string,
    //public role?: IdentityRole,
    //public isSubscribed: boolean,
    public isActive: boolean,
    public profileImage?: string,
    //public userImage?: IFormFile,
    //public subscriptionId: number,
    public subscriptionPlan?: SubscriptionPlan,
    userPreferences?: UserPreference[],
    bookReviews?: BookReview[],
    borrowedBooks?: Borrowedbook[],
    //bookWishlists?: BookWishlist[],
    public transactionId?: string


  ) { }

}
