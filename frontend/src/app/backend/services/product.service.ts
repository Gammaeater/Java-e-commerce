import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // getProductList() {
  //   return this.httpClient.get<Product[]>(url: "http://localhost:4200/api");
  // }
}
