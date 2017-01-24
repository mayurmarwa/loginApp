import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';
/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
    fireAuth: any;
    constructor(public af: AngularFire) {
        af.auth.subscribe(user => {
            if (user) {
                this.fireAuth = user.auth;
                console.log(user);
            }
        });
    }
    //console.log('Hello Auth Provider');
 

  //login() {
    //     return new Promise (resolve => {
      //       setTimeout(() => {
      //       resolve(true);
      //   }, 3000);
      //});
  //}
    loginUser(newEmail: string, newPassword: string): any {
        return this.af.auth.login({ email: newEmail, password: newPassword });
    }
    resetPassword(email: string): any {
        return firebase.auth().sendPasswordResetEmail(email);
    }
    logoutUser(): any {
        return this.af.auth.logout();
    }
    signupUser(newEmail: string, newPassword: string): any {
        return this.af.auth.createUser({ email: newEmail, password: newPassword });
    }
}
