import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/User';

@Component({
  selector: "app-list-of-users",
  templateUrl: "./list-of-users.component.html",
  styleUrls: ["./list-of-users.component.scss"]
})

export class ListOfUsersComponent implements OnInit {
  
  userr;
  users: User[];
  login: string;
  message: string;
  result: boolean;

  constructor(private _admin: AdminService,
              private _auth: AuthService) { 

  }

  ngOnInit() {
    this.userr = this._auth.getUser();
    this.login = this._auth.getUserName()
    this.UpdateTable();
  }

  UpdateTable(){
    let user = this._auth.getUser();
    this._admin.GetUsersList(user)
    .subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    ) 
  }

  DeleteUser(user, username){
    this._admin.RemoveUser(user, username)
    .subscribe(
      res => {
        this.UpdateTable();
        this.message = res.message;
        this.result = res.is_valid
      },
      err => console.log(err)
    ) 
  }
}
