import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sethu is Angular Developer';
  searchText:string = '';

  setSearchText(value:string){
    this.searchText = value;
  }
}
