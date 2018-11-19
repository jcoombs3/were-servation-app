import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CodeOfConductPage } from '../code-of-conduct/code-of-conduct.page';
import { CreateAccountPage } from '../create-account/create-account.page';
import * as errors from '../errors/errors';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private form = {
    username: '',
    password: ''
  };
  private accountErrors = errors.ACCOUNT_ERRORS;
  
  constructor(public modalCtrl: ModalController) { 
    console.log(this.accountErrors);
  }

  ngOnInit() {
  }
  
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CodeOfConductPage
    });
    return await modal.present();
  }
  
  async presentCreateAccount() {
    const createAccountModal = await this.modalCtrl.create({
      component: CreateAccountPage
    });
    return await createAccountModal.present();
  }
  
  doLogin() {
    if (this.form.username && this.form.password) {
      console.log('++ doLogin', this.form);
      return;
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

}
