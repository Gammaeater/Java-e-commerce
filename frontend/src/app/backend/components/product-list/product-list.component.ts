import {Component, OnInit} from '@angular/core';
import {SubjectSubscription} from "rxjs/internal-compatibility";
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/Product";
import { Subscription } from 'rxjs';
import {ProductOrder} from "../../model/ProductOrder";
import {ProductOrders} from "../../model/ProductOrders";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  // orderList: ProductOrder
  subscriptions = new Subscription();
  productOrders: ProductOrder[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  // productSelected: boolean = false;

  constructor(private dataservice: ProductService) {
  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
    // this.subscriptions.add(this.dataservice.getProductList().subscribe(
    //   (data) => {
    //     this.productList = data;
    //   }
    // ))
  }

  loadProducts() {
    this.dataservice.getProductList()
      .subscribe(
        (products: any[]) => {
          this.productList = products;
          this.productList.forEach(product => {
            this.productOrders.push(new ProductOrder());
          })
        },
        (error) => console.log(error)
      );
  }

  // loadOrders() {
  //   this.dataservice.getOrdersList().subscribe(
  //     (orders: any[]) => {
  //       this.productOrders = orders;
  //       this.productOrders.forEach
  //
  //     }
  //   )
  // }

  loadOrders() {
    this.subscriptions = this.dataservice.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.dataservice.ProductOrders;
    });
  }

}
