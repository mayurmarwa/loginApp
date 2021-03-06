import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {

  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }

  login() {

     return new Promise (resolve => {
          
         setTimeout(() => {
             resolve(true);
         }, 3000);
      });
  }

}
