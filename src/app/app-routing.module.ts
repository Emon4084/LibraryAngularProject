import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { BookFloorComponent } from './components/bookfloor/bookfloor.component';
import { SubscriptionPlanComponent } from './components/subscriptionplan/subscriptionplan.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { SubscribeuserComponent } from './components/subscribeuser/subscribeuser.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path:  'Publisher', component: PublisherComponent },
  { path: 'Bookfloor', component: BookFloorComponent },
  { path: 'Subscriptions', component: SubscriptionPlanComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Author', component: AuthorComponent },
  { path: 'Book', component: BookComponent },
  {path: 'account', loadChildren:() => import('./account/account.module').then(module => module.AccountModule)},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
