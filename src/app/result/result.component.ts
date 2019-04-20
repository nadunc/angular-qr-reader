import {Component, OnInit, Input} from '@angular/core';
import PubSub from 'pubsub-js';
import jsQR from 'jsqr';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() decodedQR: string;

  constructor() {
  }

  ngOnInit() {
  }

  onScanAnother() {
    PubSub.publish('SHOW_COMPONENT', {page: 'home'});
  }

}
