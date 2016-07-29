import { Component, ViewEncapsulation } from '@angular/core';

import { Header } from '../../components/header';

@Component({
  selector: 'wrapper',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'layout.pug',
  directives: [
    Header
  ]
})

export class Public {

}
