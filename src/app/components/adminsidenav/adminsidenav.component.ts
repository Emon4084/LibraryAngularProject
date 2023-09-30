import { Component } from '@angular/core';

import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adminsidenav',
  templateUrl: './adminsidenav.component.html',
  styleUrls: ['./adminsidenav.component.css']
})
export class AdminsidenavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop
  faBox = faBox;
  faMoneyBill =faMoneyBill
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;


  navItems = [
    {
      label: 'Dashboard',
      routerLink: 'Dashboard',
      iconClass: 'fa-solid fa-gauge',
      isActive: false
    },
    {
      label: 'Category',
      routerLink: 'Category',
      iconClass: 'fa-solid fa-forward-step',
      isActive: false
    },
    {
      label: 'Publisher',
      routerLink: 'Publisher',
      iconClass: 'fa-solid fa-book-atlas',
      isActive: false
    },
    {
      label: 'Book Floor',
      routerLink: 'Bookfloor',
      iconClass: 'fa-solid fa-forward-step',
      isActive: false
    },
    {
      label: 'Subscriptions',
      routerLink: 'Subscriptions',
      iconClass: 'fa-solid fa-forward-step',
      isActive: false
    },
    // Add similar items for other links
  ];

  toggleActive(clickedItem: any) {
    // Reset the active state for all items
    this.navItems.forEach(item => {
      item.isActive = false;
    });

    // Set the active state for the clicked item
    clickedItem.isActive = true;
  }
}
