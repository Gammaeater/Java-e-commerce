import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {environment} from "../../../../environments/environment";
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

  getOrdersList() {
    return this.httpClient.get<ProductOrder[]>(`${environment.api.order.orderList}`);
  }

  saveOrder(order: ProductOrders) {
    return this.httpClient.post<>(environment.api.order.orderList, order);
  }

  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next();
  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }
}
