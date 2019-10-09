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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <app-nav-bar></app-nav-bar>\r\n  <app-hero></app-hero>\r\n<app-product-list></app-product-list>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _frontend_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/components/nav-bar/nav-bar.component */ "./src/app/frontend/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _frontend_components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frontend/components/product/product.component */ "./src/app/frontend/components/product/product.component.ts");
/* harmony import */ var _frontend_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./frontend/components/orders/orders.component */ "./src/app/frontend/components/orders/orders.component.ts");
/* harmony import */ var _frontend_components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frontend/components/shopping-cart/shopping-cart.component */ "./src/app/frontend/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _frontend_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontend/components/hero/hero.component */ "./src/app/frontend/components/hero/hero.component.ts");
/* harmony import */ var _frontend_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./frontend/components/product-list/product-list.component */ "./src/app/frontend/components/product-list/product-list.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _frontend_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
            _frontend_components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
            _frontend_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"],
            _frontend_components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"],
            _frontend_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_9__["HeroComponent"],
            _frontend_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_12__["MenubarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/frontend/components/hero/hero.component.css":
/*!*************************************************************!*\
  !*** ./src/app/frontend/components/hero/hero.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #ffffff;\r\n  padding: 5em;\r\n  box-sizing: border-box;\r\n  color: #262626;\r\n}\r\n\r\nsection:nth-of-type(2) {\r\n  background: #ffffff;\r\n  z-index: 5;\r\n\r\n}\r\n\r\n.header-text-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10%;\r\n  z-index: 10;\r\n}\r\n\r\n.big-header {\r\n  font-size: 3.5rem;\r\n  font-weight: 800;\r\n  width: 75%;\r\n}\r\n\r\n.small-header {\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n:host >>> .ui-button-rounded{\r\n  background: #006241 !important;\r\n  border-radius: 50px !important;\r\n  border: 1px solid #006241 !important;\r\n  text-align: center;\r\n  padding-top: 10px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.one {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  max-width: 100%;\r\n  z-index: 4;\r\n}\r\n\r\n.two {\r\n  position: absolute;\r\n  right: 0;\r\n  min-width: 50%;\r\n  top: 25%;\r\n}\r\n\r\n.three {\r\n  position: absolute;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-10-7 15:58:22\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info.\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation vibrate-2\r\n * ----------------------------------------\r\n */\r\n\r\n.shake-horizontal:hover {\r\n  -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\r\n  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\r\n}\r\n\r\n.vibrate-2 {\r\n  -webkit-animation: vibrate-2 1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite;\r\n  animation: vibrate-2 1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-10-7 22:18:12\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info.\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation shake-horizontal\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes shake-horizontal {\r\n  0%,\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70% {\r\n    transform: translateX(-10px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60% {\r\n    transform: translateX(10px);\r\n  }\r\n  80% {\r\n    transform: translateX(8px);\r\n  }\r\n  90% {\r\n    transform: translateX(-8px);\r\n  }\r\n}\r\n\r\n@keyframes shake-horizontal {\r\n  0%,\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70% {\r\n    transform: translateX(-10px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60% {\r\n    transform: translateX(10px);\r\n  }\r\n  80% {\r\n    transform: translateX(8px);\r\n  }\r\n  90% {\r\n    transform: translateX(-8px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes vibrate-2 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  40% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  60% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n@keyframes vibrate-2 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  40% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  60% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFHYix1QkFBdUI7RUFDdkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixXQUFXOztDQUVaOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhDQUE4QztDQUMvQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7Ozs7O29EQUtvRDs7QUFFcEQ7Ozs7R0FJRzs7QUFDSDtFQUNFLHVGQUF1RjtFQUN2RiwrRUFBK0U7Q0FDaEY7O0FBQ0Q7RUFDRSxrRkFBa0Y7RUFDbEYsMEVBQTBFO0NBQzNFOztBQUNEOzs7OztvREFLb0Q7O0FBRXBEOzs7O0dBSUc7O0FBQ0g7RUFDRTs7SUFHRSx5QkFBeUI7R0FDMUI7RUFDRDs7OztJQUtFLDZCQUE2QjtHQUM5QjtFQUNEOzs7SUFJRSw0QkFBNEI7R0FDN0I7RUFDRDtJQUVFLDJCQUEyQjtHQUM1QjtFQUNEO0lBRUUsNEJBQTRCO0dBQzdCO0NBQ0Y7O0FBQ0Q7RUFDRTs7SUFHRSx5QkFBeUI7R0FDMUI7RUFDRDs7OztJQUtFLDZCQUE2QjtHQUM5QjtFQUNEOzs7SUFJRSw0QkFBNEI7R0FDN0I7RUFDRDtJQUVFLDJCQUEyQjtHQUM1QjtFQUNEO0lBRUUsNEJBQTRCO0dBQzdCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUVFLHdCQUF3QjtHQUN6QjtFQUNEO0lBRUUsZ0NBQWdDO0dBQ2pDO0VBQ0Q7SUFFRSwrQkFBK0I7R0FDaEM7RUFDRDtJQUVFLGdDQUFnQztHQUNqQztFQUNEO0lBRUUsaUNBQWlDO0dBQ2xDO0VBQ0Q7SUFFRSx3QkFBd0I7R0FDekI7Q0FDRjs7QUFFRDtFQUNFO0lBRUUsd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFFRSxnQ0FBZ0M7R0FDakM7RUFDRDtJQUVFLCtCQUErQjtHQUNoQztFQUNEO0lBRUUsZ0NBQWdDO0dBQ2pDO0VBQ0Q7SUFFRSxpQ0FBaUM7R0FDbEM7RUFDRDtJQUVFLHdCQUF3QjtHQUN6QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA1ZW07XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMjYyNjI2O1xyXG59XHJcblxyXG5zZWN0aW9uOm50aC1vZi10eXBlKDIpIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHotaW5kZXg6IDU7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyLXRleHQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uYmlnLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uc21hbGwtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG46aG9zdCA+Pj4gLnVpLWJ1dHRvbi1yb3VuZGVke1xyXG4gIGJhY2tncm91bmQ6ICMwMDYyNDEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNjI0MSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogNDtcclxufVxyXG5cclxuLnR3byB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1pbi13aWR0aDogNTAlO1xyXG4gIHRvcDogMjUlO1xyXG59XHJcblxyXG4udGhyZWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0xMC03IDE1OjU4OjIyXHJcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cclxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHZpYnJhdGUtMlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4uc2hha2UtaG9yaXpvbnRhbDpob3ZlciB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNoYWtlLWhvcml6b250YWwgMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzaGFrZS1ob3Jpem9udGFsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xyXG59XHJcbi52aWJyYXRlLTIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB2aWJyYXRlLTIgMXMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNTAsIDAuODYwKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHZpYnJhdGUtMiAxcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1MCwgMC44NjApIGluZmluaXRlO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMTAtNyAyMjoxODoxMlxyXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXHJcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBzaGFrZS1ob3Jpem9udGFsXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZS1ob3Jpem9udGFsIHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgMzAlLFxyXG4gIDUwJSxcclxuICA3MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICB9XHJcbiAgMjAlLFxyXG4gIDQwJSxcclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzaGFrZS1ob3Jpem9udGFsIHtcclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgMzAlLFxyXG4gIDUwJSxcclxuICA3MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICB9XHJcbiAgMjAlLFxyXG4gIDQwJSxcclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB2aWJyYXRlLTIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB2aWJyYXRlLTIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/frontend/components/hero/hero.component.html":
/*!**************************************************************!*\
  !*** ./src/app/frontend/components/hero/hero.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"header-text-container\">\r\n    <h1 class=\"big-header\">High quality LAB tested CBD</h1>\r\n    <p class=\"small-header\">Care about your health</p>\r\n    <button pButton type=\"button\" class=\"ui-button-rounded ui-button-success main-button shake-horizontal\">Zamów</button>\r\n  </div>\r\n\r\n  <!--<img src=\"../../../../assets/img/main-bg-overlay.png\" class=\"one vibrate-2 rellax\">-->\r\n  <img src=\"../../../../assets/img/cbd_gummies_dribbble_2x.png\" class=\"two rellax\">\r\n  <!--<img src=\"../../../../assets/img/chris-the-addict.jpg\" class=\"three rellax\">-->\r\n</section>\r\n<section>\r\n  <h1>fjasfjsgf</h1>\r\n  <p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\r\n    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\r\n    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\r\n    distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\r\n    placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut\r\n    officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non\r\n    recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\r\n    consequatur aut perferendis doloribus asperiores repellat.\"</p>\r\n  <!--<app-product-list></app-product-list>-->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/frontend/components/hero/hero.component.ts":
/*!************************************************************!*\
  !*** ./src/app/frontend/components/hero/hero.component.ts ***!
  \************************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeroComponent = class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero',
        template: __webpack_require__(/*! ./hero.component.html */ "./src/app/frontend/components/hero/hero.component.html"),
        styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/frontend/components/hero/hero.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeroComponent);



/***/ }),

/***/ "./src/app/frontend/components/model/ProductOrder.ts":
/*!***********************************************************!*\
  !*** ./src/app/frontend/components/model/ProductOrder.ts ***!
  \***********************************************************/
/*! exports provided: ProductOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrder", function() { return ProductOrder; });
class ProductOrder {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}


/***/ }),

/***/ "./src/app/frontend/components/model/ProductOrders.ts":
/*!************************************************************!*\
  !*** ./src/app/frontend/components/model/ProductOrders.ts ***!
  \************************************************************/
/*! exports provided: ProductOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrders", function() { return ProductOrders; });
class ProductOrders {
    constructor() {
        this.productOrders = [];
    }
}


/***/ }),

/***/ "./src/app/frontend/components/nav-bar/nav-bar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/components/nav-bar/nav-bar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host >>> .ui-menubar {\r\n  width: 100%;\r\n  background: white;\r\n  height: 75px;\r\n  border: none;\r\n  padding: 20px 30px;\r\n  font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n:host >>> .ui-menubar-root-list {\r\n  padding-left: 25%;\r\n}\r\n\r\n:host >>> .ui-menuitem-text {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n}\r\n\r\n:host >>> .ui-menuitem-link {\r\n  padding: 20px 35px !important;\r\n}\r\n\r\n.logo-container {\r\n  display: inline-flex;\r\n  position: absolute;\r\n  left: 30px;\r\n}\r\n\r\n.logo-brand {\r\n  font-weight: 800;\r\n  font-size: 35px;\r\n}\r\n\r\n#logo-img {\r\n  padding-left: 10px;\r\n  height: 50px;\r\n  width: 65px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOENBQThDO0NBQy9DOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA+Pj4gLnVpLW1lbnViYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogNzVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgPj4+IC51aS1tZW51YmFyLXJvb3QtbGlzdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbn1cclxuXHJcbjpob3N0ID4+PiAudWktbWVudWl0ZW0tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOmhvc3QgPj4+IC51aS1tZW51aXRlbS1saW5rIHtcclxuICBwYWRkaW5nOiAyMHB4IDM1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG5cclxuLmxvZ28tYnJhbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4jbG9nby1pbWcge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/components/nav-bar/nav-bar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/frontend/components/nav-bar/nav-bar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\">\r\n  <div class=\"logo-container\">\r\n    <p class=\"logo-brand\">HempWoo</p>\r\n    <img id=\"logo-img\" src=\"https://img.icons8.com/color/344/marijuana-leaf.png\"/>\r\n\r\n  </div>\r\n  <div>\r\n    <input type=\"text\" pInputText placeholder=\"Szukaj\">\r\n    <button pButton icon=\"fa fa-sign-out\"></button>\r\n  </div>\r\n</p-menubar>\r\n"

/***/ }),

