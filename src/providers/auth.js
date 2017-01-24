var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';
/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var Auth = (function () {
    function Auth(af) {
        var _this = this;
        this.af = af;
        af.auth.subscribe(function (user) {
            if (user) {
                _this.fireAuth = user.auth;
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
    Auth.prototype.loginUser = function (newEmail, newPassword) {
        return this.af.auth.login({ email: newEmail, password: newPassword });
    };
    Auth.prototype.resetPassword = function (email) {
        return firebase.auth().sendPasswordResetEmail(email);
    };
    Auth.prototype.logoutUser = function () {
        return this.af.auth.logout();
    };
    Auth.prototype.signupUser = function (newEmail, newPassword) {
        return this.af.auth.createUser({ email: newEmail, password: newPassword });
    };
    Auth = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AngularFire])
    ], Auth);
    return Auth;
}());
//# sourceMappingURL=auth.js.map