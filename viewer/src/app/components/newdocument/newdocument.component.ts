import { Component, OnInit } from "@angular/core";
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-newdocument",
  templateUrl: "./newdocument.component.html",
  styleUrls: ["./newdocument.component.scss"]
})

export class NewdocumentComponent implements OnInit {
  
  name = '';

  constructor(private _doc: DocumentService,
    private _router: Router) { 

  }

  ngOnInit() {

  }

  createDocument () {
    this._doc.parameter = "save";
    this._doc.context = "";
    this._doc.CreateDocument(this.name);
  }
}
