import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: Product;

  productDisconuntPrice(prod: any) {
    return ((prod.discountPrice / prod.price * 100 )).toFixed(0);
  }

}
