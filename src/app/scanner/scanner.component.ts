import {Component, OnInit} from '@angular/core';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onScanComplete() {
    PubSub.publish('SHOW_COMPONENT', 'result');
  }
}
