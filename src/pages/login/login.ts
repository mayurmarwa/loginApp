import { Component } from '@angular/core';
import {
    NavController,
    LoadingController,
    AlertController
} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms'
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { EmailValidator } from '../../validators/email';
import { Auth } from '../../providers/auth';
import { App } from 'ionic-angular';
import { NgZone } from '@angular/core';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    public loginForm: any;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
    public loading: any;

    constructor(public nav: NavController, public authData: Auth,
        public formBuilder: FormBuilder, public alertCtrl: AlertController,
        public loadingCtrl: LoadingController, private app: App, private zone: NgZone) {

        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required,
            EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(6),
            Validators.required])]
        });
    }

    elementChanged(input) {
        let field = input.inputControl.name;
        this[field + "Changed"] = true;
    }

    loginUser() {
        this.submitAttempt = true;

        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        } else {
            this.authData.loginUser(this.loginForm.value.email,
                this.loginForm.value.password).then(authData => {                    
                    this.zone.run(() => {
                        this.app.getRootNav().setRoot(TabsPage);
                    });
                    
                }, error => {
                    this.loading.dismiss().then(() => {
                        let alert = this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: "Okk", role: 'cancell' }]
                        });
                        alert.present();
                    });
                });

            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
                //duration: 3000
            });
            this.loading.present();
        }
    }

    goToResetPassword() {
        this.nav.push(ResetpasswordPage);
    }

    createAccount() {
        this.nav.push(SignupPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
