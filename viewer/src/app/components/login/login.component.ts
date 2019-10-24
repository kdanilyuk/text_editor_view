import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  isLogged = true;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        if(res.is_valid) {
          localStorage.setItem('user', JSON.stringify(res))
          this._router.navigate(['/main'])
          this.isLogged = true;
        }
        else {
          this.isLogged = false;
        }
      },
      err => console.log(err)
    ) 
  }
}