import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router,
        public afAuth: AngularFireAuth) { }


    isAuthenticated(): any {
        // auth logic
        /* if(this.afAuth.auth.currentUser)
         {
           alert("user logged in: ");
           console.log(this.afAuth.auth.currentUser);
           return true;
         }
         alert("not exists");
         console.log(this.afAuth.auth.currentUser);
         this.router.navigate(['','/'])
         return false;
     */
        let that = this;
        this.afAuth.auth.onAuthStateChanged(function (user) {

            if (user) {
                // User is signed in.
                alert("user logged in ");
                console.log(user);
                return true;
            }
            // No user is signed in.
            alert("user not logged in");
            this.router.navigate(['', '/'])
            return false;

        });
    }

    /*console.log(this.isAuthenticated());
    return this.isAuthenticated();*/
    /* if(!isAuth){
     //if not authenticated do something. e.g redirect to login  page
         this.router.navigate(['','/'])
     }
     else {
         this.router.navigate(['','/dashboard'])
     }*/
    /*alert("see returned valuec: "+ isAuth);
    return isAuth;*/


    

    canActivate(): boolean {
        let that = this;
        this.afAuth.auth.onAuthStateChanged(function (user) {

            if (user) {
                // User is signed in.
                alert("user logged in ");
                console.log(user);
                return true;
            }
            // No user is signed in.
            alert("user not logged in");
            this.router.navigate(['', '/'])
            return false;

        });
    }
}