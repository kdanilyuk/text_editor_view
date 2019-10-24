import { Component, OnInit } from "@angular/core";
import { DocumentService } from 'src/app/services/document.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.scss"]
})

export class ListingComponent implements OnInit {
  
  docs: Document[];
  login: string;
  message: string;
  result: boolean;

  constructor(private _doc: DocumentService,
              private _auth: AuthService) { 

  }

  ngOnInit() {
    this.login = this._auth.getUserName()
    this.UpdateTable();
  }

  UpdateTable(){
    this._doc.GetDocuments(this.login)
    .subscribe(
      res => {
        this.docs = res;
      },
      err => console.log(err)
    ) 
  }

  EditFile(filename, text, id){
    this._doc.parameter = "edit";
    this._doc.context = text;
    this._doc.id = id;
    this._doc.CreateEditDocument(filename);
  }

  DeleteFile(owner, filename){
    this._doc.RemoveDocument(owner, filename)
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
