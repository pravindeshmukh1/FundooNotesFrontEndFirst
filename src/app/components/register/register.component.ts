import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formData: FormGroup;
  hide = true;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  FirstName = new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.minLength(3),
    Validators.required,
  ]);
  LastName = new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.minLength(3),
    Validators.required,
  ]);
  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(15),
    Validators.required,
  ]);

  getFirstNameErrorMessage() {
    return this.FirstName.hasError('required')
      ? 'First Name is Required'
      : 'First Name should be minimum of 3 characters without leading/following spaces ';
  }
  getLastNameErrorMessage() {
    return this.FirstName.hasError('required')
      ? 'Last Name is Required'
      : 'Last Name should be minimum of 3 characters without leading/following spaces ';
  }
  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }
  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }

  onSubmit() {
    let userData = {
      firstName: this.FirstName.value,
      lastName: this.LastName.value,
      email: this.Email.value,
      password: this.Password.value,
      service: 'Basic',
    };
    this.userService.register(userData).subscribe(
      (resp) => {
        this.snackBar.open('User Register Sucessfully', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('something went wrong', '', {
          duration: 4000,
        });
      }
    );
  }
  ngOnInit(): void {}
}
