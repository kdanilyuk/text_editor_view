import { Component, OnInit } from "@angular/core";
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-list-of-documents",
  templateUrl: "./list-of-documents.component.html",
  styleUrls: ["./list-of-documents.component.scss"]
})

export class ListOfDocumentsComponent implements OnInit {
  
  userr;
  documents: Document[];
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
    this._admin.GetDocumentsList(user)
    .subscribe(
      res => {
        this.documents = res;
      },
      err => console.log(err)
    ) 
  }

  DeleteDocument(user, filename){
    this._admin.RemoveDocument(user, filename)
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
