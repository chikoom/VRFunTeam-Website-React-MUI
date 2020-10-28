webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/*! exports provided: useUpdateTheme, ThemeContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateTheme", function() { return useUpdateTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContextProvider", function() { return ThemeContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/theme */ "./src/ui/theme.js");
var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\contexts\\ThemeContext.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ThemeUpdateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function useUpdateTheme() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeUpdateContext);
}

_s(useUpdateTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function ThemeContextProvider(_ref) {
  _s2();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDarkTheme = _useState[0],
      setIsDarkTheme = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"]),
      currentTheme = _useState2[0],
      setCurrentTheme = _useState2[1];

  var themes = {
    dark: {
      en: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
      he: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme_he"]
    },
    light: {
      en: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"],
      he: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme_he"]
    }
  };

  var toggleTheme = function toggleTheme(language) {
    setIsDarkTheme(!isDarkTheme);
  };

  var changeLanguage = function changeLanguage(language) {
    setCurrentTheme(isDarkTheme ? themes['dark'][language] : themes['light'][language]);
  };

  var setTheme = function setTheme(isDark, language) {
    var dark = isDark ? 'dark' : 'light';
    setCurrentTheme(themes[language][dark]);
  };

  return __jsx(ThemeUpdateContext.Provider, {
    value: {
      toggleTheme: toggleTheme,
      isDarkTheme: isDarkTheme,
      setTheme: setTheme
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: isDarkTheme ? themes['dark'][language] : themes['light'][language],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, children));
}

_s2(ThemeContextProvider, "0b7KKgn7yvNSVpjFUhg8OrDhzu4=");

_c = ThemeContextProvider;

var _c;

$RefreshReg$(_c, "ThemeContextProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJUaGVtZVVwZGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVcGRhdGVUaGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0RhcmtUaGVtZSIsInNldElzRGFya1RoZW1lIiwibGlnaHRUaGVtZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsInRoZW1lcyIsImRhcmsiLCJlbiIsImRhcmtUaGVtZSIsImhlIiwiZGFya1RoZW1lX2hlIiwibGlnaHQiLCJsaWdodFRoZW1lX2hlIiwidG9nZ2xlVGhlbWUiLCJsYW5ndWFnZSIsImNoYW5nZUxhbmd1YWdlIiwic2V0VGhlbWUiLCJpc0RhcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBM0I7QUFFTyxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQy9CLFNBQU9DLHdEQUFVLENBQUNKLGtCQUFELENBQWpCO0FBQ0Q7O0dBRmVHLGM7O0FBSVQsU0FBU0Usb0JBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsS0FBRCxDQURHO0FBQUEsTUFDMUNDLFdBRDBDO0FBQUEsTUFDN0JDLGNBRDZCOztBQUFBLG1CQUVURixzREFBUSxDQUFDRyxvREFBRCxDQUZDO0FBQUEsTUFFMUNDLFlBRjBDO0FBQUEsTUFFNUJDLGVBRjRCOztBQUdqRCxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBSSxFQUFFO0FBQ0pDLFFBQUUsRUFBRUMsbURBREE7QUFFSkMsUUFBRSxFQUFFQyxzREFBWUE7QUFGWixLQURPO0FBS2JDLFNBQUssRUFBRTtBQUNMSixRQUFFLEVBQUVMLG9EQURDO0FBRUxPLFFBQUUsRUFBRUcsdURBQWFBO0FBRlo7QUFMTSxHQUFmOztBQVVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFFBQVEsRUFBSTtBQUM5QmIsa0JBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQWQ7QUFDRCxHQUZEOztBQUdBLE1BQU1lLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUQsUUFBUSxFQUFJO0FBQ2pDVixtQkFBZSxDQUNiSixXQUFXLEdBQUdLLE1BQU0sQ0FBQyxNQUFELENBQU4sQ0FBZVMsUUFBZixDQUFILEdBQThCVCxNQUFNLENBQUMsT0FBRCxDQUFOLENBQWdCUyxRQUFoQixDQUQ1QixDQUFmO0FBR0QsR0FKRDs7QUFLQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVNILFFBQVQsRUFBc0I7QUFDckMsUUFBTVIsSUFBSSxHQUFHVyxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BQS9CO0FBQ0FiLG1CQUFlLENBQUNDLE1BQU0sQ0FBQ1MsUUFBRCxDQUFOLENBQWlCUixJQUFqQixDQUFELENBQWY7QUFDRCxHQUhEOztBQUtBLFNBQ0UsTUFBQyxrQkFBRCxDQUFvQixRQUFwQjtBQUE2QixTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBWEEsV0FBRjtBQUFlYixpQkFBVyxFQUFYQSxXQUFmO0FBQTRCZ0IsY0FBUSxFQUFSQTtBQUE1QixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUNFLFNBQUssRUFDSGhCLFdBQVcsR0FBR0ssTUFBTSxDQUFDLE1BQUQsQ0FBTixDQUFlUyxRQUFmLENBQUgsR0FBOEJULE1BQU0sQ0FBQyxPQUFELENBQU4sQ0FBZ0JTLFFBQWhCLENBRjdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR2hCLFFBTEgsQ0FERixDQURGO0FBV0Q7O0lBckNlRCxvQjs7S0FBQUEsb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MzBjMDVmNmQ4YTk0OGY2YTYyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSwgbGlnaHRUaGVtZV9oZSwgZGFya1RoZW1lX2hlIH0gZnJvbSAnLi4vdWkvdGhlbWUnXHJcblxyXG5jb25zdCBUaGVtZVVwZGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVUaGVtZSgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChUaGVtZVVwZGF0ZUNvbnRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVtZUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbaXNEYXJrVGhlbWUsIHNldElzRGFya1RoZW1lXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJyZW50VGhlbWUsIHNldEN1cnJlbnRUaGVtZV0gPSB1c2VTdGF0ZShsaWdodFRoZW1lKVxyXG4gIGNvbnN0IHRoZW1lcyA9IHtcclxuICAgIGRhcms6IHtcclxuICAgICAgZW46IGRhcmtUaGVtZSxcclxuICAgICAgaGU6IGRhcmtUaGVtZV9oZSxcclxuICAgIH0sXHJcbiAgICBsaWdodDoge1xyXG4gICAgICBlbjogbGlnaHRUaGVtZSxcclxuICAgICAgaGU6IGxpZ2h0VGhlbWVfaGUsXHJcbiAgICB9LFxyXG4gIH1cclxuICBjb25zdCB0b2dnbGVUaGVtZSA9IGxhbmd1YWdlID0+IHtcclxuICAgIHNldElzRGFya1RoZW1lKCFpc0RhcmtUaGVtZSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSBsYW5ndWFnZSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGhlbWUoXHJcbiAgICAgIGlzRGFya1RoZW1lID8gdGhlbWVzWydkYXJrJ11bbGFuZ3VhZ2VdIDogdGhlbWVzWydsaWdodCddW2xhbmd1YWdlXVxyXG4gICAgKVxyXG4gIH1cclxuICBjb25zdCBzZXRUaGVtZSA9IChpc0RhcmssIGxhbmd1YWdlKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrID0gaXNEYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J1xyXG4gICAgc2V0Q3VycmVudFRoZW1lKHRoZW1lc1tsYW5ndWFnZV1bZGFya10pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lVXBkYXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0b2dnbGVUaGVtZSwgaXNEYXJrVGhlbWUsIHNldFRoZW1lIH19PlxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtcclxuICAgICAgICAgIGlzRGFya1RoZW1lID8gdGhlbWVzWydkYXJrJ11bbGFuZ3VhZ2VdIDogdGhlbWVzWydsaWdodCddW2xhbmd1YWdlXVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVVwZGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=