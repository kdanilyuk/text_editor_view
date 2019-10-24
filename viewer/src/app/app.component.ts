import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DocumentService } from './services/document.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  localStorage = localStorage.clear();
  constructor(private _authService: AuthService,
    private _docService: DocumentService){}
}