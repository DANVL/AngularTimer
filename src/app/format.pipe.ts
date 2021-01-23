import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    value = value > 999 ? (value - value % 1000) / 1000  : 0;
    
    value = Number(value);
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = Math.floor(value % 3600 % 60);

    let hh = h > 9 ? h : '0' + h;
    let mm = m > 9 ? m : '0' + m;
    let ss = s > 9 ? s : '0' + s;


    return hh + ':' + mm + ':' + ss;
  }
}