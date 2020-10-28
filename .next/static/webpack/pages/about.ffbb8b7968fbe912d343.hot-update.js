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
      key: person.name['en'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx(_src_ui_parts_PersonBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: person.image,
      name: person.name[language],
      title: person.title[language],
      text: person.text[language],
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
      key: person.name['en'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }
    }, __jsx(_src_ui_parts_PersonBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: person.image,
      name: person.name[language],
      title: person.title[language],
      text: person.text[language],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIm1hbmFnZXJzIiwiaW1hZ2UiLCJuYW1lIiwiZW4iLCJoZSIsInRpdGxlIiwidGV4dCIsImluc3RydWN0b3JzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQWJvdXQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJzZXRQYWdlSW5kZWNpZXMiLCJnZXRQYWdlTWV0YSIsInVzZUVmZmVjdCIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwibGFuZ3VhZ2UiLCJtYXJnaW5Cb3R0b20iLCJ3ZUFyZSIsImhlYWRpbmciLCJyZXF1aXJlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ0ZXh0MSIsInRleHQyIiwidGhlVGVhbSIsIm1hcCIsInBlcnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRTtBQUFDQyxNQUFFLEVBQUMsWUFBSjtBQUFrQkMsTUFBRSxFQUFDO0FBQXJCLEdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBQUNGLE1BQUUsaUJBQUg7QUFBcUJDLE1BQUU7QUFBdkIsR0FIVDtBQUlFRSxNQUFJLEVBQUU7QUFBQ0gsTUFBRSx1QkFBSDtBQUEyQkMsTUFBRTtBQUE3QjtBQUpSLENBRGUsRUFPZjtBQUNFSCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUNDLE1BQUUsRUFBQyxZQUFKO0FBQWtCQyxNQUFFLEVBQUM7QUFBckIsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQ0YsTUFBRSxpQkFBSDtBQUFxQkMsTUFBRTtBQUF2QixHQUhUO0FBSUVFLE1BQUksRUFBRTtBQUFDSCxNQUFFLHVCQUFIO0FBQTJCQyxNQUFFO0FB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LEdBQXRCLENBTkgsQ0FsQkYsQ0E3Q0YsQ0F4QkYsQ0FERjtBQTZHRCxDQXRIRDs7R0FBTVQsSztVQUNZSCxTLEVBQ3lCTSwwRSxFQUtWSSw0RTs7O0tBUDNCUCxLO0FBd0hTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5mZmJiOGI3OTY4ZmJlOTEyZDM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L0hlYWQnXHJcbmltcG9ydCB7IEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IFBlcnNvbkJsb2NrIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9QZXJzb25CbG9jaydcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vc3JjL3VpL1BhZ2VIZWFkZXInXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IG1hbmFnZXJzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pZGFuLmpwZycsXHJcbiAgICBuYW1lOiB7ZW46J0lkYW4gQmFyb24nLCBoZTon16LXmdeT158g15HXqNeQ15XXnycgfSxcclxuICAgIHRpdGxlOiB7ZW46YEZvdW5kZXIgJiBDVE9gLCBoZTpgRm91bmRlciAmIENUT2AgfSxcclxuICAgIHRleHQ6IHtlbjpgTG9yZW0gaXBzdW0gYmxhIGJsYWAsIGhlOmDXlNeT16jXldep15Qg15zXqNee16og15zXpNeZ16rXldeX15Qg15PXoteqINeV15TXnNeQ15RgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvbGlob28uanBnJyxcclxuICAgIG5hbWU6IHtlbjonTGlob28gWmFpZCcsIGhlOifXnNeZ15TXldeQINeW15nXmdeTJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgRm91bmRlciAmIENFT2AsIGhlOmBGb3VuZGVyICYgQ0VPYCB9LFxyXG4gICAgdGV4dDoge2VuOmBMb3JlbSBpcHN1bSBibGEgYmxhYCwgaGU6YNeU15PXqNeV16nXlCDXnNeo157XqiDXnNek15nXqteV15fXlCDXk9ei16og15XXlNec15DXlGAgfSxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBpbnN0cnVjdG9ycyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvZGFuYS5qcGcnLFxyXG4gICAgbmFtZToge2VuOidEYW5hIEdhbmVzaCcsIGhlOifXk9eg15Qg15LXoNeQ16EnIH0sXHJcbiAgICB0aXRsZToge2VuOmBJbnN0cnVjdG9yYCwgaGU6YNee15PXqNeZ15vXlGAgfSxcclxuICAgIHRleHQ6IHtlbjpgTG9yZW0gaXBzdW0gYmxhIGJsYWAsIGhlOmDXlNeT16jXldep15Qg15zXqNee16og15zXpNeZ16rXldeX15Qg15PXoteqINeV15TXnNeQ15RgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvZGF2aWQuanBnJyxcclxuICAgIG5hbWU6IHtlbjonRGFuYSBHYW5lc2gnLCBoZTon15PXoNeUINeS16DXkNehJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgSW5zdHJ1Y3RvcmAsIGhlOmDXnteT16jXmdeb15RgIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL21pY2hhZWwuanBnJyxcclxuICAgIG5hbWU6IHtlbjonRGFuYSBHYW5lc2gnLCBoZTon15PXoNeUINeS16DXkNehJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgSW5zdHJ1Y3RvcmAsIGhlOmDXnteT16jXmdeb15RgIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL29zc3kuanBnJyxcclxuICAgIG5hbWU6IHtlbjonRGFuYSBHYW5lc2gnLCBoZTon15PXoNeUINeS16DXkNehJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgSW5zdHJ1Y3RvcmAsIGhlOmDXnteT16jXmdeb15RgIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL3Jvbi5qcGcnLFxyXG4gICAgbmFtZToge2VuOidEYW5hIEdhbmVzaCcsIGhlOifXk9eg15Qg15LXoNeQ16EnIH0sXHJcbiAgICB0aXRsZToge2VuOmBJbnN0cnVjdG9yYCwgaGU6YNee15PXqNeZ15vXlGAgfSxcclxuICAgIHRleHQ6IHtlbjpgTG9yZW0gaXBzdW0gYmxhIGJsYWAsIGhlOmDXlNeT16jXldep15Qg15zXqNee16og15zXpNeZ16rXldeX15Qg15PXoteqINeV15TXnNeQ15RgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvdGFtbXkuanBnJyxcclxuICAgIG5hbWU6IHtlbjonRGFuYSBHYW5lc2gnLCBoZTon15PXoNeUINeS16DXkNehJyB9LFxyXG4gICAgdGl0bGU6IHtlbjpgSW5zdHJ1Y3RvcmAsIGhlOmDXnteT16jXmdeb15RgIH0sXHJcbiAgICB0ZXh0OiB7ZW46YExvcmVtIGlwc3VtIGJsYSBibGFgLCBoZTpg15TXk9eo15XXqdeUINec16jXnteqINec16TXmdeq15XXl9eUINeT16LXqiDXldeU15zXkNeUYCB9LFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHt9KSlcclxuXHJcbmNvbnN0IEFib3V0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzLCBnZXRQYWdlTWV0YSB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnL2Fib3V0JylcclxuICB9LCBbXSlcclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlSGVhZGVyIGhlYWRlcj0nQWJvdXQgVXMnPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGUga2V5PSd0aXRsZSc+QWJvdXQgVXMgLSBDb21wYW55ICYgVGVhbSB8IFZSRnVuVGVhbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAga2V5PSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGNvbnRlbnQ9J1ZSRnVuVGVhbSBwcm92aWRlIGltZXJzaXZlIGN1c3RvbSBWUiBFeHBlcmllbmNlcywgbGVkIGJ5IHRhbGVudGVkIGluc3RydWN0b3JzLiBPdXIgdGVhbSB3aWxsIGVuc3VyZSB5b3VyIHRyaXAgdHJvdWdoIHRoZSBWUiB3b3JsZCB3aWxsIGJlIGltZXJzc2l2ZSBhbmQgZnVuLidcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndGl0bGUnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcbiAgICAgICAgICBjb250ZW50PSdCZXR0ZXIgdGhhbiByZWFsaXR5IFZSIGV4cGVyaWVuY2VzIHwgQWJvdXQgVXMnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAga2V5PSdvZ3VybCdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp1cmwnXHJcbiAgICAgICAgICBjb250ZW50PSdodHRwczovL2Z1bnRlYW12ci5jb20vYWJvdXQnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdjYW5vbmljYWwnXHJcbiAgICAgICAgICBrZXk9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9hYm91dCdcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczZW0nIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAge3NpdGVEYXRhLndlQXJlLmhlYWRpbmd9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgPHBpY3R1cmUgYWx0PSdmdW50ZWFtIGxvZ28nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2Uvd2VicCdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmcnKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCdcclxuICAgICAgICAgICAgICBhbHQ9J3ZyZnVudGVhbSdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAge3NpdGVEYXRhLndlQXJlLnRleHQxfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICB7c2l0ZURhdGEud2VBcmUudGV4dDJ9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczZW0nLCBtYXJnaW5Ub3A6ICc1ZW0nIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgIHtzaXRlRGF0YS50aGVUZWFtLmhlYWRpbmd9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnM2VtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFuYWdlcnMubWFwKHBlcnNvbiA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e3BlcnNvbi5uYW1lWydlbiddfT5cclxuICAgICAgICAgICAgICAgIDxQZXJzb25CbG9ja1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17cGVyc29uLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtwZXJzb24ubmFtZVtsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwZXJzb24udGl0bGVbbGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtwZXJzb24udGV4dFtsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNWVtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW5zdHJ1Y3RvcnMubWFwKHBlcnNvbiA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e3BlcnNvbi5uYW1lWydlbiddfT5cclxuICAgICAgICAgICAgICAgIDxQZXJzb25CbG9ja1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17cGVyc29uLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtwZXJzb24ubmFtZVtsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwZXJzb24udGl0bGVbbGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtwZXJzb24udGV4dFtsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9