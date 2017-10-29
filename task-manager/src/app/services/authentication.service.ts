import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  token: any;
  user: any;
  Rurl: string;
  Lurl: string;
  Purl: string;

  constructor(private http: Http) {
    this.Rurl = 'http://mik:4444/users/register';
    this.Lurl = 'http://mik:4444/users/auth';
    this.Purl = 'http://mik:4444/users/profile';
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(this.Rurl, user, {headers : headers}).map(res => res.json());
  }

  loginUser(user) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.Lurl, user, {headers : headers}).map(res => res.json());
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.token);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.Purl, {headers : headers}).map(res => res.json());
  }

  storeUserData(data) {
    localStorage.setItem('id_token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    this.token = data.token;
    this.user = data.user;
  }

  userLogout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
 }

 getUserData() {
   const Guser = localStorage.getItem('user');
   this.user = JSON.parse(Guser);
   return this.user;
 }

 loggedIn() {
   return tokenNotExpired('id_token');
 }

 loadToken() {
   const Gtoken = localStorage.getItem('id_token');
   this.token = Gtoken;
 }
}
