import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/ecommerce/products/products.component';
import { OrdersComponent } from './ecommerce/ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/ecommerce/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Product {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;

  // all arguments constructor
}
export class ProductOrder {
  product: Product;
  quantity: number;

  // all arguments constructor
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
