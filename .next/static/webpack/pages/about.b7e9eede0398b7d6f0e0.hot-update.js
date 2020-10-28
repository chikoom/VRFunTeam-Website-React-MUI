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
  name: 'Idan Baron',
  title: 'Founder & CTO',
  text: 'Lorem ipsum bla bla'
}, {
  image: '/assets/lihoo.jpg',
  name: 'Lihoo Zaid',
  title: 'Founder & CEO',
  text: 'Lorem ipsum bla bla'
}];
var instructors = [{
  image: '/assets/dana.jpg',
  name: 'Dana Ganesh',
  title: 'Instructor',
  text: 'Lorem ipsum bla bla'
}, {
  image: '/assets/david.jpg',
  name: 'David Forman',
  title: 'Instructor',
  text: 'Lorem ipsum bla bla'
}, {
  image: '/assets/michael.jpg',
  name: 'Michael Strauss',
  title: 'Instructor',
  text: 'Lorem ipsum bla bla'
}, {
  image: '/assets/ossy.jpg',
  name: 'Ossy Biton',
  title: 'Instructor',
  text: 'Lorem ipsum bla bla'
}, {
  image: '/assets/ron.jpg',
  name: 'Ron Bauman',
  title: 'Instructor',
  text: 'Lorem ipsum bla bla'
}, {
  image: '/assets/tammy.jpg',
  name: 'Tammy Fine',
  title: 'Instructor',
  text: 'Lorem ipsum bla bla'
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
      siteData = _useLanguageContext.siteData;

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

_s(About, "v7+iM8CjOHEdq8bXiCYBagrpaEQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIm1hbmFnZXJzIiwiaW1hZ2UiLCJuYW1lIiwidGl0bGUiLCJ0ZXh0IiwiaW5zdHJ1Y3RvcnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJBYm91dCIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsImdldFBhZ2VNZXRhIiwidXNlRWZmZWN0IiwidXNlTGFuZ3VhZ2VDb250ZXh0Iiwic2l0ZURhdGEiLCJtYXJnaW5Cb3R0b20iLCJ3ZUFyZSIsImhlYWRpbmciLCJyZXF1aXJlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ0ZXh0MSIsInRleHQyIiwidGhlVGVhbSIsIm1hcCIsInBlcnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBRGUsRUFPZjtBQUNFSCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FQZSxDQUFqQjtBQWVBLElBQU1DLFdBQVcsR0FBRyxDQUNsQjtBQUNFSixPQUFLLEVBQUUsa0JBRFQ7QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsT0FBSyxFQUFFLFlBSFQ7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEa0IsRUFPbEI7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLE9BQUssRUFBRSxZQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBUGtCLEVBYWxCO0FBQ0VILE9B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QUEsT0FDRSxNQUFDLGlFQUFEO0FBQ0UsV0FBSyxFQUFFMEIsTUFBTSxDQUFDM0IsS0FEaEI7QUFFRSxVQUFJLEVBQUUyQixNQUFNLENBQUMxQixJQUZmO0FBR0UsV0FBSyxFQUFFMEIsTUFBTSxDQUFDekIsS0FIaEI7QUFJRSxVQUFJLEVBQUV5QixNQUFNLENBQUN4QixJQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURrQjtBQUFBLEdBQW5CLENBTkgsQ0FERixFQWtCRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLFNBQUssRUFBRTtBQUFFYyxrQkFBWSxFQUFFO0FBQWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HYixXQUFXLENBQUNzQixHQUFaLENBQWdCLFVBQUFDLE1BQU07QUFBQSxXQUNyQixNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsU0FBRyxFQUFFQSxNQUFNLENBQUMxQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUNFLFdBQUssRUFBRTBCLE1BQU0sQ0FBQzNCLEtBRGhCO0FBRUUsVUFBSSxFQUFFMkIsTUFBTSxDQUFDMUIsSUFGZjtBQUdFLFdBQUssRUFBRTBCLE1BQU0sQ0FBQ3pCLEtBSGhCO0FBSUUsVUFBSSxFQUFFeUIsTUFBTSxDQUFDeEIsSUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEcUI7QUFBQSxHQUF0QixDQU5ILENBbEJGLENBN0NGLENBeEJGLENBREY7QUE2R0QsQ0F0SEQ7O0dBQU1LLEs7VUFDWUgsUyxFQUN5Qk0sMEUsRUFLcEJJLDRFOzs7S0FQakJQLEs7QUF3SFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmI3ZTllZWRlMDM5OGI3ZDZmMGUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgUGVyc29uQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL1BlcnNvbkJsb2NrJ1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi9zcmMvdWkvUGFnZUhlYWRlcidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgbWFuYWdlcnMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2lkYW4uanBnJyxcclxuICAgIG5hbWU6ICdJZGFuIEJhcm9uJyxcclxuICAgIHRpdGxlOiAnRm91bmRlciAmIENUTycsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvbGlob28uanBnJyxcclxuICAgIG5hbWU6ICdMaWhvbyBaYWlkJyxcclxuICAgIHRpdGxlOiAnRm91bmRlciAmIENFTycsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgaW5zdHJ1Y3RvcnMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2RhbmEuanBnJyxcclxuICAgIG5hbWU6ICdEYW5hIEdhbmVzaCcsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2RhdmlkLmpwZycsXHJcbiAgICBuYW1lOiAnRGF2aWQgRm9ybWFuJyxcclxuICAgIHRpdGxlOiAnSW5zdHJ1Y3RvcicsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvbWljaGFlbC5qcGcnLFxyXG4gICAgbmFtZTogJ01pY2hhZWwgU3RyYXVzcycsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL29zc3kuanBnJyxcclxuICAgIG5hbWU6ICdPc3N5IEJpdG9uJyxcclxuICAgIHRpdGxlOiAnSW5zdHJ1Y3RvcicsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvcm9uLmpwZycsXHJcbiAgICBuYW1lOiAnUm9uIEJhdW1hbicsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL3RhbW15LmpwZycsXHJcbiAgICBuYW1lOiAnVGFtbXkgRmluZScsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHt9KSlcclxuXHJcbmNvbnN0IEFib3V0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzLCBnZXRQYWdlTWV0YSB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnL2Fib3V0JylcclxuICB9LCBbXSlcclxuICBjb25zdCB7IHNpdGVEYXRhIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VIZWFkZXIgaGVhZGVyPSdBYm91dCBVcyc+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgY29udGVudD0nVlJGdW5UZWFtIHByb3ZpZGUgaW1lcnNpdmUgY3VzdG9tIFZSIEV4cGVyaWVuY2VzLCBsZWQgYnkgdGFsZW50ZWQgaW5zdHJ1Y3RvcnMuIE91ciB0ZWFtIHdpbGwgZW5zdXJlIHlvdXIgdHJpcCB0cm91Z2ggdGhlIFZSIHdvcmxkIHdpbGwgYmUgaW1lcnNzaXZlIGFuZCBmdW4uJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBBYm91dCBVcydcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndXJsJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9hYm91dCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGtleT0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2Fib3V0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJz5cclxuICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzNlbScgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICB7c2l0ZURhdGEud2VBcmUuaGVhZGluZ31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICA8cGljdHVyZSBhbHQ9J2Z1bnRlYW0gbG9nbycgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cclxuICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvdnJ0ZWFtLnBuZz93ZWJwJyl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdpbWFnZS93ZWJwJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQ9e3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvdnJ0ZWFtLnBuZycpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9hc3NldHMvdnJ0ZWFtLnBuZz93ZWJwJyl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9J2Z1bnRlYW0gbG9nbydcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvdnJ0ZWFtLnBuZz93ZWJwJ1xyXG4gICAgICAgICAgICAgIGFsdD0ndnJmdW50ZWFtJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICB7c2l0ZURhdGEud2VBcmUudGV4dDF9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIHtzaXRlRGF0YS53ZUFyZS50ZXh0Mn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzNlbScsIG1hcmdpblRvcDogJzVlbScgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAge3NpdGVEYXRhLnRoZVRlYW0uaGVhZGluZ31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYW5hZ2Vycy5tYXAocGVyc29uID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17cGVyc29uLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtwZXJzb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BlcnNvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cGVyc29uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtwZXJzb24udGV4dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1ZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbnN0cnVjdG9ycy5tYXAocGVyc29uID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17cGVyc29uLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtwZXJzb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BlcnNvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cGVyc29uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtwZXJzb24udGV4dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvUGFnZUhlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=