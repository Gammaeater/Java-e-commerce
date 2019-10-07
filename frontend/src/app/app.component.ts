import {Component, OnInit, ViewChild} from '@angular/core';
import{ProductComponent} from "./frontend/components/product/product.component";
import{ShoppingCartComponent} from "./frontend/components/shopping-cart/shopping-cart.component";
import{OrdersComponent} from "./frontend/components/orders/orders.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'frontend';
  private collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: ProductComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
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

