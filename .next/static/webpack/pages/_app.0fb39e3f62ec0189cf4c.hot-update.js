webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/LanguageButton.jsx":
/*!***********************************!*\
  !*** ./src/ui/LanguageButton.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/LangContext */ "./src/contexts/LangContext.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Link */ "./src/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\LanguageButton.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    flag: {
      width: '30px'
    }
  };
});

var LanguageButton = function LanguageButton(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useLanguageContext = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_5__["useLanguageContext"])(),
      language = _useLanguageContext.language,
      languages = _useLanguageContext.languages,
      changeLanguageTo = _useLanguageContext.changeLanguageTo;

  var _useUpdateTheme = Object(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_8__["useUpdateTheme"])(),
      changeThemeLanguage = _useUpdateTheme.changeThemeLanguage;

  var classes = useStyles();

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleSelect = function handleSelect(lang) {
    setAnchorEl(null);
    changeLanguageTo(lang);
    changeThemeLanguage(lang);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: classes.flag,
    src: "./assets/flags/".concat(language, ".svg"),
    alt: "".concat(language, " flag"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    style: {
      zIndex: '9999'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, languages.map(function (savedLanguage) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: savedLanguage,
      component: _Link__WEBPACK_IMPORTED_MODULE_6__["default"],
      href: "".concat(router.pathname, "?ln=").concat(savedLanguage),
      onClick: function onClick() {
        return handleSelect(savedLanguage);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: classes.flag,
      src: "./assets/flags/".concat(savedLanguage, ".svg"),
      alt: "".concat(savedLanguage, " flag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }));
  })));
};

_s(LanguageButton, "wbgcgG+iC66CA+EcMfqZjkU30YU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], _contexts_LangContext__WEBPACK_IMPORTED_MODULE_5__["useLanguageContext"], _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_8__["useUpdateTheme"], useStyles];
});

_c = LanguageButton;
/* harmony default export */ __webpack_exports__["default"] = (LanguageButton);

var _c;

