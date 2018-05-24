import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from './pipes/pipes.module';
import { TranslationsModule } from '../translations/translations.module';
// Components
import { CardComponent } from './components/card/card.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    PipesModule,
    TranslationsModule
  ],
  declarations: [
    CardComponent,
    CookieBannerComponent,
  ],
  exports: [
    CardComponent,
    CookieBannerComponent,
  ]
})
export class SharedModule { }
