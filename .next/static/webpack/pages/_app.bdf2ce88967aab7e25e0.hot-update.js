webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/Header/Header.jsx":
/*!**********************************!*\
  !*** ./src/ui/Header/Header.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _DrawerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DrawerMenu */ "./src/ui/Header/DrawerMenu.jsx");
/* harmony import */ var _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/ui-helpers */ "./src/ui/helpers/ui-helpers.jsx");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabsMenu */ "./src/ui/Header/TabsMenu.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Header\\Header.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  var _objectSpread2, _logo;

  return {
    appBar: {
      zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, (_objectSpread2 = {
      marginBottom: '2.4em'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down('md'), {
      marginBottom: '1.4em'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down('xs'), {
      marginBottom: '1em'
    }), _objectSpread2)),
    headerText: {
      marginLeft: '1em'
    },
    logo: (_logo = {
      height: '7em',
      paddingTop: '1em',
      paddingBottom: '1em'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, theme.breakpoints.down('md'), {
      height: '6em'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, theme.breakpoints.down('xs'), {
      height: '5em'
    }), _logo),
    logoButton: {
      padding: '0',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  };
});

var Header = function Header(props) {
  _s();

  var classes = useStyles();

  var _usePagesContext = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])(),
      setCurrentPageIndecies = _usePagesContext.setCurrentPageIndecies;

  var theme = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var matches = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])(theme.breakpoints.down('md'));

  var handleTabChange = function handleTabChange(e, value) {
    setCurrentPageIndecies([value, null]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_4__["ElevationScroll"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["AppBar"], {
    position: "fixed",
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
    style: {
      paddingLeft: '10%',
      paddingRight: '10%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      return handleTabChange('_', 0);
    },
    className: classes.logoButton,
    component: _Link__WEBPACK_IMPORTED_MODULE_2__["default"],
    href: "/",
    disableRipple: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: classes.logo,
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 562 485",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, ".cls-3{fill:none;stroke:#7bade2;stroke-miterlimit:10;stroke-width:2px}.cls-4{fill:#0058a8}")), __jsx("path", {
    fill: "#e6e6e6",
    d: "M281 3L3 481h278V3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("path", {
    fill: "#f0f0f0",
    d: "M281 3l278 478H281V3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx("path", {
    className: "cls-3",
    d: "M281 3l276 479H4L281 3zM281 3v166M4 482l167-70M558 482l-160-67",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("path", {
    className: "cls-4",
    d: "M249 219l15-51h18l-19 66h-28l-19-66h18zM285 234v-66h35q12 0 17 4t5 16q0 11-3 15t-11 6q13 1 13 12v13h-17v-10q0-8-8-8h-13v18zm18-33h13q5 0 6-2t2-8a15 15 0 00-1-6l-6-2h-14zM186 326v-66h47v15h-29v13h27v14h-27v24zM241 260h18v43q0 6 2 7c1 1 4 2 9 2q7 0 8-2c2-1 2-3 2-6v-44h18v44q0 13-6 18t-21 5q-17 0-23-4t-7-18zM309 260h30l19 50v-50h18v66h-30l-19-49v49h-18zM140 353h52v15h-17v51h-18v-51h-17zM198 419v-66h48v14h-30v12h28v12h-28v13h31v15zM252 419l20-66h27l20 66h-18l-3-12h-24l-3 12zm26-25h16l-8-28zM324 353h28l13 41 12-42h29v66h-18v-46l-15 47h-16l-15-47v47h-18z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: classes.headerText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "VRFunTeam")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Better Than Reality"))), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Hidden"], {
    mdDown: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(_TabsMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Hidden"], {
    lgUp: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_DrawerMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    name: "toolbar-spacing",
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }));
};

_s(Header, "JCLB4/dWjLMznAGPvliENfpKphw=", false, function () {
  return [useStyles, _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"], _material_ui_core___WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core___WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFwcEJhciIsInpJbmRleCIsIm1vZGFsIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJicmVha3BvaW50cyIsImRvd24iLCJoZWFkZXJUZXh0IiwibWFyZ2luTGVmdCIsImxvZ28iLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxvZ29CdXR0b24iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0Iiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJoYW5kbGVUYWJDaGFuZ2UiLCJlIiwidmFsdWUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHFFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBOztBQUFBLFNBQUs7QUFDckNDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLEdBQXFCO0FBRHZCLEtBRDZCO0FBSXJDQyxpQkFBYSxrQ0FDUkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLE9BREw7QUFFWEMsa0JBQVksRUFBRTtBQUZILGlIQUdWUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSFUsRUFHcUI7QUFDOUJGLGtCQUFZLEVBQUU7QUFEZ0IsS0FIckIsNkdBTVZQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMs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LE07VUFDWXJCLFMsRUFDbUJ3QixzRSxFQUVyQkUsMkQsRUFDRUUsZ0U7OztLQUxaUCxNO0FBeUVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJkZjJjZTg4OTY3YWFiN2UyNWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnXHJcbmltcG9ydCBEcmF3ZXJNZW51IGZyb20gJy4vRHJhd2VyTWVudSdcclxuaW1wb3J0IHsgRWxldmF0aW9uU2Nyb2xsIH0gZnJvbSAnLi4vaGVscGVycy91aS1oZWxwZXJzJ1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQnV0dG9uLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICB1c2VUaGVtZSxcclxuICBIaWRkZW4sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBUYWJzTWVudSBmcm9tICcuL1RhYnNNZW51J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgubW9kYWwgKyAxLFxyXG4gIH0sXHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyLjRlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMS40ZW0nLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206ICcxZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlclRleHQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6ICcxZW0nLFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgaGVpZ2h0OiAnN2VtJyxcclxuICAgIHBhZGRpbmdUb3A6ICcxZW0nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgaGVpZ2h0OiAnNmVtJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgaGVpZ2h0OiAnNWVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvQnV0dG9uOiB7XHJcbiAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNldEN1cnJlbnRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbdmFsdWUsIG51bGxdKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFbGV2YXRpb25TY3JvbGw+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj0nZml4ZWQnIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMCUnLCBwYWRkaW5nUmlnaHQ6ICcxMCUnIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2hhbmdlKCdfJywgMCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29CdXR0b259XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9Jy8nXHJcbiAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XHJcbiAgICAgICAgICAgICAgICBpZD0nTGF5ZXJfMSdcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT0nTGF5ZXIgMSdcclxuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1NjIgNDg1J1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+e2AuY2xzLTN7ZmlsbDpub25lO3N0cm9rZTojN2JhZGUyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHh9LmNscy00e2ZpbGw6IzAwNThhOH1gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPScjZTZlNmU2JyBkPSdNMjgxIDNMMyA0ODFoMjc4VjN6JyAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD0nI2YwZjBmMCcgZD0nTTI4MSAzbDI3OCA0NzhIMjgxVjN6JyAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbHMtMydcclxuICAgICAgICAgICAgICAgICAgZD0nTTI4MSAzbDI3NiA0NzlINEwyODEgM3pNMjgxIDN2MTY2TTQgNDgybDE2Ny03ME01NTggNDgybC0xNjAtNjcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbHMtNCdcclxuICAgICAgICAgICAgICAgICAgZD0nTTI0OSAyMTlsMTUtNTFoMThsLTE5IDY2aC0yOGwtMTktNjZoMTh6TTI4NSAyMzR2LTY2aDM1cTEyIDAgMTcgNHQ1IDE2cTAgMTEtMyAxNXQtMTEgNnExMyAxIDEzIDEydjEzaC0xN3YtMTBxMC04LTgtOGgtMTN2MTh6bTE4LTMzaDEzcTUgMCA2LTJ0Mi04YTE1IDE1IDAgMDAtMS02bC02LTJoLTE0ek0xODYgMzI2di02Nmg0N3YxNWgtMjl2MTNoMjd2MTRoLTI3djI0ek0yNDEgMjYwaDE4djQzcTAgNiAyIDdjMSAxIDQgMiA5IDJxNyAwIDgtMmMyLTEgMi0zIDItNnYtNDRoMTh2NDRxMCAxMy02IDE4dC0yMSA1cS0xNyAwLTIzLTR0LTctMTh6TTMwOSAyNjBoMzBsMTkgNTB2LTUwaDE4djY2aC0zMGwtMTktNDl2NDloLTE4ek0xNDAgMzUzaDUydjE1aC0xN3Y1MWgtMTh2LTUxaC0xN3pNMTk4IDQxOXYtNjZoNDh2MTRoLTMwdjEyaDI4djEyaC0yOHYxM2gzMXYxNXpNMjUyIDQxOWwyMC02NmgyN2wyMCA2NmgtMThsLTMtMTJoLTI0bC0zIDEyem0yNi0yNWgxNmwtOC0yOHpNMzI0IDM1M2gyOGwxMyA0MSAxMi00MmgyOXY2NmgtMTh2LTQ2bC0xNSA0N2gtMTZsLTE1LTQ3djQ3aC0xOHonXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvZnVudGVhbS1sb2dvLWJyaWdodC5zdmcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxyXG4gICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlclRleHR9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+VlJGdW5UZWFtPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnPkJldHRlciBUaGFuIFJlYWxpdHk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICA8VGFic01lbnUgLz5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICA8RHJhd2VyTWVudSAvPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9FbGV2YXRpb25TY3JvbGw+XHJcbiAgICAgIDxkaXYgbmFtZT0ndG9vbGJhci1zcGFjaW5nJyBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9