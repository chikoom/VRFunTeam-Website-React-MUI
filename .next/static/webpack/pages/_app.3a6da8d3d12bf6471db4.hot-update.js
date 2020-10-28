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
  var theme = useTheme();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    style: {
      direction: theme.direction
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.darkListItem,
    id: "switch-list-label-dark",
    disableTypography: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, darkTheme.isDarkTheme ? 'Light' : 'Dark'), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 9
    }
  })));
};

_s(DarkModeListSwitch, "bteglK7T4RYZEx0xHcBPN3HUfOo=", true, function () {
  return [useStyles, _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["useUpdateTheme"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0RhcmtNb2RlTGlzdFN3aXRjaC5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGFya0xpc3RJdGVtIiwiZm9udFNpemUiLCJEYXJrTW9kZUxpc3RTd2l0Y2giLCJwcm9wcyIsImNsYXNzZXMiLCJkYXJrVGhlbWUiLCJ1c2VVcGRhdGVUaGVtZSIsInVzZVRoZW1lIiwiZGlyZWN0aW9uIiwiaXNEYXJrVGhlbWUiLCJ0b2dnbGVUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxnQkFBWSxFQUFFO0FBQ1pDLGNBQVEsRUFBRTtBQURFO0FBRHVCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQU1BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ2xDLE1BQU1DLE9BQU8sR0FBR1AsU0FBUyxFQUF6QjtBQUNBLE1BQU1RLFNBQVMsR0FBR0MsNkVBQWMsRUFBaEM7QUFDQSxNQUFNUCxLQUFLLEdBQUdRLFFBQVEsRUFBdEI7QUFDQSxTQUNFLE1BQUMsMERBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFVCxLQUFLLENBQUNTO0FBQWxCLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRUosT0FBTyxDQUFDSixZQURyQjtBQUVFLE1BQUUsRUFBQyx3QkFGTDtBQUdFLHFCQUFpQixNQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dLLFNBQVMsQ0FBQ0ksV0FBVixHQUF3QixPQUF4QixHQUFrQyxNQUxyQyxDQUpGLEVBV0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsWUFBUSxFQUFFSixTQUFTLENBQUNLLFdBRnRCO0FBR0UsV0FBTyxFQUFFTCxTQUFTLENBQUNJLFdBSHJCO0FBSUUsY0FBVSxFQUFFO0FBQUUseUJBQW1CO0FBQXJCLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsQ0FERjtBQXNCRCxDQTFCRDs7R0FBTVAsa0I7VUFDWUwsUyxFQUNFUyxxRTs7O0tBRmRKLGtCO0FBMkJTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNhNmRhOGQzZDEyYmY2NDcxZGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFN3aXRjaCxcclxuICBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nXHJcbmltcG9ydCBCcmlnaHRuZXNzNE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczRPdXRsaW5lZCdcclxuaW1wb3J0IHsgdXNlVXBkYXRlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZGFya0xpc3RJdGVtOiB7XHJcbiAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBEYXJrTW9kZUxpc3RTd2l0Y2ggPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgZGFya1RoZW1lID0gdXNlVXBkYXRlVGhlbWUoKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW0gc3R5bGU9e3tkaXJlY3Rpb246IHRoZW1lLmRpcmVjdGlvbn19PlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxCcmlnaHRuZXNzNE91dGxpbmVkSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXJrTGlzdEl0ZW19XHJcbiAgICAgICAgaWQ9J3N3aXRjaC1saXN0LWxhYmVsLWRhcmsnXHJcbiAgICAgICAgZGlzYWJsZVR5cG9ncmFwaHlcclxuICAgICAgPlxyXG4gICAgICAgIHtkYXJrVGhlbWUuaXNEYXJrVGhlbWUgPyAnTGlnaHQnIDogJ0RhcmsnfVxyXG4gICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgIGVkZ2U9J2VuZCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtkYXJrVGhlbWUudG9nZ2xlVGhlbWV9XHJcbiAgICAgICAgICBjaGVja2VkPXtkYXJrVGhlbWUuaXNEYXJrVGhlbWV9XHJcbiAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsbGVkYnknOiAnc3dpdGNoLWxpc3QtbGFiZWwtZGFyaycgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVMaXN0U3dpdGNoXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=