var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { SignupPage } from '../pages/signup/signup';
import { Auth } from '../providers/auth';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyBQHf2p8RLOuw7i_DHdsfc8HHCFfwcIPEQ",
    authDomain: "metbazaardev.firebaseapp.com",
    databaseURL: "https://metbazaardev.firebaseio.com",
    storageBucket: "metbazaardev.appspot.com",
    messagingSenderId: "79899062384"
};
var myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage,
                LoginPage,
                ResetpasswordPage,
                SignupPage
            ],
            imports: [
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage,
                LoginPage,
                ResetpasswordPage,
                SignupPage
            ],
            providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Auth]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map