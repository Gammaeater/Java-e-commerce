import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './frontend/components/nav-bar/nav-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './frontend/components/product/product.component';
import { OrdersComponent } from './frontend/components/orders/orders.component';
import { ShoppingCartComponent } from './frontend/components/shopping-cart/shopping-cart.component';
import {HeroComponent} from "./frontend/components/hero/hero.component";
import {ProductListComponent} from "./frontend/components/product-list/product-list.component";
import {CardModule} from "primeng/card";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    OrdersComponent,
    ShoppingCartComponent,
    HeroComponent,
    ProductListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
