import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private httpClient: HttpClient) { }



  getEmployees(): Observable<any[]> | Promise<any[]> {
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees')
      .pipe(map((res: any[]) => res));
  }

  getUsers(): Observable<any[]> | Promise<any[]> {
    return this.httpClient.get('https://reqres.in/api/users?delay=10')
      .pipe(map((res: any[]) => res));
  }
}
