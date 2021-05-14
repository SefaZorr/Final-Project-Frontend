import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44320/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  //Gelen datayı ProductResponseModel map ediceksin demek.getProduct diyoruz sen susbscribe olunabilir bir
  //ResponseModele dönüceksin.
  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
