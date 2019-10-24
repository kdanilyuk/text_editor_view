import { AuthGuard } from './components/authguard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MainComponent } from './components/main/main.component';
import { EditorComponent } from './components/editor/editor.component';
import { FileComponent } from './components/file/file.component';
import { NewdocumentComponent } from './components/newdocument/newdocument.component';
import { DocumentService } from './services/document.service';
import { ListingComponent } from './components/listing/listing.component';
import { AdminService } from './services/admin.service';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { ListOfDocumentsComponent } from './components/list-of-documents/list-of-documents.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    EditorComponent,
    FileComponent,
    NewdocumentComponent,
    ListingComponent,
    ListOfUsersComponent,
    ListOfDocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularEditorModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [AuthService, AuthGuard, DocumentService, AdminService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }