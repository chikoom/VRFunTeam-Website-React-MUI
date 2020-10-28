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
  }, "We Are VRFunTeam")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
  }, "A team of tech geeks and training instructors, who loves to escort groups in conseptual trips into the Virtual Reality world. Our mentors will guide you hand by hand into the new world, and will know to take a step back when you'll be flying on your own."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    style: {
      marginTop: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    style: {
      marginBottom: '3em',
      marginTop: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "The Team")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 11
    }
  }, managers.map(function (person) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: person.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 163,
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
      lineNumber: 172,
      columnNumber: 11
    }
  }, instructors.map(function (person) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: person.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
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
        lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIm1hbmFnZXJzIiwiaW1hZ2UiLCJuYW1lIiwidGl0bGUiLCJ0ZXh0IiwiaW5zdHJ1Y3RvcnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJBYm91dCIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsImdldFBhZ2VNZXRhIiwidXNlRWZmZWN0IiwidXNlTGFuZ3VhZ2VDb250ZXh0Iiwic2l0ZURhdGEiLCJtYXJnaW5Cb3R0b20iLCJyZXF1aXJlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXAiLCJwZXJzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUUsWUFGUjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQURlLEVBT2Y7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBUGUsQ0FBakI7QUFlQSxJQUFNQyxXQUFXLEdBQUcsQ0FDbEI7QUFDRUosT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRSxhQUZSO0FBR0VDLE9BQUssRUFBRSxZQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBRGtCLEVBT2xCO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFQyxNQUFJLEVBQUUsY0FGUjtBQUdFQyxPQUFLLEVBQUUsWUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBrQixFQWFsQjtBQUNFSCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUFFLGlCQUZSO0FBR0VDLE9B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QUFBQTtBQUFBO0FBQUEsTUFERixDQURrQjtBQUFBLEdBQW5CLENBTkgsQ0FERixFQWtCRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLFNBQUssRUFBRTtBQUFFYyxrQkFBWSxFQUFFO0FBQWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HYixXQUFXLENBQUNpQixHQUFaLENBQWdCLFVBQUFDLE1BQU07QUFBQSxXQUNyQixNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsU0FBRyxFQUFFQSxNQUFNLENBQUNyQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUNFLFdBQUssRUFBRXFCLE1BQU0sQ0FBQ3RCLEtBRGhCO0FBRUUsVUFBSSxFQUFFc0IsTUFBTSxDQUFDckIsSUFGZjtBQUdFLFdBQUssRUFBRXFCLE1BQU0sQ0FBQ3BCLEtBSGhCO0FBSUUsVUFBSSxFQUFFb0IsTUFBTSxDQUFDbkIsSUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEcUI7QUFBQSxHQUF0QixDQU5ILENBbEJGLENBdkRGLENBeEJGLENBREY7QUF1SEQsQ0FoSUQ7O0dBQU1LLEs7VUFDWUgsUyxFQUN5Qk0sMEUsRUFLcEJJLDRFOzs7S0FQakJQLEs7QUFrSVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmY2OWFhMDkxNTFjY2Y2NDZiY2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgUGVyc29uQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL1BlcnNvbkJsb2NrJ1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi9zcmMvdWkvUGFnZUhlYWRlcidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgbWFuYWdlcnMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2lkYW4uanBnJyxcclxuICAgIG5hbWU6ICdJZGFuIEJhcm9uJyxcclxuICAgIHRpdGxlOiAnRm91bmRlciAmIENUTycsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvbGlob28uanBnJyxcclxuICAgIG5hbWU6ICdMaWhvbyBaYWlkJyxcclxuICAgIHRpdGxlOiAnRm91bmRlciAmIENFTycsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgaW5zdHJ1Y3RvcnMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2RhbmEuanBnJyxcclxuICAgIG5hbWU6ICdEYW5hIEdhbmVzaCcsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2RhdmlkLmpwZycsXHJcbiAgICBuYW1lOiAnRGF2aWQgRm9ybWFuJyxcclxuICAgIHRpdGxlOiAnSW5zdHJ1Y3RvcicsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvbWljaGFlbC5qcGcnLFxyXG4gICAgbmFtZTogJ01pY2hhZWwgU3RyYXVzcycsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL29zc3kuanBnJyxcclxuICAgIG5hbWU6ICdPc3N5IEJpdG9uJyxcclxuICAgIHRpdGxlOiAnSW5zdHJ1Y3RvcicsXHJcbiAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gYmxhIGJsYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvcm9uLmpwZycsXHJcbiAgICBuYW1lOiAnUm9uIEJhdW1hbicsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL3RhbW15LmpwZycsXHJcbiAgICBuYW1lOiAnVGFtbXkgRmluZScsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHt9KSlcclxuXHJcbmNvbnN0IEFib3V0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzLCBnZXRQYWdlTWV0YSB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnL2Fib3V0JylcclxuICB9LCBbXSlcclxuICBjb25zdCB7IHNpdGVEYXRhIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VIZWFkZXIgaGVhZGVyPSdBYm91dCBVcyc+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgY29udGVudD0nVlJGdW5UZWFtIHByb3ZpZGUgaW1lcnNpdmUgY3VzdG9tIFZSIEV4cGVyaWVuY2VzLCBsZWQgYnkgdGFsZW50ZWQgaW5zdHJ1Y3RvcnMuIE91ciB0ZWFtIHdpbGwgZW5zdXJlIHlvdXIgdHJpcCB0cm91Z2ggdGhlIFZSIHdvcmxkIHdpbGwgYmUgaW1lcnNzaXZlIGFuZCBmdW4uJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBBYm91dCBVcydcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndXJsJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9hYm91dCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGtleT0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2Fib3V0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJz5cclxuICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzNlbScgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICBXZSBBcmUgVlJGdW5UZWFtXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgPHBpY3R1cmUgYWx0PSdmdW50ZWFtIGxvZ28nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2Uvd2VicCdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmcnKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCdcclxuICAgICAgICAgICAgICBhbHQ9J3ZyZnVudGVhbSdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBBIHRlYW0gb2YgdGVjaCBnZWVrcyBhbmQgdHJhaW5pbmcgaW5zdHJ1Y3RvcnMsIHdobyBsb3ZlcyB0byBlc2NvcnRcclxuICAgICAgICAgICAgICBncm91cHMgaW4gY29uc2VwdHVhbCB0cmlwcyBpbnRvIHRoZSBWaXJ0dWFsIFJlYWxpdHkgd29ybGQuIE91clxyXG4gICAgICAgICAgICAgIG1lbnRvcnMgd2lsbCBndWlkZSB5b3UgaGFuZCBieSBoYW5kIGludG8gdGhlIG5ldyB3b3JsZCwgYW5kIHdpbGxcclxuICAgICAgICAgICAgICBrbm93IHRvIHRha2UgYSBzdGVwIGJhY2sgd2hlbiB5b3UnbGwgYmUgZmx5aW5nIG9uIHlvdXIgb3duLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICAgIEl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5XHJcbiAgICAgICAgICAgICAgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBUaGVcclxuICAgICAgICAgICAgICBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWxcclxuICAgICAgICAgICAgICBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAnQ29udGVudCBoZXJlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgaGVyZScsIG1ha2luZyBpdCBsb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wXHJcbiAgICAgICAgICAgICAgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzXHJcbiAgICAgICAgICAgICAgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICdsb3JlbSBpcHN1bScgd2lsbFxyXG4gICAgICAgICAgICAgIHVuY292ZXIgbWFueSB3ZWIgc2l0ZXMgc3RpbGwgaW4gdGhlaXIgaW5mYW5jeS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzNlbScsIG1hcmdpblRvcDogJzVlbScgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICBUaGUgVGVhbVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21hbmFnZXJzLm1hcChwZXJzb24gPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtwZXJzb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uQmxvY2tcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3BlcnNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17cGVyc29uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwZXJzb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3BlcnNvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2luc3RydWN0b3JzLm1hcChwZXJzb24gPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtwZXJzb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uQmxvY2tcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3BlcnNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17cGVyc29uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwZXJzb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3BlcnNvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9QYWdlSGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==