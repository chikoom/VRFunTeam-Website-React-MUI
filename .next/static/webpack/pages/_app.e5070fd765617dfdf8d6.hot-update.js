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
    },
    flagButton: {
      minWidth: '0',
      padding: 0,
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
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    className: classes.flagButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: classes.flag,
    src: "../assets/flags/".concat(language, ".svg"),
    alt: "".concat(language, " flag"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 53,
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
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: classes.flag,
      src: "../assets/flags/".concat(savedLanguage, ".svg"),
      alt: "".concat(savedLanguage),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0xhbmd1YWdlQnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmbGFnIiwid2lkdGgiLCJmbGFnQnV0dG9uIiwibWluV2lkdGgiLCJwYWRkaW5nIiwiTGFuZ3VhZ2VCdXR0b24iLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGFuZ3VhZ2VDb250ZXh0IiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjaGFuZ2VMYW5ndWFnZVRvIiwidXNlVXBkYXRlVGhlbWUiLCJjaGFuZ2VUaGVtZUxhbmd1YWdlIiwiY2xhc3NlcyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTZWxlY3QiLCJsYW5nIiwiQm9vbGVhbiIsInpJbmRleCIsIm1hcCIsInNhdmVkTGFuZ3VhZ2UiLCJMaW5rIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFDO0FBQ0hDLFdBQUssRUFBQztBQURILEtBRGdDO0FBSXJDQyxjQUFVLEVBQUM7QUFDWEMsY0FBUSxFQUFDLEdBREU7QUFFWEMsYUFBTyxFQUFDLENBRkc7QUFHWEgsV0FBSyxFQUFDO0FBSEs7QUFKMEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBV0EsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSx3QkFDRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FERjtBQUFBO0FBQUEsTUFDdkJDLFFBRHVCO0FBQUEsTUFDYkMsV0FEYTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGOEIsNEJBR29CQyxnRkFBa0IsRUFIdEM7QUFBQSxNQUd0QkMsUUFIc0IsdUJBR3RCQSxRQUhzQjtBQUFBLE1BR1pDLFNBSFksdUJBR1pBLFNBSFk7QUFBQSxNQUdEQyxnQkFIQyx1QkFHREEsZ0JBSEM7O0FBQUEsd0JBSUFDLDZFQUFjLEVBSmQ7QUFBQSxNQUl2QkMsbUJBSnVCLG1CQUl2QkEsbUJBSnVCOztBQUs5QixNQUFNQyxPQUFPLEdBQUd0QixTQUFTLEVBQXpCOztBQUVBLE1BQU11QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0JYLGVBQVcsQ0FBQ1csS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJiLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLElBQUksRUFBSTtBQUMzQmYsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBTSxvQkFBZ0IsQ0FBQ1MsSUFBRCxDQUFoQjtBQUNBUCx1QkFBbUIsQ0FBQ08sSUFBRCxDQUFuQjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLHFCQUFjLGFBRGhCO0FBRUUscUJBQWMsTUFGaEI7QUFHRSxXQUFPLEVBQUVMLFdBSFg7QUFJRSxhQUFTLEVBQUVELE9BQU8sQ0FBQ2pCLFVBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBRWlCLE9BQU8sQ0FBQ25CLElBQXhCO0FBQThCLE9BQUcsNEJBQXFCYyxRQUFyQixTQUFqQztBQUFzRSxPQUFHLFlBQUtBLFFBQUwsVUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsRUFTRSxNQUFDLDhEQUFEO0FBQ0UsTUFBRSxFQUFDLGFBREw7QUFFRSxZQUFRLEVBQUVMLFFBRlo7QUFHRSxlQUFXLE1BSGI7QUFJRSxRQUFJLEVBQUVpQixPQUFPLENBQUNqQixRQUFELENBSmY7QUFLRSxXQUFPLEVBQUVjLFdBTFg7QUFNRSxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFO0FBQVYsS0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUdaLFNBQVMsQ0FBQ2EsR0FBVixDQUFjLFVBQUFDLGFBQWE7QUFBQSxXQUMxQixNQUFDLGtFQUFEO0FBQ0UsU0FBRyxFQUFFQSxhQURQO0FBRUUsZUFBUyxFQUFFQyw2Q0FGYjtBQUdFLFVBQUksWUFBS25CLE1BQU0sQ0FBQ29CLFFBQVosaUJBQTJCRixhQUEzQixDQUhOO0FBSUUsYUFBTyxFQUFFO0FBQUEsZUFBTUwsWUFBWSxDQUFDSyxhQUFELENBQWxCO0FBQUEsT0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUU7QUFBSyxlQUFTLEVBQUVWLE9BQU8sQ0FBQ25CLElBQXhCO0FBQThCLFNBQUcsNEJBQXFCNkIsYUFBckIsU0FBakM7QUFBMkUsU0FBRyxZQUFLQSxhQUFMLENBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQUQwQjtBQUFBLEdBQTNCLENBUkgsQ0FURixDQURGO0FBK0JELENBcEREOztHQUFNeEIsYztVQUVXTyxxRCxFQUNtQ0Msd0UsRUFDcEJJLHFFLEVBQ2RwQixTOzs7S0FMWlEsYztBQXNEU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNTA3MGZkNzY1NjE3ZGZkZjhkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSdcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVVwZGF0ZVRoZW1lIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZmxhZzp7XHJcbiAgICB3aWR0aDonMzBweCdcclxuICB9LFxyXG4gIGZsYWdCdXR0b246e1xyXG4gIG1pbldpZHRoOicwJyxcclxuICBwYWRkaW5nOjAsXHJcbiAgd2lkdGg6JzMwcHgnXHJcbn1cclxufSkpXHJcblxyXG5jb25zdCBMYW5ndWFnZUJ1dHRvbiA9IHByb3BzID0+IHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGxhbmd1YWdlLCBsYW5ndWFnZXMsIGNoYW5nZUxhbmd1YWdlVG8gfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcbiAgY29uc3Qge2NoYW5nZVRoZW1lTGFuZ3VhZ2V9ID0gdXNlVXBkYXRlVGhlbWUoKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSBsYW5nID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpXHJcbiAgICBjaGFuZ2VMYW5ndWFnZVRvKGxhbmcpXHJcbiAgICBjaGFuZ2VUaGVtZUxhbmd1YWdlKGxhbmcpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9J3NpbXBsZS1tZW51J1xyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9J3RydWUnXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsYWdCdXR0b259XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGFnfSBzcmM9e2AuLi9hc3NldHMvZmxhZ3MvJHtsYW5ndWFnZX0uc3ZnYH0gYWx0PXtgJHtsYW5ndWFnZX0gZmxhZ2B9IC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPSdzaW1wbGUtbWVudSdcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6ICc5OTk5JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2xhbmd1YWdlcy5tYXAoc2F2ZWRMYW5ndWFnZSA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAga2V5PXtzYXZlZExhbmd1YWdlfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5wYXRobmFtZX0/bG49JHtzYXZlZExhbmd1YWdlfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChzYXZlZExhbmd1YWdlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuZmxhZ30gc3JjPXtgLi4vYXNzZXRzL2ZsYWdzLyR7c2F2ZWRMYW5ndWFnZX0uc3ZnYH0gYWx0PXtgJHtzYXZlZExhbmd1YWdlfWB9IC8+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlQnV0dG9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=