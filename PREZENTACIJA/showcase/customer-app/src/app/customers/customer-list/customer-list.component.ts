import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public userList: any[];
  public joinCallObservable;
  public listFilter = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getList(0);
  }

  ngOnDestroy(): void {
  }

  public getList(delay: number = 10, page: number = 1): void {
    this.isLoading = true;
    this.joinCall(delay, page);

    this.joinCallObservable.subscribe(() => {
      this.isLoading = false;
      console.log('All HTTP calls successful');
    }, error => {
      this.isLoading = false;
      alert('error');
    });
  }

  private joinCall(delay: number = 10, page: number = 1) {
    const getUsers = this.dataService.getUsers(delay, page);

    this.joinCallObservable = forkJoin(getUsers)
      .pipe(map((responseArray: [any[]]) => {
          this.userList = responseArray[0];
      }));
  }

  public onRatingClicked(event): void {
    alert('I received the rating from the child component: ' + event);
  }
}

