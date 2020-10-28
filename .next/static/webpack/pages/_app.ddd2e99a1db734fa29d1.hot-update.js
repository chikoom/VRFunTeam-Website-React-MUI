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
    he: {
      dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme_he"],
      light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme_he"]
    },
    en: {
      dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
      light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"]
    }
  };

  var toggleTheme = function toggleTheme(language) {
    setIsDarkTheme(!isDarkTheme);
  };

  var setTheme = function setTheme(isDark, language) {};

  return __jsx(ThemeUpdateContext.Provider, {
    value: {
      toggleTheme: toggleTheme,
      isDarkTheme: isDarkTheme
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: isDarkTheme ? _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"] : _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJUaGVtZVVwZGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVcGRhdGVUaGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0RhcmtUaGVtZSIsInNldElzRGFya1RoZW1lIiwibGlnaHRUaGVtZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsInRoZW1lcyIsImhlIiwiZGFyayIsImRhcmtUaGVtZV9oZSIsImxpZ2h0IiwibGlnaHRUaGVtZV9oZSIsImVuIiwiZGFya1RoZW1lIiwidG9nZ2xlVGhlbWUiLCJsYW5ndWFnZSIsInNldFRoZW1lIiwiaXNEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQTNCO0FBRU8sU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUMvQixTQUFPQyx3REFBVSxDQUFDSixrQkFBRCxDQUFqQjtBQUNEOztHQUZlRyxjOztBQUlULFNBQVNFLG9CQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDLEtBQUQsQ0FERztBQUFBLE1BQzFDQyxXQUQwQztBQUFBLE1BQzdCQyxjQUQ2Qjs7QUFBQSxtQkFFVEYsc0RBQVEsQ0FBQ0csb0RBQUQsQ0FGQztBQUFBLE1BRTFDQyxZQUYwQztBQUFBLE1BRTVCQyxlQUY0Qjs7QUFHakQsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUVDLHNEQURKO0FBRUZDLFdBQUssRUFBRUMsdURBQWFBO0FBRmxCLEtBRFM7QUFLYkMsTUFBRSxFQUFFO0FBQ0ZKLFVBQUksRUFBRUssbURBREo7QUFFRkgsV0FBSyxFQUFFUCxvREFBVUE7QUFGZjtBQUxTLEdBQWY7O0FBVUEsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsUUFBUSxFQUFJO0FBQzlCYixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTWUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTRixRQUFULEVBQXNCLENBQUUsQ0FBekM7O0FBRUEsU0FDRSxNQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRTtBQUFFRCxpQkFBVyxFQUFYQSxXQUFGO0FBQWViLGlCQUFXLEVBQVhBO0FBQWYsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVBLFdBQVcsR0FBR1ksbURBQUgsR0FBZVYsb0RBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osUUFESCxDQURGLENBREY7QUFPRDs7SUF6QmVELG9COztLQUFBQSxvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRkZDJlOTlhMWRiNzM0ZmEyOWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lLCBsaWdodFRoZW1lX2hlLCBkYXJrVGhlbWVfaGUgfSBmcm9tICcuLi91aS90aGVtZSdcclxuXHJcbmNvbnN0IFRoZW1lVXBkYXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVRoZW1lKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFRoZW1lVXBkYXRlQ29udGV4dClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc0RhcmtUaGVtZSwgc2V0SXNEYXJrVGhlbWVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKGxpZ2h0VGhlbWUpXHJcbiAgY29uc3QgdGhlbWVzID0ge1xyXG4gICAgaGU6IHtcclxuICAgICAgZGFyazogZGFya1RoZW1lX2hlLFxyXG4gICAgICBsaWdodDogbGlnaHRUaGVtZV9oZSxcclxuICAgIH0sXHJcbiAgICBlbjoge1xyXG4gICAgICBkYXJrOiBkYXJrVGhlbWUsXHJcbiAgICAgIGxpZ2h0OiBsaWdodFRoZW1lLFxyXG4gICAgfSxcclxuICB9XHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSBsYW5ndWFnZSA9PiB7XHJcbiAgICBzZXRJc0RhcmtUaGVtZSghaXNEYXJrVGhlbWUpXHJcbiAgfVxyXG4gIGNvbnN0IHNldFRoZW1lID0gKGlzRGFyaywgbGFuZ3VhZ2UpID0+IHt9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVVcGRhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRvZ2dsZVRoZW1lLCBpc0RhcmtUaGVtZSB9fT5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2lzRGFya1RoZW1lID8gZGFya1RoZW1lIDogbGlnaHRUaGVtZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lVXBkYXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==