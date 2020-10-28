webpackHotUpdate_N_E("pages/estimate",{

/***/ "./pages/estimate.jsx":
/*!****************************!*\
  !*** ./pages/estimate.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Head */ "./node_modules/next/Head.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _src_ui_parts_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ui/parts/ContactForm */ "./src/ui/parts/ContactForm.jsx");
/* harmony import */ var _src_ui_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/ui/PageHeader */ "./src/ui/PageHeader.jsx");
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/contexts/LangContext */ "./src/contexts/LangContext.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\pages\\estimate.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import Lottie from 'react-lottie-player'




 // import estimateAnimation from '../src/animations/estimate.json'




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    animationContainer: {
      overflow: 'hidden',
      height: '80%'
    },
    animation: {
      marginTop: '-25%',
      overflow: 'hidden'
    },
    imgButton: {
      cursor: 'pointer'
    },
    optionSelected: {
      backgroundColor: theme.palette.primary.light
    },
    playerIcon: {
      width: '100px',
      height: '100px',
      marginLeft: '2em'
    },
    optionTitle: {
      fontWeight: '400',
      fontSize: '1em'
    },
    subHeading: {
      fontWeight: '400',
      marginTop: '2em',
      marginBottom: '2em'
    }
  };
}); // const animationOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: estimateAnimation,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMin meet',
//     imagePreserveAspectRatio: 'xMidYMin meet',
//   },
// }

var questions = [{
  id: 1,
  title: 'What are you looking for?',
  subtitle: null,
  active: true,
  options: [{
    id: 1,
    title: 'Private & Family',
    subtitle: null,
    icon: '/assets/icon-teamwork.svg',
    iconAlt: 'Private & Family',
    selected: false,
    cost: 1
  }, {
    id: 2,
    title: 'Comapny Events',
    subtitle: null,
    icon: '/assets/icon-creative.svg',
    iconAlt: 'Comapny Events',
    selected: false,
    cost: 1.2
  }, {
    id: 3,
    title: "Exhibition & Conference",
    subtitle: null,
    icon: '/assets/icon-fun.svg',
    iconAlt: "Exhibition & Conference",
    selected: false,
    cost: 1.5
  }]
}];
var hoursMarks = [{
  value: 1,
  label: '1hrs'
}, {
  value: 2,
  label: '2hrs'
}, {
  value: 3,
  label: '3hrs'
}, {
  value: 4,
  label: '4hrs'
}, {
  value: 5,
  label: '5hrs'
}, {
  value: 6,
  label: '6hrs'
}, {
  value: 7,
  label: '7hrs'
}, {
  value: 8,
  label: '8hrs'
}, {
  value: 9,
  label: '9hrs'
}, {
  value: 10,
  label: '10+'
}];

