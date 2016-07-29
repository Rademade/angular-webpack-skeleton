import { Component } from '@angular/core';

@Component({
  selector: 'header',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: [],
  templateUrl: './template.pug',
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
