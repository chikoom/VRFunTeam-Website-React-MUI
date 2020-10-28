module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/contexts/LangContext */ "./src/contexts/LangContext.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_ui_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/ui/Header/Header */ "./src/ui/Header/Header.jsx");
/* harmony import */ var _src_ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ui/Footer/Footer */ "./src/ui/Footer/Footer.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_functions_gtag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/functions/gtag */ "./src/functions/gtag.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeComplete', url => _src_functions_gtag__WEBPACK_IMPORTED_MODULE_9__["pageview"](url));
function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_3__["PagesProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_src_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__["ThemeContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_4__["LangProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_src_ui_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx(_src_ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })))));
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/anchor-has-content */






const NextComposed = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function NextComposed(props, ref) {
  const {
    as,
    href
  } = props,
        other = _objectWithoutProperties(props, ["as", "href"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: href,
    as: as,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    ref: ref
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  })));
});
NextComposed.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}; // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked
  } = props,
        other = _objectWithoutProperties(props, ["href", "activeClassName", "className", "innerRef", "naked"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  });

  if (naked) {
    return __jsx(NextComposed, _extends({
      className: className,
      ref: innerRef,
      href: href
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }
    }));
  }

  return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    component: NextComposed,
    className: className,
    ref: innerRef,
    href: href
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }));
}

Link.propTypes = {
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  naked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => __jsx(Link, _extends({}, props, {
  innerRef: ref,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 49
  }
}))));

/***/ }),

/***/ "./src/contexts/LangContext.js":
/*!*************************************!*\
  !*** ./src/contexts/LangContext.js ***!
  \*************************************/
/*! exports provided: useLanguageContext, LangProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguageContext", function() { return useLanguageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangProvider", function() { return LangProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site_data */ "./src/contexts/site_data.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\contexts\\LangContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const languages = ['en', 'he'];
const LangContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function useLanguageContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LangContext);
}
function LangProvider({
  children
}) {
  const {
    0: language,
    1: setLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('en');

  const changeLanguageTo = langString => {
    console.log('Changing language to ', langString);
    setLanguage(langString);
  };

  const contextValue = {
    siteData: _site_data__WEBPACK_IMPORTED_MODULE_1__["siteData"][language],
    language,
    languages,
    changeLanguageTo
  };
  return __jsx(LangContext.Provider, {
    value: contextValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./src/contexts/PagesContext.js":
/*!**************************************!*\
  !*** ./src/contexts/PagesContext.js ***!
  \**************************************/
/*! exports provided: usePagesContext, PagesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePagesContext", function() { return usePagesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesProvider", function() { return PagesProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\contexts\\PagesContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const createPagePathMap = pages => {
  const map = {};
  pages.forEach(page => {
    map[page.path] = page;

    if (page.children.length > 0) {
      page.children.forEach(childPage => {
        map[childPage.path] = childPage;
      });
    }
  });
  return map;
};

const pages = [{
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
    en: 'Services',
    he: 'אירועים'
  },
  path: '/services',
  special: false,
  icon: 'AppsIcon',
  children: [{
    name: 'Private',
    nameLang: {
      en: 'Private',
      he: 'פרטיים'
    },
    path: '/services/private',
    children: [],
    special: false,
    icon: 'GroupIcon'
  }, {
    name: 'Company',
    nameLang: {
      en: 'Company',
      he: 'חברות'
    },
    path: '/services/company',
    children: [],
    special: false,
    icon: 'BusinessIcon'
  }, {
    name: 'Events',
    nameLang: {
      en: 'Events',
      he: 'כנסים'
    },
    path: '/services/events',
    children: [],
    special: false,
    icon: 'EmojiEventsIcon'
  }]
}, {
  name: 'Revolution',
  nameLang: {
    en: 'Revolution',
    he: 'המהפכה'
  },
  path: '/revolution',
  special: false,
  icon: 'AllInclusiveIcon',
  children: []
}, {
  name: 'About',
  nameLang: {
    en: 'About',
    he: 'עלינו'
  },
  path: '/about',
  special: false,
  icon: 'InfoIcon',
  children: [],
  meta: `
    <title key='title'>About Us - Company & Team | VRFunTeam</title>
    <meta name="description" key="description" content=""/>
    `
}, {
  name: 'Contact',
  nameLang: {
    en: 'Contact',
    he: 'יצירת קשר'
  },
  path: '/contact',
  special: false,
  icon: 'SendIcon',
  children: []
}, {
  name: 'Estimate',
  nameLang: {
    en: 'Estimate',
    he: 'הערכת מחיר'
  },
  path: '/estimate',
  special: true,
  icon: 'AccountBalanceWalletIcon',
  children: []
}]; // const pagesMap = createPagePathMap(pages)

const getCurrentPageIndecies = pagePath => {
  const indecies = [null, null];
  pages.forEach((page, index) => {
    if (page.path === pagePath) indecies[0] = index;

    if (page.children) {
      page.children.forEach((childPage, childIndex) => {
        if (childPage.path === pagePath) {
          indecies[0] = index;
          indecies[1] = childIndex;
        }
      });
    }
  });
  return indecies;
};

const deconstructPages = () => {
  const returnedPages = [];
  pages.forEach(page => {
    returnedPages.push(page);
    let childrenCount = page.children.length;

    while (childrenCount) {
      returnedPages.push(page.children[childrenCount - 1]);
      --childrenCount;
    }
  });
  return returnedPages;
};

const PagesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function usePagesContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PagesContext);
}
const PagesProvider = ({
  children
}) => {
  const {
    0: currentPageIndecies,
    1: setCurrentPageIndecies
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getCurrentPageIndecies('/about'));

  const setPageIndecies = path => {
    setCurrentPageIndecies(getCurrentPageIndecies(path));
  };

  const contextValue = {
    pages,
    currentPageIndecies,
    getCurrentPageIndecies,
    setCurrentPageIndecies,
    deconstructPages,
    setPageIndecies
  };
  return __jsx(PagesContext.Provider, {
    value: contextValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/*! exports provided: useUpdateTheme, ThemeContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateTheme", function() { return useUpdateTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContextProvider", function() { return ThemeContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/theme */ "./src/ui/theme.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\contexts\\ThemeContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ThemeUpdateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function useUpdateTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeUpdateContext);
}
function ThemeContextProvider({
  children
}) {
  const {
    0: isDarkTheme,
    1: setIsDarkTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: currentTheme,
    1: setCurrentTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
    light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"]
  });
  const themes = {
    dark: {
      en: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
      he: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme_he"]
    },
    light: {
      en: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"],
      he: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme_he"]
    },
    he: {
      dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme_he"],
      light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme_he"]
    },
    en: {
      dark: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["darkTheme"],
      light: _ui_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"]
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const changeThemeLanguage = language => {
    setCurrentTheme(themes[language]);
  };

  return __jsx(ThemeUpdateContext.Provider, {
    value: {
      toggleTheme,
      isDarkTheme,
      changeThemeLanguage
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: isDarkTheme ? currentTheme.dark : currentTheme.light,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, children));
}

/***/ }),

/***/ "./src/contexts/site_data.js":
/*!***********************************!*\
  !*** ./src/contexts/site_data.js ***!
  \***********************************/
/*! exports provided: siteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteData", function() { return siteData; });
const siteData = {
  en: {
    pages: {
      home: 'Home',
      about: 'About Us',
      revolution: 'The Revolution',
      contact: 'Contact Us',
      estimate: 'Price Estimate',
      services: 'Our Services',
      private: 'Family & Friends',
      company: 'Companies & Teams',
      events: 'Conferences & Exhibitions',
      blog: 'Blog'
    },
    heroHeader: `
    Team Experience in Virtual Reality
      `,
    heroText: `
      Virtual Reality events are stirring the world - the experience is emmersive and mind blowing, with no cables or clumsy equipment. Take your team, family or friends to an unforgettable jurney of consolidation, creative thinking and pure fun.
      `,
    megaPoints: [`The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `Suitable for groups of 2-12 participants, in all ages (6-80).`, `Professional guidence by our emphatic instructors.`, `Our place or yours? We will be happy to advice you. Just contact us.`],
    priceEstimate: `
      Price Estimate
    `,
    learnMore: `
      Learn More
    `,
    theTeam: {
      heading: 'The Team'
    },
    weAre: {
      heading: 'We Are VRFunTeam',
      text1: `
      A team of tech geeks and training instructors, who loves to escort
      groups in conseptual trips into the Virtual Reality world. Our
      mentors will guide you hand by hand into the new world, and will
      know to take a step back when you'll be flying on your own.
              `,
      text2: `
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The
      point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here,
      content here', making it look like readable English. Many desktop
      publishing packages and web page editors now use Lorem Ipsum as
      their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy.
              `
    },
    faq: {
      title: 'FAQ',
      data: [{
        title: `Where does all this FUN happenes?`,
        text: `We will be glad to arrive at your place for consulation and location
        impression. Together we'll decide if the activity will be at your
        place or at one of our designated studios across town.`
      }, {
        title: `What is the price for all this FUN?`,
        text: `Our prices changed according to the group size, type of event and
        the location. You're welcome to contact us for a quote, or 
        <a href='/estimate'>estimate the price using our calculator</a>.`
      }, {
        title: `What if not all of our group is into VR?`,
        text: `All is good, not everyone must transform into another world. We can
        offer activities combining human interaction, use of computer/tv
        screens or trough a mobile app.`
      }, {
        title: `What kind of technology are you using?`,
        text: `We arrive at your place with Oculus Quest goggels, by Facebook. One
        of the most advanced VR hadset in the market, which allows 4K
        experience without the need of cables or heavy equipment.`
      }]
    },
    contactForm: {
      heading: `We're eager to make you fly`,
      name: `Name`,
      phone: `Phone`,
      email: `Email`,
      Text: `How can we help you?`,
      submit: `SEND MESSAGE`
    },
    estimate: {
      heading1: 'Choose your type of event',
      heading2: 'How many players?',
      heading3: 'How long would you play?',
      price: 'Price Est: $'
    },
    services: {
      private: {
        title: `Family & Friends`,
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

        `,
        points: [`The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`]
      },
      company: {
        title: `Company & Teams`,
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

        `,
        points: [`The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`]
      },
      events: {
        title: `Exhibitions & Conferences`,
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

        `,
        points: [`The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`, `The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.`]
      }
    },
    articles: [{
      video: 'cmZ-4BsCoIA',
      title: `Oculus Quest - The most advanced VR goggles`,
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `Oculus Quest - The most advanced VR goggles`,
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `Oculus Quest - The most advanced VR goggles`,
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `Oculus Quest - The most advanced VR goggles`,
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `Oculus Quest - The most advanced VR goggles`,
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `Oculus Quest - The most advanced VR goggles`,
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
    }],
    qoutes: [{
      content: `It is a long established fact that a reader will be distracted
        by the readable content of a page when looking at its layout.`,
      subContent: `Idan Baron | SEO Chikoom inc`
    }, {
      content: `Mow Mow Mow.`,
      subContent: `Kundofoni | SEO FancyFeast inc`
    }, {
      content: `lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `,
      subContent: `Moshiko MushMush | SEO DigiDigi inc`
    }],
    copyright: 'Dev&Des by Chikoom'
  },
  he: {
    pages: {
      home: 'בית',
      about: 'עלינו',
      revolution: 'המהפכה',
      contact: 'יצירת קשר',
      estimate: 'הערכת מחיר',
      services: 'אירועים מכל סוג',
      private: 'משפחה וחברים',
      company: 'חברות וקבוצות',
      events: 'כנסים ותערוכות',
      blog: 'בלוג'
    },
    heroHeader: `חוויה קבוצתית מעולם אחר`,
    heroText: `
    מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה. מסווגים טלוויזיה מורחב חלוקה הטכנולוגיה כלים בחיפוש מאז לפי הטכנולוגיה. 
      `,
    megaPoints: [`ציוד ה-VR המתקדם ביותר בעולם, ללא כבלים או ציוד מסורב. הטמעה והתאקלמות מהירה במיוחד`, `מתאים לקבוצות של 2-12 משתתפים, בכל הגילאים (6-80)`, `הדרכה וליווי מקצועי מהמדריכים הרגישים `, `אצלנו או אצלכם? צרו איתנו קשר ונשמח לייעץ לכם`],
    priceEstimate: `
        מחשבון מחיר
      `,
    learnMore: `
        מידע נוסף
      `,
    theTeam: {
      heading: 'הצוות'
    },
    weAre: {
      heading: 'אנחנו VRFunTeam',
      text1: `
      מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה. מסווגים טלוויזיה מורחב חלוקה הטכנולוגיה כלים בחיפוש מאז לפי הטכנולוגיה. 
        `,
      text2: `
      מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה. מסווגים טלוויזיה מורחב חלוקה הטכנולוגיה כלים בחיפוש מאז לפי הטכנולוגיה. 
        `
    },
    faq: {
      title: 'שאלות נפוצות',
      data: [{
        title: `איפה קורה כל הכיף הזה?`,
        text: `We will be glad to arrive at your place for consulation and location
        impression. Together we'll decide if the activity will be at your
        place or at one of our designated studios across town.`
      }, {
        title: `מה המחיר של כל הכיף הזה`,
        text: `Our prices changed according to the group size, type of event and
        the location. You're welcome to contact us for a quote, or{' '}
        <a href='/estimate'>estimate the price using our calculator</a>.`
      }, {
        title: `מה עושים כשלא כל חברי הצוות בקטע של VR`,
        text: `All is good, not everyone must transform into another world. We can
        offer activities combining human interaction, use of computer/tv
        screens or trough a mobile app.`
      }, {
        title: `באיזו טכנולוגיה אתם משתמשים?`,
        text: `We arrive at your place with Oculus Quest goggels, by Facebook. One
        of the most advanced VR hadset in the market, which allows 4K
        experience without the need of cables or heavy equipment.`
      }]
    },
    contactForm: {
      heading: `אנחנו מחכים לשמוע ממך`,
      name: `שם מלא`,
      phone: `טלפון`,
      email: `אימייל`,
      text: `איך נוכל לעזור לך?`,
      submit: `שליחת הודעה`
    },
    estimate: {
      heading1: 'בחרו את סוג האירוע',
      heading2: 'כמה משתתפים?',
      heading3: 'מה משך הזמן?',
      price: 'הערכת מחיר: ₪'
    },
    services: {
      private: {
        title: `משפחה וחברים`,
        text: ` מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.

        `,
        points: [`טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`]
      },
      company: {
        title: `קבוצות וחברות`,
        text: ` מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה..

        `,
        points: [`טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`]
      },
      events: {
        title: `אירועים וכנסים`,
        text: ` מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.

        `,
        points: [`טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`, `טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה.`]
      }
    },
    articles: [{
      video: 'cmZ-4BsCoIA',
      title: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`,
      text: `מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`,
      text: `מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`,
      text: `מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`,
      text: `מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`,
      text: `מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`
    }, {
      video: 'cmZ-4BsCoIA',
      title: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`,
      text: `מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`
    }],
    qoutes: [{
      content: `It is a long established fact that a reader will be distracted
        by the readable content of a page when looking at its layout.`,
      subContent: `עידן בראון | מנכ"ל Chikoom.com`
    }, {
      content: `Mow Mow Mow.`,
      subContent: `קונדופוני | מנהל כוח אדם | םנסי פיסט`
    }, {
      content: `lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `,
      subContent: `Moshiko MushMush | SEO DigiDigi inc`
    }],
    copyright: 'עיצוב ופיתוח Chikoom'
  }
};

/***/ }),

/***/ "./src/functions/gtag.js":
/*!*******************************!*\
  !*** ./src/functions/gtag.js ***!
  \*******************************/
/*! exports provided: GA_TRACKING_ID, pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_TRACKING_ID", function() { return GA_TRACKING_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
const GA_TRACKING_ID = 'G-ZZVGT0FZWP';
const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};
const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./src/ui/ContactButton.jsx":
/*!**********************************!*\
  !*** ./src/ui/ContactButton.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_SpeedDial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/SpeedDial */ "@material-ui/lab/SpeedDial");
