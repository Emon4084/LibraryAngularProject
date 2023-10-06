import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { BookFloorComponent } from './components/bookfloor/bookfloor.component';
import { SubscriptionPlanComponent } from './components/subscriptionplan/subscriptionplan.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { SubscribeuserComponent } from './components/subscribeuser/subscribeuser.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './userComponents/home/home.component';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';

import { AuthGuard } from './account/auth.guard';
import { AdminsidenavComponent } from './components/adminsidenav/adminsidenav.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

import { AuthorUiComponent } from './userComponents/author-ui/author-ui.component';
import { PublisherUiComponent } from './userComponents/publisher-ui/publisher-ui.component';
import { BooksUiComponent } from './userComponents/books-ui/books-ui.component';
import { BestSelleresUiComponent } from './userComponents/best-selleres-ui/best-selleres-ui.component';
import { EditorsUiComponent } from './userComponents/editors-ui/editors-ui.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BorrowBookComponent } from './userComponents/borrow-book/borrow-book.component';
//import { AuthorizationGuard } from './gurads/authorization.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/navbar', component: AdminsidenavComponent},
  { path: 'dashBorad', component: DashBoardComponent},
  //{ path: '**', redirectTo: '/'},
  //{path: 'login', component:LoginComponent},
  //{path: 'register', component:RegisterComponent},
  { path:  'Publisher', component: PublisherComponent},
  { path: 'Bookfloor', component: BookFloorComponent },
  { path: 'Subscriptions', component: SubscriptionPlanComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Subcategory', component: SubcategoryComponent },
  { path: 'Author', component: AuthorComponent },
  { path: 'Book', component: BookComponent },
  {path: 'account', loadChildren:() => import('./account/account.module').then(module => module.AccountModule)},
  //{path: 'borrow-book/:id', component: BorrowBookComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      {path: 'borrow-book/:id', component: BorrowBookComponent}
    ]
  },

  {path:'authorui', component:AuthorUiComponent},
  {path:'publisherui', component:PublisherUiComponent},
  {path:'books', component:BooksUiComponent},
  {path:'best-sellers', component:BestSelleresUiComponent},
  {path:'editors-picks', component:EditorsUiComponent},

  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
