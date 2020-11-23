(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title size=\"large\">{{id}}</ion-title>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{id}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n   \n<ion-content   >\n\t\n\t<!-- <div style=\"height: 500px;width: 100%;overflow: hidden;transition: all 0.1s;margin-top: 50px;\" (swiped)=\"checking($event)\" appSelect>\n\t<ion-card *ngIf=\"frame!==undefined\" >\n    \n    \t<img src=\"{{frame.srcHD}}\" style=\"height: 500px;\">\t\n    \t\n    </ion-card>\n   </div>  --> \n   <div *ngFor=\"let item of photos;index as i\">\t\n   <div  [ngClass]=\"{'frames': i != 1, 'frame1':i == 1 }\"  (swiped)=\"checking($event)\" appSelect>\n\t<ion-card *ngIf=\"item!==undefined\" >\n    \n    \t<img src=\"{{item.srcHD}}\" style=\"height: 500px;\">\t\n    \t\n    </ion-card>\n   </div>  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/select/select.page.scss":
/*!*****************************************!*\
  !*** ./src/app/select/select.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".frames {\n  height: 500px;\n  width: 100%;\n  overflow: hidden;\n  transition: all 0.1s;\n  margin-top: -500px;\n}\n\n.frame1 {\n  height: 500px;\n  width: 100%;\n  overflow: hidden;\n  transition: all 0.1s;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0L3NlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQWMsV0FBQTtFQUFZLGdCQUFBO0VBQWlCLG9CQUFBO0VBQXFCLGtCQUFBO0FBS2pFOztBQUhBO0VBQ0MsYUFBQTtFQUFjLFdBQUE7RUFBWSxnQkFBQTtFQUFpQixvQkFBQTtFQUFxQixnQkFBQTtBQVVqRSIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC9zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW1lc3tcclxuXHRoZWlnaHQ6IDUwMHB4O3dpZHRoOiAxMDAlO292ZXJmbG93OiBoaWRkZW47dHJhbnNpdGlvbjogYWxsIDAuMXM7bWFyZ2luLXRvcDogLTUwMHB4O1xyXG59XHJcbi5mcmFtZTF7XHJcblx0aGVpZ2h0OiA1MDBweDt3aWR0aDogMTAwJTtvdmVyZmxvdzogaGlkZGVuO3RyYW5zaXRpb246IGFsbCAwLjFzO21hcmdpbi10b3A6IDUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/select/select.page.ts":
/*!***************************************!*\
  !*** ./src/app/select/select.page.ts ***!
  \***************************************/
/*! exports provided: FrameComponent, SelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameComponent", function() { return FrameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPage", function() { return SelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../telegram.service */ "./src/app/telegram.service.ts");




let FrameComponent = class FrameComponent {
};
FrameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frame',
    })
], FrameComponent);

let SelectPage = class SelectPage {
    constructor(activatedRoute, telegramService) {
        this.activatedRoute = activatedRoute;
        this.telegramService = telegramService;
        this.cursor = 0;
        this.like = false;
    }
    ngOnInit() {
        this.frames = [];
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.telegramService.getPhotos(this.id).subscribe((x) => {
            this.photos = (x);
            this.frame = this.photos[0];
            this.frame2 = this.photos[1];
            if (this.photos.length >= 1)
                this.getHD(this.photos[0], 0);
            if (this.photos.length >= 2) {
                this.getHD(this.photos[1], 1);
            }
            if (this.photos.length >= 3) {
                this.getHD(this.photos[2], 2);
            }
        });
    }
    getHD(obj, i) {
        this.telegramService.getHDPhoto(obj).then((x) => {
            this.photos[i] = x;
            this.frames.push(this.photos[i]);
        });
    }
    checking(e) {
        console.log(e);
        this.nextFrame();
    }
    nextFrame() {
        this.cursor++;
        if (this.cursor < this.photos.length)
            this.frame = this.photos[this.cursor];
        if ((this.cursor + 2) < this.photos.length) {
            this.getHD(this.photos[this.cursor + 2], this.cursor + 2);
            if (this.frame.src == "" && this.cursor < this.photos.length) {
                this.nextFrame();
            }
        }
    }
};
SelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _telegram_service__WEBPACK_IMPORTED_MODULE_3__["TelegramService"] }
];
SelectPage.propDecorators = {
    card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['swipe',] }]
};
SelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select.page.scss */ "./src/app/select/select.page.scss")).default]
    })
], SelectPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map