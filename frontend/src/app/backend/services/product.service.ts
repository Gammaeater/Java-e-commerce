import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {environment} from "../../../environments/environment";
import {ProductOrders} from "../model/ProductOrders";
import {ProductOrder} from "../model/ProductOrder";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private httpClient: HttpClient) { }



  getProductList() {
    return this.httpClient.get<Product[]>(`${environment.api.products.productList}`);
  }
  saveOrder(order: ProductOrders) {
    return this.httpClient.post(environment.api.order.orderList, order);
  }
}
