import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string): any {

  }

}
