import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<firebase.User>;
  loginForm: FormGroup;
  signupForm:FormGroup;
  signupVar:boolean=false;
  isLoggedIn: boolean = false;

  constructor(public afAuth: AngularFireAuth,
    public fb: FormBuilder,
    public router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.isLoggedIn) {
      /*this.router.navigate(['/dashboard']);*/
      alert("logged in already!");
    }

    if(this.signupVar){
      this.signupForm=this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required],
        confirmPassword:['',Validators.required]
      });
    }
  }

  signinWithGoogle() {
    let that=this;
    const promise=this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(user){
      alert("successful rotate loader");
      that.isLoggedIn = true;
    });

    promise.catch(e => {
      alert(e.message);
      console.log(e.message);
      this.isLoggedIn = false;
    });
    
  }
  
  signinWithFb(){
    let that=this;
    alert("hello fb");
    const promise=this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(user){
      console.log(user);
      alert("successful rotate loader");
      that.isLoggedIn=true;
      
    });

    promise.catch(e => {
      alert(e.message);
      console.log(e.message);
      this.isLoggedIn = false;
    });
    
  }


  logout() {
    alert("logout");
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
  }

  signupClicked() {
    this.signupVar=true;
    this.signupForm=this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required],
        confirmPassword:['',Validators.required]
      });
  }

  submitSignup(){
    alert("creating user:");
    const promise = this.afAuth.auth.createUserWithEmailAndPassword("bansalnilansh11@yahoo.com", "123456").then(function(user){
      console.log(user);
    });
    promise.catch(e => {
      console.log(e.message);

    });
  }

  signinWithEmailPass() {
     let that=this;
    const promise = this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value["email"], this.loginForm.value["password"]).then(function(user){
      
      that.isLoggedIn = true;
    });
    
    promise.catch(e => {
      console.log(e.message);
      alert(e.message);
      this.isLoggedIn = false;
    });
    
  }




}
