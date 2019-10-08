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

  //
  // productList: Product[];
  // // orderList: ProductOrder
  // subscriptions = new Subscription();
  // productOrders: ProductOrder[] = [];
  // selectedProductOrder: ProductOrder;
  // private shoppingCartOrders: ProductOrders;
  // // productSelected: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // this.productOrders = [];
    // this.loadProducts();
    // this.loadOrders();
    // // this.subscriptions.add(this.dataservice.getProductList().subscribe(
    // //   (data) => {
    // //     this.productList = data;
    // //   }
    // // ))
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

  // loadProducts() {
  //   this.dataservice.getProductList()
  //     .subscribe(
  //       (products: any[]) => {
  //         this.productList = products;
  //         this.productList.forEach(product => {
  //           this.productOrders.push(new ProductOrder());
  //         })
  //       },
  //       (error) => console.log(error)
  //     );
  // }

  // loadOrders() {
  //   this.dataservice.getOrdersList().subscribe(
  //     (orders: any[]) => {
  //       this.productOrders = orders;
  //       this.productOrders.forEach
  //
  //     }
  //   )
  // }

  // loadOrders() {
  //   this.subscriptions = this.dataservice.OrdersChanged.subscribe(() => {
  //     this.shoppingCartOrders = this.dataservice.ProductOrders;
  //   });
  // }

}