/* harmony import */ var _material_ui_lab_SpeedDial__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_SpeedDial__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/SpeedDialIcon */ "@material-ui/lab/SpeedDialIcon");
/* harmony import */ var _material_ui_lab_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/SpeedDialAction */ "@material-ui/lab/SpeedDialAction");
/* harmony import */ var _material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "@material-ui/icons/Instagram");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "@material-ui/icons/WhatsApp");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Call */ "@material-ui/icons/Call");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Link */ "@material-ui/icons/Link");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ */ "@material-ui/core/");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\ContactButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(theme => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'fixed',
    bottom: '0',
    right: '0'
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  socialGrid: {
    position: 'absolute',
    bottom: '3em',
    right: '1em',
    width: 'auto'
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    color: '#fafafa'
  }
}));
function ContactButton() {
  const pageUrl = 'https://www.funteamvr.com';
  const classes = useStyles();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: snakOpen,
    1: setSnakOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hidden,
    1: setHidden
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const theme = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__["useTheme"])();
  const matches = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_14__["useMediaQuery"])(theme.breakpoints.down('md'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Hello World',
        url: window.location.href
      }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing:', error));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      document.execCommand('copy');
      setSnakOpen(true);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, matches ? __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_SpeedDial__WEBPACK_IMPORTED_MODULE_5___default.a, {
    ariaLabel: "SpeedDial tooltip example",
    className: classes.speedDial,
    hidden: hidden,
    icon: __jsx(_material_ui_lab_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }),
    onClose: handleClose,
    onOpen: handleOpen,
    open: open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, navigator.clipboard ? __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
    key: "Copy-Link",
    icon: __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 23
      }
    }),
    tooltipTitle: "CopyLink",
    tooltipOpen: true,
    onClick: handleCopy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }) : null, navigator.share ? __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
    key: "Share",
    icon: __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }),
    tooltipTitle: "Share",
    tooltipOpen: true,
    onClick: handleShare,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }) : null, __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
    key: "Call",
    icon: __jsx(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }),
    tooltipTitle: "Call",
    tooltipOpen: true,
    onClick: handleClose,
    FabProps: {
      component: 'a',
      href: 'tel:0528228640'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx(_material_ui_lab_SpeedDialAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
    key: "WhatsApp",
    icon: __jsx(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }),
    tooltipTitle: "WhatsApp",
    tooltipOpen: true,
    onClick: handleClose,
    FabProps: {
      component: 'a',
      href: 'https://wa.me/972528228640'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    open: snakOpen,
    autoHideDuration: 2000,
    onClose: () => setSnakOpen(false),
    message: `Copied: ${pageUrl}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  })) : __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    className: classes.socialGrid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    "aria-label": "facebook",
    component: 'a',
    href: 'https://facebook.com',
    target: '_blank',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.socialIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    "aria-label": "instagram",
    component: 'a',
    href: 'https://instagram.com',
    target: '_blank',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.socialIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    "aria-label": "whatsapp",
    component: 'a',
    href: 'https://wa.me/972528228640',
    target: '_blank',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.socialIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  })))));
}

/***/ }),

/***/ "./src/ui/DarkModeButton.jsx":
/*!***********************************!*\
  !*** ./src/ui/DarkModeButton.jsx ***!
  \***********************************/
/*! exports provided: DarkModeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeButton", function() { return DarkModeButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Brightness4Outlined */ "@material-ui/icons/Brightness4Outlined");
/* harmony import */ var _material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\DarkModeButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));
const DarkModeButton = () => {
  const classes = useStyles();
  const darkTheme = Object(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["useUpdateTheme"])();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: darkTheme.toggleTheme,
    "aria-label": "delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/ui/DarkModeListSwitch.jsx":
/*!***************************************!*\
  !*** ./src/ui/DarkModeListSwitch.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Brightness4Outlined */ "@material-ui/icons/Brightness4Outlined");
/* harmony import */ var _material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\DarkModeListSwitch.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  darkListItem: {
    fontSize: '1em'
  }
}));

const DarkModeListSwitch = props => {
  const classes = useStyles();
  const darkTheme = Object(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["useUpdateTheme"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Brightness4Outlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.darkListItem,
    id: "switch-list-label-dark",
    disableTypography: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, darkTheme.isDarkTheme ? 'Light' : 'Dark'), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    edge: "end",
    onChange: darkTheme.toggleTheme,
    checked: darkTheme.isDarkTheme,
    inputProps: {
      'aria-labelledby': 'switch-list-label-dark'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DarkModeListSwitch);

/***/ }),

/***/ "./src/ui/Footer/Copyright.jsx":
/*!*************************************!*\
  !*** ./src/ui/Footer/Copyright.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Footer\\Copyright.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  copyfooter: {
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    position: 'relative',
    color: '#fafafa',
    paddingTop: '0.75em',
    paddingBottom: '0.75em'
  }
}));

const Copyright = props => {
  const classes = useStyles();
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const {
    siteData
  } = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_3__["useLanguageContext"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.copyfooter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, siteData.copyright, " |")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    style: {
      display: 'grid',
      justifyContent: 'center',
      marginLeft: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.idanbaron.com",
    target: "_blank",
    style: {
      display: 'grid'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    width: "15px",
    height: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M49 3a47 47 0 00-14 91 2 2 0 003-1l4-19a12 12 0 01-4-5 13 13 0 01-1-6 12 12 0 011-6 12 12 0 015-4 13 13 0 016-2 13 13 0 017 2 12 12 0 014 4 13 13 0 012 6 19 19 0 01-1 7l-4 10-7 16v1h1a47 47 0 0046-45C99 24 77 2 49 3zm11 30a13 13 0 01-4 5 13 13 0 01-13 0 13 13 0 01-5-5 12 12 0 010-12 13 13 0 015-5 12 12 0 0113 0 13 13 0 014 5 12 12 0 010 12z",
    fill: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    style: {
      display: 'grid',
      justifyContent: 'center',
      marginLeft: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://github.com/chikoom",
    target: "_blank",
    style: {
      display: 'grid'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    width: "15px",
    height: "15px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M50 5a47 47 0 00-15 92c2 0 3-1 3-3v-8c-13 3-16-6-16-6-2-5-5-7-5-7-5-3 0-3 0-3 5 1 7 5 7 5 5 7 11 5 14 4a10 10 0 013-6c-10-1-21-5-21-24a18 18 0 014-12c0-1-2-6 1-13 0 0 4-1 13 5a45 45 0 0123 0c9-6 13-5 13-5 3 7 1 12 1 13a18 18 0 015 12c0 19-11 23-22 24 2 1 3 4 3 8v13c0 2 1 3 4 3A47 47 0 0050 5z",
    fill: "#fff",
    fillRule: "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./src/ui/Footer/Footer.jsx":
/*!**********************************!*\
  !*** ./src/ui/Footer/Footer.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContactButton */ "./src/ui/ContactButton.jsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Copyright */ "./src/ui/Footer/Copyright.jsx");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Footer\\Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: theme.zIndex.modal - 1,
    position: 'relative',
    color: '#fafafa'
  },
  gridColumn: {
    margin: '3em'
  },
  gridLink: {
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none',
    color: '#fafafa',
    '&:visited': {
      color: '#fafafa'
    }
  }
}));

const GridLink = props => {
  const classes = useStyles();
  const {
    path,
    text
  } = props;
  const {
    getCurrentPageIndecies,
    setCurrentPageIndecies
  } = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])();

  const handleLinkClick = path => {
    setCurrentPageIndecies(getCurrentPageIndecies(path));
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    component: _Link__WEBPACK_IMPORTED_MODULE_4__["default"],
    href: path,
    onClick: () => {
      handleLinkClick(path);
    },
    className: classes.gridLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, text);
};

const Footer = props => {
  const classes = useStyles();
  const {
    siteData,
    language
  } = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_8__["useLanguageContext"])();
  return __jsx("footer", {
    className: classes.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.gridColumn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/',
    text: siteData.pages.home,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/about',
    text: siteData.pages.about,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/contact',
    text: siteData.pages.contact,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.gridColumn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/services/private',
    text: siteData.pages.private,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/company',
    text: siteData.pages.company,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/services/events',
    text: siteData.pages.events,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.gridColumn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(GridLink, {
    path: '/revolution',
    text: siteData.pages.revolution,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: '/revolution',
    text: siteData.pages.blog,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.gridColumn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    direction: "column",
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "VRFunTeam"), __jsx(GridLink, {
    path: 'tel:972528228640',
    text: '052-8228640',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }), __jsx(GridLink, {
    path: 'mailto:studio@vrfunteam.com',
    text: 'studio@vrfunteam.com',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  })))), __jsx(_Copyright__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx(_ContactButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/ui/Header/DrawerMenu.jsx":
/*!**************************************!*\
  !*** ./src/ui/Header/DrawerMenu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "@material-ui/core/");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Apps */ "@material-ui/icons/Apps");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AllInclusive */ "@material-ui/icons/AllInclusive");
/* harmony import */ var _material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceWallet */ "@material-ui/icons/AccountBalanceWallet");
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Group */ "@material-ui/icons/Group");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Business */ "@material-ui/icons/Business");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/EmojiEvents */ "@material-ui/icons/EmojiEvents");
/* harmony import */ var _material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _DarkModeListSwitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../DarkModeListSwitch */ "./src/ui/DarkModeListSwitch.jsx");
/* harmony import */ var _functions_gtag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../functions/gtag */ "./src/functions/gtag.js");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Header\\DrawerMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















 // const iconMapping = {
//   SendIcon,HomeIcon,AppsIcon,AllInclusiveIcon,InfoIcon,AccountBalanceWalletIcon,GroupIcon,BusinessIcon,EmojiEventsIcon
// }

const iconMapping = {
  SendIcon: __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }),
  HomeIcon: __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }),
  AppsIcon: __jsx(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }),
  AllInclusiveIcon: __jsx(_material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }),
  InfoIcon: __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }),
  AccountBalanceWalletIcon: __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }),
  GroupIcon: __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 14
    }
  }),
  BusinessIcon: __jsx(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }),
  EmojiEventsIcon: __jsx(_material_ui_icons_EmojiEvents__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 20
    }
  })
};
const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
    marginBottom: '3em'
  }),
  menuIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: '#fafafa'
  },
  drawerItem: _objectSpread(_objectSpread({}, theme.typography.tab), {}, {
    opacity: 0.7
  }),
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  specialDrawerItem: {
    backgroundColor: theme.palette.secondary.main
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
    color: '#fafafa'
  },
  drawerTextIcon: {
    color: '#fafafa'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const DrawerMenu = props => {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: drawerOpen,
    1: setDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const classes = useStyles();
  const {
    pages,
    currentPageIndecies,
    setCurrentPageIndecies
  } = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_16__["usePagesContext"])();
  const iOS =  false && false;

  const handleTabChange = (e, value) => {
    setCurrentPageIndecies([value, null]);
  };

  const handleSubMenuClick = (event, parentIndex, index) => {
    setMenuOpen(false);
    setCurrentPageIndecies([parentIndex, index]);
  };

  const {
    siteData,
    language
  } = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_19__["useLanguageContext"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    className: classes.menuIconContainer,
    onClick: () => setDrawerOpen(!drawerOpen),
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.drawerIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["SwipeableDrawer"], {
    disableBackdropTransition: !iOS,
    disableDiscovery: iOS,
    open: drawerOpen,
    onClose: () => setDrawerOpen(false),
    onOpen: () => setDrawerOpen(true),
    classes: {
      paper: classes.drawer
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbarMargin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    className: classes.root,
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(_DarkModeListSwitch__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }), pages.map((page, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: page.path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    divider: true,
    button: true,
    component: _Link__WEBPACK_IMPORTED_MODULE_1__["default"],
    href: page.path,
    selected: index === currentPageIndecies[0],
    onClick: event => {
      setDrawerOpen(false);
      handleTabChange(event, index);
      Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_18__["event"])({
        category: 'Menu Buttons',
        action: `Mobile Drawer ${page.name} Click`,
        label: 'Website Actions',
        value: '0'
      });
    },
    className: page.special ? classes.specialDrawerItem : '',
    classes: {
      selected: classes.drawerItemSelected
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    className: classes.drawerTextIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, iconMapping[page.icon]), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.drawerItem,
    disableTypography: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, page.nameLang[language]), page.children.length > 0 ? menuOpen ? __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    className: classes.menuIconContainer,
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      setMenuOpen(false);
    },
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  })) : __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    className: classes.menuIconContainer,
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
      setMenuOpen(true);
    },
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  })) : null), page.children.length > 0 ? __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default.a, {
    in: menuOpen,
    timeout: "auto",
    unmountOnExit: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "div",
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 19
    }
  }, page.children.map((childPage, childIndex) => __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    divider: true,
    button: true,
    key: childPage.path,
    component: _Link__WEBPACK_IMPORTED_MODULE_1__["default"],
    href: childPage.path,
    selected: childIndex === currentPageIndecies[1] && index === currentPageIndecies[0],
    onClick: event => {
      setDrawerOpen(false);
      handleTabChange(event, index);
      handleSubMenuClick(event, index, childIndex);
      Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_18__["event"])({
        category: 'Menu Buttons',
        action: `Mobile Drawer ${childPage.name} Click`,
        label: 'Website Actions',
        value: '0'
      });
    },
    className: classes.nested,
    classes: {
      selected: classes.drawerItemSelected
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    className: classes.drawerTextIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, iconMapping[childPage.icon]), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    className: classes.drawerItem,
    disableTypography: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 25
    }
  }, childPage.nameLang[language]))))) : null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (DrawerMenu);

/***/ }),

/***/ "./src/ui/Header/Header.jsx":
/*!**********************************!*\
  !*** ./src/ui/Header/Header.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _DrawerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawerMenu */ "./src/ui/Header/DrawerMenu.jsx");
/* harmony import */ var _helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/ui-helpers */ "./src/ui/helpers/ui-helpers.jsx");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ */ "@material-ui/core/");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabsMenu */ "./src/ui/Header/TabsMenu.jsx");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Header\\Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
    marginBottom: '2.4em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.4em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em'
    }
  }),
  headerText: {
    marginLeft: '1em'
  },
  logo: {
    height: '7em',
    paddingTop: '1em',
    paddingBottom: '1em',
    [theme.breakpoints.down('md')]: {
      height: '6em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em'
    }
  },
  logoButton: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const Header = props => {
  const classes = useStyles();
  const {
    setCurrentPageIndecies
  } = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_5__["usePagesContext"])();
  const theme = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const matches = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(theme.breakpoints.down('md'));

  const handleTabChange = (e, value) => {
    setCurrentPageIndecies([value, null]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_helpers_ui_helpers__WEBPACK_IMPORTED_MODULE_3__["ElevationScroll"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["AppBar"], {
    position: "fixed",
    className: classes.appBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    style: {
      paddingLeft: '2%',
      paddingRight: '2%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: () => handleTabChange('_', 0),
    className: classes.logoButton,
    component: _Link__WEBPACK_IMPORTED_MODULE_1__["default"],
    href: "/",
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: classes.logo,
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 562 485",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, `.cls-3{fill:none;stroke:#7bade2;stroke-miterlimit:10;stroke-width:2px}.cls-4{fill:#0058a8}`)), __jsx("path", {
    fill: "#e6e6e6",
    d: "M281 3L3 481h278V3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("path", {
    fill: "#f0f0f0",
    d: "M281 3l278 478H281V3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx("path", {
    className: "cls-3",
    d: "M281 3l276 479H4L281 3zM281 3v166M4 482l167-70M558 482l-160-67",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("path", {
    className: "cls-4",
    d: "M249 219l15-51h18l-19 66h-28l-19-66h18zM285 234v-66h35q12 0 17 4t5 16q0 11-3 15t-11 6q13 1 13 12v13h-17v-10q0-8-8-8h-13v18zm18-33h13q5 0 6-2t2-8a15 15 0 00-1-6l-6-2h-14zM186 326v-66h47v15h-29v13h27v14h-27v24zM241 260h18v43q0 6 2 7c1 1 4 2 9 2q7 0 8-2c2-1 2-3 2-6v-44h18v44q0 13-6 18t-21 5q-17 0-23-4t-7-18zM309 260h30l19 50v-50h18v66h-30l-19-49v49h-18zM140 353h52v15h-17v51h-18v-51h-17zM198 419v-66h48v14h-30v12h28v12h-28v13h31v15zM252 419l20-66h27l20 66h-18l-3-12h-24l-3 12zm26-25h16l-8-28zM324 353h28l13 41 12-42h29v66h-18v-46l-15 47h-16l-15-47v47h-18z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: classes.headerText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "VRFunTeam")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "subtitle1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Better Than Reality"))), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Hidden"], {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(_TabsMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Hidden"], {
    lgUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_DrawerMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    name: "toolbar-spacing",
    className: classes.toolbarMargin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/ui/Header/TabsMenu.jsx":
/*!************************************!*\
  !*** ./src/ui/Header/TabsMenu.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Link */ "./src/Link.js");
/* harmony import */ var _DarkModeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DarkModeButton */ "./src/ui/DarkModeButton.jsx");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ */ "@material-ui/core/");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_PagesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _functions_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/gtag */ "./src/functions/gtag.js");
/* harmony import */ var _LanguageButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LanguageButton */ "./src/ui/LanguageButton.jsx");
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/LangContext */ "./src/contexts/LangContext.js");
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\Header\\TabsMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
    marginBottom: '3em'
  }),
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: _objectSpread(_objectSpread({}, theme.typography.tab), {}, {
    minWidth: 10,
    marginLeft: '10px'
  }),
  button: _objectSpread(_objectSpread({}, theme.typography.estimate), {}, {
    borderRadius: '50px',
    marginLeft: '50px',
    color: 'white'
  }),
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '0px',
    zIndex: 1302
  },
  menuItem: _objectSpread(_objectSpread({}, theme.typography.tab), {}, {
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    },
    '&.Mui-selected': {
      opacity: 1
    }
  })
}));

