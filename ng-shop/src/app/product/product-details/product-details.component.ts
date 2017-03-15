import {Component, Input} from '@angular/core';
import {Product} from "../../shared/services";

@Component({
  selector: 'ngs-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input() product: Product;
  quantity: number;

  addItems() {
    console.log(`Quantity: ${this.quantity}`);
    this.quantity = null;
  }

}
