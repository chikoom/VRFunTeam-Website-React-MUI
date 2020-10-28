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
  }, "The Team")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbIm1hbmFnZXJzIiwiaW1hZ2UiLCJuYW1lIiwidGl0bGUiLCJ0ZXh0IiwiaW5zdHJ1Y3RvcnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJBYm91dCIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsImdldFBhZ2VNZXRhIiwidXNlRWZmZWN0IiwidXNlTGFuZ3VhZ2VDb250ZXh0Iiwic2l0ZURhdGEiLCJtYXJnaW5Cb3R0b20iLCJ3ZUFyZSIsImhlYWRpbmciLCJyZXF1aXJlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ0ZXh0MSIsInRleHQyIiwibWFwIiwicGVyc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsa0JBRFQ7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFQyxNQUFJLEVBQUUsWUFGUjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLENBQWpCO0FBZUEsSUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VKLE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUUsYUFGUjtBQUdFQyxPQUFLLEVBQUUsWUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQURrQixFQU9sQjtBQUNFSCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsTUFBSSxFQUFFLGNBRlI7QUFHRUMsT0FBSyxFQUFFLFlBSFQ7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FQa0IsRUFhbEI7QUFDRUgsT0FBSyxFQUFFLHFCQURUO0FBRUVDLE1BQUksRUFBRSxpQkFGUjtBQUdFQyxPQUFLLEVBQUUsWUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQWJrQixFQW1CbEI7QUFDRUgsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE9BQUssRUFBRSxZQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBbkJrQixFQXlCbEI7QUFDRUgsT0FBSyxFQUFFLGlCQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE9BQUssRUFBRSxZQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBekJrQixFQStCbEI7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE9BQUssRUFBRSxZQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBL0JrQixDQUFwQjtBQXVDQSxJQUFNRSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUssRUFBTDtBQUFBLENBQU4sQ0FBNUI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ3JCLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEcUIseUJBRW9CTSxrRkFBZSxFQUZuQztBQUFBLE1BRWJDLGVBRmEsb0JBRWJBLGVBRmE7QUFBQSxNQUVJQyxXQUZKLG9CQUVJQSxXQUZKOztBQUlyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLG1CQUFlLENBQUMsUUFBRCxDQUFmO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFKcUIsNEJBT0FHLG9GQUFrQixFQVBsQjtBQUFBLE1BT2JDLFFBUGEsdUJBT2JBLFFBUGE7O0FBU3JCLFNBQ0UsTUFBQywwREFBRDtBQUFZLFVBQU0sRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxPQUFHLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLE9BQUcsRUFBQyxhQUZOO0FBR0UsV0FBTyxFQUFDLDhKQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU9FO0FBQ0UsT0FBRyxFQUFDLFNBRE47QUFFRSxZQUFRLEVBQUMsVUFGWDtBQUdFLFdBQU8sRUFBQywrQ0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFZRTtBQUNFLE9BQUcsRUFBQyxPQUROO0FBRUUsWUFBUSxFQUFDLFFBRlg7QUFHRSxXQUFPLEVBQUMsNkJBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBaUJFO0FBQ0UsT0FBRyxFQUFDLFdBRE47QUFFRSxPQUFHLEVBQUMsV0FGTjtBQUdFLFFBQUksRUFBQyw2QkFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREYsRUF3QkUsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBd0MsZ0JBQVksTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQUFRLENBQUNFLEtBQVQsQ0FBZUMsT0FEbEIsQ0FERixDQURGLEVBTUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsTUFBcEI7QUFBcUIsYUFBUyxFQUFDLEtBQS9CO0FBQXFDLFdBQU8sRUFBQyxRQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxPQUFHLEVBQUMsY0FBYjtBQUE0QixhQUFTLEVBQUVULE9BQU8sQ0FBQ1YsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsVUFBTSxFQUFFb0IsbUJBQU8sQ0FBQyx5RUFBRCxDQURqQjtBQUVFLFFBQUksRUFBQyxZQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFDRSxVQUFNLEVBQUVELG1CQUFPLENBQUMsK0RBQUQsQ0FEakI7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVdFO0FBQ0UsT0FBRyxFQUFFRCxtQkFBTyxDQUFDLHlFQUFELENBRGQ7QUFFRSxPQUFHLEVBQUMsY0FGTjtBQUdFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBREYsRUF5QkUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDTixRQUFRLENBQUNFLEtBQVQsQ0FBZUssS0FEaEIsQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFFO0FBQUVELGVBQVMsRUFBRTtBQUFiLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ04sUUFBUSxDQUFDRSxLQUFULENBQWVNLEtBRGhCLENBSkYsQ0F6QkYsQ0FORixFQXdDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsU0FBSyxFQUFFO0FBQUVQLGtCQUFZLEVBQUUsS0FBaEI7QUFBdUJLLGVBQVMsRUFBRTtBQUFsQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBd0MsZ0JBQVksTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQXhDRixFQTZDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLFNBQUssRUFBRTtBQUFFTCxrQkFBWSxFQUFFO0FBQWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HbEIsUUFBUSxDQUFDMEIsR0FBVCxDQUFhLFVBQUFDLE1BQU07QUFBQSxXQUNsQixNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsU0FBRyxFQUFFQSxNQUFNLENBQUN6QixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUNFLFdBQUssRUFBRXlCLE1BQU0sQ0FBQzFCLEtBRGhCO0FBRUUsVUFBSSxFQUFFMEIsTUFBTSxDQUFDekIsSUFGZjtBQUdFLFdBQUssRUFBRXlCLE1BQU0sQ0FBQ3hCLEtBSGhCO0FBSUUsVUFBSSxFQUFFd0IsTUFBTSxDQUFDdkIsSUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEa0I7QUFBQSxHQUFuQixDQU5ILENBREYsRUFrQkUsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsV0FBTyxFQUFDLFFBSFY7QUFJRSxTQUFLLEVBQUU7QUFBRWMsa0JBQVksRUFBRTtBQUFoQixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR2IsV0FBVyxDQUFDcUIsR0FBWixDQUFnQixVQUFBQyxNQUFNO0FBQUEsV0FDckIsTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFNBQUcsRUFBRUEsTUFBTSxDQUFDekIsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFDRSxXQUFLLEVBQUV5QixNQUFNLENBQUMxQixLQURoQjtBQUVFLFVBQUksRUFBRTBCLE1BQU0sQ0FBQ3pCLElBRmY7QUFHRSxXQUFLLEVBQUV5QixNQUFNLENBQUN4QixLQUhoQjtBQUlFLFVBQUksRUFBRXdCLE1BQU0sQ0FBQ3ZCLElBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRHFCO0FBQUEsR0FBdEIsQ0FOSCxDQWxCRixDQTdDRixDQXhCRixDQURGO0FBNkdELENBdEhEOztHQUFNSyxLO1VBQ1lILFMsRUFDeUJNLDBFLEVBS3BCSSw0RTs7O0tBUGpCUCxLO0FBd0hTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5lNjU1NTVlYWI4NjRkZjc2ZDkxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L0hlYWQnXHJcbmltcG9ydCB7IEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IFBlcnNvbkJsb2NrIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9QZXJzb25CbG9jaydcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vc3JjL3VpL1BhZ2VIZWFkZXInXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IG1hbmFnZXJzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pZGFuLmpwZycsXHJcbiAgICBuYW1lOiAnSWRhbiBCYXJvbicsXHJcbiAgICB0aXRsZTogJ0ZvdW5kZXIgJiBDVE8nLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2xpaG9vLmpwZycsXHJcbiAgICBuYW1lOiAnTGlob28gWmFpZCcsXHJcbiAgICB0aXRsZTogJ0ZvdW5kZXIgJiBDRU8nLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IGluc3RydWN0b3JzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9kYW5hLmpwZycsXHJcbiAgICBuYW1lOiAnRGFuYSBHYW5lc2gnLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9kYXZpZC5qcGcnLFxyXG4gICAgbmFtZTogJ0RhdmlkIEZvcm1hbicsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL21pY2hhZWwuanBnJyxcclxuICAgIG5hbWU6ICdNaWNoYWVsIFN0cmF1c3MnLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9vc3N5LmpwZycsXHJcbiAgICBuYW1lOiAnT3NzeSBCaXRvbicsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL3Jvbi5qcGcnLFxyXG4gICAgbmFtZTogJ1JvbiBCYXVtYW4nLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy90YW1teS5qcGcnLFxyXG4gICAgbmFtZTogJ1RhbW15IEZpbmUnLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7fSkpXHJcblxyXG5jb25zdCBBYm91dCA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNldFBhZ2VJbmRlY2llcywgZ2V0UGFnZU1ldGEgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy9hYm91dCcpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlSGVhZGVyIGhlYWRlcj0nQWJvdXQgVXMnPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGUga2V5PSd0aXRsZSc+QWJvdXQgVXMgLSBDb21wYW55ICYgVGVhbSB8IFZSRnVuVGVhbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAga2V5PSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGNvbnRlbnQ9J1ZSRnVuVGVhbSBwcm92aWRlIGltZXJzaXZlIGN1c3RvbSBWUiBFeHBlcmllbmNlcywgbGVkIGJ5IHRhbGVudGVkIGluc3RydWN0b3JzLiBPdXIgdGVhbSB3aWxsIGVuc3VyZSB5b3VyIHRyaXAgdHJvdWdoIHRoZSBWUiB3b3JsZCB3aWxsIGJlIGltZXJzc2l2ZSBhbmQgZnVuLidcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndGl0bGUnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcbiAgICAgICAgICBjb250ZW50PSdCZXR0ZXIgdGhhbiByZWFsaXR5IFZSIGV4cGVyaWVuY2VzIHwgQWJvdXQgVXMnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAga2V5PSdvZ3VybCdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp1cmwnXHJcbiAgICAgICAgICBjb250ZW50PSdodHRwczovL2Z1bnRlYW12ci5jb20vYWJvdXQnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdjYW5vbmljYWwnXHJcbiAgICAgICAgICBrZXk9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9hYm91dCdcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczZW0nIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAge3NpdGVEYXRhLndlQXJlLmhlYWRpbmd9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgPHBpY3R1cmUgYWx0PSdmdW50ZWFtIGxvZ28nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0naW1hZ2Uvd2VicCdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0PXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmcnKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCcpfVxyXG4gICAgICAgICAgICAgICAgYWx0PSdmdW50ZWFtIGxvZ28nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL3ZydGVhbS5wbmc/d2VicCdcclxuICAgICAgICAgICAgICBhbHQ9J3ZyZnVudGVhbSdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAge3NpdGVEYXRhLndlQXJlLnRleHQxfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICB7c2l0ZURhdGEud2VBcmUudGV4dDJ9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczZW0nLCBtYXJnaW5Ub3A6ICc1ZW0nIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgVGhlIFRlYW1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYW5hZ2Vycy5tYXAocGVyc29uID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17cGVyc29uLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtwZXJzb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BlcnNvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cGVyc29uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtwZXJzb24udGV4dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBkaXJlY3Rpb249J3JvdydcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1ZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbnN0cnVjdG9ycy5tYXAocGVyc29uID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17cGVyc29uLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtwZXJzb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BlcnNvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cGVyc29uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtwZXJzb24udGV4dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvUGFnZUhlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=