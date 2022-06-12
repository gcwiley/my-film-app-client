import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Film Components
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';

// Auth Components
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

// About Page
import { AboutPageComponent } from './about-page/about-page.component';

// Not Found Page
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsListComponent, pathMatch: 'full' },
  { path: 'films/film/:id', component: FilmDetailsComponent },
  { path: 'create', component: FilmCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

