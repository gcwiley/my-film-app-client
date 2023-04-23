import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the route guard
import { RouteGuard } from './guards/route.guard';

// import the main page
import { MainPageComponent } from './pages/main-page/main-page.component';

// import the about page
import { AboutPageComponent } from './pages/about-page/about-page.component';

// import the create page
import { CreatePageComponent } from './pages/create-page/create-page.component';

// import the details page
import { DetailsPageComponent } from './pages/details-page/details-page.component';

// import the Not Found Page
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// import sign in page
import { SigninPageComponent } from './pages/signin-page/signin-page.component';

// import sign up page
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'films/film/:id', component: DetailsPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
