webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ui/parts/YoutubeContainer.jsx":
/*!*******************************************!*\
  !*** ./src/ui/parts/YoutubeContainer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "./node_modules/@material-ui/icons/YouTube.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\parts\\YoutubeContainer.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    wrapper: {
      width: '100%',
      height: '315px',
      position: 'relative',
      objectFit: 'cover',
      backgroundColor: '#000'
    },
    videoThumb: {
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      height: '315px',
      position: 'relative',
      backgroundSize: 'contain',
      objectFit: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    playButton: {
      color: '#fff',
      fontSize: '4.5em',
      textShadow: '0px 0px 3px #000',
      width: 'auto',
      cursor: 'pointer',
      '&:hover': {
        color: '#FF0000'
      }
    }
  };
});

var YoutubeContainer = function YoutubeContainer(props) {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showVideo = _useState[0],
      setShowVideo = _useState[1];

  var handlePlay = function handlePlay() {
    setShowVideo(true);
  };

  return __jsx("div", {
    className: classes.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, showVideo ? __jsx("iframe", {
    title: "Oculus Quest",
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/".concat(props.video, "?autoplay=1"),
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    iv_load_policy: "3",
    modestbranding: "1",
    autoPlay: "1",
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }) : __jsx("div", {
    className: classes.videoThumb,
    style: {
      backgroundImage: "url(https://img.youtube.com/vi/".concat(props.video, "/mqdefault.jpg)")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.playButton,
    onClick: handlePlay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })));
};

_s(YoutubeContainer, "SVwIu4BDIPbYVt7KrfSpJAoomyE=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = YoutubeContainer;
/* harmony default export */ __webpack_exports__["default"] = (YoutubeContainer);

var _c;

$RefreshReg$(_c, "YoutubeContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL1lvdXR1YmVDb250YWluZXIuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndyYXBwZXIiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZENvbG9yIiwidmlkZW9UaHVtYiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsInBsYXlCdXR0b24iLCJjb2xvciIsImZvbnRTaXplIiwidGV4dFNoYWRvdyIsImN1cnNvciIsIllvdXR1YmVDb250YWluZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZVN0YXRlIiwic2hvd1ZpZGVvIiwic2V0U2hvd1ZpZGVvIiwiaGFuZGxlUGxheSIsInZpZGVvIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFdBQU8sRUFBRTtBQUNQQyxXQUFLLEVBQUUsTUFEQTtBQUVQQyxZQUFNLEVBQUUsT0FGRDtBQUdQQyxjQUFRLEVBQUUsVUFISDtBQUlQQyxlQUFTLEVBQUUsT0FKSjtBQUtQQyxxQkFBZSxFQUFFO0FBTFYsS0FENEI7QUFRckNDLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUUsTUFEQztBQUVWQyxvQkFBYyxFQUFFLFFBRk47QUFHVkMsa0JBQVksRUFBRSxRQUhKO0FBSVZSLFdBQUssRUFBRSxNQUpHO0FBS1ZDLFlBQU0sRUFBRSxPQUxFO0FBTVZDLGNBQVEsRUFBRSxVQU5BO0FBT1ZPLG9CQUFjLEVBQUUsU0FQTjtBQVFWTixlQUFTLEVBQUUsT0FSRDtBQVNWTyxzQkFBZ0IsRUFBRSxXQVRSO0FBVVZDLHdCQUFrQixFQUFFO0FBVlYsS0FSeUI7QUFvQnJDQyxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFLE1BREc7QUFFVkMsY0FBUSxFQUFFLE9BRkE7QUFHVkMsZ0JBQVUsRUFBRSxrQkFIRjtBQUlWZixXQUFLLEVBQUUsTUFKRztBQUtWZ0IsWUFBTSxFQUFFLFNBTEU7QUFNVixpQkFBVztBQUNUSCxhQUFLLEVBQUU7QUFERTtBQU5EO0FBcEJ5QixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFnQ0EsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDaEMsTUFBTUMsT0FBTyxHQUFHdkIsU0FBUyxFQUF6QjtBQUNBLE1BQU1FLEtBQUssR0FBR3NCLGtFQUFRLEVBQXRCOztBQUZnQyxrQkFHRUMsc0RBQVEsQ0FBQyxLQUFELENBSFY7QUFBQSxNQUd6QkMsU0FIeUI7QUFBQSxNQUdkQyxZQUhjOztBQUloQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBRUosT0FBTyxDQUFDcEIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdUIsU0FBUyxHQUNSO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFVBQU0sRUFBQyxLQUhUO0FBSUUsT0FBRywwQ0FBbUNKLEtBQUssQ0FBQ08sS0FBekMsZ0JBSkw7QUFLRSxlQUFXLEVBQUMsR0FMZDtBQU1FLFNBQUssRUFBQywwRkFOUjtBQU9FLG1CQUFlLE1BUGpCO0FBUUUsa0JBQWMsRUFBQyxHQVJqQjtBQVNFLGtCQUFjLEVBQUMsR0FUakI7QUFVRSxZQUFRLEVBQUMsR0FWWDtBQVdFLFNBQUssRUFBRTtBQUFFekIsV0FBSyxFQUFFO0FBQVQsS0FYVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFEsR0FlUjtBQUNFLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ2QsVUFEckI7QUFFRSxTQUFLLEVBQUU7QUFDTHFCLHFCQUFlLDJDQUFvQ1IsS0FBSyxDQUFDTyxLQUExQztBQURWLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsaUVBQUQ7QUFBYSxhQUFTLEVBQUVOLE9BQU8sQ0FBQ1AsVUFBaEM7QUFBNEMsV0FBTyxFQUFFWSxVQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FoQkosQ0FERjtBQTRCRCxDQW5DRDs7R0FBTVAsZ0I7VUFDWXJCLFMsRUFDRndCLDBEOzs7S0FGVkgsZ0I7QUFxQ1NBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc1MjE2MTM2YzJiOGRkOWFmODdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlJ1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzMxNXB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgfSxcclxuICB2aWRlb1RodW1iOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzMxNXB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHBsYXlCdXR0b246IHtcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBmb250U2l6ZTogJzQuNWVtJyxcclxuICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDNweCAjMDAwJyxcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogJyNGRjAwMDAnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IFlvdXR1YmVDb250YWluZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgW3Nob3dWaWRlbywgc2V0U2hvd1ZpZGVvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93VmlkZW8odHJ1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICB7c2hvd1ZpZGVvID8gKFxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIHRpdGxlPSdPY3VsdXMgUXVlc3QnXHJcbiAgICAgICAgICB3aWR0aD0nNTYwJ1xyXG4gICAgICAgICAgaGVpZ2h0PSczMTUnXHJcbiAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Byb3BzLnZpZGVvfT9hdXRvcGxheT0xYH1cclxuICAgICAgICAgIGZyYW1lQm9yZGVyPScwJ1xyXG4gICAgICAgICAgYWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnXHJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgIGl2X2xvYWRfcG9saWN5PSczJ1xyXG4gICAgICAgICAgbW9kZXN0YnJhbmRpbmc9JzEnXHJcbiAgICAgICAgICBhdXRvUGxheT0nMSdcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvVGh1bWJ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtwcm9wcy52aWRlb30vbXFkZWZhdWx0LmpwZylgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8WW91VHViZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnBsYXlCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVBsYXl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFlvdXR1YmVDb250YWluZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==