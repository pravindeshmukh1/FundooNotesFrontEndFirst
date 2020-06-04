import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-pwd-reset',
  templateUrl: './pwd-reset.component.html',
  styleUrls: ['./pwd-reset.component.css'],
})
export class PwdResetComponent implements OnInit {
  hide = true;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(15),
    Validators.required,
  ]);
  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }

  onSubmit() {
    let userData = {
      newPassword: this.Password.value,
    };
    var tokenObject;
    this.router.params.subscribe((params: Params) => {
       tokenObject = params['token'];
    });

    console.log('Token', tokenObject);

    this.userService.resetPassword(userData, tokenObject).subscribe(
      (res) => {
        this.snackBar.open('User Reset Password Sucessfully', '', {
          duration: 2000,
        });
        this.route.navigate(['/login']);
      },
      (err) => {
        console.log(err)
        this.snackBar.open('something went wrong', '', {
          duration: 4000,
        });
      }
    );
  }
  ngOnInit(): void {}
}