var Estimate = function Estimate(props) {
  _s();

  var classes = useStyles();

  var _usePagesContext = Object(_src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])(),
      setPageIndecies = _usePagesContext.setPageIndecies;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selectedId = _useState[0],
      setSelectedId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('/assets/player-icons-02.svg'),
      playerIconImg = _useState2[0],
      setPlayerIconImg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    eventType: '',
    eventCost: 0,
    players: 2,
    hours: 1
  }),
      priceData = _useState3[0],
      setPriceData = _useState3[1];

  var createMsg = function createMsg() {
    return "Hello VRFunTeam! I would like more details about a ".concat(priceData.eventType, " event, with ").concat(priceData.players, " participants, for ").concat(priceData.hours, " hours. I got a price estimate of $").concat(calculatePrice(), ". Thank you!");
  };

  var calculatePrice = function calculatePrice() {
    var eventCost = priceData.eventCost,
        players = priceData.players,
        hours = priceData.hours;
    return Math.floor(eventCost * players * 25 * hours);
  };

  var participantLabel = function participantLabel(value) {
    var playerImg = value === 1 ? '/assets/player-icons-01.svg' : value === 2 ? '/assets/player-icons-02.svg' : value <= 5 ? '/assets/player-icons-03.svg' : '/assets/player-icons-04.svg'; // setPlayerIconImg(playerImg)

    var returnValue = value === 20 ? '21+' : value;
    return returnValue;
  };

  var hoursLabel = function hoursLabel(value) {
    return value === 10 ? '10+' : value;
  };

  var handleOptionClick = function handleOptionClick(id, cost, title) {
    setPriceData(_objectSpread(_objectSpread({}, priceData), {}, {
      eventType: title,
      eventCost: cost
    }));
    setSelectedId(id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPageIndecies('/estimate');
  }, []);

  var _useLanguageContext = Object(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_9__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(_src_ui_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: siteData.pages.estimate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, "Price Estimate for VR events | VRFunTeam"), __jsx("meta", {
    name: "description",
    key: "description",
    content: "Get a free price estimate for your custom VR Event, using our estimate calculator. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogtitle",
    property: "og:title",
    content: "Better than reality VR experiences | Free Estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogurl",
    property: "og:url",
    content: "https://funteamvr.com/estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    key: "canonical",
    href: "https://funteamvr.com/estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    direction: "column",
    md: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, questions.filter(function (question) {
    return question.active === true;
  }).map(function (question) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: question.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      container: true,
      justify: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h5",
      align: "center",
      className: classes.subHeading,
      gutterBottom: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 19
      }
    }, "Choose your type of event")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      container: true,
      justify: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, question.options.map(function (option) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        container: true,
        direction: "column",
        xs: true,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.imgButton, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.optionSelected, selectedId === option.id)),
        onClick: function onClick() {
          return handleOptionClick(option.id, option.cost, option.title);
        },
        key: option.id,
        style: {
          maxWidth: '250px',
          padding: '1em'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 23
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        variant: "h6",
        align: "center",
        className: classes.optionTitle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 25
        }
      }, option.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 23
        }
      }, __jsx("img", {
        src: option.icon,
        alt: "blablaba",
        width: "100%",
        height: "100%",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 25
        }
      })));
    })));
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    align: "center",
    className: classes.subHeading,
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, "How many players?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 6,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    min: 1,
    max: 20,
    defaultValue: 2,
    valueLabelFormat: participantLabel,
    getAriaValueText: participantLabel,
    "aria-labelledby": "discrete-slider-always",
    step: 1,
    marks: null,
    valueLabelDisplay: "on",
    style: {
      width: '100%'
    },
    onChange: function onChange(event, value) {
      return setPriceData(_objectSpread(_objectSpread({}, priceData), {}, {
        players: parseInt(value)
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 3,
    md: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: playerIconImg,
    alt: "players",
    className: classes.playerIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    align: "center",
    className: classes.subHeading,
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }, "How long would you play?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      marginTop: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 10,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    min: 1,
    max: 10,
    defaultValue: 1,
    valueLabelFormat: hoursLabel,
    getAriaValueText: hoursLabel,
    "aria-labelledby": "discrete-slider-always",
    step: 1,
    marks: hoursMarks,
    valueLabelDisplay: "on",
    style: {
      width: '100%'
    },
    onChange: function onChange(event, value) {
      return setPriceData(_objectSpread(_objectSpread({}, priceData), {}, {
        hours: parseInt(value)
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      marginTop: '3em',
      marginBottom: '3em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 15
    }
  }, "Price Est:")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 15
    }
  }, "$".concat(calculatePrice())))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      marginBottom: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 10,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }, __jsx(_src_ui_parts_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: createMsg(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }))))));
};

