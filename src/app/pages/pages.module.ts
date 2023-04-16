import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // forms

// import material module
import { MaterialModule } from '../material.module';

// import film components module
import { FilmComponentsModule } from '../films/films.module';

// import shared components module
import { SharedComponentsModule } from '../shared/shared.module';

// import page components
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SigninComponent } from './signin-page/signin-page.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		SharedComponentsModule,
	],
	declarations: [
		AboutPageComponent,
		MainPageComponent,
		DetailsPageComponent,
		NotFoundPageComponent,
		SigninComponent,
	],
	exports: [
		AboutPageComponent,
		MainPageComponent,
		DetailsPageComponent,
		NotFoundPageComponent,
		SigninComponent,
	],
})
export class PageComponentsModule {}
