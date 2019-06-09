import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://localhost:3000/products';

  constructor(private _http: HttpClient) {}

  public getAllProducts(): Observable <IProduct[]> {

    return this._http.get<IProduct[]>(this.URL);

  }
}
