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
  title: {
    en: "What are you looking for?",
    he: "What are you looking for?"
  },
  subtitle: null,
  active: true,
  options: [{
    id: 1,
    title: {
      en: "Private & Family",
      he: "\u05DE\u05E9\u05E4\u05D7\u05D4 \u05D0\u05D5 \u05D7\u05D1\u05E8\u05D9\u05DD"
    },
    subtitle: null,
    icon: '/assets/icon-teamwork.svg',
    iconAlt: 'Private & Family',
    selected: false,
    cost: 1
  }, {
    id: 2,
    title: {
      en: "Comapny Events",
      he: "\u05D7\u05D1\u05E8\u05D4 \u05D0\u05D5 \u05E7\u05D1\u05D5\u05E6\u05D4"
    },
    subtitle: null,
    icon: '/assets/icon-creative.svg',
    iconAlt: 'Comapny Events',
    selected: false,
    cost: 1.2
  }, {
    id: 3,
    title: {
      en: "Exhibition & Conference",
      he: "\u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD \u05D0\u05D5 \u05DB\u05E0\u05E1\u05D9\u05DD"
    },
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
    }, siteData.estimate.heading1)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
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
          return handleOptionClick(option.id, option.cost, option.title['en']);
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
      }, option.title[language])), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
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
  }, siteData.estimate.heading2)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
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
  }, siteData.estimate.heading3)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
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
  }, siteData.estimate.price, calculatePrice()))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      marginBottom: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 10,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 13
    }
  }, __jsx(_src_ui_parts_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: createMsg(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXN0aW1hdGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFuaW1hdGlvbkNvbnRhaW5lciIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwibWFyZ2luVG9wIiwiaW1nQnV0dG9uIiwiY3Vyc29yIiwib3B0aW9uU2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwicGxheWVySWNvbiIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm9wdGlvblRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3ViSGVhZGluZyIsIm1hcmdpbkJvdHRvbSIsInF1ZXN0aW9ucyIsImlkIiwidGl0bGUiLCJlbiIsImhlIiwic3VidGl0bGUiLCJhY3RpdmUiLCJvcHRpb25zIiwiaWNvbiIsImljb25BbHQiLCJzZWxlY3RlZCIsImNvc3QiLCJob3Vyc01hcmtzIiwidmFsdWUiLCJsYWJlbCIsIkVzdGltYXRlIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0Iiwic2V0UGFnZUluZGVjaWVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInBsYXllckljb25JbWciLCJzZXRQbGF5ZXJJY29uSW1nIiwiZXZlbnRUeXBlIiwiZXZlbnRDb3N0IiwicGxheWVycyIsImhvdXJzIiwicHJpY2VEYXRhIiwic2V0UHJpY2VEYXRhIiwiY3JlYXRlTXNnIiwiY2FsY3VsYXRlUHJpY2UiLCJNYXRoIiwiZmxvb3IiLCJwYXJ0aWNpcGFudExhYmVsIiwicGxheWVySW1nIiwicmV0dXJuVmFsdWUiLCJob3Vyc0xhYmVsIiwiaGFuZGxlT3B0aW9uQ2xpY2siLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwicGFnZXMiLCJlc3RpbWF0ZSIsImZpbHRlciIsInF1ZXN0aW9uIiwibWFwIiwiaGVhZGluZzEiLCJvcHRpb24iLCJjbHN4IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiaGVhZGluZzIiLCJldmVudCIsInBhcnNlSW50IiwiaGVhZGluZzMiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0Msc0JBQWtCLEVBQUU7QUFDbEJDLGNBQVEsRUFBRSxRQURRO0FBRWxCQyxZQUFNLEVBQUU7QUFGVSxLQURpQjtBQUtyQ0MsYUFBUyxFQUFFO0FBQ1RDLGVBQVMsRUFBRSxNQURGO0FBRVRILGNBQVEsRUFBRTtBQUZELEtBTDBCO0FBU3JDSSxhQUFTLEVBQUU7QUFDVEMsWUFBTSxFQUFFO0FBREMsS0FUMEI7QUFZckNDLGtCQUFjLEVBQUU7QUFDZEMscUJBQWUsRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRHpCLEtBWnFCO0FBZXJDQyxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFLE9BREc7QUFFVlgsWUFBTSxFQUFFLE9BRkU7QUFHVlksZ0JBQVUsRUFBRTtBQUhGLEtBZnlCO0FBb0JyQ0MsZUFBVyxFQUFFO0FBQ1hDLGdCQUFVLEVBQUUsS0FERDtBQUVYQyxjQUFRLEVBQUU7QUFGQyxLQXBCd0I7QUF3QnJDQyxjQUFVLEVBQUU7QUFDVkYsZ0JBQVUsRUFBRSxLQURGO0FBRVZaLGVBQVMsRUFBRSxLQUZEO0FBR1ZlLGtCQUFZLEVBQUU7QUFISjtBQXhCeUIsR0FBTDtBQUFBLENBQU4sQ0FBNUIsQyxDQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRTtB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QUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFhLFdBQU8sRUFBRWdDLFNBQVMsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0F6SUYsQ0FqQkYsQ0F4QkYsQ0FERjtBQTRMRCxDQXRQRDs7R0FBTWhCLFE7VUFDWXRDLFMsRUFDWXlDLDBFLEVBc0RHdUIsNEU7OztLQXhEM0IxQixRO0FBd1BTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lc3RpbWF0ZS5hNDhiMDQ3M2YyZWQxNGZiODg1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xyXG4vLyBpbXBvcnQgTG90dGllIGZyb20gJ3JlYWN0LWxvdHRpZS1wbGF5ZXInXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbi8vIGltcG9ydCBlc3RpbWF0ZUFuaW1hdGlvbiBmcm9tICcuLi9zcmMvYW5pbWF0aW9ucy9lc3RpbWF0ZS5qc29uJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0NvbnRhY3RGb3JtJ1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi9zcmMvdWkvUGFnZUhlYWRlcidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGFuaW1hdGlvbkNvbnRhaW5lcjoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgaGVpZ2h0OiAnODAlJyxcclxuICB9LFxyXG4gIGFuaW1hdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiAnLTI1JScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSxcclxuICBpbWdCdXR0b246IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcbiAgb3B0aW9uU2VsZWN0ZWQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gIH0sXHJcbiAgcGxheWVySWNvbjoge1xyXG4gICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMmVtJyxcclxuICB9LFxyXG4gIG9wdGlvblRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICB9LFxyXG4gIHN1YkhlYWRpbmc6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgbWFyZ2luVG9wOiAnMmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzJlbScsXHJcbiAgfSxcclxufSkpXHJcbi8vIGNvbnN0IGFuaW1hdGlvbk9wdGlvbnMgPSB7XHJcbi8vICAgbG9vcDogdHJ1ZSxcclxuLy8gICBhdXRvcGxheTogdHJ1ZSxcclxuLy8gICBhbmltYXRpb25EYXRhOiBlc3RpbWF0ZUFuaW1hdGlvbixcclxuLy8gICByZW5kZXJlclNldHRpbmdzOiB7XHJcbi8vICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbi8vICAgICBpbWFnZVByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pbiBtZWV0JyxcclxuLy8gICB9LFxyXG4vLyB9XHJcblxyXG5jb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZToge2VuOmBXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/YCwgaGU6YFdoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9gfSxcclxuICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6IHtlbjpgUHJpdmF0ZSAmIEZhbWlseWAsIGhlOmDXntep16TXl9eUINeQ15Ug15fXkdeo15nXnWB9LFxyXG4gICAgICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL2ljb24tdGVhbXdvcmsuc3ZnJyxcclxuICAgICAgICBpY29uQWx0OiAnUHJpdmF0ZSAmIEZhbWlseScsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNvc3Q6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZToge2VuOmBDb21hcG55IEV2ZW50c2AsIGhlOmDXl9eR16jXlCDXkNeVINen15HXldem15RgfSxcclxuICAgICAgICBzdWJ0aXRsZTogbnVsbCxcclxuICAgICAgICBpY29uOiAnL2Fzc2V0cy9pY29uLWNyZWF0aXZlLnN2ZycsXHJcbiAgICAgICAgaWNvbkFsdDogJ0NvbWFwbnkgRXZlbnRzJyxcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY29zdDogMS4yLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6IHtlbjpgRXhoaWJpdGlvbiAmIENvbmZlcmVuY2VgLCBoZTpg15DXmdeo15XXoteZ150g15DXlSDXm9eg16HXmdedYH0sXHJcbiAgICAgICAgc3VidGl0bGU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogJy9hc3NldHMvaWNvbi1mdW4uc3ZnJyxcclxuICAgICAgICBpY29uQWx0OiBgRXhoaWJpdGlvbiAmIENvbmZlcmVuY2VgLFxyXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjb3N0OiAxLjUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl1cclxuY29uc3QgaG91cnNNYXJrcyA9IFtcclxuICB7XHJcbiAgICB2YWx1ZTogMSxcclxuICAgIGxhYmVsOiAnMWhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogMixcclxuICAgIGxhYmVsOiAnMmhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogMyxcclxuICAgIGxhYmVsOiAnM2hycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNCxcclxuICAgIGxhYmVsOiAnNGhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNSxcclxuICAgIGxhYmVsOiAnNWhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNixcclxuICAgIGxhYmVsOiAnNmhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNyxcclxuICAgIGxhYmVsOiAnN2hycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogOCxcclxuICAgIGxhYmVsOiAnOGhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogOSxcclxuICAgIGxhYmVsOiAnOWhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogMTAsXHJcbiAgICBsYWJlbDogJzEwKycsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgRXN0aW1hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBzZXRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGxheWVySWNvbkltZywgc2V0UGxheWVySWNvbkltZ10gPSB1c2VTdGF0ZShcclxuICAgICcvYXNzZXRzL3BsYXllci1pY29ucy0wMi5zdmcnXHJcbiAgKVxyXG4gIGNvbnN0IFtwcmljZURhdGEsIHNldFByaWNlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBldmVudFR5cGU6ICcnLFxyXG4gICAgZXZlbnRDb3N0OiAwLFxyXG4gICAgcGxheWVyczogMixcclxuICAgIGhvdXJzOiAxLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1zZyA9ICgpID0+IHtcclxuICAgIHJldHVybiBgSGVsbG8gVlJGdW5UZWFtISBJIHdvdWxkIGxpa2UgbW9yZSBkZXRhaWxzIGFib3V0IGEgJHtcclxuICAgICAgcHJpY2VEYXRhLmV2ZW50VHlwZVxyXG4gICAgfSBldmVudCwgd2l0aCAke3ByaWNlRGF0YS5wbGF5ZXJzfSBwYXJ0aWNpcGFudHMsIGZvciAke1xyXG4gICAgICBwcmljZURhdGEuaG91cnNcclxuICAgIH0gaG91cnMuIEkgZ290IGEgcHJpY2UgZXN0aW1hdGUgb2YgJCR7Y2FsY3VsYXRlUHJpY2UoKX0uIFRoYW5rIHlvdSFgXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxjdWxhdGVQcmljZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZXZlbnRDb3N0LCBwbGF5ZXJzLCBob3VycyB9ID0gcHJpY2VEYXRhXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihldmVudENvc3QgKiBwbGF5ZXJzICogMjUgKiBob3VycylcclxuICB9XHJcbiAgY29uc3QgcGFydGljaXBhbnRMYWJlbCA9IHZhbHVlID0+IHtcclxuICAgIGNvbnN0IHBsYXllckltZyA9XHJcbiAgICAgIHZhbHVlID09PSAxXHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDEuc3ZnJ1xyXG4gICAgICAgIDogdmFsdWUgPT09IDJcclxuICAgICAgICA/ICcvYXNzZXRzL3BsYXllci1pY29ucy0wMi5zdmcnXHJcbiAgICAgICAgOiB2YWx1ZSA8PSA1XHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDMuc3ZnJ1xyXG4gICAgICAgIDogJy9hc3NldHMvcGxheWVyLWljb25zLTA0LnN2ZydcclxuXHJcbiAgICAvLyBzZXRQbGF5ZXJJY29uSW1nKHBsYXllckltZylcclxuICAgIGNvbnN0IHJldHVyblZhbHVlID0gdmFsdWUgPT09IDIwID8gJzIxKycgOiB2YWx1ZVxyXG4gICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBob3Vyc0xhYmVsID0gdmFsdWUgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSAxMCA/ICcxMCsnIDogdmFsdWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wdGlvbkNsaWNrID0gKGlkLCBjb3N0LCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0UHJpY2VEYXRhKHtcclxuICAgICAgLi4ucHJpY2VEYXRhLFxyXG4gICAgICBldmVudFR5cGU6IHRpdGxlLFxyXG4gICAgICBldmVudENvc3Q6IGNvc3QsXHJcbiAgICB9KVxyXG4gICAgc2V0U2VsZWN0ZWRJZChpZClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnL2VzdGltYXRlJylcclxuICB9LCBbXSlcclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlSGVhZGVyIGhlYWRlcj17c2l0ZURhdGEucGFnZXMuZXN0aW1hdGV9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGUga2V5PSd0aXRsZSc+UHJpY2UgRXN0aW1hdGUgZm9yIFZSIGV2ZW50cyB8IFZSRnVuVGVhbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAga2V5PSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGNvbnRlbnQ9J0dldCBhIGZyZWUgcHJpY2UgZXN0aW1hdGUgZm9yIHlvdXIgY3VzdG9tIFZSIEV2ZW50LCB1c2luZyBvdXIgZXN0aW1hdGUgY2FsY3VsYXRvci4gJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBGcmVlIEVzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d1cmwnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dXJsJ1xyXG4gICAgICAgICAgY29udGVudD0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2VzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAga2V5PSdjYW5vbmljYWwnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2Z1bnRlYW12ci5jb20vZXN0aW1hdGUnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICB7LyogPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIG1kPXszfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuaW1hdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuaW1hdGlvbn0+XHJcbiAgICAgICAgICAgICAgPExvdHRpZVxyXG4gICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJTZXR0aW5ncz17e1xyXG4gICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlUHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE9e2VzdGltYXRlQW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgcGxheVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc3MCUnLCBoZWlnaHQ6ICc1MCUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIG1kPXs3fT5cclxuICAgICAgICAgIHtxdWVzdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcihxdWVzdGlvbiA9PiBxdWVzdGlvbi5hY3RpdmUgPT09IHRydWUpXHJcbiAgICAgICAgICAgIC5tYXAocXVlc3Rpb24gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3F1ZXN0aW9uLmlkfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViSGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaXRlRGF0YS5lc3RpbWF0ZS5oZWFkaW5nMX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaW1nQnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLm9wdGlvblNlbGVjdGVkXTogc2VsZWN0ZWRJZCA9PT0gb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPcHRpb25DbGljayhvcHRpb24uaWQsIG9wdGlvbi5jb3N0LCBvcHRpb24udGl0bGVbJ2VuJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjUwcHgnLCBwYWRkaW5nOiAnMWVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlW2xhbmd1YWdlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17b3B0aW9uLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdibGFibGFiYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViSGVhZGluZ31cclxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzaXRlRGF0YS5lc3RpbWF0ZS5oZWFkaW5nMn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4PXsyMH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Mn1cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxGb3JtYXQ9e3BhcnRpY2lwYW50TGFiZWx9XHJcbiAgICAgICAgICAgICAgICBnZXRBcmlhVmFsdWVUZXh0PXtwYXJ0aWNpcGFudExhYmVsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdkaXNjcmV0ZS1zbGlkZXItYWx3YXlzJ1xyXG4gICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgIG1hcmtzPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9J29uJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJpY2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnM6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsxfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BsYXllckljb25JbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9J3BsYXllcnMnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGxheWVySWNvbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2l0ZURhdGEuZXN0aW1hdGUuaGVhZGluZzN9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcicgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezEwfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbEZvcm1hdD17aG91cnNMYWJlbH1cclxuICAgICAgICAgICAgICAgIGdldEFyaWFWYWx1ZVRleHQ9e2hvdXJzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J2Rpc2NyZXRlLXNsaWRlci1hbHdheXMnXHJcbiAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgbWFya3M9e2hvdXJzTWFya3N9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT0nb24nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCB2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0UHJpY2VEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmljZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzNlbScsIG1hcmdpbkJvdHRvbTogJzNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgIHtzaXRlRGF0YS5lc3RpbWF0ZS5wcmljZX17Y2FsY3VsYXRlUHJpY2UoKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVlbScgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIG1lc3NhZ2U9e2NyZWF0ZU1zZygpfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9