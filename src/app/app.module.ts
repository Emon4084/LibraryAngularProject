import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './account/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { BookreviewComponent } from './components/bookreview/bookreview.component';
import { CategoryComponent } from './components/category/category.component';
import { BookFloorComponent } from './components/bookfloor/bookfloor.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';

import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserpreferenceComponent } from './components/userpreference/userpreference.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';


import { RouterModule, RouterOutlet } from '@angular/router';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SubscriptionPlanComponent } from './components/subscriptionplan/subscriptionplan.component';

import { NavbarComponent } from './userComponents/navbar/navbar.component';
import { SubscribeuserComponent } from './components/subscribeuser/subscribeuser.component';

import { MatCardModule } from '@angular/material/card';

import { MaterialModule } from 'src/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FooterComponent } from './userComponents/footer/footer.component';
import { HomeComponent } from './userComponents/home/home.component';
import { AdminsidenavComponent } from './components/adminsidenav/adminsidenav.component';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book/book-list/book-list.component';

import { AuthInterceptor } from './account/AuthInterceptor';

import { AuthorUiComponent } from './userComponents/author-ui/author-ui.component';
import { BestSelleresUiComponent } from './userComponents/best-selleres-ui/best-selleres-ui.component';
import { BooksUiComponent } from './userComponents/books-ui/books-ui.component';
import { EditorsUiComponent } from './userComponents/editors-ui/editors-ui.component';
import { PublisherUiComponent } from './userComponents/publisher-ui/publisher-ui.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { SearchComponent } from './components/search/search.component';
import { BorrowBookComponent } from './userComponents/borrow-book/borrow-book.component';
import { BookCopyComponent } from './components/book-copy/book-copy.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BookComponent,
    BookreviewComponent,
    CategoryComponent,
    BookFloorComponent,
    PublisherComponent,
    SubcategoryComponent,
    SubscriptionPlanComponent,
    UserinfoComponent,
    UserpreferenceComponent,
    WishlistComponent,
    ConfirmationDialogComponent,
    NavbarComponent,
    SubscribeuserComponent,
    PageHeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminsidenavComponent,
    BookListComponent,
    AuthorUiComponent,
    BestSelleresUiComponent,
    BooksUiComponent,
    EditorsUiComponent,
    PublisherUiComponent,
    DashBoardComponent,
    SearchComponent,
    BorrowBookComponent,
    BookCopyComponent,
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //TooltipModule,
    RouterModule,

    RouterOutlet,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,

    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
