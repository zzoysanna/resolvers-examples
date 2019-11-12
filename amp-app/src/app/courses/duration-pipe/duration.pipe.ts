import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let result;
    const minutes = value % 60;
    const hours = (value - minutes) / 60;
    result = hours > 0 ? `${hours} h ` : '';
    result += minutes > 0 ? `${minutes} min` : '';
    return result;
  }

}
