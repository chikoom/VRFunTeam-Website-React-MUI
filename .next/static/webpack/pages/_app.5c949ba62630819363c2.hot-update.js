webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/ContactButton.jsx":
/*!**********************************!*\
  !*** ./src/ui/ContactButton.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_lab_SpeedDial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/SpeedDial */ "./node_modules/@material-ui/lab/esm/SpeedDial/index.js");
/* harmony import */ var _material_ui_lab_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/SpeedDialIcon */ "./node_modules/@material-ui/lab/esm/SpeedDialIcon/index.js");
/* harmony import */ var _material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/SpeedDialAction */ "./node_modules/@material-ui/lab/esm/SpeedDialAction/index.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "./node_modules/@material-ui/icons/WhatsApp.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Call */ "./node_modules/@material-ui/icons/Call.js");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\ContactButton.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
  return {
    root: {
      height: 380,
      transform: 'translateZ(0px)',
      flexGrow: 1,
      position: 'absolute',
      bottom: '0',
      right: '0'
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    socialGrid: {
      position: 'absolute',
      bottom: '1em',
      right: '1em',
      width: 'auto'
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      color: '#fafafa'
    }
  };
});
function ContactButton() {
  _s();

  // const pageUrl = document.querySelector('link[rel=canonical]')
  //   ? document.querySelector('link[rel=canonical]').href
  //   : document.location.href
  var pageUrl = 'https://www.funteamvr.com';
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      snakOpen = _useState2[0],
      setSnakOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hidden = _useState3[0],
      setHidden = _useState3[1];

  var theme = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__["useTheme"])();
  var matches = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__["useMediaQuery"])(theme.breakpoints.down('md'));

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleShare = function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Hello World',
        url: window.location.href
      }).then(function () {
        return console.log('Successful share');
      })["catch"](function (error) {
        return console.log('Error sharing:', error);
      });
    }
  };

  var handleCopy = function handleCopy() {
    navigator.clipboard.writeText(pageUrl).then(function () {
      document.execCommand('copy');
      setSnakOpen(true);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, matches ? __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_SpeedDial__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ariaLabel: "SpeedDial tooltip example",
    className: classes.speedDial,
    hidden: hidden,
    icon: __jsx(_material_ui_lab_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }),
    onClose: handleClose,
    onOpen: handleOpen,
    open: open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, navigator.clipboard ? __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "Copy-Link",
    icon: __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 23
      }
    }),
    tooltipTitle: "CopyLink",
    tooltipOpen: true,
    onClick: handleCopy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }) : null, navigator.share ? __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "Share",
    icon: __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 23
      }
    }),
    tooltipTitle: "Share",
    tooltipOpen: true,
    onClick: handleShare,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }) : null, __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "Call",
    icon: __jsx(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }),
    tooltipTitle: "Call",
    tooltipOpen: true,
    onClick: handleClose,
    FabProps: {
      component: 'a',
      href: 'tel:0528228640'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "WhatsApp",
    icon: __jsx(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }),
    tooltipTitle: "WhatsApp",
    tooltipOpen: true,
    onClick: handleClose,
    FabProps: {
      component: 'a',
      href: 'https://wa.me/972528228640'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    open: snakOpen,
    autoHideDuration: 2000,
    onClose: function onClose() {
      return setSnakOpen(false);
    },
    message: "Copied: ".concat(pageUrl),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  })) : __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    className: classes.socialGrid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "aria-label": "facebook",
    component: 'a',
    href: 'https://facebook.com',
    target: '_blank',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.socialIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "aria-label": "instagram",
    component: 'a',
    href: 'https://instagram.com',
    target: '_blank',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.socialIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "aria-label": "whatsapp",
    component: 'a',
    href: 'https://wa.me/972528228640',
    target: '_blank',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.socialIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  })))));
}

_s(ContactButton, "VYJCFB5GrFmk3ouSDTmaCEm/YPI=", false, function () {
  return [useStyles, _material_ui_core___WEBPACK_IMPORTED_MODULE_14__["useTheme"], _material_ui_core___WEBPACK_IMPORTED_MODULE_14__["useMediaQuery"]];
});

_c = ContactButton;

var _c;

