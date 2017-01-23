import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';
import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    loader: any;

  //constructor(platform: Platform) {
    //platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      //Splashscreen.hide();
    //});
  //}

    constructor(public auth: Auth, public loadingCtrl: LoadingController) {

        this.presentLoading();
      this.auth.login().then((isLoggedIn) => {

          if (isLoggedIn) {
              console.log('loggedin?');
              this.loader.dismiss();
              this.rootPage = TabsPage;
          } else {
              console.log('notloggedin');
              this.loader.dismiss();              
              this.rootPage = LoginPage;
          }

          //this.loader.dismissALL();
      });

    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    }

  
}
