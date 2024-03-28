import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true
})
export class CountrycodePipe implements PipeTransform {

  transform(value: unknown, args: string): unknown {
    if(args == "INR") return "+91-"+value
    else if(args == "USA") return "+1-"+value
    else return value
  }

}
