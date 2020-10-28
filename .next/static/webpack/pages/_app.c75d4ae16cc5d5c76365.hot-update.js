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
      label: page.nameLang[language],
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
        }, childPage.nameLang[language]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL0hlYWRlci9UYWJzTWVudS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwidHlwb2dyYXBoeSIsIm1pbldpZHRoIiwiYnV0dG9uIiwiZXN0aW1hdGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ6SW5kZXgiLCJtZW51SXRlbSIsIm9wYWNpdHkiLCJUYWJzTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJwYWdlcyIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZSIsInZhbHVlIiwiaGFuZGxlTWVudUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Yk1lbnVDbGljayIsInBhcmVudEluZGV4IiwiaW5kZXgiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFwIiwicGFnZSIsImhhc0NoaWxkcmVuIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuYW1lIiwidW5kZWZpbmVkIiwibmFtZUxhbmciLCJMaW5rIiwicGF0aCIsIkdBZXZlbnQiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3Jp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LENBREssR0EyREwsRUEzREY7QUE2REQsR0EvREEsQ0FsQ0gsRUFrR0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEdGLEVBbUdFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5HRixFQW9HRSxNQUFDLHlEQUFEO0FBQ0UsYUFBUyxFQUFFUyw2Q0FEYjtBQUVFLFFBQUksRUFBQyxXQUZQO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFJRSxTQUFLLEVBQUMsV0FKUjtBQUtFLGFBQVMsRUFBRTdCLE9BQU8sQ0FBQ25CLE1BTHJCO0FBTUUsV0FBTyxFQUFFO0FBQUEsYUFDUGtELDZEQUFPLENBQUM7QUFDTkMsZ0JBQVEsRUFBRSxVQURKO0FBRU5DLGNBQU0sRUFBRSxxQ0FGRjtBQUdOQyxhQUFLLEVBQUUsaUJBSEQ7QUFJTjNCLGFBQUssRUFBRTtBQUpELE9BQUQsQ0FEQTtBQUFBLEtBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVHWSxRQUFRLENBQUNzQixhQWZaLENBcEdGLENBREY7QUF3SEQsQ0ExSkQ7O0dBQU1oRCxRO1VBSVl4QixTLEVBS1pnQyxzRSxFQXdCMkJpQix3RTs7O0tBakMzQnpCLFE7QUE0SlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzc1ZDRhZTE2Y2M1ZDVjNzYzNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBEYXJrTW9kZUJ1dHRvbiB9IGZyb20gJy4uL0RhcmtNb2RlQnV0dG9uJ1xyXG5pbXBvcnQge1xyXG4gIFRhYnMsXHJcbiAgVGFiLFxyXG4gIEJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIENsaWNrQXdheUxpc3RlbmVyLFxyXG4gIEdyb3csXHJcbiAgUGFwZXIsXHJcbiAgUG9wcGVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlLydcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgeyBldmVudCBhcyBHQWV2ZW50IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2d0YWcnXHJcbmltcG9ydCBMYW5ndWFnZUJ1dHRvbiBmcm9tICcuLi9MYW5ndWFnZUJ1dHRvbidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBtYXJnaW5Cb3R0b206ICczZW0nLFxyXG4gIH0sXHJcbiAgdGFiQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkudGFiLFxyXG4gICAgbWluV2lkdGg6IDEwLFxyXG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmVzdGltYXRlLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICB6SW5kZXg6IDEzMDIsXHJcbiAgfSxcclxuICBtZW51SXRlbToge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXHJcbiAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgVGFic01lbnUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHtcclxuICAgIHBhZ2VzLFxyXG4gICAgY3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgLy8gc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbdmFsdWUsIG51bGxdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgc2V0TWVudU9wZW4odHJ1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVMaXN0S2V5RG93biA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Yk1lbnVDbGljayA9IChldmVudCwgcGFyZW50SW5kZXgsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICAvLyBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFtwYXJlbnRJbmRleCwgaW5kZXhdKVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRhYnNcclxuICAgICAgICB2YWx1ZT17Y3VycmVudFBhZ2VJbmRlY2llc1swXX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJDb250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGFyaWEtb3ducz17XHJcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IGBtZW51LSR7cGFnZS5uYW1lfWAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD17aGFzQ2hpbGRyZW4gJiYgYW5jaG9yRWwgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtcclxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID8gZXZlbnQgPT4gaGFuZGxlTWVudUNsaWNrKGV2ZW50KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbD17cGFnZS5uYW1lTGFuZ1tsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgaHJlZj17cGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgIGtleT17cGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IGBEZXNrdG9wIFRhYnMgJHtwYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvVGFicz5cclxuICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHBhZ2UuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoaWxkcmVuICYmIGFuY2hvckVsID8gKFxyXG4gICAgICAgICAgPFBvcHBlclxyXG4gICAgICAgICAgICBvcGVuPXttZW51T3Blbn1cclxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxyXG4gICAgICAgICAgICBrZXk9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcclxuICAgICAgICAgICAgICA8R3Jvd1xyXG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLm1lbnUgfX0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVNZW51Q2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTWVudUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YG1lbnUtJHtwYWdlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UuY2hpbGRyZW4ubWFwKChjaGlsZFBhZ2UsIGNoaWxkSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNZW51Q2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGFiQ2hhbmdlKGV2ZW50LCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Yk1lbnVDbGljayhldmVudCwgaW5kZXgsIGNoaWxkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGBEZXNrdG9wIFRhYnMgJHtjaGlsZFBhZ2UubmFtZX0gQ2xpY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dlYnNpdGUgQWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2NoaWxkUGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5tZW51SXRlbSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXggPT09IGN1cnJlbnRQYWdlSW5kZWNpZXNbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkUGFnZS5uYW1lTGFuZ1tsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1BvcHBlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgJydcclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgICA8RGFya01vZGVCdXR0b24gLz5cclxuICAgICAgPExhbmd1YWdlQnV0dG9uIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgaHJlZj0nL2VzdGltYXRlJ1xyXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIEdBZXZlbnQoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0VzdGltYXRlJyxcclxuICAgICAgICAgICAgYWN0aW9uOiAnRGVza3RvcCBUYWJzIFNwZWNpYWwgRXN0aW1hdGUgQ2xpY2snLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1dlYnNpdGUgQWN0aW9ucycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaXRlRGF0YS5wcmljZUVzdGltYXRlfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFic01lbnVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==