import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service/http.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  register(user) {
    return this.httpService.post('/register', user);
  }
  login(user) {
    return this.httpService.post('/login', user);
  }
}
