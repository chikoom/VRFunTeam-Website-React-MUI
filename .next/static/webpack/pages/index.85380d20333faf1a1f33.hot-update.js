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
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");


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

  var _useLanguageContext = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_7__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    className: classes.heroContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    className: classes.heroBackdrop,
    alignContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 10,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/funteam-logo-transparent.svg",
    alt: "funteam logo",
    className: classes.heroLogo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 15
    }
  }, siteData.heroHeader)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    align: "justify",
    className: classes.heroText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, siteData.heroText)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
      columnNumber: 17
    }
  }, siteData.priceEstimate), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "outlined",
    color: "secondary",
    endIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
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
      lineNumber: 104,
      columnNumber: 17
    }
  }, siteData.learnMore))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  })));
};

_s(HeroBlock, "lAh6HKyU9hAro8ehzi/LLwG1YXk=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"], _contexts_LangContext__WEBPACK_IMPORTED_MODULE_7__["useLanguageContext"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0hlcm9CbG9jay5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVyb0NvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsIm1pbkhlaWdodCIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiaGVyb0JhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwiaGVyb0xvZ28iLCJ3aWR0aCIsImhlcm9IZWFkZXIiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJoZXJvVGV4dCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZm9udFNpemUiLCJoZXJvQnV0dG9uIiwibWFyZ2luIiwiaGVyb0J1dHRvbkVtcHR5IiwiYm9yZGVyQ29sb3IiLCJIZXJvQmxvY2siLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwiTGluayIsInByaWNlRXN0aW1hdGUiLCJTY3JvbGxMaW5rIiwibGVhcm5Nb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxpQkFBYSxFQUFFO0FBQ2JDLHFCQUFlLEVBQUUsMEJBREo7QUFFYkMsZUFBUyxFQUFFLE1BRkU7QUFHYkMsWUFBTSxFQUFFLE1BSEs7QUFJYkMsd0JBQWtCLEVBQUUsS0FKUDtBQUtiQyxvQkFBYyxFQUFFO0FBTEgsS0FEc0I7QUFRckNDLGdCQUFZLEVBQUU7QUFDWkMscUJBQWUsRUFBRTtBQURMLEtBUnVCO0FBV3JDQyxZQUFRLEVBQUU7QUFDUkMs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LE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5FRixDQURGLENBREY7QUF5RUQsQ0E3RUQ7O0dBQU1ULFM7VUFDWTVCLFMsRUFDRitCLDBELEVBQ09DLHdFOzs7S0FIakJKLFM7QUErRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1MzgwZDIwMzMzZmFmMWExZjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVRoZW1lLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGhlcm9Db250YWluZXI6IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJy9hc3NldHMvaGFuZHMuanBnJylcIixcclxuICAgIG1pbkhlaWdodDogJzgwdmgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBoZXJvQmFja2Ryb3A6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzMsIDc1LCAxMTIsMC44KScsXHJcbiAgfSxcclxuICBoZXJvTG9nbzoge1xyXG4gICAgd2lkdGg6ICcxOGVtJyxcclxuICAgIGhlaWdodDogJzE4ZW0nLFxyXG4gIH0sXHJcbiAgaGVyb0hlYWRlcjoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG4gIGhlcm9UZXh0OiB7XHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEuNWVtJyxcclxuICAgIHBhZGRpbmdSaWdodDogJzEwJScsXHJcbiAgICBwYWRkaW5nTGVmdDogJzEwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6ICcxLjFlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0J1dHRvbjoge1xyXG4gICAgbWFyZ2luOiAnMC41ZW0nLFxyXG4gIH0sXHJcbiAgaGVyb0J1dHRvbkVtcHR5OiB7XHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEhlcm9CbG9jayA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCB7IHNpdGVEYXRhIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250YWluZXJ9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CYWNrZHJvcH0gYWxpZ25Db250ZW50PSdjZW50ZXInPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM+PC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNWVtJywgbWFyZ2luVG9wOiAnMWVtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9mdW50ZWFtLWxvZ28tdHJhbnNwYXJlbnQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0xvZ299XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdoNCdcclxuICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0hlYWRlcn1cclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzaXRlRGF0YS5oZXJvSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgey8qIFRlYW0gRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBpbiBWaXJ0dWFsIFJlYWxpdHkgKi99XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgICAgYWxpZ249J2p1c3RpZnknXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb1RleHR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NpdGVEYXRhLmhlcm9UZXh0fVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0ganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPScvZXN0aW1hdGUnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzaXRlRGF0YS5wcmljZUVzdGltYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBlbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5oZXJvQnV0dG9ufSAke2NsYXNzZXMuaGVyb0J1dHRvbkVtcHR5fWB9XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17U2Nyb2xsTGlua31cclxuICAgICAgICAgICAgICAgICAgdG89J2NvbnRlbnRTdGFydCdcclxuICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3NpdGVEYXRhLmxlYXJuTW9yZX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPjwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0Jsb2NrXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=