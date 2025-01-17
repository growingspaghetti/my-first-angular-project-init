import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value === 'string') {
      return value.replace('猫', '犬');
    } else {
      return value;
    }
  }

}
