import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Author } from 'src/app/models/author/author.model';
import { AuthorService } from 'src/app/services/author/author.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  authors: Author[] = [];
  newAuthor= {
    firstName: '',
    lastName: '',
    birthDate: '',
    biography: '',
    email: '',
    phone: '',
    isActive: true,
  };
  editingAuthor: Author | null = null;

  constructor(private authorService: AuthorService, private dl: MatDialog) {}
  ngOnInit() {
    this.loadAuthor();
  }

  loadAuthor() {
    this.authorService.getAuthors().subscribe({
      next: (response) => {
        this.authors = response;
      },
      error: (error) => {
        console.error('Error', error);
      },
    });
  }

  deleteAuthor(id: number) {
    const dlog = this.dl.open(ConfirmationDialogComponent);

    dlog.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.authorService.deleteAuthor(id).subscribe({
          next: (response) => {
            response;
            this.loadAuthor();
          },
          error: (error) => {
            console.error('Error', error);
          },
        });
      }
    });
  }

  createAuthor() {
    this.authorService.postAuthor(this.newAuthor).subscribe({
      next: (r) => {
        this.newAuthor;
        this.loadAuthor();
      },
      error: (error) => console.error('Error', error),
    });
  }

  editAuthor(author: Author) {
    this.editingAuthor = { ...author };
  }

  cancelEdit() {
    this.editingAuthor = null;
  }

  saveEdit(){
    if(this.editingAuthor){
      this.authorService.putAuthor(this.editingAuthor.authorId, this.editingAuthor).subscribe({
        next: respone=>{
          this.loadAuthor();
          this.editingAuthor = null;
        },
        error:error=>console.error("Error", error)
      })
    }
  }

}
