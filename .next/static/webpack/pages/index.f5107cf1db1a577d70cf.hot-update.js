webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/LangContext.js":
/*!*************************************!*\
  !*** ./src/contexts/LangContext.js ***!
  \*************************************/
/*! exports provided: useLanguageContext, LangProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguageContext", function() { return useLanguageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangProvider", function() { return LangProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site_data */ "./src/contexts/site_data.js");
var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\contexts\\LangContext.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var languages = ['en', 'he'];
var LangContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function useLanguageContext() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LangContext);
}

_s(useLanguageContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function LangProvider(_ref) {
  _s2();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('en'),
      language = _useState[0],
      setLanguage = _useState[1];

  var changeLanguageTo = function changeLanguageTo(langString) {
    console.log('Changing language to ', langString);
    setLanguage(langString);
  };

  var contextValue = {
    siteData: _site_data__WEBPACK_IMPORTED_MODULE_1__["siteData"][language],
    language: language,
    languages: languages,
    changeLanguageTo: changeLanguageTo
  };
  return __jsx(LangContext.Provider, {
    value: contextValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, children);
}

_s2(LangProvider, "fVUtOCD1O58HgvMjnE8lxRQa0QA=");

_c = LangProvider;

var _c;

$RefreshReg$(_c, "LangProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/contexts/site_data.js":
/*!***********************************!*\
  !*** ./src/contexts/site_data.js ***!
  \***********************************/
/*! exports provided: siteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteData", function() { return siteData; });
var siteData = {
  en: {
    heroHeader: "Team Experience\n      in Virtual Reality"
  },
  he: {
    heroHeader: "\u05D7\u05D5\u05D5\u05D9\u05D4 \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05DD \u05D0\u05D7\u05E8"
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvc2l0ZV9kYXRhLmpzIl0sIm5hbWVzIjpbImxhbmd1YWdlcyIsIkxhbmdDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGFuZ3VhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIkxhbmdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiY2hhbmdlTGFuZ3VhZ2VUbyIsImxhbmdTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiY29udGV4dFZhbHVlIiwic2l0ZURhdGEiLCJlbiIsImhlcm9IZWFkZXIiLCJoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQWxCO0FBRUEsSUFBTUMsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFwQjtBQUNPLFNBQVNDLGtCQUFULEdBQThCO0FBQUE7O0FBQ25DLFNBQU9DLHdEQUFVLENBQUNKLFdBQUQsQ0FBakI7QUFDRDs7R0FGZUcsa0I7O0FBSVQsU0FBU0UsWUFBVCxPQUFvQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxJQUFELENBREM7QUFBQSxNQUNsQ0MsUUFEa0M7QUFBQSxNQUN4QkMsV0FEd0I7O0FBRXpDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsVUFBVSxFQUFJO0FBQ3JDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0YsVUFBckM7QUFDQUYsZUFBVyxDQUFDRSxVQUFELENBQVg7QUFDRCxHQUhEOztBQUlBLE1BQU1HLFlBQVksR0FBRztBQUNuQkMsWUFBUSxFQUFFQSxtREFBUSxDQUFDUCxRQUFELENBREM7QUFFbkJBLFlBQVEsRUFBUkEsUUFGbUI7QUFHbkJULGFBQVMsRUFBVEEsU0FIbUI7QUFJbkJXLG9CQUFnQixFQUFoQkE7QUFKbUIsR0FBckI7QUFNQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFSSxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDUixRQUE1QyxDQURGO0FBR0Q7O0lBZmVELFk7O0tBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaEI7QUFBQTtBQUFPLElBQU1VLFFBQVEsR0FBRztBQUN0QkMsSUFBRSxFQUFFO0FBQ0ZDLGNBQVU7QUFEUixHQURrQjtBQUt0QkMsSUFBRSxFQUFFO0FBQ0ZELGNBQVU7QUFEUjtBQUxrQixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNTEwN2NmMWRiMWE1NzdkNzBjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpdGVEYXRhIH0gZnJvbSAnLi9zaXRlX2RhdGEnXHJcbmNvbnN0IGxhbmd1YWdlcyA9IFsnZW4nLCAnaGUnXVxyXG5cclxuY29uc3QgTGFuZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChMYW5nQ29udGV4dClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmdQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCdlbicpXHJcbiAgY29uc3QgY2hhbmdlTGFuZ3VhZ2VUbyA9IGxhbmdTdHJpbmcgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0NoYW5naW5nIGxhbmd1YWdlIHRvICcsIGxhbmdTdHJpbmcpXHJcbiAgICBzZXRMYW5ndWFnZShsYW5nU3RyaW5nKVxyXG4gIH1cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICBzaXRlRGF0YTogc2l0ZURhdGFbbGFuZ3VhZ2VdLFxyXG4gICAgbGFuZ3VhZ2UsXHJcbiAgICBsYW5ndWFnZXMsXHJcbiAgICBjaGFuZ2VMYW5ndWFnZVRvLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExhbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PntjaGlsZHJlbn08L0xhbmdDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc2l0ZURhdGEgPSB7XHJcbiAgZW46IHtcclxuICAgIGhlcm9IZWFkZXI6IGBUZWFtIEV4cGVyaWVuY2VcclxuICAgICAgaW4gVmlydHVhbCBSZWFsaXR5YCxcclxuICB9LFxyXG4gIGhlOiB7XHJcbiAgICBoZXJvSGVhZGVyOiBg15fXldeV15nXlCDXp9eR15XXpteq15nXqiDXntei15XXnNedINeQ15fXqGAsXHJcbiAgfSxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9