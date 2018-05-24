import { Pipe, PipeTransform } from '@angular/core';
import { TranslationsService } from '../service/translations.service'; // our translate service

@Pipe({
  name: 'translate'
})
export class TranslationsPipe implements PipeTransform {

  constructor(private translate: TranslationsService) { }

  transform(value: string, args: any[]): any {
    if (!value) {
      return;
    }
    return this.translate.instant(value);
  }

}
