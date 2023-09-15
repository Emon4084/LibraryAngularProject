// import { Component, OnInit } from '@angular/core';
// import { PublisherService } from '../../services/publisher/publisher.service';
// import { Publisher } from '../../models/publisher/publisher.model';

// @Component({
//   selector: 'app-publisher',
//   templateUrl: './publisher.component.html',
//   styleUrls: ['./publisher.component.css']
// })
// export class PublisherComponent implements OnInit {
//   publishers: Publisher[] = [];
//   newPublisher: Publisher = new Publisher(0, '', '', '', '',false);
//   editingPublisher: Publisher | null = null;

//   constructor(private publisherService: PublisherService) {}

//   ngOnInit() {
//     this.loadPublishers();
//   }

//   loadPublishers() {
//     this.publisherService.getPublishers().subscribe({
//       next: (response) => {
//         this.publishers = response; // Use the response directly
//       },
//       error: (error) => {
//         console.error('Error loading publishers:', error);
//       }
//     });
//   }

//   deletePublisher(id: number) {
//     this.publisherService.deletePublisher(id).subscribe({
//       next: (response) => {
//         console.log('Publisher deleted:', response);
//         this.loadPublishers();
//       },
//       error: (error) => {
//         console.error('Error deleting publisher:', error);
//       }
//     });
//   }

//   createPublisher() {
//     this.publisherService.postPublisher(this.newPublisher).subscribe({
//       next: (response) => {
//         console.log('Publisher created:', response);
//         this.newPublisher = new Publisher(0, '', '', '', '',false); // Reset the form
//         this.loadPublishers();
//       },
//       error: (error) => {
//         console.error('Error creating publisher:', error);
//       }
//     });
//   }

//   editPublisher(publisher: Publisher) {
//     this.editingPublisher = { ...publisher }; // Create a copy of the publisher object
//   }

//   cancelEdit() {
//     this.editingPublisher = null;
//   }
//   saveEdit() {
//     if (this.editingPublisher) {
//       this.publisherService
//         .putPublisher(this.editingPublisher.id, this.editingPublisher)
//         .subscribe({
//           next: (response) => {
//             console.log('Publisher updated:', response);
//             this.loadPublishers();
//             this.editingPublisher = null;
//           },
//           error: (error) => {
//             console.error('Error updating publisher:', error);
//           }
//         });
//     }
//   }
//   }
import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../services/publisher/publisher.service';
import { Publisher } from '../../models/publisher/publisher.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})

export class PublisherComponent implements OnInit {
  publishers: Publisher[] = [];
  newPublisher: Publisher = new Publisher(0, '', '', '', '',false); // Initialize with default values
  editingPublisher: Publisher | null = null;

  constructor(private publisherService: PublisherService,
    private dialogService: MatDialog
    ) { }

  ngOnInit() {
    this.loadPublishers();
  }

  loadPublishers() {
    this.publisherService.getPublishers().subscribe({
      next: response => {
        console.log(response);
        this.publishers = response; // Assign the data to 'publishers'
      },
      error: error => {
        console.error('Error loading publishers:', error);
      }
    });
  }

  // deletePublisher(id: number) {
  //   this.publisherService.deletePublisher(id).subscribe({
  //     next: response => {
  //       console.log('Publisher deleted:', response);
  //       this.loadPublishers();
  //     },
  //     error: error => {
  //       console.error('Error deleting publisher:', error);
  //     }
  //   });
  // }
  deletePublisher(id: number) {
    const dialogRef = this.dialogService.open(ConfirmationDialogComponent);
  
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.publisherService.deletePublisher(id).subscribe({
          next: response => {
            console.log('Publisher deleted:', response);
            this.loadPublishers();
          },
          error: error => {
            console.error('Error deleting publisher:', error);
          },
        });
      }
    });
  }
  

  createPublisher() {
    this.publisherService.postPublisher(this.newPublisher).subscribe({
      next: response => {
        console.log('Publisher created:', response);
        this.newPublisher = new Publisher(0, '', '', '', '',false); // Reset the form
        this.loadPublishers();
      },
      error: error => {
        console.error('Error creating publisher:', error);
      }
    });
  }

  editPublisher(publisher: Publisher) {
    this.editingPublisher = { ...publisher }; // Create a copy of the publisher object
  }

  cancelEdit() {
    this.editingPublisher = null;
  }

  // saveEdit() {
  //   if (this.editingPublisher) {
  //     this.publisherService.putPublisher(this.editingPublisher).subscribe({
  //       next: response => {
  //         console.log('Publisher updated:', response);
  //         this.loadPublishers();
  //         this.editingPublisher = null;
  //       },
  //       error: error => {
  //         console.error('Error updating publisher:', error);
  //       }
  //     });
  //   }
  // }
  saveEdit() {
    if (this.editingPublisher) {
      this.publisherService
        .putPublisher(this.editingPublisher.publisherId, this.editingPublisher)
        .subscribe({
          next: response => {
            console.log('Publisher updated:', response);
            this.loadPublishers();
            this.editingPublisher = null;
          },
          error: error => {
            console.error('Error updating publisher:', error);
          }
        });
    }
  }


}
