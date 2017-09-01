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

export const firebaseConfig = {
  
  
    apiKey: 'AIzaSyBua6Yn0H3flTBtEN6ZGLf_88XXNp2-hJg',
    authDomain: 'noddysapp.firebaseapp.com',
    databaseURL: 'https://noddysapp.firebaseio.com',
    projectId: 'noddysapp',
    storageBucket: 'noddysapp.appspot.com',
    messagingSenderId: '658261542367'
  
};

const appRoutes:Routes=[
  {path:'home',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
