webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/PagesContext.js":
/*!**************************************!*\
  !*** ./src/contexts/PagesContext.js ***!
  \**************************************/
/*! exports provided: usePagesContext, PagesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePagesContext", function() { return usePagesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesProvider", function() { return PagesProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\contexts\\PagesContext.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var createPagePathMap = function createPagePathMap(pages) {
  var map = {};
  pages.forEach(function (page) {
    map[page.path] = page;

    if (page.children.length > 0) {
      page.children.forEach(function (childPage) {
        map[childPage.path] = childPage;
      });
    }
  });
  return map;
};

var pages = [{
  name: 'Home',
  nameLang: {
    en: 'Home',
    he: 'בית'
  },
  path: '/',
  special: false,
  icon: 'HomeIcon',
  children: []
}, {
  name: 'Services',
  path: '/services',
  special: false,
  icon: 'AppsIcon',
  children: [{
    name: 'Private',
    path: '/services/private',
    children: [],
    special: false,
    icon: 'GroupIcon'
  }, {
    name: 'Company',
    path: '/services/company',
    children: [],
    special: false,
    icon: 'BusinessIcon'
  }, {
    name: 'Events',
    path: '/services/events',
    children: [],
    special: false,
    icon: 'EmojiEventsIcon'
  }]
}, {
  name: 'Revolution',
  path: '/revolution',
  special: false,
  icon: 'AllInclusiveIcon',
  children: []
}, {
  name: 'About',
  path: '/about',
  special: false,
  icon: 'InfoIcon',
  children: [],
  meta: "\n    <title key='title'>About Us - Company & Team | VRFunTeam</title>\n    <meta name=\"description\" key=\"description\" content=\"\"/>\n    "
}, {
  name: 'Contact',
  path: '/contact',
  special: false,
  icon: 'SendIcon',
  children: []
}, {
  name: 'Estimate',
  path: '/estimate',
  special: true,
  icon: 'AccountBalanceWalletIcon',
  children: []
}]; // const pagesMap = createPagePathMap(pages)

var getCurrentPageIndecies = function getCurrentPageIndecies(pagePath) {
  var indecies = [null, null];
  pages.forEach(function (page, index) {
    if (page.path === pagePath) indecies[0] = index;

    if (page.children) {
      page.children.forEach(function (childPage, childIndex) {
        if (childPage.path === pagePath) {
          indecies[0] = index;
          indecies[1] = childIndex;
        }
      });
    }
  });
  return indecies;
};

var deconstructPages = function deconstructPages() {
  var returnedPages = [];
  pages.forEach(function (page) {
    returnedPages.push(page);
    var childrenCount = page.children.length;

    while (childrenCount) {
      returnedPages.push(page.children[childrenCount - 1]);
      --childrenCount;
    }
  });
  return returnedPages;
};

var PagesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function usePagesContext() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PagesContext);
}

_s(usePagesContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var PagesProvider = function PagesProvider(_ref) {
  _s2();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getCurrentPageIndecies('/about')),
      currentPageIndecies = _useState[0],
      setCurrentPageIndecies = _useState[1];

  var setPageIndecies = function setPageIndecies(path) {
    setCurrentPageIndecies(getCurrentPageIndecies(path));
  };

  var contextValue = {
    pages: pages,
    currentPageIndecies: currentPageIndecies,
    getCurrentPageIndecies: getCurrentPageIndecies,
    setCurrentPageIndecies: setCurrentPageIndecies,
    deconstructPages: deconstructPages,
    setPageIndecies: setPageIndecies
  };
  return __jsx(PagesContext.Provider, {
    value: contextValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, children);
};

_s2(PagesProvider, "/vpqISrBRQn6uw3qnCqegvhVgls=");

_c = PagesProvider;

var _c;

$RefreshReg$(_c, "PagesProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlUGF0aE1hcCIsInBhZ2VzIiwibWFwIiwiZm9yRWFjaCIsInBhZ2UiLCJwYXRoIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZFBhZ2UiLCJuYW1lIiwibmFtZUxhbmciLCJlbiIsImhlIiwic3BlY2lhbCIsImljb24iLCJtZXRhIiwiZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInBhZ2VQYXRoIiwiaW5kZWNpZXMiLCJpbmRleCIsImNoaWxkSW5kZXgiLCJkZWNvbnN0cnVjdFBhZ2VzIiwicmV0dXJuZWRQYWdlcyIsInB1c2giLCJjaGlsZHJlbkNvdW50IiwiUGFnZXNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUGFnZXNDb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VzUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwic2V0UGFnZUluZGVjaWVzIiwiY29udGV4dFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUNqQyxNQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUNBRCxPQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDcEJGLE9BQUcsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFOLENBQUgsR0FBaUJELElBQWpCOztBQUNBLFFBQUlBLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCSCxVQUFJLENBQUNFLFFBQUwsQ0FBY0gsT0FBZCxDQUFzQixVQUFBSyxTQUFTLEVBQUk7QUFDakNOLFdBQUcsQ0FBQ00sU0FBUyxDQUFDSCxJQUFYLENBQUgsR0FBc0JH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LEdBQXJCO0FBUUEsU0FDRSxNQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRUMsWUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHN0IsUUFESCxDQURGO0FBS0QsQ0F0Qk07O0lBQU13QixhOztLQUFBQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzk4NjEwN2VhZDUzYzQxMzgxZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgY3JlYXRlUGFnZVBhdGhNYXAgPSBwYWdlcyA9PiB7XHJcbiAgY29uc3QgbWFwID0ge31cclxuICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgbWFwW3BhZ2UucGF0aF0gPSBwYWdlXHJcbiAgICBpZiAocGFnZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBhZ2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZFBhZ2UgPT4ge1xyXG4gICAgICAgIG1hcFtjaGlsZFBhZ2UucGF0aF0gPSBjaGlsZFBhZ2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBtYXBcclxufVxyXG5cclxuY29uc3QgcGFnZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbWUnLFxyXG4gICAgbmFtZUxhbmc6IHtcclxuICAgICAgZW46ICdIb21lJyxcclxuICAgICAgaGU6ICfXkdeZ16onLFxyXG4gICAgfSxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0hvbWVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXJ2aWNlcycsXHJcbiAgICBwYXRoOiAnL3NlcnZpY2VzJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0FwcHNJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUHJpdmF0ZScsXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9wcml2YXRlJyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0dyb3VwSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29tcGFueScsXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9jb21wYW55JyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0J1c2luZXNzSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRXZlbnRzJyxcclxuICAgICAgICBwYXRoOiAnL3NlcnZpY2VzL2V2ZW50cycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgICAgIGljb246ICdFbW9qaUV2ZW50c0ljb24nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSZXZvbHV0aW9uJyxcclxuICAgIHBhdGg6ICcvcmV2b2x1dGlvbicsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdBbGxJbmNsdXNpdmVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBYm91dCcsXHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0luZm9JY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG1ldGE6IGBcclxuICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGtleT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiLz5cclxuICAgIGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ29udGFjdCcsXHJcbiAgICBwYXRoOiAnL2NvbnRhY3QnLFxyXG4gICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICBpY29uOiAnU2VuZEljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VzdGltYXRlJyxcclxuICAgIHBhdGg6ICcvZXN0aW1hdGUnLFxyXG4gICAgc3BlY2lhbDogdHJ1ZSxcclxuICAgIGljb246ICdBY2NvdW50QmFsYW5jZVdhbGxldEljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbl1cclxuXHJcbi8vIGNvbnN0IHBhZ2VzTWFwID0gY3JlYXRlUGFnZVBhdGhNYXAocGFnZXMpXHJcblxyXG5jb25zdCBnZXRDdXJyZW50UGFnZUluZGVjaWVzID0gcGFnZVBhdGggPT4ge1xyXG4gIGNvbnN0IGluZGVjaWVzID0gW251bGwsIG51bGxdXHJcbiAgcGFnZXMuZm9yRWFjaCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChwYWdlLnBhdGggPT09IHBhZ2VQYXRoKSBpbmRlY2llc1swXSA9IGluZGV4XHJcbiAgICBpZiAocGFnZS5jaGlsZHJlbikge1xyXG4gICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkUGFnZSwgY2hpbGRJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZFBhZ2UucGF0aCA9PT0gcGFnZVBhdGgpIHtcclxuICAgICAgICAgIGluZGVjaWVzWzBdID0gaW5kZXhcclxuICAgICAgICAgIGluZGVjaWVzWzFdID0gY2hpbGRJbmRleFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBpbmRlY2llc1xyXG59XHJcblxyXG5jb25zdCBkZWNvbnN0cnVjdFBhZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJldHVybmVkUGFnZXMgPSBbXVxyXG4gIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICByZXR1cm5lZFBhZ2VzLnB1c2gocGFnZSlcclxuICAgIGxldCBjaGlsZHJlbkNvdW50ID0gcGFnZS5jaGlsZHJlbi5sZW5ndGhcclxuICAgIHdoaWxlIChjaGlsZHJlbkNvdW50KSB7XHJcbiAgICAgIHJldHVybmVkUGFnZXMucHVzaChwYWdlLmNoaWxkcmVuW2NoaWxkcmVuQ291bnQgLSAxXSlcclxuICAgICAgLS1jaGlsZHJlbkNvdW50XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcmV0dXJuZWRQYWdlc1xyXG59XHJcblxyXG5jb25zdCBQYWdlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VzQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChQYWdlc0NvbnRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZUluZGVjaWVzLCBzZXRDdXJyZW50UGFnZUluZGVjaWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcygnL2Fib3V0JylcclxuICApXHJcblxyXG4gIGNvbnN0IHNldFBhZ2VJbmRlY2llcyA9IHBhdGggPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhnZXRDdXJyZW50UGFnZUluZGVjaWVzKHBhdGgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgcGFnZXMsXHJcbiAgICBjdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBkZWNvbnN0cnVjdFBhZ2VzLFxyXG4gICAgc2V0UGFnZUluZGVjaWVzLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QYWdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=