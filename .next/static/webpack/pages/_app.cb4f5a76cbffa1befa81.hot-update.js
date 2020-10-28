webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/helpers/ui-helpers.jsx":
/*!***************************************!*\
  !*** ./src/ui/helpers/ui-helpers.jsx ***!
  \***************************************/
/*! exports provided: shortenText, ElevationScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenText", function() { return shortenText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationScroll", function() { return ElevationScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _s = $RefreshSig$();



 // import { withRouter } from 'react-router-dom'

function shortenText(string, numOfChars) {
  return string.substring(0, numOfChars) + '...';
}
function ElevationScroll(props) {
  _s();

  var children = props.children;
  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"])({
    disableHysteresis: true,
    threshold: 0
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

_s(ElevationScroll, "EC2GbbZl9x3XKoXLVx1H89cOBi0=", false, function () {
  return [_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = ElevationScroll;
ElevationScroll.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired
}; // class ScrollToTop extends PureComponent {
//   componentDidMount = () => window.scrollTo(0, 0)
//   componentDidUpdate = prevProps => {
//     if (this.props.location !== prevProps.location) window.scrollTo(0, 0)
//   }
//   render = () => this.props.children
// }
// export default withRouter(ScrollToTop)

var _c;

$RefreshReg$(_c, "ElevationScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2hlbHBlcnMvdWktaGVscGVycy5qc3giXSwibmFtZXMiOlsic2hvcnRlblRleHQiLCJzdHJpbmciLCJudW1PZkNoYXJzIiwic3Vic3RyaW5nIiwiRWxldmF0aW9uU2Nyb2xsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImVsZXZhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFTyxTQUFTQSxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsVUFBN0IsRUFBd0M7QUFDN0MsU0FBT0QsTUFBTSxDQUFDRSxTQUFQLENBQWlCLENBQWpCLEVBQW1CRCxVQUFuQixJQUFpQyxLQUF4QztBQUNEO0FBRU0sU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQSxNQUM3QkMsUUFENkIsR0FDaEJELEtBRGdCLENBQzdCQyxRQUQ2QjtBQUVyQyxNQUFNQyxPQUFPLEdBQUdDLGtGQUFnQixDQUFDO0FBQy9CQyxxQkFBaUIsRUFBRSxJQURZO0FBRS9CQyxhQUFTLEVBQUU7QUFGb0IsR0FBRCxDQUFoQztBQUtBLHNCQUFPQyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CTixRQUFuQixFQUE2QjtBQUNsQ08sYUFBUyxFQUFFTixPQUFPLEdBQUcsQ0FBSCxHQUFPO0FBRFMsR0FBN0IsQ0FBUDtBQUdEOztHQVZlSCxlO1VBRUVJLDBFOzs7S0FGRkosZTtBQVloQkEsZUFBZSxDQUFDVSxTQUFoQixHQUE0QjtBQUMxQlIsVUFBUSxFQUFFUyxpREFBUyxDQUFDQyxPQUFWLENBQWtCQztBQURGLENBQTVCLEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2I0ZjVhNzZjYmZmYTFiZWZhODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlblRleHQoc3RyaW5nLCBudW1PZkNoYXJzKXtcclxuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLG51bU9mQ2hhcnMpICsgJy4uLidcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVsZXZhdGlvblNjcm9sbChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xyXG4gICAgZWxldmF0aW9uOiB0cmlnZ2VyID8gNCA6IDAsXHJcbiAgfSlcclxufVxyXG5cclxuRWxldmF0aW9uU2Nyb2xsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuLy8gY2xhc3MgU2Nyb2xsVG9Ub3AgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuLy8gICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4vLyAgIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByZXZQcm9wcyA9PiB7XHJcbi8vICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbiAhPT0gcHJldlByb3BzLmxvY2F0aW9uKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuLy8gICB9XHJcbi8vICAgcmVuZGVyID0gKCkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNjcm9sbFRvVG9wKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9