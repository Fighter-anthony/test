(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module"],{

/***/ "./src/app/select.directive.ts":
/*!*************************************!*\
  !*** ./src/app/select.directive.ts ***!
  \*************************************/
/*! exports provided: SelectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDirective", function() { return SelectDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let SelectDirective = class SelectDirective {
    constructor(elementRef, gesCtrl) {
        this.elementRef = elementRef;
        this.gesCtrl = gesCtrl;
        this.check = true;
        this.swiped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        const gesture = this.gesCtrl.create({
            el: this.elementRef.nativeElement,
            gestureName: 'my-gesture',
            onMove: (detail) => { this.onMove(detail); }
        });
        gesture.enable();
        // console.log(this.elementRef);
    }
    onMove(detail) {
        const type = detail.type;
        const currentX = detail.currentX;
        const deltaX = detail.deltaX;
        const velocityX = detail.velocityX;
        var deg = Math.atan(deltaX / (500.0 - detail.currentY)) * 180.00 / Math.PI * 0.5;
        this.elementRef.nativeElement.style.webkitTransform = "rotate(" + (deg) + "deg)";
        if (deltaX > 0)
            this.elementRef.nativeElement.style.webkitTransformOrigin = "50% 600px";
        if (deltaX < 0)
            this.elementRef.nativeElement.style.webkitTransformOrigin = "50% 600px";
        if ((deg > 30 || deg < -30) && this.check) {
            this.check = false;
            this.elementRef.nativeElement.style.display = "none";
            if (deg > 30)
                this.swiped.emit(1);
            if (deg < -30)
                this.swiped.emit(-1);
        }
        var opacity = (Math.abs(deg) / 30.0);
        this.elementRef.nativeElement.style.opacity = (1 - opacity);
    }
    touchend() {
        this.elementRef.nativeElement.style.webkitTransform = "rotate(" + (0) + "deg)";
        this.elementRef.nativeElement.style.opacity = (1);
        this.elementRef.nativeElement.style.zIndex = 0;
        //this.elementRef.nativeElement.style.display='block';
    }
};
SelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"] }
];
SelectDirective.propDecorators = {
    swiped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    touchend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchend',] }]
};
SelectDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSelect]'
    })
], SelectDirective);



/***/ }),

/***/ "./src/app/select/select-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/select/select-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageRoutingModule", function() { return SelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.page */ "./src/app/select/select.page.ts");




const routes = [
    {
        path: '',
        component: _select_page__WEBPACK_IMPORTED_MODULE_3__["SelectPage"]
    }
];
let SelectPageRoutingModule = class SelectPageRoutingModule {
};
SelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectPageRoutingModule);



/***/ }),

/***/ "./src/app/select/select.module.ts":
/*!*****************************************!*\
  !*** ./src/app/select/select.module.ts ***!
  \*****************************************/
/*! exports provided: SelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageModule", function() { return SelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-routing.module */ "./src/app/select/select-routing.module.ts");
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.page */ "./src/app/select/select.page.ts");
/* harmony import */ var _select_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select.directive */ "./src/app/select.directive.ts");








let SelectPageModule = class SelectPageModule {
};
SelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPageRoutingModule"]
        ],
        declarations: [_select_page__WEBPACK_IMPORTED_MODULE_6__["SelectPage"], _select_directive__WEBPACK_IMPORTED_MODULE_7__["SelectDirective"]]
    })
], SelectPageModule);



/***/ })

}]);
//# sourceMappingURL=select-select-module-es2015.js.map