webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/Header/TabsMenu.jsx":
/*!************************************!*\
  !*** ./src/ui/Header/TabsMenu.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _DarkModeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DarkModeButton */ "./src/ui/DarkModeButton.jsx");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _functions_gtag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/gtag */ "./src/functions/gtag.js");
/* harmony import */ var _LanguageButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LanguageButton */ "./src/ui/LanguageButton.jsx");



var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Header\\TabsMenu.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
      marginBottom: '3em'
    }),
    tabContainer: {
      marginLeft: 'auto'
    },
    tab: _objectSpread(_objectSpread({}, theme.typography.tab), {}, {
      minWidth: 10,
      marginLeft: '10px'
    }),
    button: _objectSpread(_objectSpread({}, theme.typography.estimate), {}, {
      borderRadius: '50px',
      marginLeft: '50px',
      color: 'white'
    }),
    menu: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      borderRadius: '0px',
      zIndex: 1302
    },
    menuItem: _objectSpread(_objectSpread({}, theme.typography.tab), {}, {
      opacity: 0.7,
      '&:hover': {
        opacity: 1
      },
      '&.Mui-selected': {
        opacity: 1
      }
    })
  };
});

var TabsMenu = function TabsMenu(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var classes = useStyles();

  var _usePagesContext = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])(),
      pages = _usePagesContext.pages,
      currentPageIndecies = _usePagesContext.currentPageIndecies,
      setCurrentPageIndecies = _usePagesContext.setCurrentPageIndecies;

  var handleTabChange = function handleTabChange(e, value) {// setCurrentPageIndecies([value, null])
  };

  var handleMenuClick = function handleMenuClick(event) {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  var handleMenuClose = function handleMenuClose(event) {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpen(false);
    }
  };

  var handleSubMenuClick = function handleSubMenuClick(event, parentIndex, index) {
    setAnchorEl(null);
    setMenuOpen(false); // setCurrentPageIndecies([parentIndex, index])
  };

  var _useLanguageContext = useLanguageContext(),
      siteData = _useLanguageContext.siteData;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    value: currentPageIndecies[0],
    onChange: handleTabChange,
    className: classes.tabContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, pages.map(function (page) {
    var hasChildren = page.children.length;
    return __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Tab"], {
      "aria-owns": hasChildren && anchorEl ? "menu-".concat(page.name) : undefined,
      "aria-haspopup": hasChildren && anchorEl ? true : undefined,
      onMouseOver: hasChildren ? function (event) {
        return handleMenuClick(event);
      } : undefined,
      label: page.name,
      className: classes.tab,
      component: _Link__WEBPACK_IMPORTED_MODULE_3__["default"],
      href: page.path,
      key: page.path,
      onClick: function onClick() {
        return Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_7__["event"])({
          category: 'Menu Buttons',
          action: "Desktop Tabs ".concat(page.name, " Click"),
          label: 'Website Actions',
          value: '0'
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    });
  })), pages.map(function (page, index) {
    var hasChildren = page.children.length;
    return hasChildren && anchorEl ? __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Popper"], {
      open: menuOpen,
      anchorEl: anchorEl,
      role: undefined,
      transition: true,
      disablePortal: true,
      key: page.path,
      keepMounted: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, function (_ref) {
      var TransitionProps = _ref.TransitionProps,
          placement = _ref.placement;
      return __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Grow"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
        style: {
          transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      }), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Paper"], {
        classes: {
          root: classes.menu
        },
        elevation: 0,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
        onClickAway: handleMenuClose,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 19
        }
      }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
        disablePadding: true,
        onMouseLeave: handleMenuClose,
        autoFocusItem: false,
        id: "menu-".concat(page.name),
        onKeyDown: handleListKeyDown,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, page.children.map(function (childPage, childIndex) {
        return __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
          key: childPage.path,
          onClick: function onClick(event) {
            handleMenuClose();
            handleTabChange(event, index);
            handleSubMenuClick(event, index, childIndex);
            Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_7__["event"])({
              category: 'Menu Buttons',
              action: "Desktop Tabs ".concat(childPage.name, " Click"),
              label: 'Website Actions',
              value: '0'
            });
          },
          component: _Link__WEBPACK_IMPORTED_MODULE_3__["default"],
          href: childPage.path,
          classes: {
            root: classes.menuItem
          },
          selected: childIndex === currentPageIndecies[1] && index === currentPageIndecies[0],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }
        }, childPage.name);
      })))));
    }) : '';
  }), __jsx(_DarkModeButton__WEBPACK_IMPORTED_MODULE_4__["DarkModeButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }), __jsx(_LanguageButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    component: _Link__WEBPACK_IMPORTED_MODULE_3__["default"],
    href: "/estimate",
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: function onClick() {
      return Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_7__["event"])({
        category: 'Estimate',
        action: 'Desktop Tabs Special Estimate Click',
        label: 'Website Actions',
        value: '0'
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, siteData.priceEstimate));
};

_s(TabsMenu, "2vSnH0iIFyXsVa5RRdI5y0kiOIo=", true, function () {
  return [useStyles, _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"]];
});

_c = TabsMenu;
/* harmony default export */ __webpack_exports__["default"] = (TabsMenu);

var _c;

$RefreshReg$(_c, "TabsMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9UYWJzTWVudS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwidHlwb2dyYXBoeSIsIm1pbldpZHRoIiwiYnV0dG9uIiwiZXN0aW1hdGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ6SW5kZXgiLCJtZW51SXRlbSIsIm9wYWNpdHkiLCJUYWJzTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJwYWdlcyIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZSIsInZhbHVlIiwiaGFuZGxlTWVudUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Yk1lbnVDbGljayIsInBhcmVudEluZGV4IiwiaW5kZXgiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsIm1hcCIsInBhZ2UiLCJoYXNDaGlsZHJlbiIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmFtZSIsInVuZGVmaW5lZCIsIkxpbmsiLCJwYXRoIiwiR0FldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJyb290IiwiY2hpbGRQYWdl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QW1HRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuR0YsRUFvR0UsTUFBQyx5REFBRDtBQUNFLGFBQVMsRUFBRUUsNkNBRGI7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsU0FBSyxFQUFDLFdBSlI7QUFLRSxhQUFTLEVBQUUzQixPQUFPLENBQUNuQixNQUxyQjtBQU1FLFdBQU8sRUFBRTtBQUFBLGFBQ1BnRCw2REFBTyxDQUFDO0FBQ05DLGdCQUFRLEVBQUUsVUFESjtBQUVOQyxjQUFNLEVBQUUscUNBRkY7QUFHTkMsYUFBSyxFQUFFLGlCQUhEO0FBSU56QixhQUFLLEVBQUU7QUFKRCxPQUFELENBREE7QUFBQSxLQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlR1ksUUFBUSxDQUFDb0IsYUFmWixDQXBHRixDQURGO0FBd0hELENBMUpEOztHQUFNOUMsUTtVQUlZeEIsUyxFQUtaZ0Msc0U7OztLQVRBUixRO0FBNEpTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhmMGI3OGRmZGNhMmM5ZGMxMDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuaW1wb3J0IHsgRGFya01vZGVCdXR0b24gfSBmcm9tICcuLi9EYXJrTW9kZUJ1dHRvbidcclxuaW1wb3J0IHtcclxuICBUYWJzLFxyXG4gIFRhYixcclxuICBCdXR0b24sXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBNZW51TGlzdCxcclxuICBDbGlja0F3YXlMaXN0ZW5lcixcclxuICBHcm93LFxyXG4gIFBhcGVyLFxyXG4gIFBvcHBlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS8nXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IHsgZXZlbnQgYXMgR0FldmVudCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9ndGFnJ1xyXG5pbXBvcnQgTGFuZ3VhZ2VCdXR0b24gZnJvbSAnLi4vTGFuZ3VhZ2VCdXR0b24nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBtYXJnaW5Cb3R0b206ICczZW0nLFxyXG4gIH0sXHJcbiAgdGFiQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkudGFiLFxyXG4gICAgbWluV2lkdGg6IDEwLFxyXG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmVzdGltYXRlLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICB6SW5kZXg6IDEzMDIsXHJcbiAgfSxcclxuICBtZW51SXRlbToge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXHJcbiAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgVGFic01lbnUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHtcclxuICAgIHBhZ2VzLFxyXG4gICAgY3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgLy8gc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbdmFsdWUsIG51bGxdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgc2V0TWVudU9wZW4odHJ1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVMaXN0S2V5RG93biA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Yk1lbnVDbGljayA9IChldmVudCwgcGFyZW50SW5kZXgsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICAvLyBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFtwYXJlbnRJbmRleCwgaW5kZXhdKVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIHZhbHVlPXtjdXJyZW50UGFnZUluZGVjaWVzWzBdfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYkNvbnRhaW5lcn1cclxuICAgICAgPlxyXG4gICAgICAgIHtwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHBhZ2UuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgYXJpYS1vd25zPXtcclxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuICYmIGFuY2hvckVsID8gYG1lbnUtJHtwYWdlLm5hbWV9YCA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPXtoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IHRydWUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e1xyXG4gICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPyBldmVudCA9PiBoYW5kbGVNZW51Q2xpY2soZXZlbnQpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtwYWdlLm5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgaHJlZj17cGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgIGtleT17cGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IGBEZXNrdG9wIFRhYnMgJHtwYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvVGFicz5cclxuICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHBhZ2UuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoaWxkcmVuICYmIGFuY2hvckVsID8gKFxyXG4gICAgICAgICAgPFBvcHBlclxyXG4gICAgICAgICAgICBvcGVuPXttZW51T3Blbn1cclxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxyXG4gICAgICAgICAgICBrZXk9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcclxuICAgICAgICAgICAgICA8R3Jvd1xyXG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLm1lbnUgfX0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVNZW51Q2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTWVudUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YG1lbnUtJHtwYWdlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UuY2hpbGRyZW4ubWFwKChjaGlsZFBhZ2UsIGNoaWxkSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNZW51Q2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGFiQ2hhbmdlKGV2ZW50LCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Yk1lbnVDbGljayhldmVudCwgaW5kZXgsIGNoaWxkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGBEZXNrdG9wIFRhYnMgJHtjaGlsZFBhZ2UubmFtZX0gQ2xpY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dlYnNpdGUgQWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2NoaWxkUGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5tZW51SXRlbSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXggPT09IGN1cnJlbnRQYWdlSW5kZWNpZXNbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkUGFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Qb3BwZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICcnXHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgICAgPERhcmtNb2RlQnV0dG9uIC8+XHJcbiAgICAgIDxMYW5ndWFnZUJ1dHRvbiAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgIGhyZWY9Jy9lc3RpbWF0ZSdcclxuICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdFc3RpbWF0ZScsXHJcbiAgICAgICAgICAgIGFjdGlvbjogJ0Rlc2t0b3AgVGFicyBTcGVjaWFsIEVzdGltYXRlIENsaWNrJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7c2l0ZURhdGEucHJpY2VFc3RpbWF0ZX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnNNZW51XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=