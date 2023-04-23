import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // forms

// import the material module
import { MaterialModule } from '../material.module';

// import the film components module
import { FilmComponentsModule } from '../films/films.module';

// import the shared components module
import { SharedComponentsModule } from '../shared/shared.module';

// import individual page components
import { AboutPageComponent } from './about-page/about-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FilmComponentsModule,
    SharedComponentsModule,
  ],
  declarations: [
    AboutPageComponent,
    CreatePageComponent,
    DetailsPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SigninPageComponent,
    SignupPageComponent,
  ],
  exports: [
    AboutPageComponent,
    CreatePageComponent,
    DetailsPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SigninPageComponent,
    SignupPageComponent,
  ],
})
export class PageComponentsModule {}
