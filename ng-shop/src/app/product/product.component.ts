import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import 'rxjs/add/operator/mergeMap'
import {Product, ProductService} from "../shared/services";



@Component({
  selector: 'ngs-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: Product;

  constructor(productService: ProductService, route: ActivatedRoute) {
    route .params
      .mergeMap(({productId}) => productService.getProductById(productId))
      .subscribe(product => this.product = product);
  }

  ngOnInit() {
  }

}
