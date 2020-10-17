webpackHotUpdate_N_E("pages/_error",{

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
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
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\pages\\_error.js",
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "About Us - Company & Team | VRFunTeam"), __jsx("meta", {
    name: "description",
    key: "description",
    content: "VRFunTeam provide imersive custom VR Experiences, led by talented instructors. Our team will ensure your trip trough the VR world will be imerssive and fun.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogtitle",
    property: "og:title",
    content: "Better than reality VR experiences | About Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogurl",
    property: "og:url",
    content: "https://funteamvr.com/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    key: "canonical",
    href: "https://funteamvr.com/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: "\n            body { \n              min-height: 450px;\n              height: 100vh;\n              margin: 0;\n              background: radial-gradient(circle, darken(dodgerblue, 10%), #1f4f96, #1b2949, #000);\n            }\n            \n            .stage {\n              height: 300px;\n              width: 500px;\n              margin: auto;\n              position: absolute;\n              top: 0; right: 0; bottom: 0; left: 0;\n              perspective: 9999px;\n              transform-style: preserve-3d;\n            }\n            \n            .layer {\n              width: 100%;\n              height: 100%;\n              position: absolute;\n              transform-style: preserve-3d;\n              animation: \u0CA0_\u0CA0 5s infinite alternate ease-in-out -7.5s;\n              animation-fill-mode: forwards;\n              transform: rotateY(40deg) rotateX(33deg) translateZ(0);\n            }\n            \n            .layer:after {\n              font: 150px/0.65 'Pacifico', 'Kaushan Script', Futura, 'Roboto', 'Trebuchet MS', Helvetica, sans-serif;\n              content: 'PureA    css!';\n              white-space: pre;\n              text-align: center;\n              height: 100%;\n              width: 100%;\n              position: absolute;\n              top: 50px; \n              color: darken(#fff, 4%);\n              letter-spacing: -2px;\n              text-shadow: 4px 0 10px hsla(0, 0%, 0%, .13);\n            }\n            \n            $i: 1;\n            $NUM_LAYERS: 20;\n            @for $i from 1 through $NUM_LAYERS {\n              .layer:nth-child(#{$i}):after{\n                transform: translateZ(($i - 1) * -1.5px);\n              }\n            }\n            \n            .layer:nth-child(n+#{round($NUM_LAYERS/2)}):after {\n              -webkit-text-stroke: 3px hsla(0, 0%, 0%, .25);\n            }\n            \n            .layer:nth-child(n+#{round($NUM_LAYERS/2 + 1)}):after {\n              -webkit-text-stroke: 15px dodgerblue;\n              text-shadow: 6px 0 6px darken(dodgerblue,35%),\n                           5px 5px 5px darken(dodgerblue,40%),\n                           0 6px 6px darken(dodgerblue,35%);\n            }\n            \n            .layer:nth-child(n+#{round($NUM_LAYERS/2 + 2)}):after {\n              -webkit-text-stroke: 15px darken(dodgerblue, 10%);\n            }\n            \n            .layer:last-child:after {\n              -webkit-text-stroke: 17px hsla(0, 0%, 0%, .1);\n            }\n            \n            .layer:first-child:after{\n              color: #fff;\n              text-shadow: none;\n            }\n            \n            @keyframes \u0CA0_\u0CA0 {\n              100% { transform: rotateY(-40deg) rotateX(-43deg); }\n            }\n            \n            \n             \n                <style> \n                  "
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })), __jsx("div", {
    "class": "stage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  })));
};

_s(About, "ozlCuJt5m2oxv8WD8qFICCSts/Y=", false, function () {
  return [useStyles, _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2Vycm9yLmpzIl0sIm5hbWVzIjpbIm1hbmFnZXJzIiwiaW1hZ2UiLCJuYW1lIiwidGl0bGUiLCJ0ZXh0IiwiaW5zdHJ1Y3RvcnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJBYm91dCIsInByb3BzIiwiY2xhc3NlcyIsInVzZVBhZ2VzQ29udGV4dCIsInNldFBhZ2VJbmRlY2llcyIsImdldFBhZ2VNZXRhIiwidXNlRWZmZWN0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsa0JBRFQ7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFQyxNQUFJLEVBQUUsWUFGUjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLENBQWpCO0FBZUEsSUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VKLE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUUsYUFGUjtBQUdFQyxPQUFLLEVBQUUsWUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQURrQixFQU9sQjtBQUNFSCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsTUFBSSxFQUFFLGNBRlI7QUFHRUMsT0FBSyxFQUFFLFlBSFQ7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FQa0IsRUFhbEI7QUFDRUgsT0FBSyxFQUFFLHFCQURUO0FBRUVDLE1BQUksRUFBRSxpQkFGUjtBQUdFQyxPQUFLLEVBQUUsWUFIVDtBQUlFQyxNQUFJLEVBQUU7QUFKUixDQWJrQixFQW1CbEI7QUFDRUgsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRSxZQUZS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O0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBSyxhQUFNLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLEVBa0JFO0FBQUssYUFBTSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsRUFtQkU7QUFBSyxhQUFNLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixFQW9CRTtBQUFLLGFBQU0sT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLENBOUdGLENBREY7QUF1SUQsQ0E5SUQ7O0dBQU1QLEs7VUFDWUgsUyxFQUN5Qk0sMEU7OztLQUZyQ0gsSztBQWdKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLjZhY2UxMzdiZjk0YzMzZmM3MTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgUGVyc29uQmxvY2sgZnJvbSAnLi4vc3JjL3VpL3BhcnRzL1BlcnNvbkJsb2NrJ1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi9zcmMvdWkvUGFnZUhlYWRlcidcclxuXHJcbmNvbnN0IG1hbmFnZXJzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pZGFuLmpwZycsXHJcbiAgICBuYW1lOiAnSWRhbiBCYXJvbicsXHJcbiAgICB0aXRsZTogJ0ZvdW5kZXIgJiBDVE8nLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2xpaG9vLmpwZycsXHJcbiAgICBuYW1lOiAnTGlob28gWmFpZCcsXHJcbiAgICB0aXRsZTogJ0ZvdW5kZXIgJiBDRU8nLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IGluc3RydWN0b3JzID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9kYW5hLmpwZycsXHJcbiAgICBuYW1lOiAnRGFuYSBHYW5lc2gnLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9kYXZpZC5qcGcnLFxyXG4gICAgbmFtZTogJ0RhdmlkIEZvcm1hbicsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL21pY2hhZWwuanBnJyxcclxuICAgIG5hbWU6ICdNaWNoYWVsIFN0cmF1c3MnLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9vc3N5LmpwZycsXHJcbiAgICBuYW1lOiAnT3NzeSBCaXRvbicsXHJcbiAgICB0aXRsZTogJ0luc3RydWN0b3InLFxyXG4gICAgdGV4dDogJ0xvcmVtIGlwc3VtIGJsYSBibGEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL3Jvbi5qcGcnLFxyXG4gICAgbmFtZTogJ1JvbiBCYXVtYW4nLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy90YW1teS5qcGcnLFxyXG4gICAgbmFtZTogJ1RhbW15IEZpbmUnLFxyXG4gICAgdGl0bGU6ICdJbnN0cnVjdG9yJyxcclxuICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBibGEgYmxhJyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7fSkpXHJcblxyXG5jb25zdCBBYm91dCA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNldFBhZ2VJbmRlY2llcywgZ2V0UGFnZU1ldGEgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy9hYm91dCcpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgY29udGVudD0nVlJGdW5UZWFtIHByb3ZpZGUgaW1lcnNpdmUgY3VzdG9tIFZSIEV4cGVyaWVuY2VzLCBsZWQgYnkgdGFsZW50ZWQgaW5zdHJ1Y3RvcnMuIE91ciB0ZWFtIHdpbGwgZW5zdXJlIHlvdXIgdHJpcCB0cm91Z2ggdGhlIFZSIHdvcmxkIHdpbGwgYmUgaW1lcnNzaXZlIGFuZCBmdW4uJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBBYm91dCBVcydcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndXJsJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9hYm91dCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGtleT0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2Fib3V0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgYm9keSB7IFxyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIGRhcmtlbihkb2RnZXJibHVlLCAxMCUpLCAjMWY0Zjk2LCAjMWIyOTQ5LCAjMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnN0YWdlIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDtcclxuICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogOTk5OXB4O1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5sYXllciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjog4LKgX+CyoCA1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQgLTcuNXM7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDQwZGVnKSByb3RhdGVYKDMzZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGF5ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQ6IDE1MHB4LzAuNjUgJ1BhY2lmaWNvJywgJ0thdXNoYW4gU2NyaXB0JywgRnV0dXJhLCAnUm9ib3RvJywgJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnUHVyZVxcQSAgICBjc3MhJztcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTBweDsgXHJcbiAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigjZmZmLCA0JSk7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDRweCAwIDEwcHggaHNsYSgwLCAwJSwgMCUsIC4xMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICRpOiAxO1xyXG4gICAgICAgICAgICAkTlVNX0xBWUVSUzogMjA7XHJcbiAgICAgICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJE5VTV9MQVlFUlMge1xyXG4gICAgICAgICAgICAgIC5sYXllcjpudGgtY2hpbGQoI3skaX0pOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCgkaSAtIDEpICogLTEuNXB4KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5sYXllcjpudGgtY2hpbGQobisje3JvdW5kKCROVU1fTEFZRVJTLzIpfSk6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDNweCBoc2xhKDAsIDAlLCAwJSwgLjI1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmxheWVyOm50aC1jaGlsZChuKyN7cm91bmQoJE5VTV9MQVlFUlMvMiArIDEpfSk6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDE1cHggZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNnB4IDAgNnB4IGRhcmtlbihkb2RnZXJibHVlLDM1JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDVweCA1cHggNXB4IGRhcmtlbihkb2RnZXJibHVlLDQwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgNnB4IDZweCBkYXJrZW4oZG9kZ2VyYmx1ZSwzNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGF5ZXI6bnRoLWNoaWxkKG4rI3tyb3VuZCgkTlVNX0xBWUVSUy8yICsgMil9KTphZnRlciB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMTVweCBkYXJrZW4oZG9kZ2VyYmx1ZSwgMTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmxheWVyOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDE3cHggaHNsYSgwLCAwJSwgMCUsIC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmxheWVyOmZpcnN0LWNoaWxkOmFmdGVye1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIOCyoF/gsqAge1xyXG4gICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoLTQwZGVnKSByb3RhdGVYKC00M2RlZyk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZT4gXHJcbiAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L3N0eWxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9J3N0YWdlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xheWVyJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xheWVyJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xheWVyJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xheWVyJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xheWVyJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xheWVyJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsYXllcic+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGF5ZXInPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==