import {Component, OnInit, AfterViewInit} from '@angular/core';
import PubSub from 'pubsub-js';
import jsQR from 'jsqr';
import adapter from 'webrtc-adapter';

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
    window.navigator.vibrate(200);
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
    // const captureButton = document.getElementById('capture');

    const playerWidth = parseInt(window.getComputedStyle(player, null).getPropertyValue('width'));
    player.height = playerWidth;
    canvas.width = playerWidth;
    canvas.height = playerWidth;

    const constraints = {
      audio: false,
      video: {
        facingMode : 'environment',
        width: playerWidth,
        height: playerWidth
      }
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
