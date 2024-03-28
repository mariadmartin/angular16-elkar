import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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
      is_in_invertory: true,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cf45e4d8-ecdf-4d1a-899f-98c32b34bcbb/air-jordan-1-low-zapatillas-QnthX1.png" },
    {
      id: 2,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 160,
      is_in_invertory: true,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cf45e4d8-ecdf-4d1a-899f-98c32b34bcbb/air-jordan-1-low-zapatillas-QnthX1.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 3,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mollis enim, ac euismod libero.",
      brand: "Nike",
      gender: "Man",
      category: "Running",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black", "Red"],
      price: 160,
      is_in_invertory: true,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cf45e4d8-ecdf-4d1a-899f-98c32b34bcbb/air-jordan-1-low-zapatillas-QnthX1.png",
      slug: "nike-react-infinity-run-flyknit"
    }
  ]
}
