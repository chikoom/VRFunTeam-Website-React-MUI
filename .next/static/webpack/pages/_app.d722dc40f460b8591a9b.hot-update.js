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
      siteData = _useLanguageContext.siteData;

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

_s(TabsMenu, "2vSnH0iIFyXsVa5RRdI5y0kiOIo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9UYWJzTWVudS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwidHlwb2dyYXBoeSIsIm1pbldpZHRoIiwiYnV0dG9uIiwiZXN0aW1hdGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ6SW5kZXgiLCJtZW51SXRlbSIsIm9wYWNpdHkiLCJUYWJzTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJwYWdlcyIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZSIsInZhbHVlIiwiaGFuZGxlTWVudUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Yk1lbnVDbGljayIsInBhcmVudEluZGV4IiwiaW5kZXgiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsIm1hcCIsInBhZ2UiLCJoYXNDaGlsZHJlbiIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmFtZSIsInVuZGVmaW5lZCIsIkxpbmsiLCJwYXRoIiwiR0FldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJyb290IiwiY2hpbGRQYWdl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QWxHRixFQW1HRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuR0YsRUFvR0UsTUFBQyx5REFBRDtBQUNFLGFBQVMsRUFBRUUsNkNBRGI7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsU0FBSyxFQUFDLFdBSlI7QUFLRSxhQUFTLEVBQUUzQixPQUFPLENBQUNuQixNQUxyQjtBQU1FLFdBQU8sRUFBRTtBQUFBLGFBQ1BnRCw2REFBTyxDQUFDO0FBQ05DLGdCQUFRLEVBQUUsVUFESjtBQUVOQyxjQUFNLEVBQUUscUNBRkY7QUFHTkMsYUFBSyxFQUFFLGlCQUhEO0FBSU56QixhQUFLLEVBQUU7QUFKRCxPQUFELENBREE7QUFBQSxLQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlR1ksUUFBUSxDQUFDb0IsYUFmWixDQXBHRixDQURGO0FBd0hELENBMUpEOztHQUFNOUMsUTtVQUlZeEIsUyxFQUtaZ0Msc0UsRUF3QmlCaUIsd0U7OztLQWpDakJ6QixRO0FBNEpTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ3MjJkYzQwZjQ2MGI4NTkxYTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuaW1wb3J0IHsgRGFya01vZGVCdXR0b24gfSBmcm9tICcuLi9EYXJrTW9kZUJ1dHRvbidcclxuaW1wb3J0IHtcclxuICBUYWJzLFxyXG4gIFRhYixcclxuICBCdXR0b24sXHJcbiAgbWFrZVN0eWxlcyxcclxuICBNZW51SXRlbSxcclxuICBNZW51TGlzdCxcclxuICBDbGlja0F3YXlMaXN0ZW5lcixcclxuICBHcm93LFxyXG4gIFBhcGVyLFxyXG4gIFBvcHBlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS8nXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IHsgZXZlbnQgYXMgR0FldmVudCB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9ndGFnJ1xyXG5pbXBvcnQgTGFuZ3VhZ2VCdXR0b24gZnJvbSAnLi4vTGFuZ3VhZ2VCdXR0b24nXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRvb2xiYXJNYXJnaW46IHtcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnM2VtJyxcclxuICB9LFxyXG4gIHRhYkNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgdGFiOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LnRhYixcclxuICAgIG1pbldpZHRoOiAxMCxcclxuICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5lc3RpbWF0ZSxcclxuICAgIGJvcmRlclJhZGl1czogJzUwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzUwcHgnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICBtZW51OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4gICAgekluZGV4OiAxMzAyLFxyXG4gIH0sXHJcbiAgbWVudUl0ZW06IHtcclxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkudGFiLFxyXG4gICAgb3BhY2l0eTogMC43LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LFxyXG4gICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IFRhYnNNZW51ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7XHJcbiAgICBwYWdlcyxcclxuICAgIGN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZSwgdmFsdWUpID0+IHtcclxuICAgIC8vIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMoW3ZhbHVlLCBudWxsXSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldClcclxuICAgIHNldE1lbnVPcGVuKHRydWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9IGV2ZW50ID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpXHJcbiAgICBzZXRNZW51T3BlbihmYWxzZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTGlzdEtleURvd24gPSBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJNZW51Q2xpY2sgPSAoZXZlbnQsIHBhcmVudEluZGV4LCBpbmRleCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gICAgLy8gc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbcGFyZW50SW5kZXgsIGluZGV4XSlcclxuICB9XHJcbiAgY29uc3QgeyBzaXRlRGF0YSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRhYnNcclxuICAgICAgICB2YWx1ZT17Y3VycmVudFBhZ2VJbmRlY2llc1swXX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJDb250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGFyaWEtb3ducz17XHJcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IGBtZW51LSR7cGFnZS5uYW1lfWAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD17aGFzQ2hpbGRyZW4gJiYgYW5jaG9yRWwgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtcclxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID8gZXZlbnQgPT4gaGFuZGxlTWVudUNsaWNrKGV2ZW50KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbD17cGFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICBrZXk9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgRGVza3RvcCBUYWJzICR7cGFnZS5uYW1lfSBDbGlja2AsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1RhYnM+XHJcbiAgICAgIHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgIHJldHVybiBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IChcclxuICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgb3Blbj17bWVudU9wZW59XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgICAga2V5PXtwYWdlLnBhdGh9XHJcbiAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5tZW51IH19IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlTWVudUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQYWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BtZW51LSR7cGFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmNoaWxkcmVuLm1hcCgoY2hpbGRQYWdlLCBjaGlsZEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRQYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWVudUNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRhYkNoYW5nZShldmVudCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJNZW51Q2xpY2soZXZlbnQsIGluZGV4LCBjaGlsZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgRGVza3RvcCBUYWJzICR7Y2hpbGRQYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMubWVudUl0ZW0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFBhZ2VJbmRlY2llc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZFBhZ2UubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAnJ1xyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDxEYXJrTW9kZUJ1dHRvbiAvPlxyXG4gICAgICA8TGFuZ3VhZ2VCdXR0b24gLz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPScvZXN0aW1hdGUnXHJcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnRXN0aW1hdGUnLFxyXG4gICAgICAgICAgICBhY3Rpb246ICdEZXNrdG9wIFRhYnMgU3BlY2lhbCBFc3RpbWF0ZSBDbGljaycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3NpdGVEYXRhLnByaWNlRXN0aW1hdGV9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzTWVudVxyXG4iXSwic291cmNlUm9vdCI6IiJ9