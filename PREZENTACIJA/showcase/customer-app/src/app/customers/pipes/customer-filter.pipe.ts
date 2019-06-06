import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(value: any, filterBy?: string): any {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ?
          value.filter((customer: any) =>  customer.first_name.toLocaleLowerCase().indexOf(filterBy) !== -1)
          :
          value;
  }
}