/***/ "./src/app/frontend/components/nav-bar/nav-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/frontend/components/nav-bar/nav-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    ngOnInit() {
        this.items = [
            {
                label: 'Home',
            },
            {
                label: 'Sklep',
                items: [
                    { label: 'Susz CBD' },
                    { label: 'Oleje CBD' },
                    { label: 'Kosmetyki' },
                    { label: 'Akcesoria' },
                    { label: 'Waporyzery' },
                ]
            },
            {
                label: 'O nas',
            },
            {
                label: 'Kontakt',
            },
            { separator: true },
            {
                label: 'Zaloguj',
            }
        ];
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/frontend/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/frontend/components/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/frontend/components/orders/orders.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/frontend/components/orders/orders.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/frontend/components/orders/orders.component.html":
/*!******************************************************************!*\
  !*** ./src/app/frontend/components/orders/orders.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">ORDER</h2>\r\n<ul>\r\n  <li *ngFor=\"let order of orders.productOrders\">\r\n    {{ order.product.name }} - ${{ order.product.price }} x {{ order.quantity}} pcs.\r\n  </li>\r\n</ul>\r\n<h3 class=\"text-right\">Total amount: ${{ total }}</h3>\r\n\r\n<button class=\"btn btn-primary btn-block\" (click)=\"pay()\" *ngIf=\"!paid\">Pay</button>\r\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"paid\">\r\n  <strong>Congratulation!</strong> You successfully made the order.\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/frontend/components/orders/orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/frontend/components/orders/orders.component.ts ***!
  \****************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/frontend/components/services/product.service.ts");



let OrdersComponent = class OrdersComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.orders = this.dataService.ProductOrders;
    }
    ngOnInit() {
        this.paid = false;
        this.sub = this.dataService.OrdersChanged.subscribe(() => {
            this.orders = this.dataService.ProductOrders;
        });
        this.loadTotal();
    }
    pay() {
        this.paid = true;
        this.dataService.saveOrder(this.orders).subscribe();
    }
    loadTotal() {
        this.sub = this.dataService.TotalChanged.subscribe(() => {
            this.total = this.dataService.Total;
        });
    }
};
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! ./orders.component.html */ "./src/app/frontend/components/orders/orders.component.html"),
        styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/frontend/components/orders/orders.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
], OrdersComponent);



