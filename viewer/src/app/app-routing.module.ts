import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { AuthGuard } from './components/authguard/auth.guard';
import { MainComponent } from './components/main/main.component';
import { EditorComponent } from './components/editor/editor.component';
import { FileComponent } from './components/file/file.component';
import { NewdocumentComponent } from './components/newdocument/newdocument.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { ListOfDocumentsComponent } from './components/list-of-documents/list-of-documents.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'file',
    component: FileComponent
  },
  {
    path: 'newdocument',
    component: NewdocumentComponent
  },
  {
    path: 'listing',
    component: ListingComponent
  },
  {
    path: 'list-of-users',
    component: ListOfUsersComponent
  },
  {
    path: 'list-of-documents',
    component: ListOfDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }