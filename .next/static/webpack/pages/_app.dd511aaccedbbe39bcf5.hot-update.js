webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@material-ui/icons/Translate.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Translate.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
}), 'Translate');

exports.default = _default;

/***/ }),

/***/ "./src/ui/Header/DrawerMenu.jsx":
/*!**************************************!*\
  !*** ./src/ui/Header/DrawerMenu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Apps */ "./node_modules/@material-ui/icons/Apps.js");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AllInclusive */ "./node_modules/@material-ui/icons/AllInclusive.js");
/* harmony import */ var _material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceWallet */ "./node_modules/@material-ui/icons/AccountBalanceWallet.js");
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Business */ "./node_modules/@material-ui/icons/Business.js");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/EmojiEvents */ "./node_modules/@material-ui/icons/EmojiEvents.js");
/* harmony import */ var _material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _DarkModeListSwitch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../DarkModeListSwitch */ "./src/ui/DarkModeListSwitch.jsx");
/* harmony import */ var _functions_gtag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../functions/gtag */ "./src/functions/gtag.js");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
/* harmony import */ var _LanguageListItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../LanguageListItem */ "./src/ui/LanguageListItem.jsx");


var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Header\\DrawerMenu.jsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















 // const iconMapping = {
//   SendIcon,HomeIcon,AppsIcon,AllInclusiveIcon,InfoIcon,AccountBalanceWalletIcon,GroupIcon,BusinessIcon,EmojiEventsIcon
// }

var iconMapping = {
  SendIcon: __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }),
  HomeIcon: __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }),
  AppsIcon: __jsx(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }),
  AllInclusiveIcon: __jsx(_material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }),
  InfoIcon: __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }),
  AccountBalanceWalletIcon: __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }),
  GroupIcon: __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 14
    }
  }),
  BusinessIcon: __jsx(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }),
  EmojiEventsIcon: __jsx(_material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 20
    }
  })
};
var useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
      marginBottom: '3em'
    }),
    menuIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    drawer: {
      backgroundColor: theme.palette.primary.main,
      color: '#fafafa'
    },
    drawerItem: _objectSpread(_objectSpread({}, theme.typography.tab), {}, {
      opacity: 0.7
    }),
    drawerItemSelected: {
      '& .MuiListItemText-root': {
        opacity: 1
      }
    },
    specialDrawerItem: {
      backgroundColor: theme.palette.secondary.main
    },
    drawerIcon: {
      height: '40px',
      width: '40px',
      color: '#fafafa'
    },
    drawerTextIcon: {
      color: '#fafafa'
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  };
});

var DrawerMenu = function DrawerMenu(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      drawerOpen = _useState2[0],
      setDrawerOpen = _useState2[1];

  var classes = useStyles();

  var _usePagesContext = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_17__["usePagesContext"])(),
      pages = _usePagesContext.pages,
      currentPageIndecies = _usePagesContext.currentPageIndecies,
      setCurrentPageIndecies = _usePagesContext.setCurrentPageIndecies;

  var iOS =  true && /iPad|iPhone|iPod/.test(navigator.userAgent);

  var handleTabChange = function handleTabChange(e, value) {
    setCurrentPageIndecies([value, null]);
  };

  var handleSubMenuClick = function handleSubMenuClick(event, parentIndex, index) {
    setMenuOpen(false);
    setCurrentPageIndecies([parentIndex, index]);
  };

  var _useLanguageContext = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_20__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    className: classes.menuIconContainer,
    onClick: function onClick() {
      return setDrawerOpen(!drawerOpen);
    },
    disableRipple: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.drawerIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["SwipeableDrawer"], {
    disableBackdropTransition: !iOS,
    disableDiscovery: iOS,
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    },
    onOpen: function onOpen() {
      return setDrawerOpen(true);
    },
    classes: {
      paper: classes.drawer
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["List"], {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    className: classes.root,
    disablePadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(_LanguageListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }), __jsx(_DarkModeListSwitch__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), pages.map(function (page, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: page.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      divider: true,
      button: true,
      component: _Link__WEBPACK_IMPORTED_MODULE_2__["default"],
      href: page.path,
      selected: index === currentPageIndecies[0],
      onClick: function onClick(event) {
        setDrawerOpen(false);
        handleTabChange(event, index);
        Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_19__["event"])({
          category: 'Menu Buttons',
          action: "Mobile Drawer ".concat(page.name, " Click"),
          label: 'Website Actions',
          value: '0'
        });
      },
      className: page.special ? classes.specialDrawerItem : '',
      classes: {
        selected: classes.drawerItemSelected
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
      className: classes.drawerTextIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, iconMapping[page.icon]), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
      className: classes.drawerItem,
      disableTypography: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, page.nameLang[language]), page.children.length > 0 ? menuOpen ? __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      className: classes.menuIconContainer,
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setMenuOpen(false);
      },
      disableRipple: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 23
      }
    })) : __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      className: classes.menuIconContainer,
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        setMenuOpen(true);
      },
      disableRipple: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 23
      }
    })) : null), page.children.length > 0 ? __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "in": menuOpen,
      timeout: "auto",
      unmountOnExit: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["List"], {
      component: "div",
      disablePadding: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }, page.children.map(function (childPage, childIndex) {
      return __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        divider: true,
        button: true,
        key: childPage.path,
        component: _Link__WEBPACK_IMPORTED_MODULE_2__["default"],
        href: childPage.path,
        selected: childIndex === currentPageIndecies[1] && index === currentPageIndecies[0],
        onClick: function onClick(event) {
          setDrawerOpen(false);
          handleTabChange(event, index);
          handleSubMenuClick(event, index, childIndex);
          Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_19__["event"])({
            category: 'Menu Buttons',
            action: "Mobile Drawer ".concat(childPage.name, " Click"),
            label: 'Website Actions',
            value: '0'
          });
        },
        className: classes.nested,
        classes: {
          selected: classes.drawerItemSelected
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 23
        }
      }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
        className: classes.drawerTextIcon,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }
      }, iconMapping[childPage.icon]), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
        className: classes.drawerItem,
        disableTypography: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      }, childPage.nameLang[language]));
    }))) : null);
  }))));
};

