import { Component, OnInit } from '@angular/core';
import {Product} from "../../../backend/model/Product";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductService} from "../../../backend/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[];
  subscribtions = new Subscription();

  constructor(private dataService: ProductService) { }

  ngOnInit() {
    // this.subscribtions.add(this.dataService.getProductList().subscribe(
    //   ( data ) => {
    //     this.productList = data;
    //   },
    //     // error => this.handleError(error)
    // ));
  }



}
