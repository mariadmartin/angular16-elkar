import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outStock: number = 0;

  selectedFilterRadioButton: string = 'all';

  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>(); //event

  onSelectedFilterRadioButtonChanged() {
    // emitimos el evento
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
    console.log('Ejecutado en el hijo: Valor a pasar al padre:' +this.selectedFilterRadioButton);
  }



}