$RefreshReg$(_c, "ContactButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0NvbnRhY3RCdXR0b24uanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJzcGVlZERpYWwiLCJzcGFjaW5nIiwic29jaWFsR3JpZCIsIndpZHRoIiwic29jaWFsSWNvbiIsImNvbG9yIiwiQ29udGFjdEJ1dHRvbiIsInBhZ2VVcmwiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInNuYWtPcGVuIiwic2V0U25ha09wZW4iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ1c2VUaGVtZSIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hhcmUiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsInRpdGxlIiwiZG9jdW1lbnQiLCJ0ZXh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUNvcHkiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJleGVjQ29tbWFuZCIsImNvbXBvbmVudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsR0FESjtBQUVKQyxlQUFTLEVBQUUsaUJBRlA7QUFHSkMsY0FBUSxF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UyxFQUFFTSxPQUFPLENBQUNKLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBU0UsTUFBQyxvRUFBRDtBQUNFLGtCQUFXLFdBRGI7QUFFRSxhQUFTLEVBQUUsR0FGYjtBQUdFLFFBQUksRUFBRSx1QkFIUjtBQUlFLFVBQU0sRUFBRSxRQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLG9FQUFEO0FBQWUsYUFBUyxFQUFFSSxPQUFPLENBQUNKLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQVRGLEVBaUJFLE1BQUMsb0VBQUQ7QUFDRSxrQkFBVyxVQURiO0FBRUUsYUFBUyxFQUFFLEdBRmI7QUFHRSxRQUFJLEVBQUUsNEJBSFI7QUFJRSxVQUFNLEVBQUUsUUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxtRUFBRDtBQUFjLGFBQVMsRUFBRUksT0FBTyxDQUFDSixVQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FqQkYsQ0FERixDQXRFSixDQURGO0FBc0dEOztHQTlJdUJFLGE7VUFLTmhCLFMsRUFJRjBCLDRELEVBQ0VFLGlFOzs7S0FWTVosYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVjOTQ5YmE2MjYzMDgxOTM2M2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJ1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBTcGVlZERpYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9TcGVlZERpYWwnXHJcbmltcG9ydCBTcGVlZERpYWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU3BlZWREaWFsSWNvbidcclxuaW1wb3J0IFNwZWVkRGlhbEFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NwZWVkRGlhbEFjdGlvbidcclxuaW1wb3J0IFNoYXJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmUnXHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJ1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJ1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcCdcclxuaW1wb3J0IENhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYWxsJ1xyXG5pbXBvcnQgTGlua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmsnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlLydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6IDM4MCxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMHB4KScsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAnMCcsXHJcbiAgICByaWdodDogJzAnLFxyXG4gIH0sXHJcbiAgc3BlZWREaWFsOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgc29jaWFsR3JpZDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206ICcxZW0nLFxyXG4gICAgcmlnaHQ6ICcxZW0nLFxyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG4gIHNvY2lhbEljb246IHtcclxuICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0QnV0dG9uKCkge1xyXG4gIC8vIGNvbnN0IHBhZ2VVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1jYW5vbmljYWxdJylcclxuICAvLyAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9Y2Fub25pY2FsXScpLmhyZWZcclxuICAvLyAgIDogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxyXG4gIGNvbnN0IHBhZ2VVcmwgPSAnaHR0cHM6Ly93d3cuZnVudGVhbXZyLmNvbSdcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc25ha09wZW4sIHNldFNuYWtPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hhcmUgPSAoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XHJcbiAgICAgIG5hdmlnYXRvclxyXG4gICAgICAgIC5zaGFyZSh7XHJcbiAgICAgICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXHJcbiAgICAgICAgICB0ZXh0OiAnSGVsbG8gV29ybGQnLFxyXG4gICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIHNoYXJlJykpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nOicsIGVycm9yKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwYWdlVXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICBzZXRTbmFrT3Blbih0cnVlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWF0Y2hlcyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxCYWNrZHJvcCBvcGVuPXtvcGVufSAvPlxyXG4gICAgICAgICAgPFNwZWVkRGlhbFxyXG4gICAgICAgICAgICBhcmlhTGFiZWw9J1NwZWVkRGlhbCB0b29sdGlwIGV4YW1wbGUnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGVlZERpYWx9XHJcbiAgICAgICAgICAgIGhpZGRlbj17aGlkZGVufVxyXG4gICAgICAgICAgICBpY29uPXs8U3BlZWREaWFsSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25hdmlnYXRvci5jbGlwYm9hcmQgPyAoXHJcbiAgICAgICAgICAgICAgPFNwZWVkRGlhbEFjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PSdDb3B5LUxpbmsnXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8TGlua0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGU9J0NvcHlMaW5rJ1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcE9wZW5cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvcHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7bmF2aWdhdG9yLnNoYXJlID8gKFxyXG4gICAgICAgICAgICAgIDxTcGVlZERpYWxBY3Rpb25cclxuICAgICAgICAgICAgICAgIGtleT0nU2hhcmUnXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8U2hhcmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlPSdTaGFyZSdcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBPcGVuXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaGFyZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIDxTcGVlZERpYWxBY3Rpb25cclxuICAgICAgICAgICAgICBrZXk9J0NhbGwnXHJcbiAgICAgICAgICAgICAgaWNvbj17PENhbGxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIHRvb2x0aXBUaXRsZT0nQ2FsbCdcclxuICAgICAgICAgICAgICB0b29sdGlwT3BlblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIEZhYlByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdhJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICd0ZWw6MDUyODIyODY0MCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxTcGVlZERpYWxBY3Rpb25cclxuICAgICAgICAgICAgICBrZXk9J1doYXRzQXBwJ1xyXG4gICAgICAgICAgICAgIGljb249ezxXaGF0c0FwcEljb24gLz59XHJcbiAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlPSdXaGF0c0FwcCdcclxuICAgICAgICAgICAgICB0b29sdGlwT3BlblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIEZhYlByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdhJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3dhLm1lLzk3MjUyODIyODY0MCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3BlZWREaWFsPlxyXG5cclxuICAgICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb3Blbj17c25ha09wZW59XHJcbiAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNuYWtPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgbWVzc2FnZT17YENvcGllZDogJHtwYWdlVXJsfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsR3JpZH0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2ZhY2Vib29rJ1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17J2EnfVxyXG4gICAgICAgICAgICAgIGhyZWY9eydodHRwczovL2ZhY2Vib29rLmNvbSd9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdpbnN0YWdyYW0nXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXsnYSd9XHJcbiAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vaW5zdGFncmFtLmNvbSd9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxJY29ufSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nd2hhdHNhcHAnXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXsnYSd9XHJcbiAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vd2EubWUvOTcyNTI4MjI4NjQwJ31cclxuICAgICAgICAgICAgICB0YXJnZXQ9eydfYmxhbmsnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFdoYXRzQXBwSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9