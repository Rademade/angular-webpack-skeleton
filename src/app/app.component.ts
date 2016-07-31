import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./styles/_import.sass')],
  templateUrl: './app.layout.pug'
})

export class App {

}