/***/ }),

/***/ "./src/app/frontend/components/product-list/product-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/frontend/components/product-list/product-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/frontend/components/product-list/product-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/frontend/components/product-list/product-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-9\">\r\n    <app-products #productsC [hidden]=\"!orderFinished\"></app-products>\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n    <app-shopping-cart (onOrderFinished)=finishOrder($event) #shoppingCartC\r\n                       [hidden]=\"orderFinished\"></app-shopping-cart>\r\n  </div>\r\n  <div class=\"col-md-6 offset-3\">\r\n    <app-orders #ordersC [hidden]=\"orderFinished\"></app-orders>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/frontend/components/product-list/product-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/frontend/components/product-list/product-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "./src/app/frontend/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders/orders.component */ "./src/app/frontend/components/orders/orders.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.component */ "./src/app/frontend/components/product/product.component.ts");





let ProductListComponent = class ProductListComponent {
    constructor() {
        this.collapsed = true;
        this.orderFinished = false;
    }
    ngOnInit() {
    }
    finishOrder(orderFinished) {
        this.orderFinished = orderFinished;
    }
    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsC'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"])
], ProductListComponent.prototype, "productsC", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingCartC'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartComponent"])
], ProductListComponent.prototype, "shoppingCartC", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ordersC'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"])
], ProductListComponent.prototype, "ordersC", void 0);
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/frontend/components/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/frontend/components/product-list/product-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductListComponent);



