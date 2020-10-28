webpackHotUpdate_N_E("pages/index",{

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
  nameLang: {
    en: 'Home',
    he: 'בית'
  },
  path: '/services',
  special: false,
  icon: 'AppsIcon',
  children: [{
    name: 'Private',
    nameLang: {
      en: 'Home',
      he: 'בית'
    },
    path: '/services/private',
    children: [],
    special: false,
    icon: 'GroupIcon'
  }, {
    name: 'Company',
    nameLang: {
      en: 'Home',
      he: 'בית'
    },
    path: '/services/company',
    children: [],
    special: false,
    icon: 'BusinessIcon'
  }, {
    name: 'Events',
    nameLang: {
      en: 'Home',
      he: 'בית'
    },
    path: '/services/events',
    children: [],
    special: false,
    icon: 'EmojiEventsIcon'
  }]
}, {
  name: 'Revolution',
  nameLang: {
    en: 'Home',
    he: 'בית'
  },
  path: '/revolution',
  special: false,
  icon: 'AllInclusiveIcon',
  children: []
}, {
  name: 'About',
  nameLang: {
    en: 'Home',
    he: 'בית'
  },
  path: '/about',
  special: false,
  icon: 'InfoIcon',
  children: [],
  meta: "\n    <title key='title'>About Us - Company & Team | VRFunTeam</title>\n    <meta name=\"description\" key=\"description\" content=\"\"/>\n    "
}, {
  name: 'Contact',
  nameLang: {
    en: 'Home',
    he: 'בית'
  },
  path: '/contact',
  special: false,
  icon: 'SendIcon',
  children: []
}, {
  name: 'Estimate',
  nameLang: {
    en: 'Home',
    he: 'בית'
  },
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
      lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlUGF0aE1hcCIsInBhZ2VzIiwibWFwIiwiZm9yRWFjaCIsInBhZ2UiLCJwYXRoIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZFBhZ2UiLCJuYW1lIiwibmFtZUxhbmciLCJlbiIsImhlIiwic3BlY2lhbCIsImljb24iLCJtZXRhIiwiZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInBhZ2VQYXRoIiwiaW5kZWNpZXMiLCJpbmRleCIsImNoaWxkSW5kZXgiLCJkZWNvbnN0cnVjdFBhZ2VzIiwicmV0dXJuZWRQYWdlcyIsInB1c2giLCJjaGlsZHJlbkNvdW50IiwiUGFnZXNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUGFnZXNDb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VzUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwic2V0UGFnZUluZGVjaWVzIiwiY29udGV4dFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUNqQyxNQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUNBRCxPQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDcEJGLE9BQUcsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFOLENBQUgsR0FBaUJELElBQWpCOztBQUNBLFFBQUlBLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCSCxVQUFJLENBQUNFLFFBQUwsQ0FBY0gsT0FBZCxDQUFzQixVQUFBSyxTQUFTLEVBQUk7QUFDakNOLFdBQUcsQ0FBQ00sU0FBUyxDQUFDSCxJQUFYLENBQUgsR0FBc0JH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QVUsQ0FBQ0osWUFBRCxDQUFqQjtBQUNEOztHQUZlRyxlOztBQUlULElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmeEIsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNTeUIsc0RBQVEsQ0FDNURmLHNCQUFzQixDQUFDLFFBQUQsQ0FEc0MsQ0FEakI7QUFBQSxNQUN0Q2dCLG1CQURzQztBQUFBLE1BQ2pCQyxzQkFEaUI7O0FBSzdDLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQTdCLElBQUksRUFBSTtBQUM5QjRCLDBCQUFzQixDQUFDakIsc0JBQXNCLENBQUNYLElBQUQsQ0FBdkIsQ0FBdEI7QUFDRCxHQUZEOztBQUlBLE1BQU04QixZQUFZLEdBQUc7QUFDbkJsQyxTQUFLLEVBQUxBLEtBRG1CO0FBRW5CK0IsdUJBQW1CLEVBQW5CQSxtQkFGbUI7QUFHbkJoQiwwQkFBc0IsRUFBdEJBLHNCQUhtQjtBQUluQmlCLDBCQUFzQixFQUF0QkEsc0JBSm1CO0FBS25CWixvQkFBZ0IsRUFBaEJBLGdCQUxtQjtBQU1uQmEsbUJBQWUsRUFBZkE7QUFObUIsR0FBckI7QUFRQSxTQUNFLE1BQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFQyxZQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c3QixRQURILENBREY7QUFLRCxDQXRCTTs7SUFBTXdCLGE7O0tBQUFBLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjdlMzM0ZmU3ZDc0NzE4NjVkZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgY3JlYXRlUGFnZVBhdGhNYXAgPSBwYWdlcyA9PiB7XHJcbiAgY29uc3QgbWFwID0ge31cclxuICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgbWFwW3BhZ2UucGF0aF0gPSBwYWdlXHJcbiAgICBpZiAocGFnZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBhZ2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZFBhZ2UgPT4ge1xyXG4gICAgICAgIG1hcFtjaGlsZFBhZ2UucGF0aF0gPSBjaGlsZFBhZ2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBtYXBcclxufVxyXG5cclxuY29uc3QgcGFnZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbWUnLFxyXG4gICAgbmFtZUxhbmc6IHtcclxuICAgICAgZW46ICdIb21lJyxcclxuICAgICAgaGU6ICfXkdeZ16onLFxyXG4gICAgfSxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0hvbWVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXJ2aWNlcycsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ0hvbWUnLFxyXG4gICAgICBoZTogJ9eR15nXqicsXHJcbiAgICB9LFxyXG4gICAgcGF0aDogJy9zZXJ2aWNlcycsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdBcHBzSWNvbicsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ByaXZhdGUnLFxyXG4gICAgICAgIG5hbWVMYW5nOiB7XHJcbiAgICAgICAgICBlbjogJ0hvbWUnLFxyXG4gICAgICAgICAgaGU6ICfXkdeZ16onLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9wcml2YXRlJyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0dyb3VwSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29tcGFueScsXHJcbiAgICAgICAgbmFtZUxhbmc6IHtcclxuICAgICAgICAgIGVuOiAnSG9tZScsXHJcbiAgICAgICAgICBoZTogJ9eR15nXqicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXRoOiAnL3NlcnZpY2VzL2NvbXBhbnknLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgICAgICBpY29uOiAnQnVzaW5lc3NJY29uJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdFdmVudHMnLFxyXG4gICAgICAgIG5hbWVMYW5nOiB7XHJcbiAgICAgICAgICBlbjogJ0hvbWUnLFxyXG4gICAgICAgICAgaGU6ICfXkdeZ16onLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9ldmVudHMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgICAgICBpY29uOiAnRW1vamlFdmVudHNJY29uJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV2b2x1dGlvbicsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ0hvbWUnLFxyXG4gICAgICBoZTogJ9eR15nXqicsXHJcbiAgICB9LFxyXG4gICAgcGF0aDogJy9yZXZvbHV0aW9uJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0FsbEluY2x1c2l2ZUljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0Fib3V0JyxcclxuICAgIG5hbWVMYW5nOiB7XHJcbiAgICAgIGVuOiAnSG9tZScsXHJcbiAgICAgIGhlOiAn15HXmdeqJyxcclxuICAgIH0sXHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0luZm9JY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG1ldGE6IGBcclxuICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGtleT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiLz5cclxuICAgIGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ29udGFjdCcsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ0hvbWUnLFxyXG4gICAgICBoZTogJ9eR15nXqicsXHJcbiAgICB9LFxyXG4gICAgcGF0aDogJy9jb250YWN0JyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ1NlbmRJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFc3RpbWF0ZScsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ0hvbWUnLFxyXG4gICAgICBoZTogJ9eR15nXqicsXHJcbiAgICB9LFxyXG4gICAgcGF0aDogJy9lc3RpbWF0ZScsXHJcbiAgICBzcGVjaWFsOiB0cnVlLFxyXG4gICAgaWNvbjogJ0FjY291bnRCYWxhbmNlV2FsbGV0SWNvbicsXHJcbiAgICBjaGlsZHJlbjogW10sXHJcbiAgfSxcclxuXVxyXG5cclxuLy8gY29uc3QgcGFnZXNNYXAgPSBjcmVhdGVQYWdlUGF0aE1hcChwYWdlcylcclxuXHJcbmNvbnN0IGdldEN1cnJlbnRQYWdlSW5kZWNpZXMgPSBwYWdlUGF0aCA9PiB7XHJcbiAgY29uc3QgaW5kZWNpZXMgPSBbbnVsbCwgbnVsbF1cclxuICBwYWdlcy5mb3JFYWNoKChwYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKHBhZ2UucGF0aCA9PT0gcGFnZVBhdGgpIGluZGVjaWVzWzBdID0gaW5kZXhcclxuICAgIGlmIChwYWdlLmNoaWxkcmVuKSB7XHJcbiAgICAgIHBhZ2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRQYWdlLCBjaGlsZEluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGNoaWxkUGFnZS5wYXRoID09PSBwYWdlUGF0aCkge1xyXG4gICAgICAgICAgaW5kZWNpZXNbMF0gPSBpbmRleFxyXG4gICAgICAgICAgaW5kZWNpZXNbMV0gPSBjaGlsZEluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGluZGVjaWVzXHJcbn1cclxuXHJcbmNvbnN0IGRlY29uc3RydWN0UGFnZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmV0dXJuZWRQYWdlcyA9IFtdXHJcbiAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIHJldHVybmVkUGFnZXMucHVzaChwYWdlKVxyXG4gICAgbGV0IGNoaWxkcmVuQ291bnQgPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgd2hpbGUgKGNoaWxkcmVuQ291bnQpIHtcclxuICAgICAgcmV0dXJuZWRQYWdlcy5wdXNoKHBhZ2UuY2hpbGRyZW5bY2hpbGRyZW5Db3VudCAtIDFdKVxyXG4gICAgICAtLWNoaWxkcmVuQ291bnRcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByZXR1cm5lZFBhZ2VzXHJcbn1cclxuXHJcbmNvbnN0IFBhZ2VzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnZXNDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFBhZ2VzQ29udGV4dClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlSW5kZWNpZXMsIHNldEN1cnJlbnRQYWdlSW5kZWNpZXNdID0gdXNlU3RhdGUoXHJcbiAgICBnZXRDdXJyZW50UGFnZUluZGVjaWVzKCcvYWJvdXQnKVxyXG4gIClcclxuXHJcbiAgY29uc3Qgc2V0UGFnZUluZGVjaWVzID0gcGF0aCA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzKGdldEN1cnJlbnRQYWdlSW5kZWNpZXMocGF0aCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICBwYWdlcyxcclxuICAgIGN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBnZXRDdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIGRlY29uc3RydWN0UGFnZXMsXHJcbiAgICBzZXRQYWdlSW5kZWNpZXMsXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BhZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==