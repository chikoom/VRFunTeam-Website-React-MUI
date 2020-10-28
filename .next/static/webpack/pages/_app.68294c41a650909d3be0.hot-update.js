webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/LanguageListItem.jsx":
/*!*************************************!*\
  !*** ./src/ui/LanguageListItem.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _LanguageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LanguageButton */ "./src/ui/LanguageButton.jsx");
/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Translate */ "./node_modules/@material-ui/icons/Translate.js");
/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\LanguageListItem.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    langListItem: {
      fontSize: '1em'
    }
  };
});
var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();

var LanguageListItem = function LanguageListItem(props) {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    style: {
      direction: theme.direction
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.langListItem,
    id: "switch-list-label-dark",
    disableTypography: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Language"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_LanguageButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })));
};

_s(LanguageListItem, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LanguageListItem;
/* harmony default export */ __webpack_exports__["default"] = (LanguageListItem);

var _c;

$RefreshReg$(_c, "LanguageListItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0xhbmd1YWdlTGlzdEl0ZW0uanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxhbmdMaXN0SXRlbSIsImZvbnRTaXplIiwidXNlVGhlbWUiLCJMYW5ndWFnZUxpc3RJdGVtIiwicHJvcHMiLCJjbGFzc2VzIiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLGdCQUFZLEVBQUU7QUFDWkMsY0FBUSxFQUFFO0FBREU7QUFEdUIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFLQSxJQUFNRixLQUFLLEdBQUdHLGtFQUFRLEVBQXRCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ2hDLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUVBLFNBQ0UsTUFBQywwREFBRDtBQUFVLFNBQUssRUFBRTtBQUFDUyxlQUFTLEVBQUVQLEtBQUssQ0FBQ087QUFBbEIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLDhEQUFEO0FBQ0UsYUFBUyxFQUFFRCxPQUFPLENBQUNMLFlBRHJCO0FBRUUsTUFBRSxFQUFDLHdCQUZMO0FBR0UscUJBQWlCLE1BSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFXRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQVhGLENBREY7QUFtQkQsQ0F0QkQ7O0dBQU1HLGdCO1VBQ1lOLFM7OztLQURaTSxnQjtBQXdCU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ODI5NGM0MWE2NTA5MDlkM2JlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiwgTGlzdEl0ZW1UZXh0LCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgTGFuZ3VhZ2VCdXR0b24gZnJvbSAnLi9MYW5ndWFnZUJ1dHRvbidcclxuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGFuZ0xpc3RJdGVtOiB7XHJcbiAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgfSxcclxufSkpXHJcbmNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG5cclxuY29uc3QgTGFuZ3VhZ2VMaXN0SXRlbSA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbSBzdHlsZT17e2RpcmVjdGlvbjogdGhlbWUuZGlyZWN0aW9ufX0+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPFRyYW5zbGF0ZUljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ0xpc3RJdGVtfVxyXG4gICAgICAgIGlkPSdzd2l0Y2gtbGlzdC1sYWJlbC1kYXJrJ1xyXG4gICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5XHJcbiAgICAgID5cclxuICAgICAgICBMYW5ndWFnZVxyXG4gICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICA8TGFuZ3VhZ2VCdXR0b24gLz5cclxuICBcclxuICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VMaXN0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=