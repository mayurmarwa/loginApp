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
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';
import { LoadingController } from 'ionic-angular';
export var MyApp = (function () {
    //constructor(platform: Platform) {
    //platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    //StatusBar.styleDefault();
    //Splashscreen.hide();
    //});
    //}
    function MyApp(auth, loadingCtrl) {
        var _this = this;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.presentLoading();
        this.auth.login().then(function (isLoggedIn) {
            if (isLoggedIn) {
                console.log('loggedin?');
                _this.loader.dismiss();
                _this.rootPage = TabsPage;
            }
            else {
                console.log('notloggedin');
                _this.loader.dismiss();
                _this.rootPage = LoginPage;
            }
            //this.loader.dismissALL();
        });
    }
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    };
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [Auth, LoadingController])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map