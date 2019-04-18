import {Component} from '@angular/core';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-qr-reader';

  activeComponent = 'home';

  mySubscriber = (msg, data) => {
    console.log(msg, data);
    if (msg === 'SHOW_COMPONENT') {
      if (data === 'scanner') {
        this.setActiveComponent('scanner');
      } else if (data === 'result') {
        this.setActiveComponent('result');
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
