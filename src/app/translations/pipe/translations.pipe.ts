import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translations'
})
export class TranslationsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