/***/ }),

/***/ "./src/app/frontend/components/product/product.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/components/product/product.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.padding-0 {*/\r\n/*  padding-right: 0;*/\r\n/*  padding-left: 1;*/\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0QixLQUFLIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLnBhZGRpbmctMCB7Ki9cclxuLyogIHBhZGRpbmctcmlnaHQ6IDA7Ki9cclxuLyogIHBhZGRpbmctbGVmdDogMTsqL1xyXG4vKn0qL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/frontend/components/product/product.component.html":
/*!********************************************************************!*\
  !*** ./src/app/frontend/components/product/product.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-deck\">\r\n  <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let order of productOrders\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-header\">\r\n        <h4>{{order.product.name}}</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <a href=\"#\"><img class=\"card-img-top\" src={{order.product.pictureUrl}}\r\n                         alt=\"\"></a>\r\n        <h5 class=\"card-title\">${{order.product.price}}</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\r\n            <input type=\"number\" min=\"0\" class=\"form-control\"\r\n                   [(ngModel)]=order.quantity>\r\n          </div>\r\n          <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\r\n            <button class=\"btn btn-primary\" (click)=\"addToCart(order)\"\r\n                    [disabled]=\"order.quantity <= 0\">Add To Cart\r\n            </button>\r\n          </div>\r\n          <div class=\"col-12\" *ngIf=\"isProductSelected(order.product)\">\r\n            <button class=\"btn btn-primary btn-block\"\r\n                    (click)=\"removeFromCart(order)\">Remove From Cart\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/frontend/components/product/product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/frontend/components/product/product.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/frontend/components/services/product.service.ts");
/* harmony import */ var _model_ProductOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProductOrder */ "./src/app/frontend/components/model/ProductOrder.ts");





