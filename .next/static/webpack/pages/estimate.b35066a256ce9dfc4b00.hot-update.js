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

  var createMsg = function createMsg(language) {
    return language === 'en' ? "Hello VRFunTeam! I would like more details about a ".concat(priceData.eventType, " event, with ").concat(priceData.players, " participants, for ").concat(priceData.hours, " hours. I got a price estimate of $").concat(calculatePrice(), ". Thank you!") : "\u05D4\u05D9\u05D9 VRFunTeam! \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05E2\u05DC ".concat(priceData.eventType, " , \u05E2\u05D1\u05D5\u05E8 ").concat(priceData.players, " \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD, \u05DC\u05DE\u05E9\u05DA ").concat(priceData.hours, " \u05E9\u05E2\u05D5\u05EA. \u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05D4\u05E2\u05E8\u05DB\u05EA \u05DE\u05D7\u05D9\u05E8 \u05E9\u05DC \u20AA").concat(calculatePrice(), ". \u05EA\u05D5\u05D3\u05D4 \u05E8\u05D1\u05D4!");
  };

  var calculatePrice = function calculatePrice(language) {
    var eventCost = priceData.eventCost,
        players = priceData.players,
        hours = priceData.hours;
    return language === 'en' ? Math.floor(eventCost * players * 25 * hours) : Math.floor(eventCost * players * 25 * hours * 3.7);
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
      lineNumber: 198,
      columnNumber: 5
    }
  }, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, "Price Estimate for VR events | VRFunTeam"), __jsx("meta", {
    name: "description",
    key: "description",
    content: "Get a free price estimate for your custom VR Event, using our estimate calculator. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogtitle",
    property: "og:title",
    content: "Better than reality VR experiences | Free Estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "ogurl",
    property: "og:url",
    content: "https://funteamvr.com/estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    key: "canonical",
    href: "https://funteamvr.com/estimate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 239,
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
        lineNumber: 243,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      container: true,
      justify: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
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
        lineNumber: 245,
        columnNumber: 19
      }
    }, siteData.estimate.heading1)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      container: true,
      justify: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
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
          lineNumber: 256,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 23
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        variant: "h6",
        align: "center",
        className: classes.optionTitle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 25
        }
      }, option.title[language])), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
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
          lineNumber: 280,
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
      lineNumber: 292,
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
      lineNumber: 293,
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
      lineNumber: 302,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 6,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
      lineNumber: 304,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 3,
    md: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: playerIconImg,
    alt: "players",
    className: classes.playerIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
      lineNumber: 332,
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
      lineNumber: 341,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 10,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
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
      lineNumber: 343,
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
      lineNumber: 363,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, siteData.estimate.price, calculatePrice(language)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    style: {
      marginBottom: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 10,
    md: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 13
    }
  }, __jsx(_src_ui_parts_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: createMsg(language),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXN0aW1hdGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFuaW1hdGlvbkNvbnRhaW5lciIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwibWFyZ2luVG9wIiwiaW1nQnV0dG9uIiwiY3Vyc29yIiwib3B0aW9uU2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwicGxheWVySWNvbiIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm9wdGlvblRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3ViSGVhZGluZyIsIm1hcmdpbkJvdHRvbSIsInF1ZXN0aW9ucyIsImlkIiwidGl0bGUiLCJlbiIsImhlIiwic3VidGl0bGUiLCJhY3RpdmUiLCJvcHRpb25zIiwiaWNvbiIsImljb25BbHQiLCJzZWxlY3RlZCIsImNvc3QiLCJob3Vyc01hcmtzIiwidmFsdWUiLCJsYWJlbCIsIkVzdGltYXRlIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUGFnZXNDb250ZXh0Iiwic2V0UGFnZUluZGVjaWVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInBsYXllckljb25JbWciLCJzZXRQbGF5ZXJJY29uSW1nIiwiZXZlbnRUeXBlIiwiZXZlbnRDb3N0IiwicGxheWVycyIsImhvdXJzIiwicHJpY2VEYXRhIiwic2V0UHJpY2VEYXRhIiwiY3JlYXRlTXNnIiwibGFuZ3VhZ2UiLCJjYWxjdWxhdGVQcmljZSIsIk1hdGgiLCJmbG9vciIsInBhcnRpY2lwYW50TGFiZWwiLCJwbGF5ZXJJbWciLCJyZXR1cm5WYWx1ZSIsImhvdXJzTGFiZWwiLCJoYW5kbGVPcHRpb25DbGljayIsInVzZUVmZmVjdCIsInVzZUxhbmd1YWdlQ29udGV4dCIsInNpdGVEYXRhIiwicGFnZXMiLCJlc3RpbWF0ZSIsImZpbHRlciIsInF1ZXN0aW9uIiwibWFwIiwiaGVhZGluZzEiLCJvcHRpb24iLCJjbHN4IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiaGVhZGluZzIiLCJldmVudCIsInBhcnNlSW50IiwiaGVhZGluZzMiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0Msc0JBQWtCLEVBQUU7QUFDbEJDLGNBQVEsRUFBRSxRQURRO0FBRWxCQyxZQUFNLEVBQUU7QUFGVSxLQURpQjtBQUtyQ0MsYUFBUyxFQUFFO0FBQ1RDLGVBQVMsRUFBRSxNQURGO0FBRVRILGNBQVEsRUFBRTtBQUZELEtBTDBCO0FBU3JDSSxhQUFTLEVBQUU7QUFDVEMsWUFBTSxFQUFFO0FBREMsS0FUMEI7QUFZckNDLGtCQUFjLEVBQUU7QUFDZEMscUJBQWUsRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRHpCLEtBWnFCO0FBZXJDQyxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFLE9BREc7QUFFVlgsWUFBTSxFQUFFLE9BRkU7QUFHVlksZ0JBQVUsRUFBRTtBQUhGLEtBZnlCO0FBb0JyQ0MsZUFBVyxFQUFFO0FBQ1hDLGdCQUFVLEVBQUUsS0FERDtBQUVYQyxjQUFRLEVBQUU7QUFGQyxLQXBCd0I7QUF3QnJDQyxjQUFVLEVBQUU7QUFDVkYsZ0JBQVUsRUFBRSxLQURGO0FBRVZaLGVBQVMsRUFBRSxLQUZEO0FBR1ZlLGtCQUFZLEVBQUU7QUFISjtBQXhCeUIsR0FBTDtBQUFBLENBQU4sQ0FBNUIsQyxDQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRTtB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LFNBQUssRUFBQyxRQUEvQjtBQUF3QyxnQkFBWSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M0QyxRQUFRLENBQUNFLFFBQVQsQ0FBa0JhLEtBRG5CLEVBQzBCekIsY0FBYyxDQUFDRCxRQUFELENBRHhDLENBREYsQ0FORixDQTVIRixFQXlJRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsU0FBSyxFQUFFO0FBQUVqQyxrQkFBWSxFQUFFO0FBQWhCLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQWEsV0FBTyxFQUFFZ0MsU0FBUyxDQUFDQyxRQUFELENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBeklGLENBakJGLENBeEJGLENBREY7QUE0TEQsQ0E1UEQ7O0dBQU1qQixRO1VBQ1l0QyxTLEVBQ1l5QywwRSxFQTRER3dCLDRFOzs7S0E5RDNCM0IsUTtBQThQU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXN0aW1hdGUuYjM1MDY2YTI1NmNlOWRmYzRiMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcclxuLy8gaW1wb3J0IExvdHRpZSBmcm9tICdyZWFjdC1sb3R0aWUtcGxheWVyJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG4vLyBpbXBvcnQgZXN0aW1hdGVBbmltYXRpb24gZnJvbSAnLi4vc3JjL2FuaW1hdGlvbnMvZXN0aW1hdGUuanNvbidcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL3NyYy91aS9wYXJ0cy9Db250YWN0Rm9ybSdcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vc3JjL3VpL1BhZ2VIZWFkZXInXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBhbmltYXRpb25Db250YWluZXI6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGhlaWdodDogJzgwJScsXHJcbiAgfSxcclxuICBhbmltYXRpb246IHtcclxuICAgIG1hcmdpblRvcDogJy0yNSUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgaW1nQnV0dG9uOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9LFxyXG4gIG9wdGlvblNlbGVjdGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuICB9LFxyXG4gIHBsYXllckljb246IHtcclxuICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzJlbScsXHJcbiAgfSxcclxuICBvcHRpb25UaXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgfSxcclxuICBzdWJIZWFkaW5nOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgIG1hcmdpblRvcDogJzJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gIH0sXHJcbn0pKVxyXG4vLyBjb25zdCBhbmltYXRpb25PcHRpb25zID0ge1xyXG4vLyAgIGxvb3A6IHRydWUsXHJcbi8vICAgYXV0b3BsYXk6IHRydWUsXHJcbi8vICAgYW5pbWF0aW9uRGF0YTogZXN0aW1hdGVBbmltYXRpb24sXHJcbi8vICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4vLyAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4vLyAgICAgaW1hZ2VQcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaW4gbWVldCcsXHJcbi8vICAgfSxcclxuLy8gfVxyXG5cclxuY29uc3QgcXVlc3Rpb25zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IHtlbjpgV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP2AsIGhlOmBXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/YH0sXHJcbiAgICBzdWJ0aXRsZTogbnVsbCxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIG9wdGlvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiB7ZW46YFByaXZhdGUgJiBGYW1pbHlgLCBoZTpg157Xqdek15fXlCDXkNeVINeX15HXqNeZ151gfSxcclxuICAgICAgICBzdWJ0aXRsZTogbnVsbCxcclxuICAgICAgICBpY29uOiAnL2Fzc2V0cy9pY29uLXRlYW13b3JrLnN2ZycsXHJcbiAgICAgICAgaWNvbkFsdDogJ1ByaXZhdGUgJiBGYW1pbHknLFxyXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjb3N0OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6IHtlbjpgQ29tYXBueSBFdmVudHNgLCBoZTpg15fXkdeo15Qg15DXlSDXp9eR15XXpteUYH0sXHJcbiAgICAgICAgc3VidGl0bGU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogJy9hc3NldHMvaWNvbi1jcmVhdGl2ZS5zdmcnLFxyXG4gICAgICAgIGljb25BbHQ6ICdDb21hcG55IEV2ZW50cycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNvc3Q6IDEuMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiB7ZW46YEV4aGliaXRpb24gJiBDb25mZXJlbmNlYCwgaGU6YNeQ15nXqNeV16LXmdedINeQ15Ug15vXoNeh15nXnWB9LFxyXG4gICAgICAgIHN1YnRpdGxlOiBudWxsLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL2ljb24tZnVuLnN2ZycsXHJcbiAgICAgICAgaWNvbkFsdDogYEV4aGliaXRpb24gJiBDb25mZXJlbmNlYCxcclxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY29zdDogMS41LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dXHJcbmNvbnN0IGhvdXJzTWFya3MgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6IDEsXHJcbiAgICBsYWJlbDogJzFocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDIsXHJcbiAgICBsYWJlbDogJzJocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDMsXHJcbiAgICBsYWJlbDogJzNocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDQsXHJcbiAgICBsYWJlbDogJzRocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDUsXHJcbiAgICBsYWJlbDogJzVocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDYsXHJcbiAgICBsYWJlbDogJzZocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDcsXHJcbiAgICBsYWJlbDogJzdocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDgsXHJcbiAgICBsYWJlbDogJzhocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDksXHJcbiAgICBsYWJlbDogJzlocnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IDEwLFxyXG4gICAgbGFiZWw6ICcxMCsnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IEVzdGltYXRlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgc2V0UGFnZUluZGVjaWVzIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BsYXllckljb25JbWcsIHNldFBsYXllckljb25JbWddID0gdXNlU3RhdGUoXHJcbiAgICAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDIuc3ZnJ1xyXG4gIClcclxuICBjb25zdCBbcHJpY2VEYXRhLCBzZXRQcmljZURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZXZlbnRUeXBlOiAnJyxcclxuICAgIGV2ZW50Q29zdDogMCxcclxuICAgIHBsYXllcnM6IDIsXHJcbiAgICBob3VyczogMSxcclxuICB9KVxyXG5cclxuICBjb25zdCBjcmVhdGVNc2cgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgIHJldHVybiBsYW5ndWFnZT09PSdlbic/YEhlbGxvIFZSRnVuVGVhbSEgSSB3b3VsZCBsaWtlIG1vcmUgZGV0YWlscyBhYm91dCBhICR7XHJcbiAgICAgIHByaWNlRGF0YS5ldmVudFR5cGVcclxuICAgIH0gZXZlbnQsIHdpdGggJHtwcmljZURhdGEucGxheWVyc30gcGFydGljaXBhbnRzLCBmb3IgJHtcclxuICAgICAgcHJpY2VEYXRhLmhvdXJzXHJcbiAgICB9IGhvdXJzLiBJIGdvdCBhIHByaWNlIGVzdGltYXRlIG9mICQke2NhbGN1bGF0ZVByaWNlKCl9LiBUaGFuayB5b3UhYFxyXG4gICAgOlxyXG4gICAgYNeU15nXmSBWUkZ1blRlYW0hINeR16jXpteV16DXmSDXnNep157XldeiINek16jXmNeZ150g16DXldeh16TXmdedINei15wgJHtcclxuICAgICAgcHJpY2VEYXRhLmV2ZW50VHlwZVxyXG4gICAgfSAsINei15HXldeoICR7cHJpY2VEYXRhLnBsYXllcnN9INee16nXqteq16TXmdedLCDXnNee16nXmiAke1xyXG4gICAgICBwcmljZURhdGEuaG91cnNcclxuICAgIH0g16nXoteV16ouINen15nXkdec16rXmSDXlNei16jXm9eqINee15fXmdeoINep15wg4oKqJHtjYWxjdWxhdGVQcmljZSgpfS4g16rXldeT15Qg16jXkdeUIWBcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZVByaWNlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICBjb25zdCB7IGV2ZW50Q29zdCwgcGxheWVycywgaG91cnMgfSA9IHByaWNlRGF0YVxyXG4gICAgcmV0dXJuIGxhbmd1YWdlPT09J2VuJyA/IE1hdGguZmxvb3IoZXZlbnRDb3N0ICogcGxheWVycyAqIDI1ICogaG91cnMpIDogTWF0aC5mbG9vcihldmVudENvc3QgKiBwbGF5ZXJzICogMjUgKiBob3VycyAqIDMuNykgXHJcbiAgfVxyXG4gIGNvbnN0IHBhcnRpY2lwYW50TGFiZWwgPSB2YWx1ZSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJJbWcgPVxyXG4gICAgICB2YWx1ZSA9PT0gMVxyXG4gICAgICAgID8gJy9hc3NldHMvcGxheWVyLWljb25zLTAxLnN2ZydcclxuICAgICAgICA6IHZhbHVlID09PSAyXHJcbiAgICAgICAgPyAnL2Fzc2V0cy9wbGF5ZXItaWNvbnMtMDIuc3ZnJ1xyXG4gICAgICAgIDogdmFsdWUgPD0gNVxyXG4gICAgICAgID8gJy9hc3NldHMvcGxheWVyLWljb25zLTAzLnN2ZydcclxuICAgICAgICA6ICcvYXNzZXRzL3BsYXllci1pY29ucy0wNC5zdmcnXHJcblxyXG4gICAgLy8gc2V0UGxheWVySWNvbkltZyhwbGF5ZXJJbWcpXHJcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHZhbHVlID09PSAyMCA/ICcyMSsnIDogdmFsdWVcclxuICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaG91cnNMYWJlbCA9IHZhbHVlID0+IHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gMTAgPyAnMTArJyA6IHZhbHVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcHRpb25DbGljayA9IChpZCwgY29zdCwgdGl0bGUpID0+IHtcclxuICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgIC4uLnByaWNlRGF0YSxcclxuICAgICAgZXZlbnRUeXBlOiB0aXRsZSxcclxuICAgICAgZXZlbnRDb3N0OiBjb3N0LFxyXG4gICAgfSlcclxuICAgIHNldFNlbGVjdGVkSWQoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlSW5kZWNpZXMoJy9lc3RpbWF0ZScpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgeyBzaXRlRGF0YSwgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUhlYWRlciBoZWFkZXI9e3NpdGVEYXRhLnBhZ2VzLmVzdGltYXRlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlIGtleT0ndGl0bGUnPlByaWNlIEVzdGltYXRlIGZvciBWUiBldmVudHMgfCBWUkZ1blRlYW08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgIGtleT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBjb250ZW50PSdHZXQgYSBmcmVlIHByaWNlIGVzdGltYXRlIGZvciB5b3VyIGN1c3RvbSBWUiBFdmVudCwgdXNpbmcgb3VyIGVzdGltYXRlIGNhbGN1bGF0b3IuICdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndGl0bGUnXHJcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcbiAgICAgICAgICBjb250ZW50PSdCZXR0ZXIgdGhhbiByZWFsaXR5IFZSIGV4cGVyaWVuY2VzIHwgRnJlZSBFc3RpbWF0ZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBrZXk9J29ndXJsJ1xyXG4gICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcclxuICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vZnVudGVhbXZyLmNvbS9lc3RpbWF0ZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J2Nhbm9uaWNhbCdcclxuICAgICAgICAgIGtleT0nY2Fub25pY2FsJ1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mdW50ZWFtdnIuY29tL2VzdGltYXRlJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgey8qIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBtZD17M30+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmltYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmltYXRpb259PlxyXG4gICAgICAgICAgICAgIDxMb3R0aWVcclxuICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyU2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWluIG1lZXQnLFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZVByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pbiBtZWV0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhPXtlc3RpbWF0ZUFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIHBsYXlcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNzAlJywgaGVpZ2h0OiAnNTAlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBtZD17N30+XHJcbiAgICAgICAgICB7cXVlc3Rpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIocXVlc3Rpb24gPT4gcXVlc3Rpb24uYWN0aXZlID09PSB0cnVlKVxyXG4gICAgICAgICAgICAubWFwKHF1ZXN0aW9uID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtxdWVzdGlvbi5pZH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7c2l0ZURhdGEuZXN0aW1hdGUuaGVhZGluZzF9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5vcHRpb25zLm1hcChvcHRpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmltZ0J1dHRvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlcy5vcHRpb25TZWxlY3RlZF06IHNlbGVjdGVkSWQgPT09IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3B0aW9uQ2xpY2sob3B0aW9uLmlkLCBvcHRpb24uY29zdCwgb3B0aW9uLnRpdGxlWydlbiddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzI1MHB4JywgcGFkZGluZzogJzFlbScgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvblRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZVtsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e29wdGlvbi5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYmxhYmxhYmEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xyXG4gICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2l0ZURhdGEuZXN0aW1hdGUuaGVhZGluZzJ9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgIG1heD17MjB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRm9ybWF0PXtwYXJ0aWNpcGFudExhYmVsfVxyXG4gICAgICAgICAgICAgICAgZ2V0QXJpYVZhbHVlVGV4dD17cGFydGljaXBhbnRMYWJlbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0nZGlzY3JldGUtc2xpZGVyLWFsd2F5cydcclxuICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXJrcz17bnVsbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PSdvbidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRQcmljZURhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByaWNlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzOiBwYXJzZUludCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwbGF5ZXJJY29uSW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PSdwbGF5ZXJzJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBsYXllckljb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICB2YXJpYW50PSdoNSdcclxuICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJIZWFkaW5nfVxyXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NpdGVEYXRhLmVzdGltYXRlLmhlYWRpbmczfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4PXsxMH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cclxuICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxGb3JtYXQ9e2hvdXJzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICBnZXRBcmlhVmFsdWVUZXh0PXtob3Vyc0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdkaXNjcmV0ZS1zbGlkZXItYWx3YXlzJ1xyXG4gICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgIG1hcmtzPXtob3Vyc01hcmtzfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9J29uJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldFByaWNlRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJpY2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzOiBwYXJzZUludCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICczZW0nLCBtYXJnaW5Cb3R0b206ICczZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICB7c2l0ZURhdGEuZXN0aW1hdGUucHJpY2V9e2NhbGN1bGF0ZVByaWNlKGxhbmd1YWdlKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVlbScgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIG1lc3NhZ2U9e2NyZWF0ZU1zZyhsYW5ndWFnZSl9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvUGFnZUhlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdGltYXRlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=