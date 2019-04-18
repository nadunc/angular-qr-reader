import {Component, OnInit} from '@angular/core';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onScanAnother() {
    PubSub.publish('SHOW_COMPONENT', 'home');
  }
}
