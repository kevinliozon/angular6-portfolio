import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsPipe } from './pipe/translations.pipe';
import { TranslationsService } from './service/translations.service';
import { TRANSLATION_PROVIDERS } from './constants/translation';

@NgModule({
  imports: [CommonModule],
  declarations: [TranslationsPipe],
  exports: [TranslationsPipe],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslationsService,
  ]
})
export class TranslationsModule { }
