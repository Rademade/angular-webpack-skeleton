import { Component } from '@angular/core';

import { SignUpPlainForm } from '../../../components/global/sign-up-plain-form';
import { SignUpRequestForm } from '../../../components/global/sign-up-request-form';


@Component({
  selector: 'sign-up',
  providers: [],
  pipes: [],
  styleUrls: [],
  templateUrl: './template.pug',

  directives: [
    SignUpPlainForm,
    SignUpRequestForm
  ]

})

export class SignUp {

}