_s(DrawerMenu, "sCz814ZZVcvM+qi2dAde5oLrqtU=", false, function () {
  return [useStyles, _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_17__["usePagesContext"], _contexts_LangContext__WEBPACK_IMPORTED_MODULE_20__["useLanguageContext"]];
});

_c = DrawerMenu;
/* harmony default export */ __webpack_exports__["default"] = (DrawerMenu);

var _c;

$RefreshReg$(_c, "DrawerMenu");

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

/***/ }),

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

var LanguageListItem = function LanguageListItem(props) {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.langListItem,
    id: "switch-list-label-dark",
    disableTypography: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Language"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_LanguageButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9IZWFkZXIvRHJhd2VyTWVudS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9MYW5ndWFnZUxpc3RJdGVtLmpzeCJdLCJuYW1lcyI6WyJpY29uTWFwcGluZyIsIlNlbmRJY29uIiwiSG9tZUljb24iLCJBcHBzSWNvbiIsIkFsbEluY2x1c2l2ZUljb24iLCJJbmZvSWNvbiIsIkFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiIsIkdyb3VwSWNvbiIsIkJ1c2luZXNzSWNvbiIsIkVtb2ppRXZlbnRzSWNvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRvb2xiYXJNYXJnaW4iLCJtaXhpbnMiLCJ0b29sYmFyIiwibWFyZ2luQm90dG9tIiwibWVudUljb25Db250YWluZXIiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29sb3IiLCJkcmF3ZXJJdGVtIiwidHlwb2dyYXBoeSIsInRhYiIsIm9wYWNpdHkiLCJkcmF3ZXJJdGVtU2VsZWN0ZWQiLCJzcGVjaWFsRHJhd2VySXRlbSIsInNlY29uZGFyeSIsImRyYXdlckljb24iLCJoZWlnaHQiLCJ3aWR0aCIsImRyYXdlclRleHRJY29uIiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwiRHJhd2VyTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0IiwicGFnZXMiLCJjdXJyZW50UGFnZUluZGVjaWVzIiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsImlPUyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYW5kbGVUYWJDaGFuZ2UiLCJlIiwidmFsdWUiLCJoYW5kbGVTdWJNZW51Q2xpY2siLCJldmVudCIsInBhcmVudEluZGV4IiwiaW5kZXgiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwicGFwZXIiLCJyb290IiwibWFwIiwicGFnZSIsInBhdGgiLCJMaW5rIiwiR0FldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibmFtZSIsImxhYmVsIiwic3BlY2lhbCIsInNlbGVjdGVkIiwiaWNvbiIsIm5hbWVMYW5nIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkUGFnZSIsImNoaWxkSW5kZXgiLCJsYW5nTGlzdEl0ZW0iLCJmb250U2l6ZSIsIkxhbmd1YWdlTGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsVUFBUSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURRO0FBRWxCQyxVQUFRLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlE7QUFHbEJDLFVBQVEs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LEtBQUssRUFBSTtBQUFBOztBQUNoQyxNQUFNTSxPQUFPLEdBQUdwQyxTQUFTLEVBQXpCO0FBRUEsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRW9DLE9BQU8sQ0FBQ3dDLFlBRHJCO0FBRUUsTUFBRSxFQUFDLHdCQUZMO0FBR0UscUJBQWlCLE1BSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFXRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQVhGLENBREY7QUFtQkQsQ0F0QkQ7O0dBQU1FLGdCO1VBQ1k5RSxTOzs7S0FEWjhFLGdCO0FBd0JTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRkNTExYWFjY2VkYmJlMzliY2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyLjg3IDE1LjA3bC0yLjU0LTIuNTEuMDMtLjAzYzEuNzQtMS45NCAyLjk4LTQuMTcgMy43MS02LjUzSDE3VjRoLTdWMkg4djJIMXYxLjk5aDExLjE3QzExLjUgNy45MiAxMC40NCA5Ljc1IDkgMTEuMzUgOC4wNyAxMC4zMiA3LjMgOS4xOSA2LjY5IDhoLTJjLjczIDEuNjMgMS43MyAzLjE3IDIuOTggNC41NmwtNS4wOSA1LjAyTDQgMTlsNS01IDMuMTEgMy4xMS43Ni0yLjA0ek0xOC41IDEwaC0yTDEyIDIyaDJsMS4xMi0zaDQuNzVMMjEgMjJoMmwtNC41LTEyem0tMi42MiA3bDEuNjItNC4zM0wxOS4xMiAxN2gtMy4yNHpcIlxufSksICdUcmFuc2xhdGUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnXHJcbmltcG9ydCB7XHJcbiAgbWFrZVN0eWxlcyxcclxuICBTd2lwZWFibGVEcmF3ZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvJ1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnXHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSdcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJ1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnXHJcbmltcG9ydCBBcHBzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXBwcydcclxuaW1wb3J0IEFsbEluY2x1c2l2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FsbEluY2x1c2l2ZSdcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJ1xyXG5pbXBvcnQgQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldCdcclxuaW1wb3J0IEdyb3VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR3JvdXAnXHJcbmltcG9ydCBCdXNpbmVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzJ1xyXG5pbXBvcnQgRW1vamlFdmVudHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FbW9qaUV2ZW50cydcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnXHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBEYXJrTW9kZUxpc3RTd2l0Y2ggZnJvbSAnLi4vRGFya01vZGVMaXN0U3dpdGNoJ1xyXG5pbXBvcnQgeyBldmVudCBhcyBHQWV2ZW50IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2d0YWcnXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5pbXBvcnQgTGFuZ3VhZ2VMaXN0SXRlbSBmcm9tICcuLi9MYW5ndWFnZUxpc3RJdGVtJ1xyXG5cclxuLy8gY29uc3QgaWNvbk1hcHBpbmcgPSB7XHJcbi8vICAgU2VuZEljb24sSG9tZUljb24sQXBwc0ljb24sQWxsSW5jbHVzaXZlSWNvbixJbmZvSWNvbixBY2NvdW50QmFsYW5jZVdhbGxldEljb24sR3JvdXBJY29uLEJ1c2luZXNzSWNvbixFbW9qaUV2ZW50c0ljb25cclxuLy8gfVxyXG5cclxuY29uc3QgaWNvbk1hcHBpbmcgPSB7XHJcbiAgU2VuZEljb246IDxTZW5kSWNvbiAvPixcclxuICBIb21lSWNvbjogPEhvbWVJY29uIC8+LFxyXG4gIEFwcHNJY29uOiA8QXBwc0ljb24gLz4sXHJcbiAgQWxsSW5jbHVzaXZlSWNvbjogPEFsbEluY2x1c2l2ZUljb24gLz4sXHJcbiAgSW5mb0ljb246IDxJbmZvSWNvbiAvPixcclxuICBBY2NvdW50QmFsYW5jZVdhbGxldEljb246IDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gLz4sXHJcbiAgR3JvdXBJY29uOiA8R3JvdXBJY29uIC8+LFxyXG4gIEJ1c2luZXNzSWNvbjogPEJ1c2luZXNzSWNvbiAvPixcclxuICBFbW9qaUV2ZW50c0ljb246IDxFbW9qaUV2ZW50c0ljb24gLz4sXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0b29sYmFyTWFyZ2luOiB7XHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIG1hcmdpbkJvdHRvbTogJzNlbScsXHJcbiAgfSxcclxuICBtZW51SWNvbkNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogJyNmYWZhZmEnLFxyXG4gIH0sXHJcbiAgZHJhd2VySXRlbToge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXHJcbiAgICBvcGFjaXR5OiAwLjcsXHJcbiAgfSxcclxuICBkcmF3ZXJJdGVtU2VsZWN0ZWQ6IHtcclxuICAgICcmIC5NdWlMaXN0SXRlbVRleHQtcm9vdCc6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcGVjaWFsRHJhd2VySXRlbToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZHJhd2VySWNvbjoge1xyXG4gICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICB3aWR0aDogJzQwcHgnLFxyXG4gICAgY29sb3I6ICcjZmFmYWZhJyxcclxuICB9LFxyXG4gIGRyYXdlclRleHRJY29uOiB7XHJcbiAgICBjb2xvcjogJyNmYWZhZmEnLFxyXG4gIH0sXHJcbiAgbmVzdGVkOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IERyYXdlck1lbnUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qge1xyXG4gICAgcGFnZXMsXHJcbiAgICBjdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyxcclxuICB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgY29uc3QgaU9TID0gcHJvY2Vzcy5icm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbdmFsdWUsIG51bGxdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJNZW51Q2xpY2sgPSAoZXZlbnQsIHBhcmVudEluZGV4LCBpbmRleCkgPT4ge1xyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFtwYXJlbnRJbmRleCwgaW5kZXhdKVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUljb25Db250YWluZXJ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RHJhd2VyT3BlbighZHJhd2VyT3Blbil9XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJJY29ufSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDxTd2lwZWFibGVEcmF3ZXJcclxuICAgICAgICBkaXNhYmxlQmFja2Ryb3BUcmFuc2l0aW9uPXshaU9TfVxyXG4gICAgICAgIGRpc2FibGVEaXNjb3Zlcnk9e2lPU31cclxuICAgICAgICBvcGVuPXtkcmF3ZXJPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldERyYXdlck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0RHJhd2VyT3Blbih0cnVlKX1cclxuICAgICAgICBjbGFzc2VzPXt7IHBhcGVyOiBjbGFzc2VzLmRyYXdlciB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0+PC9kaXY+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGNvbXBvbmVudD0nbmF2J1xyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSduZXN0ZWQtbGlzdC1zdWJoZWFkZXInXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgICAgIGRpc2FibGVQYWRkaW5nXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExhbmd1YWdlTGlzdEl0ZW0gLz5cclxuICAgICAgICAgIDxEYXJrTW9kZUxpc3RTd2l0Y2ggLz5cclxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3BhZ2UucGF0aH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBkaXZpZGVyXHJcbiAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpbmRleCA9PT0gY3VycmVudFBhZ2VJbmRlY2llc1swXX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJhd2VyT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlVGFiQ2hhbmdlKGV2ZW50LCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYE1vYmlsZSBEcmF3ZXIgJHtwYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dlYnNpdGUgQWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2Uuc3BlY2lhbCA/IGNsYXNzZXMuc3BlY2lhbERyYXdlckl0ZW0gOiAnJ31cclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgc2VsZWN0ZWQ6IGNsYXNzZXMuZHJhd2VySXRlbVNlbGVjdGVkIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyVGV4dEljb259PlxyXG4gICAgICAgICAgICAgICAgICB7aWNvbk1hcHBpbmdbcGFnZS5pY29uXX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySXRlbX0gZGlzYWJsZVR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdlLm5hbWVMYW5nW2xhbmd1YWdlXX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAge3BhZ2UuY2hpbGRyZW4ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgbWVudU9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SWNvbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW51T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZExlc3MgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SWNvbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW51T3Blbih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICB7cGFnZS5jaGlsZHJlbi5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXttZW51T3Blbn0gdGltZW91dD0nYXV0bycgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PSdkaXYnIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdlLmNoaWxkcmVuLm1hcCgoY2hpbGRQYWdlLCBjaGlsZEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXggPT09IGN1cnJlbnRQYWdlSW5kZWNpZXNbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFBhZ2VJbmRlY2llc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREcmF3ZXJPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRhYkNoYW5nZShldmVudCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3ViTWVudUNsaWNrKGV2ZW50LCBpbmRleCwgY2hpbGRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYE1vYmlsZSBEcmF3ZXIgJHtjaGlsZFBhZ2UubmFtZX0gQ2xpY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHNlbGVjdGVkOiBjbGFzc2VzLmRyYXdlckl0ZW1TZWxlY3RlZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJUZXh0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25NYXBwaW5nW2NoaWxkUGFnZS5pY29uXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkUGFnZS5uYW1lTGFuZ1tsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Td2lwZWFibGVEcmF3ZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyTWVudVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uLCBMaXN0SXRlbVRleHQsIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBMYW5ndWFnZUJ1dHRvbiBmcm9tICcuL0xhbmd1YWdlQnV0dG9uJ1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsYW5nTGlzdEl0ZW06IHtcclxuICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IExhbmd1YWdlTGlzdEl0ZW0gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW0+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPFRyYW5zbGF0ZUljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ0xpc3RJdGVtfVxyXG4gICAgICAgIGlkPSdzd2l0Y2gtbGlzdC1sYWJlbC1kYXJrJ1xyXG4gICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5XHJcbiAgICAgID5cclxuICAgICAgICBMYW5ndWFnZVxyXG4gICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICA8TGFuZ3VhZ2VCdXR0b24gLz5cclxuICBcclxuICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VMaXN0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=