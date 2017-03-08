import { Component, OnInit } from '@angular/core';
import {Product, ProductService, Review} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'auction-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  reviews: Review[];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let prodId: number = parseInt(this.route.snapshot.params['productId']);
    this.product = this.productService.getProductById(prodId);

    this.reviews = this.productService.getReviewsForProduct(this.product.id);
  }

}
