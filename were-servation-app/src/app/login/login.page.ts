import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CodeOfConductPage } from '../code-of-conduct/code-of-conduct.page';

const ERROR = {
  NO_USERNAME: {
    code: 'NoUsername',
    text: 'Please enter a username'
  },
  NO_PASSWORD: {
    code: 'NoPassword',
    text: 'Please enter your password'
  },
  INCORRECT_CREDENTIALS: {
    code: 'IncorrectCredentials',
    text: 'Username or password is incorrect'
  },
};

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
  
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CodeOfConductPage
    });
    return await modal.present();
  }
  
  doLogin() {
    if (this.form.username && this.form.password) {
      console.log('++ doLogin', this.form);
      return;
    } 
    if(!this.form.username) {
      this.handleError(ERROR.NO_USERNAME);
    }
    if(!this.form.password) {
      this.handleError(ERROR.NO_PASSWORD);
    }
  }
  
  handleError(errorType) {
    console.log('++ handleError', errorType.code);
  }

}
