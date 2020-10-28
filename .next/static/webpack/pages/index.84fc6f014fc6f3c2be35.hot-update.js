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
  }, "Price Estimate"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
  }, "Learn More"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0hlcm9CbG9jay5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVyb0NvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsIm1pbkhlaWdodCIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiaGVyb0JhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwiaGVyb0xvZ28iLCJ3aWR0aCIsImhlcm9IZWFkZXIiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJoZXJvVGV4dCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZm9udFNpemUiLCJoZXJvQnV0dG9uIiwibWFyZ2luIiwiaGVyb0J1dHRvbkVtcHR5IiwiYm9yZGVyQ29sb3IiLCJIZXJvQmxvY2siLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwiTGluayIsIlNjcm9sbExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLGlCQUFhLEVBQUU7QUFDYkMscUJBQWUsRUFBRSwwQkFESjtBQUViQyxlQUFTLEVBQUUsTUFGRTtBQUdiQyxZQUFNLEVBQUUsTUFISztBQUliQyx3QkFBa0IsRUFBRSxLQUpQO0FBS2JDLG9CQUFjLEVBQUU7QUFMSCxLQURzQjtBQVFyQ0MsZ0JBQVksRUFBRTtBQUNaQyxxQkFBZSxFQUFFO0FBREwsS0FSdUI7QUFXckNDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUUsTUFEQztBQUVSTixZQUFNLEVBQUU7QUFGQSxLQVgyQjtBQWVyQ08sY0FBVSxFQUFFO0FBQ1ZDLGdCQUFVLEVBQUUsR0FERjtBQUVWQyxXQUFLLEVBQUU7QUFGRyxLQWZ5QjtBQW1CckNDLFlBQVEsRUFBRTtBQUNSRCxXQUFLLEVBQUUsTUFERDtBQUVORSxlQUFTLEVBQUUsS0FGTDtBQUdOQyxrQkFBWSxFQUFFLE9BSFI7QUFJTkMsa0JBQVksRUFBRSxLQUpSO0FBS05DLGlCQUFXLEVBQUU7QUFMUCxPQU1MbEIsS0FBSyxDQUFDbUIsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FOSyxFQU0wQjtBQUM5QkMsY0FBUSxFQUFFO0FBRG9CLEtBTjFCLENBbkI2QjtBQTZCckNDLGNBQVUsRUFBRTtBQUNWQyxZQUFNLEVBQUU7QUFERSxLQTdCeUI7QUFnQ3JDQyxtQkFBZSxFQUFFO0FBQ2ZYLFdBQUssRUFBRSxNQURRO0FBRWZZLGlCQUFXLEVBQUU7QUFGRTtBQWhDb0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBc0NBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN6QixNQUFNQyxPQUFPLEdBQUc5QixTQUFTLEVBQXpCO0FBQ0EsTUFBTUUsS0FBSyxHQUFHNkIsa0VBQVEsRUFBdEI7O0FBRnlCLDRCQUdKQyxnRkFBa0IsRUFIZDtBQUFBLE1BR2pCQyxRQUhpQix1QkFHakJBLFFBSGlCOztBQUl6QixTQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFFSCxPQUFPLENBQUMzQixhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUUyQixPQUFPLENBQUNyQixZQUFuQztBQUFpRCxnQkFBWSxFQUFDLFFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxhQUFTLEVBQUMsUUFGWjtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsZ0JBQVksRUFBQyxRQUpmO0FBS0UsY0FBVSxFQUFDLFFBTGI7QUFNRSxTQUFLLEVBQUU7QUFBRVMsa0JBQVksRUFBRSxLQUFoQjtBQUF1QkQsZUFBUyxFQUFFO0FBQWxDLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLHNDQUROO0FBRUUsT0FBRyxFQUFDLGNBRk47QUFHRSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ25CLFFBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLEVBZUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxhQUFTLEVBQUVtQixPQUFPLENBQUNqQixVQUhyQjtBQUlFLGdCQUFZLE1BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1Hb0IsUUFBUSxDQUFDcEIsVUFOWixDQURGLENBZkYsRUE0QkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFTLEVBQUVpQixPQUFPLENBQUNkLFFBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR2lCLFFBQVEsQ0FBQ2pCLFFBTFosQ0FERixDQTVCRixFQXFDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsV0FBTyxFQUFDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsV0FGUjtBQUdFLGFBQVMsRUFBRWMsT0FBTyxDQUFDTixVQUhyQjtBQUlFLGFBQVMsRUFBRVUsNkNBSmI7QUFLRSxRQUFJLEVBQUMsV0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBVUUsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBQyxVQURWO0FBRUUsU0FBSyxFQUFDLFdBRlI7QUFHRSxXQUFPLEVBQUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFg7QUFJRSxhQUFTLFlBQUtKLE9BQU8sQ0FBQ04sVUFBYixjQUEyQk0sT0FBTyxDQUFDSixlQUFuQyxDQUpYO0FBS0UsYUFBUyxFQUFFUyxpREFMYjtBQU1FLE1BQUUsRUFBQyxjQU5MO0FBT0UsVUFBTSxFQUFFLElBUFY7QUFRRSxVQUFNLEVBQUUsQ0FBQyxFQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsQ0FERixDQXJDRixDQURGLENBRkYsRUFtRUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkVGLENBREYsQ0FERjtBQXlFRCxDQTdFRDs7R0FBTVAsUztVQUNZNUIsUyxFQUNGK0IsMEQsRUFDT0Msd0U7OztLQUhqQkosUztBQStFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRmYzZmMDE0ZmM2ZjNjMmJlMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlVGhlbWUsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnXHJcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgaGVyb0NvbnRhaW5lcjoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL2Fzc2V0cy9oYW5kcy5qcGcnKVwiLFxyXG4gICAgbWluSGVpZ2h0OiAnODB2aCcsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzUwJScsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGhlcm9CYWNrZHJvcDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgzMywgNzUsIDExMiwwLjgpJyxcclxuICB9LFxyXG4gIGhlcm9Mb2dvOiB7XHJcbiAgICB3aWR0aDogJzE4ZW0nLFxyXG4gICAgaGVpZ2h0OiAnMThlbScsXHJcbiAgfSxcclxuICBoZXJvSGVhZGVyOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gIH0sXHJcbiAgaGVyb1RleHQ6IHtcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMS41ZW0nLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMTAlJyxcclxuICAgIHBhZGRpbmdMZWZ0OiAnMTAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogJzEuMWVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvQnV0dG9uOiB7XHJcbiAgICBtYXJnaW46ICcwLjVlbScsXHJcbiAgfSxcclxuICBoZXJvQnV0dG9uRW1wdHk6IHtcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBib3JkZXJDb2xvcjogJyNmZmYnLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgSGVyb0Jsb2NrID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IHsgc2l0ZURhdGEgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0NvbnRhaW5lcn0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0JhY2tkcm9wfSBhbGlnbkNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz48L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1ZW0nLCBtYXJnaW5Ub3A6ICcxZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2Z1bnRlYW0tbG9nby10cmFuc3BhcmVudC5zdmcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvTG9nb31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g0J1xyXG4gICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NpdGVEYXRhLmhlcm9IZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICB7LyogVGVhbSBFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIGluIFZpcnR1YWwgUmVhbGl0eSAqL31cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgICBhbGlnbj0nanVzdGlmeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvVGV4dH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2l0ZURhdGEuaGVyb1RleHR9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9Jy9lc3RpbWF0ZSdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUHJpY2UgRXN0aW1hdGVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaGVyb0J1dHRvbn0gJHtjbGFzc2VzLmhlcm9CdXR0b25FbXB0eX1gfVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1Njcm9sbExpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRvPSdjb250ZW50U3RhcnQnXHJcbiAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExlYXJuIE1vcmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPjwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0Jsb2NrXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=