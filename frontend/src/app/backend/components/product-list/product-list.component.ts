import {Component, OnInit} from '@angular/core';
import {SubjectSubscription} from "rxjs/internal-compatibility";
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/Product";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  subscriptions = new Subscription();



  constructor(private dataservice: ProductService) {
    console.log()
  }

  ngOnInit() {
  }

}
