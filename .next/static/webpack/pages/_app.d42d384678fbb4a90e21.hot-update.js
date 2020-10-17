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
      lineNumber: 38,
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
  return __jsx("footer", {
    className: classes.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mdDown: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/',
    text: 'Home',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mdDown: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/services',
    text: 'Our Services',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/private',
    text: 'Personal & Family',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/company',
    text: 'Companies & Teams',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/events',
    text: 'Conferences & Events',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mdDown: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/revolution',
    text: 'The Revolution',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/revolution',
    text: 'VR Blog',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/revolution',
    text: 'New',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(GridLink, {
    path: '/about',
    text: 'About',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(GridLink, {
    path: '/contact',
    text: 'Contact Us',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  })))), __jsx(_Copyright__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx(_ContactButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }));
};

_s2(Footer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0Zvb3Rlci9Gb290ZXIuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwiekluZGV4IiwibW9kYWwiLCJwb3NpdGlvbiIsImNvbG9yIiwiZ3JpZENvbHVtbiIsIm1hcmdpbiIsImdyaWRMaW5rIiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIkdyaWRMaW5rIiwicHJvcHMiLCJjbGFzc2VzIiwicGF0aCIsInRleHQiLCJ1c2VQYWdlc0NvbnRleHQiLCJnZXRDdXJyZW50UGFnZUluZGVjaWVzIiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsImhhbmRsZUxpbmtDbGljayIsIkxpbmsiLCJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsVUFBTSxFQUFFO0FBQ05DLHFCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQURqQztBQUVOQyxXQUFLLEVBQUUsTUFGRDtBQUdOQyxZQUFNLEVBQUVQLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFiLEdBQXFCLENBSHZCO0FBSU5DLGNBQVEsRUFBRSxVQUpKO0FBS05DLFdBQUssRUFBRTtBQUxELEtBRDZCO0FBUXJDQyxjQUFVLEVBQUU7QUFDVkMsWUFBTSxFQUFFO0FBREUsS0FSeUI7QUFXckNDLFlBQVEsRUFBRTtBQUNSQyxnQkFBVSxFQUFFZCxLQUFLLENBQUNlLFVBQU4sQ0FBaUJELFVBRHJCO0FBRVJFLG9CQUFjLEVBQUUsTUFGUjtBQUdSLG1CQUFhO0FBQ1hOLGFBQUssRUFBRTtBQURJO0FBSEw7QUFYMkIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBb0JBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUdyQixTQUFTLEVBQXpCO0FBRHdCLE1BRWhCc0IsSUFGZ0IsR0FFREYsS0FGQyxDQUVoQkUsSUFGZ0I7QUFBQSxNQUVWQyxJQUZVLEdBRURILEtBRkMsQ0FFVkcsSUFGVTs7QUFBQSx5QkFHbUNDLDhFQUFlLEVBSGxEO0FBQUEsTUFHaEJDLHNCQUhnQixvQkFHaEJBLHNCQUhnQjtBQUFBLE1BR1FDLHNCQUhSLG9CQUdRQSxzQkFIUjs7QUFJeEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBTCxJQUFJLEVBQUk7QUFDOUJJLDBCQUFzQixDQUFDRCxzQkFBc0IsQ0FBQ0gsSUFBRCxDQUF2QixDQUF0QjtBQUNELEdBRkQ7O0FBR0EsU0FDRSxNQUFDLDhEQUFEO0FBQ0UsUUFBSSxNQUROO0FBRUUsYUFBUyxFQUFFTSw2Q0FGYjtBQUdFLFFBQUksRUFBRU4sSUFIUjtBQUlFLFdBQU8sRUFBRSxtQkFBTTtBQUNiSyxxQkFBZSxDQUFDTCxJQUFELENBQWY7QUFDRCxLQU5IO0FBT0UsYUFBUyxFQUFFRCxPQUFPLENBQUNOLFFBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR1EsSUFUSCxDQURGO0FBYUQsQ0FwQkQ7O0dBQU1KLFE7VUFDWW5CLFMsRUFFMkN3QixzRTs7O0tBSHZETCxROztBQXNCTixJQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBVCxLQUFLLEVBQUk7QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHckIsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBUSxhQUFTLEVBQUVxQixPQUFPLENBQUNsQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxVQUFNLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVrQixPQUFPLENBQUNSLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxHQUFoQjtBQUFxQixRQUFJLEVBQUUsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLEVBUUUsTUFBQyxnRUFBRDtBQUFRLFVBQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsRUFBRVEsT0FBTyxDQUFDUixVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsV0FBaEI7QUFBNkIsUUFBSSxFQUFFLGNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxtQkFBaEI7QUFBcUMsUUFBSSxFQUFFLG1CQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsbUJBQWhCO0FBQXFDLFFBQUksRUFBRSxtQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxRQUFEO0FBQ0UsUUFBSSxFQUFFLGtCQURSO0FBRUUsUUFBSSxFQUFFLHNCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBREYsQ0FSRixFQXFCRSxNQUFDLGdFQUFEO0FBQVEsVUFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFUSxPQUFPLENBQUNSLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxhQUFoQjtBQUErQixRQUFJLEVBQUUsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxhQUFoQjtBQUErQixRQUFJLEVBQUUsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFLGFBQWhCO0FBQStCLFFBQUksRUFBRSxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQURGLENBckJGLEVBK0JFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVRLE9BQU8sQ0FBQ1IsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLFdBQU8sRUFBRSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFLFFBQWhCO0FBQTBCLFFBQUksRUFBRSxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsVUFBaEI7QUFBNEIsUUFBSSxFQUFFLFlBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBL0JGLENBREYsRUF1Q0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNGLEVBd0NFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRixDQURGO0FBNENELENBL0NEOztJQUFNZ0IsTTtVQUNZN0IsUzs7O01BRFo2QixNO0FBaURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ0MmQzODQ2NzhmYmI0YTkwZTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWN0QnV0dG9uIGZyb20gJy4uL0NvbnRhY3RCdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi9Db3B5cmlnaHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsIC0gMSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICcjZmFmYWZhJyxcclxuICB9LFxyXG4gIGdyaWRDb2x1bW46IHtcclxuICAgIG1hcmdpbjogJzNlbScsXHJcbiAgfSxcclxuICBncmlkTGluazoge1xyXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICcmOnZpc2l0ZWQnOiB7XHJcbiAgICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgR3JpZExpbmsgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBwYXRoLCB0ZXh0IH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcywgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSBwYXRoID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMoZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyhwYXRoKSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGl0ZW1cclxuICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICBocmVmPXtwYXRofVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlTGlua0NsaWNrKHBhdGgpXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTGlua31cclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGb290ZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRDb2x1bW59PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsnLyd9IHRleHQ9eydIb21lJ30gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMnfSB0ZXh0PXsnT3VyIFNlcnZpY2VzJ30gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9zZXJ2aWNlcy9wcml2YXRlJ30gdGV4dD17J1BlcnNvbmFsICYgRmFtaWx5J30gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9zZXJ2aWNlcy9jb21wYW55J30gdGV4dD17J0NvbXBhbmllcyAmIFRlYW1zJ30gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmtcclxuICAgICAgICAgICAgICAgIHBhdGg9eycvc2VydmljZXMvZXZlbnRzJ31cclxuICAgICAgICAgICAgICAgIHRleHQ9eydDb25mZXJlbmNlcyAmIEV2ZW50cyd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvcmV2b2x1dGlvbid9IHRleHQ9eydUaGUgUmV2b2x1dGlvbid9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvcmV2b2x1dGlvbid9IHRleHQ9eydWUiBCbG9nJ30gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9yZXZvbHV0aW9uJ30gdGV4dD17J05ldyd9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9hYm91dCd9IHRleHQ9eydBYm91dCd9IC8+XHJcbiAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsnL2NvbnRhY3QnfSB0ZXh0PXsnQ29udGFjdCBVcyd9IC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPENvbnRhY3RCdXR0b24gLz5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=