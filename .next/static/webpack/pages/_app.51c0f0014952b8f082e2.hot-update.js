webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/ui/theme.js":
/*!*************************!*\
  !*** ./src/ui/theme.js ***!
  \*************************/
/*! exports provided: lightTheme, lightTheme_he, darkTheme, darkTheme_he */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme_he", function() { return lightTheme_he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme_he", function() { return darkTheme_he; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var vrPink = '#d84987';
var vrBlue = '#306ca0';
var he_typography = {
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
  }
};
var en_typography = {
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
  }
};
var lightPallete = {
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
};
var darkPallete = {
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
};
var themeAll = {
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
var dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, en_typography), lightPallete), themeAll));
dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dLightTheme);
var lightTheme = dLightTheme;
var dLightTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, he_typography), lightPallete), themeAll));
dLightTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dLightTheme_he);
var lightTheme_he = dLightTheme_he;
var dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, en_typography), darkPallete), themeAll));
dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dDarkTheme);
var darkTheme = dDarkTheme;
var dDarkTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, he_typography), darkPallete), themeAll));
dDarkTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dDarkTheme_he);
var darkTheme_he = dDarkTheme_he;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3RoZW1lLmpzIl0sIm5hbWVzIjpbInZyUGluayIsInZyQmx1ZSIsImhlX3R5cG9ncmFwaHkiLCJ0eXBvZ3JhcGh5IiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJ0YWIiLCJmb250U2l6ZSIsImVzdGltYXRlIiwidGV4dFRyYW5zZm9ybSIsImxpc3RJY29uIiwidHJhbnNmb3JtIiwidGV4dFNoYWRvdyIsImVuX3R5cG9ncmFwaHkiLCJsaWdodFBhbGxldGUiLCJwYWxldHRlIiwiY29tbW9uIiwiZGlnaVBpbmsiLCJkaWdpQmx1ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZGFya1BhbGxldGUiLCJ0eXBlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwidGhlbWVBbGwiLCJvdmVycmlkZXMiLCJNdWlJbnB1dExhYmVsIiwicm9vdCIsImNvbG9yIiwiTXVpRmlsbGVkSW5wdXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlEaXZpZGVyIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTXVpQWNjb3JkaW9uIiwibWFyZ2luIiwiZExpZ2h0VGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJsaWdodFRoZW1lIiwiZExpZ2h0VGhlbWVfaGUiLCJsaWdodFRoZW1lX2hlIiwiZERhcmtUaGVtZSIsImRhcmtUaGVtZSIsImREYXJrVGhlbWVfaGUiLCJkYXJrVGhlbWVfaGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBZjtBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFmO0FBRUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxZQUFVLEVBQUU7QUFDVkMsTUFBRSxFQUFFO0FBQ0ZDLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FETTtB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LGFBQWEsR0FBR04sb0ZBQW1CLENBQUNNLGFBQUQsQ0FBbkM7QUFDTyxJQUFNQyxZQUFZLEdBQUdELGFBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTFjMGYwMDE0OTUyYjhmMDgyZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuY29uc3QgdnJQaW5rID0gJyNkODQ5ODcnXHJcbmNvbnN0IHZyQmx1ZSA9ICcjMzA2Y2EwJ1xyXG5cclxuY29uc3QgaGVfdHlwb2dyYXBoeSA9IHtcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoMToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICB0YWI6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBlc3RpbWF0ZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUGFjaWZpY28nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEljb246IHtcclxuICAgICAgZm9udFNpemU6ICcyZW0nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDIzcHggIzU1NScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IGVuX3R5cG9ncmFwaHkgPSB7XHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgdGFiOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICB9LFxyXG4gICAgZXN0aW1hdGU6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1BhY2lmaWNvJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJY29uOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMmVtJyxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC0xNWRlZyknLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCAyM3B4ICM1NTUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5jb25zdCBsaWdodFBhbGxldGUgPSB7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyUGluayxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5jb25zdCBkYXJrUGFsbGV0ZSA9IHtcclxuICBwYWxldHRlOiB7XHJcbiAgICB0eXBlOiAnZGFyaycsXHJcbiAgICBjb21tb246IHtcclxuICAgICAgZGlnaVBpbms6IHZyUGluayxcclxuICAgICAgZGlnaUJsdWU6IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyUGluayxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogdnJCbHVlLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgcGFwZXI6ICcjNDI0MjQyJyxcclxuICAgICAgZGVmYXVsdDogJyMzMDMwMzAnLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5jb25zdCB0aGVtZUFsbCA9IHtcclxuICBvdmVycmlkZXM6IHtcclxuICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGNvbG9yOiB2ckJsdWUsXHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpRGl2aWRlcjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUFjY29yZGlvbjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYuTXVpLWV4cGFuZGVkJzoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmxldCBkTGlnaHRUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAuLi5lbl90eXBvZ3JhcGh5LFxyXG4gIC4uLmxpZ2h0UGFsbGV0ZSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmRMaWdodFRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkTGlnaHRUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSBkTGlnaHRUaGVtZVxyXG5cclxubGV0IGRMaWdodFRoZW1lX2hlID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmhlX3R5cG9ncmFwaHksXHJcbiAgLi4ubGlnaHRQYWxsZXRlLFxyXG4gIC4uLnRoZW1lQWxsLFxyXG59KVxyXG5cclxuZExpZ2h0VGhlbWVfaGUgPSByZXNwb25zaXZlRm9udFNpemVzKGRMaWdodFRoZW1lX2hlKVxyXG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZV9oZSA9IGRMaWdodFRoZW1lX2hlXHJcblxyXG5sZXQgZERhcmtUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAuLi5lbl90eXBvZ3JhcGh5LFxyXG4gIC4uLmRhcmtQYWxsZXRlLFxyXG4gIC4uLnRoZW1lQWxsLFxyXG59KVxyXG5cclxuZERhcmtUaGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXMoZERhcmtUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IGREYXJrVGhlbWVcclxuXHJcbmxldCBkRGFya1RoZW1lX2hlID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmhlX3R5cG9ncmFwaHksXHJcbiAgLi4uZGFya1BhbGxldGUsXHJcbiAgLi4udGhlbWVBbGwsXHJcbn0pXHJcblxyXG5kRGFya1RoZW1lX2hlID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkRGFya1RoZW1lX2hlKVxyXG5leHBvcnQgY29uc3QgZGFya1RoZW1lX2hlID0gZERhcmtUaGVtZV9oZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9