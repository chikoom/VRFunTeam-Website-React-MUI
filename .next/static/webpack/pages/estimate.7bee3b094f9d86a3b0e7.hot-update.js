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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXN0aW1hdGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFuaW1hdGlvbkNvbnRhaW5lciIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwibWFyZ2luVG9wIiwiaW1nQnV0dG9uIiwiY3Vyc29yIiwib3B0aW9uU2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwicGxheWVySWNvbiIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm9wdGlvblRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3ViSGVhZGluZyIsIm1hcmdpbkJvdHRvbSIsInF1ZXN0aW9ucyIsImlkIiwidGl0bGUiLCJlbiIsImhlIiwic3VidGl0bGUiLCJhY3RpdmUiLCJvcHRpb25zIiwiaWNvbiIsImljb25BbHQiLCJzZWxlY3RlZCIsImNvc3QiLCJob3Vyc01hcmtzIiwidmFsdWUiLCJsYWJlbCIsIkVzdGltYXRlIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0Iiwic2V0UGFnZUluZGVjaWVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInBsYXllckljb25JbWciLCJzZXRQbGF5ZXJJY29uSW1nIiwiZXZlbnRUeXBlIiwiZXZlbnRDb3N0IiwicGxheWVycyIsImhvdXJzIiwicHJpY2VEYXRhIiwic2V0UHJpY2VEYXRhIiwiY3JlYXRlTXNnIiwiY2FsY3VsYXRlUHJpY2UiLCJNYXRoIiwiZmxvb3IiLCJwYXJ0aWNpcGFudExhYmVsIiwicGxheWVySW1nIiwicmV0dXJuVmFsdWUiLCJob3Vyc0xhYmVsIiwiaGFuZGxlT3B0aW9uQ2xpY2siLCJ1c2VFZmZlY3QiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwicGFnZXMiLCJlc3RpbWF0ZSIsImZpbHRlciIsInF1ZXN0aW9uIiwibWFwIiwib3B0aW9uIiwiY2xzeCIsIm1heFdpZHRoIiwicGFkZGluZyIsImV2ZW50IiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLHNCQUFrQixFQUFFO0FBQ2xCQyxjQUFRLEVBQUUsUUFEUTtBQUVsQkMsWUFBTSxFQUFFO0FBRlUsS0FEaUI7QUFLckNDLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsTUFERjtBQUVUSCxjQUFRLEVBQUU7QUFGRCxLQUwwQjtBQVNyQ0ksYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRTtBQURDLEtBVDBCO0FBWXJDQyxrQkFBYyxFQUFFO0FBQ2RDLHFCQUFlLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQUR6QixLQVpxQjtBQWVyQ0MsY0FBVSxFQUFFO0FBQ1ZDLFdBQUssRUFBRSxPQURHO0FBRVZYLFlBQU0sRUFBRSxPQUZFO0FBR1ZZLGdCQUFVLEVBQUU7QUFIRixLQWZ5QjtBQW9CckNDLGVBQVcsRUFBRTtBQUNYQyxnQkFBVSxFQUFFLEtBREQ7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FwQndCO0FBd0JyQ0MsY0FBVSxFQUFFO0FBQ1ZGLGdCQUFVLEVBQUUsS0FERjtBQUVWWixlQUFTLEVBQUUsS0FGRDtBQUdWZSxrQkFBWSxFQUFFO0FBSEo7QUF4QnlCLEdBQUw7QUFBQSxDQUFOLENBQTVCLEMsQ0E4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUU7QUFBQ0MsTUFBRSw2QkFBSDtBQUFpQ0MsTUFBRTtBQUFuQyxHQUZUO0FB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O0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFhLFdBQU8sRUFBRWdDLFNBQVMsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0E3SUYsQ0FqQkYsQ0F4QkYsQ0FERjtBQWdNRCxDQTFQRDs7R0FBTWhCLFE7VUFDWXRDLFMsRUFDWXlDLDBFLEVBc0RHdUIsNEU7OztLQXhEM0IxQixRO0FBNFBTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lc3RpbWF0ZS43YmVlM2IwOTRmOWQ4NmEzYjBlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xyXG4vLyBpbXBvcnQgTG90dGllIGZyb20gJ3JlYWN0LWxvdHRpZS1wbGF5ZXInXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbi8vIGltcG9ydCBlc3RpbWF0ZUFuaW1hdGlvbiBmcm9tICcuLi9zcmMvYW5pbWF0aW9ucy9lc3RpbWF0ZS5qc29uJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vc3JjL3VpL3BhcnRzL0NvbnRhY3RGb3JtJ1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi9zcmMvdWkvUGFnZUhlYWRlcidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGFuaW1hdGlvbkNvbnRhaW5lcjoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgaGVpZ2h0OiAnODAlJyxcclxuICB9LFxyXG4gIGFuaW1hdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiAnLTI1JScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSxcclxuICBpbWdCdXR0b246IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcbiAgb3B0aW9uU2VsZWN0ZWQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gIH0sXHJcbiAgcGxheWVySWNvbjoge1xyXG4gICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMmVtJyxcclxuICB9LFxyXG4gIG9wdGlvblRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICB9LFxyXG4gIHN1YkhlYWRpbmc6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgbWFyZ2luVG9wOiAnMmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzJlbScsXHJcbiAgfSxcclxufSkpXHJcbi8vIGNvbnN0IGFuaW1hdGlvbk9wdGlvbnMgPSB7XHJcbi8vICAgbG9vcDogdHJ1ZSxcclxuLy8gICBhdXRvcGxheTogdHJ1ZSxcclxuLy8gICBhbmltYXRpb25EYXRhOiBlc3RpbWF0ZUFuaW1hdGlvbixcclxuLy8gICByZW5kZXJlclNldHRpbmdzOiB7XHJcbi8vICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbi8vICAgICBpbWFnZVByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pbiBtZWV0JyxcclxuLy8gICB9LFxyXG4vLyB9XHJcblxyXG5jb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZToge2VuOmBXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/YCwgaGU6YFdoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9gfSxcclxuICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6IHtlbjpgUHJpdmF0ZSAmIEZhbWlseWAsIGhlOmBQcml2YXRlICYgRmFtaWx5YH0sXHJcbiAgICAgICAgc3VidGl0bGU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogJy9hc3NldHMvaWNvbi10ZWFtd29yay5zdmcnLFxyXG4gICAgICAgIGljb25BbHQ6ICdQcml2YXRlICYgRmFtaWx5JyxcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY29zdDogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiB7ZW46YENvbWFwbnkgRXZlbnRzYCwgaGU6YENvbWFwbnkgRXZlbnRzYH0sXHJcbiAgICAgICAgc3VidGl0bGU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogJy9hc3NldHMvaWNvbi1jcmVhdGl2ZS5zdmcnLFxyXG4gICAgICAgIGljb25BbHQ6ICdDb21hcG55IEV2ZW50cycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNvc3Q6IDEuMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiB7ZW46YEV4aGliaXRpb24gJiBDb25mZXJlbmNlYCwgaGU6YEV4aGliaXRpb24gJiBDb25mZXJlbmNlYH0sXHJcbiAgICAgICAgc3VidGl0bGU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogJy9hc3NldHMvaWNvbi1mdW4uc3ZnJyxcclxuICAgICAgICBpY29uQWx0OiBgRXhoaWJpdGlvbiAmIENvbmZlcmVuY2VgLFxyXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjb3N0OiAxLjUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl1cclxuY29uc3QgaG91cnNNYXJrcyA9IFtcclxuICB7XHJcbiAgICB2YWx1ZTogMSxcclxuICAgIGxhYmVsOiAnMWhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogMixcclxuICAgIGxhYmVsOiAnMmhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogMyxcclxuICAgIGxhYmVsOiAnM2hycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNCxcclxuICAgIGxhYmVsOiAnNGhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNSxcclxuICAgIGxhYmVsOiAnNWhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNixcclxuICAgIGxhYmVsOiAnNmhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogNyxcclxuICAgIGxhYmVsOiAnN2hycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogOCxcclxuICAgIGxhYmVsOiAnOGhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogOSxcclxuICAgIGxhYmVsOiAnOWhycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogMTAsXHJcbiAgICBsYWJlbDogJzEwKycsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgRXN0aW1hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBzZXRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGxheWVySWNvbkltZywgc2V0UGxheWVySWNvbkltZ10gPSB1c2VTdGF0ZShcclxuICAgICcvYXNzZXRzL3BsYXllci1pY29ucy0wMi5zdmcnXHJcbiAgKVxyXG4gIGNvbnN0IFtwcmljZURhdGEsIHNldFByaWNlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBldmVudFR5cGU6ICcnLFxyXG4gICAgZXZlbnRDb3N0OiAwLFxyXG4gICAgcGxheWVyczogMixcclxuICAgIGhvdXJzOiAxLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1zZyA9ICgpID0+IHtcclxuICAgIHJldHVybiBgSGVsbG8gVlJGdW5UZWFtISBJIHdvdWxkIGxpa2UgbW9yZSBkZXRhaWxzIGFib3V0IGEgJHtcclxuICAgICAgcHJpY2VEYXRhLmV2ZW50VHlwZVxyXG4gICAgfSBldmVudCwgd2l0aCAke3ByaWNlRGF0YS5wbGF5ZXJzfSBwYXJ0aWNpcGFudHMsIGZvciAke1xyXG4gICAgICBwcmljZURhdGEuaG91cnNcclxuICAgIH0gaG91cnMuIEkgZ290IGEgcHJpY2UgZXN0aW1hdGUgb2YgJCR7Y2FsY3VsYXRlUHJpY2UoKX0uIFRoYW5rIHlvdSFgXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxjdWxhdGVQcmljZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZXZlbnRDb3N0LCBwbGF5ZXJzLCBob3VycyB9ID0gcHJpY2VEYXRhXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihldmVudENvc3QgKiBwbGF5ZXJzICogMjUgKiBob3VycylcclxuICB9XHJcbiAgY29uc3QgcGFydGljaXBhbnRMYWJlbCA9IHZhbHVlID0+IHtcclxuICAgIGNvbnN0IHBsYXllckltZyA9XHJcbiAgICAgIHZhbHVlID09PSAxXHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDEuc3ZnJ1xyXG4gICAgICAgIDogdmFsdWUgPT09IDJcclxuICAgICAgICA/ICcvYXNzZXRzL3BsYXllci1pY29ucy0wMi5zdmcnXHJcbiAgICAgICAgOiB2YWx1ZSA8PSA1XHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDMuc3ZnJ1xyXG4gICAgICAgIDogJy9hc3NldHMvcGxheWVyLWljb25zLTA0LnN2ZydcclxuXHJcbiAgICAvLyBzZXRQbGF5ZXJJY29uSW1nKHBsYXllckltZylcclxuICAgIGNvbnN0IHJldHVyblZhbHVlID0gdmFsdWUgPT09IDIwID8gJzIxKycgOiB2YWx1ZVxyXG4gICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBob3Vyc0xhYmVsID0gdmFsdWUgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSAxMCA/ICcxMCsnIDogdmFsdWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wdGlvbkNsaWNrID0gKGlkLCBjb3N0LCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0UHJpY2VEYXRhKHtcclxuICAgICAgLi4ucHJpY2VEYXRhLFxyXG4gICAgICBldmVudFR5cGU6IHRpdGxlLFxyXG4gICAgICBldmVudENvc3Q6IGNvc3QsXHJcbiAgICB9KVxyXG4gICAgc2V0U2VsZWN0ZWRJZChpZClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VJbmRlY2llcygnL2VzdGltYXRlJylcclxuICB9LCBbXSlcclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlSGVhZGVyIGhlYWRlcj17c2l0ZURhdGEucGFnZXMuZXN0aW1hdGV9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGUga2V5PSd0aXRsZSc+UHJpY2UgRXN0aW1hdGUgZm9yIFZSIGV2ZW50cyB8IFZSRnVuVGVhbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAga2V5PSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGNvbnRlbnQ9J0dldCBhIGZyZWUgcHJpY2UgZXN0aW1hdGUgZm9yIHlvdXIgY3VzdG9tIFZSIEV2ZW50LCB1c2luZyBvdXIgZXN0aW1hdGUgY2FsY3VsYXRvci4gJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d0aXRsZSdcclxuICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgIGNvbnRlbnQ9J0JldHRlciB0aGFuIHJlYWxpdHkgVlIgZXhwZXJpZW5jZXMgfCBGcmVlIEVzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT0nb2d1cmwnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dXJsJ1xyXG4gICAgICAgICAgY29udGVudD0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2VzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAga2V5PSdjYW5vbmljYWwnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2Z1bnRlYW12ci5jb20vZXN0aW1hdGUnXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICB7LyogPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIG1kPXszfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuaW1hdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuaW1hdGlvbn0+XHJcbiAgICAgICAgICAgICAgPExvdHRpZVxyXG4gICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJTZXR0aW5ncz17e1xyXG4gICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlUHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE9e2VzdGltYXRlQW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgcGxheVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc3MCUnLCBoZWlnaHQ6ICc1MCUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nIG1kPXs3fT5cclxuICAgICAgICAgIHtxdWVzdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcihxdWVzdGlvbiA9PiBxdWVzdGlvbi5hY3RpdmUgPT09IHRydWUpXHJcbiAgICAgICAgICAgIC5tYXAocXVlc3Rpb24gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3F1ZXN0aW9uLmlkfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDUnXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3ViSGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENob29zZSB5b3VyIHR5cGUgb2YgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaW1nQnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLm9wdGlvblNlbGVjdGVkXTogc2VsZWN0ZWRJZCA9PT0gb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPcHRpb25DbGljayhvcHRpb24uaWQsIG9wdGlvbi5jb3N0LCBvcHRpb24udGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjUwcHgnLCBwYWRkaW5nOiAnMWVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0naDYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtvcHRpb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JsYWJsYWJhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcclxuICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJIZWFkaW5nfVxyXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSG93IG1hbnkgcGxheWVycz9cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4PXsyMH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Mn1cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxGb3JtYXQ9e3BhcnRpY2lwYW50TGFiZWx9XHJcbiAgICAgICAgICAgICAgICBnZXRBcmlhVmFsdWVUZXh0PXtwYXJ0aWNpcGFudExhYmVsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdkaXNjcmV0ZS1zbGlkZXItYWx3YXlzJ1xyXG4gICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgIG1hcmtzPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9J29uJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJpY2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnM6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsxfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BsYXllckljb25JbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9J3BsYXllcnMnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGxheWVySWNvbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBIb3cgbG9uZyB3b3VsZCB5b3UgcGxheT9cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgIG1heD17MTB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRm9ybWF0PXtob3Vyc0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgZ2V0QXJpYVZhbHVlVGV4dD17aG91cnNMYWJlbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0nZGlzY3JldGUtc2xpZGVyLWFsd2F5cydcclxuICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXJrcz17aG91cnNNYXJrc31cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PSdvbidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRQcmljZURhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByaWNlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBob3VyczogcGFyc2VJbnQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnM2VtJywgbWFyZ2luQm90dG9tOiAnM2VtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBhbGlnbj0nY2VudGVyJyBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICBQcmljZSBFc3Q6XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgIHtgJCR7Y2FsY3VsYXRlUHJpY2UoKX1gfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1ZW0nIH19PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxDb250YWN0Rm9ybSBtZXNzYWdlPXtjcmVhdGVNc2coKX0gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9QYWdlSGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0aW1hdGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==