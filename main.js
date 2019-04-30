(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\r\n  <div class=\"container\">\r\n    <div class=\"main-content text-center\">\r\n      <app-home *ngIf=\"activeComponent==='home'\"></app-home>\r\n      <app-scanner *ngIf=\"activeComponent==='scanner'\"></app-scanner>\r\n      <app-result *ngIf=\"activeComponent==='result'\" [decodedQR]=\"decodedQR\"></app-result>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  padding-top: 6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXERldmVsb3BtZW50XFxKYXZhU2NyaXB0XFxBbmd1bGFyXFxhbmd1bGFyLXFyLXJlYWRlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiA2ZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'angular-qr-reader';
        this.decodedQR = '';
        this.activeComponent = 'home';
        this.mySubscriber = function (msg, data) {
            console.log(msg, data);
            if (msg === 'SHOW_COMPONENT') {
                if (data.page === 'scanner') {
                    _this.setActiveComponent('scanner');
                }
                else if (data.page === 'result') {
                    _this.setActiveComponent('result');
                    _this.decodedQR = data.payload;
                }
                else {
                    _this.setActiveComponent('home');
                }
            }
        };
        this.token = pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.subscribe('SHOW_COMPONENT', this.mySubscriber);
        this.setActiveComponent = function (component) {
            _this.activeComponent = component;
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scanner/scanner.component */ "./src/app/scanner/scanner.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_7__["ScannerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-8 offset-2\">\r\n    <img src=\"assets/images/scanner_home.png\" class=\"img-fluid\" alt=\"\">\r\n    <div class=\"clearfix\"></div>\r\n    <button (click)=\"onClickScan()\" mdbBtn type=\"button\" color=\"primary\" class=\"btn-rounded mt-5\" mdbWavesEffect>Scan QR Code</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onClickScan = function () {
        pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('SHOW_COMPONENT', { page: 'scanner' });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2\">\r\n    <h2>\r\n      <img src=\"assets/images/scan_complete_tick.png\" alt=\"\" class=\"scan-complete-tick\"> Scan complete!\r\n    </h2>\r\n\r\n    <div class=\"scan-result mt-5\">\r\n      {{decodedQR}}\r\n    </div>\r\n\r\n    <button (click)=\"onScanAnother()\" mdbBtn type=\"button\" color=\"primary\" class=\"btn-rounded mt-5\" mdbWavesEffect>Scan\r\n      Another QR Code\r\n    </button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/result/result.component.scss":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scan-result {\n  background-color: #eee;\n  padding: 10px; }\n\n.scan-complete-tick {\n  width: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L0U6XFxEZXZlbG9wbWVudFxcSmF2YVNjcmlwdFxcQW5ndWxhclxcYW5ndWxhci1xci1yZWFkZXIvc3JjXFxhcHBcXHJlc3VsdFxccmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nhbi1yZXN1bHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5zY2FuLWNvbXBsZXRlLXRpY2t7XHJcbiAgd2lkdGg6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);



var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent.prototype.onScanAnother = function () {
        pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('SHOW_COMPONENT', { page: 'home' });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ResultComponent.prototype, "decodedQR", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/result/result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/scanner/scanner.component.html":
/*!************************************************!*\
  !*** ./src/app/scanner/scanner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n    <video id=\"live-video\" autoplay playsinline muted></video>\r\n\r\n    <div class=\"diode\" *ngIf=\"capture\">\r\n      <div class=\"laser\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/scanner/scanner.component.scss":
/*!************************************************!*\
  !*** ./src/app/scanner/scanner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#live-video {\n  width: 100%; }\n\n.laser {\n  width: 100%;\n  margin-left: -15px;\n  background-color: #05d20b;\n  height: 3px;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  box-shadow: 0 5px 5px #06ef0c;\n  -webkit-animation: scanning 2s infinite;\n          animation: scanning 2s infinite; }\n\n.diode {\n  -webkit-animation: beam .01s infinite;\n          animation: beam .01s infinite; }\n\n@-webkit-keyframes beam {\n  50% {\n    opacity: 0; } }\n\n@keyframes beam {\n  50% {\n    opacity: 0; } }\n\n@-webkit-keyframes scanning {\n  50% {\n    -webkit-transform: translateY(70vw);\n            transform: translateY(70vw); } }\n\n@keyframes scanning {\n  50% {\n    -webkit-transform: translateY(70vw);\n            transform: translateY(70vw); } }\n\n@media (min-width: 576px) {\n  @-webkit-keyframes scanning {\n    50% {\n      -webkit-transform: translateY(420px);\n              transform: translateY(420px); } }\n  @keyframes scanning {\n    50% {\n      -webkit-transform: translateY(420px);\n              transform: translateY(420px); } } }\n\n@media (min-width: 768px) {\n  @-webkit-keyframes scanning {\n    50% {\n      -webkit-transform: translateY(450px);\n              transform: translateY(450px); } }\n  @keyframes scanning {\n    50% {\n      -webkit-transform: translateY(450px);\n              transform: translateY(450px); } } }\n\n@media (min-width: 992px) {\n  @-webkit-keyframes scanning {\n    50% {\n      -webkit-transform: translateY(450px);\n              transform: translateY(450px); } }\n  @keyframes scanning {\n    50% {\n      -webkit-transform: translateY(450px);\n              transform: translateY(450px); } } }\n\n@media (min-width: 1200px) {\n  @-webkit-keyframes scanning {\n    50% {\n      -webkit-transform: translateY(540px);\n              transform: translateY(540px); } }\n  @keyframes scanning {\n    50% {\n      -webkit-transform: translateY(540px);\n              transform: translateY(540px); } } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nhbm5lci9FOlxcRGV2ZWxvcG1lbnRcXEphdmFTY3JpcHRcXEFuZ3VsYXJcXGFuZ3VsYXItcXItcmVhZGVyL3NyY1xcYXBwXFxzY2FubmVyXFxzY2FubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLDZCQUE2QjtFQUM3Qix1Q0FBK0I7VUFBL0IsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UscUNBQTZCO1VBQTdCLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBRmQ7RUFDRTtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQUtkO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUEsRUFBQTs7QUFGL0I7RUFDRTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQSxFQUFBOztBQU0vQjtFQUNFO0lBQ0U7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCLEVBQUEsRUFBQTtFQUZoQztJQUNFO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QixFQUFBLEVBQUEsRUFBQTs7QUFNbEM7RUFDRTtJQUNFO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QixFQUFBLEVBQUE7RUFGaEM7SUFDRTtNQUNFLG9DQUE0QjtjQUE1Qiw0QkFBNEIsRUFBQSxFQUFBLEVBQUE7O0FBTWxDO0VBQ0U7SUFDRTtNQUNFLG9DQUE0QjtjQUE1Qiw0QkFBNEIsRUFBQSxFQUFBO0VBRmhDO0lBQ0U7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCLEVBQUEsRUFBQSxFQUFBOztBQU1sQztFQUNFO0lBQ0U7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCLEVBQUEsRUFBQTtFQUZoQztJQUNFO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QixFQUFBLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NjYW5uZXIvc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXZlLXZpZGVvIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxhc2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1ZDIwYjtcclxuICBoZWlnaHQ6IDNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4ICMwNmVmMGM7XHJcbiAgYW5pbWF0aW9uOiBzY2FubmluZyAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmRpb2RlIHtcclxuICBhbmltYXRpb246IGJlYW0gLjAxcyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBiZWFtIHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNjYW5uaW5nIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwdncpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgQGtleWZyYW1lcyBzY2FubmluZyB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDIwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgQGtleWZyYW1lcyBzY2FubmluZyB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDUwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgQGtleWZyYW1lcyBzY2FubmluZyB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDUwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBAa2V5ZnJhbWVzIHNjYW5uaW5nIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1NDBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/scanner/scanner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/scanner/scanner.component.ts ***!
  \**********************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsqr */ "./node_modules/jsqr/dist/jsQR.js");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_3__);




var ScannerComponent = /** @class */ (function () {
    function ScannerComponent() {
        this.capture = false;
        this.interval = null;
        this.mediaStream = null;
    }
    ScannerComponent.prototype.ngOnInit = function () {
    };
    ScannerComponent.prototype.onScanComplete = function (code) {
        window.navigator.vibrate(200);
        this.capture = false;
        clearInterval(this.interval);
        this.stopMediaStream();
        pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('SHOW_COMPONENT', { page: 'result', payload: code.data });
    };
    ScannerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var player = document.getElementsByTagName('video')[0];
        var canvas = document.createElement('canvas');
        // const canvas = document.getElementsByTagName('canvas')[0];
        var context = canvas.getContext('2d');
        // const captureButton = document.getElementById('capture');
        var playerWidth = parseInt(window.getComputedStyle(player, null).getPropertyValue('width'));
        player.height = playerWidth;
        canvas.width = playerWidth;
        canvas.height = playerWidth;
        var constraints = {
            audio: false,
            video: {
                facingMode: 'environment',
                width: playerWidth,
                height: playerWidth
            }
        };
        // Attach the video stream to the video element and autoplay.
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
            _this.mediaStream = stream;
            player.srcObject = stream;
            _this.capture = true;
        }).catch(function (err) {
            console.log(err);
        });
        this.interval = setInterval(function () {
            if (_this.capture) {
                context.drawImage(player, 0, 0, canvas.width, canvas.height);
                var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
                _this.decodeQR(imgData);
            }
        }, 500);
    };
    ScannerComponent.prototype.decodeQR = function (imageData) {
        var code = jsqr__WEBPACK_IMPORTED_MODULE_3___default()(imageData.data, imageData.width, imageData.height);
        if (code) {
            console.log('Found QR code', code);
            this.onScanComplete(code);
        }
    };
    ScannerComponent.prototype.stopMediaStream = function () {
        var track = this.mediaStream.getTracks()[0]; // if only one media track
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
    };
    ScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scanner',
            template: __webpack_require__(/*! ./scanner.component.html */ "./src/app/scanner/scanner.component.html"),
            styles: [__webpack_require__(/*! ./scanner.component.scss */ "./src/app/scanner/scanner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScannerComponent);
    return ScannerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Development\JavaScript\Angular\angular-qr-reader\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map