$RefreshReg$(_c, "LanguageButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0xhbmd1YWdlQnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmbGFnIiwid2lkdGgiLCJMYW5ndWFnZUJ1dHRvbiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImNoYW5nZUxhbmd1YWdlVG8iLCJ1c2VVcGRhdGVUaGVtZSIsImNoYW5nZVRoZW1lTGFuZ3VhZ2UiLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNlbGVjdCIsImxhbmciLCJCb29sZWFuIiwiekluZGV4IiwibWFwIiwic2F2ZWRMYW5ndWFnZSIsIkxpbmsiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxRQUFJLEVBQUM7QUFDSEMsV0FBSyxFQUFDO0FBREg7QUFEZ0MsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBTUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSx3QkFDRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FERjtBQUFBO0FBQUEsTUFDdkJDLFFBRHVCO0FBQUEsTUFDYkMsV0FEYTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGOEIsNEJBR29CQyxnRkFBa0IsRUFIdEM7QUFBQSxNQUd0QkMsUUFIc0IsdUJBR3RCQSxRQUhzQjtBQUFBLE1BR1pDLFNBSFksdUJBR1pBLFNBSFk7QUFBQSxNQUdEQyxnQkFIQyx1QkFHREEsZ0JBSEM7O0FBQUEsd0JBSUFDLDZFQUFjLEVBSmQ7QUFBQSxNQUl2QkMsbUJBSnVCLG1CQUl2QkEsbUJBSnVCOztBQUs5QixNQUFNQyxPQUFPLEdBQUduQixTQUFTLEVBQXpCOztBQUVBLE1BQU1vQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0JYLGVBQVcsQ0FBQ1csS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJiLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLElBQUksRUFBSTtBQUMzQmYsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBTSxvQkFBZ0IsQ0FBQ1MsSUFBRCxDQUFoQjtBQUNBUCx1QkFBbUIsQ0FBQ08sSUFBRCxDQUFuQjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLHFCQUFjLGFBRGhCO0FBRUUscUJBQWMsTUFGaEI7QUFHRSxXQUFPLEVBQUVMLFdBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFFRCxPQUFPLENBQUNoQixJQUF4QjtBQUE4QixPQUFHLDJCQUFvQlcsUUFBcEIsU0FBakM7QUFBcUUsT0FBRyxZQUFLQSxRQUFMLFVBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBUUUsTUFBQyw4REFBRDtBQUNFLE1BQUUsRUFBQyxhQURMO0FBRUUsWUFBUSxFQUFFTCxRQUZaO0FBR0UsZUFBVyxNQUhiO0FBSUUsUUFBSSxFQUFFaUIsT0FBTyxDQUFDakIsUUFBRCxDQUpmO0FBS0UsV0FBTyxFQUFFYyxXQUxYO0FBTUUsU0FBSyxFQUFFO0FBQUVJLFlBQU0sRUFBRTtBQUFWLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHWixTQUFTLENBQUNhLEdBQVYsQ0FBYyxVQUFBQyxhQUFhO0FBQUEsV0FDMUIsTUFBQyxrRUFBRDtBQUNFLFNBQUcsRUFBRUEsYUFEUDtBQUVFLGVBQVMsRUFBRUMsNkNBRmI7QUFHRSxVQUFJLFlBQUtuQixNQUFNLENBQUNvQixRQUFaLGlCQUEyQkYsYUFBM0IsQ0FITjtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1MLFlBQVksQ0FBQ0ssYUFBRCxDQUFsQjtBQUFBLE9BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQUssZUFBUyxFQUFFVixPQUFPLENBQUNoQixJQUF4QjtBQUE4QixTQUFHLDJCQUFvQjBCLGFBQXBCLFNBQWpDO0FBQTBFLFNBQUcsWUFBS0EsYUFBTCxVQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FEMEI7QUFBQSxHQUEzQixDQVJILENBUkYsQ0FERjtBQThCRCxDQW5ERDs7R0FBTXhCLGM7VUFFV08scUQsRUFDbUNDLHdFLEVBQ3BCSSxxRSxFQUNkakIsUzs7O0tBTFpLLGM7QUFxRFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGZiMzllM2Y2MmVjMDE4OWNmNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSdcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VVcGRhdGVUaGVtZSB9IGZyb20gJy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGZsYWc6e1xyXG4gICAgd2lkdGg6JzMwcHgnXHJcbiAgfVxyXG59KSlcclxuXHJcbmNvbnN0IExhbmd1YWdlQnV0dG9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgbGFuZ3VhZ2UsIGxhbmd1YWdlcywgY2hhbmdlTGFuZ3VhZ2VUbyB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICBjb25zdCB7Y2hhbmdlVGhlbWVMYW5ndWFnZX0gPSB1c2VVcGRhdGVUaGVtZSgpXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGxhbmcgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICAgIGNoYW5nZUxhbmd1YWdlVG8obGFuZylcclxuICAgIGNoYW5nZVRoZW1lTGFuZ3VhZ2UobGFuZylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgYXJpYS1jb250cm9scz0nc2ltcGxlLW1lbnUnXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD0ndHJ1ZSdcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmZsYWd9IHNyYz17YC4vYXNzZXRzL2ZsYWdzLyR7bGFuZ3VhZ2V9LnN2Z2B9IGFsdD17YCR7bGFuZ3VhZ2V9IGZsYWdgfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD0nc2ltcGxlLW1lbnUnXHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiAnOTk5OScgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtsYW5ndWFnZXMubWFwKHNhdmVkTGFuZ3VhZ2UgPT4gKFxyXG4gICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgIGtleT17c2F2ZWRMYW5ndWFnZX1cclxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICBocmVmPXtgJHtyb3V0ZXIucGF0aG5hbWV9P2xuPSR7c2F2ZWRMYW5ndWFnZX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3Qoc2F2ZWRMYW5ndWFnZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmZsYWd9IHNyYz17YC4vYXNzZXRzL2ZsYWdzLyR7c2F2ZWRMYW5ndWFnZX0uc3ZnYH0gYWx0PXtgJHtzYXZlZExhbmd1YWdlfSBmbGFnYH0gLz5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VCdXR0b25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==