import { Component, OnInit } from '@angular/core';
import {Product} from "../../../backend/model/Product";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductService} from "../../../backend/services/product.service";
import {ProductOrder} from "../../../backend/model/ProductOrder";
import {ProductOrders} from "../../../backend/model/ProductOrders";

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[];
  productOrders: ProductOrder[] = [];
  subscribtions = new Subscription();
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;

  constructor(private dataService: ProductService) { }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  addToCart(order: ProductOrder) {
    this.dataService.SelectedProductOrder = order;
    this.selectedProductOrder = this.dataService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.dataService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.dataService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.dataService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.dataService.getProductList()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.dataService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.dataService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.dataService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }



}