const TabsMenu = props => {
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const classes = useStyles();
  const {
    pages,
    currentPageIndecies,
    setCurrentPageIndecies
  } = Object(_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_4__["usePagesContext"])();

  const handleTabChange = (e, value) => {// setCurrentPageIndecies([value, null])
  };

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = event => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpen(false);
    }
  };

  const handleSubMenuClick = (event, parentIndex, index) => {
    setAnchorEl(null);
    setMenuOpen(false); // setCurrentPageIndecies([parentIndex, index])
  };

  const {
    siteData,
    language
  } = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_7__["useLanguageContext"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    value: currentPageIndecies[0],
    onChange: handleTabChange,
    className: classes.tabContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, pages.map(page => {
    const hasChildren = page.children.length;
    return __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      "aria-owns": hasChildren && anchorEl ? `menu-${page.name}` : undefined,
      "aria-haspopup": hasChildren && anchorEl ? true : undefined,
      onMouseOver: hasChildren ? event => handleMenuClick(event) : undefined,
      label: page.nameLang[language],
      className: classes.tab,
      component: _Link__WEBPACK_IMPORTED_MODULE_1__["default"],
      href: page.path,
      key: page.path,
      onClick: () => Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_5__["event"])({
        category: 'Menu Buttons',
        action: `Desktop Tabs ${page.name} Click`,
        label: 'Website Actions',
        value: '0'
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    });
  })), pages.map((page, index) => {
    const hasChildren = page.children.length;
    return hasChildren && anchorEl ? __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Popper"], {
      open: menuOpen,
      anchorEl: anchorEl,
      role: undefined,
      transition: true,
      disablePortal: true,
      key: page.path,
      keepMounted: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, ({
      TransitionProps,
      placement
    }) => __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Grow"], _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      classes: {
        root: classes.menu
      },
      elevation: 0,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ClickAwayListener"], {
      onClickAway: handleMenuClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["MenuList"], {
      disablePadding: true,
      onMouseLeave: handleMenuClose,
      autoFocusItem: false,
      id: `menu-${page.name}`,
      onKeyDown: handleListKeyDown,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 21
      }
    }, page.children.map((childPage, childIndex) => __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: childPage.path,
      onClick: event => {
        handleMenuClose();
        handleTabChange(event, index);
        handleSubMenuClick(event, index, childIndex);
        Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_5__["event"])({
          category: 'Menu Buttons',
          action: `Desktop Tabs ${childPage.name} Click`,
          label: 'Website Actions',
          value: '0'
        });
      },
      component: _Link__WEBPACK_IMPORTED_MODULE_1__["default"],
      href: childPage.path,
      classes: {
        root: classes.menuItem
      },
      selected: childIndex === currentPageIndecies[1] && index === currentPageIndecies[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, childPage.nameLang[language]))))))) : '';
  }), __jsx(_DarkModeButton__WEBPACK_IMPORTED_MODULE_2__["DarkModeButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }), __jsx(_LanguageButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Button"], {
    component: _Link__WEBPACK_IMPORTED_MODULE_1__["default"],
    href: "/estimate",
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: () => Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_5__["event"])({
      category: 'Estimate',
      action: 'Desktop Tabs Special Estimate Click',
      label: 'Website Actions',
      value: '0'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, siteData.priceEstimate));
};

/* harmony default export */ __webpack_exports__["default"] = (TabsMenu);

/***/ }),

/***/ "./src/ui/LanguageButton.jsx":
/*!***********************************!*\
  !*** ./src/ui/LanguageButton.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/LangContext */ "./src/contexts/LangContext.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Link */ "./src/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\LanguageButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  flag: {
    width: '30px'
  }
}));

const LanguageButton = props => {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    language,
    languages,
    changeLanguageTo
  } = Object(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_4__["useLanguageContext"])();
  const {
    changeThemeLanguage
  } = Object(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_7__["useUpdateTheme"])();
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = lang => {
    setAnchorEl(null);
    changeLanguageTo(lang);
    changeThemeLanguage(lang);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: classes.flag,
    src: `./assets/flags/${language}.svg`,
    alt: `${language} flag`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    style: {
      zIndex: '9999'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, languages.map(savedLanguage => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: savedLanguage,
    component: _Link__WEBPACK_IMPORTED_MODULE_5__["default"],
    href: `${router.pathname}?ln=${savedLanguage}`,
    onClick: () => handleSelect(savedLanguage),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: classes.flag,
    src: `./assets/flags/${savedLanguage}.svg`,
    alt: `${savedLanguage} flag`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (LanguageButton);

/***/ }),

/***/ "./src/ui/helpers/ui-helpers.jsx":
/*!***************************************!*\
  !*** ./src/ui/helpers/ui-helpers.jsx ***!
  \***************************************/
/*! exports provided: shortenText, ElevationScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenText", function() { return shortenText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationScroll", function() { return ElevationScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


 // import { withRouter } from 'react-router-dom'

function shortenText(string, numOfChars) {
  return string.substring(0, numOfChars) + '...';
}
function ElevationScroll(props) {
  const {
    children
  } = props;
  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default()({
    disableHysteresis: true,
    threshold: 0
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}
ElevationScroll.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired
}; // class ScrollToTop extends PureComponent {
//   componentDidMount = () => window.scrollTo(0, 0)
//   componentDidUpdate = prevProps => {
//     if (this.props.location !== prevProps.location) window.scrollTo(0, 0)
//   }
//   render = () => this.props.children
// }
// export default withRouter(ScrollToTop)

/***/ }),

/***/ "./src/ui/theme.js":
/*!*************************!*\
  !*** ./src/ui/theme.js ***!
  \*************************/
/*! exports provided: lightTheme, lightTheme_he, darkTheme, darkTheme_he */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme_he", function() { return lightTheme_he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme_he", function() { return darkTheme_he; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const vrPink = '#d84987';
const vrBlue = '#306ca0';
const he_typography = {
  typography: {
    h1: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h2: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h3: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h4: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h5: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    h6: {
      fontWeight: 900,
      fontFamily: 'Rubik'
    },
    tab: {
      fontFamily: 'Rubik',
      fontWeight: '700',
      fontSize: '1rem'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none'
    },
    listIcon: {
      fontSize: '2em',
      transform: 'rotate(-15deg)',
      textShadow: '0px 0px 23px #555'
    }
  }
};
const en_typography = {
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
    },
    listIcon: {
      fontSize: '2em',
      transform: 'rotate(-15deg)',
      textShadow: '0px 0px 23px #555'
    }
  }
};
const lightPallete = {
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
  }
};
const darkPallete = {
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
      default: '#303030'
    }
  }
};
const themeAll = {
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
};
let dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, en_typography), lightPallete), themeAll));
dLightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(dLightTheme);
const lightTheme = dLightTheme;
let dLightTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, he_typography), lightPallete), themeAll));
dLightTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(dLightTheme_he);
const lightTheme_he = dLightTheme_he;
let dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, en_typography), darkPallete), themeAll));
dDarkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(dDarkTheme);
const darkTheme = dDarkTheme;
let dDarkTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])(_objectSpread(_objectSpread(_objectSpread({}, he_typography), darkPallete), themeAll));
dDarkTheme_he = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(dDarkTheme_he);
const darkTheme_he = dDarkTheme_he;

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/":
/*!*************************************!*\
  !*** external "@material-ui/core/" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/icons/AccountBalanceWallet":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/AccountBalanceWallet" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalanceWallet");

/***/ }),

/***/ "@material-ui/icons/AllInclusive":
/*!**************************************************!*\
  !*** external "@material-ui/icons/AllInclusive" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AllInclusive");

/***/ }),

/***/ "@material-ui/icons/Apps":
/*!******************************************!*\
  !*** external "@material-ui/icons/Apps" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "@material-ui/icons/Brightness4Outlined":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/Brightness4Outlined" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brightness4Outlined");

/***/ }),

/***/ "@material-ui/icons/Business":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Business" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ "@material-ui/icons/Call":
/*!******************************************!*\
  !*** external "@material-ui/icons/Call" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "@material-ui/icons/EmojiEvents":
/*!*************************************************!*\
  !*** external "@material-ui/icons/EmojiEvents" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EmojiEvents");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "@material-ui/icons/Link":
/*!******************************************!*\
  !*** external "@material-ui/icons/Link" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Link");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "@material-ui/icons/WhatsApp":
/*!**********************************************!*\
  !*** external "@material-ui/icons/WhatsApp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WhatsApp");

/***/ }),

/***/ "@material-ui/lab/SpeedDial":
/*!*********************************************!*\
  !*** external "@material-ui/lab/SpeedDial" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDial");

/***/ }),

/***/ "@material-ui/lab/SpeedDialAction":
/*!***************************************************!*\
  !*** external "@material-ui/lab/SpeedDialAction" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialAction");

/***/ }),

