import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
@Component({
  selector: 'app-pwd-forgot',
  templateUrl: './pwd-forgot.component.html',
  styleUrls: ['./pwd-forgot.component.css'],
})
export class PwdForgotComponent implements OnInit {
  hide = true;
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute
  ) {}

  Email = new FormControl('', [Validators.email, Validators.required]);
  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }
  ngOnInit(): void {}

  onNext() { 
    let userData = {
      email: this.Email.value,
    };
    // this.router.queryParams.subscribe((params) => {
    // });
    this.userService.requestForgot(userData).subscribe(
      (res) => {
        this.snackBar.open('Send Rest Password Link Sucessfully', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('something went wrong', '', {
          duration: 2000,
        });
      }
    );
  }
}
