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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9UYWJzTWVudS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwidHlwb2dyYXBoeSIsIm1pbldpZHRoIiwiYnV0dG9uIiwiZXN0aW1hdGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ6SW5kZXgiLCJtZW51SXRlbSIsIm9wYWNpdHkiLCJUYWJzTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJwYWdlcyIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZSIsInZhbHVlIiwiaGFuZGxlTWVudUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Yk1lbnVDbGljayIsInBhcmVudEluZGV4IiwiaW5kZXgiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFwIiwicGFnZSIsImhhc0NoaWxkcmVuIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuYW1lIiwidW5kZWZpbmVkIiwiTGluayIsInBhdGgiLCJHQWV2ZW50IiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsInJvb3Qi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Qyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEdGLEVBbUdFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5HRixFQW9HRSxNQUFDLHlEQUFEO0FBQ0UsYUFBUyxFQUFFRSw2Q0FEYjtBQUVFLFFBQUksRUFBQyxXQUZQO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFJRSxTQUFLLEVBQUMsV0FKUjtBQUtFLGFBQVMsRUFBRTVCLE9BQU8sQ0FBQ25CLE1BTHJCO0FBTUUsV0FBTyxFQUFFO0FBQUEsYUFDUGlELDZEQUFPLENBQUM7QUFDTkMsZ0JBQVEsRUFBRSxVQURKO0FBRU5DLGNBQU0sRUFBRSxxQ0FGRjtBQUdOQyxhQUFLLEVBQUUsaUJBSEQ7QUFJTjFCLGFBQUssRUFBRTtBQUpELE9BQUQsQ0FEQTtBQUFBLEtBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVHWSxRQUFRLENBQUNxQixhQWZaLENBcEdGLENBREY7QUF3SEQsQ0ExSkQ7O0dBQU0vQyxRO1VBSVl4QixTLEVBS1pnQyxzRSxFQXdCMkJpQix3RTs7O0tBakMzQnpCLFE7QUE0SlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmFjZTZhNDg2NjJjNmM3ZTc5ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBEYXJrTW9kZUJ1dHRvbiB9IGZyb20gJy4uL0RhcmtNb2RlQnV0dG9uJ1xyXG5pbXBvcnQge1xyXG4gIFRhYnMsXHJcbiAgVGFiLFxyXG4gIEJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIENsaWNrQXdheUxpc3RlbmVyLFxyXG4gIEdyb3csXHJcbiAgUGFwZXIsXHJcbiAgUG9wcGVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlLydcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgeyBldmVudCBhcyBHQWV2ZW50IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2d0YWcnXHJcbmltcG9ydCBMYW5ndWFnZUJ1dHRvbiBmcm9tICcuLi9MYW5ndWFnZUJ1dHRvbidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBtYXJnaW5Cb3R0b206ICczZW0nLFxyXG4gIH0sXHJcbiAgdGFiQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkudGFiLFxyXG4gICAgbWluV2lkdGg6IDEwLFxyXG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmVzdGltYXRlLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICB6SW5kZXg6IDEzMDIsXHJcbiAgfSxcclxuICBtZW51SXRlbToge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXHJcbiAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgVGFic01lbnUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHtcclxuICAgIHBhZ2VzLFxyXG4gICAgY3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgLy8gc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbdmFsdWUsIG51bGxdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgc2V0TWVudU9wZW4odHJ1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVMaXN0S2V5RG93biA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Yk1lbnVDbGljayA9IChldmVudCwgcGFyZW50SW5kZXgsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICAvLyBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFtwYXJlbnRJbmRleCwgaW5kZXhdKVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRhYnNcclxuICAgICAgICB2YWx1ZT17Y3VycmVudFBhZ2VJbmRlY2llc1swXX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJDb250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGFyaWEtb3ducz17XHJcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IGBtZW51LSR7cGFnZS5uYW1lfWAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD17aGFzQ2hpbGRyZW4gJiYgYW5jaG9yRWwgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtcclxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID8gZXZlbnQgPT4gaGFuZGxlTWVudUNsaWNrKGV2ZW50KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbD17cGFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICBrZXk9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgRGVza3RvcCBUYWJzICR7cGFnZS5uYW1lfSBDbGlja2AsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1RhYnM+XHJcbiAgICAgIHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgIHJldHVybiBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IChcclxuICAgICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgICAgb3Blbj17bWVudU9wZW59XHJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgICAga2V5PXtwYWdlLnBhdGh9XHJcbiAgICAgICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyb3dcclxuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5tZW51IH19IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlTWVudUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQYWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BtZW51LSR7cGFnZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmNoaWxkcmVuLm1hcCgoY2hpbGRQYWdlLCBjaGlsZEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRQYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWVudUNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRhYkNoYW5nZShldmVudCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJNZW51Q2xpY2soZXZlbnQsIGluZGV4LCBjaGlsZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBgRGVza3RvcCBUYWJzICR7Y2hpbGRQYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMubWVudUl0ZW0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFBhZ2VJbmRlY2llc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZFBhZ2UubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAnJ1xyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDxEYXJrTW9kZUJ1dHRvbiAvPlxyXG4gICAgICA8TGFuZ3VhZ2VCdXR0b24gLz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICBocmVmPScvZXN0aW1hdGUnXHJcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnRXN0aW1hdGUnLFxyXG4gICAgICAgICAgICBhY3Rpb246ICdEZXNrdG9wIFRhYnMgU3BlY2lhbCBFc3RpbWF0ZSBDbGljaycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3NpdGVEYXRhLnByaWNlRXN0aW1hdGV9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzTWVudVxyXG4iXSwic291cmNlUm9vdCI6IiJ9