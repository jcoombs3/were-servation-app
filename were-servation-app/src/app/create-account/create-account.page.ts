import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as errors from '../errors/errors';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  private form = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  };
  private accountErrors = errors.ACCOUNT_ERRORS;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  doCreateAccount() {
    if (this.form.firstname && this.form.username && this.form.password) {
      console.log('++ createAccount', this.form);
      return;
    } 
    if(!this.form.firstname) {
      this.handleError(this.accountErrors.NO_FIRSTNAME);
    }
    if(!this.form.username) {
      this.handleError(this.accountErrors.NO_USERNAME);
    }
    if(!this.form.password) {
      this.handleError(this.accountErrors.NO_PASSWORD);
    }
  }
  
  handleError(errorType) {
    console.log('++ handleError', errorType.code);
  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
