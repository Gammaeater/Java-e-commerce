import { Component, OnInit } from '@angular/core';
import {ProductOrders} from "../model/ProductOrders";
import {ProductService} from "../services/product.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: ProductOrders;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private dataService: ProductService) {
    this.orders = this.dataService.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.dataService.OrdersChanged.subscribe(() => {
      this.orders = this.dataService.ProductOrders;
    });
    this.loadTotal();
  }

  pay() {
    this.paid = true;
    this.dataService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.dataService.TotalChanged.subscribe(() => {
      this.total = this.dataService.Total;
    });
  }

}
