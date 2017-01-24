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

// Importing AF2 Module

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings
const firebaseConfig = {
    apiKey: "AIzaSyBQHf2p8RLOuw7i_DHdsfc8HHCFfwcIPEQ",
    authDomain: "metbazaardev.firebaseapp.com",
    databaseURL: "https://metbazaardev.firebaseio.com",
    storageBucket: "metbazaardev.appspot.com",
    messagingSenderId: "79899062384"
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}
@NgModule({
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth]
})
export class AppModule {}
