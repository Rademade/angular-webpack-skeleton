import { Component, Input } from '@angular/core';

@Component({
  selector: 'box',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: [],
  templateUrl: './template.pug'
})


export class Box {
  @Input() title: any = "Default title";

}
