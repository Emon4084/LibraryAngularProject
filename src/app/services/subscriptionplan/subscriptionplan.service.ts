import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SubscriptionPlan } from '../../models/subscriptionplan/subscription-plan.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {
  private readonly url: string = environment.apiBaseUrl + '/SubscriptionPlans';

  constructor(private http: HttpClient) { }

  getSubscriptionPlans(): Observable<SubscriptionPlan[]> {
    return this.http.get<SubscriptionPlan[]>(this.url);
  }

  getSubscriptionPlan(id: number): Observable<SubscriptionPlan | null> {
    return this.http.get<SubscriptionPlan>(`${this.url}/${id}`);
  }

  createSubscriptionPlan(subscriptionPlanData: SubscriptionPlan): Observable<SubscriptionPlan | null> {
    return this.http.post<SubscriptionPlan>(this.url, subscriptionPlanData);
  }

  updateSubscriptionPlan(id: number, subscriptionPlanData: SubscriptionPlan): Observable<any> {
    return this.http.put(`${this.url}/${id}`, subscriptionPlanData);
  }

  deleteSubscriptionPlan(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
