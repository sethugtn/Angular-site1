import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input()
all=0;
@Input()
inStock=0;
@Input()
OutofStock=0;

@Output()
selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

selectedFilterRadioButton:'all';

onSelectedFilterRadioButtonChanged(){
  this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
}

}
  