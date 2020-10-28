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
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");



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

  var _useLanguageContext = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_9__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    value: currentPageIndecies[0],
    onChange: handleTabChange,
    className: classes.tabContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      label: page.nameLang,
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
        lineNumber: 102,
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
        lineNumber: 130,
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
          lineNumber: 140,
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
          lineNumber: 147,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
        onClickAway: handleMenuClose,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
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
          lineNumber: 149,
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
            lineNumber: 157,
            columnNumber: 25
          }
        }, childPage.name);
      })))));
    }) : '';
  }), __jsx(_DarkModeButton__WEBPACK_IMPORTED_MODULE_4__["DarkModeButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }), __jsx(_LanguageButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 193,
      columnNumber: 7
    }
  }, siteData.priceEstimate));
};

_s(TabsMenu, "1FPOZQdzCUDaEIWyZwZfEmdejuY=", false, function () {
  return [useStyles, _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"], _contexts_LangContext__WEBPACK_IMPORTED_MODULE_9__["useLanguageContext"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9UYWJzTWVudS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwidHlwb2dyYXBoeSIsIm1pbldpZHRoIiwiYnV0dG9uIiwiZXN0aW1hdGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ6SW5kZXgiLCJtZW51SXRlbSIsIm9wYWNpdHkiLCJUYWJzTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJwYWdlcyIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZSIsInZhbHVlIiwiaGFuZGxlTWVudUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Yk1lbnVDbGljayIsInBhcmVudEluZGV4IiwiaW5kZXgiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFwIiwicGFnZSIsImhhc0NoaWxkcmVuIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuYW1lIiwidW5kZWZpbmVkIiwibmFtZUxhbmciLCJMaW5rIiwicGF0aCIsIkdBZXZlbnQiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3Jp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SCxFQWtHRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsR0YsRUFtR0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkdGLEVBb0dFLE1BQUMseURBQUQ7QUFDRSxhQUFTLEVBQUVHLDZDQURiO0FBRUUsUUFBSSxFQUFDLFdBRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFNBQUssRUFBQyxXQUpSO0FBS0UsYUFBUyxFQUFFN0IsT0FBTyxDQUFDbkIsTUFMckI7QUFNRSxXQUFPLEVBQUU7QUFBQSxhQUNQa0QsNkRBQU8sQ0FBQztBQUNOQyxnQkFBUSxFQUFFLFVBREo7QUFFTkMsY0FBTSxFQUFFLHFDQUZGO0FBR05DLGFBQUssRUFBRSxpQkFIRDtBQUlOM0IsYUFBSyxFQUFFO0FBSkQsT0FBRCxDQURBO0FBQUEsS0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUdZLFFBQVEsQ0FBQ3NCLGFBZlosQ0FwR0YsQ0FERjtBQXdIRCxDQTFKRDs7R0FBTWhELFE7VUFJWXhCLFMsRUFLWmdDLHNFLEVBd0IyQmlCLHdFOzs7S0FqQzNCekIsUTtBQTRKU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYWMxYzVkYTdmM2RlMWFmNWM0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnXHJcbmltcG9ydCB7IERhcmtNb2RlQnV0dG9uIH0gZnJvbSAnLi4vRGFya01vZGVCdXR0b24nXHJcbmltcG9ydCB7XHJcbiAgVGFicyxcclxuICBUYWIsXHJcbiAgQnV0dG9uLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTWVudUl0ZW0sXHJcbiAgTWVudUxpc3QsXHJcbiAgQ2xpY2tBd2F5TGlzdGVuZXIsXHJcbiAgR3JvdyxcclxuICBQYXBlcixcclxuICBQb3BwZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCB7IGV2ZW50IGFzIEdBZXZlbnQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ3RhZydcclxuaW1wb3J0IExhbmd1YWdlQnV0dG9uIGZyb20gJy4uL0xhbmd1YWdlQnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0b29sYmFyTWFyZ2luOiB7XHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIG1hcmdpbkJvdHRvbTogJzNlbScsXHJcbiAgfSxcclxuICB0YWJDb250YWluZXI6IHtcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICB9LFxyXG4gIHRhYjoge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXHJcbiAgICBtaW5XaWR0aDogMTAsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuZXN0aW1hdGUsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MHB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICc1MHB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbiAgbWVudToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMHB4JyxcclxuICAgIHpJbmRleDogMTMwMixcclxuICB9LFxyXG4gIG1lbnVJdGVtOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LnRhYixcclxuICAgIG9wYWNpdHk6IDAuNyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSxcclxuICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBUYWJzTWVudSA9IHByb3BzID0+IHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qge1xyXG4gICAgcGFnZXMsXHJcbiAgICBjdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyxcclxuICB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGUsIHZhbHVlKSA9PiB7XHJcbiAgICAvLyBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFt2YWx1ZSwgbnVsbF0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IGV2ZW50ID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpXHJcbiAgICBzZXRNZW51T3Blbih0cnVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSBldmVudCA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUxpc3RLZXlEb3duID0gZXZlbnQgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBzZXRNZW51T3BlbihmYWxzZSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3ViTWVudUNsaWNrID0gKGV2ZW50LCBwYXJlbnRJbmRleCwgaW5kZXgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpXHJcbiAgICBzZXRNZW51T3BlbihmYWxzZSlcclxuICAgIC8vIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMoW3BhcmVudEluZGV4LCBpbmRleF0pXHJcbiAgfVxyXG4gIGNvbnN0IHsgc2l0ZURhdGEsIGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIHZhbHVlPXtjdXJyZW50UGFnZUluZGVjaWVzWzBdfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYkNvbnRhaW5lcn1cclxuICAgICAgPlxyXG4gICAgICAgIHtwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHBhZ2UuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgYXJpYS1vd25zPXtcclxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuICYmIGFuY2hvckVsID8gYG1lbnUtJHtwYWdlLm5hbWV9YCA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPXtoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IHRydWUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e1xyXG4gICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPyBldmVudCA9PiBoYW5kbGVNZW51Q2xpY2soZXZlbnQpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtwYWdlLm5hbWVMYW5nfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICBrZXk9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgRGVza3RvcCBUYWJzICR7cGFnZS5uYW1lfSBDbGlja2AsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1RhYnM+XHJcbiAgICAgIHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgIHJldHVybiBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IChcclxuICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgb3Blbj17bWVudU9wZW59XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgICAga2V5PXtwYWdlLnBhdGh9XHJcbiAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5tZW51IH19IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlTWVudUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQYWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BtZW51LSR7cGFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmNoaWxkcmVuLm1hcCgoY2hpbGRQYWdlLCBjaGlsZEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRQYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWVudUNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRhYkNoYW5nZShldmVudCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJNZW51Q2xpY2soZXZlbnQsIGluZGV4LCBjaGlsZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgRGVza3RvcCBUYWJzICR7Y2hpbGRQYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMubWVudUl0ZW0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFBhZ2VJbmRlY2llc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZFBhZ2UubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAnJ1xyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDxEYXJrTW9kZUJ1dHRvbiAvPlxyXG4gICAgICA8TGFuZ3VhZ2VCdXR0b24gLz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPScvZXN0aW1hdGUnXHJcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnRXN0aW1hdGUnLFxyXG4gICAgICAgICAgICBhY3Rpb246ICdEZXNrdG9wIFRhYnMgU3BlY2lhbCBFc3RpbWF0ZSBDbGljaycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3NpdGVEYXRhLnByaWNlRXN0aW1hdGV9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzTWVudVxyXG4iXSwic291cmNlUm9vdCI6IiJ9