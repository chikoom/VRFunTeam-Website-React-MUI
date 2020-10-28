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
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_VideoBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    article: siteData.articles[0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_CardsSlider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 202,
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
      lineNumber: 207,
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
      lineNumber: 214,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/assets/funteam-logo.svg",
    alt: "funteam logo",
    className: classes.coupleLogo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, "WE ARE ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 26
    }
  }, "VR FUN TEAM")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    align: "justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, "A team of tech geeks and training instructors, who loves to escort groups in conseptual trips into the Virtual Reality world. Our mentors will guide you hand by hand into the new world, and will know to take a step back when you'll be flying on your own."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
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
      lineNumber: 250,
      columnNumber: 21
    }
  }, "About Us")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
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
      lineNumber: 263,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRlbnRCbG9jayIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1pbkhlaWdodCIsImltYWdlIiwid2lkdGgiLCJjb3VwbGVMb2dvIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJmb250U2l6ZSIsImNvdXBsZUl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJIb21lUGFnZSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFyZ2luIiwic2VydmljZXMiLCJ0aXRsZSIsInNob3J0ZW5UZXh0IiwidGV4dCIsImNvbXBhbnkiLCJldmVudHMiLCJwYWRkaW5nIiwibWVnYVBvaW50cyIsIm1hcCIsInBvaW50IiwidmFyaWFudCIsImFydGljbGVzIiwiTGluayIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSxTQUFLO0FBQ3JDQyxnQkFBWSxFQUFFO0FBQ1pDLGlCQUFX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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFTLEVBQUVELGlEQUhiO0FBSUUsUUFBSSxFQUFFLFVBSlI7QUFLRSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLEtBRE47QUFFTEMscUJBQWUsRUFBRTtBQUZaLEtBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWRGLENBREYsQ0F4QkYsQ0FURixDQVBGLENBTEYsQ0E3SEYsQ0FERjtBQWdORCxDQTFORDs7R0FBTTNCLFE7VUFDWXpCLFMsRUFDWTRCLDBFLEVBRWRFLDBELEVBQ0VFLCtELEVBSWVFLDZFOzs7S0FUM0JULFE7QUE0TlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0ZDIwNTZmMzA5YjJhMGFiMjJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL3NyYy9MaW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L0hlYWQnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBCdXR0b24sXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICB1c2VUaGVtZSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3Nob3J0ZW5UZXh0fSBmcm9tICcuLi9zcmMvdWkvaGVscGVycy91aS1oZWxwZXJzJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgSW5mb0ltYWdlQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0luZm9JbWFnZUJsb2NrJ1xyXG5pbXBvcnQgVmlkZW9CbG9jayBmcm9tICcuLi9zcmMvdWkvcGFydHMvVmlkZW9CbG9jaydcclxuaW1wb3J0IEhlcm9CbG9jayBmcm9tICcuLi9zcmMvdWkvcGFydHMvSGVyb0Jsb2NrJ1xyXG5pbXBvcnQgQ2FyZHNTbGlkZXIgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0NhcmRzU2xpZGVyJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgY29udGVudEJsb2NrOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogJzAnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnNWVtJyxcclxuICAgIG1pbkhlaWdodDogJzYwdmgnLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBjb3VwbGVMb2dvOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzJlbScsXHJcbiAgICBwYWRkaW5nVG9wOiAnNWVtJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB3aWR0aDogJzE2ZW0nLFxyXG4gICAgaGVpZ2h0OiAnMTZlbScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6ICcxLjFlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY291cGxlSXRlbToge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvdnJmdW50ZWFtLWNvdXBsZS5qcGc/d2VicCcpfScpYCxcclxuICAgIHRleHRBbGlnbjogJ2p1c3RpZnkgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzEwMCUgMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIG1pbkhlaWdodDogJzgwMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICcyMCUgMTAwJScsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICczNWVtJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMzElIDEwMCUnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMzVlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBzZXRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnLycpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSwgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5cclxuICAgICAgICAgIFZSIGV2ZW50cyBmb3IgdGVhbXMsIGZhbWlsaWVzIGFuZCBjb25mZXJlbmNlcyB8IFZSRnVuVGVhbVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBWUkZ1blRlYW0nXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBrZXk9J29ndXJsJyBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PSdodHRwczovL2Z1bnRlYW12ci5jb20nIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdjYW5vbmljYWwnIGtleT0nY2Fub25pY2FsJyBocmVmPSdodHRwczovL2Z1bnRlYW12ci5jb20vJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja30+XHJcbiAgICAgICAgPEhlcm9CbG9jayAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja30+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICBzcGFjaW5nPXsxMH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgaWQ9J2NvbnRlbnRTdGFydCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLXRlYW13b3JrLnN2ZydcclxuICAgICAgICAgICAgICBoZWFkZXI9e3NpdGVEYXRhLnNlcnZpY2VzLnByaXZhdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2hvcnRlblRleHQoc2l0ZURhdGEuc2VydmljZXMucHJpdmF0ZS50ZXh0LDEyMCl9XHJcbiAgICAgICAgICAgICAgcGF0aD0nL3NlcnZpY2VzL3ByaXZhdGUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLWNyZWF0aXZlLnN2ZydcclxuICAgICAgICAgICAgICBoZWFkZXI9e3NpdGVEYXRhLnNlcnZpY2VzLmNvbXBhbnkudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2hvcnRlblRleHQoc2l0ZURhdGEuc2VydmljZXMuY29tcGFueS50ZXh0LDEyMCl9XHJcbiAgICAgICAgICAgICAgcGF0aD0nL3NlcnZpY2VzL2NvbXBhbnknXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLWZ1bi5zdmcnXHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtzaXRlRGF0YS5zZXJ2aWNlcy5ldmVudHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2hvcnRlblRleHQoc2l0ZURhdGEuc2VydmljZXMuZXZlbnRzLnRleHQsMTIwKX1cclxuICAgICAgICAgICAgICBwYXRoPScvc2VydmljZXMvZXZlbnRzJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj17J3Jvdy1yZXZlcnNlJ31cclxuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPHBpY3R1cmUgYWx0PSdmdW50ZWFtIGxvZ28nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZz93ZWJwJyl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdpbWFnZS93ZWJwJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZycpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZz93ZWJwJyl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2dsYXNzZXNfb2N1bHVzLnBuZz93ZWJwJ1xyXG4gICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBhZGRpbmc6ICcwJyB9fT5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAge3NpdGVEYXRhLm1lZ2FQb2ludHMubWFwKHBvaW50ID0+IDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzRlbScsIG1hcmdpblJpZ2h0OicxZW0nIH19PvCfmoA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA/IHsgdmFyaWFudDogJ2JvZHkxJyB9IDogeyB2YXJpYW50OiAnaDYnIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtwb2ludH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT4pfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja31cclxuICAgICAgPlxyXG4gICAgICAgIDxWaWRlb0Jsb2NrIGFydGljbGU9e3NpdGVEYXRhLmFydGljbGVzWzBdfSAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50QmxvY2t9XHJcbiAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMlJyxcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL2Fzc2V0cy90cmlUaWxlLnN2ZycpYCxcclxuICAgICAgICAgIG1pbkhlaWdodDogJzgwdmgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7LyogPENhcmRibG9jayAvPiAqL31cclxuICAgICAgICA8Q2FyZHNTbGlkZXIgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfVxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICcwJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgZGlyZWN0aW9uPXsncm93LXJldmVyc2UnfVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXBsZUl0ZW19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17OH1cclxuICAgICAgICAgICAgbWQ9ezR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBtYXRjaGVzID8gJ2F1dG8nIDogJzEwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2Z1bnRlYW0tbG9nby5zdmcnXHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY291cGxlTG9nb31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+XHJcbiAgICAgICAgICAgICAgICAgIFdFIEFSRSA8c3Ryb25nPlZSIEZVTiBURUFNPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGFsaWduPSdqdXN0aWZ5Jz5cclxuICAgICAgICAgICAgICAgICAgQSB0ZWFtIG9mIHRlY2ggZ2Vla3MgYW5kIHRyYWluaW5nIGluc3RydWN0b3JzLCB3aG8gbG92ZXMgdG9cclxuICAgICAgICAgICAgICAgICAgZXNjb3J0IGdyb3VwcyBpbiBjb25zZXB0dWFsIHRyaXBzIGludG8gdGhlIFZpcnR1YWwgUmVhbGl0eVxyXG4gICAgICAgICAgICAgICAgICB3b3JsZC4gT3VyIG1lbnRvcnMgd2lsbCBndWlkZSB5b3UgaGFuZCBieSBoYW5kIGludG8gdGhlIG5ld1xyXG4gICAgICAgICAgICAgICAgICB3b3JsZCwgYW5kIHdpbGwga25vdyB0byB0YWtlIGEgc3RlcCBiYWNrIHdoZW4geW91J2xsIGJlIGZseWluZ1xyXG4gICAgICAgICAgICAgICAgICBvbiB5b3VyIG93bi5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL2Fib3V0J31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0naW5oZXJpdCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eycvY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==