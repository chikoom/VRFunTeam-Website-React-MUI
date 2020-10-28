webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ui/parts/InfoImageBlock.jsx":
/*!*****************************************!*\
  !*** ./src/ui/parts/InfoImageBlock.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\parts\\InfoImageBlock.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    image: {
      width: '100%',
      display: 'block'
    },
    block: {
      padding: 0,
      boxSizing: 'content-box'
    },
    blockItem: {
      boxSizing: 'content-box',
      width: '100%',
      height: 'fit-content'
    },
    divider: {
      marginBottom: '1em'
    }
  };
});

var InfoImageBlock = function InfoImageBlock(props) {
  _s();

  var classes = useStyles();

  var _useLanguageContext = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_3__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      padding: '2em'
    },
    elevation: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    className: classes.block,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, props.header), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: classes.divider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    align: "justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, props.text)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "primary",
    className: "".concat(classes.heroButton, " ").concat(classes.heroButtonEmpty),
    component: _Link__WEBPACK_IMPORTED_MODULE_2__["default"],
    href: props.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, siteData.learnMore))));
};

_s(InfoImageBlock, "sXmpmwBWsQpT+W/daji7g+kqR1w=", false, function () {
  return [useStyles, _contexts_LangContext__WEBPACK_IMPORTED_MODULE_3__["useLanguageContext"]];
});

_c = InfoImageBlock;
/* harmony default export */ __webpack_exports__["default"] = (InfoImageBlock);

var _c;

$RefreshReg$(_c, "InfoImageBlock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0luZm9JbWFnZUJsb2NrLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJpbWFnZSIsIndpZHRoIiwiZGlzcGxheSIsImJsb2NrIiwicGFkZGluZyIsImJveFNpemluZyIsImJsb2NrSXRlbSIsImhlaWdodCIsImRpdmlkZXIiLCJtYXJnaW5Cb3R0b20iLCJJbmZvSW1hZ2VCbG9jayIsInByb3BzIiwiY2xhc3NlcyIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwiaGVhZGVyIiwidGV4dCIsImhlcm9CdXR0b24iLCJoZXJvQnV0dG9uRW1wdHkiLCJMaW5rIiwicGF0aCIsImxlYXJuTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxhQUFPLEVBQUU7QUFGSixLQUQ4QjtBQUtyQ0MsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxDQURKO0FBRUxDLGVBQVMsRUFBRTtBQUZOLEtBTDhCO0FBU3JDQyxhQUFTLEVBQUU7QUFDVEQsZUFBUyxFQUFFLGFBREY7QUFFVEosV0FBSyxFQUFFLE1BRkU7QUFHVE0sWUFBTSxFQUFFO0FBSEMsS0FUMEI7QUFjckNDLFdBQU8sRUFBRTtBQUNQQyxrQkFBWSxFQUFFO0FBRFA7QUFkNEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBbUJBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR2YsU0FBUyxFQUF6Qjs7QUFEOEIsNEJBRVRnQixnRkFBa0IsRUFGVDtBQUFBLE1BRXRCQyxRQUZzQix1QkFFdEJBLFFBRnNCOztBQUc5QixTQUNFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBRVYsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUFpQyxhQUFTLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFFUSxPQUFPLENBQUNULEtBQW5DO0FBQTBDLGFBQVMsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsRUFBRVMsT0FBTyxDQUFDTixTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSyxLQUFLLENBQUNJLE1BRFQsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFBUyxhQUFTLEVBQUVILE9BQU8sQ0FBQ0osT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFSSxPQUFPLENBQUNOLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLEtBQUssQ0FBQ0ssSUFEVCxDQURGLENBUEYsRUFZRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFSixPQUFPLENBQUNOLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUssS0FBSyxDQUFDWCxLQUFoQjtBQUF1QixPQUFHLEVBQUMsY0FBM0I7QUFBMEMsYUFBUyxFQUFFWSxPQUFPLENBQUNaLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVpGLEVBZUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsRUFBRVksT0FBTyxDQUFDTixTQUE5QjtBQUF5QyxTQUFLLEVBQUMsUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsVUFEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsYUFBUyxZQUFLTSxPQUFPLENBQUNLLFVBQWIsY0FBMkJMLE9BQU8sQ0FBQ00sZUFBbkMsQ0FIWDtBQUlFLGFBQVMsRUFBRUMsNkNBSmI7QUFLRSxRQUFJLEVBQUVSLEtBQUssQ0FBQ1MsSUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dOLFFBQVEsQ0FBQ08sU0FQWixDQURGLENBZkYsQ0FERixDQURGO0FBK0JELENBbENEOztHQUFNWCxjO1VBQ1liLFMsRUFDS2dCLHdFOzs7S0FGakJILGM7QUFvQ1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4OTFlNTk1MDM3MmZhNGRlODY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgRGl2aWRlcixcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcclxuICB9LFxyXG4gIGJsb2NrSXRlbToge1xyXG4gICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJ2ZpdC1jb250ZW50JyxcclxuICB9LFxyXG4gIGRpdmlkZXI6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzFlbScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBJbmZvSW1hZ2VCbG9jayA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNpdGVEYXRhIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiAnMmVtJyB9fSBlbGV2YXRpb249ezJ9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfSBkaXJlY3Rpb249J2NvbHVtbic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2tJdGVtfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAge3Byb3BzLmhlYWRlcn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja0l0ZW19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGFsaWduPSdqdXN0aWZ5Jz5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrSXRlbX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD0nZnVudGVhbSBsb2dvJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrSXRlbX0gYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmhlcm9CdXR0b259ICR7Y2xhc3Nlcy5oZXJvQnV0dG9uRW1wdHl9YH1cclxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICBocmVmPXtwcm9wcy5wYXRofVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2l0ZURhdGEubGVhcm5Nb3JlfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvSW1hZ2VCbG9ja1xyXG4iXSwic291cmNlUm9vdCI6IiJ9