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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
    light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"]
  }),
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
    },
    he: {
      dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme_he"],
      light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme_he"]
    },
    en: {
      dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
      light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"]
    }
  };

  var toggleTheme = function toggleTheme() {
    setCurrentTheme(isDarkTheme ? themes['dark'][language] : themes['light'][language]);
    setIsDarkTheme(!isDarkTheme);
  };

  var changeThemeLanguage = function changeThemeLanguage(language) {
    setCurrentTheme(themes[language]);
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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: isDarkTheme ? currentTheme.dark : currentTheme.light,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, children));
}

_s2(ThemeContextProvider, "WiIX9fMp6PxZ847woej280O2qV0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJUaGVtZVVwZGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVcGRhdGVUaGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0RhcmtUaGVtZSIsInNldElzRGFya1RoZW1lIiwiZGFyayIsImRhcmtUaGVtZSIsImxpZ2h0IiwibGlnaHRUaGVtZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsInRoZW1lcyIsImVuIiwiaGUiLCJkYXJrVGhlbWVfaGUiLCJsaWdodFRoZW1lX2hlIiwidG9nZ2xlVGhlbWUiLCJsYW5ndWFnZSIsImNoYW5nZVRoZW1lTGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBM0I7QUFFTyxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQy9CLFNBQU9DLHdEQUFVLENBQUNKLGtCQUFELENBQWpCO0FBQ0Q7O0dBRmVHLGM7O0FBSVQsU0FBU0Usb0JBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsS0FBRCxDQURHO0FBQUEsTUFDMUNDLFdBRDBDO0FBQUEsTUFDN0JDLGNBRDZCOztBQUFBLG1CQUdURixzREFBUSxDQUFDO0FBQy9DRyxRQUFJLEVBQUVDLG1EQUR5QztBQUUvQ0MsU0FBSyxFQUFFQyxvREFBVUE7QUFGOEIsR0FBRCxDQUhDO0FBQUEsTUFHMUNDLFlBSDBDO0FBQUEsTUFHNUJDLGVBSDRCOztBQVFqRCxNQUFNQyxNQUFNLEdBQUc7QUFDYk4sUUFBSSxFQUFFO0FBQ0pPLFFBQUUsRUFBRU4sbURBREE7QUFFSk8sUUFBRSxFQUFFQyxzREFBWUE7QUFGWixLQURPO0FBS2JQLFNBQUssRUFBRTtBQUNMSyxRQUFFLEVBQUVKLG9EQURDO0FBRUxLLFFBQUUsRUFBRUUsdURBQWFBO0FBRlosS0FMTTtBQVNiRixNQUFFLEVBQUU7QUFDRlIsVUFBSSxFQUFFUyxzREFESjtBQUVGUCxXQUFLLEVBQUVRLHVEQUFhQTtBQUZsQixLQVRTO0FBYWJILE1BQUUsRUFBRTtBQUNGUCxVQUFJLEVBQUVDLG1EQURKO0FBRUZDLFdBQUssRUFBRUMsb0RBQVVBO0FBRmY7QUFiUyxHQUFmOztBQWtCQSxNQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTixtQkFBZSxDQUNiUCxXQUFXLEdBQUdRLE1BQU0sQ0FBQyxNQUFELENBQU4sQ0FBZU0sUUFBZixDQUFILEdBQThCTixNQUFNLENBQUMsT0FBRCxDQUFOLENBQWdCTSxRQUFoQixDQUQ1QixDQUFmO0FBR0FiLGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0QsR0FMRDs7QUFNQSxNQUFNZSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFELFFBQVEsRUFBSTtBQUN0Q1AsbUJBQWUsQ0FBQ0MsTUFBTSxDQUFDTSxRQUFELENBQVAsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQ0UsU0FBSyxFQUFFO0FBQUVELGlCQUFXLEVBQVhBLFdBQUY7QUFBZWIsaUJBQVcsRUFBWEEsV0FBZjtBQUE0QmUseUJBQW1CLEVBQW5CQTtBQUE1QixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLHNFQUFEO0FBQ0UsU0FBSyxFQUFFZixXQUFXLEdBQUdNLFlBQVksQ0FBQ0osSUFBaEIsR0FBdUJJLFlBQVksQ0FBQ0YsS0FEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHTixRQUhILENBSEYsQ0FERjtBQVdEOztJQS9DZUQsb0I7O0tBQUFBLG9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDAzZTg2NWE1NGIwNzBmNTdiMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUsIGxpZ2h0VGhlbWVfaGUsIGRhcmtUaGVtZV9oZSB9IGZyb20gJy4uL3VpL3RoZW1lJ1xyXG5cclxuY29uc3QgVGhlbWVVcGRhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlVGhlbWUoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVVcGRhdGVDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzRGFya1RoZW1lLCBzZXRJc0RhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKHtcclxuICAgIGRhcms6IGRhcmtUaGVtZSxcclxuICAgIGxpZ2h0OiBsaWdodFRoZW1lLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHRoZW1lcyA9IHtcclxuICAgIGRhcms6IHtcclxuICAgICAgZW46IGRhcmtUaGVtZSxcclxuICAgICAgaGU6IGRhcmtUaGVtZV9oZSxcclxuICAgIH0sXHJcbiAgICBsaWdodDoge1xyXG4gICAgICBlbjogbGlnaHRUaGVtZSxcclxuICAgICAgaGU6IGxpZ2h0VGhlbWVfaGUsXHJcbiAgICB9LFxyXG4gICAgaGU6IHtcclxuICAgICAgZGFyazogZGFya1RoZW1lX2hlLFxyXG4gICAgICBsaWdodDogbGlnaHRUaGVtZV9oZSxcclxuICAgIH0sXHJcbiAgICBlbjoge1xyXG4gICAgICBkYXJrOiBkYXJrVGhlbWUsXHJcbiAgICAgIGxpZ2h0OiBsaWdodFRoZW1lLFxyXG4gICAgfSxcclxuICB9XHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGhlbWUoXHJcbiAgICAgIGlzRGFya1RoZW1lID8gdGhlbWVzWydkYXJrJ11bbGFuZ3VhZ2VdIDogdGhlbWVzWydsaWdodCddW2xhbmd1YWdlXVxyXG4gICAgKVxyXG4gICAgc2V0SXNEYXJrVGhlbWUoIWlzRGFya1RoZW1lKVxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VUaGVtZUxhbmd1YWdlID0gbGFuZ3VhZ2UgPT4ge1xyXG4gICAgc2V0Q3VycmVudFRoZW1lKHRoZW1lc1tsYW5ndWFnZV0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lVXBkYXRlQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyB0b2dnbGVUaGVtZSwgaXNEYXJrVGhlbWUsIGNoYW5nZVRoZW1lTGFuZ3VhZ2UgfX1cclxuICAgID5cclxuICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICB0aGVtZT17aXNEYXJrVGhlbWUgPyBjdXJyZW50VGhlbWUuZGFyayA6IGN1cnJlbnRUaGVtZS5saWdodH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVVwZGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=