import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // forms

// import the material module
import { MaterialModule } from '../material.module';

// import pipe modules
import { PipesModule } from '../pipes/pipe.module';

// import film components
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmGridComponent } from './film-grid/film-grid.component';
// add new film components here

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PipesModule,
  ],
  declarations: [
    FilmCardComponent,
    FilmDetailsComponent,
    FilmFormComponent,
    FilmGridComponent,
  ],
  exports: [
    FilmCardComponent,
    FilmDetailsComponent,
    FilmFormComponent,
    FilmGridComponent,
  ],
})
export class FilmComponentsModule {}
