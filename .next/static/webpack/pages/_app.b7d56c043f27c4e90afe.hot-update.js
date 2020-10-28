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

  var toggleTheme = function toggleTheme() {
    setCurrentTheme(isDarkTheme ? themes['dark'][language] : themes['light'][language]);
    setIsDarkTheme(!isDarkTheme);
  };

  var changeThemeLanguage = function changeThemeLanguage(language) {
    setCurrentTheme(isDarkTheme ? themes['dark'][language] : themes['light'][language]);
  };

  return __jsx(ThemeUpdateContext.Provider, {
    value: {
      toggleTheme: toggleTheme,
      isDarkTheme: isDarkTheme,
      changeThemeLanguage: changeThemeLanguage
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: currentTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJUaGVtZVVwZGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVcGRhdGVUaGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0RhcmtUaGVtZSIsInNldElzRGFya1RoZW1lIiwibGlnaHRUaGVtZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsInRoZW1lcyIsImRhcmsiLCJlbiIsImRhcmtUaGVtZSIsImhlIiwiZGFya1RoZW1lX2hlIiwibGlnaHQiLCJsaWdodFRoZW1lX2hlIiwidG9nZ2xlVGhlbWUiLCJsYW5ndWFnZSIsImNoYW5nZVRoZW1lTGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBM0I7QUFFTyxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQy9CLFNBQU9DLHdEQUFVLENBQUNKLGtCQUFELENBQWpCO0FBQ0Q7O0dBRmVHLGM7O0FBSVQsU0FBU0Usb0JBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsS0FBRCxDQURHO0FBQUEsTUFDMUNDLFdBRDBDO0FBQUEsTUFDN0JDLGNBRDZCOztBQUFBLG1CQUVURixzREFBUSxDQUFDRyxvREFBRCxDQUZDO0FBQUEsTUFFMUNDLFlBRjBDO0FBQUEsTUFFNUJDLGVBRjRCOztBQUdqRCxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBSSxFQUFFO0FBQ0pDLFFBQUUsRUFBRUMsbURBREE7QUFFSkMsUUFBRSxFQUFFQyxzREFBWUE7QUFGWixLQURPO0FBS2JDLFNBQUssRUFBRTtBQUNMSixRQUFFLEVBQUVMLG9EQURDO0FBRUxPLFFBQUUsRUFBRUcsdURBQWFBO0FBRlo7QUFMTSxHQUFmOztBQVVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJULG1CQUFlLENBQ2JKLFdBQVcsR0FBR0ssTUFBTSxDQUFDLE1BQUQsQ0FBTixDQUFlUyxRQUFmLENBQUgsR0FBOEJULE1BQU0sQ0FBQyxPQUFELENBQU4sQ0FBZ0JTLFFBQWhCLENBRDVCLENBQWY7QUFHQWIsa0JBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQWQ7QUFDRCxHQUxEOztBQU1BLE1BQU1lLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUQsUUFBUSxFQUFJO0FBQ3RDVixtQkFBZSxDQUNiSixXQUFXLEdBQUdLLE1BQU0sQ0FBQyxNQUFELENBQU4sQ0FBZVMsUUFBZixDQUFILEdBQThCVCxNQUFNLENBQUMsT0FBRCxDQUFOLENBQWdCUyxRQUFoQixDQUQ1QixDQUFmO0FBR0QsR0FKRDs7QUFNQSxTQUNFLE1BQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFDRSxTQUFLLEVBQUU7QUFBRUQsaUJBQVcsRUFBWEEsV0FBRjtBQUFlYixpQkFBVyxFQUFYQSxXQUFmO0FBQTRCZSx5QkFBbUIsRUFBbkJBO0FBQTVCLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVaLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNMLFFBQXJDLENBSEYsQ0FERjtBQU9EOztJQWhDZUQsb0I7O0tBQUFBLG9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjdkNTZjMDQzZjI3YzRlOTBhZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUsIGxpZ2h0VGhlbWVfaGUsIGRhcmtUaGVtZV9oZSB9IGZyb20gJy4uL3VpL3RoZW1lJ1xyXG5cclxuY29uc3QgVGhlbWVVcGRhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlVGhlbWUoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVVcGRhdGVDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzRGFya1RoZW1lLCBzZXRJc0RhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY3VycmVudFRoZW1lLCBzZXRDdXJyZW50VGhlbWVdID0gdXNlU3RhdGUobGlnaHRUaGVtZSlcclxuICBjb25zdCB0aGVtZXMgPSB7XHJcbiAgICBkYXJrOiB7XHJcbiAgICAgIGVuOiBkYXJrVGhlbWUsXHJcbiAgICAgIGhlOiBkYXJrVGhlbWVfaGUsXHJcbiAgICB9LFxyXG4gICAgbGlnaHQ6IHtcclxuICAgICAgZW46IGxpZ2h0VGhlbWUsXHJcbiAgICAgIGhlOiBsaWdodFRoZW1lX2hlLFxyXG4gICAgfSxcclxuICB9XHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGhlbWUoXHJcbiAgICAgIGlzRGFya1RoZW1lID8gdGhlbWVzWydkYXJrJ11bbGFuZ3VhZ2VdIDogdGhlbWVzWydsaWdodCddW2xhbmd1YWdlXVxyXG4gICAgKVxyXG4gICAgc2V0SXNEYXJrVGhlbWUoIWlzRGFya1RoZW1lKVxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VUaGVtZUxhbmd1YWdlID0gbGFuZ3VhZ2UgPT4ge1xyXG4gICAgc2V0Q3VycmVudFRoZW1lKFxyXG4gICAgICBpc0RhcmtUaGVtZSA/IHRoZW1lc1snZGFyayddW2xhbmd1YWdlXSA6IHRoZW1lc1snbGlnaHQnXVtsYW5ndWFnZV1cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVVcGRhdGVDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IHRvZ2dsZVRoZW1lLCBpc0RhcmtUaGVtZSwgY2hhbmdlVGhlbWVMYW5ndWFnZSB9fVxyXG4gICAgPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17Y3VycmVudFRoZW1lfT57Y2hpbGRyZW59PC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVVwZGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=