import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`http://localhost:3001/products/`)
}

getProductById(id:any): Observable<Product> {
    return this._http.get<Product>(`http://localhost:3001/products/${id}`)
}
}
