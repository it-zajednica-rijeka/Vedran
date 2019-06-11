import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<any[]> | Promise<any[]> {
    return this.httpClient
			         .get(`${environment.dummyRestApi}/${'api/v1/employees'}`)
               .pipe(map((res: any[]) => res));
  }

  public getUsers(delay: number = 10, page: number = 1): Observable<any[]> | Promise<any[]> {
    return this.httpClient
			         .get(`${environment.reqresRestApi}/${'api/users?'}${'delay='}${delay}${'&page='}${page}`)
               .pipe(map((res: any[]) => res));
  }

  public getCustomers(): Observable<any[]> {
    return this.httpClient
			         .get(`${environment.jsonPlaceholderRestApi}/${'users'}`)
               .pipe(map((res: any[]) => res));
  }

  public getCustomerPosts(customerId: number): Observable<any[]> {
    return this.httpClient
               .get('https://jsonplaceholder.typicode.com/posts?userId=' + customerId.toString())
               .pipe(map((res: any[]) =>
                   res
                ));
  }

  public getCustomerToDos(customerId: number): Observable<any[]> | Promise<any[]> {
    return this.httpClient
               .get('https://jsonplaceholder.typicode.com/todos' + customerId === null ? '' : '?userId=' + customerId.toString())
               .pipe(map((res: any[]) => res));
  }

  public getBadges(): Observable<any[]> {
    return this.httpClient
               .get(' https://teamtreehouse.com/matthew.json')
               .pipe(map((res: any[]) => res));
  }
}
