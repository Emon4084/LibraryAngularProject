import { ApplicationUser } from "../userinfo/applicationuser.model";


export class SubscriptionPlan {
  constructor(
    public subscriptionPlanId: number,
    public planName: string,
    public planDescription: string, 
    public planPrice: number,
    public isActive:boolean,
    user?: ApplicationUser[]
  ) { }
}
