import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ViewComponent } from './components/view/view.component';

import { ValidateService} from './services/validate.service';
import { AuthenticationService} from './services/authentication.service';
import { TaskServiceService} from './services/task-service.service';
import { AuthGuardService } from './services/auth-guard.service';

import { FlashMessagesModule} from 'angular2-flash-messages';

import * as $ from 'jquery';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'create',
    component: CreateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'update',
    component: UpdateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'edit',
    component: EditComponent, canActivate: [AuthGuardService]
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    EditComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthenticationService,
    AuthGuardService,
    TaskServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
