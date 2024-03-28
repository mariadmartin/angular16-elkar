import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    name: "iphone",
    price: 99.99,
    color: "Matte Black",
    discount: 10,
    inStock: 5,
    image: '/assets/images/iphone.png'
  }

  getDiscountPrice() {
    return this.product.price -(this.product.price * this.product.discount/100)
  }

}
