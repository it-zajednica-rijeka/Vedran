import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/customers/services/data.service';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public customerList: any[];
  public customerPosts: any[];
  public selectedId: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomers()
      .pipe(map(res => {
        return res;
      }))
      .toPromise()
      .then(x => {
        this.customerList = x;
      });
  }

  public changeCustomer(e) {
    this.dataService.getCustomerPosts(this.selectedId)
      .pipe(map(res => {
        return res;
      }))
      .toPromise()
      .then(x => {
        this.customerPosts = x;
      });
  }
}
