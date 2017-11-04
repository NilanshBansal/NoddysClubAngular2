import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from "./services/firebase.service";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ModalComponent } from "./components/modal/modal.component";
import { HttpModule } from '@angular/http';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthService } from "./services/auth.service";
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { MomentModule } from 'angular2-moment';
import * as $ from 'jquery';
export const firebaseConfig = {
  
  
    apiKey: 'AIzaSyBua6Yn0H3flTBtEN6ZGLf_88XXNp2-hJg',
    authDomain: 'noddysapp.firebaseapp.com',
    databaseURL: 'https://noddysapp.firebaseio.com',
    projectId: 'noddysapp',
    storageBucket: 'noddysapp.appspot.com',
    messagingSenderId: '658261542367'
  
};

const appRoutes:Routes=[
  /* {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthService]}, */
  {path:'',component:DashboardComponent},
  {path:'login',component:HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IonRangeSliderModule,
  
  ],
  providers: [FirebaseService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
