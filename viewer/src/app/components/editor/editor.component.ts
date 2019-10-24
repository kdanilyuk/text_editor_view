import { Component, OnInit, ContentChild, ElementRef, ViewChild } from "@angular/core";

import { AngularEditorConfig, AngularEditorComponent } from '@kolkov/angular-editor';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"]
})

export class EditorComponent implements OnInit {

  form: FormGroup;
  htmlContent1 = '';
  text = '';
  isOnChangeFilename: boolean = false;
  newFileName: string;

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: 'auto',
    maxHeight: 'auto',
    height: '570px',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '4',  
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(private formBuilder: FormBuilder,
              private _doc: DocumentService){}  

  ngOnInit() {
    this.form = this.formBuilder.group({
      signature: ['', Validators.required]
    });
    this.htmlContent1 = this._doc.context;
    this.text = this._doc.context;
    this.isOnChangeFilename = false;
  }

  SaveToBase(){
    if(this._doc.parameter == 'save'){
      this._doc.SaveDocument(this.text).subscribe(
        res => {
          if(JSON.parse(res.is_valid))
            console.log(res)
        },
        err => {
          console.log(err)
        }
      )
    }
    else if(this._doc.parameter == 'edit'){
      this._doc.SaveEditDocument(this.text).subscribe(
        res => {
          if(JSON.parse(res.is_valid))
            console.log(res)
        },
        err => {
          console.log(err)
        }
      );
    }
  }

  RenameFile(){
    this.isOnChangeFilename = !this.isOnChangeFilename;
  }

  Raname(){
    this._doc.oldName = localStorage.getItem('documentTitle');
    localStorage.removeItem('documentTitle');
    localStorage.setItem('documentTitle', this.newFileName);
    this.RenameFile()
  }

  onChange(event) {
    this.text = event;
  }

  onBlur(event) {
  }
}
