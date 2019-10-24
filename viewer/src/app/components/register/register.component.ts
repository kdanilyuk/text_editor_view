import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { RegisterUser } from '../../models/regUser';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData : RegisterUser;
  matchPasswords : boolean;
  dataConsistency : boolean;
  isAccountAlreadyExist : boolean;
  validLengthOfData : boolean;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this.registerUserData = new RegisterUser;
    this.matchPasswords = true;
    this.dataConsistency = true;
    this.isAccountAlreadyExist = false;
    this.validLengthOfData = true;
  }

  checkForCorrect() {
    this.checkForLengthOfData(this.registerUserData)
    this.checkForLocalCorrect(this.registerUserData)
    if(this.registerUserData.password == this.registerUserData.rPassword){
      this.matchPasswords = true;
    }
    else{
      this.matchPasswords = false;
    }
  }

  checkForLengthOfData(user){
    if((user.login.length > 3 && user.login.length < 255) &&
       (user.password.length > 3 && user.password.length < 255) &&
       (user.rPassword.length > 3 && user.rPassword.length < 255)){
        this.validLengthOfData = true;
       }
    else{
        this.validLengthOfData = false;
    }
  }

  checkForLocalCorrect(user) {
    let regex = new RegExp('^([a-zA-Z0-9_-]+)$')
    if(regex.test(user.password) && 
       regex.test(user.rPassword) &&
       regex.test(user.login)){
         this.dataConsistency = true;
       }
    else {
      this.dataConsistency = false;
    } 
  }

  registerUser() {
    if(this.matchPasswords && this.dataConsistency && this.validLengthOfData){
      this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          if(JSON.parse(res.is_valid)){
            //let user = new User().fromJSON(JSON.parse(res));
            localStorage.setItem('user', JSON.stringify(res))
            this._router.navigate(['/main'])
            this.isAccountAlreadyExist = false;
          } 
          else{
            this.isAccountAlreadyExist = true;
          }
        },
        err => console.log(err)
      )
    }       
  }
}