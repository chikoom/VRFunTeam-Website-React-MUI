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
      padding: '10%'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFwcEJhciIsInpJbmRleCIsIm1vZGFsIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJicmVha3BvaW50cyIsImRvd24iLCJoZWFkZXJUZXh0IiwibWFyZ2luTGVmdCIsImxvZ28iLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxvZ29CdXR0b24iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0Iiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJoYW5kbGVUYWJDaGFuZ2UiLCJlIiwidmFsdWUiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxxRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSxTQUFLO0FBQ3JDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBYixHQUFxQjtBQUR2QixLQUQ2QjtBQUlyQ0MsaUJBQWEsa0NBQ1JKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxPQURMO0FBRVhDLGtCQUFZLEVBQUU7QUFGSCxpSEFHVlAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUhVLEVBR3FCO0FBQzlCRixrQkFBWSxFQUFFO0FBRGdCLEtBSHJCLDZHQU1WUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBTlUsRUFNcUI7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RVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjNhYjNjZjg0OTJiODc1ZmQ2OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuaW1wb3J0IERyYXdlck1lbnUgZnJvbSAnLi9EcmF3ZXJNZW51J1xyXG5pbXBvcnQgeyBFbGV2YXRpb25TY3JvbGwgfSBmcm9tICcuLi9oZWxwZXJzL3VpLWhlbHBlcnMnXHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBCdXR0b24sXHJcbiAgbWFrZVN0eWxlcyxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIHVzZVRoZW1lLFxyXG4gIEhpZGRlbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS8nXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IFRhYnNNZW51IGZyb20gJy4vVGFic01lbnUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5tb2RhbCArIDEsXHJcbiAgfSxcclxuICB0b29sYmFyTWFyZ2luOiB7XHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIG1hcmdpbkJvdHRvbTogJzIuNGVtJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206ICcxLjRlbScsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzFlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVhZGVyVGV4dDoge1xyXG4gICAgbWFyZ2luTGVmdDogJzFlbScsXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBoZWlnaHQ6ICc3ZW0nLFxyXG4gICAgcGFkZGluZ1RvcDogJzFlbScsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnMWVtJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBoZWlnaHQ6ICc2ZW0nLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBoZWlnaHQ6ICc1ZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ29CdXR0b246IHtcclxuICAgIHBhZGRpbmc6ICcwJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgSGVhZGVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSlcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFt2YWx1ZSwgbnVsbF0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEVsZXZhdGlvblNjcm9sbD5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPSdmaXhlZCcgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhciBzdHlsZT17eyBwYWRkaW5nOiAnMTAlJyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNoYW5nZSgnXycsIDApfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQnV0dG9ufVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICBocmVmPScvJ1xyXG4gICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgaWQ9J0xheWVyXzEnXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9J0xheWVyIDEnXHJcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgNTYyIDQ4NSdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlPntgLmNscy0ze2ZpbGw6bm9uZTtzdHJva2U6IzdiYWRlMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4fS5jbHMtNHtmaWxsOiMwMDU4YTh9YH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD0nI2U2ZTZlNicgZD0nTTI4MSAzTDMgNDgxaDI3OFYzeicgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9JyNmMGYwZjAnIGQ9J00yODEgM2wyNzggNDc4SDI4MVYzeicgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xzLTMnXHJcbiAgICAgICAgICAgICAgICAgIGQ9J00yODEgM2wyNzYgNDc5SDRMMjgxIDN6TTI4MSAzdjE2Nk00IDQ4MmwxNjctNzBNNTU4IDQ4MmwtMTYwLTY3J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xzLTQnXHJcbiAgICAgICAgICAgICAgICAgIGQ9J00yNDkgMjE5bDE1LTUxaDE4bC0xOSA2NmgtMjhsLTE5LTY2aDE4ek0yODUgMjM0di02NmgzNXExMiAwIDE3IDR0NSAxNnEwIDExLTMgMTV0LTExIDZxMTMgMSAxMyAxMnYxM2gtMTd2LTEwcTAtOC04LThoLTEzdjE4em0xOC0zM2gxM3E1IDAgNi0ydDItOGExNSAxNSAwIDAwLTEtNmwtNi0yaC0xNHpNMTg2IDMyNnYtNjZoNDd2MTVoLTI5djEzaDI3djE0aC0yN3YyNHpNMjQxIDI2MGgxOHY0M3EwIDYgMiA3YzEgMSA0IDIgOSAycTcgMCA4LTJjMi0xIDItMyAyLTZ2LTQ0aDE4djQ0cTAgMTMtNiAxOHQtMjEgNXEtMTcgMC0yMy00dC03LTE4ek0zMDkgMjYwaDMwbDE5IDUwdi01MGgxOHY2NmgtMzBsLTE5LTQ5djQ5aC0xOHpNMTQwIDM1M2g1MnYxNWgtMTd2NTFoLTE4di01MWgtMTd6TTE5OCA0MTl2LTY2aDQ4djE0aC0zMHYxMmgyOHYxMmgtMjh2MTNoMzF2MTV6TTI1MiA0MTlsMjAtNjZoMjdsMjAgNjZoLTE4bC0zLTEyaC0yNGwtMyAxMnptMjYtMjVoMTZsLTgtMjh6TTMyNCAzNTNoMjhsMTMgNDEgMTItNDJoMjl2NjZoLTE4di00NmwtMTUgNDdoLTE2bC0xNS00N3Y0N2gtMTh6J1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2Z1bnRlYW0tbG9nby1icmlnaHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJUZXh0fT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlZSRnVuVGVhbTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJz5CZXR0ZXIgVGhhbiBSZWFsaXR5PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgPFRhYnNNZW51IC8+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgPERyYXdlck1lbnUgLz5cclxuICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvRWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICA8ZGl2IG5hbWU9J3Rvb2xiYXItc3BhY2luZycgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJNYXJnaW59PjwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==