/***/ "@material-ui/lab/SpeedDialIcon":
/*!*************************************************!*\
  !*** external "@material-ui/lab/SpeedDialIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialIcon");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9QYWdlc0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvc2l0ZV9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZ3RhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQ29udGFjdEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0RhcmtNb2RlQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvRGFya01vZGVMaXN0U3dpdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvRm9vdGVyL0NvcHlyaWdodC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9IZWFkZXIvRHJhd2VyTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9IZWFkZXIvVGFic01lbnUuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9MYW5ndWFnZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2hlbHBlcnMvdWktaGVscGVycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3RoZW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCYWxhbmNlV2FsbGV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FsbEluY2x1c2l2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3M0T3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnVzaW5lc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FbW9qaUV2ZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmZvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TaGFyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvU3BlZWREaWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9TcGVlZERpYWxBY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1NwZWVkRGlhbEljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwidmFsdWUiLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJndGFnIiwiTXlBcHAiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiTmV4dENvbXBvc2VkIiwiZm9yd2FyZFJlZiIsIm90aGVyIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYm9vbCIsImFjdGl2ZUNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVByb3BzIiwiaW5uZXJSZWYiLCJuYWtlZCIsInVzZVJvdXRlciIsImNsc3giLCJmdW5jIiwibGFuZ3VhZ2VzIiwiTGFuZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGFuZ3VhZ2VDb250ZXh0IiwidXNlQ29udGV4dCIsIkxhbmdQcm92aWRlciIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VTdGF0ZSIsImNoYW5nZUxhbmd1YWdlVG8iLCJsYW5nU3RyaW5nIiwibG9nIiwiY29udGV4dFZhbHVlIiwic2l0ZURhdGEiLCJjcmVhdGVQYWdlUGF0aE1hcCIsIm1hcCIsImZvckVhY2giLCJsZW5ndGgiLCJjaGlsZFBhZ2UiLCJuYW1lTGFuZyIsImVuIiwiaGUiLCJzcGVjaWFsIiwiaWNvbiIsIm1ldGEiLCJnZXRDdXJyZW50UGFnZUluZGVjaWVzIiwicGFnZVBhdGgiLCJpbmRlY2llcyIsImluZGV4IiwiY2hpbGRJbmRleCIsImRlY29uc3RydWN0UGFnZXMiLCJyZXR1cm5lZFBhZ2VzIiwiY2hpbGRyZW5Db3VudCIsIlBhZ2VzQ29udGV4dCIsInVzZVBhZ2VzQ29udGV4dCIsIlBhZ2VzUHJvdmlkZXIiLCJjdXJyZW50UGFnZUluZGVjaWVzIiwic2V0Q3VycmVudFBhZ2VJbmRlY2llcyIsInNldFBhZ2VJbmRlY2llcyIsIlRoZW1lVXBkYXRlQ29udGV4dCIsInVzZVVwZGF0ZVRoZW1lIiwiVGhlbWVDb250ZXh0UHJvdmlkZXIiLCJpc0RhcmtUaGVtZSIsInNldElzRGFya1RoZW1lIiwiY3VycmVudFRoZW1lIiwic2V0Q3VycmVudFRoZW1lIiwiZGFyayIsImRhcmtUaGVtZSIsImxpZ2h0IiwibGlnaHRUaGVtZSIsInRoZW1lcyIsImRhcmtUaGVtZV9oZSIsImxpZ2h0VGhlbWVfaGUiLCJ0b2dnbGVUaGVtZSIsImNoYW5nZVRoZW1lTGFuZ3VhZ2UiLCJob21lIiwiYWJvdXQiLCJyZXZvbHV0aW9uIiwiY29udGFjdCIsImVzdGltYXRlIiwic2VydmljZXMiLCJwcml2YXRlIiwiY29tcGFueSIsImJsb2ciLCJoZXJvSGVhZGVyIiwiaGVyb1RleHQiLCJtZWdhUG9pbnRzIiwicHJpY2VFc3RpbWF0ZSIsImxlYXJuTW9yZSIsInRoZVRlYW0iLCJoZWFkaW5nIiwid2VBcmUiLCJ0ZXh0MSIsInRleHQyIiwiZmFxIiwidGl0bGUiLCJ0ZXh0IiwiY29udGFjdEZvcm0iLCJwaG9uZSIsImVtYWlsIiwiVGV4dCIsInN1Ym1pdCIsImhlYWRpbmcxIiwiaGVhZGluZzIiLCJoZWFkaW5nMyIsInByaWNlIiwicG9pbnRzIiwiYXJ0aWNsZXMiLCJ2aWRlbyIsInFvdXRlcyIsImNvbnRlbnQiLCJzdWJDb250ZW50IiwiY29weXJpZ2h0IiwiR0FfVFJBQ0tJTkdfSUQiLCJwYWdldmlldyIsInBhZ2VfcGF0aCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsInRyYW5zZm9ybSIsImZsZXhHcm93IiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInNwZWVkRGlhbCIsInNwYWNpbmciLCJzb2NpYWxHcmlkIiwid2lkdGgiLCJzb2NpYWxJY29uIiwiY29sb3IiLCJDb250YWN0QnV0dG9uIiwicGFnZVVybCIsImNsYXNzZXMiLCJvcGVuIiwic2V0T3BlbiIsInNuYWtPcGVuIiwic2V0U25ha09wZW4iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ1c2VUaGVtZSIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hhcmUiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsImxvY2F0aW9uIiwidGhlbiIsImNhdGNoIiwiaGFuZGxlQ29weSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImV4ZWNDb21tYW5kIiwiY29tcG9uZW50IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibWFyZ2luIiwiRGFya01vZGVCdXR0b24iLCJkYXJrTGlzdEl0ZW0iLCJmb250U2l6ZSIsIkRhcmtNb2RlTGlzdFN3aXRjaCIsImNvcHlmb290ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiQ29weXJpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsImZvb3RlciIsIm1haW4iLCJ6SW5kZXgiLCJtb2RhbCIsImdyaWRDb2x1bW4iLCJncmlkTGluayIsImZvbnRGYW1pbHkiLCJ0eXBvZ3JhcGh5IiwidGV4dERlY29yYXRpb24iLCJHcmlkTGluayIsImhhbmRsZUxpbmtDbGljayIsIkZvb3RlciIsImljb25NYXBwaW5nIiwiU2VuZEljb24iLCJIb21lSWNvbiIsIkFwcHNJY29uIiwiQWxsSW5jbHVzaXZlSWNvbiIsIkluZm9JY29uIiwiQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIiwiR3JvdXBJY29uIiwiQnVzaW5lc3NJY29uIiwiRW1vamlFdmVudHNJY29uIiwidG9vbGJhck1hcmdpbiIsIm1peGlucyIsInRvb2xiYXIiLCJtYXJnaW5Cb3R0b20iLCJtZW51SWNvbkNvbnRhaW5lciIsImRyYXdlciIsImRyYXdlckl0ZW0iLCJ0YWIiLCJvcGFjaXR5IiwiZHJhd2VySXRlbVNlbGVjdGVkIiwic3BlY2lhbERyYXdlckl0ZW0iLCJzZWNvbmRhcnkiLCJkcmF3ZXJJY29uIiwiZHJhd2VyVGV4dEljb24iLCJuZXN0ZWQiLCJwYWRkaW5nTGVmdCIsIkRyYXdlck1lbnUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJpT1MiLCJoYW5kbGVUYWJDaGFuZ2UiLCJoYW5kbGVTdWJNZW51Q2xpY2siLCJwYXJlbnRJbmRleCIsInBhcGVyIiwiR0FldmVudCIsInNlbGVjdGVkIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcHBCYXIiLCJoZWFkZXJUZXh0IiwibG9nbyIsImxvZ29CdXR0b24iLCJwYWRkaW5nIiwiSGVhZGVyIiwicGFkZGluZ1JpZ2h0IiwidGFiQ29udGFpbmVyIiwibWluV2lkdGgiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJtZW51IiwibWVudUl0ZW0iLCJUYWJzTWVudSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVNZW51Q2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTGlzdEtleURvd24iLCJoYXNDaGlsZHJlbiIsInVuZGVmaW5lZCIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsImZsYWciLCJMYW5ndWFnZUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VsZWN0IiwibGFuZyIsIkJvb2xlYW4iLCJzYXZlZExhbmd1YWdlIiwic2hvcnRlblRleHQiLCJudW1PZkNoYXJzIiwic3Vic3RyaW5nIiwiRWxldmF0aW9uU2Nyb2xsIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImNsb25lRWxlbWVudCIsImVsZXZhdGlvbiIsImVsZW1lbnQiLCJ2clBpbmsiLCJ2ckJsdWUiLCJoZV90eXBvZ3JhcGh5IiwiaDEiLCJmb250V2VpZ2h0IiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInRleHRUcmFuc2Zvcm0iLCJsaXN0SWNvbiIsInRleHRTaGFkb3ciLCJlbl90eXBvZ3JhcGh5IiwibGlnaHRQYWxsZXRlIiwiY29tbW9uIiwiZGlnaVBpbmsiLCJkaWdpQmx1ZSIsImRhcmtQYWxsZXRlIiwidHlwZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwidGhlbWVBbGwiLCJvdmVycmlkZXMiLCJNdWlJbnB1dExhYmVsIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlEaXZpZGVyIiwibWFyZ2luVG9wIiwiTXVpQWNjb3JkaW9uIiwiZExpZ2h0VGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJkTGlnaHRUaGVtZV9oZSIsImREYXJrVGhlbWUiLCJkRGFya1RoZW1lX2hlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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QUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRoZW1lQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dCdcbmltcG9ydCB7IFBhZ2VzUHJvdmlkZXIgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvUGFnZXNDb250ZXh0J1xuaW1wb3J0IHsgTGFuZ1Byb3ZpZGVyIH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvdWkvSGVhZGVyL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL3VpL0Zvb3Rlci9Gb290ZXInXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9zcmMvZnVuY3Rpb25zL2d0YWcnXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdXJsID0+IGd0YWcucGFnZXZpZXcodXJsKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHNcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VzUHJvdmlkZXI+XG4gICAgICAgIDxUaGVtZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8TGFuZ1Byb3ZpZGVyPlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9MYW5nUHJvdmlkZXI+XG4gICAgICAgIDwvVGhlbWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8L1BhZ2VzUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTXVpTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgTmV4dENvbXBvc2VkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOZXh0Q29tcG9zZWQocHJvcHMsIHJlZikge1xuICBjb25zdCB7IGFzLCBocmVmLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfT5cbiAgICAgIDxhIHJlZj17cmVmfSB7Li4ub3RoZXJ9IC8+XG4gICAgPC9OZXh0TGluaz5cbiAgKTtcbn0pO1xuXG5OZXh0Q29tcG9zZWQucHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbi8vIEEgc3R5bGVkIHZlcnNpb24gb2YgdGhlIE5leHQuanMgTGluayBjb21wb25lbnQ6XG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy8jd2l0aC1saW5rXG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBocmVmLFxuICAgIGFjdGl2ZUNsYXNzTmFtZSA9ICdhY3RpdmUnLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcHMsXG4gICAgaW5uZXJSZWYsXG4gICAgbmFrZWQsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYXRobmFtZSA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBocmVmLnBhdGhuYW1lO1xuICBjb25zdCBjbGFzc05hbWUgPSBjbHN4KGNsYXNzTmFtZVByb3BzLCB7XG4gICAgW2FjdGl2ZUNsYXNzTmFtZV06IHJvdXRlci5wYXRobmFtZSA9PT0gcGF0aG5hbWUgJiYgYWN0aXZlQ2xhc3NOYW1lLFxuICB9KTtcblxuICBpZiAobmFrZWQpIHtcbiAgICByZXR1cm4gPE5leHRDb21wb3NlZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmVmPXtpbm5lclJlZn0gaHJlZj17aHJlZn0gey4uLm90aGVyfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE11aUxpbmsgY29tcG9uZW50PXtOZXh0Q29tcG9zZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByZWY9e2lubmVyUmVmfSBocmVmPXtocmVmfSB7Li4ub3RoZXJ9IC8+XG4gICk7XG59XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgbmFrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gPExpbmsgey4uLnByb3BzfSBpbm5lclJlZj17cmVmfSAvPik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2l0ZURhdGEgfSBmcm9tICcuL3NpdGVfZGF0YSdcclxuY29uc3QgbGFuZ3VhZ2VzID0gWydlbicsICdoZSddXHJcblxyXG5jb25zdCBMYW5nQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGFuZ3VhZ2VDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KExhbmdDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFuZ1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoJ2VuJylcclxuICBjb25zdCBjaGFuZ2VMYW5ndWFnZVRvID0gbGFuZ1N0cmluZyA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdpbmcgbGFuZ3VhZ2UgdG8gJywgbGFuZ1N0cmluZylcclxuICAgIHNldExhbmd1YWdlKGxhbmdTdHJpbmcpXHJcbiAgfVxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgIHNpdGVEYXRhOiBzaXRlRGF0YVtsYW5ndWFnZV0sXHJcbiAgICBsYW5ndWFnZSxcclxuICAgIGxhbmd1YWdlcyxcclxuICAgIGNoYW5nZUxhbmd1YWdlVG8sXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+e2NoaWxkcmVufTwvTGFuZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgY3JlYXRlUGFnZVBhdGhNYXAgPSBwYWdlcyA9PiB7XHJcbiAgY29uc3QgbWFwID0ge31cclxuICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgbWFwW3BhZ2UucGF0aF0gPSBwYWdlXHJcbiAgICBpZiAocGFnZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBhZ2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZFBhZ2UgPT4ge1xyXG4gICAgICAgIG1hcFtjaGlsZFBhZ2UucGF0aF0gPSBjaGlsZFBhZ2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBtYXBcclxufVxyXG5cclxuY29uc3QgcGFnZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0hvbWUnLFxyXG4gICAgbmFtZUxhbmc6IHtcclxuICAgICAgZW46ICdIb21lJyxcclxuICAgICAgaGU6ICfXkdeZ16onLFxyXG4gICAgfSxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0hvbWVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTZXJ2aWNlcycsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ1NlcnZpY2VzJyxcclxuICAgICAgaGU6ICfXkNeZ16jXldei15nXnScsXHJcbiAgICB9LFxyXG4gICAgcGF0aDogJy9zZXJ2aWNlcycsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdBcHBzSWNvbicsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ByaXZhdGUnLFxyXG4gICAgICAgIG5hbWVMYW5nOiB7XHJcbiAgICAgICAgICBlbjogJ1ByaXZhdGUnLFxyXG4gICAgICAgICAgaGU6ICfXpNeo15jXmdeZ150nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9wcml2YXRlJyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0dyb3VwSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29tcGFueScsXHJcbiAgICAgICAgbmFtZUxhbmc6IHtcclxuICAgICAgICAgIGVuOiAnQ29tcGFueScsXHJcbiAgICAgICAgICBoZTogJ9eX15HXqNeV16onLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0aDogJy9zZXJ2aWNlcy9jb21wYW55JyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0J1c2luZXNzSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRXZlbnRzJyxcclxuICAgICAgICBuYW1lTGFuZzoge1xyXG4gICAgICAgICAgZW46ICdFdmVudHMnLFxyXG4gICAgICAgICAgaGU6ICfXm9eg16HXmdedJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhdGg6ICcvc2VydmljZXMvZXZlbnRzJyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogJ0Vtb2ppRXZlbnRzSWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1Jldm9sdXRpb24nLFxyXG4gICAgbmFtZUxhbmc6IHtcclxuICAgICAgZW46ICdSZXZvbHV0aW9uJyxcclxuICAgICAgaGU6ICfXlNee15TXpNeb15QnLFxyXG4gICAgfSxcclxuICAgIHBhdGg6ICcvcmV2b2x1dGlvbicsXHJcbiAgICBzcGVjaWFsOiBmYWxzZSxcclxuICAgIGljb246ICdBbGxJbmNsdXNpdmVJY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBYm91dCcsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ0Fib3V0JyxcclxuICAgICAgaGU6ICfXotec15nXoNeVJyxcclxuICAgIH0sXHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIHNwZWNpYWw6IGZhbHNlLFxyXG4gICAgaWNvbjogJ0luZm9JY29uJyxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG1ldGE6IGBcclxuICAgIDx0aXRsZSBrZXk9J3RpdGxlJz5BYm91dCBVcyAtIENvbXBhbnkgJiBUZWFtIHwgVlJGdW5UZWFtPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGtleT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiLz5cclxuICAgIGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ29udGFjdCcsXHJcbiAgICBuYW1lTGFuZzoge1xyXG4gICAgICBlbjogJ0NvbnRhY3QnLFxyXG4gICAgICBoZTogJ9eZ16bXmdeo16og16fXqdeoJyxcclxuICAgIH0sXHJcbiAgICBwYXRoOiAnL2NvbnRhY3QnLFxyXG4gICAgc3BlY2lhbDogZmFsc2UsXHJcbiAgICBpY29uOiAnU2VuZEljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VzdGltYXRlJyxcclxuICAgIG5hbWVMYW5nOiB7XHJcbiAgICAgIGVuOiAnRXN0aW1hdGUnLFxyXG4gICAgICBoZTogJ9eU16LXqNeb16og157Xl9eZ16gnLFxyXG4gICAgfSxcclxuICAgIHBhdGg6ICcvZXN0aW1hdGUnLFxyXG4gICAgc3BlY2lhbDogdHJ1ZSxcclxuICAgIGljb246ICdBY2NvdW50QmFsYW5jZVdhbGxldEljb24nLFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gIH0sXHJcbl1cclxuXHJcbi8vIGNvbnN0IHBhZ2VzTWFwID0gY3JlYXRlUGFnZVBhdGhNYXAocGFnZXMpXHJcblxyXG5jb25zdCBnZXRDdXJyZW50UGFnZUluZGVjaWVzID0gcGFnZVBhdGggPT4ge1xyXG4gIGNvbnN0IGluZGVjaWVzID0gW251bGwsIG51bGxdXHJcbiAgcGFnZXMuZm9yRWFjaCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChwYWdlLnBhdGggPT09IHBhZ2VQYXRoKSBpbmRlY2llc1swXSA9IGluZGV4XHJcbiAgICBpZiAocGFnZS5jaGlsZHJlbikge1xyXG4gICAgICBwYWdlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkUGFnZSwgY2hpbGRJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZFBhZ2UucGF0aCA9PT0gcGFnZVBhdGgpIHtcclxuICAgICAgICAgIGluZGVjaWVzWzBdID0gaW5kZXhcclxuICAgICAgICAgIGluZGVjaWVzWzFdID0gY2hpbGRJbmRleFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBpbmRlY2llc1xyXG59XHJcblxyXG5jb25zdCBkZWNvbnN0cnVjdFBhZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJldHVybmVkUGFnZXMgPSBbXVxyXG4gIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICByZXR1cm5lZFBhZ2VzLnB1c2gocGFnZSlcclxuICAgIGxldCBjaGlsZHJlbkNvdW50ID0gcGFnZS5jaGlsZHJlbi5sZW5ndGhcclxuICAgIHdoaWxlIChjaGlsZHJlbkNvdW50KSB7XHJcbiAgICAgIHJldHVybmVkUGFnZXMucHVzaChwYWdlLmNoaWxkcmVuW2NoaWxkcmVuQ291bnQgLSAxXSlcclxuICAgICAgLS1jaGlsZHJlbkNvdW50XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcmV0dXJuZWRQYWdlc1xyXG59XHJcblxyXG5jb25zdCBQYWdlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VzQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChQYWdlc0NvbnRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZUluZGVjaWVzLCBzZXRDdXJyZW50UGFnZUluZGVjaWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcygnL2Fib3V0JylcclxuICApXHJcblxyXG4gIGNvbnN0IHNldFBhZ2VJbmRlY2llcyA9IHBhdGggPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhnZXRDdXJyZW50UGFnZUluZGVjaWVzKHBhdGgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgcGFnZXMsXHJcbiAgICBjdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gICAgZ2V0Q3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBkZWNvbnN0cnVjdFBhZ2VzLFxyXG4gICAgc2V0UGFnZUluZGVjaWVzLFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QYWdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUsIGxpZ2h0VGhlbWVfaGUsIGRhcmtUaGVtZV9oZSB9IGZyb20gJy4uL3VpL3RoZW1lJ1xyXG5cclxuY29uc3QgVGhlbWVVcGRhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlVGhlbWUoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVVcGRhdGVDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzRGFya1RoZW1lLCBzZXRJc0RhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKHtcclxuICAgIGRhcms6IGRhcmtUaGVtZSxcclxuICAgIGxpZ2h0OiBsaWdodFRoZW1lLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHRoZW1lcyA9IHtcclxuICAgIGRhcms6IHtcclxuICAgICAgZW46IGRhcmtUaGVtZSxcclxuICAgICAgaGU6IGRhcmtUaGVtZV9oZSxcclxuICAgIH0sXHJcbiAgICBsaWdodDoge1xyXG4gICAgICBlbjogbGlnaHRUaGVtZSxcclxuICAgICAgaGU6IGxpZ2h0VGhlbWVfaGUsXHJcbiAgICB9LFxyXG4gICAgaGU6IHtcclxuICAgICAgZGFyazogZGFya1RoZW1lX2hlLFxyXG4gICAgICBsaWdodDogbGlnaHRUaGVtZV9oZSxcclxuICAgIH0sXHJcbiAgICBlbjoge1xyXG4gICAgICBkYXJrOiBkYXJrVGhlbWUsXHJcbiAgICAgIGxpZ2h0OiBsaWdodFRoZW1lLFxyXG4gICAgfSxcclxuICB9XHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RhcmtUaGVtZSghaXNEYXJrVGhlbWUpXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZVRoZW1lTGFuZ3VhZ2UgPSBsYW5ndWFnZSA9PiB7XHJcbiAgICBzZXRDdXJyZW50VGhlbWUodGhlbWVzW2xhbmd1YWdlXSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVVcGRhdGVDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IHRvZ2dsZVRoZW1lLCBpc0RhcmtUaGVtZSwgY2hhbmdlVGhlbWVMYW5ndWFnZSB9fVxyXG4gICAgPlxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtpc0RhcmtUaGVtZSA/IGN1cnJlbnRUaGVtZS5kYXJrIDogY3VycmVudFRoZW1lLmxpZ2h0fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lVXBkYXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNpdGVEYXRhID0ge1xyXG4gIGVuOiB7XHJcbiAgICBwYWdlczoge1xyXG4gICAgICBob21lOiAnSG9tZScsXHJcbiAgICAgIGFib3V0OiAnQWJvdXQgVXMnLFxyXG4gICAgICByZXZvbHV0aW9uOiAnVGhlIFJldm9sdXRpb24nLFxyXG4gICAgICBjb250YWN0OiAnQ29udGFjdCBVcycsXHJcbiAgICAgIGVzdGltYXRlOiAnUHJpY2UgRXN0aW1hdGUnLFxyXG4gICAgICBzZXJ2aWNlczogJ091ciBTZXJ2aWNlcycsXHJcbiAgICAgIHByaXZhdGU6ICdGYW1pbHkgJiBGcmllbmRzJyxcclxuICAgICAgY29tcGFueTogJ0NvbXBhbmllcyAmIFRlYW1zJyxcclxuICAgICAgZXZlbnRzOiAnQ29uZmVyZW5jZXMgJiBFeGhpYml0aW9ucycsXHJcbiAgICAgIGJsb2c6ICdCbG9nJyxcclxuICAgIH0sXHJcbiAgICBoZXJvSGVhZGVyOiBgXHJcbiAgICBUZWFtIEV4cGVyaWVuY2UgaW4gVmlydHVhbCBSZWFsaXR5XHJcbiAgICAgIGAsXHJcbiAgICBoZXJvVGV4dDogYFxyXG4gICAgICBWaXJ0dWFsIFJlYWxpdHkgZXZlbnRzIGFyZSBzdGlycmluZyB0aGUgd29ybGQgLSB0aGUgZXhwZXJpZW5jZSBpcyBlbW1lcnNpdmUgYW5kIG1pbmQgYmxvd2luZywgd2l0aCBubyBjYWJsZXMgb3IgY2x1bXN5IGVxdWlwbWVudC4gVGFrZSB5b3VyIHRlYW0sIGZhbWlseSBvciBmcmllbmRzIHRvIGFuIHVuZm9yZ2V0dGFibGUganVybmV5IG9mIGNvbnNvbGlkYXRpb24sIGNyZWF0aXZlIHRoaW5raW5nIGFuZCBwdXJlIGZ1bi5cclxuICAgICAgYCxcclxuICAgIG1lZ2FQb2ludHM6IFtcclxuICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgYFN1aXRhYmxlIGZvciBncm91cHMgb2YgMi0xMiBwYXJ0aWNpcGFudHMsIGluIGFsbCBhZ2VzICg2LTgwKS5gLFxyXG4gICAgICBgUHJvZmVzc2lvbmFsIGd1aWRlbmNlIGJ5IG91ciBlbXBoYXRpYyBpbnN0cnVjdG9ycy5gLFxyXG4gICAgICBgT3VyIHBsYWNlIG9yIHlvdXJzPyBXZSB3aWxsIGJlIGhhcHB5IHRvIGFkdmljZSB5b3UuIEp1c3QgY29udGFjdCB1cy5gLFxyXG4gICAgXSxcclxuICAgIHByaWNlRXN0aW1hdGU6IGBcclxuICAgICAgUHJpY2UgRXN0aW1hdGVcclxuICAgIGAsXHJcbiAgICBsZWFybk1vcmU6IGBcclxuICAgICAgTGVhcm4gTW9yZVxyXG4gICAgYCxcclxuICAgIHRoZVRlYW06IHtcclxuICAgICAgaGVhZGluZzogJ1RoZSBUZWFtJyxcclxuICAgIH0sXHJcbiAgICB3ZUFyZToge1xyXG4gICAgICBoZWFkaW5nOiAnV2UgQXJlIFZSRnVuVGVhbScsXHJcbiAgICAgIHRleHQxOiBgXHJcbiAgICAgIEEgdGVhbSBvZiB0ZWNoIGdlZWtzIGFuZCB0cmFpbmluZyBpbnN0cnVjdG9ycywgd2hvIGxvdmVzIHRvIGVzY29ydFxyXG4gICAgICBncm91cHMgaW4gY29uc2VwdHVhbCB0cmlwcyBpbnRvIHRoZSBWaXJ0dWFsIFJlYWxpdHkgd29ybGQuIE91clxyXG4gICAgICBtZW50b3JzIHdpbGwgZ3VpZGUgeW91IGhhbmQgYnkgaGFuZCBpbnRvIHRoZSBuZXcgd29ybGQsIGFuZCB3aWxsXHJcbiAgICAgIGtub3cgdG8gdGFrZSBhIHN0ZXAgYmFjayB3aGVuIHlvdSdsbCBiZSBmbHlpbmcgb24geW91ciBvd24uXHJcbiAgICAgICAgICAgICAgYCxcclxuICAgICAgdGV4dDI6IGBcclxuICAgICAgSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnlcclxuICAgICAgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBUaGVcclxuICAgICAgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3Mgbm9ybWFsXHJcbiAgICAgIGRpc3RyaWJ1dGlvbiBvZiBsZXR0ZXJzLCBhcyBvcHBvc2VkIHRvIHVzaW5nICdDb250ZW50IGhlcmUsXHJcbiAgICAgIGNvbnRlbnQgaGVyZScsIG1ha2luZyBpdCBsb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wXHJcbiAgICAgIHB1Ymxpc2hpbmcgcGFja2FnZXMgYW5kIHdlYiBwYWdlIGVkaXRvcnMgbm93IHVzZSBMb3JlbSBJcHN1bSBhc1xyXG4gICAgICB0aGVpciBkZWZhdWx0IG1vZGVsIHRleHQsIGFuZCBhIHNlYXJjaCBmb3IgJ2xvcmVtIGlwc3VtJyB3aWxsXHJcbiAgICAgIHVuY292ZXIgbWFueSB3ZWIgc2l0ZXMgc3RpbGwgaW4gdGhlaXIgaW5mYW5jeS5cclxuICAgICAgICAgICAgICBgLFxyXG4gICAgfSxcclxuICAgIGZhcToge1xyXG4gICAgICB0aXRsZTogJ0ZBUScsXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogYFdoZXJlIGRvZXMgYWxsIHRoaXMgRlVOIGhhcHBlbmVzP2AsXHJcbiAgICAgICAgICB0ZXh0OiBgV2Ugd2lsbCBiZSBnbGFkIHRvIGFycml2ZSBhdCB5b3VyIHBsYWNlIGZvciBjb25zdWxhdGlvbiBhbmQgbG9jYXRpb25cclxuICAgICAgICBpbXByZXNzaW9uLiBUb2dldGhlciB3ZSdsbCBkZWNpZGUgaWYgdGhlIGFjdGl2aXR5IHdpbGwgYmUgYXQgeW91clxyXG4gICAgICAgIHBsYWNlIG9yIGF0IG9uZSBvZiBvdXIgZGVzaWduYXRlZCBzdHVkaW9zIGFjcm9zcyB0b3duLmAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogYFdoYXQgaXMgdGhlIHByaWNlIGZvciBhbGwgdGhpcyBGVU4/YCxcclxuICAgICAgICAgIHRleHQ6IGBPdXIgcHJpY2VzIGNoYW5nZWQgYWNjb3JkaW5nIHRvIHRoZSBncm91cCBzaXplLCB0eXBlIG9mIGV2ZW50IGFuZFxyXG4gICAgICAgIHRoZSBsb2NhdGlvbi4gWW91J3JlIHdlbGNvbWUgdG8gY29udGFjdCB1cyBmb3IgYSBxdW90ZSwgb3IgXHJcbiAgICAgICAgPGEgaHJlZj0nL2VzdGltYXRlJz5lc3RpbWF0ZSB0aGUgcHJpY2UgdXNpbmcgb3VyIGNhbGN1bGF0b3I8L2E+LmAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogYFdoYXQgaWYgbm90IGFsbCBvZiBvdXIgZ3JvdXAgaXMgaW50byBWUj9gLFxyXG4gICAgICAgICAgdGV4dDogYEFsbCBpcyBnb29kLCBub3QgZXZlcnlvbmUgbXVzdCB0cmFuc2Zvcm0gaW50byBhbm90aGVyIHdvcmxkLiBXZSBjYW5cclxuICAgICAgICBvZmZlciBhY3Rpdml0aWVzIGNvbWJpbmluZyBodW1hbiBpbnRlcmFjdGlvbiwgdXNlIG9mIGNvbXB1dGVyL3R2XHJcbiAgICAgICAgc2NyZWVucyBvciB0cm91Z2ggYSBtb2JpbGUgYXBwLmAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogYFdoYXQga2luZCBvZiB0ZWNobm9sb2d5IGFyZSB5b3UgdXNpbmc/YCxcclxuICAgICAgICAgIHRleHQ6IGBXZSBhcnJpdmUgYXQgeW91ciBwbGFjZSB3aXRoIE9jdWx1cyBRdWVzdCBnb2dnZWxzLCBieSBGYWNlYm9vay4gT25lXHJcbiAgICAgICAgb2YgdGhlIG1vc3QgYWR2YW5jZWQgVlIgaGFkc2V0IGluIHRoZSBtYXJrZXQsIHdoaWNoIGFsbG93cyA0S1xyXG4gICAgICAgIGV4cGVyaWVuY2Ugd2l0aG91dCB0aGUgbmVlZCBvZiBjYWJsZXMgb3IgaGVhdnkgZXF1aXBtZW50LmAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0Rm9ybToge1xyXG4gICAgICBoZWFkaW5nOiBgV2UncmUgZWFnZXIgdG8gbWFrZSB5b3UgZmx5YCxcclxuICAgICAgbmFtZTogYE5hbWVgLFxyXG4gICAgICBwaG9uZTogYFBob25lYCxcclxuICAgICAgZW1haWw6IGBFbWFpbGAsXHJcbiAgICAgIFRleHQ6IGBIb3cgY2FuIHdlIGhlbHAgeW91P2AsXHJcbiAgICAgIHN1Ym1pdDogYFNFTkQgTUVTU0FHRWAsXHJcbiAgICB9LFxyXG4gICAgZXN0aW1hdGU6IHtcclxuICAgICAgaGVhZGluZzE6ICdDaG9vc2UgeW91ciB0eXBlIG9mIGV2ZW50JyxcclxuICAgICAgaGVhZGluZzI6ICdIb3cgbWFueSBwbGF5ZXJzPycsXHJcbiAgICAgIGhlYWRpbmczOiAnSG93IGxvbmcgd291bGQgeW91IHBsYXk/JyxcclxuICAgICAgcHJpY2U6ICdQcmljZSBFc3Q6ICQnLFxyXG4gICAgfSxcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIHByaXZhdGU6IHtcclxuICAgICAgICB0aXRsZTogYEZhbWlseSAmIEZyaWVuZHNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLlxyXG5cclxuICAgICAgICBgLFxyXG4gICAgICAgIHBvaW50czogW1xyXG4gICAgICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgICAgIGBUaGUgbW9zdCBhZHZhbmNlZCBWUiBIZWFkc2V0LiBObyBjYWJsZXMgb3IgY2x1bXN5IGVxdWlwbWVudC4gRmFzdCBhbmQgZWFzeSBhZGFwdGF0aW9uLmAsXHJcbiAgICAgICAgICBgVGhlIG1vc3QgYWR2YW5jZWQgVlIgSGVhZHNldC4gTm8gY2FibGVzIG9yIGNsdW1zeSBlcXVpcG1lbnQuIEZhc3QgYW5kIGVhc3kgYWRhcHRhdGlvbi5gLFxyXG4gICAgICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBjb21wYW55OiB7XHJcbiAgICAgICAgdGl0bGU6IGBDb21wYW55ICYgVGVhbXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLlxyXG5cclxuICAgICAgICBgLFxyXG4gICAgICAgIHBvaW50czogW1xyXG4gICAgICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgICAgIGBUaGUgbW9zdCBhZHZhbmNlZCBWUiBIZWFkc2V0LiBObyBjYWJsZXMgb3IgY2x1bXN5IGVxdWlwbWVudC4gRmFzdCBhbmQgZWFzeSBhZGFwdGF0aW9uLmAsXHJcbiAgICAgICAgICBgVGhlIG1vc3QgYWR2YW5jZWQgVlIgSGVhZHNldC4gTm8gY2FibGVzIG9yIGNsdW1zeSBlcXVpcG1lbnQuIEZhc3QgYW5kIGVhc3kgYWRhcHRhdGlvbi5gLFxyXG4gICAgICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBldmVudHM6IHtcclxuICAgICAgICB0aXRsZTogYEV4aGliaXRpb25zICYgQ29uZmVyZW5jZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLlxyXG5cclxuICAgICAgICBgLFxyXG4gICAgICAgIHBvaW50czogW1xyXG4gICAgICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgICAgIGBUaGUgbW9zdCBhZHZhbmNlZCBWUiBIZWFkc2V0LiBObyBjYWJsZXMgb3IgY2x1bXN5IGVxdWlwbWVudC4gRmFzdCBhbmQgZWFzeSBhZGFwdGF0aW9uLmAsXHJcbiAgICAgICAgICBgVGhlIG1vc3QgYWR2YW5jZWQgVlIgSGVhZHNldC4gTm8gY2FibGVzIG9yIGNsdW1zeSBlcXVpcG1lbnQuIEZhc3QgYW5kIGVhc3kgYWRhcHRhdGlvbi5gLFxyXG4gICAgICAgICAgYFRoZSBtb3N0IGFkdmFuY2VkIFZSIEhlYWRzZXQuIE5vIGNhYmxlcyBvciBjbHVtc3kgZXF1aXBtZW50LiBGYXN0IGFuZCBlYXN5IGFkYXB0YXRpb24uYCxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFydGljbGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aWRlbzogJ2NtWi00QnNDb0lBJyxcclxuICAgICAgICB0aXRsZTogYE9jdWx1cyBRdWVzdCAtIFRoZSBtb3N0IGFkdmFuY2VkIFZSIGdvZ2dsZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2aWRlbzogJ2NtWi00QnNDb0lBJyxcclxuICAgICAgICB0aXRsZTogYE9jdWx1cyBRdWVzdCAtIFRoZSBtb3N0IGFkdmFuY2VkIFZSIGdvZ2dsZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2aWRlbzogJ2NtWi00QnNDb0lBJyxcclxuICAgICAgICB0aXRsZTogYE9jdWx1cyBRdWVzdCAtIFRoZSBtb3N0IGFkdmFuY2VkIFZSIGdvZ2dsZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2aWRlbzogJ2NtWi00QnNDb0lBJyxcclxuICAgICAgICB0aXRsZTogYE9jdWx1cyBRdWVzdCAtIFRoZSBtb3N0IGFkdmFuY2VkIFZSIGdvZ2dsZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2aWRlbzogJ2NtWi00QnNDb0lBJyxcclxuICAgICAgICB0aXRsZTogYE9jdWx1cyBRdWVzdCAtIFRoZSBtb3N0IGFkdmFuY2VkIFZSIGdvZ2dsZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2aWRlbzogJ2NtWi00QnNDb0lBJyxcclxuICAgICAgICB0aXRsZTogYE9jdWx1cyBRdWVzdCAtIFRoZSBtb3N0IGFkdmFuY2VkIFZSIGdvZ2dsZXNgLFxyXG4gICAgICAgIHRleHQ6IGBJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBoZXJlJywgbWFraW5nIGl0IGxvb2sgbGlrZSByZWFkYWJsZSBFbmdsaXNoLiBNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycyBub3cgdXNlIExvcmVtIElwc3VtIGFzIHRoZWlyIGRlZmF1bHQgbW9kZWwgdGV4dCwgYW5kIGEgc2VhcmNoIGZvciAnbG9yZW0gaXBzdW0nIHdpbGwgdW5jb3ZlciBtYW55IHdlYiBzaXRlcyBzdGlsbCBpbiB0aGVpciBpbmZhbmN5LmAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgcW91dGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb250ZW50OiBgSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWRcclxuICAgICAgICBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuYCxcclxuICAgICAgICBzdWJDb250ZW50OiBgSWRhbiBCYXJvbiB8IFNFTyBDaGlrb29tIGluY2AsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb250ZW50OiBgTW93IE1vdyBNb3cuYCxcclxuICAgICAgICBzdWJDb250ZW50OiBgS3VuZG9mb25pIHwgU0VPIEZhbmN5RmVhc3QgaW5jYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbnRlbnQ6IGBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBgLFxyXG4gICAgICAgIHN1YkNvbnRlbnQ6IGBNb3NoaWtvIE11c2hNdXNoIHwgU0VPIERpZ2lEaWdpIGluY2AsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29weXJpZ2h0OiAnRGV2JkRlcyBieSBDaGlrb29tJyxcclxuICB9LFxyXG4gIGhlOiB7XHJcbiAgICBwYWdlczoge1xyXG4gICAgICBob21lOiAn15HXmdeqJyxcclxuICAgICAgYWJvdXQ6ICfXotec15nXoNeVJyxcclxuICAgICAgcmV2b2x1dGlvbjogJ9eU157XlNek15vXlCcsXHJcbiAgICAgIGNvbnRhY3Q6ICfXmdem15nXqNeqINen16nXqCcsXHJcbiAgICAgIGVzdGltYXRlOiAn15TXoteo15vXqiDXnteX15nXqCcsXHJcbiAgICAgIHNlcnZpY2VzOiAn15DXmdeo15XXoteZ150g157Xm9ecINeh15XXkicsXHJcbiAgICAgIHByaXZhdGU6ICfXntep16TXl9eUINeV15fXkdeo15nXnScsXHJcbiAgICAgIGNvbXBhbnk6ICfXl9eR16jXldeqINeV16fXkdeV16bXldeqJyxcclxuICAgICAgZXZlbnRzOiAn15vXoNeh15nXnSDXldeq16LXqNeV15vXldeqJyxcclxuICAgICAgYmxvZzogJ9eR15zXldeSJyxcclxuICAgIH0sXHJcbiAgICBoZXJvSGVhZGVyOiBg15fXldeV15nXlCDXp9eR15XXpteq15nXqiDXntei15XXnNedINeQ15fXqGAsXHJcbiAgICBoZXJvVGV4dDogYFxyXG4gICAg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC4g157XodeV15XXkteZ150g15jXnNeV15XXmdeW15nXlCDXnteV16jXl9eRINeX15zXlden15Qg15TXmNeb16DXldec15XXkteZ15Qg15vXnNeZ150g15HXl9eZ16TXldepINee15DXliDXnNek15kg15TXmNeb16DXldec15XXkteZ15QuIFxyXG4gICAgICBgLFxyXG4gICAgbWVnYVBvaW50czogW1xyXG4gICAgICBg16bXmdeV15Mg15QtVlIg15TXnteq16fXk9edINeR15nXldeq16gg15HXoteV15zXnSwg15zXnNeQINeb15HXnNeZ150g15DXlSDXpteZ15XXkyDXnteh15XXqNeRLiDXlNeY157XoteUINeV15TXqteQ16fXnNee15XXqiDXnteU15nXqNeUINeR157XmdeV15fXk2AsXHJcbiAgICAgIGDXnteq15DXmdedINec16fXkdeV16bXldeqINep15wgMi0xMiDXntep16rXqtek15nXnSwg15HXm9ecINeU15LXmdec15DXmdedICg2LTgwKWAsXHJcbiAgICAgIGDXlNeT16jXm9eUINeV15zXmdeV15XXmSDXnten16bXldei15kg157XlNee15PXqNeZ15vXmdedINeU16jXkteZ16nXmdedIGAsXHJcbiAgICAgIGDXkNem15zXoNeVINeQ15Ug15DXptec15vXnT8g16bXqNeVINeQ15nXqteg15Ug16fXqdeoINeV16DXqdee15cg15zXmdeZ16LXpSDXnNeb151gLFxyXG4gICAgXSxcclxuICAgIHByaWNlRXN0aW1hdGU6IGBcclxuICAgICAgICDXnteX16nXkdeV158g157Xl9eZ16hcclxuICAgICAgYCxcclxuICAgIGxlYXJuTW9yZTogYFxyXG4gICAgICAgINee15nXk9eiINeg15XXodejXHJcbiAgICAgIGAsXHJcbiAgICB0aGVUZWFtOiB7XHJcbiAgICAgIGhlYWRpbmc6ICfXlNem15XXldeqJyxcclxuICAgIH0sXHJcbiAgICB3ZUFyZToge1xyXG4gICAgICBoZWFkaW5nOiAn15DXoNeX16DXlSBWUkZ1blRlYW0nLFxyXG4gICAgICB0ZXh0MTogYFxyXG4gICAgICDXnteV16jXl9eRINeY15vXoNeV15zXldeS15nXlCDXqteX15vXldedINeU157Xldem16jXmdedINeq15XXqNeqINee15nXldeV16DXmdeq15jXm9eg15Ug15TXmNeb16DXldec15XXkteZ15Qg16rXp9eV16TXqiDXnNep15zXldepINeq15XXqNeULCDXlNeZ16HXmNeV16jXmdeUINec16jXpteV16DXldeqINeU16LXldeh16cg15jXm9eg15XXnNeV15LXmdeZ16og15TXqteX15vXldedINec16rXl9eV157XmdedINeU15DXldee16DXldeqINeg15nXpteV15wg16LXqNeaINec15nXmdem15XXqC4g157XlNee15DXlCDXm9ee15PXkyDXl9eZ15PXldep15kg157XodeZ15nXoteqINeo15vXkSDXlNeY15vXoNeV15zXldeS15nXlCDXnNeU15LXk9eZ16gg16jXldeR15XXmNeZ16fXlCDXqdecINeU157Xk9eiLCDXlNeq15fXm9eV150g15jXm9eg15XXnNeV15LXmdeZ150g16LXqNeaINeV15HXqteo15HXldeqINeV15vXmdeV16bXkCDXnNee16nXnCDXlNee15XXkNelINeU15jXm9eg15XXnNeV15LXmdeUINeU157XpteZ15Ag15jXm9eg15XXnNeV15LXmdeULiDXnteh15XXldeS15nXnSDXmNec15XXldeZ15bXmdeUINee15XXqNeX15Eg15fXnNeV16fXlCDXlNeY15vXoNeV15zXldeS15nXlCDXm9ec15nXnSDXkdeX15nXpNeV16kg157XkNeWINec16TXmSDXlNeY15vXoNeV15zXldeS15nXlC4gXHJcbiAgICAgICAgYCxcclxuICAgICAgdGV4dDI6IGBcclxuICAgICAg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC4g157XodeV15XXkteZ150g15jXnNeV15XXmdeW15nXlCDXnteV16jXl9eRINeX15zXlden15Qg15TXmNeb16DXldec15XXkteZ15Qg15vXnNeZ150g15HXl9eZ16TXldepINee15DXliDXnNek15kg15TXmNeb16DXldec15XXkteZ15QuIFxyXG4gICAgICAgIGAsXHJcbiAgICB9LFxyXG4gICAgZmFxOiB7XHJcbiAgICAgIHRpdGxlOiAn16nXkNec15XXqiDXoNek15XXpteV16onLFxyXG4gICAgICBkYXRhOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IGDXkNeZ16TXlCDXp9eV16jXlCDXm9ecINeU15vXmdejINeU15bXlD9gLFxyXG4gICAgICAgICAgdGV4dDogYFdlIHdpbGwgYmUgZ2xhZCB0byBhcnJpdmUgYXQgeW91ciBwbGFjZSBmb3IgY29uc3VsYXRpb24gYW5kIGxvY2F0aW9uXHJcbiAgICAgICAgaW1wcmVzc2lvbi4gVG9nZXRoZXIgd2UnbGwgZGVjaWRlIGlmIHRoZSBhY3Rpdml0eSB3aWxsIGJlIGF0IHlvdXJcclxuICAgICAgICBwbGFjZSBvciBhdCBvbmUgb2Ygb3VyIGRlc2lnbmF0ZWQgc3R1ZGlvcyBhY3Jvc3MgdG93bi5gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IGDXnteUINeU157Xl9eZ16gg16nXnCDXm9ecINeU15vXmdejINeU15bXlGAsXHJcbiAgICAgICAgICB0ZXh0OiBgT3VyIHByaWNlcyBjaGFuZ2VkIGFjY29yZGluZyB0byB0aGUgZ3JvdXAgc2l6ZSwgdHlwZSBvZiBldmVudCBhbmRcclxuICAgICAgICB0aGUgbG9jYXRpb24uIFlvdSdyZSB3ZWxjb21lIHRvIGNvbnRhY3QgdXMgZm9yIGEgcXVvdGUsIG9yeycgJ31cclxuICAgICAgICA8YSBocmVmPScvZXN0aW1hdGUnPmVzdGltYXRlIHRoZSBwcmljZSB1c2luZyBvdXIgY2FsY3VsYXRvcjwvYT4uYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBg157XlCDXoteV16nXmdedINeb16nXnNeQINeb15wg15fXkdeo15kg15TXpteV15XXqiDXkden15jXoiDXqdecIFZSYCxcclxuICAgICAgICAgIHRleHQ6IGBBbGwgaXMgZ29vZCwgbm90IGV2ZXJ5b25lIG11c3QgdHJhbnNmb3JtIGludG8gYW5vdGhlciB3b3JsZC4gV2UgY2FuXHJcbiAgICAgICAgb2ZmZXIgYWN0aXZpdGllcyBjb21iaW5pbmcgaHVtYW4gaW50ZXJhY3Rpb24sIHVzZSBvZiBjb21wdXRlci90dlxyXG4gICAgICAgIHNjcmVlbnMgb3IgdHJvdWdoIGEgbW9iaWxlIGFwcC5gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IGDXkdeQ15nXlteVINeY15vXoNeV15zXldeS15nXlCDXkNeq150g157Xqdeq157XqdeZ150/YCxcclxuICAgICAgICAgIHRleHQ6IGBXZSBhcnJpdmUgYXQgeW91ciBwbGFjZSB3aXRoIE9jdWx1cyBRdWVzdCBnb2dnZWxzLCBieSBGYWNlYm9vay4gT25lXHJcbiAgICAgICAgb2YgdGhlIG1vc3QgYWR2YW5jZWQgVlIgaGFkc2V0IGluIHRoZSBtYXJrZXQsIHdoaWNoIGFsbG93cyA0S1xyXG4gICAgICAgIGV4cGVyaWVuY2Ugd2l0aG91dCB0aGUgbmVlZCBvZiBjYWJsZXMgb3IgaGVhdnkgZXF1aXBtZW50LmAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBjb250YWN0Rm9ybToge1xyXG4gICAgICBoZWFkaW5nOiBg15DXoNeX16DXlSDXnteX15vXmdedINec16nXnteV16Ig157XnteaYCxcclxuICAgICAgbmFtZTogYNep150g157XnNeQYCxcclxuICAgICAgcGhvbmU6IGDXmNec16TXldefYCxcclxuICAgICAgZW1haWw6IGDXkNeZ157XmdeZ15xgLFxyXG4gICAgICB0ZXh0OiBg15DXmdeaINeg15XXm9ecINec16LXlteV16gg15zXmj9gLFxyXG4gICAgICBzdWJtaXQ6IGDXqdec15nXl9eqINeU15XXk9ei15RgLFxyXG4gICAgfSxcclxuICAgIGVzdGltYXRlOiB7XHJcbiAgICAgIGhlYWRpbmcxOiAn15HXl9eo15Ug15DXqiDXodeV15Ig15TXkNeZ16jXldeiJyxcclxuICAgICAgaGVhZGluZzI6ICfXm9ee15Qg157Xqdeq16rXpNeZ150/JyxcclxuICAgICAgaGVhZGluZzM6ICfXnteUINee16nXmiDXlNeW157Xnz8nLFxyXG4gICAgICBwcmljZTogJ9eU16LXqNeb16og157Xl9eZ16g6IOKCqicsXHJcbiAgICB9LFxyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgcHJpdmF0ZToge1xyXG4gICAgICAgIHRpdGxlOiBg157Xqdek15fXlCDXldeX15HXqNeZ151gLFxyXG4gICAgICAgIHRleHQ6IGAg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5cclxuXHJcbiAgICAgICAgYCxcclxuICAgICAgICBwb2ludHM6IFtcclxuICAgICAgICAgIGDXmNeb16DXldec15XXkteZ15nXqiDXlNeq15fXm9eV150g15zXqteX15XXnteZ150g15TXkNeV157XoNeV16og16DXmdem15XXnCDXoteo15og15zXmdeZ16bXldeoLiDXnteU157XkNeUINeb157Xk9eTINeX15nXk9eV16nXmSDXnteh15nXmdei16og16jXm9eRINeU15jXm9eg15XXnNeV15LXmdeULmAsXHJcbiAgICAgICAgICBg15jXm9eg15XXnNeV15LXmdeZ16og15TXqteX15vXldedINec16rXl9eV157XmdedINeU15DXldee16DXldeqINeg15nXpteV15wg16LXqNeaINec15nXmdem15XXqC4g157XlNee15DXlCDXm9ee15PXkyDXl9eZ15PXldep15kg157XodeZ15nXoteqINeo15vXkSDXlNeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICAgICAgYNeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15QuYCxcclxuICAgICAgICAgIGDXmNeb16DXldec15XXkteZ15nXqiDXlNeq15fXm9eV150g15zXqteX15XXnteZ150g15TXkNeV157XoNeV16og16DXmdem15XXnCDXoteo15og15zXmdeZ16bXldeoLiDXnteU157XkNeUINeb157Xk9eTINeX15nXk9eV16nXmSDXnteh15nXmdei16og16jXm9eRINeU15jXm9eg15XXnNeV15LXmdeULmAsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgY29tcGFueToge1xyXG4gICAgICAgIHRpdGxlOiBg16fXkdeV16bXldeqINeV15fXkdeo15XXqmAsXHJcbiAgICAgICAgdGV4dDogYCDXnteV16jXl9eRINeY15vXoNeV15zXldeS15nXlCDXqteX15vXldedINeU157Xldem16jXmdedINeq15XXqNeqINee15nXldeV16DXmdeq15jXm9eg15Ug15TXmNeb16DXldec15XXkteZ15Qg16rXp9eV16TXqiDXnNep15zXldepINeq15XXqNeULCDXlNeZ16HXmNeV16jXmdeUINec16jXpteV16DXldeqINeU16LXldeh16cg15jXm9eg15XXnNeV15LXmdeZ16og15TXqteX15vXldedINec16rXl9eV157XmdedINeU15DXldee16DXldeqINeg15nXpteV15wg16LXqNeaINec15nXmdem15XXqC4g157XlNee15DXlCDXm9ee15PXkyDXl9eZ15PXldep15kg157XodeZ15nXoteqINeo15vXkSDXlNeY15vXoNeV15zXldeS15nXlCDXnNeU15LXk9eZ16gg16jXldeR15XXmNeZ16fXlCDXqdecINeU157Xk9eiLCDXlNeq15fXm9eV150g15jXm9eg15XXnNeV15LXmdeZ150g16LXqNeaINeV15HXqteo15HXldeqINeV15vXmdeV16bXkCDXnNee16nXnCDXlNee15XXkNelINeU15jXm9eg15XXnNeV15LXmdeUINeU157XpteZ15Ag15jXm9eg15XXnNeV15LXmdeULi5cclxuXHJcbiAgICAgICAgYCxcclxuICAgICAgICBwb2ludHM6IFtcclxuICAgICAgICAgIGDXmNeb16DXldec15XXkteZ15nXqiDXlNeq15fXm9eV150g15zXqteX15XXnteZ150g15TXkNeV157XoNeV16og16DXmdem15XXnCDXoteo15og15zXmdeZ16bXldeoLiDXnteU157XkNeUINeb157Xk9eTINeX15nXk9eV16nXmSDXnteh15nXmdei16og16jXm9eRINeU15jXm9eg15XXnNeV15LXmdeULmAsXHJcbiAgICAgICAgICBg15jXm9eg15XXnNeV15LXmdeZ16og15TXqteX15vXldedINec16rXl9eV157XmdedINeU15DXldee16DXldeqINeg15nXpteV15wg16LXqNeaINec15nXmdem15XXqC4g157XlNee15DXlCDXm9ee15PXkyDXl9eZ15PXldep15kg157XodeZ15nXoteqINeo15vXkSDXlNeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICAgICAgYNeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15QuYCxcclxuICAgICAgICAgIGDXmNeb16DXldec15XXkteZ15nXqiDXlNeq15fXm9eV150g15zXqteX15XXnteZ150g15TXkNeV157XoNeV16og16DXmdem15XXnCDXoteo15og15zXmdeZ16bXldeoLiDXnteU157XkNeUINeb157Xk9eTINeX15nXk9eV16nXmSDXnteh15nXmdei16og16jXm9eRINeU15jXm9eg15XXnNeV15LXmdeULmAsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgdGl0bGU6IGDXkNeZ16jXldei15nXnSDXldeb16DXodeZ151gLFxyXG4gICAgICAgIHRleHQ6IGAg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5cclxuXHJcbiAgICAgICAgYCxcclxuICAgICAgICBwb2ludHM6IFtcclxuICAgICAgICAgIGDXmNeb16DXldec15XXkteZ15nXqiDXlNeq15fXm9eV150g15zXqteX15XXnteZ150g15TXkNeV157XoNeV16og16DXmdem15XXnCDXoteo15og15zXmdeZ16bXldeoLiDXnteU157XkNeUINeb157Xk9eTINeX15nXk9eV16nXmSDXnteh15nXmdei16og16jXm9eRINeU15jXm9eg15XXnNeV15LXmdeULmAsXHJcbiAgICAgICAgICBg15jXm9eg15XXnNeV15LXmdeZ16og15TXqteX15vXldedINec16rXl9eV157XmdedINeU15DXldee16DXldeqINeg15nXpteV15wg16LXqNeaINec15nXmdem15XXqC4g157XlNee15DXlCDXm9ee15PXkyDXl9eZ15PXldep15kg157XodeZ15nXoteqINeo15vXkSDXlNeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICAgICAgYNeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15QuYCxcclxuICAgICAgICAgIGDXmNeb16DXldec15XXkteZ15nXqiDXlNeq15fXm9eV150g15zXqteX15XXnteZ150g15TXkNeV157XoNeV16og16DXmdem15XXnCDXoteo15og15zXmdeZ16bXldeoLiDXnteU157XkNeUINeb157Xk9eTINeX15nXk9eV16nXmSDXnteh15nXmdei16og16jXm9eRINeU15jXm9eg15XXnNeV15LXmdeULmAsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhcnRpY2xlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmlkZW86ICdjbVotNEJzQ29JQScsXHJcbiAgICAgICAgdGl0bGU6IGDXntep16fXpNeZINeULVZSINeU157Xqten15PXnteZ150g15HXmdeV16rXqCDXkdei15XXnNedIHwgT2N1bHVzIFF1ZXN0YCxcclxuICAgICAgICB0ZXh0OiBg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlkZW86ICdjbVotNEJzQ29JQScsXHJcbiAgICAgICAgdGl0bGU6IGDXntep16fXpNeZINeULVZSINeU157Xqten15PXnteZ150g15HXmdeV16rXqCDXkdei15XXnNedIHwgT2N1bHVzIFF1ZXN0YCxcclxuICAgICAgICB0ZXh0OiBg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlkZW86ICdjbVotNEJzQ29JQScsXHJcbiAgICAgICAgdGl0bGU6IGDXntep16fXpNeZINeULVZSINeU157Xqten15PXnteZ150g15HXmdeV16rXqCDXkdei15XXnNedIHwgT2N1bHVzIFF1ZXN0YCxcclxuICAgICAgICB0ZXh0OiBg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlkZW86ICdjbVotNEJzQ29JQScsXHJcbiAgICAgICAgdGl0bGU6IGDXntep16fXpNeZINeULVZSINeU157Xqten15PXnteZ150g15HXmdeV16rXqCDXkdei15XXnNedIHwgT2N1bHVzIFF1ZXN0YCxcclxuICAgICAgICB0ZXh0OiBg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlkZW86ICdjbVotNEJzQ29JQScsXHJcbiAgICAgICAgdGl0bGU6IGDXntep16fXpNeZINeULVZSINeU157Xqten15PXnteZ150g15HXmdeV16rXqCDXkdei15XXnNedIHwgT2N1bHVzIFF1ZXN0YCxcclxuICAgICAgICB0ZXh0OiBg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlkZW86ICdjbVotNEJzQ29JQScsXHJcbiAgICAgICAgdGl0bGU6IGDXntep16fXpNeZINeULVZSINeU157Xqten15PXnteZ150g15HXmdeV16rXqCDXkdei15XXnNedIHwgT2N1bHVzIFF1ZXN0YCxcclxuICAgICAgICB0ZXh0OiBg157Xldeo15fXkSDXmNeb16DXldec15XXkteZ15Qg16rXl9eb15XXnSDXlNee15XXpteo15nXnSDXqteV16jXqiDXnteZ15XXldeg15nXqteY15vXoNeVINeU15jXm9eg15XXnNeV15LXmdeUINeq16fXldek16og15zXqdec15XXqSDXqteV16jXlCwg15TXmdeh15jXldeo15nXlCDXnNeo16bXldeg15XXqiDXlNei15XXodenINeY15vXoNeV15zXldeS15nXmdeqINeU16rXl9eb15XXnSDXnNeq15fXldee15nXnSDXlNeQ15XXnteg15XXqiDXoNeZ16bXldecINei16jXmiDXnNeZ15nXpteV16guINee15TXnteQ15Qg15vXnteT15Mg15fXmdeT15XXqdeZINee16HXmdeZ16LXqiDXqNeb15Eg15TXmNeb16DXldec15XXkteZ15Qg15zXlNeS15PXmdeoINeo15XXkdeV15jXmden15Qg16nXnCDXlNee15PXoiwg15TXqteX15vXldedINeY15vXoNeV15zXldeS15nXmdedINei16jXmiDXldeR16rXqNeR15XXqiDXldeb15nXldem15Ag15zXntep15wg15TXnteV15DXpSDXlNeY15vXoNeV15zXldeS15nXlCDXlNee16bXmdeQINeY15vXoNeV15zXldeS15nXlC5gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHFvdXRlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29udGVudDogYEl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkXHJcbiAgICAgICAgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LmAsXHJcbiAgICAgICAgc3ViQ29udGVudDogYNei15nXk9efINeR16jXkNeV158gfCDXnteg15tcItecIENoaWtvb20uY29tYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbnRlbnQ6IGBNb3cgTW93IE1vdy5gLFxyXG4gICAgICAgIHN1YkNvbnRlbnQ6IGDXp9eV16DXk9eV16TXldeg15kgfCDXnteg15TXnCDXm9eV15cg15DXk9edIHwg153XoNeh15kg16TXmdeh15hgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29udGVudDogYGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGAsXHJcbiAgICAgICAgc3ViQ29udGVudDogYE1vc2hpa28gTXVzaE11c2ggfCBTRU8gRGlnaURpZ2kgaW5jYCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjb3B5cmlnaHQ6ICfXoteZ16bXldeRINeV16TXmdeq15XXlyBDaGlrb29tJyxcclxuICB9LFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9ICdHLVpaVkdUMEZaV1AnXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9IHVybCA9PiB7XHJcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICBwYWdlX3BhdGg6IHVybCxcclxuICB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XHJcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXHJcbiAgICB2YWx1ZTogdmFsdWUsXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJ1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBTcGVlZERpYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9TcGVlZERpYWwnXHJcbmltcG9ydCBTcGVlZERpYWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU3BlZWREaWFsSWNvbidcclxuaW1wb3J0IFNwZWVkRGlhbEFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NwZWVkRGlhbEFjdGlvbidcclxuaW1wb3J0IFNoYXJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmUnXHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJ1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJ1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcCdcclxuaW1wb3J0IENhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYWxsJ1xyXG5pbXBvcnQgTGlua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmsnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlLydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6IDM4MCxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMHB4KScsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiAnMCcsXHJcbiAgICByaWdodDogJzAnLFxyXG4gIH0sXHJcbiAgc3BlZWREaWFsOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgc29jaWFsR3JpZDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206ICczZW0nLFxyXG4gICAgcmlnaHQ6ICcxZW0nLFxyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG4gIHNvY2lhbEljb246IHtcclxuICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0QnV0dG9uKCkge1xyXG4gIGNvbnN0IHBhZ2VVcmwgPSAnaHR0cHM6Ly93d3cuZnVudGVhbXZyLmNvbSdcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc25ha09wZW4sIHNldFNuYWtPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hhcmUgPSAoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XHJcbiAgICAgIG5hdmlnYXRvclxyXG4gICAgICAgIC5zaGFyZSh7XHJcbiAgICAgICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXHJcbiAgICAgICAgICB0ZXh0OiAnSGVsbG8gV29ybGQnLFxyXG4gICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIHNoYXJlJykpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaGFyaW5nOicsIGVycm9yKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwYWdlVXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICBzZXRTbmFrT3Blbih0cnVlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWF0Y2hlcyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxCYWNrZHJvcCBvcGVuPXtvcGVufSAvPlxyXG4gICAgICAgICAgPFNwZWVkRGlhbFxyXG4gICAgICAgICAgICBhcmlhTGFiZWw9J1NwZWVkRGlhbCB0b29sdGlwIGV4YW1wbGUnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGVlZERpYWx9XHJcbiAgICAgICAgICAgIGhpZGRlbj17aGlkZGVufVxyXG4gICAgICAgICAgICBpY29uPXs8U3BlZWREaWFsSWNvbiAvPn1cclxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25hdmlnYXRvci5jbGlwYm9hcmQgPyAoXHJcbiAgICAgICAgICAgICAgPFNwZWVkRGlhbEFjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PSdDb3B5LUxpbmsnXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8TGlua0ljb24gLz59XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGU9J0NvcHlMaW5rJ1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcE9wZW5cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvcHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7bmF2aWdhdG9yLnNoYXJlID8gKFxyXG4gICAgICAgICAgICAgIDxTcGVlZERpYWxBY3Rpb25cclxuICAgICAgICAgICAgICAgIGtleT0nU2hhcmUnXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8U2hhcmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlPSdTaGFyZSdcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBPcGVuXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaGFyZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIDxTcGVlZERpYWxBY3Rpb25cclxuICAgICAgICAgICAgICBrZXk9J0NhbGwnXHJcbiAgICAgICAgICAgICAgaWNvbj17PENhbGxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIHRvb2x0aXBUaXRsZT0nQ2FsbCdcclxuICAgICAgICAgICAgICB0b29sdGlwT3BlblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIEZhYlByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdhJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICd0ZWw6MDUyODIyODY0MCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxTcGVlZERpYWxBY3Rpb25cclxuICAgICAgICAgICAgICBrZXk9J1doYXRzQXBwJ1xyXG4gICAgICAgICAgICAgIGljb249ezxXaGF0c0FwcEljb24gLz59XHJcbiAgICAgICAgICAgICAgdG9vbHRpcFRpdGxlPSdXaGF0c0FwcCdcclxuICAgICAgICAgICAgICB0b29sdGlwT3BlblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIEZhYlByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdhJyxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3dhLm1lLzk3MjUyODIyODY0MCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3BlZWREaWFsPlxyXG5cclxuICAgICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb3Blbj17c25ha09wZW59XHJcbiAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNuYWtPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgbWVzc2FnZT17YENvcGllZDogJHtwYWdlVXJsfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsR3JpZH0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2ZhY2Vib29rJ1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17J2EnfVxyXG4gICAgICAgICAgICAgIGhyZWY9eydodHRwczovL2ZhY2Vib29rLmNvbSd9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdpbnN0YWdyYW0nXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXsnYSd9XHJcbiAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vaW5zdGFncmFtLmNvbSd9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxJY29ufSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nd2hhdHNhcHAnXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXsnYSd9XHJcbiAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vd2EubWUvOTcyNTI4MjI4NjQwJ31cclxuICAgICAgICAgICAgICB0YXJnZXQ9eydfYmxhbmsnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFdoYXRzQXBwSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcbmltcG9ydCBCcmlnaHRuZXNzNE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczRPdXRsaW5lZCdcclxuaW1wb3J0IHsgdXNlVXBkYXRlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IERhcmtNb2RlQnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCBkYXJrVGhlbWUgPSB1c2VVcGRhdGVUaGVtZSgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtkYXJrVGhlbWUudG9nZ2xlVGhlbWV9IGFyaWEtbGFiZWw9J2RlbGV0ZSc+XHJcbiAgICAgICAgPEJyaWdodG5lc3M0T3V0bGluZWRJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7XHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFN3aXRjaCxcclxuICBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nXHJcbmltcG9ydCBCcmlnaHRuZXNzNE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczRPdXRsaW5lZCdcclxuaW1wb3J0IHsgdXNlVXBkYXRlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZGFya0xpc3RJdGVtOiB7XHJcbiAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBEYXJrTW9kZUxpc3RTd2l0Y2ggPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgZGFya1RoZW1lID0gdXNlVXBkYXRlVGhlbWUoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW0+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEJyaWdodG5lc3M0T3V0bGluZWRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRhcmtMaXN0SXRlbX1cclxuICAgICAgICBpZD0nc3dpdGNoLWxpc3QtbGFiZWwtZGFyaydcclxuICAgICAgICBkaXNhYmxlVHlwb2dyYXBoeVxyXG4gICAgICA+XHJcbiAgICAgICAge2RhcmtUaGVtZS5pc0RhcmtUaGVtZSA/ICdMaWdodCcgOiAnRGFyayd9XHJcbiAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgZWRnZT0nZW5kJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2RhcmtUaGVtZS50b2dnbGVUaGVtZX1cclxuICAgICAgICAgIGNoZWNrZWQ9e2RhcmtUaGVtZS5pc0RhcmtUaGVtZX1cclxuICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWxsZWRieSc6ICdzd2l0Y2gtbGlzdC1sYWJlbC1kYXJrJyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXJrTW9kZUxpc3RTd2l0Y2hcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBjb3B5Zm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICcjZmFmYWZhJyxcclxuICAgIHBhZGRpbmdUb3A6ICcwLjc1ZW0nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzAuNzVlbScsXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBDb3B5cmlnaHQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgeyBzaXRlRGF0YSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlmb290ZXJ9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+e3NpdGVEYXRhLmNvcHlyaWdodH0gfDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzAuNWVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmlkYW5iYXJvbi5jb20nXHJcbiAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAxMDAgMTAwJ1xyXG4gICAgICAgICAgICB3aWR0aD0nMTVweCdcclxuICAgICAgICAgICAgaGVpZ2h0PScxNXB4J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9J000OSAzYTQ3IDQ3IDAgMDAtMTQgOTEgMiAyIDAgMDAzLTFsNC0xOWExMiAxMiAwIDAxLTQtNSAxMyAxMyAwIDAxLTEtNiAxMiAxMiAwIDAxMS02IDEyIDEyIDAgMDE1LTQgMTMgMTMgMCAwMTYtMiAxMyAxMyAwIDAxNyAyIDEyIDEyIDAgMDE0IDQgMTMgMTMgMCAwMTIgNiAxOSAxOSAwIDAxLTEgN2wtNCAxMC03IDE2djFoMWE0NyA0NyAwIDAwNDYtNDVDOTkgMjQgNzcgMiA0OSAzem0xMSAzMGExMyAxMyAwIDAxLTQgNSAxMyAxMyAwIDAxLTEzIDAgMTMgMTMgMCAwMS01LTUgMTIgMTIgMCAwMTAtMTIgMTMgMTMgMCAwMTUtNSAxMiAxMiAwIDAxMTMgMCAxMyAxMyAwIDAxNCA1IDEyIDEyIDAgMDEwIDEyeidcclxuICAgICAgICAgICAgICBmaWxsPScjZmZmJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41ZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2NoaWtvb20nXHJcbiAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAxMDAgMTAwJ1xyXG4gICAgICAgICAgICB3aWR0aD0nMTVweCdcclxuICAgICAgICAgICAgaGVpZ2h0PScxNXB4J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9J001MCA1YTQ3IDQ3IDAgMDAtMTUgOTJjMiAwIDMtMSAzLTN2LThjLTEzIDMtMTYtNi0xNi02LTItNS01LTctNS03LTUtMyAwLTMgMC0zIDUgMSA3IDUgNyA1IDUgNyAxMSA1IDE0IDRhMTAgMTAgMCAwMTMtNmMtMTAtMS0yMS01LTIxLTI0YTE4IDE4IDAgMDE0LTEyYzAtMS0yLTYgMS0xMyAwIDAgNC0xIDEzIDVhNDUgNDUgMCAwMTIzIDBjOS02IDEzLTUgMTMtNSAzIDcgMSAxMiAxIDEzYTE4IDE4IDAgMDE1IDEyYzAgMTktMTEgMjMtMjIgMjQgMiAxIDMgNCAzIDh2MTNjMCAyIDEgMyA0IDNBNDcgNDcgMCAwMDUwIDV6J1xyXG4gICAgICAgICAgICAgIGZpbGw9JyNmZmYnXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWN0QnV0dG9uIGZyb20gJy4uL0NvbnRhY3RCdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi9Db3B5cmlnaHQnXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsIC0gMSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICcjZmFmYWZhJyxcclxuICB9LFxyXG4gIGdyaWRDb2x1bW46IHtcclxuICAgIG1hcmdpbjogJzNlbScsXHJcbiAgfSxcclxuICBncmlkTGluazoge1xyXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgICAnJjp2aXNpdGVkJzoge1xyXG4gICAgICBjb2xvcjogJyNmYWZhZmEnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IEdyaWRMaW5rID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgcGF0aCwgdGV4dCB9ID0gcHJvcHNcclxuICBjb25zdCB7IGdldEN1cnJlbnRQYWdlSW5kZWNpZXMsIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcbiAgY29uc3QgaGFuZGxlTGlua0NsaWNrID0gcGF0aCA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzKGdldEN1cnJlbnRQYWdlSW5kZWNpZXMocGF0aCkpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBpdGVtXHJcbiAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgaHJlZj17cGF0aH1cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUxpbmtDbGljayhwYXRoKVxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExpbmt9XHJcbiAgICAgIFxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEZvb3RlciA9IHByb3BzID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvJ30gdGV4dD17c2l0ZURhdGEucGFnZXMuaG9tZX0gLz5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9hYm91dCd9IHRleHQ9e3NpdGVEYXRhLnBhZ2VzLmFib3V0fSAvPlxyXG4gICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17Jy9jb250YWN0J30gdGV4dD17c2l0ZURhdGEucGFnZXMuY29udGFjdH0gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMvcHJpdmF0ZSd9IHRleHQ9e3NpdGVEYXRhLnBhZ2VzLnByaXZhdGV9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvc2VydmljZXMvY29tcGFueSd9IHRleHQ9e3NpdGVEYXRhLnBhZ2VzLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rXHJcbiAgICAgICAgICAgICAgICBwYXRoPXsnL3NlcnZpY2VzL2V2ZW50cyd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtzaXRlRGF0YS5wYWdlcy5ldmVudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvcmV2b2x1dGlvbid9IHRleHQ9e3NpdGVEYXRhLnBhZ2VzLnJldm9sdXRpb259IC8+XHJcbiAgICAgICAgICAgICAgPEdyaWRMaW5rIHBhdGg9eycvcmV2b2x1dGlvbid9IHRleHQ9e3NpdGVEYXRhLnBhZ2VzLmJsb2d9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZENvbHVtbn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlZSRnVuVGVhbTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8R3JpZExpbmsgcGF0aD17J3RlbDo5NzI1MjgyMjg2NDAnfSB0ZXh0PXsnMDUyLTgyMjg2NDAnfSAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkTGluayBwYXRoPXsnbWFpbHRvOnN0dWRpb0B2cmZ1bnRlYW0uY29tJ30gdGV4dD17J3N0dWRpb0B2cmZ1bnRlYW0uY29tJ30gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDxDb250YWN0QnV0dG9uIC8+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcclxuaW1wb3J0IHtcclxuICBtYWtlU3R5bGVzLFxyXG4gIFN3aXBlYWJsZURyYXdlcixcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS8nXHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSdcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51J1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnXHJcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSdcclxuaW1wb3J0IEFwcHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcHBzJ1xyXG5pbXBvcnQgQWxsSW5jbHVzaXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWxsSW5jbHVzaXZlJ1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nXHJcbmltcG9ydCBBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCYWxhbmNlV2FsbGV0J1xyXG5pbXBvcnQgR3JvdXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Hcm91cCdcclxuaW1wb3J0IEJ1c2luZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnVzaW5lc3MnXHJcbmltcG9ydCBFbW9qaUV2ZW50c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppRXZlbnRzJ1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcydcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IERhcmtNb2RlTGlzdFN3aXRjaCBmcm9tICcuLi9EYXJrTW9kZUxpc3RTd2l0Y2gnXHJcbmltcG9ydCB7IGV2ZW50IGFzIEdBZXZlbnQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ3RhZydcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG4vLyBjb25zdCBpY29uTWFwcGluZyA9IHtcclxuLy8gICBTZW5kSWNvbixIb21lSWNvbixBcHBzSWNvbixBbGxJbmNsdXNpdmVJY29uLEluZm9JY29uLEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbixHcm91cEljb24sQnVzaW5lc3NJY29uLEVtb2ppRXZlbnRzSWNvblxyXG4vLyB9XHJcblxyXG5jb25zdCBpY29uTWFwcGluZyA9IHtcclxuICBTZW5kSWNvbjogPFNlbmRJY29uIC8+LFxyXG4gIEhvbWVJY29uOiA8SG9tZUljb24gLz4sXHJcbiAgQXBwc0ljb246IDxBcHBzSWNvbiAvPixcclxuICBBbGxJbmNsdXNpdmVJY29uOiA8QWxsSW5jbHVzaXZlSWNvbiAvPixcclxuICBJbmZvSWNvbjogPEluZm9JY29uIC8+LFxyXG4gIEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbjogPEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiAvPixcclxuICBHcm91cEljb246IDxHcm91cEljb24gLz4sXHJcbiAgQnVzaW5lc3NJY29uOiA8QnVzaW5lc3NJY29uIC8+LFxyXG4gIEVtb2ppRXZlbnRzSWNvbjogPEVtb2ppRXZlbnRzSWNvbiAvPixcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRvb2xiYXJNYXJnaW46IHtcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnM2VtJyxcclxuICB9LFxyXG4gIG1lbnVJY29uQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgfSxcclxuICBkcmF3ZXJJdGVtOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LnRhYixcclxuICAgIG9wYWNpdHk6IDAuNyxcclxuICB9LFxyXG4gIGRyYXdlckl0ZW1TZWxlY3RlZDoge1xyXG4gICAgJyYgLk11aUxpc3RJdGVtVGV4dC1yb290Jzoge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNwZWNpYWxEcmF3ZXJJdGVtOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uOiB7XHJcbiAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICBjb2xvcjogJyNmYWZhZmEnLFxyXG4gIH0sXHJcbiAgZHJhd2VyVGV4dEljb246IHtcclxuICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgfSxcclxuICBuZXN0ZWQ6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgRHJhd2VyTWVudSA9IHByb3BzID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7XHJcbiAgICBwYWdlcyxcclxuICAgIGN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzLFxyXG4gIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG5cclxuICBjb25zdCBpT1MgPSBwcm9jZXNzLmJyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFt2YWx1ZSwgbnVsbF0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Yk1lbnVDbGljayA9IChldmVudCwgcGFyZW50SW5kZXgsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbihmYWxzZSlcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMoW3BhcmVudEluZGV4LCBpbmRleF0pXHJcbiAgfVxyXG4gIGNvbnN0IHsgc2l0ZURhdGEsIGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SWNvbkNvbnRhaW5lcn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuKCFkcmF3ZXJPcGVuKX1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckljb259IC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPFN3aXBlYWJsZURyYXdlclxyXG4gICAgICAgIGRpc2FibGVCYWNrZHJvcFRyYW5zaXRpb249eyFpT1N9XHJcbiAgICAgICAgZGlzYWJsZURpc2NvdmVyeT17aU9TfVxyXG4gICAgICAgIG9wZW49e2RyYXdlck9wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgb25PcGVuPXsoKSA9PiBzZXREcmF3ZXJPcGVuKHRydWUpfVxyXG4gICAgICAgIGNsYXNzZXM9e3sgcGFwZXI6IGNsYXNzZXMuZHJhd2VyIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufT48L2Rpdj5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgY29tcG9uZW50PSduYXYnXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J25lc3RlZC1saXN0LXN1YmhlYWRlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGFya01vZGVMaXN0U3dpdGNoIC8+XHJcbiAgICAgICAgICB7cGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwYWdlLnBhdGh9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgZGl2aWRlclxyXG4gICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtwYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17aW5kZXggPT09IGN1cnJlbnRQYWdlSW5kZWNpZXNbMF19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyYXdlck9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVRhYkNoYW5nZShldmVudCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIEdBZXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnTWVudSBCdXR0b25zJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGBNb2JpbGUgRHJhd2VyICR7cGFnZS5uYW1lfSBDbGlja2AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlLnNwZWNpYWwgPyBjbGFzc2VzLnNwZWNpYWxEcmF3ZXJJdGVtIDogJyd9XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHNlbGVjdGVkOiBjbGFzc2VzLmRyYXdlckl0ZW1TZWxlY3RlZCB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlclRleHRJY29ufT5cclxuICAgICAgICAgICAgICAgICAge2ljb25NYXBwaW5nW3BhZ2UuaWNvbl19XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckl0ZW19IGRpc2FibGVUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnZS5uYW1lTGFuZ1tsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIHtwYWdlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIG1lbnVPcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUljb25Db250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRMZXNzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUljb25Db250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVudU9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAge3BhZ2UuY2hpbGRyZW4ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17bWVudU9wZW59IHRpbWVvdXQ9J2F1dG8nIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD0nZGl2JyBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnZS5jaGlsZHJlbi5tYXAoKGNoaWxkUGFnZSwgY2hpbGRJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRQYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y2hpbGRQYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRQYWdlSW5kZWNpZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJhd2VyT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUYWJDaGFuZ2UoZXZlbnQsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Yk1lbnVDbGljayhldmVudCwgaW5kZXgsIGNoaWxkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgR0FldmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ01lbnUgQnV0dG9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGBNb2JpbGUgRHJhd2VyICR7Y2hpbGRQYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBBY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBzZWxlY3RlZDogY2xhc3Nlcy5kcmF3ZXJJdGVtU2VsZWN0ZWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyVGV4dEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uTWFwcGluZ1tjaGlsZFBhZ2UuaWNvbl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZFBhZ2UubmFtZUxhbmdbbGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvU3dpcGVhYmxlRHJhd2VyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlck1lbnVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgRHJhd2VyTWVudSBmcm9tICcuL0RyYXdlck1lbnUnXHJcbmltcG9ydCB7IEVsZXZhdGlvblNjcm9sbCB9IGZyb20gJy4uL2hlbHBlcnMvdWktaGVscGVycydcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgdXNlVGhlbWUsXHJcbiAgSGlkZGVuLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlLydcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgVGFic01lbnUgZnJvbSAnLi9UYWJzTWVudSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm1vZGFsICsgMSxcclxuICB9LFxyXG4gIHRvb2xiYXJNYXJnaW46IHtcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMi40ZW0nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzEuNGVtJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXJUZXh0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnMWVtJyxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGhlaWdodDogJzdlbScsXHJcbiAgICBwYWRkaW5nVG9wOiAnMWVtJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICcxZW0nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGhlaWdodDogJzZlbScsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGhlaWdodDogJzVlbScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nb0J1dHRvbjoge1xyXG4gICAgcGFkZGluZzogJzAnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBzZXRDdXJyZW50UGFnZUluZGVjaWVzIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKVxyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZSwgdmFsdWUpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMoW3ZhbHVlLCBudWxsXSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249J2ZpeGVkJyBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMiUnLCBwYWRkaW5nUmlnaHQ6ICcyJScgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWJDaGFuZ2UoJ18nLCAwKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0J1dHRvbn1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgaHJlZj0nLydcclxuICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cclxuICAgICAgICAgICAgICAgIGlkPSdMYXllcl8xJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPSdMYXllciAxJ1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDU2MiA0ODUnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT57YC5jbHMtM3tmaWxsOm5vbmU7c3Ryb2tlOiM3YmFkZTI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweH0uY2xzLTR7ZmlsbDojMDA1OGE4fWB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9JyNlNmU2ZTYnIGQ9J00yODEgM0wzIDQ4MWgyNzhWM3onIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPScjZjBmMGYwJyBkPSdNMjgxIDNsMjc4IDQ3OEgyODFWM3onIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nscy0zJ1xyXG4gICAgICAgICAgICAgICAgICBkPSdNMjgxIDNsMjc2IDQ3OUg0TDI4MSAzek0yODEgM3YxNjZNNCA0ODJsMTY3LTcwTTU1OCA0ODJsLTE2MC02NydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nscy00J1xyXG4gICAgICAgICAgICAgICAgICBkPSdNMjQ5IDIxOWwxNS01MWgxOGwtMTkgNjZoLTI4bC0xOS02NmgxOHpNMjg1IDIzNHYtNjZoMzVxMTIgMCAxNyA0dDUgMTZxMCAxMS0zIDE1dC0xMSA2cTEzIDEgMTMgMTJ2MTNoLTE3di0xMHEwLTgtOC04aC0xM3YxOHptMTgtMzNoMTNxNSAwIDYtMnQyLThhMTUgMTUgMCAwMC0xLTZsLTYtMmgtMTR6TTE4NiAzMjZ2LTY2aDQ3djE1aC0yOXYxM2gyN3YxNGgtMjd2MjR6TTI0MSAyNjBoMTh2NDNxMCA2IDIgN2MxIDEgNCAyIDkgMnE3IDAgOC0yYzItMSAyLTMgMi02di00NGgxOHY0NHEwIDEzLTYgMTh0LTIxIDVxLTE3IDAtMjMtNHQtNy0xOHpNMzA5IDI2MGgzMGwxOSA1MHYtNTBoMTh2NjZoLTMwbC0xOS00OXY0OWgtMTh6TTE0MCAzNTNoNTJ2MTVoLTE3djUxaC0xOHYtNTFoLTE3ek0xOTggNDE5di02Nmg0OHYxNGgtMzB2MTJoMjh2MTJoLTI4djEzaDMxdjE1ek0yNTIgNDE5bDIwLTY2aDI3bDIwIDY2aC0xOGwtMy0xMmgtMjRsLTMgMTJ6bTI2LTI1aDE2bC04LTI4ek0zMjQgMzUzaDI4bDEzIDQxIDEyLTQyaDI5djY2aC0xOHYtNDZsLTE1IDQ3aC0xNmwtMTUtNDd2NDdoLTE4eidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9mdW50ZWFtLWxvZ28tYnJpZ2h0LnN2ZydcclxuICAgICAgICAgICAgICAgIGFsdD0nZnVudGVhbSBsb2dvJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyVGV4dH0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5WUkZ1blRlYW08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+QmV0dGVyIFRoYW4gUmVhbGl0eTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgIDxUYWJzTWVudSAvPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPEhpZGRlbiBsZ1VwPlxyXG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51IC8+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8L0VsZXZhdGlvblNjcm9sbD5cclxuICAgICAgPGRpdiBuYW1lPSd0b29sYmFyLXNwYWNpbmcnIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufT48L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJ1xyXG5pbXBvcnQgeyBEYXJrTW9kZUJ1dHRvbiB9IGZyb20gJy4uL0RhcmtNb2RlQnV0dG9uJ1xyXG5pbXBvcnQge1xyXG4gIFRhYnMsXHJcbiAgVGFiLFxyXG4gIEJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIENsaWNrQXdheUxpc3RlbmVyLFxyXG4gIEdyb3csXHJcbiAgUGFwZXIsXHJcbiAgUG9wcGVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlLydcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGFnZXNDb250ZXh0J1xyXG5pbXBvcnQgeyBldmVudCBhcyBHQWV2ZW50IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2d0YWcnXHJcbmltcG9ydCBMYW5ndWFnZUJ1dHRvbiBmcm9tICcuLi9MYW5ndWFnZUJ1dHRvbidcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTGFuZ0NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBtYXJnaW5Cb3R0b206ICczZW0nLFxyXG4gIH0sXHJcbiAgdGFiQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkudGFiLFxyXG4gICAgbWluV2lkdGg6IDEwLFxyXG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmVzdGltYXRlLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICB6SW5kZXg6IDEzMDIsXHJcbiAgfSxcclxuICBtZW51SXRlbToge1xyXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXHJcbiAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgVGFic01lbnUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHtcclxuICAgIHBhZ2VzLFxyXG4gICAgY3VycmVudFBhZ2VJbmRlY2llcyxcclxuICAgIHNldEN1cnJlbnRQYWdlSW5kZWNpZXMsXHJcbiAgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgLy8gc2V0Q3VycmVudFBhZ2VJbmRlY2llcyhbdmFsdWUsIG51bGxdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgc2V0TWVudU9wZW4odHJ1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbClcclxuICAgIHNldE1lbnVPcGVuKGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVMaXN0S2V5RG93biA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Yk1lbnVDbGljayA9IChldmVudCwgcGFyZW50SW5kZXgsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXHJcbiAgICAvLyBzZXRDdXJyZW50UGFnZUluZGVjaWVzKFtwYXJlbnRJbmRleCwgaW5kZXhdKVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRhYnNcclxuICAgICAgICB2YWx1ZT17Y3VycmVudFBhZ2VJbmRlY2llc1swXX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJDb250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBwYWdlLmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGFyaWEtb3ducz17XHJcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiAmJiBhbmNob3JFbCA/IGBtZW51LSR7cGFnZS5uYW1lfWAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD17aGFzQ2hpbGRyZW4gJiYgYW5jaG9yRWwgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtcclxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID8gZXZlbnQgPT4gaGFuZGxlTWVudUNsaWNrKGV2ZW50KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbD17cGFnZS5uYW1lTGFuZ1tsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgaHJlZj17cGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgIGtleT17cGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IGBEZXNrdG9wIFRhYnMgJHtwYWdlLm5hbWV9IENsaWNrYCxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIEFjdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvVGFicz5cclxuICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHBhZ2UuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgcmV0dXJuIGhhc0NoaWxkcmVuICYmIGFuY2hvckVsID8gKFxyXG4gICAgICAgICAgPFBvcHBlclxyXG4gICAgICAgICAgICBvcGVuPXttZW51T3Blbn1cclxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxyXG4gICAgICAgICAgICBrZXk9e3BhZ2UucGF0aH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcclxuICAgICAgICAgICAgICA8R3Jvd1xyXG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLm1lbnUgfX0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVNZW51Q2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTWVudUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YG1lbnUtJHtwYWdlLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UuY2hpbGRyZW4ubWFwKChjaGlsZFBhZ2UsIGNoaWxkSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZFBhZ2UucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNZW51Q2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGFiQ2hhbmdlKGV2ZW50LCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Yk1lbnVDbGljayhldmVudCwgaW5kZXgsIGNoaWxkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdNZW51IEJ1dHRvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGBEZXNrdG9wIFRhYnMgJHtjaGlsZFBhZ2UubmFtZX0gQ2xpY2tgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dlYnNpdGUgQWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2NoaWxkUGFnZS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5tZW51SXRlbSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXggPT09IGN1cnJlbnRQYWdlSW5kZWNpZXNbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50UGFnZUluZGVjaWVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkUGFnZS5uYW1lTGFuZ1tsYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1BvcHBlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgJydcclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgICA8RGFya01vZGVCdXR0b24gLz5cclxuICAgICAgPExhbmd1YWdlQnV0dG9uIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgaHJlZj0nL2VzdGltYXRlJ1xyXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIEdBZXZlbnQoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0VzdGltYXRlJyxcclxuICAgICAgICAgICAgYWN0aW9uOiAnRGVza3RvcCBUYWJzIFNwZWNpYWwgRXN0aW1hdGUgQ2xpY2snLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1dlYnNpdGUgQWN0aW9ucycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaXRlRGF0YS5wcmljZUVzdGltYXRlfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFic01lbnVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSdcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJ1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9MYW5nQ29udGV4dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVVwZGF0ZVRoZW1lIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZmxhZzp7XHJcbiAgICB3aWR0aDonMzBweCdcclxuICB9XHJcbn0pKVxyXG5cclxuY29uc3QgTGFuZ3VhZ2VCdXR0b24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBsYW5ndWFnZSwgbGFuZ3VhZ2VzLCBjaGFuZ2VMYW5ndWFnZVRvIH0gPSB1c2VMYW5ndWFnZUNvbnRleHQoKVxyXG4gIGNvbnN0IHtjaGFuZ2VUaGVtZUxhbmd1YWdlfSA9IHVzZVVwZGF0ZVRoZW1lKClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gbGFuZyA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKVxyXG4gICAgY2hhbmdlTGFuZ3VhZ2VUbyhsYW5nKVxyXG4gICAgY2hhbmdlVGhlbWVMYW5ndWFnZShsYW5nKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBhcmlhLWNvbnRyb2xzPSdzaW1wbGUtbWVudSdcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPSd0cnVlJ1xyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuZmxhZ30gc3JjPXtgLi9hc3NldHMvZmxhZ3MvJHtsYW5ndWFnZX0uc3ZnYH0gYWx0PXtgJHtsYW5ndWFnZX0gZmxhZ2B9IC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGlkPSdzaW1wbGUtbWVudSdcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6ICc5OTk5JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2xhbmd1YWdlcy5tYXAoc2F2ZWRMYW5ndWFnZSA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAga2V5PXtzYXZlZExhbmd1YWdlfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5wYXRobmFtZX0/bG49JHtzYXZlZExhbmd1YWdlfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChzYXZlZExhbmd1YWdlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuZmxhZ30gc3JjPXtgLi9hc3NldHMvZmxhZ3MvJHtzYXZlZExhbmd1YWdlfS5zdmdgfSBhbHQ9e2Ake3NhdmVkTGFuZ3VhZ2V9IGZsYWdgfSAvPlxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUJ1dHRvblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW5UZXh0KHN0cmluZywgbnVtT2ZDaGFycyl7XHJcbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCxudW1PZkNoYXJzKSArICcuLi4nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFbGV2YXRpb25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAwLFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gIH0pXHJcbn1cclxuXHJcbkVsZXZhdGlvblNjcm9sbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbi8vIGNsYXNzIFNjcm9sbFRvVG9wIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbi8vICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuLy8gICBjb21wb25lbnREaWRVcGRhdGUgPSBwcmV2UHJvcHMgPT4ge1xyXG4vLyAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24gIT09IHByZXZQcm9wcy5sb2NhdGlvbikgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbi8vICAgfVxyXG4vLyAgIHJlbmRlciA9ICgpID0+IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTY3JvbGxUb1RvcClcclxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB2clBpbmsgPSAnI2Q4NDk4NydcclxuY29uc3QgdnJCbHVlID0gJyMzMDZjYTAnXHJcblxyXG5jb25zdCBoZV90eXBvZ3JhcGh5ID0ge1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1J1YmlrJyxcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSdWJpaycsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUnViaWsnLFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgZm9udEZhbWlseTogJ1J1YmlrJyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSdWJpaycsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUnViaWsnLFxyXG4gICAgfSxcclxuICAgIHRhYjoge1xyXG4gICAgICBmb250RmFtaWx5OiAnUnViaWsnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIH0sXHJcbiAgICBlc3RpbWF0ZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUGFjaWZpY28nLFxyXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbGlzdEljb246IHtcclxuICAgICAgZm9udFNpemU6ICcyZW0nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDIzcHggIzU1NScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IGVuX3R5cG9ncmFwaHkgPSB7XHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICBmb250RmFtaWx5OiAnUmFsZXdheScsXHJcbiAgICB9LFxyXG4gICAgdGFiOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcclxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICB9LFxyXG4gICAgZXN0aW1hdGU6IHtcclxuICAgICAgZm9udEZhbWlseTogJ1BhY2lmaWNvJyxcclxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxpc3RJY29uOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMmVtJyxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC0xNWRlZyknLFxyXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCAyM3B4ICM1NTUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5jb25zdCBsaWdodFBhbGxldGUgPSB7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgIGRpZ2lQaW5rOiB2clBpbmssXHJcbiAgICAgIGRpZ2lCbHVlOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiB2ckJsdWUsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyUGluayxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5jb25zdCBkYXJrUGFsbGV0ZSA9IHtcclxuICBwYWxldHRlOiB7XHJcbiAgICB0eXBlOiAnZGFyaycsXHJcbiAgICBjb21tb246IHtcclxuICAgICAgZGlnaVBpbms6IHZyUGluayxcclxuICAgICAgZGlnaUJsdWU6IHZyQmx1ZSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IHZyUGluayxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogdnJCbHVlLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgcGFwZXI6ICcjNDI0MjQyJyxcclxuICAgICAgZGVmYXVsdDogJyMzMDMwMzAnLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5jb25zdCB0aGVtZUFsbCA9IHtcclxuICBvdmVycmlkZXM6IHtcclxuICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGNvbG9yOiB2ckJsdWUsXHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpRGl2aWRlcjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcyZW0nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUFjY29yZGlvbjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgJyYuTXVpLWV4cGFuZGVkJzoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmxldCBkTGlnaHRUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAuLi5lbl90eXBvZ3JhcGh5LFxyXG4gIC4uLmxpZ2h0UGFsbGV0ZSxcclxuICAuLi50aGVtZUFsbCxcclxufSlcclxuXHJcbmRMaWdodFRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkTGlnaHRUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSBkTGlnaHRUaGVtZVxyXG5cclxubGV0IGRMaWdodFRoZW1lX2hlID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmhlX3R5cG9ncmFwaHksXHJcbiAgLi4ubGlnaHRQYWxsZXRlLFxyXG4gIC4uLnRoZW1lQWxsLFxyXG59KVxyXG5cclxuZExpZ2h0VGhlbWVfaGUgPSByZXNwb25zaXZlRm9udFNpemVzKGRMaWdodFRoZW1lX2hlKVxyXG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZV9oZSA9IGRMaWdodFRoZW1lX2hlXHJcblxyXG5sZXQgZERhcmtUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAuLi5lbl90eXBvZ3JhcGh5LFxyXG4gIC4uLmRhcmtQYWxsZXRlLFxyXG4gIC4uLnRoZW1lQWxsLFxyXG59KVxyXG5cclxuZERhcmtUaGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXMoZERhcmtUaGVtZSlcclxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IGREYXJrVGhlbWVcclxuXHJcbmxldCBkRGFya1RoZW1lX2hlID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIC4uLmhlX3R5cG9ncmFwaHksXHJcbiAgLi4uZGFya1BhbGxldGUsXHJcbiAgLi4udGhlbWVBbGwsXHJcbn0pXHJcblxyXG5kRGFya1RoZW1lX2hlID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhkRGFya1RoZW1lX2hlKVxyXG5leHBvcnQgY29uc3QgZGFya1RoZW1lX2hlID0gZERhcmtUaGVtZV9oZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2VXYWxsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FsbEluY2x1c2l2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXBwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczRPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnVzaW5lc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppRXZlbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luZm9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1doYXRzQXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvU3BlZWREaWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvU3BlZWREaWFsQWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvU3BlZWREaWFsSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==