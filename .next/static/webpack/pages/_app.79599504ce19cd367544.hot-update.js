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
var lightPallete = {};
var darkPallete = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3RoZW1lLmpzIl0sIm5hbWVzIjpbInZyUGluayIsInZyQmx1ZSIsImxpZ2h0UGFsbGV0ZSIsImRhcmtQYWxsZXRlIiwidGhlbWVBbGwiLCJ0eXBvZ3JhcGh5IiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJ0YWIiLCJmb250U2l6ZSIsImVzdGltYXRlIiwidGV4dFRyYW5zZm9ybSIsImxpc3RJY29uIiwidHJhbnNmb3JtIiwidGV4dFNoYWRvdyIsIm92ZXJyaWRlcyIsIk11aUlucHV0TGFiZWwiLCJyb290IiwiY29sb3IiLCJNdWlGaWxsZWRJbnB1dCIsImJhY2tncm91bmRDb2xvciIsIk11aURpdmlkZXIiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJNdWlBY2NvcmRpb24iLCJtYXJnaW4iLCJkTGlnaHRUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsImNvbW1vbiIsImRpZ2lQaW5rIiwiZGlnaUJsdWUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJsaWdodFRoZW1lIiwiZERhcmtUaGVtZSIsInR5cGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJkYXJrVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBZjtBQUVBLElBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxZQUFVLEVBQUU7QUFDVkMsTUFBRSxFQUFFO0FBQ0ZDLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FETTtBQUtWQyxNQUFFLEVBQUU7QUFDRkYsZ0JBQVUsRUFBRSxHQURWO0FBRUZDLGdCQUFVLEVBQUU7QUFGVixLQUxNO0FBU1ZFLE1BQUUsRUFBRTtBQUNGSCxnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBVE07QUFhVkcsTUFBRSxFQUFFO0FBQ0ZKLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FiTTtBQWlCVkksTUFBRSxFQUFFO0FBQ0ZMLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FqQk07QUFxQlZLLE1BQUUsRUFBRTtBQUNGTixnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBckJNO0FBeUJWTSxPQUFHLEVBQUU7QUFDSE4sZ0JBQVUsRUFBRSxTQURUO0FBRUhELGdCQUFVLEVBQUUsS0FGVDtBQUdIUSxjQUFRLEVBQUU7QUFIUCxLQXpCSztBQThCVkMsWUFBUSxFQUFFO0FBQ1JSLGdCQUFVLEVBQUUsVUFESjtBQUVSTyxjQUFRLEVBQUUsTUFGRjtBQUdSRSxtQkFBYSxFQUFFO0FBSFAsS0E5QkE7QUFtQ1ZDLFlBQVEsRUFBRTtBQUNSSCxjQUFRLEVBQUUsS0FERjtBQUVSSSxlQUFTLEVBQUUsZ0JBRkg7QUFHUkMsZ0JBQVUsRUFBRTtBQUhKO0FBbkNBLEdBREc7QUEwQ2ZDLFdBQVMsRUFBRTtBQUNUQyxpQkFBYSxFQUFFO0FBQ2JDLFVBQUksRUFBRTtBQUNKQyxhQUFLLEVBQUV2QixNQURIO0FBRUpjLGdCQUFRLEVBQUU7QUFGTjtBQURPLEtBRE47QUFPVFUsa0JBQWMsRUFBRTtBQUNkRixVQUFJLEVBQUU7QUFDSkcsdUJBQWUsRUFBRTtBQURiO0FBRFEsS0FQUDtBQVlUQyxjQUFVLEVBQUU7QUFDVkosVUFBSSxFQUFFO0FBQ0pLLGlCQUFTLEVBQUUsS0FEUDtBQUVKQyxvQkFBWSxFQUFFO0FBRlY7QUFESSxLQVpIO0FBa0JUQyxnQkFBWSxFQUFFO0FBQ1pQLFVBQUksRUFBRTtBQUNKLDBCQUFrQjtBQUNoQlEsZ0JBQU0sRUFBRTtBQURRO0FBRGQ7QUFETTtBQWxCTDtBQTFDSSxDQUFqQjtBQXNFQSxJQUFJQyxXQUFXLEdBQUdDLCtFQUFjO0FBQzlCQyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFO0FBQ05DLGNBQVEsRUFBRXBDLE1BREo7QUFFTnFDLGNBQVEsRUFBRXBDO0FBRkosS0FERDtBQUtQcUMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRXRDO0FBREMsS0FMRjtBQVFQdUMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRXZDO0FBREc7QUFSSjtBQURxQixHQWEzQkksUUFiMkIsRUFBaEM7QUFnQkE0QixXQUFXLEdBQUdTLG9GQUFtQixDQUFDVCxXQUFELENBQWpDO0FBQ08sSUFBTVUsVUFBVSxHQUFHVixXQUFuQjtBQUVQLElBQUlXLFVBQVUsR0FBR1YsK0VBQWM7QUFDN0JDLFNBQU8sRUFBRTtBQUNQVSxRQUFJLEVBQUUsTUFEQztBQUVQVCxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFcEMsTUFESjtBQUVOcUMsY0FBUSxFQUFFcEM7QUFGSixLQUZEO0FBTVBxQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFdkM7QUFEQyxLQU5GO0FBU1B3QyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFdEM7QUFERyxLQVRKO0FBWVA0QyxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFLFNBREc7QUFFVixpQkFBUztBQUZDO0FBWkw7QUFEb0IsR0FrQjFCMUMsUUFsQjBCLEVBQS9CO0FBcUJBdUMsVUFBVSxHQUFHRixvRkFBbUIsQ0FBQ0UsVUFBRCxDQUFoQztBQUNPLElBQU1JLFNBQVMsR0FBR0osVUFBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43OTU5OTUwNGNlMTljZDM2NzU0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB2clBpbmsgPSAnI2Q4NDk4NydcclxuY29uc3QgdnJCbHVlID0gJyMzMDZjYTAnXHJcblxyXG5jb25zdCBsaWdodFBhbGxldGUgPSB7fVxyXG5jb25zdCBkYXJrUGFsbGV0ZSA9IHt9XHJcblxyXG5jb25zdCB0aGVtZUFsbCA9IHtcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoMToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICB0YWI6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBlc3RpbWF0ZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUGFjaWZpY28nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEljb246IHtcclxuICAgICAgZm9udFNpemU6ICcyZW0nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDIzcHggIzU1NScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlJbnB1dExhYmVsOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogdnJCbHVlLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpdmlkZXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlBY2NvcmRpb246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgICcmLk11aS1leHBhbmRlZCc6IHtcclxuICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5sZXQgZExpZ2h0VGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyUGluayxcclxuICAgIH0sXHJcbiAgfSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmRMaWdodFRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkTGlnaHRUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSBkTGlnaHRUaGVtZVxyXG5cclxubGV0IGREYXJrVGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgdHlwZTogJ2RhcmsnLFxyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2clBpbmssXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIHBhcGVyOiAnIzQyNDI0MicsXHJcbiAgICAgIGRlZmF1bHQ6ICcjMzAzMDMwJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmREYXJrVGhlbWUgPSByZXNwb25zaXZlRm9udFNpemVzKGREYXJrVGhlbWUpXHJcbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSBkRGFya1RoZW1lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=