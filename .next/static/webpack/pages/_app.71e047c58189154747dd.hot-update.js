webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/DarkModeListSwitch.jsx":
/*!***************************************!*\
  !*** ./src/ui/DarkModeListSwitch.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Brightness4Outlined */ "./node_modules/@material-ui/icons/Brightness4Outlined.js");
/* harmony import */ var _material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\DarkModeListSwitch.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    darkListItem: {
      fontSize: '1em'
    }
  };
});

var DarkModeListSwitch = function DarkModeListSwitch(props) {
  _s();

  var classes = useStyles();
  var darkTheme = Object(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["useUpdateTheme"])();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    style: {
      direction: theme.direction
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.darkListItem,
    id: "switch-list-label-dark",
    disableTypography: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, darkTheme.isDarkTheme ? 'Light' : 'Dark'), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    edge: "end",
    onChange: darkTheme.toggleTheme,
    checked: darkTheme.isDarkTheme,
    inputProps: {
      'aria-labelledby': 'switch-list-label-dark'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

_s(DarkModeListSwitch, "bteglK7T4RYZEx0xHcBPN3HUfOo=", false, function () {
  return [useStyles, _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["useUpdateTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = DarkModeListSwitch;
/* harmony default export */ __webpack_exports__["default"] = (DarkModeListSwitch);

var _c;

$RefreshReg$(_c, "DarkModeListSwitch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0RhcmtNb2RlTGlzdFN3aXRjaC5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGFya0xpc3RJdGVtIiwiZm9udFNpemUiLCJEYXJrTW9kZUxpc3RTd2l0Y2giLCJwcm9wcyIsImNsYXNzZXMiLCJkYXJrVGhlbWUiLCJ1c2VVcGRhdGVUaGVtZSIsInVzZVRoZW1lIiwiZGlyZWN0aW9uIiwiaXNEYXJrVGhlbWUiLCJ0b2dnbGVUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxnQkFBWSxFQUFFO0FBQ1pDLGNBQVEsRUFBRTtBQURFO0FBRHVCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQU1BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ2xDLE1BQU1DLE9BQU8sR0FBR1AsU0FBUyxFQUF6QjtBQUNBLE1BQU1RLFNBQVMsR0FBR0MsNkVBQWMsRUFBaEM7QUFDQSxNQUFNUCxLQUFLLEdBQUdRLGtFQUFRLEVBQXRCO0FBQ0EsU0FDRSxNQUFDLDBEQUFEO0FBQVUsU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRVQsS0FBSyxDQUFDUztBQUFsQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsOERBQUQ7QUFDRSxhQUFTLEVBQUVKLE9BQU8sQ0FBQ0osWUFEckI7QUFFRSxNQUFFLEVBQUMsd0JBRkw7QUFHRSxxQkFBaUIsTUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHSyxTQUFTLENBQUNJLFdBQVYsR0FBd0IsT0FBeEIsR0FBa0MsTUFMckMsQ0FKRixFQVdFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUMsS0FEUDtBQUVFLFlBQVEsRUFBRUosU0FBUyxDQUFDSyxXQUZ0QjtBQUdFLFdBQU8sRUFBRUwsU0FBUyxDQUFDSSxXQUhyQjtBQUlFLGNBQVUsRUFBRTtBQUFFLHlCQUFtQjtBQUFyQixLQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLENBREY7QUFzQkQsQ0ExQkQ7O0dBQU1QLGtCO1VBQ1lMLFMsRUFDRVMscUUsRUFDSkMsMEQ7OztLQUhWTCxrQjtBQTJCU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MWUwNDdjNTgxODkxNTQ3NDdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQge1xyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBTd2l0Y2gsXHJcbiAgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJ1xyXG5pbXBvcnQgQnJpZ2h0bmVzczRPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3M0T3V0bGluZWQnXHJcbmltcG9ydCB7IHVzZVVwZGF0ZVRoZW1lIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGRhcmtMaXN0SXRlbToge1xyXG4gICAgZm9udFNpemU6ICcxZW0nLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgRGFya01vZGVMaXN0U3dpdGNoID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGRhcmtUaGVtZSA9IHVzZVVwZGF0ZVRoZW1lKClcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RJdGVtIHN0eWxlPXt7ZGlyZWN0aW9uOiB0aGVtZS5kaXJlY3Rpb259fT5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QnJpZ2h0bmVzczRPdXRsaW5lZEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGFya0xpc3RJdGVtfVxyXG4gICAgICAgIGlkPSdzd2l0Y2gtbGlzdC1sYWJlbC1kYXJrJ1xyXG4gICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5XHJcbiAgICAgID5cclxuICAgICAgICB7ZGFya1RoZW1lLmlzRGFya1RoZW1lID8gJ0xpZ2h0JyA6ICdEYXJrJ31cclxuICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICBlZGdlPSdlbmQnXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZGFya1RoZW1lLnRvZ2dsZVRoZW1lfVxyXG4gICAgICAgICAgY2hlY2tlZD17ZGFya1RoZW1lLmlzRGFya1RoZW1lfVxyXG4gICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbGxlZGJ5JzogJ3N3aXRjaC1saXN0LWxhYmVsLWRhcmsnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERhcmtNb2RlTGlzdFN3aXRjaFxyXG4iXSwic291cmNlUm9vdCI6IiJ9