import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // client: string = "John Doe";
  addToCart: number = 0;
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

  onChangeName(event: any) {

    //this.client = event.target.value;
    console.log(event.target.value);
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.addToCart< this.product.inStock){
      this.addToCart++;
    }

  }

}
