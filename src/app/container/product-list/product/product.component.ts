import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: {
      id: number,
      name: string,
      description: string,
      brand: string,
      gender: string,
      category:string,
      size: number[],
      color: string[],
      price: number,
      discountPrice?: number,
      is_in_invertory: boolean,
      items_left: number,
      imageUrl: string
  };

  productDisconuntPrice(prod: any) {
    return ((prod.discountPrice / prod.price * 100 )).toFixed(0);
  }

}
