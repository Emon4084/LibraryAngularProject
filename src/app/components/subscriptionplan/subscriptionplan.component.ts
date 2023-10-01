import { Component, OnInit } from '@angular/core';
import { SubscriptionPlanService } from '../../services/subscriptionplan/subscriptionplan.service'; // Import your service
import { SubscriptionPlan } from '../../models/subscriptionplan/subscription-plan.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-subscriptionplan',
  templateUrl: './subscriptionplan.component.html',
  styleUrls: ['./subscriptionplan.component.css']
})

export class SubscriptionPlanComponent implements OnInit {
  subscriptionPlans: SubscriptionPlan[] = [];
  newSubscriptionPlan: SubscriptionPlan = new SubscriptionPlan(0, '', '', 0, false); // Initialize with default values
  editingSubscriptionPlan: SubscriptionPlan | null = null;

  constructor(private subscriptionPlanService: SubscriptionPlanService,
    private dialogService: MatDialog
  ) { }

  ngOnInit() {
    this.loadSubscriptionPlans();
  }

  loadSubscriptionPlans() {
    this.subscriptionPlanService.getSubscriptionPlans().subscribe({
      next: response => {
        console.log(response);
        this.subscriptionPlans = response; // Assign the data to 'subscriptionPlans'
      },
      error: error => {
        console.error('Error loading subscription plans:', error);
      } // Add a closing parenthesis here
    });
  }

  deleteSubscriptionPlan(id: number) {
    const dialogRef = this.dialogService.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.subscriptionPlanService.deleteSubscriptionPlan(id).subscribe({
          next: response => {
            console.log('Subscription plan deleted:', response);
            this.loadSubscriptionPlans();
          },
          error: error => {
            console.error('Error deleting subscription plan:', error);
          },
        });
      }
    });
  }

  createSubscriptionPlan() {
    this.subscriptionPlanService.createSubscriptionPlan(this.newSubscriptionPlan).subscribe({
      next: response => {
        console.log('Subscription plan created:', response);
        this.newSubscriptionPlan = new SubscriptionPlan(0, '', '', 0, false); // Reset the form
        this.loadSubscriptionPlans();
      },
      error: error => {
        console.error('Error creating subscription plan:', error);
      }
    });
  }

  editSubscriptionPlan(subscriptionPlan: SubscriptionPlan) {
    this.editingSubscriptionPlan = { ...subscriptionPlan }; // Create a copy of the subscription plan object
  }

  cancelEdit() {
    this.editingSubscriptionPlan = null;
  }

  saveEdit() {
    if (this.editingSubscriptionPlan) {
      this.subscriptionPlanService
        .updateSubscriptionPlan(this.editingSubscriptionPlan.subscriptionPlanId, this.editingSubscriptionPlan)
        .subscribe({
          next: response => {
            console.log('Subscription plan updated:', response);
            this.loadSubscriptionPlans();
            this.editingSubscriptionPlan = null;
          },
          error: error => {
            console.error('Error updating subscription plan:', error);
          }
        });
    }
  }
}

