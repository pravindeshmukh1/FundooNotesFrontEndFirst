import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  id = localStorage.getItem('id');
  header = {
    id: this.id,
  };
  httpOption = new HttpHeaders(this.header);

  post(url, user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    // console.log('data', environment.baseUrl + url, user);
    return this.http.post(environment.baseUrl + url, user, httpOptions);
  }

  get(url) {
    return this.http.get(environment.baseUrl + url, {
      headers: this.httpOption,
    });
  }
}
