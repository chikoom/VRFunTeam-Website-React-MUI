webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Head */ "./node_modules/next/Head.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_ui_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/ui/helpers/ui-helpers */ "./src/ui/helpers/ui-helpers.jsx");
/* harmony import */ var _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/ui/parts/InfoImageBlock */ "./src/ui/parts/InfoImageBlock.jsx");
/* harmony import */ var _src_ui_parts_VideoBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/ui/parts/VideoBlock */ "./src/ui/parts/VideoBlock.jsx");
/* harmony import */ var _src_ui_parts_HeroBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/ui/parts/HeroBlock */ "./src/ui/parts/HeroBlock.jsx");
/* harmony import */ var _src_ui_parts_CardsSlider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/ui/parts/CardsSlider */ "./src/ui/parts/CardsSlider.jsx");
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/contexts/LangContext */ "./src/contexts/LangContext.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\pages\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _coupleItem;

  return {
    contentBlock: {
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '5em',
      minHeight: '60vh'
    },
    image: {
      width: '100%'
    },
    coupleLogo: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: '2em',
      paddingTop: '5em',
      display: 'block',
      width: '16em',
      height: '16em'
    }, theme.breakpoints.down('xs'), {
      fontSize: '1.1em'
    }),
    coupleItem: (_coupleItem = {
      backgroundImage: "url('".concat(__webpack_require__(/*! ../public/assets/vrfunteam-couple.jpg?webp */ "./public/assets/vrfunteam-couple.jpg?webp"), "')"),
      textAlign: 'justify center',
      backgroundPosition: '100% 100%',
      backgroundSize: 'cover',
      minHeight: '800px'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_coupleItem, theme.breakpoints.down('md'), {
      backgroundPosition: '20% 100%',
      paddingBottom: '35em'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_coupleItem, theme.breakpoints.down('xs'), {
      backgroundPosition: '31% 100%',
      paddingBottom: '35em'
    }), _coupleItem)
  };
});

var HomePage = function HomePage(props) {
  _s();

  var classes = useStyles();

  var _usePagesContext = Object(_src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_7__["usePagesContext"])(),
      setPageIndecies = _usePagesContext.setPageIndecies;

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var matches = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])(theme.breakpoints.down('md'));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPageIndecies('/');
  }, []);

  var _useLanguageContext = Object(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_12__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "VR events for teams, families and conferences | VRFunTeam"), __jsx("meta", {
    key: "ogtitle",
    property: "og:title",
    content: "Better than reality VR experiences | VRFunTeam",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogurl",
    property: "og:url",
    content: "https://funteamvr.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    key: "canonical",
    href: "https://funteamvr.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_HeroBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    alignItems: "center",
    justify: "center",
    spacing: 10,
    style: {
      width: '100%',
      margin: 'auto',
      height: 'auto'
    },
    id: "contentStart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx(_src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    image: "/assets/icon-teamwork.svg",
    header: siteData.services["private"].title,
    text: Object(_src_ui_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_6__["shortenText"])(siteData.services["private"].text, 120),
    path: "/services/private",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    image: "/assets/icon-creative.svg",
    header: siteData.services.company.title,
    text: Object(_src_ui_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_6__["shortenText"])(siteData.services.company.text, 120),
    path: "/services/company",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    image: "/assets/icon-fun.svg",
    header: siteData.services.events.title,
    text: Object(_src_ui_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_6__["shortenText"])(siteData.services.events.text, 120),
    path: "/services/events",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: 'row-reverse',
    alignItems: "center",
    justify: "center",
    spacing: 10,
    style: {
      width: '100%',
      margin: 'auto',
      height: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("picture", {
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: __webpack_require__(/*! ../public/assets/glasses_oculus.png?webp */ "./public/assets/glasses_oculus.png?webp"),
    type: "image/webp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }), __jsx("source", {
    srcSet: __webpack_require__(/*! ../public/assets/glasses_oculus.png */ "./public/assets/glasses_oculus.png"),
    type: "image/png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../public/assets/glasses_oculus.png?webp */ "./public/assets/glasses_oculus.png?webp"),
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      padding: '0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, siteData.megaPoints.map(function (point) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 49
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }
    }, __jsx("span", {
      style: {
        fontSize: '4em'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, "\uD83D\uDD79")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
      primaryTypographyProps: matches ? {
        variant: 'body1'
      } : {
        variant: 'h6'
      },
      primary: point,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }));
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    alignContent: "center",
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_VideoBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    container: true,
    className: classes.contentBlock,
    alignItems: "center",
    style: {
      backgroundSize: '3%',
      backgroundImage: "url('/assets/triTile.svg')",
      minHeight: '80vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_CardsSlider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    style: {
      paddingBottom: '0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: 'row-reverse',
    alignItems: "center",
    justify: "center",
    className: classes.coupleItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 8,
    md: 4,
    style: {
      marginLeft: 'auto',
      marginRight: matches ? 'auto' : '10%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/assets/funteam-logo.svg",
    alt: "funteam logo",
    className: classes.coupleLogo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, "WE ARE ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 26
    }
  }, "VR FUN TEAM")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    align: "justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, "A team of tech geeks and training instructors, who loves to escort groups in conseptual trips into the Virtual Reality world. Our mentors will guide you hand by hand into the new world, and will know to take a step back when you'll be flying on your own."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    color: "primary",
    component: _src_Link__WEBPACK_IMPORTED_MODULE_2__["default"],
    href: '/about',
    style: {
      marginTop: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, "About Us")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    color: "inherit",
    component: _src_Link__WEBPACK_IMPORTED_MODULE_2__["default"],
    href: '/contact',
    style: {
      marginTop: '1em',
      backgroundColor: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 21
    }
  }, "Contact Us")))))))));
};

