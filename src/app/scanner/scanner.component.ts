import {Component, OnInit, AfterViewInit} from '@angular/core';
import PubSub from 'pubsub-js';
import jsQR from 'jsqr';
// import Instascan from '../../assets/js/instascan.min.js';
// import QrScanner from 'qr-scanner';
// import * as QrScannerWorkerPath from '../../assets/js/qr-scanner-worker.min.js';
// QrScanner.WORKER_PATH = 'assets/js/qr-scanner-worker.min.js';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit, AfterViewInit {
  capture = false;
  interval = null;
  mediaStream = null;

  constructor() {
  }

  ngOnInit() {
  }

  onScanComplete(code) {
    this.capture = false;
    clearInterval(this.interval);
    this.stopMediaStream();
    PubSub.publish('SHOW_COMPONENT', {page: 'result', payload: code.data});
  }

  ngAfterViewInit(): void {
    const player = document.getElementsByTagName('video')[0];
    const canvas = document.createElement('canvas');
    // const canvas = document.getElementsByTagName('canvas')[0];
    const context = canvas.getContext('2d');
    const captureButton = document.getElementById('capture');

    const constraints = {
      video: {width: 500, height: 500}
    };

    // Attach the video stream to the video element and autoplay.
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        this.mediaStream = stream;
        player.srcObject = stream;
        this.capture = true;
      }).catch((err) => {
      console.log(err);
    });


    /*captureButton.addEventListener('click', () => {
      // Draw the video frame to the canvas.
      context.drawImage(player, 0, 0, canvas.width, canvas.height);

      const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
      this.decodeQR(imgData);
    });*/

    this.interval = setInterval(() => {
      if (this.capture) {
        context.drawImage(player, 0, 0, canvas.width, canvas.height);

        const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        this.decodeQR(imgData);
      }
    }, 500);


  }


  decodeQR(imageData) {
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
      console.log('Found QR code', code);
      this.onScanComplete(code);
    }
  }

  stopMediaStream() {
    const track = this.mediaStream.getTracks()[0];  // if only one media track
    track.stop();


    // let MediaStream = window.MediaStream;
    //
    // if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    //   MediaStream = webkitMediaStream;
    // }
    //
    // /*global MediaStream:true */
    // if (typeof MediaStream !== 'undefined' && !('stop' in MediaStream.prototype)) {
    //   MediaStream.prototype.stop = function() {
    //     this.getTracks().forEach(function(track) {
    //       track.stop();
    //     });
    //   };
    // }
  }
}
