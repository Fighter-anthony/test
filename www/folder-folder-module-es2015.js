(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-searchbar placeholder='Search Models' (ionChange)=\"search($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Models</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n  <ion-segment-button value=\"Updated\">\n    <ion-label>Updated</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Selected\">\n    <ion-label>Selected</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"Newbies\">\n    <ion-label>Newbies</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n  <div id=\"container\">\n    <div  class=\"model\"  *ngFor=\"let item of filterlist\" >\n      <div class=\"modelContainer\">\n        <img src=\"{{item.dp}}\" class=\"modelpic\" (click)='gotoSelect(item.username)'>\n      </div>\n      <br>{{item.username}}<br>\n      <span style=\"color:darkblue;\">\n        {{item.datestr}}\n      </span>\n        <br>\n      Update Now\n    </div>\n \n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.model {\n  width: 160px;\n  height: 260px;\n  display: inline-block;\n  border-radius: 10px;\n  border: none;\n  margin: 15px;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.btnSelected {\n  background: white;\n  width: 150px;\n  color: black;\n  position: absolute;\n  bottom: 0px;\n  height: 35px;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.btnHidden {\n  background: #2d2d6f;\n  width: 150px;\n  color: white;\n  position: absolute;\n  bottom: 0px;\n  height: 35px;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  color: white;\n  cursor: pointer;\n}\n\n.selectContainer {\n  height: 500px;\n  overflow-y: auto;\n  display: none;\n}\n\n.updateContainer {\n  height: 500px;\n  overflow-y: auto;\n}\n\n.newbieContainer {\n  height: 500px;\n  overflow-y: auto;\n  display: none;\n}\n\n.modelContainer {\n  width: 154px;\n  height: 154px;\n  border-radius: 154px;\n  padding: 2px;\n  overflow: hidden;\n}\n\n.modelContainer:hover {\n  background: black;\n}\n\n.modelpic {\n  width: 150px;\n  height: 150px;\n  border-radius: 150px;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0FBSkY7O0FBT0k7RUFDRSxZQUFBO0VBQWEsYUFBQTtFQUFjLHFCQUFBO0VBQXNCLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxZQUFBO0VBQWEsZUFBQTtFQUMvRixnQkFBQTtBQUVOOztBQUNJO0VBQ0UsaUJBQUE7RUFBa0IsWUFBQTtFQUFhLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixXQUFBO0VBQVksWUFBQTtFQUFhLFlBQUE7RUFBYyxhQUFBO0VBQWMsZUFBQTtFQUFnQixlQUFBO0FBVzFJOztBQVRJO0VBQ0UsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixXQUFBO0VBQVksWUFBQTtFQUFhLFlBQUE7RUFBYyxhQUFBO0VBQWMsZUFBQTtFQUFnQixZQUFBO0VBQWEsZUFBQTtBQXNCeko7O0FBcEJJO0VBQ0UsYUFBQTtFQUFjLGdCQUFBO0VBQWdCLGFBQUE7QUF5QnBDOztBQXZCSTtFQUNFLGFBQUE7RUFBYyxnQkFBQTtBQTJCcEI7O0FBekJJO0VBQ0UsYUFBQTtFQUFjLGdCQUFBO0VBQWdCLGFBQUE7QUE4QnBDOztBQTVCSTtFQUNFLFlBQUE7RUFBYSxhQUFBO0VBQWMsb0JBQUE7RUFBcUIsWUFBQTtFQUFhLGdCQUFBO0FBbUNuRTs7QUFqQ0k7RUFDRSxpQkFBQTtBQW9DTjs7QUFqQ0k7RUFDRSxZQUFBO0VBQWEsYUFBQTtFQUFjLG9CQUFBO0VBQXFCLHNCQUFBO0FBdUN0RCIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgdG9wOiA1MCU7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiAgICAubW9kZWx7XG4gICAgICB3aWR0aDogMTYwcHg7aGVpZ2h0OiAyNjBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czogMTBweDtib3JkZXI6IG5vbmU7bWFyZ2luOiAxNXB4O2N1cnNvcjogcG9pbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxuICAgIC5idG5TZWxlY3RlZHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO3dpZHRoOiAxNTBweDtjb2xvcjogYmxhY2s7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMHB4O2hlaWdodDogMzVweDtib3JkZXI6ICBub25lO291dGxpbmU6IG5vbmU7Zm9udC1zaXplOiAyMHB4O2N1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmJ0bkhpZGRlbntcbiAgICAgIGJhY2tncm91bmQ6ICMyZDJkNmY7d2lkdGg6IDE1MHB4O2NvbG9yOiB3aGl0ZTtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiAwcHg7aGVpZ2h0OiAzNXB4O2JvcmRlcjogIG5vbmU7b3V0bGluZTogbm9uZTtmb250LXNpemU6IDIwcHg7Y29sb3I6IHdoaXRlO2N1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLnNlbGVjdENvbnRhaW5lcntcbiAgICAgIGhlaWdodDogNTAwcHg7b3ZlcmZsb3cteTphdXRvO2Rpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC51cGRhdGVDb250YWluZXJ7XG4gICAgICBoZWlnaHQ6IDUwMHB4O292ZXJmbG93LXk6YXV0bztcbiAgICB9XG4gICAgLm5ld2JpZUNvbnRhaW5lcntcbiAgICAgIGhlaWdodDogNTAwcHg7b3ZlcmZsb3cteTphdXRvO2Rpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2RlbENvbnRhaW5lcntcbiAgICAgIHdpZHRoOiAxNTRweDtoZWlnaHQ6IDE1NHB4O2JvcmRlci1yYWRpdXM6IDE1NHB4O3BhZGRpbmc6IDJweDtvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubW9kZWxDb250YWluZXI6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcblxuICAgIH1cbiAgICAubW9kZWxwaWN7XG4gICAgICB3aWR0aDogMTUwcHg7aGVpZ2h0OiAxNTBweDtib3JkZXItcmFkaXVzOiAxNTBweDtib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _telegram_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../telegram.service */ "./src/app/telegram.service.ts");
/* harmony import */ var _select_select_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select/select.page */ "./src/app/select/select.page.ts");