_s(Estimate, "27iuzdPq+gKv8LVoDhQk7XotxI8=", false, function () {
  return [useStyles, _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"], _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_9__["useLanguageContext"]];
});

_c = Estimate;
/* harmony default export */ __webpack_exports__["default"] = (Estimate);

var _c;

$RefreshReg$(_c, "Estimate");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXN0aW1hdGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFuaW1hdGlvbkNvbnRhaW5lciIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwibWFyZ2luVG9wIiwiaW1nQnV0dG9uIiwiY3Vyc29yIiwib3B0aW9uU2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwicGxheWVySWNvbiIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm9wdGlvblRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3ViSGVhZGluZyIsIm1hcmdpbkJvdHRvbSIsInF1ZXN0aW9ucyIsImlkIiwidGl0bGUiLCJzdWJ0aXRsZSIsImFjdGl2ZSIsIm9wdGlvbnMiLCJpY29uIiwiaWNvbkFsdCIsInNlbGVjdGVkIiwiY29zdCIsImhvdXJzTWFya3MiLCJ2YWx1ZSIsImxhYmVsIiwiRXN0aW1hdGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VQYWdlc0NvbnRleHQiLCJzZXRQYWdlSW5kZWNpZXMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwicGxheWVySWNvbkltZyIsInNldFBsYXllckljb25JbWciLCJldmVudFR5cGUiLCJldmVudENvc3QiLCJwbGF5ZXJzIiwiaG91cnMiLCJwcmljZURhdGEiLCJzZXRQcmljZURhdGEiLCJjcmVhdGVNc2ciLCJjYWxjdWxhdGVQcmljZSIsIk1hdGgiLCJmbG9vciIsInBhcnRpY2lwYW50TGFiZWwiLCJwbGF5ZXJJbWciLCJyZXR1cm5WYWx1ZSIsImhvdXJzTGFiZWwiLCJoYW5kbGVPcHRpb25DbGljayIsInVzZUVmZmVjdCIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwibGFuZ3VhZ2UiLCJwYWdlcyIsImVzdGltYXRlIiwiZmlsdGVyIiwicXVlc3Rpb24iLCJt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QUU4QixTQUFTLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBN0lGLENBakJGLENBeEJGLENBREY7QUFnTUQsQ0ExUEQ7O0dBQU1oQixRO1VBQ1lwQyxTLEVBQ1l1QywwRSxFQXNER3VCLDRFOzs7S0F4RDNCMUIsUTtBQTRQU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXN0aW1hdGUuYmI0Y2E3YWZmM2ZhOGUxMDhmM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuLy8gaW1wb3J0IExvdHRpZSBmcm9tICdyZWFjdC1sb3R0aWUtcGxheWVyJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG4vLyBpbXBvcnQgZXN0aW1hdGVBbmltYXRpb24gZnJvbSAnLi4vc3JjL2FuaW1hdGlvbnMvZXN0aW1hdGUuanNvbidcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9Db250YWN0Rm9ybSdcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vc3JjL3VpL1BhZ2VIZWFkZXInXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBhbmltYXRpb25Db250YWluZXI6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGhlaWdodDogJzgwJScsXHJcbiAgfSxcclxuICBhbmltYXRpb246IHtcclxuICAgIG1hcmdpblRvcDogJy0yNSUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgaW1nQnV0dG9uOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG4gIG9wdGlvblNlbGVjdGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICB9LFxyXG4gIHBsYXllckljb246IHtcclxuICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzJlbScsXHJcbiAgfSxcclxuICBvcHRpb25UaXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgfSxcclxuICBzdWJIZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIG1hcmdpblRvcDogJzJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gIH0sXHJcbn0pKVxyXG4vLyBjb25zdCBhbmltYXRpb25PcHRpb25zID0ge1xyXG4vLyAgIGxvb3A6IHRydWUsXHJcbi8vICAgYXV0b3BsYXk6IHRydWUsXHJcbi8vICAgYW5pbWF0aW9uRGF0YTogZXN0aW1hdGVBbmltYXRpb24sXHJcbi8vICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4vLyAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4vLyAgICAgaW1hZ2VQcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbi8vICAgfSxcclxuLy8gfVxyXG5cclxuY29uc3QgcXVlc3Rpb25zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/JyxcclxuICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6ICdQcml2YXRlICYgRmFtaWx5JyxcclxuICAgICAgICBzdWJ0aXRsZTogbnVsbCxcclxuICAgICAgICBpY29uOiAnL2Fzc2V0cy9pY29uLXRlYW13b3JrLnN2ZycsXHJcbiAgICAgICAgaWNvbkFsdDogJ1ByaXZhdGUgJiBGYW1pbHknLFxyXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjb3N0OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6ICdDb21hcG55IEV2ZW50cycsXHJcbiAgICAgICAgc3VidGl0bGU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogJy9hc3NldHMvaWNvbi1jcmVhdGl2ZS5zdmcnLFxyXG4gICAgICAgIGljb25BbHQ6ICdDb21hcG55IEV2ZW50cycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNvc3Q6IDEuMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiBgRXhoaWJpdGlvbiAmIENvbmZlcmVuY2VgLFxyXG4gICAgICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL2ljb24tZnVuLnN2ZycsXHJcbiAgICAgICAgaWNvbkFsdDogYEV4aGliaXRpb24gJiBDb25mZXJlbmNlYCxcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY29zdDogMS41LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dXHJcbmNvbnN0IGhvdXJzTWFya3MgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6IDEsXHJcbiAgICBsYWJlbDogJzFocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDIsXHJcbiAgICBsYWJlbDogJzJocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDMsXHJcbiAgICBsYWJlbDogJzNocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDQsXHJcbiAgICBsYWJlbDogJzRocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDUsXHJcbiAgICBsYWJlbDogJzVocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDYsXHJcbiAgICBsYWJlbDogJzZocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDcsXHJcbiAgICBsYWJlbDogJzdocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDgsXHJcbiAgICBsYWJlbDogJzhocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDksXHJcbiAgICBsYWJlbDogJzlocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDEwLFxyXG4gICAgbGFiZWw6ICcxMCsnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IEVzdGltYXRlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BsYXllckljb25JbWcsIHNldFBsYXllckljb25JbWddID0gdXNlU3RhdGUoXHJcbiAgICAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDIuc3ZnJ1xyXG4gIClcclxuICBjb25zdCBbcHJpY2VEYXRhLCBzZXRQcmljZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRUeXBlOiAnJyxcclxuICAgIGV2ZW50Q29zdDogMCxcclxuICAgIHBsYXllcnM6IDIsXHJcbiAgICBob3VyczogMSxcclxuICB9KVxyXG5cclxuICBjb25zdCBjcmVhdGVNc2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYEhlbGxvIFZSRnVuVGVhbSEgSSB3b3VsZCBsaWtlIG1vcmUgZGV0YWlscyBhYm91dCBhICR7XHJcbiAgICAgIHByaWNlRGF0YS5ldmVudFR5cGVcclxuICAgIH0gZXZlbnQsIHdpdGggJHtwcmljZURhdGEucGxheWVyc30gcGFydGljaXBhbnRzLCBmb3IgJHtcclxuICAgICAgcHJpY2VEYXRhLmhvdXJzXHJcbiAgICB9IGhvdXJzLiBJIGdvdCBhIHByaWNlIGVzdGltYXRlIG9mICQke2NhbGN1bGF0ZVByaWNlKCl9LiBUaGFuayB5b3UhYFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlUHJpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGV2ZW50Q29zdCwgcGxheWVycywgaG91cnMgfSA9IHByaWNlRGF0YVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZXZlbnRDb3N0ICogcGxheWVycyAqIDI1ICogaG91cnMpXHJcbiAgfVxyXG4gIGNvbnN0IHBhcnRpY2lwYW50TGFiZWwgPSB2YWx1ZSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJJbWcgPVxyXG4gICAgICB2YWx1ZSA9PT0gMVxyXG4gICAgICAgID8gJy9hc3NldHMvcGxheWVyLWljb25zLTAxLnN2ZydcclxuICAgICAgICA6IHZhbHVlID09PSAyXHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDIuc3ZnJ1xyXG4gICAgICAgIDogdmFsdWUgPD0gNVxyXG4gICAgICAgID8gJy9hc3NldHMvcGxheWVyLWljb25zLTAzLnN2ZydcclxuICAgICAgICA6ICcvYXNzZXRzL3BsYXllci1pY29ucy0wNC5zdmcnXHJcblxyXG4gICAgLy8gc2V0UGxheWVySWNvbkltZyhwbGF5ZXJJbWcpXHJcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHZhbHVlID09PSAyMCA/ICcyMSsnIDogdmFsdWVcclxuICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaG91cnNMYWJlbCA9IHZhbHVlID0+IHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gMTAgPyAnMTArJyA6IHZhbHVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcHRpb25DbGljayA9IChpZCwgY29zdCwgdGl0bGUpID0+IHtcclxuICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgIC4uLnByaWNlRGF0YSxcclxuICAgICAgZXZlbnRUeXBlOiB0aXRsZSxcclxuICAgICAgZXZlbnRDb3N0OiBjb3N0LFxyXG4gICAgfSlcclxuICAgIHNldFNlbGVjdGVkSWQoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy9lc3RpbWF0ZScpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSwgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUhlYWRlciBoZWFkZXI9e3NpdGVEYXRhLnBhZ2VzLmVzdGltYXRlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlIGtleT0ndGl0bGUnPlByaWNlIEVzdGltYXRlIGZvciBWUiBldmVudHMgfCBWUkZ1blRlYW08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGtleT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBjb250ZW50PSdHZXQgYSBmcmVlIHByaWNlIGVzdGltYXRlIGZvciB5b3VyIGN1c3RvbSBWUiBFdmVudCwgdXNpbmcgb3VyIGVzdGltYXRlIGNhbGN1bGF0b3IuICdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndGl0bGUnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcbiAgICAgICAgICBjb250ZW50PSdCZXR0ZXIgdGhhbiByZWFsaXR5IFZSIGV4cGVyaWVuY2VzIHwgRnJlZSBFc3RpbWF0ZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndXJsJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9lc3RpbWF0ZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGtleT0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2VzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgey8qIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBtZD17M30+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmltYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmltYXRpb259PlxyXG4gICAgICAgICAgICAgIDxMb3R0aWVcclxuICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyU2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZVByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pbiBtZWV0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhPXtlc3RpbWF0ZUFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIHBsYXlcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNzAlJywgaGVpZ2h0OiAnNTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBtZD17N30+XHJcbiAgICAgICAgICB7cXVlc3Rpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIocXVlc3Rpb24gPT4gcXVlc3Rpb24uYWN0aXZlID09PSB0cnVlKVxyXG4gICAgICAgICAgICAubWFwKHF1ZXN0aW9uID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtxdWVzdGlvbi5pZH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDaG9vc2UgeW91ciB0eXBlIG9mIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5vcHRpb25zLm1hcChvcHRpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmltZ0J1dHRvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5vcHRpb25TZWxlY3RlZF06IHNlbGVjdGVkSWQgPT09IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3B0aW9uQ2xpY2sob3B0aW9uLmlkLCBvcHRpb24uY29zdCwgb3B0aW9uLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzI1MHB4JywgcGFkZGluZzogJzFlbScgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvblRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17b3B0aW9uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdibGFibGFiYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViSGVhZGluZ31cclxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvdyBtYW55IHBsYXllcnM/XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgIG1heD17MjB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRm9ybWF0PXtwYXJ0aWNpcGFudExhYmVsfVxyXG4gICAgICAgICAgICAgICAgZ2V0QXJpYVZhbHVlVGV4dD17cGFydGljaXBhbnRMYWJlbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0nZGlzY3JldGUtc2xpZGVyLWFsd2F5cydcclxuICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXJrcz17bnVsbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PSdvbidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRQcmljZURhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByaWNlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzOiBwYXJzZUludCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJJY29uSW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PSdwbGF5ZXJzJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBsYXllckljb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcclxuICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJIZWFkaW5nfVxyXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSG93IGxvbmcgd291bGQgeW91IHBsYXk/XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcicgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezEwfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbEZvcm1hdD17aG91cnNMYWJlbH1cclxuICAgICAgICAgICAgICAgIGdldEFyaWFWYWx1ZVRleHQ9e2hvdXJzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J2Rpc2NyZXRlLXNsaWRlci1hbHdheXMnXHJcbiAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgbWFya3M9e2hvdXJzTWFya3N9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT0nb24nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCB2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0UHJpY2VEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmljZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzNlbScsIG1hcmdpbkJvdHRvbTogJzNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgUHJpY2UgRXN0OlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBhbGlnbj0nY2VudGVyJyBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICB7YCQke2NhbGN1bGF0ZVByaWNlKCl9YH1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcicgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNWVtJyB9fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gbWVzc2FnZT17Y3JlYXRlTXNnKCl9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvUGFnZUhlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdGltYXRlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=