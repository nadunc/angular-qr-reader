import {Component, OnInit} from '@angular/core';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onClickScan() {
    PubSub.publish('SHOW_COMPONENT', {page: 'scanner'});
  }
}
