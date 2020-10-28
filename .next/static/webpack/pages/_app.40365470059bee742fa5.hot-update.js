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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
      color: '#fafafa',
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
      lineNumber: 41,
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
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/',
    text: 'Home',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/about',
    text: 'About',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/contact',
    text: 'Contact Us',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/services/private',
    text: 'Personal & Family',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/company',
    text: 'Companies & Teams',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/events',
    text: 'Conferences & Events',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mdDown: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/revolution',
    text: 'The Revolution',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/revolution',
    text: 'VR Blog',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    className: classes.gridColumn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "VRFunTeam"), __jsx(GridLink, {
    path: 'tel:972528228640',
    text: 'The Revolution',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: 'mailto:studio@vrfunteam.com',
    text: 'The Revolution',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  })))), __jsx(_Copyright__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), __jsx(_ContactButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0Zvb3Rlci9Gb290ZXIuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwiekluZGV4IiwibW9kYWwiLCJwb3NpdGlvbiIsImNvbG9yIiwiZ3JpZENvbHVtbiIsIm1hcmdpbiIsImdyaWRMaW5rIiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJ0ZXh0RGVjb3JhdGlvbiIsIkdyaWRMaW5rIiwicHJvcHMiLCJjbGFzc2VzIiwicGF0aCIsInRleHQiLCJ1c2VQYWdlc0NvbnRleHQiLCJnZXRDdXJyZW50UGFnZUluZGVjaWVzIiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsImhhbmRsZUxpbmtDbGljayIsIkxpbmsiLCJGb290ZXIiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEakM7QUFFTkMsV0FBSyxFQUFFLE1BRkQ7QUFHTkMsWUFBTSxFQUFFUCxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsS0FBYixHQUFxQixDQUh2QjtBQUlOQyxjQUFRLEVBQUUsVUFKSjtBQUtOQyxXQUFLLEVBQUU7QUFMRCxLQUQ2QjtBQVFyQ0MsY0FBVSxFQUFFO0FBQ1ZDLFlBQU0sRUFBRTtBQURFLEtBUnlCO0FBV3JDQyxZQUFRLEVBQUU7QUFDUkMsZ0JBQVUsRUFBRWQsS0FB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QUNSLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxrQkFBaEI7QUFBb0MsUUFBSSxFQUFFLGdCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsNkJBQWhCO0FBQStDLFFBQUksRUFBRSxnQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREosQ0EvQkYsQ0FERixFQXlDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6Q0YsRUEwQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUNGLENBREY7QUE4Q0QsQ0FsREQ7O0lBQU1nQixNO1VBQ1k3QixTLEVBQ2U4Qix3RTs7O01BRjNCRCxNO0FBb0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQwMzY1NDcwMDU5YmVlNzQyZmE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWN0QnV0dG9uIGZyb20gJy4uL0NvbnRhY3RCdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi9Db3B5cmlnaHQnXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsIC0gMSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICcjZmFmYWZhJyxcclxuICB9LFxyXG4gIGdyaWRDb2x1bW46IHtcclxuICAgIG1hcmdpbjogJzNlbScsXHJcbiAgfSxcclxuICBncmlkTGluazoge1xyXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgICAnJjp2aXNpdGVkJzoge1xyXG4gICAgICBjb2xvcjogJyNmYWZhZmEnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEdyaWRMaW5rID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgcGF0aCwgdGV4dCB9ID0gcHJvcHNcclxuICBjb25zdCB7IGdldEN1cnJlbnRQYWdlSW5kZWNpZXMsIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcbiAgY29uc3QgaGFuZGxlTGlua0NsaWNrID0gcGF0aCA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzKGdldEN1cnJlbnRQYWdlSW5kZWNpZXMocGF0aCkpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBpdGVtXHJcbiAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgaHJlZj17cGF0aH1cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUxpbmtDbGljayhwYXRoKVxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpbmt9XHJcbiAgICA+XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRm9vdGVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2l0ZURhdGEsIGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQ29sdW1ufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy8nfSB0ZXh0PXsnSG9tZSd9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvYWJvdXQnfSB0ZXh0PXsnQWJvdXQnfSAvPlxyXG4gICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9jb250YWN0J30gdGV4dD17J0NvbnRhY3QgVXMnfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQ29sdW1ufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9zZXJ2aWNlcy9wcml2YXRlJ30gdGV4dD17J1BlcnNvbmFsICYgRmFtaWx5J30gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9zZXJ2aWNlcy9jb21wYW55J30gdGV4dD17J0NvbXBhbmllcyAmIFRlYW1zJ30gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmtcclxuICAgICAgICAgICAgICAgIHBhdGg9eycvc2VydmljZXMvZXZlbnRzJ31cclxuICAgICAgICAgICAgICAgIHRleHQ9eydDb25mZXJlbmNlcyAmIEV2ZW50cyd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvcmV2b2x1dGlvbid9IHRleHQ9eydUaGUgUmV2b2x1dGlvbid9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvcmV2b2x1dGlvbid9IHRleHQ9eydWUiBCbG9nJ30gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQ29sdW1ufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+VlJGdW5UZWFtPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsndGVsOjk3MjUyODIyODY0MCd9IHRleHQ9eydUaGUgUmV2b2x1dGlvbid9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eydtYWlsdG86c3R1ZGlvQHZyZnVudGVhbS5jb20nfSB0ZXh0PXsnVGhlIFJldm9sdXRpb24nfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPENvbnRhY3RCdXR0b24gLz5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=