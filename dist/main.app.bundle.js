(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/index */ "./src/router/index.tsx");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);




/* eslint-disable*/

const App = _router_index__WEBPACK_IMPORTED_MODULE_2__["default"];
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, null)), document.getElementById('app'));

/***/ }),

/***/ "./src/router/history.tsx":
/*!********************************!*\
  !*** ./src/router/history.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

const history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./src/router/index.tsx":
/*!******************************!*\
  !*** ./src/router/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history */ "./src/router/history.tsx");
/* harmony import */ var _view_home_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/home/index */ "./src/view/home/index.tsx");
/* harmony import */ var _view_login_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/login/index */ "./src/view/login/index.tsx");


const {
  Route,
  BrowserRouter: Router
} = react_router_dom__WEBPACK_IMPORTED_MODULE_1__;



console.log(_history__WEBPACK_IMPORTED_MODULE_2__["default"]);

const RouterPage = () => {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Router, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Route, {
    path: "/home",
    exact: true,
    component: _view_home_index__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Route, {
    path: "/login",
    exact: true,
    component: _view_login_index__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RouterPage);

/***/ }),

/***/ "./src/view/home/index.tsx":
/*!*********************************!*\
  !*** ./src/view/home/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router/history */ "./src/router/history.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/view/home/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);




const {
  useState
} = react__WEBPACK_IMPORTED_MODULE_2__;


const hendleGoBack = () => {
  console.log(_router_history__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _router_history__WEBPACK_IMPORTED_MODULE_3__["default"].goBack();
};

const Home = () => {
  const [home, setHome] = useState(0);
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "tms-home-container"
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h1", null, " \u9996\u9875\uFF1A", home), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", {
    onClick: () => setHome(home + 1)
  }, " reduce"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: hendleGoBack
  }, " \u540E\u9000"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/view/login/index.tsx":
/*!**********************************!*\
  !*** ./src/view/login/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Login() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, " hello loging");
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

},[["./src/index.tsx","manifest","styles","vendor"]]]);
//# sourceMappingURL=main.app.bundle.js.map