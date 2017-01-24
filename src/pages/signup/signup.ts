import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from '../../providers/auth';
import { TabsPage } from '../tabs/tabs';
import { EmailValidator } from '../../validators/email';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
    public signupForm;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
    loading;

    constructor(public nav: NavController, public authData: Auth,
        public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) {

        this.signupForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required,
            EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(6),
            Validators.required])]
        });
    }

    /**
    * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
    */
    elementChanged(input) {
        let field = input.inputControl.name;
        this[field + "Changed"] = true;
    }

    /**
    * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
    * component while the user waits.
    *
    * If the form is invalid it will just log the form value, feel free to handle that as you like.
    */
    signupUser() {
        this.submitAttempt = true;

        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        } else {
            this.authData.signupUser(this.signupForm.value.email,
                this.signupForm.value.password).then(() => {
                    this.nav.setRoot(TabsPage);
                }, (error) => {
                    this.loading.dismiss().then(() => {
                        var errorMessage: string = error.message;
                        let alert = this.alertCtrl.create({
                            message: errorMessage,
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
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
