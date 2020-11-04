/*
    MIT License

    Copyright (c) 2019 Temainfo Software

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-tag',
  templateUrl: './tag.html',
  styleUrls: ['./tag.scss'],
})
export class TlTag implements OnInit {

  @Input() title = 'Title Tag';

  @Input() width = 'fit-content';

  @Input() height = 'auto';

  @Input() icon = null;

  @Input() mode: 'default' | 'closeable' | 'clickable' = 'default';

  @Input()
  set color( value: string ) {
    const colors = {
      basic: () => 'basic',
      primary: () => 'primary',
      success: () => 'success',
      information: () => 'information',
      warning: () => 'warning',
      danger: () => 'danger',
    };
    if ( colors[value] ) {
      this._color = colors[value]();
    } else {
      this._color = null;
      this.customColor = value;
    }
  }

  get color() {
    return this._color;
  }

  @Output() close: EventEmitter<any> = new EventEmitter();

  private _color = 'basic';

  public customColor = '';

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }

}
