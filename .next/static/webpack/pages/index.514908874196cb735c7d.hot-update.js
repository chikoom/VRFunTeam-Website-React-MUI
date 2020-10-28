webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ui/parts/CardsSlider.jsx":
/*!**************************************!*\
  !*** ./src/ui/parts/CardsSlider.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\parts\\CardsSlider.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {};
});
var timeOutHandler; // const elements = [
//   {
//     content: `It is a long established fact that a reader will be distracted
//     by the readable content of a page when looking at its layout.`,
//     subContent: `Idan Baron | SEO Chikoom inc`,
//   },
//   {
//     content: `Mow Mow Mow.`,
//     subContent: `Kundofoni | SEO FancyFeast inc`,
//   },
//   {
//     content: `lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `,
//     subContent: `Moshiko MushMush | SEO DigiDigi inc`,
//   },
// ]

var CardsSlider = function CardsSlider(props) {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentIndex = _useState[0],
      setCurrentIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      slideEnter = _useState2[0],
      setSlideEnter = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      clearTimeout(timeOutHandler);
    };
  }, []);
  var elements = props.elements;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    direction: 'row-reverse',
    alignItems: "center",
    justify: "center",
    style: {
      overflow: 'hidden'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    md: 6,
    xs: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, elements.map(function (element, index) {
    return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: element.subContent,
      direction: slideEnter ? 'left' : 'right',
      "in": currentIndex === index && slideEnter,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        enter: 1000,
        exit: 500
      },
      onEntered: function onEntered() {
        timeOutHandler = setTimeout(function () {
          setSlideEnter(false);
        }, 3500);
      },
      onExited: function onExited() {
        if (currentIndex === elements.length - 1) setCurrentIndex(0);else setCurrentIndex(currentIndex + 1);
        setSlideEnter(true);
      } // style={{ position: 'absolute', width: '50%' }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      direction: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "h5",
      style: {
        fontWeight: 700
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, "\"", element.content, "\""), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "subtitle2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, element.subContent))))));
  })));
};

_s(CardsSlider, "EM8ke9DgeUT+4gfgBQqbBtdgEEQ=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"]];
});

_c = CardsSlider;
/* harmony default export */ __webpack_exports__["default"] = (CardsSlider);

var _c;

$RefreshReg$(_c, "CardsSlider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0NhcmRzU2xpZGVyLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0aW1lT3V0SGFuZGxlciIsIkNhcmRzU2xpZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInNsaWRlRW50ZXIiLCJzZXRTbGlkZUVudGVyIiwidXNlRWZmZWN0IiwiY2xlYXJUaW1lb3V0IiwiZWxlbWVudHMiLCJvdmVyZmxvdyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInN1YkNvbnRlbnQiLCJlbnRlciIsImV4aXQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiZm9udFdlaWdodCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFOLENBQTVCO0FBQ0EsSUFBSUMsY0FBSixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUMzQixNQUFNQyxPQUFPLEdBQUdOLFNBQVMsRUFBekI7QUFDQSxNQUFNRSxLQUFLLEdBQUdLLHlFQUFRLEVBQXRCOztBQUYyQixrQkFHYUMsc0RBQVEsQ0FBQyxDQUFELENBSHJCO0FBQUEsTUFHcEJDLFlBSG9CO0FBQUEsTUFHTkMsZUFITTs7QUFBQSxtQkFJU0Ysc0RBQVEsQ0FBQyxJQUFELENBSmpCO0FBQUEsTUFJcEJHLFVBSm9CO0FBQUEsTUFJUkMsYUFKUTs7QUFL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dGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MTQ5MDg4NzQxOTZjYjczNWM3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIERpdmlkZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHt9KSlcclxudmFyIHRpbWVPdXRIYW5kbGVyXHJcblxyXG4vLyBjb25zdCBlbGVtZW50cyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBjb250ZW50OiBgSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWRcclxuLy8gICAgIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC5gLFxyXG4vLyAgICAgc3ViQ29udGVudDogYElkYW4gQmFyb24gfCBTRU8gQ2hpa29vbSBpbmNgLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgY29udGVudDogYE1vdyBNb3cgTW93LmAsXHJcbi8vICAgICBzdWJDb250ZW50OiBgS3VuZG9mb25pIHwgU0VPIEZhbmN5RmVhc3QgaW5jYCxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGNvbnRlbnQ6IGBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBgLFxyXG4vLyAgICAgc3ViQ29udGVudDogYE1vc2hpa28gTXVzaE11c2ggfCBTRU8gRGlnaURpZ2kgaW5jYCxcclxuLy8gICB9LFxyXG4vLyBdXHJcblxyXG5jb25zdCBDYXJkc1NsaWRlciA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbc2xpZGVFbnRlciwgc2V0U2xpZGVFbnRlcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZU91dEhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3Qge2VsZW1lbnRzfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBkaXJlY3Rpb249eydyb3ctcmV2ZXJzZSd9XHJcbiAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicgfX1cclxuICAgID5cclxuICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEwfT5cclxuICAgICAgICB7ZWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFNsaWRlXHJcbiAgICAgICAgICAgIGtleT17ZWxlbWVudC5zdWJDb250ZW50fVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e3NsaWRlRW50ZXIgPyAnbGVmdCcgOiAncmlnaHQnfVxyXG4gICAgICAgICAgICBpbj17Y3VycmVudEluZGV4ID09PSBpbmRleCAmJiBzbGlkZUVudGVyfVxyXG4gICAgICAgICAgICBtb3VudE9uRW50ZXJcclxuICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxyXG4gICAgICAgICAgICB0aW1lb3V0PXt7XHJcbiAgICAgICAgICAgICAgZW50ZXI6IDEwMDAsXHJcbiAgICAgICAgICAgICAgZXhpdDogNTAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkVudGVyZWQ9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aW1lT3V0SGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGVFbnRlcihmYWxzZSlcclxuICAgICAgICAgICAgICB9LCAzNTAwKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkV4aXRlZD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IGVsZW1lbnRzLmxlbmd0aCAtIDEpIHNldEN1cnJlbnRJbmRleCgwKVxyXG4gICAgICAgICAgICAgIGVsc2Ugc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCArIDEpXHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVFbnRlcih0cnVlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvLyBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICc1MCUnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIFwie2VsZW1lbnQuY29udGVudH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnN1YkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNTbGlkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==