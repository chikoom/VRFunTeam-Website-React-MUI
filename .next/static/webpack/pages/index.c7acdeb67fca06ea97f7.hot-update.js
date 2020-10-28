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
/* harmony import */ var _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ui/parts/InfoImageBlock */ "./src/ui/parts/InfoImageBlock.jsx");
/* harmony import */ var _src_ui_parts_VideoBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/ui/parts/VideoBlock */ "./src/ui/parts/VideoBlock.jsx");
/* harmony import */ var _src_ui_parts_HeroBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/ui/parts/HeroBlock */ "./src/ui/parts/HeroBlock.jsx");
/* harmony import */ var _src_ui_parts_CardsSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/ui/parts/CardsSlider */ "./src/ui/parts/CardsSlider.jsx");
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/contexts/LangContext */ "./src/contexts/LangContext.js");


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

  var _usePagesContext = Object(_src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])(),
      setPageIndecies = _usePagesContext.setPageIndecies;

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var matches = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])(theme.breakpoints.down('md'));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPageIndecies('/');
  }, []);

  var _useLanguageContext = Object(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_11__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "VR events for teams, families and conferences | VRFunTeam"), __jsx("meta", {
    key: "ogtitle",
    property: "og:title",
    content: "Better than reality VR experiences | VRFunTeam",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogurl",
    property: "og:url",
    content: "https://funteamvr.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    key: "canonical",
    href: "https://funteamvr.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_HeroBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(_src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    image: "/assets/icon-teamwork.svg",
    header: siteData.services["private"].title,
    text: siteData.services["private"].text,
    path: "/services/private",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    image: "/assets/icon-creative.svg",
    header: siteData.services.company.title,
    text: siteData.services.company.text,
    path: "/services/company",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_src_ui_parts_InfoImageBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    image: "/assets/icon-fun.svg",
    header: siteData.services.events.title,
    text: siteData.services.events.text,
    path: "/services/events",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("picture", {
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: __webpack_require__(/*! ../public/assets/glasses_oculus.png?webp */ "./public/assets/glasses_oculus.png?webp"),
    type: "image/webp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }), __jsx("source", {
    srcSet: __webpack_require__(/*! ../public/assets/glasses_oculus.png */ "./public/assets/glasses_oculus.png"),
    type: "image/png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../public/assets/glasses_oculus.png?webp */ "./public/assets/glasses_oculus.png?webp"),
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    className: "fa fa-cube",
    color: "primary",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
    primaryTypographyProps: matches ? {
      variant: 'body1'
    } : {
      variant: 'h6'
    },
    primary: "The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    className: "fa fa-cube",
    color: "primary",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
    primaryTypographyProps: matches ? {
      variant: 'body1'
    } : {
      variant: 'h6'
    },
    primary: "Suitable for groups of 2-12 participants, in all ages (6-80).",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    className: "fa fa-cube",
    color: "primary",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
    primaryTypographyProps: matches ? {
      variant: 'body1'
    } : {
      variant: 'h6'
    },
    primary: "Professional guidence by our emphatic instructors.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    className: "fa fa-cube",
    color: "primary",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
    primaryTypographyProps: matches ? {
      variant: 'body1'
    } : {
      variant: 'h6'
    },
    primary: "Our place or yours? We will be happy to advice you. Just contact us.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    alignContent: "center",
    className: classes.contentBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_VideoBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx(_src_ui_parts_CardsSlider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
      lineNumber: 249,
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
      lineNumber: 254,
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
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/assets/funteam-logo.svg",
    alt: "funteam logo",
    className: classes.coupleLogo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, "WE ARE ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 26
    }
  }, "VR FUN TEAM")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    align: "justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }, "A team of tech geeks and training instructors, who loves to escort groups in conseptual trips into the Virtual Reality world. Our mentors will guide you hand by hand into the new world, and will know to take a step back when you'll be flying on your own."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 297,
      columnNumber: 21
    }
  }, "About Us")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 310,
      columnNumber: 21
    }
  }, "Contact Us")))))))));
};

