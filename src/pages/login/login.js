var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { EmailValidator } from '../../validators/email';
import { Auth } from '../../providers/auth';
import { App } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var LoginPage = (function () {
    function LoginPage(nav, authData, formBuilder, alertCtrl, loadingCtrl, app) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required,
                    EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(6),
                    Validators.required])]
        });
    }
    LoginPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                _this.app.getRootNav().setRoot(TabsPage);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: 'cancel' }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.nav.push(ResetpasswordPage);
    };
    LoginPage.prototype.createAccount = function () {
        this.nav.push(SignupPage);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [NavController, Auth, FormBuilder, AlertController, LoadingController, App])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map