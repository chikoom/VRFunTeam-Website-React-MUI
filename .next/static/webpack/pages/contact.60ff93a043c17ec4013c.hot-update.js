webpackHotUpdate_N_E("pages/contact",{

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
  name: {
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
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlUGF0aE1hcCIsInBhZ2VzIiwibWFwIiwiZm9yRWFjaCIsInBhZ2UiLCJwYXRoIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZFBhZ2UiLCJuYW1lIiwiZW4iLCJoZSIsInNwZWNpYWwiLCJpY29uIiwibWV0YSIsImdldEN1cnJlbnRQYWdlSW5kZWNpZXMiLCJwYWdlUGF0aCIsImluZGVjaWVzIiwiaW5kZXgiLCJjaGlsZEluZGV4IiwiZGVjb25zdHJ1Y3RQYWdlcyIsInJldHVybmVkUGFnZXMiLCJwdXNoIiwiY2hpbGRyZW5Db3VudCIsIlBhZ2VzQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVBhZ2VzQ29udGV4dCIsInVzZUNvbnRleHQiLCJQYWdlc1Byb3ZpZGVyIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZUluZGVjaWVzIiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInNldFBhZ2VJbmRlY2llcyIsImNvbnRleHRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQUQsT0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3BCRixPQUFHLENBQUNFLElBQUksQ0FBQ0MsSUFBTixDQUFILEdBQWlCRCxJQUFqQjs7QUFDQSxRQUFJQSxJQUFJLENBQUNFLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM1QkgsVUFBSSxDQUFDRSxRQUFMLENBQWNILE9BQWQsQ0FBc0IsVUFBQUssU0FBUyxFQUFJO0FBQ2pDTixXQUFHLENBQUNNLFNBQVMsQ0FBQ0gsSUFBWCxDQUFILEdBQXNCRyxTQUF0QjtBQUNE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UUFBZDtBQUF1QixTQUFLLEVBQUVDLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzVCLFFBREgsQ0FERjtBQUtELENBdEJNOztJQUFNdUIsYTs7S0FBQUEsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LjYwZmY5M2EwNDNjMTdlYzQwMTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNyZWF0ZVBhZ2VQYXRoTWFwID0gcGFnZXMgPT4ge1xyXG4gIGNvbnN0IG1hcCA9IHt9XHJcbiAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIG1hcFtwYWdlLnBhdGhdID0gcGFnZVxyXG4gICAgaWYgKHBhZ2UuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goY2hpbGRQYWdlID0+IHtcclxuICAgICAgICBtYXBbY2hpbGRQYWdlLnBhdGhdID0gY2hpbGRQYWdlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbWFwXHJcbn1cclxuXHJcbmNvbnN0IHBhZ2VzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgZW46ICdIb21lJyxcclxuICAgICAgaGU6ICfXkdeZ16onLFxyXG4gICAgfSxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0hvbWVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXJ2aWNlcycsXHJcbiAgICBwYXRoOiAnL3NlcnZpY2VzJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0FwcHNJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUHJpdmF0ZScsXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9wcml2YXRlJyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0dyb3VwSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29tcGFueScsXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9jb21wYW55JyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0J1c2luZXNzSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRXZlbnRzJyxcclxuICAgICAgICBwYXRoOiAnL3NlcnZpY2VzL2V2ZW50cycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgICAgIGljb246ICdFbW9qaUV2ZW50c0ljb24nLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSZXZvbHV0aW9uJyxcclxuICAgIHBhdGg6ICcvcmV2b2x1dGlvbicsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdBbGxJbmNsdXNpdmVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBYm91dCcsXHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0luZm9JY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG1ldGE6IGBcclxuICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGtleT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiLz5cclxuICAgIGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ29udGFjdCcsXHJcbiAgICBwYXRoOiAnL2NvbnRhY3QnLFxyXG4gICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICBpY29uOiAnU2VuZEljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VzdGltYXRlJyxcclxuICAgIHBhdGg6ICcvZXN0aW1hdGUnLFxyXG4gICAgc3BlY2lhbDogdHJ1ZSxcclxuICAgIGljb246ICdBY2NvdW50QmFsYW5jZVdhbGxldEljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbl1cclxuXHJcbi8vIGNvbnN0IHBhZ2VzTWFwID0gY3JlYXRlUGFnZVBhdGhNYXAocGFnZXMpXHJcblxyXG5jb25zdCBnZXRDdXJyZW50UGFnZUluZGVjaWVzID0gcGFnZVBhdGggPT4ge1xyXG4gIGNvbnN0IGluZGVjaWVzID0gW251bGwsIG51bGxdXHJcbiAgcGFnZXMuZm9yRWFjaCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChwYWdlLnBhdGggPT09IHBhZ2VQYXRoKSBpbmRlY2llc1swXSA9IGluZGV4XHJcbiAgICBpZiAocGFnZS5jaGlsZHJlbikge1xyXG4gICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkUGFnZSwgY2hpbGRJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZFBhZ2UucGF0aCA9PT0gcGFnZVBhdGgpIHtcclxuICAgICAgICAgIGluZGVjaWVzWzBdID0gaW5kZXhcclxuICAgICAgICAgIGluZGVjaWVzWzFdID0gY2hpbGRJbmRleFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBpbmRlY2llc1xyXG59XHJcblxyXG5jb25zdCBkZWNvbnN0cnVjdFBhZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJldHVybmVkUGFnZXMgPSBbXVxyXG4gIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICByZXR1cm5lZFBhZ2VzLnB1c2gocGFnZSlcclxuICAgIGxldCBjaGlsZHJlbkNvdW50ID0gcGFnZS5jaGlsZHJlbi5sZW5ndGhcclxuICAgIHdoaWxlIChjaGlsZHJlbkNvdW50KSB7XHJcbiAgICAgIHJldHVybmVkUGFnZXMucHVzaChwYWdlLmNoaWxkcmVuW2NoaWxkcmVuQ291bnQgLSAxXSlcclxuICAgICAgLS1jaGlsZHJlbkNvdW50XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcmV0dXJuZWRQYWdlc1xyXG59XHJcblxyXG5jb25zdCBQYWdlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VzQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChQYWdlc0NvbnRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZUluZGVjaWVzLCBzZXRDdXJyZW50UGFnZUluZGVjaWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcygnL2Fib3V0JylcclxuICApXHJcblxyXG4gIGNvbnN0IHNldFBhZ2VJbmRlY2llcyA9IHBhdGggPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhnZXRDdXJyZW50UGFnZUluZGVjaWVzKHBhdGgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgcGFnZXMsXHJcbiAgICBjdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBkZWNvbnN0cnVjdFBhZ2VzLFxyXG4gICAgc2V0UGFnZUluZGVjaWVzLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QYWdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=