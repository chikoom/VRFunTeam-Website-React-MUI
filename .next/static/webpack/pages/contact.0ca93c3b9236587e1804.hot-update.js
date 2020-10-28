webpackHotUpdate_N_E("pages/contact",{

/***/ "./src/ui/parts/QnA.jsx":
/*!******************************!*\
  !*** ./src/ui/parts/QnA.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/contexts/LangContext */ "./src/contexts/LangContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\parts\\QnA.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {};
});

var QnA = function QnA(props) {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var handleChange = function handleChange(panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  var _useLanguageContext = Object(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, siteData.faq.data.map(function (question, index) {
    return __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      expanded: expanded === "panel".concat(index),
      onChange: handleChange("panel".concat(index)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 23
        }
      }),
      "aria-controls": "panel".concat(index, "a-content"),
      id: "panel".concat(index, "a-header"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, question.title)), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "body1",
      dangerouslySetInnerHTML: createMarkup(question['text']),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    })));
  }));
};

_s(QnA, "fu95XJQDoHQjCKOHOht4qYseNyM=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"], _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__["useLanguageContext"]];
});

_c = QnA;
/* harmony default export */ __webpack_exports__["default"] = (QnA);

function createMarkup(content) {
  return {
    __html: content
  };
}

;

var _c;

$RefreshReg$(_c, "QnA");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL1FuQS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiUW5BIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwiaXNFeHBhbmRlZCIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwibGFuZ3VhZ2UiLCJmYXEiLCJkYXRhIiwibWFwIiwicXVlc3Rpb24iLCJpbmRleCIsInRpdGxlIiwiY3JlYXRlTWFya3VwIiwiY29udGVudCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFOLENBQTVCOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNuQixNQUFNQyxPQUFPLEdBQUdMLFNBQVMsRUFBekI7QUFDQSxNQUFNRSxLQUFLLEdBQUdJLGtFQUFRLEVBQXRCOztBQUZtQixrQkFJYUMsc0RBQVEsQ0FBQyxLQUFELENBSnJCO0FBQUEsTUFJWkMsUUFKWTtBQUFBLE1BSUZDLFdBSkU7O0FBTW5CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxXQUFJLFVBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUF1QjtBQUNuREosaUJBQVcsQ0FBQ0ksVUFBVSxHQUFHRixLQUFILEdBQVcsS0FBdEIsQ0FBWDtBQUNELEtBRnlCO0FBQUEsR0FBMUI7O0FBTm1CLDRCQVNZRyxvRkFBa0IsRUFUOUI7QUFBQSxNQVNYQyxRQVRXLHVCQVNYQSxRQVRXO0FBQUEsTUFTREMsUUFUQyx1QkFTREEsUUFUQzs7QUFVbkIsU0FDRSxtRUFDR0QsUUFBUSxDQUFDRSxHQUFULENBQWFDLElBQWIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ3ZCLE1BQUMsbUVBQUQ7QUFDRSxjQUFRLEVBQUViLFFBQVEsb0JBQWFhLEtBQWIsQ0FEcEI7QUFFRSxjQUFRLEVBQUVYLFlBQVksZ0JBQVNXLEtBQVQsRUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLE1BQUMsMEVBQUQ7QUFDRSxnQkFBVSxFQUFFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURkO0FBRUUsc0NBQXVCQSxLQUF2QixjQUZGO0FBR0UsUUFBRSxpQkFBVUEsS0FBVixhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRSxNQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsUUFBUSxDQUFDRSxLQURaLENBTEYsQ0FKRixFQWFFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsT0FBcEI7QUFBNEIsNkJBQXVCLEVBQUVDLFlBQVksQ0FBQ0gsUUFBUSxDQUFDLE1BQUQsQ0FBVCxDQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FiRixDQUR1QjtBQUFBLEdBQXRCLENBREgsQ0FERjtBQTBCRCxDQXBDRDs7R0FBTWpCLEc7VUFDWUgsUyxFQUNGTSwwRCxFQU9pQlEsNEU7OztLQVQzQlgsRztBQXNDU0Esa0VBQWY7O0FBRUEsU0FBU29CLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQzdCLFNBQU87QUFDSkMsVUFBTSxFQUFFRDtBQURKLEdBQVA7QUFFRDs7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LjBjYTkzYzNiOTIzNjU4N2UxODA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb24nXHJcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnknXHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSdcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7fSkpXHJcblxyXG5jb25zdCBRbkEgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcblxyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHBhbmVsID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpXHJcbiAgfVxyXG4gIGNvbnN0IHsgc2l0ZURhdGEsIGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2l0ZURhdGEuZmFxLmRhdGEubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IFxyXG4gICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSBgcGFuZWwke2luZGV4fWB9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShgcGFuZWwke2luZGV4fWApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cclxuICAgICAgICAgIGFyaWEtY29udHJvbHM9e2BwYW5lbCR7aW5kZXh9YS1jb250ZW50YH1cclxuICAgICAgICAgIGlkPXtgcGFuZWwke2luZGV4fWEtaGVhZGVyYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+XHJcbiAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2NyZWF0ZU1hcmt1cChxdWVzdGlvblsndGV4dCddKX0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgKX1cclxuICAgICAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFFuQVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFya3VwKGNvbnRlbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgIF9faHRtbDogY29udGVudCAgICB9O1xyXG59OyBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=