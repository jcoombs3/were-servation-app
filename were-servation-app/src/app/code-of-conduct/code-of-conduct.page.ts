import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.page.html',
  styleUrls: ['./code-of-conduct.page.scss'],
})
export class CodeOfConductPage implements OnInit {
  private value;
  
  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {
  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
