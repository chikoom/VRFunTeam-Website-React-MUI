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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, siteData.faq.map(function (question, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL1FuQS5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiUW5BIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwiaXNFeHBhbmRlZCIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwibGFuZ3VhZ2UiLCJmYXEiLCJtYXAiLCJxdWVzdGlvbiIsImluZGV4IiwidGl0bGUiLCJjcmVhdGVNYXJrdXAiLCJjb250ZW50IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUssRUFBTDtBQUFBLENBQU4sQ0FBNUI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ25CLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6QjtBQUNBLE1BQU1FLEtBQUssR0FBR0ksa0VBQVEsRUFBdEI7O0FBRm1CLGtCQUlhQyxzREFBUSxDQUFDLEtBQUQsQ0FKckI7QUFBQSxNQUlaQyxRQUpZO0FBQUEsTUFJRkMsV0FKRTs7QUFNbkIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLFdBQUksVUFBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQXVCO0FBQ25ESixpQkFBVyxDQUFDSSxVQUFVLEdBQUdGLEtBQUgsR0FBVyxLQUF0QixDQUFYO0FBQ0QsS0FGeUI7QUFBQSxHQUExQjs7QUFObUIsNEJBU1lHLG9GQUFrQixFQVQ5QjtBQUFBLE1BU1hDLFFBVFcsdUJBU1hBLFFBVFc7QUFBQSxNQVNEQyxRQVRDLHVCQVNEQSxRQVRDOztBQVVuQixTQUNFLG1FQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSxXQUNsQixNQUFDLG1FQUFEO0FBQ0UsY0FBUSxFQUFFWixRQUFRLG9CQUFhWSxLQUFiLENBRHBCO0FBRUUsY0FBUSxFQUFFVixZQUFZLGdCQUFTVSxLQUFULEVBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxNQUFDLDBFQUFEO0FBQ0UsZ0JBQVUsRUFBRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEZDtBQUVFLHNDQUF1QkEsS0FBdkIsY0FGRjtBQUdFLFFBQUUsaUJBQVVBLEtBQVYsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0UsTUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELFFBQVEsQ0FBQ0UsS0FEWixDQUxGLENBSkYsRUFhRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTRCLDZCQUF1QixFQUFFQyxZQUFZLENBQUNILFFBQVEsQ0FBQyxNQUFELENBQVQsQ0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBYkYsQ0FEa0I7QUFBQSxHQUFqQixDQURILENBREY7QUEwQkQsQ0FwQ0Q7O0dBQU1oQixHO1VBQ1lILFMsRUFDRk0sMEQsRUFPaUJRLDRFOzs7S0FUM0JYLEc7QUFzQ1NBLGtFQUFmOztBQUVBLFNBQVNtQixZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUM3QixTQUFPO0FBQ0pDLFVBQU0sRUFBRUQ7QUFESixHQUFQO0FBRUQ7O0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC40ZmFkMTBhYjQ5YzFjMjEzN2VmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJ1xyXG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5J1xyXG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe30pKVxyXG5cclxuY29uc3QgUW5BID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG5cclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBwYW5lbCA9PiAoZXZlbnQsIGlzRXhwYW5kZWQpID0+IHtcclxuICAgIHNldEV4cGFuZGVkKGlzRXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NpdGVEYXRhLmZhcS5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4gXHJcbiAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IGBwYW5lbCR7aW5kZXh9YH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGBwYW5lbCR7aW5kZXh9YCl9XHJcbiAgICAgID5cclxuICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz17YHBhbmVsJHtpbmRleH1hLWNvbnRlbnRgfVxyXG4gICAgICAgICAgaWQ9e2BwYW5lbCR7aW5kZXh9YS1oZWFkZXJgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5cclxuICAgICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17Y3JlYXRlTWFya3VwKHF1ZXN0aW9uWyd0ZXh0J10pfT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICApfVxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUW5BXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXAoY29udGVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAgX19odG1sOiBjb250ZW50ICAgIH07XHJcbn07IFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==