let ProductComponent = class ProductComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.productOrders = [];
        this.subscribtions = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.products = [];
        this.productSelected = false;
    }
    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    }
    addToCart(order) {
        this.dataService.SelectedProductOrder = order;
        this.selectedProductOrder = this.dataService.SelectedProductOrder;
        this.productSelected = true;
    }
    removeFromCart(productOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
        }
        this.dataService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.dataService.ProductOrders;
        this.productSelected = false;
    }
    getProductIndex(product) {
        return this.dataService.ProductOrders.productOrders.findIndex(value => value.product === product);
    }
    isProductSelected(product) {
        return this.getProductIndex(product) > -1;
    }
    loadProducts() {
        this.dataService.getProductList()
            .subscribe((products) => {
            this.products = products;
            this.products.forEach(product => {
                this.productOrders.push(new _model_ProductOrder__WEBPACK_IMPORTED_MODULE_4__["ProductOrder"](product, 0));
            });
        }, (error) => console.log(error));
    }
    loadOrders() {
        this.sub = this.dataService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.dataService.ProductOrders;
        });
    }
    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.dataService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! ./product.component.html */ "./src/app/frontend/components/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/frontend/components/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/frontend/components/services/product.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/frontend/components/services/product.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_ProductOrders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProductOrders */ "./src/app/frontend/components/model/ProductOrders.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ProductService = class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.orders = new _model_ProductOrders__WEBPACK_IMPORTED_MODULE_4__["ProductOrders"]();
        this.productOrderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.ordersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.totalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.ProductOrderChanged = this.productOrderSubject.asObservable();
        this.OrdersChanged = this.ordersSubject.asObservable();
        this.TotalChanged = this.totalSubject.asObservable();
    }
    getProductList() {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.products.productList}`);
    }
    getOrdersList() {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.order.orderList}`);
    }
    saveOrder(order) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.order.orderList, order);
    }
    set SelectedProductOrder(value) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }
    get SelectedProductOrder() {
        return this.productOrder;
    }
    set ProductOrders(value) {
        this.orders = value;
        this.ordersSubject.next();
    }
    get ProductOrders() {
        return this.orders;
    }
    get Total() {
        return this.total;
    }
    set Total(value) {
        this.total = value;
        this.totalSubject.next();
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/frontend/components/shopping-cart/shopping-cart.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/frontend/components/shopping-cart/shopping-cart.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/frontend/components/shopping-cart/shopping-cart.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/frontend/components/shopping-cart/shopping-cart.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header text-center\">Shopping Cart</div>\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Total: ${{total}}</h5>\r\n    <hr>\r\n    <h6 class=\"card-title\">Items bought:</h6>\r\n\r\n    <ul>\r\n      <li *ngFor=\"let order of orders.productOrders\">\r\n        {{ order.product.name }} - {{ order.quantity}} pcs.\r\n      </li>\r\n    </ul>\r\n\r\n    <button class=\"btn btn-light btn-block\" (click)=\"finishOrder()\"\r\n            [disabled]=\"orders.productOrders.length == 0\">Checkout\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/frontend/components/shopping-cart/shopping-cart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/frontend/components/shopping-cart/shopping-cart.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_ProductOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/ProductOrders */ "./src/app/frontend/components/model/ProductOrders.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/frontend/components/services/product.service.ts");
/* harmony import */ var _model_ProductOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProductOrder */ "./src/app/frontend/components/model/ProductOrder.ts");





let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.orders = new _model_ProductOrders__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.loadCart();
        this.loadTotal();
    }
    calculateTotal(products) {
        let sum = 0;
        products.forEach(value => {
            sum += (value.product.price * value.quantity);
        });
        return sum;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    finishOrder() {
        this.orderFinished = true;
        this.dataservice.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    }
    loadTotal() {
        this.sub = this.dataservice.OrdersChanged.subscribe(() => {
            this.total = this.calculateTotal(this.orders.productOrders);
        });
    }
    loadCart() {
        this.sub = this.dataservice.ProductOrderChanged.subscribe(() => {
            let productOrder = this.dataservice.SelectedProductOrder;
            if (productOrder) {
                this.orders.productOrders.push(new _model_ProductOrder__WEBPACK_IMPORTED_MODULE_4__["ProductOrder"](productOrder.product, productOrder.quantity));
            }
            this.dataservice.ProductOrders = this.orders;
            this.orders = this.dataservice.ProductOrders;
            this.total = this.calculateTotal(this.orders.productOrders);
        });
    }
    reset() {
        this.orderFinished = false;
        this.orders = new _model_ProductOrders__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.orders.productOrders = [];
        this.loadTotal();
        this.total = 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ShoppingCartComponent.prototype, "onOrderFinished", void 0);
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/frontend/components/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/frontend/components/shopping-cart/shopping-cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ShoppingCartComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: apiUrl, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const apiUrl = 'http://localhost:3000/api';
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    api: {
        products: {
            productList: apiUrl + '/productList'
        },
        order: {
            orderList: apiUrl + '/orderList'
        }
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programowanie\Projekty\Front+BackcBdshOp\Java-e-commerce\backend\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map