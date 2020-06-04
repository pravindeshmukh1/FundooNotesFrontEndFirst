import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  register(user) {
    return this.httpService.post('user/userSignUp', user);
  }

  login(user) {
    return this.httpService.post('user/login', user);
  }

  requestForgot(user) {
    return this.httpService.post('user/reset', user);
  }

  resetPassword(user,token) {
    console.log("log",user,token);
    
    return this.httpService.post(
      `user/reset-password?access_token=${token}`,
      user
    );
  }
}