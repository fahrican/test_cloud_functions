import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  count;

  constructor(public navCtrl: NavController, public http: Http) {
    http.get('https://us-central1-test-project-84156.cloudfunctions.net/countTasks')
      .subscribe((data) => {
        console.log('data', data);
        this.count = data.json().count;
      })
  }

}
