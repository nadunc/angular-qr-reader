import {Component} from '@angular/core';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-qr-reader';
  decodedQR = '';

  activeComponent = 'home';

  mySubscriber = (msg, data) => {
    console.log(msg, data);
    if (msg === 'SHOW_COMPONENT') {
      if (data.page === 'scanner') {
        this.setActiveComponent('scanner');
      } else if (data.page === 'result') {
        this.setActiveComponent('result');
        this.decodedQR = data.payload;
      } else {
        this.setActiveComponent('home');
      }
    }
  }

  token = PubSub.subscribe('SHOW_COMPONENT', this.mySubscriber);

  setActiveComponent = (component) => {
    this.activeComponent = component;
  }
}
