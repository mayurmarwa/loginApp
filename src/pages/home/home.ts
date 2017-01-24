import { Component } from '@angular/core';
import { Auth } from '../../providers/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public nav: NavController, public authData: Auth,private app:App) {

    }
        logoutUser(){
            this.authData.logoutUser().then(() => {
                this.app.getRootNav().setRoot(LoginPage);
            });
                    }
        ionViewDidLoad() {
            console.log('ionViewDidLoad HomePage');
        }
}
