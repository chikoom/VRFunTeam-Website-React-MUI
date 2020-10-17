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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var vrPink = '#d84987';
var vrBlue = '#306ca0';
var dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  custom: {
    listIcon: {
      fontSize: '2em',
      transform: 'rotate(-15deg)',
      textShadow: '0px 0px 23px #555'
    }
  },
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
});
dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(dLightTheme);
var lightTheme = dLightTheme;
var dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
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
  },
  typography: {
    h5: {
      fontWeight: 900
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
});
dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(dDarkTheme);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3RoZW1lLmpzIl0sIm5hbWVzIjpbInZyUGluayIsInZyQmx1ZSIsImRMaWdodFRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJjdXN0b20iLCJsaXN0SWNvbiIsImZvbnRTaXplIiwidHJhbnNmb3JtIiwidGV4dFNoYWRvdyIsInBhbGV0dGUiLCJjb21tb24iLCJkaWdpUGluayIsImRpZ2lCbHVlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJ0YWIiLCJlc3RpbWF0ZSIsInRleHRUcmFuc2Zvcm0iLCJvdmVycmlkZXMiLCJNdWlJbnB1dExhYmVsIiwicm9vdCIsImNvbG9yIiwiTXVpRmlsbGVkSW5wdXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlEaXZpZGVyIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTXVpQWNjb3JkaW9uIiwibWFyZ2luIiwicmVzcG9uc2l2ZUZvbnRTaXplcyIsImxpZ2h0VGhlbWUiLCJkRGFya1RoZW1lIiwidHlwZSIsImJhY2tncm91bmQiLCJwYXBlciIsImRhcmtUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBZjtBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFmO0FBRUEsSUFBSUMsV0FBVyxHQUFHQywrRUFBYyxDQUFDO0FBQy9CQyxRQUFNLEVBQUU7QUFDTkMsWUFBUSxFQUFFO0FBQ1JDLGNBQVEsRUFBRSxLQURGO0FBRVJDLGVBQVMsRUFBRSxnQkFGSDtBQUdSQyxnQkFBVSxFQUFFO0FBSEo7QUFESixHQUR1QjtBQVEvQkMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUVYLE1BREo7QUFFTlksY0FBUSxFQUFFWDtBQUZKLEtBREQ7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QUFDSkcsdUJBQWUsRUFBRTtBQURiO0FBRFEsS0FQUDtBQVlUQyxjQUFVLEVBQUU7QUFDVkosVUFBSSxFQUFFO0FBQ0pLLGlCQUFTLEVBQUUsS0FEUDtBQUVKQyxvQkFBWSxFQUFFO0FBRlY7QUFESSxLQVpIO0FBa0JUQyxnQkFBWSxFQUFFO0FBQ1pQLFVBQUksRUFBRTtBQUNKLDBCQUFrQjtBQUNoQlEsZ0JBQU0sRUFBRTtBQURRO0FBRGQ7QUFETTtBQWxCTDtBQWpDbUIsQ0FBRCxDQUEvQjtBQTZEQUcsVUFBVSxHQUFHRixvRkFBbUIsQ0FBQ0UsVUFBRCxDQUFoQztBQUNPLElBQU1JLFNBQVMsR0FBR0osVUFBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hOWZlYzZmYjdhODAxYTBlM2RkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB2clBpbmsgPSAnI2Q4NDk4NydcclxuY29uc3QgdnJCbHVlID0gJyMzMDZjYTAnXHJcblxyXG5sZXQgZExpZ2h0VGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgY3VzdG9tOiB7XHJcbiAgICBsaXN0SWNvbjoge1xyXG4gICAgICBmb250U2l6ZTogJzJlbScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtMTVkZWcpJyxcclxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggMjNweCAjNTU1JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYWxldHRlOiB7XHJcbiAgICBjb21tb246IHtcclxuICAgICAgZGlnaVBpbms6IHZyUGluayxcclxuICAgICAgZGlnaUJsdWU6IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogdnJQaW5rLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgfSxcclxuICAgIGg1OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgfSxcclxuICAgIGg2OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxyXG4gICAgfSxcclxuICAgIHRhYjoge1xyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgfSxcclxuICAgIGVzdGltYXRlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdQYWNpZmljbycsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvdmVycmlkZXM6IHtcclxuICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGNvbG9yOiB2ckJsdWUsXHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpRGl2aWRlcjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUFjY29yZGlvbjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYuTXVpLWV4cGFuZGVkJzoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5kTGlnaHRUaGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXMoZExpZ2h0VGhlbWUpXHJcbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0gZExpZ2h0VGhlbWVcclxuXHJcbmxldCBkRGFya1RoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHR5cGU6ICdkYXJrJyxcclxuICAgIGNvbW1vbjoge1xyXG4gICAgICBkaWdpUGluazogdnJQaW5rLFxyXG4gICAgICBkaWdpQmx1ZTogdnJCbHVlLFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogdnJQaW5rLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBwYXBlcjogJyM0MjQyNDInLFxyXG4gICAgICBkZWZhdWx0OiAnIzMwMzAzMCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgfSxcclxuICAgIHRhYjoge1xyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgfSxcclxuICAgIGVzdGltYXRlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdQYWNpZmljbycsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvdmVycmlkZXM6IHtcclxuICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGNvbG9yOiB2ckJsdWUsXHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpRGl2aWRlcjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUFjY29yZGlvbjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYuTXVpLWV4cGFuZGVkJzoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5kRGFya1RoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkRGFya1RoZW1lKVxyXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0gZERhcmtUaGVtZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9