_s(HomePage, "mnreHIJDvwf1cxZpKbvcmJsiSz0=", false, function () {
  return [useStyles, _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"], _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_11__["useLanguageContext"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRlbnRCbG9jayIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1pbkhlaWdodCIsImltYWdlIiwid2lkdGgiLCJjb3VwbGVMb2dvIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJmb250U2l6ZSIsImNvdXBsZUl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJIb21lUGFnZSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwibWFyZ2luIiwic2VydmljZXMiLCJ0aXRsZSIsInRleHQiLCJjb21wYW55IiwiZXZlbnRzIiwicGFkZGluZyIsInZhcmlhbnQiLCJMaW5rIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBOztBQUFBLFNBQUs7QUFDckNDLGdCQUFZLEVBQUU7QUFDWkMsaUJBQVcsRUFBRSxHQUREO0FBRVpDLGtCQUFZLEVBQUUsR0FGRjtBQUdaQyxtQkFBYSxFQUFFLEtBSEg7QUFJ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S0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFjRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLGFBQVMsRUFBRUQsaURBSGI7QUFJRSxRQUFJLEVBQUUsVUFKUjtBQUtFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsS0FETjtBQUVMQyxxQkFBZSxFQUFFO0FBRlosS0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBZEYsQ0FERixDQXhCRixDQVRGLENBUEYsQ0FMRixDQTdLRixDQURGO0FBZ1FELENBMVFEOztHQUFNdEIsUTtVQUNZekIsUyxFQUNZNEIsMEUsRUFFZEUsMEQsRUFDRUUsK0QsRUFJZUUsNkU7OztLQVQzQlQsUTtBQTRRU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzdhY2RlYjY3ZmNhMDZlYTk3ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vc3JjL0xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEJ1dHRvbixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBJY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIHVzZVRoZW1lLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBJbmZvSW1hZ2VCbG9jayBmcm9tICcuLi9zcmMvdWkvcGFydHMvSW5mb0ltYWdlQmxvY2snXHJcbmltcG9ydCBWaWRlb0Jsb2NrIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9WaWRlb0Jsb2NrJ1xyXG5pbXBvcnQgSGVyb0Jsb2NrIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9IZXJvQmxvY2snXHJcbmltcG9ydCBDYXJkc1NsaWRlciBmcm9tICcuLi9zcmMvdWkvcGFydHMvQ2FyZHNTbGlkZXInXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBjb250ZW50QmxvY2s6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiAnMCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6ICcwJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICc1ZW0nLFxyXG4gICAgbWluSGVpZ2h0OiAnNjB2aCcsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNvdXBsZUxvZ286IHtcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnMmVtJyxcclxuICAgIHBhZGRpbmdUb3A6ICc1ZW0nLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHdpZHRoOiAnMTZlbScsXHJcbiAgICBoZWlnaHQ6ICcxNmVtJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogJzEuMWVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb3VwbGVJdGVtOiB7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy92cmZ1bnRlYW0tY291cGxlLmpwZz93ZWJwJyl9JylgLFxyXG4gICAgdGV4dEFsaWduOiAnanVzdGlmeSBjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMTAwJSAxMDAlJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgbWluSGVpZ2h0OiAnODAwcHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzIwJSAxMDAlJyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzM1ZW0nLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICczMSUgMTAwJScsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICczNWVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNldFBhZ2VJbmRlY2llcyB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGFnZUluZGVjaWVzKCcvJylcclxuICB9LCBbXSlcclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlIGtleT0ndGl0bGUnPlxyXG4gICAgICAgICAgVlIgZXZlbnRzIGZvciB0ZWFtcywgZmFtaWxpZXMgYW5kIGNvbmZlcmVuY2VzIHwgVlJGdW5UZWFtXHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAga2V5PSdvZ3RpdGxlJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnRpdGxlJ1xyXG4gICAgICAgICAgY29udGVudD0nQmV0dGVyIHRoYW4gcmVhbGl0eSBWUiBleHBlcmllbmNlcyB8IFZSRnVuVGVhbSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIGtleT0nb2d1cmwnIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbScgLz5cclxuICAgICAgICA8bGluayByZWw9J2Nhbm9uaWNhbCcga2V5PSdjYW5vbmljYWwnIGhyZWY9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS8nIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfT5cclxuICAgICAgICA8SGVyb0Jsb2NrIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBkaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgIHNwYWNpbmc9ezEwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nIH19XHJcbiAgICAgICAgICBpZD0nY29udGVudFN0YXJ0J1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgIDxJbmZvSW1hZ2VCbG9ja1xyXG4gICAgICAgICAgICAgIGltYWdlPScvYXNzZXRzL2ljb24tdGVhbXdvcmsuc3ZnJ1xyXG4gICAgICAgICAgICAgIGhlYWRlcj17c2l0ZURhdGEuc2VydmljZXMucHJpdmF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtzaXRlRGF0YS5zZXJ2aWNlcy5wcml2YXRlLnRleHR9XHJcbiAgICAgICAgICAgICAgcGF0aD0nL3NlcnZpY2VzL3ByaXZhdGUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5mb0ltYWdlQmxvY2tcclxuICAgICAgICAgICAgICBpbWFnZT0nL2Fzc2V0cy9pY29uLWNyZWF0aXZlLnN2ZydcclxuICAgICAgICAgICAgICBoZWFkZXI9e3NpdGVEYXRhLnNlcnZpY2VzLmNvbXBhbnkudGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17c2l0ZURhdGEuc2VydmljZXMuY29tcGFueS50ZXh0fVxyXG4gICAgICAgICAgICAgIHBhdGg9Jy9zZXJ2aWNlcy9jb21wYW55J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPEluZm9JbWFnZUJsb2NrXHJcbiAgICAgICAgICAgICAgaW1hZ2U9Jy9hc3NldHMvaWNvbi1mdW4uc3ZnJ1xyXG4gICAgICAgICAgICAgIGhlYWRlcj17c2l0ZURhdGEuc2VydmljZXMuZXZlbnRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3NpdGVEYXRhLnNlcnZpY2VzLmV2ZW50cy50ZXh0fVxyXG4gICAgICAgICAgICAgIHBhdGg9Jy9zZXJ2aWNlcy9ldmVudHMnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja30+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgZGlyZWN0aW9uPXsncm93LXJldmVyc2UnfVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgc3BhY2luZz17MTB9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW46ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8cGljdHVyZSBhbHQ9J2Z1bnRlYW0gbG9nbycgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cclxuICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvZ2xhc3Nlc19vY3VsdXMucG5nP3dlYnAnKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3dlYnAnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvZ2xhc3Nlc19vY3VsdXMucG5nJyl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvZ2xhc3Nlc19vY3VsdXMucG5nP3dlYnAnKX1cclxuICAgICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvZ2xhc3Nlc19vY3VsdXMucG5nP3dlYnAnXHJcbiAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc3R5bGU9e3sgcGFkZGluZzogJzAnIH19PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtY3ViZSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8geyB2YXJpYW50OiAnYm9keTEnIH0gOiB7IHZhcmlhbnQ6ICdoNicgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9J1RoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jdWJlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPyB7IHZhcmlhbnQ6ICdib2R5MScgfSA6IHsgdmFyaWFudDogJ2g2JyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT0nU3VpdGFibGUgZm9yIGdyb3VwcyBvZiAyLTEyIHBhcnRpY2lwYW50cywgaW4gYWxsIGFnZXMgKDYtODApLidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEgZmEtY3ViZSdcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8geyB2YXJpYW50OiAnYm9keTEnIH0gOiB7IHZhcmlhbnQ6ICdoNicgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9J1Byb2Zlc3Npb25hbCBndWlkZW5jZSBieSBvdXIgZW1waGF0aWMgaW5zdHJ1Y3RvcnMuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYSBmYS1jdWJlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPyB7IHZhcmlhbnQ6ICdib2R5MScgfSA6IHsgdmFyaWFudDogJ2g2JyB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT0nT3VyIHBsYWNlIG9yIHlvdXJzPyBXZSB3aWxsIGJlIGhhcHB5IHRvIGFkdmljZSB5b3UuIEp1c3QgY29udGFjdCB1cy4nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZpZGVvQmxvY2sgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEJsb2NrfVxyXG4gICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICczJScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9hc3NldHMvdHJpVGlsZS5zdmcnKWAsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc4MHZoJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDxDYXJkYmxvY2sgLz4gKi99XHJcbiAgICAgICAgPENhcmRzU2xpZGVyIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRCbG9ja31cclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnMCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGRpcmVjdGlvbj17J3Jvdy1yZXZlcnNlJ31cclxuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3VwbGVJdGVtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezh9XHJcbiAgICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogbWF0Y2hlcyA/ICdhdXRvJyA6ICcxMCUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9mdW50ZWFtLWxvZ28uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdXBsZUxvZ299XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlxyXG4gICAgICAgICAgICAgICAgICBXRSBBUkUgPHN0cm9uZz5WUiBGVU4gVEVBTTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBhbGlnbj0nanVzdGlmeSc+XHJcbiAgICAgICAgICAgICAgICAgIEEgdGVhbSBvZiB0ZWNoIGdlZWtzIGFuZCB0cmFpbmluZyBpbnN0cnVjdG9ycywgd2hvIGxvdmVzIHRvXHJcbiAgICAgICAgICAgICAgICAgIGVzY29ydCBncm91cHMgaW4gY29uc2VwdHVhbCB0cmlwcyBpbnRvIHRoZSBWaXJ0dWFsIFJlYWxpdHlcclxuICAgICAgICAgICAgICAgICAgd29ybGQuIE91ciBtZW50b3JzIHdpbGwgZ3VpZGUgeW91IGhhbmQgYnkgaGFuZCBpbnRvIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgICAgd29ybGQsIGFuZCB3aWxsIGtub3cgdG8gdGFrZSBhIHN0ZXAgYmFjayB3aGVuIHlvdSdsbCBiZSBmbHlpbmdcclxuICAgICAgICAgICAgICAgICAgb24geW91ciBvd24uXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17Jy9hYm91dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL2NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=