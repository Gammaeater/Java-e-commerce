import {Component, OnInit, ViewChild} from '@angular/core';
import {SubjectSubscription} from "rxjs/internal-compatibility";
import {ProductService} from "../services/product.service";
import {Product} from "../model/Product";
import { Subscription } from 'rxjs';
import {ProductOrder} from "../model/ProductOrder";
import {ProductOrders} from "../model/ProductOrders";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";
import {OrdersComponent} from "../orders/orders.component";
import {ProductComponent} from "../product/product.component";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: ProductComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;



  constructor() {
  }

  ngOnInit() {

  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }



}
