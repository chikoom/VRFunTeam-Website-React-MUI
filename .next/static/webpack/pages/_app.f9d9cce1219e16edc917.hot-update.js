webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/theme.js":
/*!*************************!*\
  !*** ./src/ui/theme.js ***!
  \*************************/
/*! exports provided: lightTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var vrPink = '#d84987';
var vrBlue = '#306ca0';
var themeAll = {
  typography: {
    h1: {
      fontWeight: 900,
      fontFamily: 'Raleway'
    },
    h2: {
      fontWeight: 900,
      fontFamily: 'Raleway'
    },
    h3: {
      fontWeight: 900,
      fontFamily: 'Raleway'
    },
    h4: {
      fontWeight: 900,
      fontFamily: 'Raleway'
    },
    h5: {
      fontWeight: 900,
      fontFamily: 'Raleway'
    },
    h6: {
      fontWeight: 900,
      fontFamily: 'Raleway'
    },
    tab: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '1rem'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none'
    },
    listIcon: {
      fontSize: '2em',
      transform: 'rotate(-15deg)',
      textShadow: '0px 0px 23px #555'
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: vrBlue,
        fontSize: '1rem'
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    },
    MuiDivider: {
      root: {
        marginTop: '1em',
        marginBottom: '2em'
      }
    },
    MuiAccordion: {
      root: {
        '&.Mui-expanded': {
          margin: 0
        }
      }
    }
  }
};
var dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread({
  palette: {
    common: {
      digiPink: vrPink,
      digiBlue: vrBlue
    },
    primary: {
      main: vrBlue
    },
    secondary: {
      main: vrPink
    }
  }
}, themeAll));
dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dLightTheme);
var lightTheme = dLightTheme;
var dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread({
  palette: {
    type: 'dark',
    common: {
      digiPink: vrPink,
      digiBlue: vrBlue
    },
    primary: {
      main: vrPink
    },
    secondary: {
      main: vrBlue
    },
    background: {
      paper: '#424242',
      "default": '#303030'
    }
  }
}, themeAll));
dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dDarkTheme);
var darkTheme = dDarkTheme;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3RoZW1lLmpzIl0sIm5hbWVzIjpbInZyUGluayIsInZyQmx1ZSIsInRoZW1lQWxsIiwidHlwb2dyYXBoeSIsImgxIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwidGFiIiwiZm9udFNpemUiLCJlc3RpbWF0ZSIsInRleHRUcmFuc2Zvcm0iLCJsaXN0SWNvbiIsInRyYW5zZm9ybSIsInRleHRTaGFkb3ciLCJvdmVycmlkZXMiLCJNdWlJbnB1dExhYmVsIiwicm9vdCIsImNvbG9yIiwiTXVpRmlsbGVkSW5wdXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlEaXZpZGVyIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTXVpQWNjb3JkaW9uIiwibWFyZ2luIiwiZExpZ2h0VGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJjb21tb24iLCJkaWdpUGluayIsImRpZ2lCbHVlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJyZXNwb25zaXZlRm9udFNpemVzIiwibGlnaHRUaGVtZSIsImREYXJrVGhlbWUiLCJ0eXBlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZGFya1RoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFmO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsWUFBVSxFQUFFO0FBQ1ZDLE1BQUUsRUFBRTtBQUNGQyxnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBRE07QUFLVkMsTUFBRSxFQUFFO0FBQ0ZGLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FMTTtBQVNWRSxNQUFFLEVBQUU7QUFDRkgsZ0JBQVUsRUFBRSxHQURWO0FBRUZDLGdCQUFVLEVBQUU7QUFGVixLQVRNO0FBYVZHLE1BQUUsRUFBRTtBQUNGSixnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBYk07QUFpQlZJLE1BQUUsRUFBRTtBQUNGTCxnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBakJNO0FBcUJWSyxNQUFFLEVBQUU7QUFDRk4sZ0JBQVUsRUFBRSxHQURWO0FBRUZDLGdCQUFVLEVBQUU7QUFGVixLQXJCTTtBQXlCVk0sT0FBRyxFQUFFO0FBQ0hOLGdCQUFVLEVBQUUsU0FEVDtBQUVIRCxnQkFBVSxFQUFFLEtBRlQ7QUFHSFEsY0FBUSxFQUFFO0FBSFAsS0F6Qks7QUE4QlZDLFlBQVEsRUFBRTtBQUNSUixnQkFBVSxFQUFFLFVBREo7QUFFUk8sY0FBUSxFQUFFLE1BRkY7QUFHUkUsbUJBQWEsRUFBRTtBQUhQLEtBOUJBO0FBbUNWQyxZQUFRLEVBQUU7QUFDUkgsY0FBUSxFQUFFLEtBREY7QUFFUkksZUFBUyxFQUFFLGdCQUZIO0FBR1JDLGdCQUFVLEVBQUU7QUFISjtBQW5DQSxHQURHO0FBMENmQyxXQUFTLEVBQUU7QUFDVEMsaUJBQWEsRUFBRTtBQUNiQyxVQUFJLEVBQUU7QUFDSkMsYUFBSyxFQUFFckIsTUFESDtBQUVKWSxnQkFBUSxFQUFFO0FBRk47QUFETyxLQUROO0FBT1RVLGtCQUFjLEVBQUU7QUFDZEYsVUFBSSxFQUFFO0FBQ0pHLHVCQUFlLEVBQUU7QUFEYjtBQURRLEtBUFA7QUFZVEMsY0FBVSxFQUFFO0FBQ1ZKLFVBQUksRUFBRTtBQUNKSyxpQkFBUyxFQUFFLEtBRFA7QUFFSkMsb0JBQVksRUFBRTtBQUZWO0FBREksS0FaSDtBQWtCVEMsZ0JBQVksRUFBRTtBQUNaUCxVQUFJLEVBQUU7QUFDSiwwQkFBa0I7QUFDaEJRLGdCQUFNLEVBQUU7QUFEUTtBQURkO0FBRE07QUFsQkw7QUExQ0ksQ0FBakI7QUFzRUEsSUFBSUMsV0FBVyxHQUFHQywrRUFBYztBQUM5QkMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUVsQyxNQURKO0FBRU5tQyxjQUFRLEVBQUVsQztBQUZKLEtBREQ7QUFLUG1DLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUVwQztBQURDLEtBTEY7QUFRUHFDLGFBQVMsRUFBRTtBQUNURCxVQUFJLEVBQUVyQztBQURHO0FBUko7QUFEcUIsR0FhM0JFLFFBYjJCLEVBQWhDO0FBZ0JBNEIsV0FBVyxHQUFHUyxvRkFBbUIsQ0FBQ1QsV0FBRCxDQUFqQztBQUNPLElBQU1VLFVBQVUsR0FBR1YsV0FBbkI7QUFFUCxJQUFJVyxVQUFVLEdBQUdWLCtFQUFjO0FBQzdCQyxTQUFPLEVBQUU7QUFDUFUsUUFBSSxFQUFFLE1BREM7QUFFUFQsVUFBTSxFQUFFO0FBQ05DLGNBQVEsRUFBRWxDLE1BREo7QUFFTm1DLGNBQVEsRUFBRWxDO0FBRkosS0FGRDtBQU1QbUMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRXJDO0FBREMsS0FORjtBQVNQc0MsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRXBDO0FBREcsS0FUSjtBQVlQMEMsY0FBVSxFQUFFO0FBQ1ZDLFdBQUssRUFBRSxTQURHO0FBRVYsaUJBQVM7QUFGQztBQVpMO0FBRG9CLEdBa0IxQjFDLFFBbEIwQixFQUEvQjtBQXFCQXVDLFVBQVUsR0FBR0Ysb0ZBQW1CLENBQUNFLFVBQUQsQ0FBaEM7QUFDTyxJQUFNSSxTQUFTLEdBQUdKLFVBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjlkOWNjZTEyMTllMTZlZGM5MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuY29uc3QgdnJQaW5rID0gJyNkODQ5ODcnXHJcbmNvbnN0IHZyQmx1ZSA9ICcjMzA2Y2EwJ1xyXG5jb25zdCB0aGVtZUFsbCA9IHtcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoMToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICB0YWI6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBlc3RpbWF0ZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUGFjaWZpY28nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEljb246IHtcclxuICAgICAgZm9udFNpemU6ICcyZW0nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDIzcHggIzU1NScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlJbnB1dExhYmVsOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogdnJCbHVlLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpdmlkZXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlBY2NvcmRpb246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgICcmLk11aS1leHBhbmRlZCc6IHtcclxuICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5sZXQgZExpZ2h0VGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyUGluayxcclxuICAgIH0sXHJcbiAgfSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmRMaWdodFRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkTGlnaHRUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSBkTGlnaHRUaGVtZVxyXG5cclxubGV0IGREYXJrVGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgdHlwZTogJ2RhcmsnLFxyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2clBpbmssXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIHBhcGVyOiAnIzQyNDI0MicsXHJcbiAgICAgIGRlZmF1bHQ6ICcjMzAzMDMwJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmREYXJrVGhlbWUgPSByZXNwb25zaXZlRm9udFNpemVzKGREYXJrVGhlbWUpXHJcbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSBkRGFya1RoZW1lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=