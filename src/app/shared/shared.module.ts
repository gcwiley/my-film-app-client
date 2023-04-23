import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import the material module
import { MaterialModule } from '../material.module';

// import shared components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
// add new shared components here

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [FooterComponent, HeaderComponent, HeroComponent],
  exports: [FooterComponent, HeaderComponent, HeroComponent],
})
export class SharedComponentsModule {}
