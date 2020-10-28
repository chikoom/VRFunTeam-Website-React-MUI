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
  direction: 'rtl',
  langStyles: {
    direction: 'rtl',
    textAlign: 'right'
  },
  typography: {
    h1: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h2: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h3: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h4: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h5: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h6: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    tab: {
      fontFamily: 'Rubik',
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
  direction: 'ltr',
  langStyles: {
    direction: 'ltr',
    textAlign: 'left'
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3RoZW1lLmpzIl0sIm5hbWVzIjpbInZyUGluayIsInZyQmx1ZSIsImhlX3R5cG9ncmFwaHkiLCJkaXJlY3Rpb24iLCJsYW5nU3R5bGVzIiwidGV4dEFsaWduIiwidHlwb2dyYXBoeSIsImgxIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwidGFiIiwiZm9udFNpemUiLCJlc3RpbWF0ZSIsInRleHRUcmFuc2Zvcm0iLCJsaXN0SWNvbiIsInRyYW5zZm9ybSIsInRleHRTaGFkb3ciLCJlbl90eXBvZ3JhcGh5IiwibGlnaHRQYWxsZXRlIiwicGFsZXR0ZSIsImNvbW1vbiIsImRpZ2lQaW5rIiwiZGlnaUJsdWUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImRhcmtQYWxsZXRlIiwidHlwZSIsImJhY2tncm91bmQiLCJwYXBlciIsInRoZW1lQWxsIiwib3ZlcnJpZGVzIiwiTXVpSW5wdXRMYWJlbCIsInJvb3QiLCJjb2xvciIsIk11aUZpbGxlZElucHV0IiwiYmFja2dyb3VuZENvbG9yIiwiTXVpRGl2aWRlciIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUFjY29yZGlvbiIsIm1hcmdpbiIsImRMaWdodFRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJyZXNwb25zaXZlRm9udFNpemVzIiwibGlnaHRUaGVtZSIsImRMaWdodFRoZW1lX2hlIiwibGlnaHRUaGVtZV9oZSIsImREYXJrVGhlbWUiLCJkYXJrVGhlbWUiLCJkRGFya1RoZW1lX2hlIiwiZGFya1RoZW1lX2hlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBZjtBQUVBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsV0FBUyxFQUFFLEtBRFM7QUFFcEJDLFlBQVUsRUFBRTtBQUNWRCxh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QUdMLCtFQUFjLCtDQUMxQjFCLGFBRDBCLEdBRTFCUyxXQUYwQixHQUcxQkksUUFIMEIsRUFBL0I7QUFNQWtCLFVBQVUsR0FBR0osb0ZBQW1CLENBQUNJLFVBQUQsQ0FBaEM7QUFDTyxJQUFNQyxTQUFTLEdBQUdELFVBQWxCO0FBRVAsSUFBSUUsYUFBYSxHQUFHUCwrRUFBYywrQ0FDN0I5QyxhQUQ2QixHQUU3QjZCLFdBRjZCLEdBRzdCSSxRQUg2QixFQUFsQztBQU1Bb0IsYUFBYSxHQUFHTixvRkFBbUIsQ0FBQ00sYUFBRCxDQUFuQztBQUNPLElBQU1DLFlBQVksR0FBR0QsYUFBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NmMyYTZiYmY4ZGQwNDAyMzgwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB2clBpbmsgPSAnI2Q4NDk4NydcclxuY29uc3QgdnJCbHVlID0gJyMzMDZjYTAnXHJcblxyXG5jb25zdCBoZV90eXBvZ3JhcGh5ID0ge1xyXG4gIGRpcmVjdGlvbjogJ3J0bCcsXHJcbiAgbGFuZ1N0eWxlczoge1xyXG4gICAgZGlyZWN0aW9uOiAncnRsJyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1J1YmlrJyxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSdWJpaycsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUnViaWsnLFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1J1YmlrJyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSdWJpaycsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUnViaWsnLFxyXG4gICAgfSxcclxuICAgIHRhYjoge1xyXG4gICAgICBmb250RmFtaWx5OiAnUnViaWsnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBlc3RpbWF0ZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUGFjaWZpY28nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEljb246IHtcclxuICAgICAgZm9udFNpemU6ICcyZW0nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDIzcHggIzU1NScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IGVuX3R5cG9ncmFwaHkgPSB7XHJcbiAgZGlyZWN0aW9uOiAnbHRyJyxcclxuICBsYW5nU3R5bGVzOiB7XHJcbiAgICBkaXJlY3Rpb246ICdsdHInLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoMToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgIH0sXHJcbiAgICB0YWI6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBlc3RpbWF0ZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUGFjaWZpY28nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEljb246IHtcclxuICAgICAgZm9udFNpemU6ICcyZW0nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDIzcHggIzU1NScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IGxpZ2h0UGFsbGV0ZSA9IHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBjb21tb246IHtcclxuICAgICAgZGlnaVBpbms6IHZyUGluayxcclxuICAgICAgZGlnaUJsdWU6IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogdnJQaW5rLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcbmNvbnN0IGRhcmtQYWxsZXRlID0ge1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHR5cGU6ICdkYXJrJyxcclxuICAgIGNvbW1vbjoge1xyXG4gICAgICBkaWdpUGluazogdnJQaW5rLFxyXG4gICAgICBkaWdpQmx1ZTogdnJCbHVlLFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogdnJQaW5rLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBwYXBlcjogJyM0MjQyNDInLFxyXG4gICAgICBkZWZhdWx0OiAnIzMwMzAzMCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lQWxsID0ge1xyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgY29sb3I6IHZyQmx1ZSxcclxuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlEaXZpZGVyOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzJlbScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQWNjb3JkaW9uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAnJi5NdWktZXhwYW5kZWQnOiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxubGV0IGRMaWdodFRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmVuX3R5cG9ncmFwaHksXHJcbiAgLi4ubGlnaHRQYWxsZXRlLFxyXG4gIC4uLnRoZW1lQWxsLFxyXG59KVxyXG5cclxuZExpZ2h0VGhlbWUgPSByZXNwb25zaXZlRm9udFNpemVzKGRMaWdodFRoZW1lKVxyXG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZSA9IGRMaWdodFRoZW1lXHJcblxyXG5sZXQgZExpZ2h0VGhlbWVfaGUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgLi4uaGVfdHlwb2dyYXBoeSxcclxuICAuLi5saWdodFBhbGxldGUsXHJcbiAgLi4udGhlbWVBbGwsXHJcbn0pXHJcblxyXG5kTGlnaHRUaGVtZV9oZSA9IHJlc3BvbnNpdmVGb250U2l6ZXMoZExpZ2h0VGhlbWVfaGUpXHJcbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lX2hlID0gZExpZ2h0VGhlbWVfaGVcclxuXHJcbmxldCBkRGFya1RoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmVuX3R5cG9ncmFwaHksXHJcbiAgLi4uZGFya1BhbGxldGUsXHJcbiAgLi4udGhlbWVBbGwsXHJcbn0pXHJcblxyXG5kRGFya1RoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkRGFya1RoZW1lKVxyXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0gZERhcmtUaGVtZVxyXG5cclxubGV0IGREYXJrVGhlbWVfaGUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgLi4uaGVfdHlwb2dyYXBoeSxcclxuICAuLi5kYXJrUGFsbGV0ZSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmREYXJrVGhlbWVfaGUgPSByZXNwb25zaXZlRm9udFNpemVzKGREYXJrVGhlbWVfaGUpXHJcbmV4cG9ydCBjb25zdCBkYXJrVGhlbWVfaGUgPSBkRGFya1RoZW1lX2hlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=