let FolderPage = class FolderPage {
    constructor(telegramService, activatedRoute, navcontroller) {
        this.telegramService = telegramService;
        this.activatedRoute = activatedRoute;
        this.navcontroller = navcontroller;
        this.done = false;
        this.lists = { Updated: [], Selected: [], Newbies: [] };
        this.fancy = _select_select_page__WEBPACK_IMPORTED_MODULE_5__["SelectPage"];
    }
    btnClick() {
        this.sendRequest(this.data);
    }
    btnEdit() {
        this.updateRequest(this.data);
    }
    sendRequest(data) {
        this.telegramService.sendData(this.data).subscribe((x) => {
            this.done = (x.done == 1);
            this.message = 'Gaveesh';
        });
    }
    updateRequest(data) {
        this.telegramService.getData().subscribe((x) => {
            this.done = false;
            //this.message=x.name;
        });
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        this.telegramService.getData().subscribe((x) => {
            this.list = x;
            for (var i = this.list.length - 1; i >= 0; i--) {
                this.list[i].dp = decodeURIComponent(this.list[i].dp);
                if (this.list[i].updated > 0) {
                    var today = new Date();
                    var that = new Date(this.list[i].lastupdated);
                    this.list[i].datestr = this.getTime(today, that);
                    if (this.list[i].lastTen == undefined) {
                        this.list[i].lastTen = [];
                    }
                }
            }
        });
    }
    getTime(today, that) {
        var Difference_In_Time = today.getTime() - that.getTime();
        var Difference_In_Days = Math.floor((Difference_In_Time) / (1000 * 3600 * 24));
        var Difference_In_Hours = Math.floor((Difference_In_Time / (1000 * 3600)));
        var Difference_In_Minutes = Math.floor((Difference_In_Time / (1000 * 60)));
        var datestr;
        if (Difference_In_Days > 0)
            datestr = Difference_In_Days + " Days Ago";
        else if (Difference_In_Hours > 0)
            datestr = Difference_In_Hours + " Hours Ago";
        else if (Difference_In_Minutes > 0)
            datestr = Difference_In_Minutes + " minute Ago";
        else
            datestr = 'Just Now';
        return datestr;
    }
    segmentChanged(ev) {
        //  console.log('Segment changed', ev);
        this.segment = ev.detail.value;
        if (ev.detail.value == 'Updated') {
            this.filterlist = this.list.filter(x => { return (x.updated > 0); });
        }
        if (ev.detail.value == 'Selected') {
            this.filterlist = this.list.filter(x => { return (x.selected > 0); });
        }
        if (ev.detail.value == 'Newbies') {
            this.filterlist = this.list.filter(x => { return (x.updated <= 0); });
        }
        this.lists[this.segment] = this.filterlist;
    }
    search(ev) {
        //	 console.log('Segment changed', ev);
        var key = ev.detail.value;
        this.filterlist = this.lists[this.segment].filter(x => { return (x.username.indexOf(key) >= 0); });
    }
    gotoSelect(username) {
        //alert(username);
        this.navcontroller.navigateRoot('/select/' + username);
    }
};
FolderPage.ctorParameters = () => [
    { type: _telegram_service__WEBPACK_IMPORTED_MODULE_4__["TelegramService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map