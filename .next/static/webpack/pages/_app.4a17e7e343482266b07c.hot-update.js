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
var dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread(_objectSpread({}, lightPallete), themeAll));
dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(dLightTheme);
var lightTheme = dLightTheme;
var dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_objectSpread(_objectSpread({}, darkPallete), themeAll));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3RoZW1lLmpzIl0sIm5hbWVzIjpbInZyUGluayIsInZyQmx1ZSIsImxpZ2h0UGFsbGV0ZSIsInBhbGV0dGUiLCJjb21tb24iLCJkaWdpUGluayIsImRpZ2lCbHVlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJkYXJrUGFsbGV0ZSIsInR5cGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJ0aGVtZUFsbCIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInRhYiIsImZvbnRTaXplIiwiZXN0aW1hdGUiLCJ0ZXh0VHJhbnNmb3JtIiwibGlzdEljb24iLCJ0cmFuc2Zvcm0iLCJ0ZXh0U2hhZG93Iiwib3ZlcnJpZGVzIiwiTXVpSW5wdXRMYWJlbCIsInJvb3QiLCJjb2xvciIsIk11aUZpbGxlZElucHV0IiwiYmFja2dyb3VuZENvbG9yIiwiTXVpRGl2aWRlciIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk11aUFjY29yZGlvbiIsIm1hcmdpbiIsImRMaWdodFRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJyZXNwb25zaXZlRm9udFNpemVzIiwibGlnaHRUaGVtZSIsImREYXJrVGhlbWUiLCJkYXJrVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBZjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUVMLE1BREo7QUFFTk0sY0FBUSxFQUFFTDtBQUZKLEtBREQ7QUFLUE0sV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRVA7QUFEQyxLQUxGO0FBUVBRLGFBQVMsRUFBRTtBQUNURCxVQUFJLEVBQUVSO0FBREc7QUFSSjtBQURVLENBQXJCO0FBY0EsSUFBTVUsV0FBVyxHQUFHO0FBQ2xCUCxTQUFPLEVBQUU7QUFDUFEsUUFBSSxFQUFFLE1BREM7QUFFUFAsVUFBTSxFQUFFO0FBQ05DLGNBQVEsRUFBRUwsTUFESjtBQUVOTSxjQUFRLEVBQUVMO0FBRkosS0FGRDtBQU1QTSxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFUjtBQURDLEtBTkY7QUFTUFMsYUFBUyxFQUFFO0FBQ1RELFVBQUksRUFBRVA7QUFERyxLQVRKO0FBWVBXLGNBQVUsRUFBRTtBQUNWQyxXQUFLLEVBQUUsU0FERztBQUVWLGlCQUFTO0FBRkM7QUFaTDtBQURTLENBQXBCO0FBb0JBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxZQUFVLEVBQUU7QUFDVkMsTUFBRSxFQUFFO0FBQ0ZDLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FETTtBQUtWQyxNQUFFLEVBQUU7QUFDRkYsZ0JBQVUsRUFBRSxHQURWO0FBRUZDLGdCQUFVLEVBQUU7QUFGVixLQUxNO0FBU1ZFLE1BQUUsRUFBRTtBQUNGSCxnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBVE07QUFhVkcsTUFBRSxFQUFFO0FBQ0ZKLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FiTTtBQWlCVkksTUFBRSxFQUFFO0FBQ0ZMLGdCQUFVLEVBQUUsR0FEVjtBQUVGQyxnQkFBVSxFQUFFO0FBRlYsS0FqQk07QUFxQlZLLE1BQUUsRUFBRTtBQUNGTixnQkFBVSxFQUFFLEdBRFY7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBckJNO0FBeUJWTSxPQUFHLEVBQUU7QUFDSE4sZ0JBQVUsRUFBRSxTQURUO0FBRUhELGdCQUFVLEVBQUUsS0FGVDtBQUdIUSxjQUFRLEVBQUU7QUFIUCxLQXpCSztBQThCVkMsWUFBUSxFQUFFO0FBQ1JSLGdCQUFVLEVBQUUsVUFESjtBQUVSTyxjQUFRLEVBQUUsTUFGRjtBQUdSRSxtQkFBYSxFQUFFO0FBSFAsS0E5QkE7QUFtQ1ZDLFlBQVEsRUFBRTtBQUNSSCxjQUFRLEVBQUUsS0FERjtBQUVSSSxlQUFTLEVBQUUsZ0JBRkg7QUFHUkMsZ0JBQVUsRUFBRTtBQUhKO0FBbkNBLEdBREc7QUEwQ2ZDLFdBQVMsRUFBRTtBQUNUQyxpQkFBYSxFQUFFO0FBQ2JDLFVBQUksRUFBRTtBQUNKQyxhQUFLLEVBQUVqQyxNQURIO0FBRUp3QixnQkFBUSxFQUFFO0FBRk47QUFETyxLQUROO0FBT1RVLGtCQUFjLEVBQUU7QUFDZEYsVUFBSSxFQUFFO0FBQ0pHLHVCQUFlLEVBQUU7QUFEYjtBQURRLEtBUFA7QUFZVEMsY0FBVSxFQUFFO0FBQ1ZKLFVBQUksRUFBRTtBQUNKSyxpQkFBUyxFQUFFLEtBRFA7QUFFSkMsb0JBQVksRUFBRTtBQUZWO0FBREksS0FaSDtBQWtCVEMsZ0JBQVksRUFBRTtBQUNaUCxVQUFJLEVBQUU7QUFDSiwwQkFBa0I7QUFDaEJRLGdCQUFNLEVBQUU7QUFEUTtBQURkO0FBRE07QUFsQkw7QUExQ0ksQ0FBakI7QUFzRUEsSUFBSUMsV0FBVyxHQUFHQywrRUFBYyxpQ0FDM0J6QyxZQUQyQixHQUUzQlksUUFGMkIsRUFBaEM7QUFLQTRCLFdBQVcsR0FBR0Usb0ZBQW1CLENBQUNGLFdBQUQsQ0FBakM7QUFDTyxJQUFNRyxVQUFVLEdBQUdILFdBQW5CO0FBRVAsSUFBSUksVUFBVSxHQUFHSCwrRUFBYyxpQ0FDMUJqQyxXQUQwQixHQUUxQkksUUFGMEIsRUFBL0I7QUFLQWdDLFVBQVUsR0FBR0Ysb0ZBQW1CLENBQUNFLFVBQUQsQ0FBaEM7QUFDTyxJQUFNQyxTQUFTLEdBQUdELFVBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGExN2U3ZTM0MzQ4MjI2NmIwN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuY29uc3QgdnJQaW5rID0gJyNkODQ5ODcnXHJcbmNvbnN0IHZyQmx1ZSA9ICcjMzA2Y2EwJ1xyXG5cclxuY29uc3QgbGlnaHRQYWxsZXRlID0ge1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIGNvbW1vbjoge1xyXG4gICAgICBkaWdpUGluazogdnJQaW5rLFxyXG4gICAgICBkaWdpQmx1ZTogdnJCbHVlLFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogdnJCbHVlLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiB2clBpbmssXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuY29uc3QgZGFya1BhbGxldGUgPSB7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgdHlwZTogJ2RhcmsnLFxyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2clBpbmssXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIHBhcGVyOiAnIzQyNDI0MicsXHJcbiAgICAgIGRlZmF1bHQ6ICcjMzAzMDMwJyxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxuY29uc3QgdGhlbWVBbGwgPSB7XHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgdGFiOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICB9LFxyXG4gICAgZXN0aW1hdGU6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1BhY2lmaWNvJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJY29uOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMmVtJyxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC0xNWRlZyknLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCAyM3B4ICM1NTUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgY29sb3I6IHZyQmx1ZSxcclxuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlEaXZpZGVyOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzJlbScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQWNjb3JkaW9uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAnJi5NdWktZXhwYW5kZWQnOiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxubGV0IGRMaWdodFRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmxpZ2h0UGFsbGV0ZSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmRMaWdodFRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkTGlnaHRUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSBkTGlnaHRUaGVtZVxyXG5cclxubGV0IGREYXJrVGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgLi4uZGFya1BhbGxldGUsXHJcbiAgLi4udGhlbWVBbGwsXHJcbn0pXHJcblxyXG5kRGFya1RoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkRGFya1RoZW1lKVxyXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0gZERhcmtUaGVtZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9