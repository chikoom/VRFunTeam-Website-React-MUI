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
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      padding: '2em'
    },
    elevation: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    className: classes.block,
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, props.header), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: classes.divider,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    align: "justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, props.text)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    alt: "funteam logo",
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    className: classes.blockItem,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 11
    }
  }, siteData.learnMore))));
};

_s(InfoImageBlock, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0luZm9JbWFnZUJsb2NrLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJpbWFnZSIsIndpZHRoIiwiZGlzcGxheSIsImJsb2NrIiwicGFkZGluZyIsImJveFNpemluZyIsImJsb2NrSXRlbSIsImhlaWdodCIsImRpdmlkZXIiLCJtYXJnaW5Cb3R0b20iLCJJbmZvSW1hZ2VCbG9jayIsInByb3BzIiwiY2xhc3NlcyIsImhlYWRlciIsInRleHQiLCJoZXJvQnV0dG9uIiwiaGVyb0J1dHRvbkVtcHR5IiwiTGluayIsInBhdGgiLCJzaXRlRGF0YSIsImxlYXJuTW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxhQUFPLEVBQUU7QUFGSixLQUQ4QjtBQUtyQ0MsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxDQURKO0FBRUxDLGVBQVMsRUFBRTtBQUZOLEtBTDhCO0FBU3JDQyxhQUFTLEVBQUU7QUFDVEQsZUFBUyxFQUFFLGFBREY7QUFFVEosV0FBSyxFQUFFLE1BRkU7QUFHVE0sWUFBTSxFQUFFO0FBSEMsS0FUMEI7QUFjckNDLFdBQU8sRUFBRTtBQUNQQyxrQkFBWSxFQUFFO0FBRFA7QUFkNEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBbUJBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR2YsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFTyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQWlDLGFBQVMsRUFBRSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUVRLE9BQU8sQ0FBQ1QsS0FBbkM7QUFBMEMsYUFBUyxFQUFDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFUyxPQUFPLENBQUNOLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLEtBQUssQ0FBQ0UsTUFEVCxDQURGLEVBSUUsTUFBQyx5REFBRDtBQUFTLGFBQVMsRUFBRUQsT0FBTyxDQUFDSixPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQU9FLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVJLE9BQU8sQ0FBQ04sU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ssS0FBSyxDQUFDRyxJQURULENBREYsQ0FQRixFQVlFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ04sU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFSyxLQUFLLENBQUNYLEtBQWhCO0FBQXVCLE9BQUcsRUFBQyxjQUEzQjtBQUEwQyxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1osS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsRUFlRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFWSxPQUFPLENBQUNOLFNBQTlCO0FBQXlDLFNBQUssRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBQyxVQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFTLFlBQUtNLE9BQU8sQ0FBQ0csVUFBYixjQUEyQkgsT0FBTyxDQUFDSSxlQUFuQyxDQUhYO0FBSUUsYUFBUyxFQUFFQyw2Q0FKYjtBQUtFLFFBQUksRUFBRU4sS0FBSyxDQUFDTyxJQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0MsUUFBUSxDQUFDQyxTQVBaLENBREYsQ0FmRixDQURGLENBREY7QUErQkQsQ0FqQ0Q7O0dBQU1WLGM7VUFDWWIsUzs7O0tBRFphLGM7QUFtQ1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlODU4ZmE2OTgyMzgxMzIzMDlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgRGl2aWRlcixcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcclxuICB9LFxyXG4gIGJsb2NrSXRlbToge1xyXG4gICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJ2ZpdC1jb250ZW50JyxcclxuICB9LFxyXG4gIGRpdmlkZXI6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzFlbScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBJbmZvSW1hZ2VCbG9jayA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogJzJlbScgfX0gZWxldmF0aW9uPXsyfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja30gZGlyZWN0aW9uPSdjb2x1bW4nPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrSXRlbX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgIHtwcm9wcy5oZWFkZXJ9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2tJdGVtfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBhbGlnbj0nanVzdGlmeSc+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja0l0ZW19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9J2Z1bnRlYW0gbG9nbycgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja0l0ZW19IGFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5oZXJvQnV0dG9ufSAke2NsYXNzZXMuaGVyb0J1dHRvbkVtcHR5fWB9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgaHJlZj17cHJvcHMucGF0aH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NpdGVEYXRhLmxlYXJuTW9yZX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb0ltYWdlQmxvY2tcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==