import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct: Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 160,
      discountPrice: 160,
      is_in_invertory: true,
      items_left: 0,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cf45e4d8-ecdf-4d1a-899f-98c32b34bcbb/air-jordan-1-low-zapatillas-QnthX1.png"
    },
    {
      id: 2,
      name: "Nike Air Max Plus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 189.99,
      discountPrice: 99.99,
      is_in_invertory: true,
      items_left: 0,
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/air-max-plus-zapatillas-dT9k7p.png"
    },
    {
      id: 3,
      name: "Luca 2 \"Bred\"",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 139.99,
      discountPrice: 125,
      is_in_invertory: false,
      items_left: 0,
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da609d2f-33ba-486f-b192-5044307f9342/luka-2-bred-zapatillas-de-baloncesto-lkKXt8.png"

    },
    {
      id: 4,
      name: "Jumpman MVP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 169.99,
      discountPrice: 125,
      is_in_invertory: false,
      items_left: 0,
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-zapatillas-h3rXtZ.png"
    },
    {
      id: 5,
      name: "Nike SB Dunk Low Premium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 139.99,
      discountPrice: 125,
      is_in_invertory: true,
      items_left: 0,
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/10cb0f4c-0de0-4a83-9756-2c5e1cf0a840/sb-dunk-low-zapatillas-de-skateboard.png"

    },
    {
      id: 6,
      name: "Nike Air Max 1'86 OG",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 179.99,
      discountPrice: 159.99,
      is_in_invertory: true,
      items_left: 0,
      imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49c620df-6da8-464c-a93a-22910e0c1f89/air-max-1-86-og-zapatillas.png"

    }
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_invertory === true).length;
  totalProductOutStock = this.products.filter(p => p.is_in_invertory === false).length;

  selectedRadioButton: string = 'all';

  @Input()
  searchText: string = ''; // recibir data from container component

  onFilterChanged(value: string) {

    this.selectedRadioButton = value;

    console.log('Ejecutado en el padre: Recibir valor desde hijo a el padre: ' + this.selectedRadioButton);
  }

}
