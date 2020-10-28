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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlUGF0aE1hcCIsInBhZ2VzIiwibWFwIiwiZm9yRWFjaCIsInBhZ2UiLCJwYXRoIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZFBhZ2UiLCJuYW1lIiwibmFtZUxhbmciLCJlbiIsImhlIiwic3BlY2lhbCIsImljb24iLCJtZXRhIiwiZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInBhZ2VQYXRoIiwiaW5kZWNpZXMiLCJpbmRleCIsImNoaWxkSW5kZXgiLCJkZWNvbnN0cnVjdFBhZ2VzIiwicmV0dXJuZWRQYWdlcyIsInB1c2giLCJjaGlsZHJlbkNvdW50IiwiUGFnZXNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUGFnZXNDb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VzUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlSW5kZWNpZXMiLCJzZXRDdXJyZW50UGFnZUluZGVjaWVzIiwic2V0UGFnZUluZGVjaWVzIiwiY29udGV4dFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUNqQyxNQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUNBRCxPQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDcEJGLE9BQUcsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFOLENBQUgsR0FBaUJELElBQWpCOztBQUNBLFFBQUlBLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCSCxVQUFJLENBQUNFLFFBQUwsQ0FBY0gsT0FBZCxDQUFzQixVQUFBSyxTQUFTLEVBQUk7QUFDakNOLFdBQUcsQ0FBQ00sU0FBUyxDQUFDSCxJQUFYLENBQUgsR0FBc0JH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LEdBQXJCO0FBUUEsU0FDRSxNQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRUMsWUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHN0IsUUFESCxDQURGO0FBS0QsQ0F0Qk07O0lBQU13QixhOztLQUFBQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5ODYxMDdlYWQ1M2M0MTM4MWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNyZWF0ZVBhZ2VQYXRoTWFwID0gcGFnZXMgPT4ge1xyXG4gIGNvbnN0IG1hcCA9IHt9XHJcbiAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIG1hcFtwYWdlLnBhdGhdID0gcGFnZVxyXG4gICAgaWYgKHBhZ2UuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goY2hpbGRQYWdlID0+IHtcclxuICAgICAgICBtYXBbY2hpbGRQYWdlLnBhdGhdID0gY2hpbGRQYWdlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbWFwXHJcbn1cclxuXHJcbmNvbnN0IHBhZ2VzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdIb21lJyxcclxuICAgIG5hbWVMYW5nOiB7XHJcbiAgICAgIGVuOiAnSG9tZScsXHJcbiAgICAgIGhlOiAn15HXmdeqJyxcclxuICAgIH0sXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdIb21lSWNvbicsXHJcbiAgICBjaGlsZHJlbjogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnU2VydmljZXMnLFxyXG4gICAgcGF0aDogJy9zZXJ2aWNlcycsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdBcHBzSWNvbicsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ByaXZhdGUnLFxyXG4gICAgICAgIHBhdGg6ICcvc2VydmljZXMvcHJpdmF0ZScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgICAgIGljb246ICdHcm91cEljb24nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NvbXBhbnknLFxyXG4gICAgICAgIHBhdGg6ICcvc2VydmljZXMvY29tcGFueScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgICAgIGljb246ICdCdXNpbmVzc0ljb24nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0V2ZW50cycsXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9ldmVudHMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgICAgICBpY29uOiAnRW1vamlFdmVudHNJY29uJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUmV2b2x1dGlvbicsXHJcbiAgICBwYXRoOiAnL3Jldm9sdXRpb24nLFxyXG4gICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICBpY29uOiAnQWxsSW5jbHVzaXZlSWNvbicsXHJcbiAgICBjaGlsZHJlbjogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWJvdXQnLFxyXG4gICAgcGF0aDogJy9hYm91dCcsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdJbmZvSWNvbicsXHJcbiAgICBjaGlsZHJlbjogW10sXHJcbiAgICBtZXRhOiBgXHJcbiAgICA8dGl0bGUga2V5PSd0aXRsZSc+QWJvdXQgVXMgLSBDb21wYW55ICYgVGVhbSB8IFZSRnVuVGVhbTwvdGl0bGU+XHJcbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBrZXk9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIi8+XHJcbiAgICBgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbnRhY3QnLFxyXG4gICAgcGF0aDogJy9jb250YWN0JyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ1NlbmRJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFc3RpbWF0ZScsXHJcbiAgICBwYXRoOiAnL2VzdGltYXRlJyxcclxuICAgIHNwZWNpYWw6IHRydWUsXHJcbiAgICBpY29uOiAnQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG5dXHJcblxyXG4vLyBjb25zdCBwYWdlc01hcCA9IGNyZWF0ZVBhZ2VQYXRoTWFwKHBhZ2VzKVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyA9IHBhZ2VQYXRoID0+IHtcclxuICBjb25zdCBpbmRlY2llcyA9IFtudWxsLCBudWxsXVxyXG4gIHBhZ2VzLmZvckVhY2goKHBhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAocGFnZS5wYXRoID09PSBwYWdlUGF0aCkgaW5kZWNpZXNbMF0gPSBpbmRleFxyXG4gICAgaWYgKHBhZ2UuY2hpbGRyZW4pIHtcclxuICAgICAgcGFnZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZFBhZ2UsIGNoaWxkSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGRQYWdlLnBhdGggPT09IHBhZ2VQYXRoKSB7XHJcbiAgICAgICAgICBpbmRlY2llc1swXSA9IGluZGV4XHJcbiAgICAgICAgICBpbmRlY2llc1sxXSA9IGNoaWxkSW5kZXhcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gaW5kZWNpZXNcclxufVxyXG5cclxuY29uc3QgZGVjb25zdHJ1Y3RQYWdlcyA9ICgpID0+IHtcclxuICBjb25zdCByZXR1cm5lZFBhZ2VzID0gW11cclxuICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgcmV0dXJuZWRQYWdlcy5wdXNoKHBhZ2UpXHJcbiAgICBsZXQgY2hpbGRyZW5Db3VudCA9IHBhZ2UuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICB3aGlsZSAoY2hpbGRyZW5Db3VudCkge1xyXG4gICAgICByZXR1cm5lZFBhZ2VzLnB1c2gocGFnZS5jaGlsZHJlbltjaGlsZHJlbkNvdW50IC0gMV0pXHJcbiAgICAgIC0tY2hpbGRyZW5Db3VudFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJldHVybmVkUGFnZXNcclxufVxyXG5cclxuY29uc3QgUGFnZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdlc0NvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoUGFnZXNDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZXNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFBhZ2VJbmRlY2llcywgc2V0Q3VycmVudFBhZ2VJbmRlY2llc10gPSB1c2VTdGF0ZShcclxuICAgIGdldEN1cnJlbnRQYWdlSW5kZWNpZXMoJy9hYm91dCcpXHJcbiAgKVxyXG5cclxuICBjb25zdCBzZXRQYWdlSW5kZWNpZXMgPSBwYXRoID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMoZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyhwYXRoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgIHBhZ2VzLFxyXG4gICAgY3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIGdldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgZGVjb25zdHJ1Y3RQYWdlcyxcclxuICAgIHNldFBhZ2VJbmRlY2llcyxcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGFnZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9