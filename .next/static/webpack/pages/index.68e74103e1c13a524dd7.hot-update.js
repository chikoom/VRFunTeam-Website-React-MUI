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
        fontSize: '4em',
        marginRight: '1em'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, "\uD83D\uDE80")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRlbnRCbG9jayIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1pbkhlaWdodCIsImltYWdlIiwid2lkdGgiLCJjb3VwbGVMb2dvIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJmb250U2l6ZSIsImNvdXBsZUl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJIb21lUGFnZSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFyZ2luIiwic2VydmljZXMiLCJ0aXRsZSIsInNob3J0ZW5UZXh0IiwidGV4dCIsImNvbXBhbnkiLCJldmVudHMiLCJwYWRkaW5nIiwibWVnYVBvaW50cyIsIm1hcCIsInBvaW50IiwidmFyaWFudCIsIkxpbmsiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUE7O0FBQUEsU0FBSztBQUNyQ0MsZ0JBQVksRUFBRTtBQUNaQyxpQkFBVyxFQUFFLEdBREQ7QUFFWkMsa0JBQVksRUFBRSxHQUZGO0FBR1pDLG1CQUFhLEVBQUUsS0FISDtBQUlaQyxlQUFTLEVBQUU7QUFKQyxLQUR1QjtBQU9yQ0MsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRTtBQURGLEtBUDhCO0FBVXJDQyxjQUFVLEVBQUU7QUFDVkMsZ0JBQVUsRUFBRSxNQURKO0FBRVJDLGlCQUFXLEVBQUUsTUFGTDtBQUdSTixtQkFBYSxFQUFFLEtBSFA7QUFJUk8sZ0JBQVUsRUFBRSxLQUpKO0FBS1JDLGFBQU8sRUFBRSxPQUxEO0FBTVJMLFdBQUssRUFBRSxNQU5DO0FBT1JNLFlBQU0sRUFBRTtBQVBBLE9BUVBiLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FSTyxFQVF3QjtBQUM5QkMsY0FBUSxFQUFFO0FBRG9CLEtBUnhCLENBVjJCO0FBc0JyQ0MsY0FBVTtBQUNSQyxxQkFBZSxpQkFBVUMsbUJBQU8sQ0FBQyw2RkFBRCxDQUFqQixPQURQO0FBRVJDLGVBQVMsRUFBRSxnQkFGSDtBQUdSQyx3QkFBa0IsRUFBRSxXQUhaO0FBSVJDLG9CQUFjLEVBQUUsT0FKUjtBQUtSakIsZUFBUyxFQUFFO0FBTEgsOEdBTVBMLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FOTyxFQU13QjtBQUM5Qk0sd0JBQWtCLEVBQUUsVUFEVTtBQUU5QmpCLG1CQUFhLEVBQUU7QUFGZSxLQU54QiwwR0FVUEosS0FBSyxDQUFDYyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQVZPLEVBVXdCO0FBQzlCTSx3QkFBa0IsRUFBRSxVQURVO0FBRTlCakIsbUJBQWEsRUFBRTtBQUZlLEtBVnhCO0FBdEIyQixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUF1Q0EsSUFBTW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUczQixTQUFTLEVBQXpCOztBQUR3Qix5QkFFSTRCLGtGQUFlLEVBRm5CO0FBQUEsTUFFaEJDLGVBRmdCLG9CQUVoQkEsZUFGZ0I7O0FBSXhCLE1BQU0zQixLQUFLLEdBQUc0QixrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsdUVBQWEsQ0FBQzlCLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE3QjtBQUNBZ0IseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLG1CQUFlLENBQUMsR0FBRCxDQUFmO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFOd0IsNEJBU09LLHFGQUFrQixFQVR6QjtBQUFBLE1BU2hCQyxRQVRnQix1QkFTaEJBLFFBVGdCO0FBQUEsTUFTTkMsUUFUTSx1QkFTTkEsUUFUTTs7QUFVeEIsU0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxPQUFHLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQURGLEVBSUU7QUFDRSxPQUFHLEVBQUMsU0FETjtBQUVFLFlBQVEsRUFBQyxVQUZYO0FBR0UsV0FBTyxFQUFDLGdEQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVNFO0FBQU0sT0FBRyxFQUFDLE9BQVY7QUFBa0IsWUFBUSxFQUFDLFFBQTNCO0FBQW9DLFdBQU8sRUFBQyx1QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixPQUFHLEVBQUMsV0FBMUI7QUFBc0MsUUFBSSxFQUFDLHdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixFQWFFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVULE9BQU8sQ0FBQ3hCLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWJGLEVBZ0JFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUV3QixPQUFPLENBQUN4QixZQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsY0FBVSxFQUFDLFFBSGI7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUtFLFdBQU8sRUFBRSxFQUxYO0FBTUUsU0FBSyxFQUFFO0FBQUVNLFdBQUssRUFBRSxNQUFUO0FBQWlCNEIsWUFBTSxFQUFFLE1BQXpCO0FBQWlDdEIsWUFBTSxFQUFFO0FBQXpDLEtBTlQ7QUFPRSxNQUFFLEVBQUMsY0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFNBQUssRUFBQywyQkFEUjtBQUVFLFVBQU0sRUFBRW9CLFFBQVEsQ0FBQ0csUUFBVCxZQUEwQkMsS0FGcEM7QUFHRSxRQUFJLEVBQUVDLDhFQUFXLENBQUNMLFFBQVEsQ0FBQ0csUUFBVCxZQUEwQkcsSUFBM0IsRUFBZ0MsR0FBaEMsQ0FIbkI7QUFJRSxRQUFJLEVBQUMsbUJBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVEYsRUFpQkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFNBQUssRUFBQywyQkFEUjtBQUVFLFVBQU0sRUFBRU4sUUFBUSxDQUFDRyxRQUFULENBQWtCSSxPQUFsQixDQUEwQkgsS0FGcEM7QUFHRSxRQUFJLEVBQUVDLDhFQUFXLENBQUNMLFFBQVEsQ0FBQ0csUUFBVCxDQUFrQkksT0FBbEIsQ0FBMEJELElBQTNCLEVBQWdDLEdBQWhDLENBSG5CO0FBSUUsUUFBSSxFQUFDLG1CQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpCRixFQXlCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsU0FBSyxFQUFDLHNCQURSO0FBRUUsVUFBTSxFQUFFTixRQUFRLENBQUNHLFFBQVQsQ0FBa0JLLE1BQWxCLENBQXlCSixLQUZuQztBQUdFLFFBQUksRUFBRUMsOEVBQVcsQ0FBQ0wsUUFBUSxDQUFDRyxRQUFULENBQWtCSyxNQUFsQixDQUF5QkYsSUFBMUIsRUFBK0IsR0FBL0IsQ0FIbkI7QUFJRSxRQUFJLEVBQUMsa0JBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBekJGLENBREYsQ0FoQkYsRUFvREUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsRUFBRWQsT0FBTyxDQUFDeEIsWUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxhQUFTLEVBQUUsYUFGYjtBQUdFLGNBQVUsRUFBQyxRQUhiO0FBSUUsV0FBTyxFQUFDLFFBSlY7QUFLRSxXQUFPLEVBQUUsRUFMWDtBQU1FLFNBQUssRUFBRTtBQUFFTSxXQUFLLEVBQUUsTUFBVDtBQUFpQjRCLFlBQU0sRUFBRSxNQUF6QjtBQUFpQ3RCLFlBQU0sRUFBRTtBQUF6QyxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLE9BQUcsRUFBQyxjQUFiO0FBQTRCLGFBQVMsRUFBRVksT0FBTyxDQUFDbkIsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsVUFBTSxFQUFFYSxtQkFBTyxDQUFDLHlGQUFELENBRGpCO0FBRUUsUUFBSSxFQUFDLFlBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFDRSxVQUFNLEVBQUVBLG1CQUFPLENBQUMsK0VBQUQsQ0FEakI7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFTRTtBQUNFLE9BQUcsRUFBRUEsbUJBQU8sQ0FBQyx5RkFBRCxDQURkO0FBRUUsT0FBRyxFQUFDLGNBRk47QUFHRSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ25CLEtBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBUkYsRUE4QkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUEwQixTQUFLLEVBQUU7QUFBRW9DLGFBQU8sRUFBRTtBQUFYLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsUUFBUSxDQUFDVSxVQUFULENBQW9CQyxHQUFwQixDQUF3QixVQUFBQyxLQUFLO0FBQUEsV0FBSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDaEMsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFBTSxXQUFLLEVBQUU7QUFBRTdCLGdCQUFRLEVBQUUsS0FBWjtBQUFtQk4sbUJBQVcsRUFBQztBQUEvQixPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsQ0FEZ0MsRUFLaEMsTUFBQyw4REFBRDtBQUNFLDRCQUFzQixFQUNwQm1CLE9BQU8sR0FBRztBQUFFaUIsZUFBTyxFQUFFO0FBQVgsT0FBSCxHQUEwQjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZyQztBQUlFLGFBQU8sRUFBRUQsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTGdDLENBQUo7QUFBQSxHQUE3QixDQURILENBREYsQ0E5QkYsQ0FERixDQXBERixFQWtLRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxNQUROO0FBRUUsYUFBUyxNQUZYO0FBR0UsV0FBTyxFQUFDLFFBSFY7QUFJRSxnQkFBWSxFQUFDLFFBSmY7QUFLRSxhQUFTLEVBQUVwQixPQUFPLENBQUN4QixZQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FsS0YsRUEyS0UsTUFBQyxzREFBRDtBQUNFLFFBQUksTUFETjtBQUVFLGFBQVMsTUFGWDtBQUdFLGFBQVMsRUFBRXdCLE9BQU8sQ0FBQ3hCLFlBSHJCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxTQUFLLEVBQUU7QUFDTHFCLG9CQUFjLEVBQUUsSUFEWDtBQUVMSixxQkFBZSw4QkFGVjtBQUdMYixlQUFTLEVBQUU7QUFITixLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQTNLRixFQXlMRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxNQUROO0FBRUUsYUFBUyxFQUFFb0IsT0FBTyxDQUFDeEIsWUFGckI7QUFHRSxTQUFLLEVBQUU7QUFBRUcsbUJBQWEsRUFBRTtBQUFqQixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFFLGFBRmI7QUFHRSxjQUFVLEVBQUMsUUFIYjtBQUlFLFdBQU8sRUFBQyxRQUpWO0FBS0UsYUFBUyxFQUFFcUIsT0FBTyxDQUFDUixVQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxzREFBRDtBQUNFLFFBQUksTUFETjtBQUVFLE1BQUUsRUFBRSxDQUZOO0FBR0UsTUFBRSxFQUFFLENBSE47QUFJRSxTQUFLLEVBQUU7QUFDTFIsZ0JBQVUsRUFBRSxNQURQO0FBRUxDLGlCQUFXLEVBQUVtQixPQUFPLEdBQUcsTUFBSCxHQUFZO0FBRjNCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQywwQkFETjtBQUVFLE9BQUcsRUFBQyxjQUZOO0FBR0UsYUFBUyxFQUFFSixPQUFPLENBQUNqQixVQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURULENBREYsRUFJRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQVJGLEVBY0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzUUFERixFQVFFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBZEYsRUF3QkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsZUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsYUFBUyxFQUFFdUMsaURBSGI7QUFJRSxRQUFJLEVBQUUsUUFKUjtBQUtFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETixLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQWNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsYUFBUyxFQUFFRCxpREFIYjtBQUlFLFFBQUksRUFBRSxVQUpSO0FBS0UsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxLQUROO0FBRUxDLHFCQUFlLEVBQUU7QUFGWixLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FkRixDQURGLENBeEJGLENBVEYsQ0FQRixDQUxGLENBekxGLENBREY7QUE0UUQsQ0F0UkQ7O0dBQU0xQixRO1VBQ1l6QixTLEVBQ1k0QiwwRSxFQUVkRSwwRCxFQUNFRSwrRCxFQUllRSw2RTs7O0tBVDNCVCxRO0FBd1JTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OGU3NDEwM2UxYzEzYTUyNGRkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9zcmMvTGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQnV0dG9uLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIEljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgdXNlVGhlbWUsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtzaG9ydGVuVGV4dH0gZnJvbSAnLi4vc3JjL3VpL2hlbHBlcnMvdWktaGVscGVycydcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IEluZm9JbWFnZUJsb2NrIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9JbmZvSW1hZ2VCbG9jaydcclxuaW1wb3J0IFZpZGVvQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL1ZpZGVvQmxvY2snXHJcbmltcG9ydCBIZXJvQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0hlcm9CbG9jaydcclxuaW1wb3J0IENhcmRzU2xpZGVyIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9DYXJkc1NsaWRlcidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGNvbnRlbnRCbG9jazoge1xyXG4gICAgcGFkZGluZ0xlZnQ6ICcwJyxcclxuICAgIHBhZGRpbmdSaWdodDogJzAnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzVlbScsXHJcbiAgICBtaW5IZWlnaHQ6ICc2MHZoJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgY291cGxlTG9nbzoge1xyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICcyZW0nLFxyXG4gICAgcGFkZGluZ1RvcDogJzVlbScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgd2lkdGg6ICcxNmVtJyxcclxuICAgIGhlaWdodDogJzE2ZW0nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMS4xZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvdXBsZUl0ZW06IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZyZnVudGVhbS1jb3VwbGUuanBnP3dlYnAnKX0nKWAsXHJcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5IGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcxMDAlIDEwMCUnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBtaW5IZWlnaHQ6ICc4MDBweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMjAlIDEwMCUnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMzVlbScsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzMxJSAxMDAlJyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzM1ZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy8nKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHsgc2l0ZURhdGEsIGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGUga2V5PSd0aXRsZSc+XHJcbiAgICAgICAgICBWUiBldmVudHMgZm9yIHRlYW1zLCBmYW1pbGllcyBhbmQgY29uZmVyZW5jZXMgfCBWUkZ1blRlYW1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndGl0bGUnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcbiAgICAgICAgICBjb250ZW50PSdCZXR0ZXIgdGhhbiByZWFsaXR5IFZSIGV4cGVyaWVuY2VzIHwgVlJGdW5UZWFtJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEga2V5PSdvZ3VybCcgcHJvcGVydHk9J29nOnVybCcgY29udGVudD0naHR0cHM6Ly9mdW50ZWFtdnIuY29tJyAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD0nY2Fub25pY2FsJyBrZXk9J2Nhbm9uaWNhbCcgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tLycgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9PlxyXG4gICAgICAgIDxIZXJvQmxvY2sgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgc3BhY2luZz17MTB9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW46ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgICAgICAgIGlkPSdjb250ZW50U3RhcnQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPEluZm9JbWFnZUJsb2NrXHJcbiAgICAgICAgICAgICAgaW1hZ2U9Jy9hc3NldHMvaWNvbi10ZWFtd29yay5zdmcnXHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtzaXRlRGF0YS5zZXJ2aWNlcy5wcml2YXRlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3Nob3J0ZW5UZXh0KHNpdGVEYXRhLnNlcnZpY2VzLnByaXZhdGUudGV4dCwxMjApfVxyXG4gICAgICAgICAgICAgIHBhdGg9Jy9zZXJ2aWNlcy9wcml2YXRlJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPEluZm9JbWFnZUJsb2NrXHJcbiAgICAgICAgICAgICAgaW1hZ2U9Jy9hc3NldHMvaWNvbi1jcmVhdGl2ZS5zdmcnXHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtzaXRlRGF0YS5zZXJ2aWNlcy5jb21wYW55LnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3Nob3J0ZW5UZXh0KHNpdGVEYXRhLnNlcnZpY2VzLmNvbXBhbnkudGV4dCwxMjApfVxyXG4gICAgICAgICAgICAgIHBhdGg9Jy9zZXJ2aWNlcy9jb21wYW55J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPEluZm9JbWFnZUJsb2NrXHJcbiAgICAgICAgICAgICAgaW1hZ2U9Jy9hc3NldHMvaWNvbi1mdW4uc3ZnJ1xyXG4gICAgICAgICAgICAgIGhlYWRlcj17c2l0ZURhdGEuc2VydmljZXMuZXZlbnRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3Nob3J0ZW5UZXh0KHNpdGVEYXRhLnNlcnZpY2VzLmV2ZW50cy50ZXh0LDEyMCl9XHJcbiAgICAgICAgICAgICAgcGF0aD0nL3NlcnZpY2VzL2V2ZW50cydcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBkaXJlY3Rpb249eydyb3ctcmV2ZXJzZSd9XHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlIGFsdD0nZnVudGVhbSBsb2dvJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy9nbGFzc2VzX29jdWx1cy5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2Uvd2VicCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy9nbGFzc2VzX29jdWx1cy5wbmcnKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy9nbGFzc2VzX29jdWx1cy5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9nbGFzc2VzX29jdWx1cy5wbmc/d2VicCdcclxuICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBzdHlsZT17eyBwYWRkaW5nOiAnMCcgfX0+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIHtzaXRlRGF0YS5tZWdhUG9pbnRzLm1hcChwb2ludCA9PiA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICc0ZW0nLCBtYXJnaW5SaWdodDonMWVtJyB9fT7wn5qAPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPyB7IHZhcmlhbnQ6ICdib2R5MScgfSA6IHsgdmFyaWFudDogJ2g2JyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cG9pbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+KX1cclxuICAgICAgICAgICAgICB7LyogPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhIGZhLWN1YmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA/IHsgdmFyaWFudDogJ2JvZHkxJyB9IDogeyB2YXJpYW50OiAnaDYnIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PSdUaGUgbW9zdCBhZHZhbmNlZCBWUiBIZWFkc2V0LiBObyBjYWJsZXMgb3IgY2x1bXN5IGVxdWlwbWVudC4gRmFzdCBhbmQgZWFzeSBhZGFwdGF0aW9uLidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtY3ViZSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8geyB2YXJpYW50OiAnYm9keTEnIH0gOiB7IHZhcmlhbnQ6ICdoNicgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9J1N1aXRhYmxlIGZvciBncm91cHMgb2YgMi0xMiBwYXJ0aWNpcGFudHMsIGluIGFsbCBhZ2VzICg2LTgwKS4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhIGZhLWN1YmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA/IHsgdmFyaWFudDogJ2JvZHkxJyB9IDogeyB2YXJpYW50OiAnaDYnIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PSdQcm9mZXNzaW9uYWwgZ3VpZGVuY2UgYnkgb3VyIGVtcGhhdGljIGluc3RydWN0b3JzLidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtY3ViZSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8geyB2YXJpYW50OiAnYm9keTEnIH0gOiB7IHZhcmlhbnQ6ICdoNicgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9J091ciBwbGFjZSBvciB5b3Vycz8gV2Ugd2lsbCBiZSBoYXBweSB0byBhZHZpY2UgeW91LiBKdXN0IGNvbnRhY3QgdXMuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPiAqL31cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgIGFsaWduQ29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8VmlkZW9CbG9jayAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9XHJcbiAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMlJyxcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL2Fzc2V0cy90cmlUaWxlLnN2ZycpYCxcclxuICAgICAgICAgIG1pbkhlaWdodDogJzgwdmgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7LyogPENhcmRibG9jayAvPiAqL31cclxuICAgICAgICA8Q2FyZHNTbGlkZXIgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfVxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICcwJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgZGlyZWN0aW9uPXsncm93LXJldmVyc2UnfVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXBsZUl0ZW19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17OH1cclxuICAgICAgICAgICAgbWQ9ezR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBtYXRjaGVzID8gJ2F1dG8nIDogJzEwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2Z1bnRlYW0tbG9nby5zdmcnXHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY291cGxlTG9nb31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+XHJcbiAgICAgICAgICAgICAgICAgIFdFIEFSRSA8c3Ryb25nPlZSIEZVTiBURUFNPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGFsaWduPSdqdXN0aWZ5Jz5cclxuICAgICAgICAgICAgICAgICAgQSB0ZWFtIG9mIHRlY2ggZ2Vla3MgYW5kIHRyYWluaW5nIGluc3RydWN0b3JzLCB3aG8gbG92ZXMgdG9cclxuICAgICAgICAgICAgICAgICAgZXNjb3J0IGdyb3VwcyBpbiBjb25zZXB0dWFsIHRyaXBzIGludG8gdGhlIFZpcnR1YWwgUmVhbGl0eVxyXG4gICAgICAgICAgICAgICAgICB3b3JsZC4gT3VyIG1lbnRvcnMgd2lsbCBndWlkZSB5b3UgaGFuZCBieSBoYW5kIGludG8gdGhlIG5ld1xyXG4gICAgICAgICAgICAgICAgICB3b3JsZCwgYW5kIHdpbGwga25vdyB0byB0YWtlIGEgc3RlcCBiYWNrIHdoZW4geW91J2xsIGJlIGZseWluZ1xyXG4gICAgICAgICAgICAgICAgICBvbiB5b3VyIG93bi5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL2Fib3V0J31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0naW5oZXJpdCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eycvY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==