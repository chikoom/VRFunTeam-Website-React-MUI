webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ui/parts/HeroBlock.jsx":
/*!************************************!*\
  !*** ./src/ui/parts/HeroBlock.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\parts\\HeroBlock.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    heroContainer: {
      backgroundImage: "url('/assets/hands.jpg')",
      minHeight: '80vh',
      height: 'auto',
      backgroundPosition: '50%',
      backgroundSize: 'cover'
    },
    heroBackdrop: {
      backgroundColor: 'rgba(33, 75, 112,0.8)'
    },
    heroLogo: {
      width: '18em',
      height: '18em'
    },
    heroHeader: {
      fontWeight: 700,
      color: '#fff'
    },
    heroText: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: '#fff',
      marginTop: '1em',
      marginBottom: '1.5em',
      paddingRight: '10%',
      paddingLeft: '10%'
    }, theme.breakpoints.down('xs'), {
      fontSize: '1.1em'
    }),
    heroButton: {
      margin: '0.5em'
    },
    heroButtonEmpty: {
      color: '#fff',
      borderColor: '#fff'
    }
  };
});

var HeroBlock = function HeroBlock(props) {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    className: classes.heroContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    className: classes.heroBackdrop,
    alignContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 10,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    direction: "column",
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    style: {
      marginBottom: '5em',
      marginTop: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/funteam-logo-transparent.svg",
    alt: "funteam logo",
    className: classes.heroLogo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    align: "center",
    className: classes.heroHeader,
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Team Experience", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), "in Virtual Reality")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    align: "justify",
    className: classes.heroText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "Virtual Reality events are stirring the world - the experience is emmersive and mind blowing, with no cables or clumsy equipment. Take your team, family or friends to an unforgettable jurney of consolidation, creative thinking and pure fun.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "secondary",
    className: classes.heroButton,
    component: _Link__WEBPACK_IMPORTED_MODULE_5__["default"],
    href: "/estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "Price Estimate"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "outlined",
    color: "secondary",
    endIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 28
      }
    }),
    className: "".concat(classes.heroButton, " ").concat(classes.heroButtonEmpty),
    component: react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "contentStart",
    smooth: true,
    offset: -70,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Learn More"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  })));
};

_s(HeroBlock, "VtevrTi9kvKTG+vqc/SYVHiEGOM=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"]];
});

_c = HeroBlock;
/* harmony default export */ __webpack_exports__["default"] = (HeroBlock);

var _c;

$RefreshReg$(_c, "HeroBlock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0hlcm9CbG9jay5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVyb0NvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsIm1pbkhlaWdodCIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiaGVyb0JhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwiaGVyb0xvZ28iLCJ3aWR0aCIsImhlcm9IZWFkZXIiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJoZXJvVGV4dCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZm9udFNpemUiLCJoZXJvQnV0dG9uIiwibWFyZ2luIiwiaGVyb0J1dHRvbkVtcHR5IiwiYm9yZGVyQ29sb3IiLCJIZXJvQmxvY2siLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsIkxpbmsiLCJTY3JvbGxMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxpQkFBYSxFQUFFO0FBQ2JDLHFCQUFlLEVBQUUsMEJBREo7QUFFYkMsZUFBUyxFQUFFLE1BRkU7QUFHYkMsWUFBTSxFQUFFLE1BSEs7QUFJYkMsd0JBQWtCLEVBQUUsS0FKUDtBQUtiQyxvQkFBYyxFQUFFO0FBTEgsS0FEc0I7QUFRckNDLGdCQUFZLEVBQUU7QUFDWkMscUJBQWUsRUFBRTtBQURMLEtBUnVCO0FBV3JDQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFLE1BREM7QUFFUk4sWUFBTSxFQUFFO0FBRkEsS0FYMkI7QUFlckNPLGNBQVUsRUFBRTtBQUNWQyxn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dGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmIxMDZlYzIwYjUzODlhYTc4NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlVGhlbWUsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnXHJcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBoZXJvQ29udGFpbmVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvYXNzZXRzL2hhbmRzLmpwZycpXCIsXHJcbiAgICBtaW5IZWlnaHQ6ICc4MHZoJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnNTAlJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgaGVyb0JhY2tkcm9wOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDMzLCA3NSwgMTEyLDAuOCknLFxyXG4gIH0sXHJcbiAgaGVyb0xvZ286IHtcclxuICAgIHdpZHRoOiAnMThlbScsXHJcbiAgICBoZWlnaHQ6ICcxOGVtJyxcclxuICB9LFxyXG4gIGhlcm9IZWFkZXI6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgfSxcclxuICBoZXJvVGV4dDoge1xyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxLjVlbScsXHJcbiAgICBwYWRkaW5nUmlnaHQ6ICcxMCUnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcxMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMS4xZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9CdXR0b246IHtcclxuICAgIG1hcmdpbjogJzAuNWVtJyxcclxuICB9LFxyXG4gIGhlcm9CdXR0b25FbXB0eToge1xyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBIZXJvQmxvY2sgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250YWluZXJ9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CYWNrZHJvcH0gYWxpZ25Db250ZW50PSdjZW50ZXInPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM+PC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNWVtJywgbWFyZ2luVG9wOiAnMWVtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9mdW50ZWFtLWxvZ28tdHJhbnNwYXJlbnQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0xvZ299XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdoNCdcclxuICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0hlYWRlcn1cclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRlYW0gRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBpbiBWaXJ0dWFsIFJlYWxpdHlcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgICBhbGlnbj0nanVzdGlmeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvVGV4dH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWaXJ0dWFsIFJlYWxpdHkgZXZlbnRzIGFyZSBzdGlycmluZyB0aGUgd29ybGQgLSB0aGUgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgaXMgZW1tZXJzaXZlIGFuZCBtaW5kIGJsb3dpbmcsIHdpdGggbm8gY2FibGVzIG9yIGNsdW1zeVxyXG4gICAgICAgICAgICAgICAgZXF1aXBtZW50LiBUYWtlIHlvdXIgdGVhbSwgZmFtaWx5IG9yIGZyaWVuZHMgdG8gYW4gdW5mb3JnZXR0YWJsZVxyXG4gICAgICAgICAgICAgICAganVybmV5IG9mIGNvbnNvbGlkYXRpb24sIGNyZWF0aXZlIHRoaW5raW5nIGFuZCBwdXJlIGZ1bi5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgaHJlZj0nL2VzdGltYXRlJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmljZSBFc3RpbWF0ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5oZXJvQnV0dG9ufSAke2NsYXNzZXMuaGVyb0J1dHRvbkVtcHR5fWB9XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17U2Nyb2xsTGlua31cclxuICAgICAgICAgICAgICAgICAgdG89J2NvbnRlbnRTdGFydCdcclxuICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM+PC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQmxvY2tcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==