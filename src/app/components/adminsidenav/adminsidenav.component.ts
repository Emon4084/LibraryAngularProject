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
}
