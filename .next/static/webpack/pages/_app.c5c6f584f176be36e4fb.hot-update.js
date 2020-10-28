webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/Footer/Footer.jsx":
/*!**********************************!*\
  !*** ./src/ui/Footer/Footer.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContactButton */ "./src/ui/ContactButton.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Copyright */ "./src/ui/Footer/Copyright.jsx");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Footer\\Footer.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    footer: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      zIndex: theme.zIndex.modal - 1,
      position: 'relative',
      color: '#fafafa'
    },
    gridColumn: {
      margin: '3em'
    },
    gridLink: {
      fontFamily: theme.typography.fontFamily,
      textDecoration: 'none',
      '&:visited': {
        color: '#fafafa'
      }
    }
  };
});

var GridLink = function GridLink(props) {
  _s();

  var classes = useStyles();
  var path = props.path,
      text = props.text;

  var _usePagesContext = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])(),
      getCurrentPageIndecies = _usePagesContext.getCurrentPageIndecies,
      setCurrentPageIndecies = _usePagesContext.setCurrentPageIndecies;

  var handleLinkClick = function handleLinkClick(path) {
    setCurrentPageIndecies(getCurrentPageIndecies(path));
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    component: _Link__WEBPACK_IMPORTED_MODULE_4__["default"],
    href: path,
    onClick: function onClick() {
      handleLinkClick(path);
    },
    className: classes.gridLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, text);
};

_s(GridLink, "uTMPgpzvZc7B/fT7tMqSjx3dbOM=", false, function () {
  return [useStyles, _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"]];
});

_c = GridLink;

var Footer = function Footer(props) {
  _s2();

  var classes = useStyles();

  var _useLanguageContext = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx("footer", {
    className: classes.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/',
    text: 'Home',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/about',
    text: 'About',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/contact',
    text: 'Contact Us',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/services/private',
    text: 'Personal & Family',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/company',
    text: 'Companies & Teams',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/events',
    text: 'Conferences & Events',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mdDown: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/revolution',
    text: 'The Revolution',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/revolution',
    text: 'VR Blog',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/services/private',
    text: 'Personal & Family',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/company',
    text: 'Companies & Teams',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/events',
    text: 'Conferences & Events',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  })))), __jsx(_Copyright__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx(_ContactButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }));
};

_s2(Footer, "UmCvS9yghpYJIcXTEgfq6dIobNo=", false, function () {
  return [useStyles, _contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__["useLanguageContext"]];
});

_c2 = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c, _c2;

$RefreshReg$(_c, "GridLink");
$RefreshReg$(_c2, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0Zvb3Rlci9Gb290ZXIuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwiekluZGV4IiwibW9kYWwiLCJwb3NpdGlvbiIsImNvbG9yIiwiZ3JpZENvbHVtbiIsIm1hcmdpbiIsImdyaWRMaW5rIiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIkdyaWRMaW5rIiwicHJvcHMiLCJjbGFzc2VzIiwicGF0aCIsInRleHQiLCJ1c2VQYWdlc0NvbnRleHQiLCJnZXRDdXJyZW50UGFnZUluZGVjaWVzIiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsImhhbmRsZUxpbmtDbGljayIsIkxpbmsiLCJGb290ZXIiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEakM7QUFFTkMsV0FBSyxFQUFFLE1BRkQ7QUFHTkMsWUFBTSxFQUFFUCxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsS0FBYixHQUFxQixDQUh2QjtBQUlOQyxjQUFRLEVBQUUsVUFKSjtBQUtOQyxXQUFLLEVBQUU7QUFMRCxLQUQ2QjtBQVFyQ0MsY0FBVSxFQUFFO0FBQ1ZDLFlBQU0sRUFBRTtBQURFLEtBUnlCO0FBV3JDQyxZQUFRLEVBQUU7QUFDUkMsZ0JBQVUsRUFBRWQsS0FBSyxDQUFD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QUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxtQkFBaEI7QUFBcUMsUUFBSSxFQUFFLG1CQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsbUJBQWhCO0FBQXFDLFFBQUksRUFBRSxtQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxRQUFEO0FBQ0UsUUFBSSxFQUFFLGtCQURSO0FBRUUsUUFBSSxFQUFFLHNCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURKLENBL0JGLENBREYsRUE0Q0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUNGLEVBNkNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixDQURGO0FBaURELENBckREOztJQUFNZ0IsTTtVQUNZN0IsUyxFQUNlOEIsd0U7OztNQUYzQkQsTTtBQXVEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNWM2ZjU4NGYxNzZiZTM2ZTRmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGFjdEJ1dHRvbiBmcm9tICcuLi9Db250YWN0QnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbidcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4vQ29weXJpZ2h0J1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBmb290ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgubW9kYWwgLSAxLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBjb2xvcjogJyNmYWZhZmEnLFxyXG4gIH0sXHJcbiAgZ3JpZENvbHVtbjoge1xyXG4gICAgbWFyZ2luOiAnM2VtJyxcclxuICB9LFxyXG4gIGdyaWRMaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgJyY6dmlzaXRlZCc6IHtcclxuICAgICAgY29sb3I6ICcjZmFmYWZhJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBHcmlkTGluayA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHBhdGgsIHRleHQgfSA9IHByb3BzXHJcbiAgY29uc3QgeyBnZXRDdXJyZW50UGFnZUluZGVjaWVzLCBzZXRDdXJyZW50UGFnZUluZGVjaWVzIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG4gIGNvbnN0IGhhbmRsZUxpbmtDbGljayA9IHBhdGggPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhnZXRDdXJyZW50UGFnZUluZGVjaWVzKHBhdGgpKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgaXRlbVxyXG4gICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgIGhyZWY9e3BhdGh9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBoYW5kbGVMaW5rQ2xpY2socGF0aClcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMaW5rfVxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEZvb3RlciA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvJ30gdGV4dD17J0hvbWUnfSAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsnL2Fib3V0J30gdGV4dD17J0Fib3V0J30gLz5cclxuICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvY29udGFjdCd9IHRleHQ9eydDb250YWN0IFVzJ30gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMvcHJpdmF0ZSd9IHRleHQ9eydQZXJzb25hbCAmIEZhbWlseSd9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMvY29tcGFueSd9IHRleHQ9eydDb21wYW5pZXMgJiBUZWFtcyd9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rXHJcbiAgICAgICAgICAgICAgICBwYXRoPXsnL3NlcnZpY2VzL2V2ZW50cyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXsnQ29uZmVyZW5jZXMgJiBFdmVudHMnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICBcclxuICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRDb2x1bW59PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsnL3Jldm9sdXRpb24nfSB0ZXh0PXsnVGhlIFJldm9sdXRpb24nfSAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsnL3Jldm9sdXRpb24nfSB0ZXh0PXsnVlIgQmxvZyd9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMvcHJpdmF0ZSd9IHRleHQ9eydQZXJzb25hbCAmIEZhbWlseSd9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMvY29tcGFueSd9IHRleHQ9eydDb21wYW5pZXMgJiBUZWFtcyd9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rXHJcbiAgICAgICAgICAgICAgICBwYXRoPXsnL3NlcnZpY2VzL2V2ZW50cyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXsnQ29uZmVyZW5jZXMgJiBFdmVudHMnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICA8Q29udGFjdEJ1dHRvbiAvPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==