import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    loader: any;

    constructor(platform: Platform, af: AngularFire) {
        const authObserver = af.auth.subscribe(user => {
            if (user) {
                this.rootPage = TabsPage;
                authObserver.unsubscribe();
                
            } else {
                this.rootPage = LoginPage;
                authObserver.unsubscribe();
            }
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

  
}
