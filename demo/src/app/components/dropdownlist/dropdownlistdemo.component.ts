import { Component } from '@angular/core';

import * as json from './dropdownlistdemo-dataproperties.json';


@Component( {
  selector : 'app-button-group',
  templateUrl : './dropdownlistdemo.component.html',
  styleUrls : [ './dropdownlistdemo.component.scss' ]
} )
export class DropDownListDemo {

  private dataTableProperties;

  public itemSelected: any[];

  public itemSelected2: any[];

  public itemSelected3: any[];

  public itemSelected4: any[];

  public data: any[];

  public data2: any[];

  constructor() {
    this.dataTableProperties = json.dataProperties;
    this.data = [
      { textItem : 'Item 1', valueItem : '1' },
      { textItem : 'Item 2', valueItem : '2' },
      { textItem : 'Item 3', valueItem : '3' },
      { textItem : 'Item 4', valueItem : '4' },
      { textItem : 'Item 5', valueItem : '5' }
    ];
    this.data2 = [
      { textItem : 'Item 1', valueItem : '1' },
      { textItem : 'Item 2', valueItem : '2' },
      { textItem : 'Item 3', valueItem : '3' },
      { textItem : 'Item 4', valueItem : '4' },
      { textItem : 'Item 5', valueItem : '5' },
      { textItem : 'Item 6', valueItem : '6' },
      { textItem : 'Item 7', valueItem : '7' },
      { textItem : 'Item 8', valueItem : '8' },
      { textItem : 'Item 9', valueItem : '9' },
      { textItem : 'Item 10', valueItem : '11' },
      { textItem : 'Item 12', valueItem : '12' },
      { textItem : 'Item 13', valueItem : '13' },
      { textItem : 'Item 14', valueItem : '14' },
      { textItem : 'Item 15', valueItem : '15' },
      { textItem : 'Item 16', valueItem : '16' }
    ];
  }

  showItemSelected( event ) {
    this.itemSelected = [];
    this.itemSelected.push( event.textItem );
  }

  showItemSelected2( event ) {
    this.itemSelected2 = [];
    this.itemSelected2.push( event.textItem );
  }

  showItemSelected3( event ) {
    this.itemSelected3 = [];
    this.itemSelected3.push( event.textItem );
  }

  showItemSelected4( event ) {
    this.itemSelected4 = [];
    this.itemSelected4.push( event.textItem );
  }



}
