import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  listOfString: string[] = ['Pilar', 'Jon', 'Isidro', 'Rolly'];

}
