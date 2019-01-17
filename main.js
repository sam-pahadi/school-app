(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _select_board_select_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-board/select-board.component */ "./src/app/select-board/select-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ksachan on 31-Jul-18.
 */







var routes = [
    { path: '', loadChildren: './admin/admin.module#AdminModule', canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'board', component: _select_board_select_board_component__WEBPACK_IMPORTED_MODULE_6__["SelectBoardComponent"] },
    //not found page
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-padding\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==color theme variables==*/\n/*--font family --*/\n/*--styling based on variables--*/\n[warn] {\n  background-color: #333 !important;\n  color: #fff; }\n[noBg] {\n  background-color: transparent; }\n[barBg] {\n  background-color: #efefef; }\n[barShadow] {\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5); }\n[btnShadow] {\n  box-shadow: 0 1px 5px #ccc; }\n[smallestFont] {\n  font-size: 10px; }\n[outLinePrimary] {\n  border: 1px solid #000 !important; }\n[outLineDefault] {\n  border: 1px solid #e5e5e5 !important; }\n[danger] {\n  background-color: #333; }\n[dangerText] {\n  color: #333 !important; }\n.mat-toolbar.mat-accent, .mat-toolbar.mat-primary {\n  background: #333;\n  color: #fff; }\n* {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  zoom: 1; }\n.SourceSansProBold {\n  font-family: 'SourceSansProBold'; }\nh1, h2, h3, h4, h5, h6, span, p, a, .barTitle, .pageTitle, .mat-dialog-title,\n.mat-table .mat-header-cell, .mat-card-subtitle,\nmat-accordion .mat-expansion-panel-header,\nmat-accordion .mat-nav-list a, .mat-card-title, .table th {\n  font-family: \"SourceSansProRegular\"; }\n.app-full-bleed-dialog .mat-dialog-container {\n  padding: 9px 24px 14px 24px !important; }\n[noShadow] {\n  box-shadow: none !important; }\n.row {\n  padding: 0 !important;\n  margin: 0 !important; }\n.pagePlaceHolder {\n  display: block;\n  width: 100%;\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n.mat-sidenav-content .pagePlaceHolder {\n  padding-bottom: 15px; }\n.no-padding {\n  padding: 0 !important; }\n.clearfix {\n  clear: both; }\n.mat-sidenav-container {\n  min-height: 100vh; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel {\n    background: transparent;\n    color: rgba(0, 0, 0, 0.87); }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-body {\n    padding: 0 !important; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header, .mat-sidenav-container .matSidebarMenu .mat-list-item {\n    transition: background-color ease-out 0.5s; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header:hover, .mat-sidenav-container .matSidebarMenu .mat-list-item:hover {\n      background-color: #eeeeee;\n      color: #333; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header img, .mat-sidenav-container .matSidebarMenu .mat-list-item img {\n    transition: 0.3s ease-in-out; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header, .mat-sidenav-container .matSidebarMenu .mat-list-item {\n    transition: background-color ease-out 0.5s; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header:hover img, .mat-sidenav-container .matSidebarMenu .mat-list-item:hover img {\n      -webkit-transform: scale(1.1, 1.1);\n              transform: scale(1.1, 1.1); }\n.mat-sidenav-container .matSidebarMenu .menuActive, .mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header.mat-expanded {\n    background-color: #eeeeee;\n    color: #333; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header-description, .mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header.mat-expanded .mat-expansion-indicator::after {\n    color: #333; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel-header {\n    border-bottom: 0.5px solid #fff;\n    min-height: 48px;\n    max-height: 48px;\n    font-size: 16px; }\n.mat-sidenav-container .matSidebarMenu .mat-expansion-panel.mat-expanded {\n    margin: 0 !important; }\n.mat-sidenav-container .mat-toolbar.mat-warn {\n    color: #fff; }\n.mat-sidenav-container .mat-toolbar .mat-mini-fab {\n    color: #fff; }\n.mat-sidenav-container .mat-content {\n    overflow: inherit !important; }\n.rippleCircle {\n  position: relative;\n  overflow: hidden; }\n.rippleCircle:hover::after {\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n.rippleCircle:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 5px;\n  height: 5px;\n  background-color: rgba(0, 0, 0, 0.05);\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition: all ease-out 0.3s;\n  border-radius: 50%; }\n/*--header_search--*/\n.matHeaderSearch {\n  overflow: hidden;\n  position: relative;\n  overflow-x: hidden;\n  display: flex;\n  padding-right: 14px; }\n.header_search {\n  display: flex;\n  width: 35rem;\n  background: #333;\n  border-radius: 3px;\n  align-items: center; }\n.header_search form {\n    flex: 1; }\n.header_search img {\n    margin: 0 8px; }\n.header_search input {\n    background-color: transparent;\n    border: 0 !important; }\n.header_search input:focus {\n    box-shadow: none;\n    outline: none; }\n.header_search .btnIconFilter {\n    opacity: 0.7;\n    cursor: pointer; }\n.btnIcon {\n  height: 18px; }\n/*--end header_search--*/\n.headerRightButtons {\n  display: flex;\n  align-items: center; }\n.headerRightButtons .btn_iconImg {\n    height: 24px; }\n.headerRightButtons .header_notificationPoints {\n    width: 18px;\n    height: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    position: absolute;\n    top: 6px;\n    right: 4px;\n    font-size: 10px; }\n/*-- headerRightButtons --*/\n.textUppercase {\n  text-transform: uppercase; }\n.padding15 {\n  padding: 15px 0; }\n.marginBottom15 {\n  margin: 15px 0; }\n.h5_font {\n  margin: 0;\n  font-size: 1.25rem; }\n.customCard {\n  padding: 15px 18px !important; }\n.customCardBtns {\n  padding: 8px 18px !important; }\n.customCardBtns .h5_font {\n    line-height: 36px; }\n.pull-right {\n  float: right !important; }\n.pull-left {\n  float: left; }\n[btnWarnOutline] {\n  background-color: transparent !important;\n  border: 1px solid #333 !important;\n  color: #333 !important; }\n/*--cardPanel--*/\n.cardPanel {\n  background: #ffffff;\n  border-top: 2px solid #333;\n  padding: 0 0 16px 0 !important; }\n.cardPanel .matCardHeader {\n    font-family: 'SourceSansProBold';\n    font-weight: bold;\n    border-bottom: 1px solid #efefef;\n    padding: 5px 18px; }\n.cardPanel .matCardHeader .mat-card-header-text {\n    margin: 0 !important; }\n.cardPanel .card_head {\n    color: #000;\n    text-transform: uppercase;\n    padding: 0;\n    font-weight: 400;\n    font-size: 16px; }\n.cardPanel .matCardContent {\n    padding: 13px 18px !important; }\n/*--cardPanel--*/\n.btnMarginRight {\n  margin-right: 20px !important; }\n.pointer {\n  cursor: pointer; }\n.mat-header-row, .mat-row {\n  padding-left: 0 !important; }\n.mat-table .mat-header-cell .mat-sort-header-button {\n  text-transform: uppercase; }\n.mat-table .mat-header-cell .mat-sort-header-button {\n  font-family: \"SourceSansProBold\" !important; }\n.mat-table .mat-header-cell {\n  text-transform: uppercase;\n  color: #000;\n  font-weight: bolder !important;\n  font-family: \"SourceSansProBold\" !important; }\n.mat-table .mat-header-cell.mat-column-action, .mat-table .mat-header-cell.mat-column-actions {\n  text-indent: 12px; }\n.mat-table .mat-cell {\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n.mat-table .mat-header-cell {\n  font-size: 13px;\n  padding: 5px; }\n.mat-table .mat-cell {\n  font-size: 12px;\n  padding: 5px; }\n.mat-table .mat-sort-header-button {\n  text-align: left; }\n.mat-sort-header-arrow {\n  margin: 0 0 0 6px !important; }\n.mat-checkbox-inner-container-no-side-margin {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 8px !important; }\n.matCardContent .mat-elevation-z8 {\n  box-shadow: none; }\n/*-- price --*/\n.mrpPrice {\n  font-family: \"SourceSansProBold\" !important;\n  font-size: 18px;\n  color: #333; }\n.priceColor {\n  margin-right: 10px; }\n.strike {\n  color: #868686;\n  font-size: 13px;\n  text-decoration: line-through; }\n.price_discount {\n  color: #28a745;\n  font-size: 13px;\n  font-weight: 500; }\n.mat-tooltip {\n  background: #ffffff !important;\n  border: 1px solid #333;\n  color: #333 !important; }\n.thumbnailImage img {\n  width: 40px;\n  height: 40px; }\n.dangerHollowThemeBtn {\n  background: #ffffff;\n  color: #333 !important;\n  border: 1px solid #333 !important;\n  transition: 0.3s ease-in-out !important; }\n.dangerHollowThemeBtn[disabled] {\n  transition: 0.3s ease-in-out !important;\n  cursor: not-allowed !important;\n  background: rgba(0, 0, 0, 0.12) !important;\n  color: rgba(0, 0, 0, 0.26);\n  border: 1px solid #cdcdcd; }\n.iconSize {\n  width: 16px; }\n.width17 {\n  width: 17px;\n  cursor: pointer; }\n/*--upload btn --*/\n.uploadCard {\n  padding: 0 !important; }\n.uploadCard .pointer {\n    width: 100%;\n    text-align: center; }\n.uploadCard .pointer .uploadimg {\n      width: 72%;\n      padding: 23px; }\n.uploadCard mat-card-content {\n    margin: 0; }\n.uploadCard mat-card-actions {\n    padding: 2px;\n    margin: 0;\n    background: #eee;\n    color: #333;\n    font-size: 12px; }\n.uploadCard .uploadedTextTitle div {\n    padding: 7px; }\n.uploadCardThubnail {\n  padding: 0 !important;\n  transition: 0.3s ease-in-out; }\n.uploadCardThubnail:hover {\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2) !important; }\n.uploadCardThubnail:hover .uploadedTextTitle div {\n    background: #333;\n    color: #ffffff; }\n.uploadCardThubnail button {\n    width: 100%; }\n.uploadCardThubnail .uploadedProdImage {\n    width: 87%;\n    padding: 11px;\n    height: 6em; }\n.uploadCardThubnail mat-card-content {\n    margin: 0;\n    padding: 5px;\n    text-align: center; }\n.uploadCardThubnail mat-card-actions {\n    padding: 2px;\n    margin: 0;\n    background: #eee;\n    color: #333;\n    font-size: 12px; }\n.uploadCardThubnail .minBtn {\n    position: absolute;\n    right: -12px;\n    top: -11px;\n    background: #fff;\n    border-radius: 48%;\n    width: 31px;\n    height: 31px; }\n.uploadCardThubnail .absoluteIcn {\n    display: none;\n    transition: 0.3s ease-in-out; }\n.uploadCardThubnail .uploadedTextTitle {\n    padding: 0px; }\n.uploadCardThubnail .uploadedTextTitle div {\n    padding: 7px;\n    transition: background 0.3s ease-in-out; }\n.uploadCardThubnail label {\n    margin-bottom: 0;\n    display: initial;\n    cursor: pointer;\n    margin-left: 4px; }\n.uploadCardThubnail:hover .absoluteIcn {\n  display: block; }\n.wordEllipses {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden; }\n/*-- tab --*/\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #333; }\n.mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #333; }\n.mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #333; }\n/*--card--*/\n.hzCard mat-card .card_leftImgRightContent {\n  display: flex;\n  width: 100%; }\n.hzCard mat-card .card_leftImgRightContent .card_leftImg {\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  line-height: 80px;\n  background-color: #333;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  margin-right: 24px; }\n.hzCard mat-card .card_leftImgRightContent .card_leftImg img {\n  width: 35px;\n  margin: 0 auto;\n  transition: all .3s ease-out; }\n.hzCard mat-card .card_leftImgRightContent .card_rightContent {\n  width: 100%;\n  padding-top: 10px;\n  margin-left: -124px;\n  padding-left: 124px; }\n.hzCard .mat-card-subtitle {\n  color: #333;\n  font-size: 18px; }\n.hzCard .mat-card-actions, .hzCard .mat-card-content, .hzCard .mat-card-subtitle, .hzCard .mat-card-title {\n  display: block;\n  margin-bottom: 8px; }\n.hzCard .mat-card-content {\n  color: #000; }\n.hzCard mat-card:hover .card_leftImg img {\n  -webkit-transform: scale(1.3);\n  transform: scale(1.3); }\n.hzCard .mainCardUl {\n  padding-left: 5px; }\n.hzCard .mainCardUl li {\n    float: left;\n    list-style: none;\n    margin-right: 15px; }\n.hzCard .mainCardUl li:first-child {\n    border-right: 1px solid #ddd;\n    padding-right: 13px; }\n.no-padding-left {\n  padding-left: 0 !important; }\n.no-padding-both {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n.nodataFound {\n  padding: 11px 8px;\n  color: #EF3B3A;\n  font-size: 14px;\n  text-align: center; }\n.imageLoader {\n  width: 4%; }\ninput, mat-select, mat-checkbox, mat-radio-button {\n  font-size: 13px; }\n.mat-input-element:disabled {\n  color: #000; }\n.previewResult .lableTitle {\n  color: #333;\n  font-size: 14px;\n  margin-right: 8px; }\n.previewResult .titledesc {\n  color: #000;\n  font-size: 14px; }\n.mt-10 {\n  margin-top: 5.6rem !important;\n  margin-bottom: 2px !important; }\n.onSubmitShowLoader {\n  background: #eae7e7 !important; }\n.mat-dialog-container {\n  position: relative; }\n.loaderWrapper {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 15em;\n  background: #dddddd7d;\n  left: 0px;\n  text-align: center; }\n.loaderWrapper img {\n    width: 60px; }\n.circleIndicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 8px;\n  margin-top: 5px; }\n.indicatorBlack {\n  background: #000; }\n.indicatorBlue {\n  background: #448aff; }\n.indicatorFailed {\n  background: #EF3B3A; }\n.indicatorActive {\n  background: #4caf50; }\n.indicatorInactive {\n  background: #ff8f00; }\n.pending {\n  color: #ff8f00 !important; }\n.partial {\n  color: #ff8f00 !important; }\n.ongoing {\n  color: #448aff !important; }\n.completed {\n  color: #4caf50 !important; }\n.accepted {\n  color: #4caf50 !important; }\n.failed {\n  color: #EF3B3A !important; }\n.stripMiniFab {\n  padding: 7px 5px !important;\n  padding-bottom: 0 !important; }\n.orderScreen .miniBtn {\n  outline: none;\n  background: #fff;\n  border: 0;\n  padding: 7px;\n  cursor: pointer; }\n.orderScreen .width29 {\n  width: 29px; }\n.orderScreen .filters-top-selected {\n  overflow-y: auto;\n  position: relative;\n  margin: 2px 0 0;\n  padding: 0; }\n.orderScreen .filters-top-selected .filters {\n  width: auto;\n  height: auto;\n  max-width: 100%; }\n.orderScreen .navFiltersPill {\n  border-right: none;\n  color: #333;\n  font-weight: bold;\n  font-size: 12px;\n  display: inline;\n  margin-right: 3px; }\n.orderScreen .navFiltersPill:last-child .quomaLast {\n  display: none; }\n.orderScreen .quomaLast {\n  margin-right: 2px; }\n.orderScreen .navFiltersPill i {\n  color: #333; }\n.orderScreen .filterColor {\n  color: #333; }\n.orderScreen .aa_box {\n  font-weight: lighter;\n  font-size: 12px;\n  color: #5a5a59;\n  background-color: #fff;\n  display: inline-block;\n  padding: 3px 4px 3px;\n  border: 1px solid #dadada;\n  margin: 0 1px 3px 1px;\n  border-radius: 3px; }\n.orderScreen .NoLeftPadding {\n  padding-left: 0 !important; }\n.orderScreen .NoRightPadding {\n  padding-right: 0 !important; }\n.NoLeftPadding {\n  padding-left: 0 !important; }\n.NoRightPadding {\n  padding-right: 0 !important; }\n/*==matExpandDetail_table==*/\n.mat-table .mat-row:not(.expanded) + .ng-trigger-detailExpand {\n  border-bottom: 0; }\n.mat-column-expandedDetail .mat-grid-list {\n  border-top: 2px solid #efefef; }\n.mat-column-expandedDetail .mat-grid-list .mat-grid-tile .mat-figure {\n    justify-content: flex-start;\n    padding-right: 10px; }\n.mat-column-expandedDetail .mat-grid-list .mat-grid-tile .mat-figure strong {\n      padding-right: 5px; }\n.app-assign .mat-expansion-panel-body {\n  padding: 0 24px 0 !important; }\n.app-assign .mat-checkbox-layout {\n  width: 100% !important; }\n.app-assign .mat-checkbox-layout .mat-checkbox-label {\n  width: 100% !important;\n  white-space: initial; }\n/*==end matExpandDetail_table==*/\n.code, code {\n  color: #000 !important;\n  font-weight: bolder;\n  margin: 0 1px;\n  padding: 0 0.2em !important; }\n.processBtn {\n  position: absolute !important;\n  right: 24px;\n  top: 3.5em;\n  width: 100px !important;\n  min-width: 100px !important;\n  max-width: 100px !important; }\n@media (max-width: 800px) {\n  .responsive_table {\n    overflow-x: auto !important; }\n  .mat-table {\n    min-width: 800px !important; } }\n@media (min-width: 800px) {\n  .responsive_table {\n    overflow-x: auto !important; }\n  .mat-table {\n    min-width: 800px !important; } }\n@media (max-width: 480px) {\n  .dangerThemeBtn {\n    width: 100% !important;\n    font-size: 12px;\n    margin-bottom: 10px !important; } }\n.teacherApp .mat-table .mat-header-cell .mat-sort-header-button {\n  display: contents; }\n.pagePlaceHolder {\n  display: block;\n  width: 100%;\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n.mat-sidenav-content .pagePlaceHolder {\n  padding-bottom: 15px; }\n.matSideNave {\n  background: #fff;\n  border-right: 0.5px solid #e5e5e5;\n  width: 270px; }\n.matSideNave .sidebarHeader {\n    border-bottom: 0.5px solid #e5e5e5; }\n.mat-drawer-container {\n  background-color: #efefef; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'schoolApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _mydashbord_mydashbord_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mydashbord/mydashbord.component */ "./src/app/mydashbord/mydashbord.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _select_board_select_board_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select-board/select-board.component */ "./src/app/select-board/select-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_4__["MyNavComponent"],
                _mydashbord_mydashbord_component__WEBPACK_IMPORTED_MODULE_6__["MydashbordComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__["NotfoundComponent"],
                _select_board_select_board_component__WEBPACK_IMPORTED_MODULE_15__["SelectBoardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ],
            providers: [
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/apiconstant.ts":
/*!***************************************!*\
  !*** ./src/app/config/apiconstant.ts ***!
  \***************************************/
/*! exports provided: baseUrl, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
// export const baseUrl = 'http://localhost:3000';
var baseUrl = 'http://148.66.142.50:3000';
var API = {
    login: {
        get: {},
        post: {
            url: baseUrl + '/users/login'
        }
    },
    boardSelection: {
        get: {},
        post: {
            url: baseUrl + '/users/board-selection'
        }
    },
    forgotPass: {
        get: {},
        post: {
            url: baseUrl + '/users/forget-password'
        }
    },
    changePass: {
        get: {},
        post: {
            url: baseUrl + '/users/change-password'
        }
    },
    academicYear: {
        get: {},
        post: {
            url: baseUrl + '/users/get-academicYear'
        }
    },
    teacherAdd: {
        get: {},
        post: {
            url: baseUrl + '/users/teacher-add'
        }
    },
    teacherlist: {
        get: {},
        post: {
            url: baseUrl + '/users/teacher-list'
        }
    },
    teacherEdit: {
        get: {},
        post: {
            url: baseUrl + '/users/teacher-edit'
        }
    },
    teacherDelete: {
        get: {},
        post: {
            url: baseUrl + '/users/teacher-delete'
        }
    },
    inqueryManager: {
        get: {},
        post: {
            url: baseUrl + '/users/inquery-manager-add'
        }
    },
    inqueryList: {
        get: {},
        post: {
            url: baseUrl + '/users/inquery-manager-list'
        }
    },
    inqueryedit: {
        get: {},
        post: {
            url: baseUrl + '/users/inquery-manager-edit'
        }
    },
    udiseList: {
        get: {},
        post: {
            url: baseUrl + '/users/udise-list'
        }
    },
    udiseAdd: {
        get: {},
        post: {
            url: baseUrl + '/users/udise-add'
        }
    },
    udiseDelete: {
        get: {},
        post: {
            url: baseUrl + '/users/udise-delete'
        }
    },
    gtrac: {
        get: {},
        post: {
            url: baseUrl + '/users/gtrac-school-report'
        }
    },
    addDriver: {
        get: {},
        post: {
            url: baseUrl + '/users/driver-add'
        }
    },
    editDriver: {
        get: {},
        post: {
            url: baseUrl + '/users/driver-edit'
        }
    },
    listDriver: {
        get: {},
        post: {
            url: baseUrl + '/users/driver-list'
        }
    },
    deleteDriver: {
        get: {},
        post: {
            url: baseUrl + '/users/driver-list'
        }
    },
    busPointList: {
        get: {},
        post: {
            url: baseUrl + '/users/bus-route-list'
        }
    },
    busPointAdd: {
        get: {},
        post: {
            url: baseUrl + '/users/bus-route-add'
        }
    },
    busPointEdit: {
        get: {},
        post: {
            url: baseUrl + '/users/bus-route-edit'
        }
    },
    busPointDelete: {
        get: {},
        post: {
            url: baseUrl + '/users/bus-route-delete'
        }
    },
    busMap: {
        get: {},
        post: {
            url: baseUrl + '/users/bus-route-map'
        }
    },
    addRole: {
        get: {},
        post: {
            url: baseUrl + '/users/role-add'
        }
    },
    editRole: {
        get: {},
        post: {
            url: baseUrl + '/users/role-edit'
        }
    },
    listRole: {
        get: {},
        post: {
            url: baseUrl + '/users/role-list'
        }
    },
    toggleRole: {
        get: {},
        post: {
            url: baseUrl + '/users/role-toggle'
        }
    },
};


/***/ }),

/***/ "./src/app/config/constants.ts":
/*!*************************************!*\
  !*** ./src/app/config/constants.ts ***!
  \*************************************/
/*! exports provided: dropdownlist, successMsg, errMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownlist", function() { return dropdownlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successMsg", function() { return successMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errMsg", function() { return errMsg; });
var dropdownlist = {
    actionType: [
        {
            key: 'Applied',
            value: 'Applied'
        },
        {
            key: 'Scheduled',
            value: 'Scheduled'
        },
        {
            key: 'Rejected',
            value: 'Rejected'
        },
        {
            key: 'Confirmed',
            value: 'Confirmed'
        },
    ],
    bloodGroup: [
        {
            key: 'b',
            value: 'B+'
        },
        {
            key: 'ab',
            value: 'AB'
        }
    ],
    states: [
        {
            key: 'state1',
            value: 'State1'
        }
    ],
    categories: [
        {
            key: 'open',
            value: 'Open'
        },
        {
            key: 'obc',
            value: 'OBC'
        },
        {
            key: 'sc',
            value: 'SC'
        },
        {
            key: 'nt',
            value: 'NT'
        },
        {
            key: 'vjnt',
            value: 'VJNT'
        },
        {
            key: 'sbc',
            value: 'SBC'
        },
        {
            key: 'st',
            value: 'ST'
        },
        {
            key: 'minority',
            value: 'Minority'
        }
    ],
    countries: [
        {
            key: 'ind',
            value: 'India'
        }
    ],
    parentCategories: [
        {
            key: 'open',
            value: 'Open'
        },
        {
            key: 'obc',
            value: 'OBC'
        },
        {
            key: 'sc',
            value: 'SC'
        },
        {
            key: 'nt',
            value: 'NT'
        },
        {
            key: 'vjnt',
            value: 'VJNT'
        },
        {
            key: 'sbc',
            value: 'SBC'
        },
        {
            key: 'st',
            value: 'ST'
        },
        {
            key: 'minority',
            value: 'Minority'
        }
    ],
    selectStd: [
        {
            key: 'bba',
            value: 'BBA'
        },
        {
            key: 'playGroup',
            value: 'Play Group'
        }
    ],
    division: [
        {
            key: 'a',
            value: 'A'
        },
        {
            key: 'b',
            value: 'B'
        }
    ],
    className: [
        {
            key: 'bba',
            value: 'BBA'
        },
        {
            key: '1',
            value: '1'
        }
    ],
    attendanceType: [
        {
            key: 'daywise',
            value: 'Daye Wise'
        },
        {
            key: 'lecturewise',
            value: 'Lecture Wise'
        },
        {
            key: 'lecturewisemonthly',
            value: 'Lecture Wise Monthly'
        }
    ],
    filterList: [
        {
            key: 'all',
            value: 'All'
        },
        {
            key: 'GrNum',
            value: 'Gr No.'
        },
        {
            key: 'gender',
            value: 'Gender'
        },
        {
            key: 'surname',
            value: 'SurName'
        },
        {
            key: 'fatherName',
            value: 'Father Name'
        },
        {
            key: 'motherName',
            value: 'Mother Name'
        },
        {
            key: 'fullName',
            value: 'Full Name'
        },
        {
            key: 'cast',
            value: 'Cast'
        },
        {
            key: 'category',
            value: 'Category'
        },
        {
            key: 'dob',
            value: 'D.O.B'
        },
        {
            key: 'age',
            value: 'Age'
        }
    ],
    monthType: [
        {
            key: 'jan',
            value: 'January'
        },
        {
            key: 'feb',
            value: 'February'
        },
        {
            key: 'march',
            value: 'March'
        },
        {
            key: 'april',
            value: 'April'
        },
        {
            key: 'may',
            value: 'May'
        },
        {
            key: 'june',
            value: 'June'
        },
        {
            key: 'july',
            value: 'July'
        },
        {
            key: 'aug',
            value: 'August'
        },
        {
            key: 'sep',
            value: 'September'
        },
        {
            key: 'oct',
            value: 'October'
        },
        {
            key: 'nov',
            value: 'November'
        },
        {
            key: 'dec',
            value: 'December'
        }
    ],
    annualIncome: [
        {
            key: '01lack',
            value: '0 -1Lack'
        }
    ],
    subjectName: [
        {
            key: 'qwerty',
            value: 'Qwerty'
        },
        {
            key: 'english',
            value: 'English'
        },
        {
            key: 'maths',
            value: 'Maths'
        },
        {
            key: 'hindi',
            value: 'Hindi'
        },
        {
            key: 'science',
            value: 'Science'
        },
        {
            key: 'computer',
            value: 'Computer'
        }
    ],
    regionList: [
        {
            key: 'AP',
            value: 'ANDHRA PRADESH	'
        },
        {
            key: 'haryana',
            value: 'Haryana'
        }
    ]
};
var successMsg = {
    loginSuccess: 'Logged in successfully',
    logoutSuccess: 'Logged out successfully',
    docAdded: 'Doctor Added Successfully',
    dataDeleted: 'Data deleted successfully',
    forgetPassSuccess: 'An Otp has been sent to your registered mobile number. Please Verify!',
    changePassSuccess: 'Your password has been changed successfully'
};
var errMsg = {
    tokenExp: 'Token has been expired, Please logIn Again',
    somethingWrong: 'Something went wrong',
    loginError: 'Username or Password doesn\'t match our records',
    forgotPassError: 'Username doesn\'t match our records',
    changePassError: 'Something went wrong. Please try again later',
    passMisMatch: 'Password doesn\'t match',
};


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginWrapper\">\n  <div class=\"login-page\">\n    <div class=\"form\">\n      <img src=\"assets/images/icons/logo.png\" alt=\"logo\" class=\"mb-2\" width=\"200px\">\n      <form [formGroup]=\"loginForm\"  (submit)=\"signIn(loginForm.value)\">\n        <div class=\"formFade\" *ngIf=\"index == 0\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"email\" autocomplete=\"off\" required=\"\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" autocomplete=\"off\" required=\"\">\n          </mat-form-field>\n          <button mat-raised-button class=\"btn-block dangerThemeBtn\" type=\"submit\" [disabled]=\"loginForm.status.toLowerCase()==='invalid'\">Sign In</button>\n          <a href=\"javascript:void(0);\" (click)=\"nextIndex(0)\" class=\"yellow-text-xs\">Forgot Password?</a>\n        </div>\n      </form>\n\n      <form novalidate *ngIf=\"index >= 1\" [formGroup]=\"myForm\" (submit)=\"forgotPassword(myForm.value)\">\n        <div class=\"formFade\" >\n          <h6 class=\"greyColor h6Font no-padding-both\">\n            Password reset link will be shared on your registered email id only\n          </h6>\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"email\" matInput placeholder=\"Username\" formControlName=\"username\" autocomplete=\"off\" required=\"\"/>\n            <mat-error *ngIf=\"myForm.controls['username'].hasError('required')\">\n              Username is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 dashboardBox\">\n              <button type=\"submit\" class=\"btn-block mt-1 dangerThemeBtn\" mat-raised-button colors=\"primary\" [disabled]=\"myForm.status.toLowerCase()==='invalid'\">Submit</button>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 dashboardBox\">\n              <button type=\"button\" class=\"btn-block mt-1 dangerHollowThemeBtn\" mat-raised-button colors=\"primary\" (click)=\"prevIndex(0)\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==color theme variables==*/\n/*--font family --*/\n/*--styling based on variables--*/\n[warn] {\n  background-color: #333 !important;\n  color: #fff; }\n[noBg] {\n  background-color: transparent; }\n[barBg] {\n  background-color: #efefef; }\n[barShadow] {\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5); }\n[btnShadow] {\n  box-shadow: 0 1px 5px #ccc; }\n[smallestFont] {\n  font-size: 10px; }\n[outLinePrimary] {\n  border: 1px solid #000 !important; }\n[outLineDefault] {\n  border: 1px solid #e5e5e5 !important; }\n[danger] {\n  background-color: #333; }\n[dangerText] {\n  color: #333 !important; }\n.mat-toolbar.mat-accent, .mat-toolbar.mat-primary {\n  background: #333;\n  color: #fff; }\n.login-page {\n  padding: 13% 0 0;\n  margin: auto; }\n.form {\n  min-height: 364px;\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  width: 464px;\n  max-width: 90%;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto; }\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n.container .info {\n  margin: 50px auto;\n  text-align: center; }\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a; }\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px; }\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n.container .info span .fa {\n  color: #EF3B3A; }\n.loginWrapper {\n  background: #e5e5e5;\n  /* fallback for old browsers */\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  height: 100vh;\n  overflow-y: hidden; }\n.yellowColorTheme {\n  color: #333 !important; }\n.formFade {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.yellow-text-xs {\n  color: #333;\n  font-size: 14px;\n  clear: both;\n  float: right;\n  margin-top: 10px;\n  transition: 0.2s ease-in-out; }\n.yellow-text-xs:hover {\n  text-decoration: none;\n  color: #333; }\n.h6Font {\n  font-size: 12px; }\n.greyColor {\n  color: #868686; }\n.dashboardBox:first-child {\n  padding-left: 0; }\n.dashboardBox:last-child {\n  padding-right: 0; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/constants */ "./src/app/config/constants.ts");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/client.service */ "./src/service/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, router, client, messageService) {
        this._fb = _fb;
        this.router = router;
        this.client = client;
        this.messageService = messageService;
        this.index = 0;
        this.createLogin();
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.myForm = this._fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.createLogin = function () {
        this.loginForm = this._fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.signIn = function (value) {
        var _this = this;
        this.client.login(value).subscribe(function (response) {
            // console.log('Chal Raha h' + JSON.stringify(response))
            var result = response.result;
            if (result.status === 1000 && result.body.enable === true) {
                // console.log('Chal Raha h' + response.status)
                // if (response.body.type === 2) {
                _this.router.navigate(['dashboard']);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('user_id', result.body.id);
                localStorage.setItem('email', result.body.email);
                localStorage.setItem('firstname', result.body.firstname);
                localStorage.setItem('lastname', result.body.lastname);
                localStorage.setItem('password', result.body.password);
                localStorage.setItem('type', result.body.type);
                localStorage.setItem('school_id', result.body.school_id);
                _this.messageService.showSuccess(_config_constants__WEBPACK_IMPORTED_MODULE_4__["successMsg"].loginSuccess);
                // } else {
                //   this.router.navigate(['dashboard']);
                //   localStorage.setItem('isLoggedin', 'true');
                //   localStorage.setItem('user_id', response.body.id);
                //   localStorage.setItem('email', response.body.email);
                //   localStorage.setItem('fullname', response.body.fullname);
                //   localStorage.setItem('password', response.body.password);
                //   localStorage.setItem('type', response.body.type);
                // }
            }
            else {
                _this.messageService.showSuccess(_config_constants__WEBPACK_IMPORTED_MODULE_4__["errMsg"].loginError);
            }
        });
    };
    LoginComponent.prototype.forgotPassword = function (value) {
        var _this = this;
        this.client.forgotPass(value).subscribe(function (response) {
            var result = response;
            if (result.status === 1000) {
                console.log(result);
                alert(result.body.otp);
                // this.messageService.showSuccess(successMsg.forgetPassSuccess);
            }
            else {
                _this.messageService.showSuccess(_config_constants__WEBPACK_IMPORTED_MODULE_4__["errMsg"].forgotPassError);
            }
        });
    };
    LoginComponent.prototype.showSuccess = function (text) {
        Snackbar.show({ pos: 'bottom-right', text: text, showAction: false, backgroundColor: '#28a745' });
    };
    LoginComponent.prototype.showError = function (err) {
        Snackbar.show({ pos: 'bottom-right', text: err, showAction: false, backgroundColor: '#f44336' });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.nextIndex = function (ind) {
        this.index = this.index + 1;
    };
    LoginComponent.prototype.prevIndex = function (ind) {
        this.index = this.index - 1;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Link 1</a>\n      <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>schoolApp</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/mydashbord/mydashbord.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mydashbord/mydashbord.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/mydashbord/mydashbord.component.html":
/*!******************************************************!*\
  !*** ./src/app/mydashbord/mydashbord.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/mydashbord/mydashbord.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mydashbord/mydashbord.component.ts ***!
  \****************************************************/
/*! exports provided: MydashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydashbordComponent", function() { return MydashbordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MydashbordComponent = /** @class */ (function () {
    function MydashbordComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    MydashbordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mydashbord',
            template: __webpack_require__(/*! ./mydashbord.component.html */ "./src/app/mydashbord/mydashbord.component.html"),
            styles: [__webpack_require__(/*! ./mydashbord.component.css */ "./src/app/mydashbord/mydashbord.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MydashbordComponent);
    return MydashbordComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/select-board/select-board.component.html":
/*!**********************************************************!*\
  !*** ./src/app/select-board/select-board.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding15\">\n\n  <div class=\"loginWrapper\">\n    <div class=\"login-page\">\n      <div class=\"form\">\n        <form [formGroup]=\"myForm\"  (submit)=\"openViewInquery(myForm.value)\">\n        <h5>Please Select The Board</h5>\n        <mat-radio-group class=\"example-radio-group\"  formControlName=\"board\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let board of boards\" [value]=\"board\" >\n            {{board}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <h5>Select The Required Academic Year</h5>\n        <mat-radio-group class=\"example-radio-group\" formControlName=\"academicSession\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let academicyear of academicyears\"  [value]=\"academicyear\" >\n            {{academicyear}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <button mat-raised-button class=\"dangerThemeBtn\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/select-board/select-board.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/select-board/select-board.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==color theme variables==*/\n/*--font family --*/\n/*--styling based on variables--*/\n[warn] {\n  background-color: #333 !important;\n  color: #fff; }\n[noBg] {\n  background-color: transparent; }\n[barBg] {\n  background-color: #efefef; }\n[barShadow] {\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5); }\n[btnShadow] {\n  box-shadow: 0 1px 5px #ccc; }\n[smallestFont] {\n  font-size: 10px; }\n[outLinePrimary] {\n  border: 1px solid #000 !important; }\n[outLineDefault] {\n  border: 1px solid #e5e5e5 !important; }\n[danger] {\n  background-color: #333; }\n[dangerText] {\n  color: #333 !important; }\n.mat-toolbar.mat-accent, .mat-toolbar.mat-primary {\n  background: #333;\n  color: #fff; }\n.login-page {\n  padding: 10% 0 0;\n  margin: auto; }\n.form {\n  min-height: 364px;\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  width: 464px;\n  overflow-y: auto;\n  max-width: 90%;\n  margin: 0 auto 100px;\n  padding: 45px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n.example-radio-group {\n  display: inherit;\n  margin-top: 1em; }\n.example-radio-button {\n  margin: 5px; }\n.example-selected-value {\n  margin: 15px 0; }\n"

/***/ }),

/***/ "./src/app/select-board/select-board.component.ts":
/*!********************************************************!*\
  !*** ./src/app/select-board/select-board.component.ts ***!
  \********************************************************/
/*! exports provided: SelectBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBoardComponent", function() { return SelectBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/client.service */ "./src/service/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectBoardComponent = /** @class */ (function () {
    function SelectBoardComponent(router, _fb, client) {
        this.router = router;
        this._fb = _fb;
        this.client = client;
        this.boards = ['CBSE', 'IGCSE'];
        this.academicyears = ['2018-2019 next (NEXT)', '2017-2018 current (CURRENT)'];
        this.createBoardForm();
    }
    SelectBoardComponent.prototype.ngOnInit = function () {
    };
    SelectBoardComponent.prototype.createBoardForm = function () {
        this.myForm = this._fb.group({
            board: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            academicSession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SelectBoardComponent.prototype.openViewInquery = function (value) {
        console.log(localStorage.getItem('user_id'));
        var request = {
            user_id: localStorage.getItem('user_id'),
            board: value.board
        };
        this.client.boardSelection(request).subscribe(function (response) {
            console.log(response);
            // if ( response.status === 200) {
            //   if (response.body.type === 2) {
            //     this.router.navigate(['board']);
            //     localStorage.setItem('isLoggedin', 'true');
            //     localStorage.setItem('userData', response.body);
            //   } else {
            //     this.router.navigate(['dashboard']);
            //     localStorage.setItem('isLoggedin', 'true');
            //     localStorage.setItem('userData', response.body);
            //   }
            // } else {
            //
            // }
            // console.log(JSON.stringify(response));
        });
    };
    SelectBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-board',
            template: __webpack_require__(/*! ./select-board.component.html */ "./src/app/select-board/select-board.component.html"),
            styles: [__webpack_require__(/*! ./select-board.component.scss */ "./src/app/select-board/select-board.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], SelectBoardComponent);
    return SelectBoardComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants */ "./src/app/config/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Injectable } from '@angular/core';
// declare let Snackbar: any;
// @Injectable()
// export class MessageService {
//   constructor() { }
//
//   showSuccessfullyMsg(){
//     Snackbar.show({pos: 'bottom-right', text: 'Data deleted successfully', showAction: false, backgroundColor: '#28a745'});
//   }
//
//   showErrorMsg(){
//     Snackbar.show({pos: 'bottom-right', text: 'Something went wrong', showAction: false, backgroundColor: '#555'});
//   }
//
// }


var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    MessageService.prototype.showSuccess = function (msg) {
        Snackbar.show({
            pos: 'bottom-right',
            text: msg,
            showAction: false,
            backgroundColor: '#28a745'
        });
    };
    MessageService.prototype.showError = function (erMsg) {
        Snackbar.show({
            pos: 'bottom-right',
            text: erMsg ? erMsg : _config_constants__WEBPACK_IMPORTED_MODULE_1__["errMsg"].somethingWrong,
            showAction: false,
            backgroundColor: '#555'
        });
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/table/table-datasource.ts":
/*!*******************************************!*\
  !*** ./src/app/table/table-datasource.ts ***!
  \*******************************************/
/*! exports provided: TableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSource", function() { return TableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var TableDataSource = /** @class */ (function (_super) {
    __extends(TableDataSource, _super);
    function TableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    TableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    TableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return TableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-datasource */ "./src/app/table/table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = /** @class */ (function () {
    function TableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _table_datasource__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableComponent.prototype, "sort", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        })
    ], TableComponent);
    return TableComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/service/client.service.ts":
/*!***************************************!*\
  !*** ./src/service/client.service.ts ***!
  \***************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/service/http.service.ts");
/* harmony import */ var _app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/config/apiconstant */ "./src/app/config/apiconstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.login = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].login.post.url, data);
    };
    ClientService.prototype.boardSelection = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].boardSelection.post.url, data);
    };
    ClientService.prototype.forgotPass = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].forgotPass.post.url, data);
    };
    ClientService.prototype.changePass = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].changePass.post.url, data);
    };
    ClientService.prototype.getAcademicYear = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].academicYear.post.url, data);
    };
    ClientService.prototype.addTeacher = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].teacherAdd.post.url, data);
    };
    ClientService.prototype.listTeacher = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].teacherlist.post.url, data);
    };
    ClientService.prototype.editTeacher = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].teacherEdit.post.url, data);
    };
    ClientService.prototype.deleteTeacher = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].teacherDelete.post.url, data);
    };
    ClientService.prototype.inqueryManagerAdd = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].inqueryManager.post.url, data);
    };
    ClientService.prototype.inqueryList = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].inqueryList.post.url, data);
    };
    ClientService.prototype.inqueryEdit = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].inqueryedit.post.url, data);
    };
    ClientService.prototype.udiseList = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].udiseList.post.url, data);
    };
    ClientService.prototype.udiseadd = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].udiseAdd.post.url, data);
    };
    ClientService.prototype.udiseDelete = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].udiseDelete.post.url, data);
    };
    ClientService.prototype.gtrac = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].gtrac.post.url, data);
    };
    ClientService.prototype.addDriver = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].addDriver.post.url, data);
    };
    ClientService.prototype.editDriver = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].editDriver.post.url, data);
    };
    ClientService.prototype.listDriver = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].listDriver.post.url, data);
    };
    ClientService.prototype.deleteDriver = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].deleteDriver.post.url, data);
    };
    ClientService.prototype.addBusRoute = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].busPointAdd.post.url, data);
    };
    ClientService.prototype.editBusRoute = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].busPointEdit.post.url, data);
    };
    ClientService.prototype.listBusRoute = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].busPointList.post.url, data);
    };
    ClientService.prototype.deleteBusRoute = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].busPointDelete.post.url, data);
    };
    ClientService.prototype.busMap = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].busMap.post.url, data);
    };
    ClientService.prototype.listMapping = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].busMap.post.url, data);
    };
    ClientService.prototype.addRole = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].addRole.post.url, data);
    };
    ClientService.prototype.roleToggle = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].toggleRole.post.url, data);
    };
    ClientService.prototype.updateRole = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].editRole.post.url, data);
    };
    ClientService.prototype.listRole = function (data) {
        return this.http.post(_app_config_apiconstant__WEBPACK_IMPORTED_MODULE_2__["API"].listRole.post.url, data);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/service/http.service.ts":
/*!*************************************!*\
  !*** ./src/service/http.service.ts ***!
  \*************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    HttpService.prototype.post = function (url, request) {
        return this.http.post(url, request, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(60000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('postRequest')));
    };
    HttpService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    HttpService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\WEB DEVELOPMENT\WEBSITES\schoolapp\schoolapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map