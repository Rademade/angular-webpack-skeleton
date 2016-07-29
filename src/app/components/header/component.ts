import { Component } from '@angular/core';

@Component({
  selector: 'profile-activation-nav',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: [],
  templateUrl: './template.pug',
})

export class ProfileActivationNav {

  private items: any;

  constructor() {

     this.items = [
        {
          sref: './main-info',
          text: 'Общая информация'
        },
        {
          sref: './goods-and-schedule',
          text: 'Товары и график работы'
        },
        {
          sref: './documents-and-payments',
          text: 'Документы и платежи'
        }
     ]
  }

}
