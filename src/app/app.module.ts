// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for template forms
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

// Set Up Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

// Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Modules
import { MaterialModule } from './material.module';

// Main App Component
import { AppComponent } from './app.component';

// Film Components
import { FilmsListComponent } from './films/film-grid/film-grid.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { FilmFormComponent } from './films/film-form/film-form.component';

// Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './layout/banner/banner.component';

// Auth Components
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

// Feedback Components
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ThemePickerComponent } from './shared/theme-picker/theme-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmFormComponent,
    FilmDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    BannerComponent,
    FeedbackListComponent,
    FeedbackFormComponent,
    SigninComponent,
    NavMenuComponent,
    CarouselComponent,
    ThemePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