_s(HomePage, "mnreHIJDvwf1cxZpKbvcmJsiSz0=", false, function () {
  return [useStyles, _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_7__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"], _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_12__["useLanguageContext"]];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRlbnRCbG9jayIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1pbkhlaWdodCIsImltYWdlIiwid2lkdGgiLCJjb3VwbGVMb2dvIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJmb250U2l6ZSIsImNvdXBsZUl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJIb21lUGFnZSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFyZ2luIiwic2VydmljZXMiLCJ0aXRsZSIsInNob3J0ZW5UZXh0IiwidGV4dCIsImNvbXBhbnkiLCJldmVudHMiLCJwYWRkaW5nIiwibWVnYVBvaW50cyIsIm1hcCIsInBvaW50IiwidmFyaWFudCIsIkxpbmsiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUE7O0FBQUEsU0FBSztBQUNyQ0MsZ0JBQVksRUFBRTtBQUNaQyxpQkFBVyxFQUFFLEdBREQ7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QUVELGlEQUhiO0FBSUUsUUFBSSxFQUFFLFVBSlI7QUFLRSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLEtBRE47QUFFTEMscUJBQWUsRUFBRTtBQUZaLEtBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWRGLENBREYsQ0F4QkYsQ0FURixDQVBGLENBTEYsQ0F6TEYsQ0FERjtBQTRRRCxDQXRSRDs7R0FBTTFCLFE7VUFDWXpCLFMsRUFDWTRCLDBFLEVBRWRFLDBELEVBQ0VFLCtELEVBSWVFLDZFOzs7S0FUM0JULFE7QUF3UlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3ZGJiNTA4YWEwNGU1MzJkN2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9MaW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L0hlYWQnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBCdXR0b24sXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICB1c2VUaGVtZSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3Nob3J0ZW5UZXh0fSBmcm9tICcuLi9zcmMvdWkvaGVscGVycy91aS1oZWxwZXJzJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgSW5mb0ltYWdlQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0luZm9JbWFnZUJsb2NrJ1xyXG5pbXBvcnQgVmlkZW9CbG9jayBmcm9tICcuLi9zcmMvdWkvcGFydHMvVmlkZW9CbG9jaydcclxuaW1wb3J0IEhlcm9CbG9jayBmcm9tICcuLi9zcmMvdWkvcGFydHMvSGVyb0Jsb2NrJ1xyXG5pbXBvcnQgQ2FyZHNTbGlkZXIgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0NhcmRzU2xpZGVyJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgY29udGVudEJsb2NrOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogJzAnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnNWVtJyxcclxuICAgIG1pbkhlaWdodDogJzYwdmgnLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBjb3VwbGVMb2dvOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzJlbScsXHJcbiAgICBwYWRkaW5nVG9wOiAnNWVtJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB3aWR0aDogJzE2ZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTZlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6ICcxLjFlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY291cGxlSXRlbToge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvdnJmdW50ZWFtLWNvdXBsZS5qcGc/d2VicCcpfScpYCxcclxuICAgIHRleHRBbGlnbjogJ2p1c3RpZnkgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzEwMCUgMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIG1pbkhlaWdodDogJzgwMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcyMCUgMTAwJScsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICczNWVtJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMzElIDEwMCUnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMzVlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBzZXRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnLycpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSwgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5cclxuICAgICAgICAgIFZSIGV2ZW50cyBmb3IgdGVhbXMsIGZhbWlsaWVzIGFuZCBjb25mZXJlbmNlcyB8IFZSRnVuVGVhbVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBWUkZ1blRlYW0nXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBrZXk9J29ndXJsJyBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PSdodHRwczovL2Z1bnRlYW12ci5jb20nIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdjYW5vbmljYWwnIGtleT0nY2Fub25pY2FsJyBocmVmPSdodHRwczovL2Z1bnRlYW12ci5jb20vJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja30+XHJcbiAgICAgICAgPEhlcm9CbG9jayAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja30+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgaWQ9J2NvbnRlbnRTdGFydCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLXRlYW13b3JrLnN2ZydcclxuICAgICAgICAgICAgICBoZWFkZXI9e3NpdGVEYXRhLnNlcnZpY2VzLnByaXZhdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2hvcnRlblRleHQoc2l0ZURhdGEuc2VydmljZXMucHJpdmF0ZS50ZXh0LDEyMCl9XHJcbiAgICAgICAgICAgICAgcGF0aD0nL3NlcnZpY2VzL3ByaXZhdGUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLWNyZWF0aXZlLnN2ZydcclxuICAgICAgICAgICAgICBoZWFkZXI9e3NpdGVEYXRhLnNlcnZpY2VzLmNvbXBhbnkudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2hvcnRlblRleHQoc2l0ZURhdGEuc2VydmljZXMuY29tcGFueS50ZXh0LDEyMCl9XHJcbiAgICAgICAgICAgICAgcGF0aD0nL3NlcnZpY2VzL2NvbXBhbnknXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLWZ1bi5zdmcnXHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtzaXRlRGF0YS5zZXJ2aWNlcy5ldmVudHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2hvcnRlblRleHQoc2l0ZURhdGEuc2VydmljZXMuZXZlbnRzLnRleHQsMTIwKX1cclxuICAgICAgICAgICAgICBwYXRoPScvc2VydmljZXMvZXZlbnRzJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj17J3Jvdy1yZXZlcnNlJ31cclxuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPHBpY3R1cmUgYWx0PSdmdW50ZWFtIGxvZ28nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZz93ZWJwJyl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdpbWFnZS93ZWJwJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZycpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZz93ZWJwJyl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZz93ZWJwJ1xyXG4gICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBhZGRpbmc6ICcwJyB9fT5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAge3NpdGVEYXRhLm1lZ2FQb2ludHMubWFwKHBvaW50ID0+IDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzRlbScgfX0+8J+VuTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8geyB2YXJpYW50OiAnYm9keTEnIH0gOiB7IHZhcmlhbnQ6ICdoNicgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3BvaW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcbiAgICAgICAgICAgICAgey8qIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jdWJlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPyB7IHZhcmlhbnQ6ICdib2R5MScgfSA6IHsgdmFyaWFudDogJ2g2JyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT0nVGhlIG1vc3QgYWR2YW5jZWQgVlIgSGVhZHNldC4gTm8gY2FibGVzIG9yIGNsdW1zeSBlcXVpcG1lbnQuIEZhc3QgYW5kIGVhc3kgYWRhcHRhdGlvbi4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhIGZhLWN1YmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA/IHsgdmFyaWFudDogJ2JvZHkxJyB9IDogeyB2YXJpYW50OiAnaDYnIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PSdTdWl0YWJsZSBmb3IgZ3JvdXBzIG9mIDItMTIgcGFydGljaXBhbnRzLCBpbiBhbGwgYWdlcyAoNi04MCkuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jdWJlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPyB7IHZhcmlhbnQ6ICdib2R5MScgfSA6IHsgdmFyaWFudDogJ2g2JyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT0nUHJvZmVzc2lvbmFsIGd1aWRlbmNlIGJ5IG91ciBlbXBoYXRpYyBpbnN0cnVjdG9ycy4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhIGZhLWN1YmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA/IHsgdmFyaWFudDogJ2JvZHkxJyB9IDogeyB2YXJpYW50OiAnaDYnIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PSdPdXIgcGxhY2Ugb3IgeW91cnM/IFdlIHdpbGwgYmUgaGFwcHkgdG8gYWR2aWNlIHlvdS4gSnVzdCBjb250YWN0IHVzLidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gKi99XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZpZGVvQmxvY2sgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfVxyXG4gICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICczJScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9hc3NldHMvdHJpVGlsZS5zdmcnKWAsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc4MHZoJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDxDYXJkYmxvY2sgLz4gKi99XHJcbiAgICAgICAgPENhcmRzU2xpZGVyIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja31cclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnMCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj17J3Jvdy1yZXZlcnNlJ31cclxuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3VwbGVJdGVtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezh9XHJcbiAgICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogbWF0Y2hlcyA/ICdhdXRvJyA6ICcxMCUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9mdW50ZWFtLWxvZ28uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXBsZUxvZ299XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICBXRSBBUkUgPHN0cm9uZz5WUiBGVU4gVEVBTTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBhbGlnbj0nanVzdGlmeSc+XHJcbiAgICAgICAgICAgICAgICAgIEEgdGVhbSBvZiB0ZWNoIGdlZWtzIGFuZCB0cmFpbmluZyBpbnN0cnVjdG9ycywgd2hvIGxvdmVzIHRvXHJcbiAgICAgICAgICAgICAgICAgIGVzY29ydCBncm91cHMgaW4gY29uc2VwdHVhbCB0cmlwcyBpbnRvIHRoZSBWaXJ0dWFsIFJlYWxpdHlcclxuICAgICAgICAgICAgICAgICAgd29ybGQuIE91ciBtZW50b3JzIHdpbGwgZ3VpZGUgeW91IGhhbmQgYnkgaGFuZCBpbnRvIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgICAgd29ybGQsIGFuZCB3aWxsIGtub3cgdG8gdGFrZSBhIHN0ZXAgYmFjayB3aGVuIHlvdSdsbCBiZSBmbHlpbmdcclxuICAgICAgICAgICAgICAgICAgb24geW91ciBvd24uXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17Jy9hYm91dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL2NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=