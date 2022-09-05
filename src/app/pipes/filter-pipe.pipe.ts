import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/carDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDto[], filterCar: string): CarDto[] {
    filterCar = filterCar?filterCar.toLocaleLowerCase():""
    return filterCar?value.filter((c:CarDto)=>c.description.toLocaleLowerCase().indexOf(filterCar)!==-1):value
  }

}
