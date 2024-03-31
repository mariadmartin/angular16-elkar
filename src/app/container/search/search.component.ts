import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  //1. Creamos un event emiter para pasar data al container component
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  //2. Creamos el metodo para el input del html
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }
}
