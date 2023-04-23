// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // use for both types of forms
import { HttpClientModule } from '@angular/common/http';

// Set Up Firebase
import { AngularFireModule } from '@angular/fire/compat';

// Load environment - FOLLOW UP
import { environment } from '../environments/environment';

// Angular Material Modules
import { MaterialModule } from './material.module';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// import pipes
import { PipesModule } from './pipes/pipe.module';

// Main App Component
import { AppComponent } from './app.component';

// Page Components
import { PageComponentsModule } from './pages/pages.module';

// Shared Components
import { SharedComponentsModule } from './shared/shared.module';

// Film Components
import { FilmComponentsModule } from './films/films.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    PageComponentsModule,
    FilmComponentsModule,
    SharedComponentsModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
