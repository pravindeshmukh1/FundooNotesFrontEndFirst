import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
    });
  }
  onLoginSubmit() {
    console.log(this.user.email + ' ' + this.user.password);
  }
}
