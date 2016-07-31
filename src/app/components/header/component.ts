import { Component } from '@angular/core';

@Component({
    selector: 'header',
    styles: [require('./styles/_import.sass')],
    templateUrl: './template.pug'
})

export class Header {

  private items: any;

  constructor() {

     this.items = [
        {
          sref: [''],
          text: 'Home'
        },
        {
          sref: ['','about'],
          text: 'About'
        }
     ]
  }

}
