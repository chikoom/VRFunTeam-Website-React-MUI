webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ "./node_modules/next/Head.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _src_ui_parts_PersonBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/ui/parts/PersonBlock */ "./src/ui/parts/PersonBlock.jsx");
/* harmony import */ var _src_ui_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/ui/PageHeader */ "./src/ui/PageHeader.jsx");
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/contexts/LangContext */ "./src/contexts/LangContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\pages\\about.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var managers = [{
  image: '/assets/idan.jpg',
  name: {
    en: 'Idan Baron',
    he: 'עידן בראון'
  },
  title: {
    en: "Founder & CTO",
    he: "Founder & CTO"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}, {
  image: '/assets/lihoo.jpg',
  name: {
    en: 'Lihoo Zaid',
    he: 'ליהוא זייד'
  },
  title: {
    en: "Founder & CEO",
    he: "Founder & CEO"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}];
var instructors = [{
  image: '/assets/dana.jpg',
  name: {
    en: 'Dana Ganesh',
    he: 'דנה גנאס'
  },
  title: {
    en: "Instructor",
    he: "\u05DE\u05D3\u05E8\u05D9\u05DB\u05D4"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}, {
  image: '/assets/david.jpg',
  name: {
    en: 'Dana Ganesh',
    he: 'דנה גנאס'
  },
  title: {
    en: "Instructor",
    he: "\u05DE\u05D3\u05E8\u05D9\u05DB\u05D4"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}, {
  image: '/assets/michael.jpg',
  name: {
    en: 'Dana Ganesh',
    he: 'דנה גנאס'
  },
  title: {
    en: "Instructor",
    he: "\u05DE\u05D3\u05E8\u05D9\u05DB\u05D4"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}, {
  image: '/assets/ossy.jpg',
  name: {
    en: 'Dana Ganesh',
    he: 'דנה גנאס'
  },
  title: {
    en: "Instructor",
    he: "\u05DE\u05D3\u05E8\u05D9\u05DB\u05D4"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}, {
  image: '/assets/ron.jpg',
  name: {
    en: 'Dana Ganesh',
    he: 'דנה גנאס'
  },
  title: {
    en: "Instructor",
    he: "\u05DE\u05D3\u05E8\u05D9\u05DB\u05D4"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}, {
  image: '/assets/tammy.jpg',
  name: {
    en: 'Dana Ganesh',
    he: 'דנה גנאס'
  },
  title: {
    en: "Instructor",
    he: "\u05DE\u05D3\u05E8\u05D9\u05DB\u05D4"
  },
  text: {
    en: "Lorem ipsum bla bla",
    he: "\u05D4\u05D3\u05E8\u05D5\u05E9\u05D4 \u05DC\u05E8\u05DE\u05EA \u05DC\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D3\u05E2\u05EA \u05D5\u05D4\u05DC\u05D0\u05D4"
  }
}];
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {};
});

var About = function About(props) {
  _s();

  var classes = useStyles();

  var _usePagesContext = Object(_src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"])(),
      setPageIndecies = _usePagesContext.setPageIndecies,
      getPageMeta = _usePagesContext.getPageMeta;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPageIndecies('/about');
  }, []);

  var _useLanguageContext = Object(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_6__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(_src_ui_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "About Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, "About Us - Company & Team | VRFunTeam"), __jsx("meta", {
    name: "description",
    key: "description",
    content: "VRFunTeam provide imersive custom VR Experiences, led by talented instructors. Our team will ensure your trip trough the VR world will be imerssive and fun.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogtitle",
    property: "og:title",
    content: "Better than reality VR experiences | About Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogurl",
    property: "og:url",
    content: "https://funteamvr.com/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    key: "canonical",
    href: "https://funteamvr.com/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    style: {
      marginBottom: '3em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, siteData.weAre.heading)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    container: true,
    direction: "row",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("picture", {
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("source", {
    srcSet: __webpack_require__(/*! ../public/assets/vrteam.png?webp */ "./public/assets/vrteam.png?webp"),
    type: "image/webp",
    style: {
      width: '90%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }), __jsx("source", {
    srcSet: __webpack_require__(/*! ../public/assets/vrteam.png */ "./public/assets/vrteam.png"),
    type: "image/png",
    style: {
      width: '90%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../public/assets/vrteam.png?webp */ "./public/assets/vrteam.png?webp"),
    alt: "funteam logo",
    style: {
      width: '90%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    style: {
      marginTop: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, siteData.weAre.text1), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    style: {
      marginTop: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, siteData.weAre.text2))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    style: {
      marginBottom: '3em',
      marginTop: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, siteData.theTeam.heading)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "row",
    justify: "center",
    style: {
      marginBottom: '3em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, managers.map(function (person) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: person.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx(_src_ui_parts_PersonBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: person.image,
      name: person.name,
      title: person.title,
      text: person.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "row",
    justify: "center",
    style: {
      marginBottom: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, instructors.map(function (person) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: person.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }
    }, __jsx(_src_ui_parts_PersonBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: person.image,
      name: person.name,
      title: person.title,
      text: person.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }));
  })))));
};

_s(About, "WJBRDX9pGkWzyW0xb4gXDGBx5Ao=", false, function () {
  return [useStyles, _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"], _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_6__["useLanguageContext"]];
});

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIm1hbmFnZXJzIiwiaW1hZ2UiLCJuYW1lIiwiZW4iLCJoZSIsInRpdGxlIiwidGV4dCIsImluc3RydWN0b3JzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQWJvdXQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJzZXRQYWdlSW5kZWNpZXMiLCJnZXRQYWdlTWV0YSIsInVzZUVmZmVjdCIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwibGFuZ3VhZ2UiLCJtYXJnaW5Cb3R0b20iLCJ3ZUFyZSIsImhlYWRpbmciLCJyZXF1aXJlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ0ZXh0MSIsInRleHQyIiwidGhlVGVhbSIsIm1hcCIsInBlcnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRTtBQUFDQyxNQUFFLEVBQUMsWUFBSjtBQUFrQkMsTUFBRSxFQUFDO0FBQXJCLEdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBQUNGLE1BQUUsaUJBQUg7QUFBcUJDLE1BQUU7QUFBdkIsR0FIVDtBQUlFRSxNQUFJLEVBQUU7QUFBQ0gsTUFBRSx1QkFBSDtBQUEyQkMsTUFBRTtBQUE3QjtBQUpSLENBRGUsRUFPZjtBQUNFSCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUNDLE1BQUUsRUFBQyxZQUFKO0FBQWtCQyxNQUFFLEVBQUM7QUFBckIsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQ0YsTUFBRSxpQkFBSDtBQUFxQkMsTUFBRTtBQUF2QixHQUhUO0FBSUVFLE1BQUksRUFBRTtBQUFDSCxNQUFFLHVCQUFIO0FBQTJCQyxNQUFFO0FBQTdCO0FBSlIsQ0FQZSxDQUFqQjtBQWVBLElBQU1HLFdBQVcsR0FBRyxDQUNsQjtBQUNFTixPQUFLLEVBQUUsa0JBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUNDLE1BQUUsRUFBQyxhQUFKO0FBQW1CQyxNQUFFLEVBQUM7QUFBdEIsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQ0YsTUFBRSxjQUFIO0FBQWtCQyxNQUFFO0FBQXBCLEdBSFQ7QUFJRUUsTUFBSSxFQUFFO0FBQUNILE1BQUUsdUJBQUg7QUFBMkJDLE1BQUU7QUFBN0I7QUFKUixDQURrQixFQU9sQjtBQUNFSCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUNDLE1BQUUsRUFBQyxhQUFKO0FBQW1CQyxNQUFFLEVBQUM7QUFBdEIsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQ0YsTUFBRSxjQUFIO0FBQWtCQyxNQUFFO0FBQXBCLEdBSFQ7QUFJRUUsTUFBSSxFQUFFO0FBQUNILE1BQUUsdUJBQUg7QUFBMkJDLE1BQUU7QUFBN0I7QUFKUixDQVBrQixFQWFsQjtBQUNFSCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUNDLE1BQUUsRUFBQyxhQUFKO0FBQW1CQyxNQUFFLEVBQUM7QUFBdEIsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQ0YsTUFBRSxjQUFIO0FBQWtCQyxNQUFFO0FBQXBCLEdBSFQ7QUFJRUUsTUFBSSxFQUFFO0FBQUNILE1BQUUsdUJBQUg7QUFBMkJDLE1BQUU7QUFBN0I7QUFKUixDQWJrQixFQW1CbEI7QUFDRUgsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRTtBQUFDQyxNQUFFLEVBQUMsYUFBSjtBQUFtQkMsTUFBRSxFQUFDO0FBQXRCLEdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBQUNGLE1BQUUsY0FBSDtBQUFrQkMsTUFBRTtBQUFwQixHQUhUO0FBSUVFLE1BQUksRUFBRTtBQUFDSCxNQUFFLHVCQUFIO0FBQTJCQyxNQUFFO0FBQTdCO0FBSlIsQ0FuQmtCLEVBeUJsQjtBQUNFSCxPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUNDLE1BQUUsRUFBQyxhQUFKO0FBQW1CQyxNQUFFLEVBQUM7QUFBdEIsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQ0YsTUFBRSxjQUFIO0FBQWtCQyxNQUFFO0FBQXBCLEdBSFQ7QUFJRUUsTUFBSSxFQUFFO0FBQUNILE1BQUUsdUJBQUg7QUFBMkJDLE1BQUU7QUFBN0I7QUFKUixDQXpCa0IsRUErQmxCO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFBQ0MsTUFBRSxFQUFDLGFBQUo7QUFBbUJDLE1BQUUsRUFBQztBQUF0QixHQUZSO0FBR0VDLE9BQUssRUFBRTtBQUFDRixNQUFFLGNBQUg7QUFBa0JDLE1BQUU7QUFBcEIsR0FIVDtBQUlFRSxNQUFJLEVBQUU7QUFBQ0gsTUFBRSx1QkFBSDtBQUEyQkMsTUFBRTtBQUE3QjtBQUpSLENBL0JrQixDQUFwQjtBQXVDQSxJQUFNSSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUssRUFBTDtBQUFBLENBQU4sQ0FBNUI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ3JCLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEcUIseUJBRW9CTSxrRkFBZSxFQUZuQztBQUFBLE1BRWJDLGVBRmEsb0JBRWJBLGVBRmE7QUFBQSxNQUVJQyxXQUZKLG9CQUVJQSxXQUZKOztBQUlyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLG1CQUFlLENBQUMsUUFBRCxDQUFmO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFKcUIsNEJBT1VHLG9GQUFrQixFQVA1QjtBQUFBLE1BT2JDLFFBUGEsdUJBT2JBLFFBUGE7QUFBQSxNQU9IQyxRQVBHLHVCQU9IQSxRQVBHOztBQVNyQixTQUNFLE1BQUMsMERBQUQ7QUFBWSxVQUFNLEVBQUMsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sT0FBRyxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixFQUVFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxPQUFHLEVBQUMsYUFGTjtBQUdFLFdBQU8sRUFBQyw4SkFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFPRTtBQUNFLE9BQUcsRUFBQyxTQUROO0FBRUUsWUFBUSxFQUFDLFVBRlg7QUFHRSxXQUFPLEVBQUMsK0NBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBWUU7QUFDRSxPQUFHLEVBQUMsT0FETjtBQUVFLFlBQVEsRUFBQyxRQUZYO0FBR0UsV0FBTyxFQUFDLDZCQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWlCRTtBQUNFLE9BQUcsRUFBQyxXQUROO0FBRUUsT0FBRyxFQUFDLFdBRk47QUFHRSxRQUFJLEVBQUMsNkJBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGLEVBd0JFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLGdCQUFZLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFBUSxDQUFDRyxLQUFULENBQWVDLE9BRGxCLENBREYsQ0FERixFQU1FLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLE1BQXBCO0FBQXFCLGFBQVMsRUFBQyxLQUEvQjtBQUFxQyxXQUFPLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsT0FBRyxFQUFDLGNBQWI7QUFBNEIsYUFBUyxFQUFFVixPQUFPLENBQUNaLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBRXVCLG1CQUFPLENBQUMseUVBQUQsQ0FEakI7QUFFRSxRQUFJLEVBQUMsWUFGUDtBQUdFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQ0UsVUFBTSxFQUFFRCxtQkFBTyxDQUFDLCtEQUFELENBRGpCO0FBRUUsUUFBSSxFQUFDLFdBRlA7QUFHRSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFXRTtBQUNFLE9BQUcsRUFBRUQsbUJBQU8sQ0FBQyx5RUFBRCxDQURkO0FBRUUsT0FBRyxFQUFDLGNBRk47QUFHRSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERixDQURGLEVBeUJFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ1AsUUFBUSxDQUFDRyxLQUFULENBQWVLLEtBRGhCLENBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBRTtBQUFFRCxlQUFTLEVBQUU7QUFBYixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NQLFFBQVEsQ0FBQ0csS0FBVCxDQUFlTSxLQURoQixDQUpGLENBekJGLENBTkYsRUF3Q0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLFNBQUssRUFBRTtBQUFFUCxrQkFBWSxFQUFFLEtBQWhCO0FBQXVCSyxlQUFTLEVBQUU7QUFBbEMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLGdCQUFZLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ1AsUUFBUSxDQUFDVSxPQUFULENBQWlCTixPQURsQixDQURGLENBeENGLEVBNkNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsU0FBSyxFQUFFO0FBQUVGLGtCQUFZLEVBQUU7QUFBaEIsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdyQixRQUFRLENBQUM4QixHQUFULENBQWEsVUFBQUMsTUFBTTtBQUFBLFdBQ2xCLE1BQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxTQUFHLEVBQUVBLE1BQU0sQ0FBQzdCLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlFQUFEO0FBQ0UsV0FBSyxFQUFFNkIsTUFBTSxDQUFDOUIsS0FEaEI7QUFFRSxVQUFJLEVBQUU4QixNQUFNLENBQUM3QixJQUZmO0FBR0UsV0FBSyxFQUFFNkIsTUFBTSxDQUFDMUIsS0FIaEI7QUFJRSxVQUFJLEVBQUUwQixNQUFNLENBQUN6QixJQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURrQjtBQUFBLEdBQW5CLENBTkgsQ0FERixFQWtCRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLFNBQUssRUFBRTtBQUFFZSxrQkFBWSxFQUFFO0FBQWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HZCxXQUFXLENBQUN1QixHQUFaLENBQWdCLFVBQUFDLE1BQU07QUFBQSxXQUNyQixNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsU0FBRyxFQUFFQSxNQUFNLENBQUM3QixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUNFLFdBQUssRUFBRTZCLE1BQU0sQ0FBQzlCLEtBRGhCO0FBRUUsVUFBSSxFQUFFOEIsTUFBTSxDQUFDN0IsSUFGZjtBQUdFLFdBQUssRUFBRTZCLE1BQU0sQ0FBQzFCLEtBSGhCO0FBSUUsVUFBSSxFQUFFMEIsTUFBTSxDQUFDekIsSUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEcUI7QUFBQSxHQUF0QixDQU5ILENBbEJGLENBN0NGLENBeEJGLENBREY7QUE2R0QsQ0F0SEQ7O0dBQU1LLEs7VUFDWUgsUyxFQUN5Qk0sMEUsRUFLVkksNEU7OztLQVAzQlAsSztBQXdIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMTViYTAzOTRhY2VlNzQxNGJhODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xyXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBQZXJzb25CbG9jayBmcm9tICcuLi9zcmMvdWkvcGFydHMvUGVyc29uQmxvY2snXHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uL3NyYy91aS9QYWdlSGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCBtYW5hZ2VycyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvaWRhbi5qcGcnLFxyXG4gICAgbmFtZToge2VuOidJZGFuIEJhcm9uJywgaGU6J9ei15nXk9efINeR16jXkNeV158nIH0sXHJcbiAgICB0aXRsZToge2VuOmBGb3VuZGVyICYgQ1RPYCwgaGU6YEZvdW5kZXIgJiBDVE9gIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2xpaG9vLmpwZycsXHJcbiAgICBuYW1lOiB7ZW46J0xpaG9vIFphaWQnLCBoZTon15zXmdeU15XXkCDXlteZ15nXkycgfSxcclxuICAgIHRpdGxlOiB7ZW46YEZvdW5kZXIgJiBDRU9gLCBoZTpgRm91bmRlciAmIENFT2AgfSxcclxuICAgIHRleHQ6IHtlbjpgTG9yZW0gaXBzdW0gYmxhIGJsYWAsIGhlOmDXlNeT16jXldep15Qg15zXqNee16og15zXpNeZ16rXldeX15Qg15PXoteqINeV15TXnNeQ15RgIH0sXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgaW5zdHJ1Y3RvcnMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2RhbmEuanBnJyxcclxuICAgIG5hbWU6IHtlbjonRGFuYSBHYW5lc2gnLCBoZTon15PXoNeUINeS16DXkNehJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgSW5zdHJ1Y3RvcmAsIGhlOmDXnteT16jXmdeb15RgIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2RhdmlkLmpwZycsXHJcbiAgICBuYW1lOiB7ZW46J0RhbmEgR2FuZXNoJywgaGU6J9eT16DXlCDXkteg15DXoScgfSxcclxuICAgIHRpdGxlOiB7ZW46YEluc3RydWN0b3JgLCBoZTpg157Xk9eo15nXm9eUYCB9LFxyXG4gICAgdGV4dDoge2VuOmBMb3JlbSBpcHN1bSBibGEgYmxhYCwgaGU6YNeU15PXqNeV16nXlCDXnNeo157XqiDXnNek15nXqteV15fXlCDXk9ei16og15XXlNec15DXlGAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9taWNoYWVsLmpwZycsXHJcbiAgICBuYW1lOiB7ZW46J0RhbmEgR2FuZXNoJywgaGU6J9eT16DXlCDXkteg15DXoScgfSxcclxuICAgIHRpdGxlOiB7ZW46YEluc3RydWN0b3JgLCBoZTpg157Xk9eo15nXm9eUYCB9LFxyXG4gICAgdGV4dDoge2VuOmBMb3JlbSBpcHN1bSBibGEgYmxhYCwgaGU6YNeU15PXqNeV16nXlCDXnNeo157XqiDXnNek15nXqteV15fXlCDXk9ei16og15XXlNec15DXlGAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9vc3N5LmpwZycsXHJcbiAgICBuYW1lOiB7ZW46J0RhbmEgR2FuZXNoJywgaGU6J9eT16DXlCDXkteg15DXoScgfSxcclxuICAgIHRpdGxlOiB7ZW46YEluc3RydWN0b3JgLCBoZTpg157Xk9eo15nXm9eUYCB9LFxyXG4gICAgdGV4dDoge2VuOmBMb3JlbSBpcHN1bSBibGEgYmxhYCwgaGU6YNeU15PXqNeV16nXlCDXnNeo157XqiDXnNek15nXqteV15fXlCDXk9ei16og15XXlNec15DXlGAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9yb24uanBnJyxcclxuICAgIG5hbWU6IHtlbjonRGFuYSBHYW5lc2gnLCBoZTon15PXoNeUINeS16DXkNehJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgSW5zdHJ1Y3RvcmAsIGhlOmDXnteT16jXmdeb15RgIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL3RhbW15LmpwZycsXHJcbiAgICBuYW1lOiB7ZW46J0RhbmEgR2FuZXNoJywgaGU6J9eT16DXlCDXkteg15DXoScgfSxcclxuICAgIHRpdGxlOiB7ZW46YEluc3RydWN0b3JgLCBoZTpg157Xk9eo15nXm9eUYCB9LFxyXG4gICAgdGV4dDoge2VuOmBMb3JlbSBpcHN1bSBibGEgYmxhYCwgaGU6YNeU15PXqNeV16nXlCDXnNeo157XqiDXnNek15nXqteV15fXlCDXk9ei16og15XXlNec15DXlGAgfSxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7fSkpXHJcblxyXG5jb25zdCBBYm91dCA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNldFBhZ2VJbmRlY2llcywgZ2V0UGFnZU1ldGEgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy9hYm91dCcpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSwgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUhlYWRlciBoZWFkZXI9J0Fib3V0IFVzJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlIGtleT0ndGl0bGUnPkFib3V0IFVzIC0gQ29tcGFueSAmIFRlYW0gfCBWUkZ1blRlYW08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGtleT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBjb250ZW50PSdWUkZ1blRlYW0gcHJvdmlkZSBpbWVyc2l2ZSBjdXN0b20gVlIgRXhwZXJpZW5jZXMsIGxlZCBieSB0YWxlbnRlZCBpbnN0cnVjdG9ycy4gT3VyIHRlYW0gd2lsbCBlbnN1cmUgeW91ciB0cmlwIHRyb3VnaCB0aGUgVlIgd29ybGQgd2lsbCBiZSBpbWVyc3NpdmUgYW5kIGZ1bi4nXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAga2V5PSdvZ3RpdGxlJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnRpdGxlJ1xyXG4gICAgICAgICAgY29udGVudD0nQmV0dGVyIHRoYW4gcmVhbGl0eSBWUiBleHBlcmllbmNlcyB8IEFib3V0IFVzJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d1cmwnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dXJsJ1xyXG4gICAgICAgICAgY29udGVudD0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2Fib3V0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAga2V5PSdjYW5vbmljYWwnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2Z1bnRlYW12ci5jb20vYWJvdXQnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnM2VtJyB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBhbGlnbj0nY2VudGVyJyBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgIHtzaXRlRGF0YS53ZUFyZS5oZWFkaW5nfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBkaXJlY3Rpb249J3JvdycganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlIGFsdD0nZnVudGVhbSBsb2dvJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy92cnRlYW0ucG5nP3dlYnAnKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3dlYnAnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgIHNyY1NldD17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy92cnRlYW0ucG5nJyl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy92cnRlYW0ucG5nP3dlYnAnKX1cclxuICAgICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy92cnRlYW0ucG5nP3dlYnAnXHJcbiAgICAgICAgICAgICAgYWx0PSd2cmZ1bnRlYW0nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIHtzaXRlRGF0YS53ZUFyZS50ZXh0MX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAge3NpdGVEYXRhLndlQXJlLnRleHQyfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnM2VtJywgbWFyZ2luVG9wOiAnNWVtJyB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBhbGlnbj0nY2VudGVyJyBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICB7c2l0ZURhdGEudGhlVGVhbS5oZWFkaW5nfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21hbmFnZXJzLm1hcChwZXJzb24gPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtwZXJzb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uQmxvY2tcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3BlcnNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17cGVyc29uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwZXJzb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3BlcnNvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2luc3RydWN0b3JzLm1hcChwZXJzb24gPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtwZXJzb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uQmxvY2tcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3BlcnNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17cGVyc29uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwZXJzb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3BlcnNvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9QYWdlSGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==