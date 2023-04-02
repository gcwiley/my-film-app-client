import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Route Guard
import { RouteGuard } from './route.guard';

// Film Components
import { FilmFormComponent } from './films/film-form/film-form.component'
import { FilmsListComponent } from './films/film-grid/film-grid.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';

// Auth Components
import { SigninComponent } from './auth/signin/signin.component';

// About Page
import { AboutPageComponent } from './pages/about-page/about-page.component';

// Not Found Page
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsListComponent, pathMatch: 'full' },
  { path: 'films/film/:id', component: FilmDetailsComponent },
  { path: 'create', component: FilmFormComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

