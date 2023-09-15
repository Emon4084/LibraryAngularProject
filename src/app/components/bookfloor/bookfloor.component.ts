import { Component, OnInit } from '@angular/core';
import { BookFloorService } from '../../services/bookfloor/bookfloor.service';
import {BookFloor} from '../../models/bookfloor/bookfloor.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-floor',
  templateUrl: './bookfloor.component.html',
  styleUrls: ['./bookfloor.component.css']
})
export class BookFloorComponent {

  bookFloors: BookFloor[] = [];
  newBookFloor: BookFloor = new BookFloor(0, '', false); // Initialize with default values
  editingBookFloor: BookFloor | null = null;

  constructor(private bookFloorService: BookFloorService,
    private dialogService: MatDialog
  ) { }

  ngOnInit() {
    this.loadBookFloors();
  }

  loadBookFloors() {
    this.bookFloorService.getBookFloors().subscribe({
      next: response => {
        console.log(response);
        this.bookFloors = response; // Assign the data to 'BookFloors'
      },
      error: error => {
        console.error('Error loading BookFloors:', error);
      }
    });
  }

  // deleteBookFloor(id: number) {
  //   this.BookFloorService.deleteBookFloor(id).subscribe({
  //     next: response => {
  //       console.log('BookFloor deleted:', response);
  //       this.loadBookFloors();
  //     },
  //     error: error => {
  //       console.error('Error deleting BookFloor:', error);
  //     }
  //   });
  // }
  deleteBookFloor(id: number) {
    const dialogRef = this.dialogService.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.bookFloorService.deleteBookFloor(id).subscribe({
          next: response => {
            console.log('BookFloor deleted:', response);
            this.loadBookFloors();
          },
          error: error => {
            console.error('Error deleting BookFloor:', error);
          },
        });
      }
    });
  }


  createBookFloor() {
    this.bookFloorService.postBookFloor(this.newBookFloor).subscribe({
      next: response => {
        console.log('BookFloor created:', response);
        this.newBookFloor = new BookFloor(0, '',false); // Reset the form
        this.loadBookFloors();
      },
      error: error => {
        console.error('Error creating BookFloor:', error);
      }
    });
  }

  editBookFloor(bookFloor: BookFloor) {
    this.editingBookFloor = { ...bookFloor }; // Create a copy of the BookFloor object
  }

  cancelEdit() {
    this.editingBookFloor = null;
  }

  // saveEdit() {
  //   if (this.editingBookFloor) {
  //     this.BookFloorService.putBookFloor(this.editingBookFloor).subscribe({
  //       next: response => {
  //         console.log('BookFloor updated:', response);
  //         this.loadBookFloors();
  //         this.editingBookFloor = null;
  //       },
  //       error: error => {
  //         console.error('Error updating BookFloor:', error);
  //       }
  //     });
  //   }
  // }
  saveEdit() {
    if (this.editingBookFloor) {
      this.bookFloorService
        .putBookFloor(this.editingBookFloor.bookFloorId, this.editingBookFloor)
        .subscribe({
          next: response => {
            console.log('BookFloor updated:', response);
            this.loadBookFloors();
            this.editingBookFloor = null;
          },
          error: error => {
            console.error('Error updating BookFloor:', error);
          }
        });
    }
  }


}
