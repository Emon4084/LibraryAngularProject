import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Author } from 'src/app/models/author/author.model';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  author!:Author[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.getAuthor().subscribe(
      (data: any) => {
        this.author = data;
  
        // Log the received data to the console for debugging
        console.log('Books:', this.author);
      },
      (error) => {
        console.error('Error fetching author data:', error);
      }
    );
   
  }
}