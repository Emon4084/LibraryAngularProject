import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faCoffee = faCoffee;
  
}
