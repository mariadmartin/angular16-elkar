import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent {
  product: Product;

  @Input()
  productListComp: ProductListComponent = undefined;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }


}
