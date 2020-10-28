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
      he: "Private & Family"
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
      he: "Comapny Events"
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
      he: "Exhibition & Conference"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXN0aW1hdGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFuaW1hdGlvbkNvbnRhaW5lciIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwibWFyZ2luVG9wIiwiaW1nQnV0dG9uIiwiY3Vyc29yIiwib3B0aW9uU2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwicGxheWVySWNvbiIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm9wdGlvblRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3ViSGVhZGluZyIsIm1hcmdpbkJvdHRvbSIsInF1ZXN0aW9ucyIsImlkIiwidGl0bGUiLCJlbiIsImhlIiwic3VidGl0bGUiLCJhY3RpdmUiLCJvcHRpb25zIiwiaWNvbiIsImljb25BbHQiLCJzZWxlY3RlZCIsImNvc3QiLCJob3Vyc01hcmtzIiwidmFsdWUiLCJsYWJlbCIsIkVzdGltYXRlIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0Iiwic2V0UGFnZUluZGVjaWVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInBsYXllckljb25JbWciLCJzZXRQbGF5ZXJJY29uSW1nIiwiZXZlbnRUeXBlIiwiZXZlbnRDb3N0IiwicGxheWVycyIsImhvdXJzIiwicHJpY2VEYXRhIiwic2V0UHJpY2VEYXRhIiwiY3JlYXRlTXNnIiwiY2FsY3VsYXRlUHJpY2UiLCJNYXRoIiwiZmxvb3IiLCJwYXJ0aWNpcGFudExhYmVsIiwicGxheWVySW1nIiwicmV0dXJuVmFsdWUiLCJob3Vyc0xhYmVsIiwiaGFuZGxlT3B0aW9uQ2xpY2siLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwicGFnZXMiLCJlc3RpbWF0ZSIsImZpbHRlciIsInF1ZXN0aW9uIiwibWFwIiwib3B0aW9uIiwiY2xzeCIsIm1heFdpZHRoIiwicGFkZGluZyIsImV2ZW50IiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLHNCQUFrQixFQUFFO0FBQ2xCQyxjQUFRLEVBQUUsUUFEUTtBQUVsQkMsWUFBTSxFQUFFO0FBRlUsS0FEaUI7QUFLckNDLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsTUFERjtBQUVUSCxjQUFRLEVBQUU7QUFGRCxLQUwwQjtBQVNyQ0ksYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRTtBQURDLEtBVDBCO0FBWXJDQyxrQkFBYyxFQUFFO0FBQ2RDLHFCQUFlLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQUR6QixLQVpxQjtBQWVyQ0MsY0FBVSxFQUFFO0FBQ1ZDLFdBQUssRUFBRSxPQURHO0FBRVZYLFlBQU0sRUFBRSxPQUZFO0FBR1ZZLGdCQUFVLEVBQUU7QUFIRixLQWZ5QjtBQW9CckNDLGVBQVcsRUFBRTtBQUNYQyxnQkFBVSxFQUFFLEtBREQ7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FwQndCO0FBd0JyQ0MsY0FBVSxFQUFFO0FBQ1ZGLGdCQUFVLEVBQUUsS0FERjtBQUVWWixlQUFTLEVBQUUsS0FGRDtBQUdWZSxrQkFBWSxFQUFFO0FBSEo7QUF4QnlCLEdBQUw7QUFBQSxDQUFOLENBQTVCLEMsQ0E4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUU7QUFBQ0MsTUFBRSw2QkFBSDtBQUFpQ0MsTUFBRTtBQUFuQyxHQUZUO0FB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QUFBaEIsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBYSxXQUFPLEVBQUVnQyxTQUFTLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBN0lGLENBakJGLENBeEJGLENBREY7QUFnTUQsQ0ExUEQ7O0dBQU1oQixRO1VBQ1l0QyxTLEVBQ1l5QywwRSxFQXNER3VCLDRFOzs7S0F4RDNCMUIsUTtBQTRQU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXN0aW1hdGUuZmU0MTU0YzliOTAxNjliNDM3NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuLy8gaW1wb3J0IExvdHRpZSBmcm9tICdyZWFjdC1sb3R0aWUtcGxheWVyJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG4vLyBpbXBvcnQgZXN0aW1hdGVBbmltYXRpb24gZnJvbSAnLi4vc3JjL2FuaW1hdGlvbnMvZXN0aW1hdGUuanNvbidcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9Db250YWN0Rm9ybSdcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vc3JjL3VpL1BhZ2VIZWFkZXInXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBhbmltYXRpb25Db250YWluZXI6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGhlaWdodDogJzgwJScsXHJcbiAgfSxcclxuICBhbmltYXRpb246IHtcclxuICAgIG1hcmdpblRvcDogJy0yNSUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgaW1nQnV0dG9uOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG4gIG9wdGlvblNlbGVjdGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICB9LFxyXG4gIHBsYXllckljb246IHtcclxuICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzJlbScsXHJcbiAgfSxcclxuICBvcHRpb25UaXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgfSxcclxuICBzdWJIZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIG1hcmdpblRvcDogJzJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gIH0sXHJcbn0pKVxyXG4vLyBjb25zdCBhbmltYXRpb25PcHRpb25zID0ge1xyXG4vLyAgIGxvb3A6IHRydWUsXHJcbi8vICAgYXV0b3BsYXk6IHRydWUsXHJcbi8vICAgYW5pbWF0aW9uRGF0YTogZXN0aW1hdGVBbmltYXRpb24sXHJcbi8vICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4vLyAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4vLyAgICAgaW1hZ2VQcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbi8vICAgfSxcclxuLy8gfVxyXG5cclxuY29uc3QgcXVlc3Rpb25zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IHtlbjpgV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP2AsIGhlOmBXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/YH0sXHJcbiAgICBzdWJ0aXRsZTogbnVsbCxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIG9wdGlvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiB7ZW46YFByaXZhdGUgJiBGYW1pbHlgLCBoZTpgUHJpdmF0ZSAmIEZhbWlseWB9LFxyXG4gICAgICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL2ljb24tdGVhbXdvcmsuc3ZnJyxcclxuICAgICAgICBpY29uQWx0OiAnUHJpdmF0ZSAmIEZhbWlseScsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNvc3Q6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZToge2VuOmBDb21hcG55IEV2ZW50c2AsIGhlOmBDb21hcG55IEV2ZW50c2B9LFxyXG4gICAgICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL2ljb24tY3JlYXRpdmUuc3ZnJyxcclxuICAgICAgICBpY29uQWx0OiAnQ29tYXBueSBFdmVudHMnLFxyXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjb3N0OiAxLjIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB0aXRsZToge2VuOmBFeGhpYml0aW9uICYgQ29uZmVyZW5jZWAsIGhlOmBFeGhpYml0aW9uICYgQ29uZmVyZW5jZWB9LFxyXG4gICAgICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL2ljb24tZnVuLnN2ZycsXHJcbiAgICAgICAgaWNvbkFsdDogYEV4aGliaXRpb24gJiBDb25mZXJlbmNlYCxcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY29zdDogMS41LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dXHJcbmNvbnN0IGhvdXJzTWFya3MgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6IDEsXHJcbiAgICBsYWJlbDogJzFocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDIsXHJcbiAgICBsYWJlbDogJzJocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDMsXHJcbiAgICBsYWJlbDogJzNocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDQsXHJcbiAgICBsYWJlbDogJzRocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDUsXHJcbiAgICBsYWJlbDogJzVocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDYsXHJcbiAgICBsYWJlbDogJzZocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDcsXHJcbiAgICBsYWJlbDogJzdocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDgsXHJcbiAgICBsYWJlbDogJzhocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDksXHJcbiAgICBsYWJlbDogJzlocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDEwLFxyXG4gICAgbGFiZWw6ICcxMCsnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IEVzdGltYXRlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BsYXllckljb25JbWcsIHNldFBsYXllckljb25JbWddID0gdXNlU3RhdGUoXHJcbiAgICAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDIuc3ZnJ1xyXG4gIClcclxuICBjb25zdCBbcHJpY2VEYXRhLCBzZXRQcmljZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRUeXBlOiAnJyxcclxuICAgIGV2ZW50Q29zdDogMCxcclxuICAgIHBsYXllcnM6IDIsXHJcbiAgICBob3VyczogMSxcclxuICB9KVxyXG5cclxuICBjb25zdCBjcmVhdGVNc2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYEhlbGxvIFZSRnVuVGVhbSEgSSB3b3VsZCBsaWtlIG1vcmUgZGV0YWlscyBhYm91dCBhICR7XHJcbiAgICAgIHByaWNlRGF0YS5ldmVudFR5cGVcclxuICAgIH0gZXZlbnQsIHdpdGggJHtwcmljZURhdGEucGxheWVyc30gcGFydGljaXBhbnRzLCBmb3IgJHtcclxuICAgICAgcHJpY2VEYXRhLmhvdXJzXHJcbiAgICB9IGhvdXJzLiBJIGdvdCBhIHByaWNlIGVzdGltYXRlIG9mICQke2NhbGN1bGF0ZVByaWNlKCl9LiBUaGFuayB5b3UhYFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlUHJpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGV2ZW50Q29zdCwgcGxheWVycywgaG91cnMgfSA9IHByaWNlRGF0YVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZXZlbnRDb3N0ICogcGxheWVycyAqIDI1ICogaG91cnMpXHJcbiAgfVxyXG4gIGNvbnN0IHBhcnRpY2lwYW50TGFiZWwgPSB2YWx1ZSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJJbWcgPVxyXG4gICAgICB2YWx1ZSA9PT0gMVxyXG4gICAgICAgID8gJy9hc3NldHMvcGxheWVyLWljb25zLTAxLnN2ZydcclxuICAgICAgICA6IHZhbHVlID09PSAyXHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDIuc3ZnJ1xyXG4gICAgICAgIDogdmFsdWUgPD0gNVxyXG4gICAgICAgID8gJy9hc3NldHMvcGxheWVyLWljb25zLTAzLnN2ZydcclxuICAgICAgICA6ICcvYXNzZXRzL3BsYXllci1pY29ucy0wNC5zdmcnXHJcblxyXG4gICAgLy8gc2V0UGxheWVySWNvbkltZyhwbGF5ZXJJbWcpXHJcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHZhbHVlID09PSAyMCA/ICcyMSsnIDogdmFsdWVcclxuICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaG91cnNMYWJlbCA9IHZhbHVlID0+IHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gMTAgPyAnMTArJyA6IHZhbHVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcHRpb25DbGljayA9IChpZCwgY29zdCwgdGl0bGUpID0+IHtcclxuICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgIC4uLnByaWNlRGF0YSxcclxuICAgICAgZXZlbnRUeXBlOiB0aXRsZSxcclxuICAgICAgZXZlbnRDb3N0OiBjb3N0LFxyXG4gICAgfSlcclxuICAgIHNldFNlbGVjdGVkSWQoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy9lc3RpbWF0ZScpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSwgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUhlYWRlciBoZWFkZXI9e3NpdGVEYXRhLnBhZ2VzLmVzdGltYXRlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlIGtleT0ndGl0bGUnPlByaWNlIEVzdGltYXRlIGZvciBWUiBldmVudHMgfCBWUkZ1blRlYW08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGtleT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBjb250ZW50PSdHZXQgYSBmcmVlIHByaWNlIGVzdGltYXRlIGZvciB5b3VyIGN1c3RvbSBWUiBFdmVudCwgdXNpbmcgb3VyIGVzdGltYXRlIGNhbGN1bGF0b3IuICdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndGl0bGUnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcbiAgICAgICAgICBjb250ZW50PSdCZXR0ZXIgdGhhbiByZWFsaXR5IFZSIGV4cGVyaWVuY2VzIHwgRnJlZSBFc3RpbWF0ZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndXJsJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9lc3RpbWF0ZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGtleT0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2VzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgey8qIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBtZD17M30+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmltYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmltYXRpb259PlxyXG4gICAgICAgICAgICAgIDxMb3R0aWVcclxuICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyU2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZVByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pbiBtZWV0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhPXtlc3RpbWF0ZUFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIHBsYXlcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNzAlJywgaGVpZ2h0OiAnNTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBtZD17N30+XHJcbiAgICAgICAgICB7cXVlc3Rpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIocXVlc3Rpb24gPT4gcXVlc3Rpb24uYWN0aXZlID09PSB0cnVlKVxyXG4gICAgICAgICAgICAubWFwKHF1ZXN0aW9uID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtxdWVzdGlvbi5pZH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDaG9vc2UgeW91ciB0eXBlIG9mIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5vcHRpb25zLm1hcChvcHRpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmltZ0J1dHRvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5vcHRpb25TZWxlY3RlZF06IHNlbGVjdGVkSWQgPT09IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3B0aW9uQ2xpY2sob3B0aW9uLmlkLCBvcHRpb24uY29zdCwgb3B0aW9uLnRpdGxlWydlbiddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzI1MHB4JywgcGFkZGluZzogJzFlbScgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvblRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZVtsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e29wdGlvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYmxhYmxhYmEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBIb3cgbWFueSBwbGF5ZXJzP1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezIwfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbEZvcm1hdD17cGFydGljaXBhbnRMYWJlbH1cclxuICAgICAgICAgICAgICAgIGdldEFyaWFWYWx1ZVRleHQ9e3BhcnRpY2lwYW50TGFiZWx9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J2Rpc2NyZXRlLXNsaWRlci1hbHdheXMnXHJcbiAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgbWFya3M9e251bGx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT0nb24nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCB2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0UHJpY2VEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmljZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyczogcGFyc2VJbnQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cGxheWVySWNvbkltZ31cclxuICAgICAgICAgICAgICAgIGFsdD0ncGxheWVycydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wbGF5ZXJJY29ufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViSGVhZGluZ31cclxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvdyBsb25nIHdvdWxkIHlvdSBwbGF5P1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4PXsxMH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxGb3JtYXQ9e2hvdXJzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICBnZXRBcmlhVmFsdWVUZXh0PXtob3Vyc0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdkaXNjcmV0ZS1zbGlkZXItYWx3YXlzJ1xyXG4gICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgIG1hcmtzPXtob3Vyc01hcmtzfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9J29uJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJpY2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzOiBwYXJzZUludCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICczZW0nLCBtYXJnaW5Cb3R0b206ICczZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgIFByaWNlIEVzdDpcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAge2AkJHtjYWxjdWxhdGVQcmljZSgpfWB9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVlbScgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIG1lc3NhZ2U9e2NyZWF0ZU1zZygpfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9