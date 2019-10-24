import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

/**
 * @description
 * @class
 */
@Injectable()
export class DocumentService {

  private _docUrl = "https://localhost:5001/api/doc";
  filename: string;
  context: string;
  parameter: string;
  oldName: string;
  id;
  data = {}

  constructor(private http: HttpClient,
              private _router: Router,
              private _auth: AuthService) {
  }

  CreateDocument(filename){
    this.filename = filename;
    localStorage.setItem('documentTitle', filename);
    this._router.navigate(['/editor']);
  }

  CreateEditDocument(filename){
    this.filename = filename;
    localStorage.removeItem('documentTitle');
    localStorage.setItem('documentTitle', filename);
    this._router.navigate(['/editor']);
  }

  SaveEditDocument(text){
    let name = localStorage.getItem('documentTitle');
    let owner = this._auth.getUserName();
    const doc = { 
      name: name, text: text, owner: owner 
    };

    let oldFileName = this.oldName;
    const body = { doc: doc, id: this.id}
    return this.http.post<any>(this._docUrl + '/edit', body);
  }

  SaveDocument(text){
    let name = localStorage.getItem('documentTitle');
    let owner = this._auth.getUserName();
    const body = {name: name, text: text, owner: owner};
    return this.http.post<any>(this._docUrl + '/save', body);
  }

  GetDocument(filename, owner){
    return this.http.get<any>(this._docUrl + '/getdoc/' + filename + "/" + owner);
  }

  GetDocuments(owner){
    this._router.navigate(['/listing']);
    return this.http.get<Document[]>(this._docUrl + '/getdocs/' + owner);
  }

  RemoveDocument(owner, filename){
    this._router.navigate(['/listing']);
    return this.http.get<any>(this._docUrl + '/remove/' + owner + "/" + filename);
  }
}
