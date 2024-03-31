import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Pilar', 'Jon', 'Isidro', 'Rolly'];

  seachText: string = ''; // para recoger data del seach-compoment

  setSearchText(value: string) {
    this.seachText = value;
  }

}
