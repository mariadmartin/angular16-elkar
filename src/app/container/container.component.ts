import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Pilar', 'Jon', 'Isidro', 'Rolly'];

  seachText: string = ''; // para recoger data del seach-compoment

  @ViewChild(ProductListComponent) // #productListComponent
  productListComponent: ProductListComponent; // para guardar una referencia al componente productListComponent

  setSearchText(value: string) {
    this.seachText = value;
  }

}
