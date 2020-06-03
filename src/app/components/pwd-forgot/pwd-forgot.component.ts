import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pwd-forgot',
  templateUrl: './pwd-forgot.component.html',
  styleUrls: ['./pwd-forgot.component.css'],
})
export class PwdForgotComponent implements OnInit {
  hide = true;
  constructor() {}

  Email = new FormControl('', [Validators.email, Validators.required]);
  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }
  ngOnInit(): void {}

  onNext() {
    console.log(this.Email.value);
  }
}
