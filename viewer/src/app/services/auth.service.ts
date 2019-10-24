import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/User';

@Injectable()
export class AuthService {

  private _registerUrl = "https://localhost:5001/api/register";
  private _loginUrl = "https://localhost:5001/api/login";
  private _login;

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    this._login = user.login;
    return this.http.get<any>(this._registerUrl + '/' + user.login + '/' + user.password);
  }

  loginUser(user) {
    this._login = user.login;
    return this.http.get<any>(this._loginUrl + '/' + user.login + '/' + user.password);
  }

  logoutUser() {
    localStorage.removeItem('user')
    this._router.navigate(['/main'])
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getUserName(){
    //return JSON.parse(localStorage.getItem('user'))
    return this._login;
  }

  getUserRoots(){
    return JSON.parse(localStorage.getItem('user'))["roots"];
  }

  loggedIn() {
    return !!localStorage.getItem('user')    
  }
}