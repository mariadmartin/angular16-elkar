import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

    //1. Creamos un event emiter para pasar data al container component
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  //2. Creamos el metodo para el input del html
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }

  /* updateSearchText(event: any){
      this.searchText = event.target.value;
  } */

  // para el ejemplo template reference variable
  // metodo para evento click del boton
  updateSearchText(inputEL: HTMLInputElement) {
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
    console.log(inputEL.value);
  }


}
