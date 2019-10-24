import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

/**
 * @description
 * @class
 */
@Injectable()
export class AdminService {

  private _adminUrl = "https://localhost:5001/api/admin";

  constructor(private http: HttpClient,
              private _router: Router,
              private _auth: AuthService) {
  }

  GetDocumentsList(user){
    const us = { login: JSON.parse(user)['login'],
               password: JSON.parse(user)['password'],
               roots: JSON.parse(user)['roots'] ,
               is_valid: JSON.parse(user)['is_valid'] };
    return this.http.post<any>(this._adminUrl + '/doclist', us);
  }

  GetUsersList(user){
    const us = { login: JSON.parse(user)['login'],
               password: JSON.parse(user)['password'],
               roots: JSON.parse(user)['roots'] ,
               is_valid: JSON.parse(user)['is_valid'] };
    //const body = { roots: JSON.parse(user)['roots'] };
    return this.http.post<any>(this._adminUrl + '/userlist', us);
  }

  RemoveDocument(user, filename){
    let body = { user: { login: JSON.parse(user)['login'],
                         password: JSON.parse(user)['password'],
                         roots: JSON.parse(user)['roots'] ,
                         is_valid: JSON.parse(user)['is_valid'] }, 
                username: filename };
    return this.http.post<any>(this._adminUrl + '/rmdoc', body);
  }

  RemoveUser(user, username){
    let body = { user: { login: JSON.parse(user)['login'],
                         password: JSON.parse(user)['password'],
                         roots: JSON.parse(user)['roots'] ,
                         is_valid: JSON.parse(user)['is_valid'] }, 
                username: username };
    return this.http.post<any>(this._adminUrl + '/rmuser', body);
  }
}
