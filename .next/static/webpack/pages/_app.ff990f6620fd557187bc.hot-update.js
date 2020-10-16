webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink = /*#__PURE__*/function (_Component) {
  _inherits(OutboundLink, _Component);

  var _super = _createSuper(OutboundLink);

  function OutboundLink() {
    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick,
          trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink.trackLink(eventMeta, function () {}, trackerNames);
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          target = _this$props2.target,
          oldProps = _objectWithoutProperties(_this$props2, ["to", "target"]);

      var props = _objectSpread(_objectSpread({}, oldProps), {}, {
        target: target,
        href: href,
        onClick: this.handleClick
      });

      if (target === NEWTAB) {
        props.rel = "".concat(props.rel ? props.rel : '', " noopener noreferrer").trim();
      }

      delete props.eventLabel;
      delete props.trackerNames;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});


OutboundLink.propTypes = {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  trackerNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};
OutboundLink.defaultProps = {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
};

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/core.js":
/*!************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/core.js ***!
  \************************************************/
/*! exports provided: addTrackers, initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrackers", function() { return addTrackers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;
var _redactEmail = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (_isNotBrowser) return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase, _redactEmail);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }

    if (options.redactEmail === false) {
      _redactEmail = false;
    }

    if (options.useExistingGa) {
      return;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function addTrackers(configsOrTrackingId, options) {
  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;
  addTrackers(configsOrTrackingId, options);
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('arguments');");
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('set', fieldsObject);");
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('send', fieldObject);");
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('send', 'pageview', path);");
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('send', 'pageview', path);");
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {{action: string, category: string}} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function require(rawName, options, trackerName) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      }

      var requireString = trackerName ? "".concat(trackerName, ".require") : 'require'; // Optional Fields

      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga(requireString, name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga(requireString, name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    if (args.length === 1) {
      payload = args[0];
    } else {
      actionType = args[0];
      payload = args[1];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, addTrackers, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, OutboundLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrackers", function() { return addTrackers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/react-ga/dist/esm/core.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialize = _core__WEBPACK_IMPORTED_MODULE_1__["initialize"];

var addTrackers = _core__WEBPACK_IMPORTED_MODULE_1__["addTrackers"];

var ga = _core__WEBPACK_IMPORTED_MODULE_1__["ga"];

var set = _core__WEBPACK_IMPORTED_MODULE_1__["set"];

var send = _core__WEBPACK_IMPORTED_MODULE_1__["send"];

var pageview = _core__WEBPACK_IMPORTED_MODULE_1__["pageview"];

var modalview = _core__WEBPACK_IMPORTED_MODULE_1__["modalview"];

var timing = _core__WEBPACK_IMPORTED_MODULE_1__["timing"];

var event = _core__WEBPACK_IMPORTED_MODULE_1__["event"];

var exception = _core__WEBPACK_IMPORTED_MODULE_1__["exception"];

var plugin = _core__WEBPACK_IMPORTED_MODULE_1__["plugin"];

var outboundLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];

var testModeAPI = _core__WEBPACK_IMPORTED_MODULE_1__["testModeAPI"];

_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_1__), {}, {
  OutboundLink: OutboundLink
}));

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _redactEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redactEmail */ "./node_modules/react-ga/dist/esm/utils/redactEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");


function format() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var titleCase = arguments.length > 1 ? arguments[1] : undefined;
  var redactingEmail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _str = s || '';

  if (titleCase) {
    _str = Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  if (redactingEmail) {
    _str = Object(_redactEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(_str);
  }

  return _str;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  }

  var onerror = options && options.onerror; // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.onerror = onerror;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return typeof s === 'string' && s.indexOf('@') !== -1;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/redactEmail.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/redactEmail.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return redactEmail; });
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");


var redacted = 'REDACTED (Potential Email Address)';
function redactEmail(string) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_1__["default"])(string)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_0__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i; // test

function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s && s.toString().replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var _src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/contexts/PagesContext */ "./src/contexts/PagesContext.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_ui_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/ui/Header/Header */ "./src/ui/Header/Header.jsx");
/* harmony import */ var _src_ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ui/Footer/Footer */ "./src/ui/Footer/Footer.jsx");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");


var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].initialize('G-ZZVGT0FZWP');
function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_src_contexts_PagesContext__WEBPACK_IMPORTED_MODULE_4__["PagesProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_src_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__["ThemeContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_src_ui_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx(_src_ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MyApp;
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL2NvbXBvbmVudHMvT3V0Ym91bmRMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vY29yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvY29uc29sZS9sb2cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9jb25zb2xlL3dhcm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9sb2FkR0EuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9taWdodEJlRW1haWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9yZWRhY3RFbWFpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL3V0aWxzL3JlbW92ZUxlYWRpbmdTbGFzaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL3V0aWxzL3Rlc3RNb2RlQVBJLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvdG9UaXRsZUNhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy90cmltLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbInJlYWN0R0EiLCJpbml0aWFsaXplIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdUIsMkJBQTJCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFeFgsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxpREFBaUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFcGhCLHFEQUFxRCwrQkFBK0IsOERBQThELFlBQVksb0NBQW9DLDZEQUE2RCxZQUFZLDZCQUE2QixPQUFPLDJCQUEyQiwwQ0FBMEMsd0VBQXdFLDJCQUEyQixFQUFFLEVBQUUsZUFBZTs7QUFFMWUsMERBQTBELCtCQUErQixpQkFBaUIsc0NBQXNDLFlBQVksWUFBWSx1QkFBdUIsT0FBTyxxQkFBcUIsMENBQTBDLDJCQUEyQixFQUFFLGVBQWU7O0FBRWpULGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7O0FBRXhLLGdDQUFnQyw2REFBNkQseUNBQXlDLDhDQUE4QyxpQ0FBaUMsbURBQW1ELHlEQUF5RCxFQUFFLE9BQU8sdUNBQXVDLEVBQUUsaURBQWlELEdBQUc7O0FBRXZhLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyxzQ0FBc0Msd0VBQXdFLDBDQUEwQyw4Q0FBOEMsTUFBTSx3RUFBd0UsR0FBRyxhQUFhLEVBQUUsWUFBWSxjQUFjLEVBQUU7O0FBRWxVLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFdEs7QUFDTjtBQUNNO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxlQUFlO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUs7QUFDL0I7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLCtDQUFTOztBQUVYO0FBQ0EsRUFBRSxtRUFBSTtBQUNOLENBQUM7O0FBRWtDO0FBQ25DO0FBQ0EsY0FBYyxpREFBUztBQUN2QixVQUFVLGlEQUFTO0FBQ25CLE1BQU0saURBQVM7QUFDZixXQUFXLGlEQUFTO0FBQ3BCLGdCQUFnQixpREFBUyxTQUFTLGlEQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFBcUQsK0JBQStCLDhEQUE4RCxZQUFZLG9DQUFvQyw2REFBNkQsWUFBWSw2QkFBNkIsT0FBTywyQkFBMkIsMENBQTBDLHdFQUF3RSwyQkFBMkIsRUFBRSxFQUFFLGVBQWU7O0FBRTFlLDBEQUEwRCwrQkFBK0IsaUJBQWlCLHNDQUFzQyxZQUFZLFlBQVksdUJBQXVCLE9BQU8scUJBQXFCLDBDQUEwQywyQkFBMkIsRUFBRSxlQUFlOztBQUVqVCwwQ0FBMEMsZ0NBQWdDLG9DQUFvQyxvREFBb0QsOERBQThELGdFQUFnRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFblYsZ0NBQWdDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx1REFBdUQsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLGlEQUFpRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUVwaEIsMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NLHVCQUF1QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUV4WCxrQ0FBa0MscUhBQXFIOztBQUV2SiwrQkFBK0IsNkpBQTZKOztBQUU1TCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLGlDQUFpQywrRkFBK0Y7O0FBRWhJLGtDQUFrQyx1REFBdUQ7O0FBRXpGLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDb0M7QUFDd0I7QUFDNUI7QUFDSTtBQUNJO0FBQ0Y7QUFDUTs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QiwwREFBVyxVQUFVLDBEQUFXO0FBQ3hEO0FBQ0EseUJBQXlCLG1FQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDZEQUFNO0FBQ2Y7O0FBRUE7QUFDQSx3RkFBd0YsYUFBYTtBQUNyRztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG1FQUFJO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1FQUFJO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZELDZEQUFNO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxrRUFBRyx5QkFBeUI7QUFDbEMsTUFBTSxrRUFBRztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakI7O0FBRU87QUFDUDtBQUNBLElBQUksbUVBQUk7QUFDUjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtRUFBSTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1FQUFJO0FBQ1I7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLGtFQUFHLGlDQUFpQztBQUN4QyxJQUFJLGtFQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQixXQUFXLE1BQU07QUFDakI7O0FBRU87QUFDUDs7QUFFQTtBQUNBLElBQUksa0VBQUcsaUNBQWlDO0FBQ3hDLElBQUksa0VBQUc7QUFDUCxJQUFJLGtFQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQSxJQUFJLG1FQUFJO0FBQ1I7QUFDQTs7QUFFQSxhQUFhLDJEQUFJOztBQUVqQjtBQUNBLElBQUksbUVBQUk7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLGtFQUFHLHNDQUFzQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxrRUFBRztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFdBQVcsTUFBTTtBQUNqQjs7QUFFTztBQUNQO0FBQ0EsSUFBSSxtRUFBSTtBQUNSO0FBQ0E7O0FBRUEsa0JBQWtCLHlFQUFrQixDQUFDLDJEQUFJOztBQUV6QztBQUNBLElBQUksbUVBQUk7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLGtFQUFHLHNDQUFzQztBQUMvQyxNQUFNLGtFQUFHO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMseUJBQXlCLE9BQU87QUFDaEMsdUJBQXVCLElBQUk7QUFDM0IsdUJBQXVCLE9BQU87QUFDOUIsV0FBVyxNQUFNO0FBQ2pCOztBQUVPO0FBQ1AsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG1FQUFJO0FBQ1Y7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLHVCQUF1QixPQUFPO0FBQzlCLHNCQUFzQixPQUFPO0FBQzdCLHNCQUFzQixJQUFJO0FBQzFCLCtCQUErQixRQUFRO0FBQ3ZDLDBCQUEwQixPQUFPO0FBQ2pDLFlBQVksa0NBQWtDO0FBQzlDOztBQUVPO0FBQ1Asb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQUk7QUFDVjtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsbUVBQUk7QUFDWixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG1FQUFJO0FBQ1osT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxtRUFBSTtBQUNaLE9BQU87QUFDUDtBQUNBLFVBQVUsbUVBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DLHNCQUFzQixRQUFRO0FBQzlCLFdBQVcsTUFBTTtBQUNqQjs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxtRUFBSTtBQUNaLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixxQkFBcUIsT0FBTyxlQUFlO0FBQzNDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFJO0FBQ1o7QUFDQTs7QUFFQSxpQkFBaUIsMkRBQUk7O0FBRXJCO0FBQ0EsUUFBUSxtRUFBSTtBQUNaO0FBQ0E7O0FBRUEsdUZBQXVGOztBQUV2RjtBQUNBO0FBQ0EsVUFBVSxtRUFBSTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG1FQUFJO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLGtFQUFHO0FBQ2I7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxVQUFVLGtFQUFHLDJDQUEyQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0Isb0JBQW9CLE9BQU87QUFDM0Isd0JBQXdCLE9BQU87QUFDL0IscUJBQXFCLE9BQU8sZUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG1FQUFJO0FBQ1osT0FBTztBQUNQLFFBQVEsbUVBQUk7QUFDWixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrRUFBRyxtQ0FBbUM7QUFDbEQsWUFBWSxrRUFBRztBQUNmO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsWUFBWSxrRUFBRyxtQ0FBbUM7QUFDbEQsWUFBWSxrRUFBRztBQUNmO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsWUFBWSxrRUFBRyxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsV0FBVyxTQUFTO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQSxJQUFJLG1FQUFJO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFJO0FBQ1Y7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrQkFBa0IsMERBQVc7QUFDckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwREFBVztBQUMxQixDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3huQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUEwQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsZ0VBQWdFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUVuVixnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCwyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8saURBQWlELGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRXBoQiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFbko7QUFDekI7QUFDbkMsaUJBQWlCLGdEQUFtQjtBQUNkO0FBQ3RCLGtCQUFrQixpREFBb0I7QUFDZjtBQUN2QixTQUFTLHdDQUFXO0FBQ047QUFDZCxVQUFVLHlDQUFZO0FBQ1A7QUFDZixXQUFXLDBDQUFhO0FBQ1I7QUFDaEIsZUFBZSw4Q0FBaUI7QUFDWjtBQUNwQixnQkFBZ0IsK0NBQWtCO0FBQ2I7QUFDckIsYUFBYSw0Q0FBZTtBQUNWO0FBQ2xCLFlBQVksMkNBQWM7QUFDVDtBQUNqQixnQkFBZ0IsK0NBQWtCO0FBQ2I7QUFDckIsYUFBYSw0Q0FBZTtBQUNWO0FBQ2xCLG1CQUFtQixrREFBcUI7QUFDaEI7QUFDeEIsa0JBQWtCLGlEQUFvQjtBQUNmO0FBQ3ZCLGdFQUFtQixpQkFBaUIsZ0VBQW1CO0FBQ3ZELGdFQUFtQixhQUFhLGtEQUFxQjtBQUM5QyxtQkFBbUIsZ0VBQW1CO0FBQzlCLDZGQUE4QixFQUFFLGtDQUFRLEtBQUs7QUFDNUQ7QUFDQSxDQUFDLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDdkNGO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNBO0FBQ3pCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyw0REFBVztBQUN0Qjs7QUFFQTtBQUNBLFdBQVcsNERBQVc7QUFDdEI7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwyQ0FBMkM7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDUTtBQUMxQztBQUNlO0FBQ2YsTUFBTSw2REFBWTtBQUNsQixJQUFJLDZEQUFJO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBTztBQUNRO0FBQ2Y7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCLDhGQUE4Rjs7QUFFL0U7QUFDZixTQUFTLHFEQUFJO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsZ0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixjQUFuQjtBQUVlLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQzNCQyxTQUQyQixHQUNGRCxLQURFLENBQzNCQyxTQUQyQjtBQUFBLE1BQ2hCQyxTQURnQixHQUNGRixLQURFLENBQ2hCRSxTQURnQjtBQUduQ0MsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FORCxFQU1HLEVBTkg7QUFRQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxTQUFELHlGQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRixFQUlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0FERixDQURGO0FBWUQ7O0dBdkJ1QkgsSzs7S0FBQUEsSztBQXlCeEJBLEtBQUssQ0FBQ1csU0FBTixHQUFrQjtBQUNoQlQsV0FBUyxFQUFFVSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURqQjtBQUVoQlgsV0FBUyxFQUFFUyxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmY5OTBmNjYyMGZkNTU3MTg3YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm4gZnJvbSAnLi4vdXRpbHMvY29uc29sZS93YXJuJztcbnZhciBORVdUQUIgPSAnX2JsYW5rJztcbnZhciBNSURETEVDTElDSyA9IDE7XG5cbnZhciBPdXRib3VuZExpbmsgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE91dGJvdW5kTGluaywgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihPdXRib3VuZExpbmspO1xuXG4gIGZ1bmN0aW9uIE91dGJvdW5kTGluaygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3V0Ym91bmRMaW5rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlQ2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wcy50YXJnZXQsXG4gICAgICAgICAgZXZlbnRMYWJlbCA9IF90aGlzJHByb3BzLmV2ZW50TGFiZWwsXG4gICAgICAgICAgdG8gPSBfdGhpcyRwcm9wcy50byxcbiAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMub25DbGljayxcbiAgICAgICAgICB0cmFja2VyTmFtZXMgPSBfdGhpcyRwcm9wcy50cmFja2VyTmFtZXM7XG4gICAgICB2YXIgZXZlbnRNZXRhID0ge1xuICAgICAgICBsYWJlbDogZXZlbnRMYWJlbFxuICAgICAgfTtcbiAgICAgIHZhciBzYW1lVGFyZ2V0ID0gdGFyZ2V0ICE9PSBORVdUQUI7XG4gICAgICB2YXIgbm9ybWFsQ2xpY2sgPSAhKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5idXR0b24gPT09IE1JRERMRUNMSUNLKTtcblxuICAgICAgaWYgKHNhbWVUYXJnZXQgJiYgbm9ybWFsQ2xpY2spIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgT3V0Ym91bmRMaW5rLnRyYWNrTGluayhldmVudE1ldGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRvO1xuICAgICAgICB9LCB0cmFja2VyTmFtZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT3V0Ym91bmRMaW5rLnRyYWNrTGluayhldmVudE1ldGEsIGZ1bmN0aW9uICgpIHt9LCB0cmFja2VyTmFtZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPdXRib3VuZExpbmssIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBocmVmID0gX3RoaXMkcHJvcHMyLnRvLFxuICAgICAgICAgIHRhcmdldCA9IF90aGlzJHByb3BzMi50YXJnZXQsXG4gICAgICAgICAgb2xkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJ0b1wiLCBcInRhcmdldFwiXSk7XG5cbiAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb2xkUHJvcHMpLCB7fSwge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IE5FV1RBQikge1xuICAgICAgICBwcm9wcy5yZWwgPSBcIlwiLmNvbmNhdChwcm9wcy5yZWwgPyBwcm9wcy5yZWwgOiAnJywgXCIgbm9vcGVuZXIgbm9yZWZlcnJlclwiKS50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBwcm9wcy5ldmVudExhYmVsO1xuICAgICAgZGVsZXRlIHByb3BzLnRyYWNrZXJOYW1lcztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHByb3BzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT3V0Ym91bmRMaW5rO1xufShDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoT3V0Ym91bmRMaW5rLCBcInRyYWNrTGlua1wiLCBmdW5jdGlvbiAoKSB7XG4gIHdhcm4oJ2dhIHRyYWNraW5nIG5vdCBlbmFibGVkJyk7XG59KTtcblxuZXhwb3J0IHsgT3V0Ym91bmRMaW5rIGFzIGRlZmF1bHQgfTtcbk91dGJvdW5kTGluay5wcm9wVHlwZXMgPSB7XG4gIGV2ZW50TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyYWNrZXJOYW1lczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbn07XG5PdXRib3VuZExpbmsuZGVmYXVsdFByb3BzID0ge1xuICB0YXJnZXQ6IG51bGwsXG4gIHRvOiBudWxsLFxuICBvbkNsaWNrOiBudWxsLFxuICB0cmFja2VyTmFtZXM6IG51bGxcbn07IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcbiAqIFJlYWN0IEdvb2dsZSBBbmFseXRpY3MgTW9kdWxlXG4gKlxuICogQHBhY2thZ2UgcmVhY3QtZ2FcbiAqIEBhdXRob3IgIEFkYW0gTG9mdGluZyA8YWRhbUBtb3ppbGxhZm91bmRhdGlvbi5vcmc+XG4gKiAgICAgICAgICBBdHVsIFZhcm1hIDxhdHVsQG1vemlsbGFmb3VuZGF0aW9uLm9yZz5cbiAqL1xuXG4vKipcbiAqIFV0aWxpdGllc1xuICovXG5pbXBvcnQgZm9ybWF0IGZyb20gJy4vdXRpbHMvZm9ybWF0JztcbmltcG9ydCByZW1vdmVMZWFkaW5nU2xhc2ggZnJvbSAnLi91dGlscy9yZW1vdmVMZWFkaW5nU2xhc2gnO1xuaW1wb3J0IHRyaW0gZnJvbSAnLi91dGlscy90cmltJztcbmltcG9ydCBsb2FkR0EgZnJvbSAnLi91dGlscy9sb2FkR0EnO1xuaW1wb3J0IHdhcm4gZnJvbSAnLi91dGlscy9jb25zb2xlL3dhcm4nO1xuaW1wb3J0IGxvZyBmcm9tICcuL3V0aWxzL2NvbnNvbGUvbG9nJztcbmltcG9ydCBUZXN0TW9kZUFQSSBmcm9tICcuL3V0aWxzL3Rlc3RNb2RlQVBJJztcblxudmFyIF9pc05vdEJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xuXG52YXIgX2RlYnVnID0gZmFsc2U7XG52YXIgX3RpdGxlQ2FzZSA9IHRydWU7XG52YXIgX3Rlc3RNb2RlID0gZmFsc2U7XG52YXIgX2Fsd2F5c1NlbmRUb0RlZmF1bHRUcmFja2VyID0gdHJ1ZTtcbnZhciBfcmVkYWN0RW1haWwgPSB0cnVlO1xuXG52YXIgaW50ZXJuYWxHYSA9IGZ1bmN0aW9uIGludGVybmFsR2EoKSB7XG4gIHZhciBfd2luZG93O1xuXG4gIGlmIChfdGVzdE1vZGUpIHJldHVybiBUZXN0TW9kZUFQSS5nYS5hcHBseShUZXN0TW9kZUFQSSwgYXJndW1lbnRzKTtcbiAgaWYgKF9pc05vdEJyb3dzZXIpIHJldHVybiBmYWxzZTtcbiAgaWYgKCF3aW5kb3cuZ2EpIHJldHVybiB3YXJuKCdSZWFjdEdBLmluaXRpYWxpemUgbXVzdCBiZSBjYWxsZWQgZmlyc3Qgb3IgR29vZ2xlQW5hbHl0aWNzIHNob3VsZCBiZSBsb2FkZWQgbWFudWFsbHknKTtcbiAgcmV0dXJuIChfd2luZG93ID0gd2luZG93KS5nYS5hcHBseShfd2luZG93LCBhcmd1bWVudHMpO1xufTtcblxuZnVuY3Rpb24gX2Zvcm1hdChzKSB7XG4gIHJldHVybiBmb3JtYXQocywgX3RpdGxlQ2FzZSwgX3JlZGFjdEVtYWlsKTtcbn1cblxuZnVuY3Rpb24gX2dhQ29tbWFuZCh0cmFja2VyTmFtZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGNvbW1hbmQgPSBhcmdzWzBdO1xuXG4gIGlmICh0eXBlb2YgaW50ZXJuYWxHYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgY29tbWFuZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHdhcm4oJ2dhIGNvbW1hbmQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWx3YXlzU2VuZFRvRGVmYXVsdFRyYWNrZXIgfHwgIUFycmF5LmlzQXJyYXkodHJhY2tlck5hbWVzKSkgaW50ZXJuYWxHYS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHJhY2tlck5hbWVzKSkge1xuICAgICAgdHJhY2tlck5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaW50ZXJuYWxHYS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShbXCJcIi5jb25jYXQobmFtZSwgXCIuXCIpLmNvbmNhdChjb21tYW5kKV0uY29uY2F0KGFyZ3Muc2xpY2UoMSkpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2luaXRpYWxpemUoZ2FUcmFja2luZ0lELCBvcHRpb25zKSB7XG4gIGlmICghZ2FUcmFja2luZ0lEKSB7XG4gICAgd2FybignZ2FUcmFja2luZ0lEIGlzIHJlcXVpcmVkIGluIGluaXRpYWxpemUoKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgX2RlYnVnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy50aXRsZUNhc2UgPT09IGZhbHNlKSB7XG4gICAgICBfdGl0bGVDYXNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucmVkYWN0RW1haWwgPT09IGZhbHNlKSB7XG4gICAgICBfcmVkYWN0RW1haWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy51c2VFeGlzdGluZ0dhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nYU9wdGlvbnMpIHtcbiAgICBpbnRlcm5hbEdhKCdjcmVhdGUnLCBnYVRyYWNraW5nSUQsIG9wdGlvbnMuZ2FPcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbEdhKCdjcmVhdGUnLCBnYVRyYWNraW5nSUQsICdhdXRvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRyYWNrZXJzKGNvbmZpZ3NPclRyYWNraW5nSWQsIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnc09yVHJhY2tpbmdJZCkpIHtcbiAgICBjb25maWdzT3JUcmFja2luZ0lkLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgaWYgKF90eXBlb2YoY29uZmlnKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgd2FybignQWxsIGNvbmZpZ3MgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfaW5pdGlhbGl6ZShjb25maWcudHJhY2tpbmdJZCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBfaW5pdGlhbGl6ZShjb25maWdzT3JUcmFja2luZ0lkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoY29uZmlnc09yVHJhY2tpbmdJZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnRlc3RNb2RlID09PSB0cnVlKSB7XG4gICAgX3Rlc3RNb2RlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoX2lzTm90QnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zLnN0YW5kYXJkSW1wbGVtZW50YXRpb24gIT09IHRydWUpIGxvYWRHQShvcHRpb25zKTtcbiAgfVxuXG4gIF9hbHdheXNTZW5kVG9EZWZhdWx0VHJhY2tlciA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuYWx3YXlzU2VuZFRvRGVmYXVsdFRyYWNrZXIgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuYWx3YXlzU2VuZFRvRGVmYXVsdFRyYWNrZXIgOiB0cnVlO1xuICBhZGRUcmFja2Vycyhjb25maWdzT3JUcmFja2luZ0lkLCBvcHRpb25zKTtcbn1cbi8qKlxuICogZ2E6XG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBHQSBvYmplY3QuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdhKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgaW50ZXJuYWxHYS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gICAgaWYgKF9kZWJ1Zykge1xuICAgICAgbG9nKFwiY2FsbGVkIGdhKCdhcmd1bWVudHMnKTtcIik7XG4gICAgICBsb2coXCJ3aXRoIGFyZ3VtZW50czogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGFyZ3MpKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5nYTtcbn1cbi8qKlxuICogc2V0OlxuICogR0EgdHJhY2tlciBzZXQgbWV0aG9kXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGRzT2JqZWN0IC0gYSBmaWVsZC92YWx1ZSBwYWlyIG9yIGEgZ3JvdXAgb2YgZmllbGQvdmFsdWUgcGFpcnMgb24gdGhlIHRyYWNrZXJcbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQoZmllbGRzT2JqZWN0LCB0cmFja2VyTmFtZXMpIHtcbiAgaWYgKCFmaWVsZHNPYmplY3QpIHtcbiAgICB3YXJuKCdgZmllbGRzT2JqZWN0YCBpcyByZXF1aXJlZCBpbiAuc2V0KCknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoX3R5cGVvZihmaWVsZHNPYmplY3QpICE9PSAnb2JqZWN0Jykge1xuICAgIHdhcm4oJ0V4cGVjdGVkIGBmaWVsZHNPYmplY3RgIGFyZyB0byBiZSBhbiBPYmplY3QnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZmllbGRzT2JqZWN0KS5sZW5ndGggPT09IDApIHtcbiAgICB3YXJuKCdlbXB0eSBgZmllbGRzT2JqZWN0YCBnaXZlbiB0byAuc2V0KCknKTtcbiAgfVxuXG4gIF9nYUNvbW1hbmQodHJhY2tlck5hbWVzLCAnc2V0JywgZmllbGRzT2JqZWN0KTtcblxuICBpZiAoX2RlYnVnKSB7XG4gICAgbG9nKFwiY2FsbGVkIGdhKCdzZXQnLCBmaWVsZHNPYmplY3QpO1wiKTtcbiAgICBsb2coXCJ3aXRoIGZpZWxkc09iamVjdDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGZpZWxkc09iamVjdCkpKTtcbiAgfVxufVxuLyoqXG4gKiBzZW5kOlxuICogQ2xvbmUgb2YgdGhlIGxvdyBsZXZlbCBgZ2Euc2VuZGAgbWV0aG9kXG4gKiBXQVJOSU5HOiBObyB2YWxpZGF0aW9ucyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhpc1xuICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZE9iamVjdCAtIGZpZWxkIG9iamVjdCBmb3IgdHJhY2tpbmcgZGlmZmVyZW50IGFuYWx5dGljc1xuICogQHBhcmFtICB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIHRyYWNrZXJzIHRvIHNlbmQgdGhlIGNvbW1hbmQgdG9cbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpIHtcbiAgX2dhQ29tbWFuZCh0cmFja2VyTmFtZXMsICdzZW5kJywgZmllbGRPYmplY3QpO1xuXG4gIGlmIChfZGVidWcpIHtcbiAgICBsb2coXCJjYWxsZWQgZ2EoJ3NlbmQnLCBmaWVsZE9iamVjdCk7XCIpO1xuICAgIGxvZyhcIndpdGggZmllbGRPYmplY3Q6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShmaWVsZE9iamVjdCkpKTtcbiAgICBsb2coXCJ3aXRoIHRyYWNrZXJzOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodHJhY2tlck5hbWVzKSkpO1xuICB9XG59XG4vKipcbiAqIHBhZ2V2aWV3OlxuICogQmFzaWMgR0EgcGFnZXZpZXcgdHJhY2tpbmdcbiAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAtIHRoZSBjdXJyZW50IHBhZ2UgcGFnZSBlLmcuICcvYWJvdXQnXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFja2VyTmFtZXMgLSAob3B0aW9uYWwpIGEgbGlzdCBvZiBleHRyYSB0cmFja2VycyB0byBydW4gdGhlIGNvbW1hbmQgb25cbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIChvcHRpb25hbCkgdGhlIHBhZ2UgdGl0bGUgZS4gZy4gJ015IFdlYnNpdGUnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2V2aWV3KHJhd1BhdGgsIHRyYWNrZXJOYW1lcywgdGl0bGUpIHtcbiAgaWYgKCFyYXdQYXRoKSB7XG4gICAgd2FybigncGF0aCBpcyByZXF1aXJlZCBpbiAucGFnZXZpZXcoKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYXRoID0gdHJpbShyYXdQYXRoKTtcblxuICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICB3YXJuKCdwYXRoIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcgaW4gLnBhZ2V2aWV3KCknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXh0cmFGaWVsZHMgPSB7fTtcblxuICBpZiAodGl0bGUpIHtcbiAgICBleHRyYUZpZWxkcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIF9nYUNvbW1hbmQodHJhY2tlck5hbWVzLCAnc2VuZCcsIF9vYmplY3RTcHJlYWQoe1xuICAgICAgaGl0VHlwZTogJ3BhZ2V2aWV3JyxcbiAgICAgIHBhZ2U6IHBhdGhcbiAgICB9LCBleHRyYUZpZWxkcykpO1xuXG4gICAgaWYgKF9kZWJ1Zykge1xuICAgICAgbG9nKFwiY2FsbGVkIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgcGF0aCk7XCIpO1xuICAgICAgdmFyIGV4dHJhTG9nID0gJyc7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBleHRyYUxvZyA9IFwiIGFuZCB0aXRsZTogXCIuY29uY2F0KHRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgbG9nKFwid2l0aCBwYXRoOiBcIi5jb25jYXQocGF0aCkuY29uY2F0KGV4dHJhTG9nKSk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIG1vZGFsdmlldzpcbiAqIGEgcHJveHkgdG8gYmFzaWMgR0EgcGFnZXZpZXcgdHJhY2tpbmcgdG8gY29uc2lzdGVudGx5IHRyYWNrXG4gKiBtb2RhbCB2aWV3cyB0aGF0IGFyZSBhbiBlcXVpdmFsZW50IFVYIHRvIGEgdHJhZGl0aW9uYWwgcGFnZXZpZXdcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kYWxOYW1lIGUuZy4gJ2FkZC1vci1lZGl0LWNsdWInXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFja2VyTmFtZXMgLSAob3B0aW9uYWwpIGEgbGlzdCBvZiBleHRyYSB0cmFja2VycyB0byBydW4gdGhlIGNvbW1hbmQgb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWx2aWV3KHJhd01vZGFsTmFtZSwgdHJhY2tlck5hbWVzKSB7XG4gIGlmICghcmF3TW9kYWxOYW1lKSB7XG4gICAgd2FybignbW9kYWxOYW1lIGlzIHJlcXVpcmVkIGluIC5tb2RhbHZpZXcobW9kYWxOYW1lKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtb2RhbE5hbWUgPSByZW1vdmVMZWFkaW5nU2xhc2godHJpbShyYXdNb2RhbE5hbWUpKTtcblxuICBpZiAobW9kYWxOYW1lID09PSAnJykge1xuICAgIHdhcm4oJ21vZGFsTmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nIG9yIGEgc2luZ2xlIC8gaW4gLm1vZGFsdmlldygpJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBwYXRoID0gXCIvbW9kYWwvXCIuY29uY2F0KG1vZGFsTmFtZSk7XG5cbiAgICBfZ2FDb21tYW5kKHRyYWNrZXJOYW1lcywgJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcblxuICAgIGlmIChfZGVidWcpIHtcbiAgICAgIGxvZyhcImNhbGxlZCBnYSgnc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1wiKTtcbiAgICAgIGxvZyhcIndpdGggcGF0aDogXCIuY29uY2F0KHBhdGgpKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogdGltaW5nOlxuICogR0EgdGltaW5nXG4gKiBAcGFyYW0gYXJncy5jYXRlZ29yeSB7U3RyaW5nfSByZXF1aXJlZFxuICogQHBhcmFtIGFyZ3MudmFyaWFibGUge1N0cmluZ30gcmVxdWlyZWRcbiAqIEBwYXJhbSBhcmdzLnZhbHVlICB7SW50fSAgcmVxdWlyZWRcbiAqIEBwYXJhbSBhcmdzLmxhYmVsICB7U3RyaW5nfSByZXF1aXJlZFxuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWluZygpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgY2F0ZWdvcnkgPSBfcmVmLmNhdGVnb3J5LFxuICAgICAgdmFyaWFibGUgPSBfcmVmLnZhcmlhYmxlLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsO1xuXG4gIHZhciB0cmFja2VyTmFtZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCFjYXRlZ29yeSB8fCAhdmFyaWFibGUgfHwgdHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgd2FybignYXJncy5jYXRlZ29yeSwgYXJncy52YXJpYWJsZSAnICsgJ0FORCBhcmdzLnZhbHVlIGFyZSByZXF1aXJlZCBpbiB0aW1pbmcoKSAnICsgJ0FORCBhcmdzLnZhbHVlIGhhcyB0byBiZSBhIG51bWJlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVxdWlyZWQgRmllbGRzXG5cblxuICAgIHZhciBmaWVsZE9iamVjdCA9IHtcbiAgICAgIGhpdFR5cGU6ICd0aW1pbmcnLFxuICAgICAgdGltaW5nQ2F0ZWdvcnk6IF9mb3JtYXQoY2F0ZWdvcnkpLFxuICAgICAgdGltaW5nVmFyOiBfZm9ybWF0KHZhcmlhYmxlKSxcbiAgICAgIHRpbWluZ1ZhbHVlOiB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGZpZWxkT2JqZWN0LnRpbWluZ0xhYmVsID0gX2Zvcm1hdChsYWJlbCk7XG4gICAgfVxuXG4gICAgc2VuZChmaWVsZE9iamVjdCwgdHJhY2tlck5hbWVzKTtcbiAgfVxufVxuLyoqXG4gKiBldmVudDpcbiAqIEdBIGV2ZW50IHRyYWNraW5nXG4gKiBAcGFyYW0gYXJncy5jYXRlZ29yeSB7U3RyaW5nfSByZXF1aXJlZFxuICogQHBhcmFtIGFyZ3MuYWN0aW9uIHtTdHJpbmd9IHJlcXVpcmVkXG4gKiBAcGFyYW0gYXJncy5sYWJlbCB7U3RyaW5nfSBvcHRpb25hbFxuICogQHBhcmFtIGFyZ3MudmFsdWUge0ludH0gb3B0aW9uYWxcbiAqIEBwYXJhbSBhcmdzLm5vbkludGVyYWN0aW9uIHtib29sZWFufSBvcHRpb25hbFxuICogQHBhcmFtIGFyZ3MudHJhbnNwb3J0IHtzdHJpbmd9IG9wdGlvbmFsXG4gKiBAcGFyYW0ge3thY3Rpb246IHN0cmluZywgY2F0ZWdvcnk6IHN0cmluZ319IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudCgpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIGNhdGVnb3J5ID0gX3JlZjIuY2F0ZWdvcnksXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb24sXG4gICAgICBsYWJlbCA9IF9yZWYyLmxhYmVsLFxuICAgICAgdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgIG5vbkludGVyYWN0aW9uID0gX3JlZjIubm9uSW50ZXJhY3Rpb24sXG4gICAgICB0cmFuc3BvcnQgPSBfcmVmMi50cmFuc3BvcnQsXG4gICAgICBhcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbXCJjYXRlZ29yeVwiLCBcImFjdGlvblwiLCBcImxhYmVsXCIsIFwidmFsdWVcIiwgXCJub25JbnRlcmFjdGlvblwiLCBcInRyYW5zcG9ydFwiXSk7XG5cbiAgdmFyIHRyYWNrZXJOYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBTaW1wbGUgVmFsaWRhdGlvblxuICAgIGlmICghY2F0ZWdvcnkgfHwgIWFjdGlvbikge1xuICAgICAgd2FybignYXJncy5jYXRlZ29yeSBBTkQgYXJncy5hY3Rpb24gYXJlIHJlcXVpcmVkIGluIGV2ZW50KCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlcXVpcmVkIEZpZWxkc1xuXG5cbiAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgZXZlbnRDYXRlZ29yeTogX2Zvcm1hdChjYXRlZ29yeSksXG4gICAgICBldmVudEFjdGlvbjogX2Zvcm1hdChhY3Rpb24pXG4gICAgfTsgLy8gT3B0aW9uYWwgRmllbGRzXG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGZpZWxkT2JqZWN0LmV2ZW50TGFiZWwgPSBfZm9ybWF0KGxhYmVsKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgd2FybignRXhwZWN0ZWQgYGFyZ3MudmFsdWVgIGFyZyB0byBiZSBhIE51bWJlci4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkT2JqZWN0LmV2ZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5vbkludGVyYWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiBub25JbnRlcmFjdGlvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHdhcm4oJ2BhcmdzLm5vbkludGVyYWN0aW9uYCBtdXN0IGJlIGEgYm9vbGVhbi4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkT2JqZWN0Lm5vbkludGVyYWN0aW9uID0gbm9uSW50ZXJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0cmFuc3BvcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIHRyYW5zcG9ydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2FybignYGFyZ3MudHJhbnNwb3J0YCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFsnYmVhY29uJywgJ3hocicsICdpbWFnZSddLmluZGV4T2YodHJhbnNwb3J0KSA9PT0gLTEpIHtcbiAgICAgICAgICB3YXJuKCdgYXJncy50cmFuc3BvcnRgIG11c3QgYmUgZWl0aGVyIG9uZSBvZiB0aGVzZSB2YWx1ZXM6IGBiZWFjb25gLCBgeGhyYCBvciBgaW1hZ2VgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZE9iamVjdC50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoYXJncykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsICdkaW1lbnNpb24nLmxlbmd0aCkgPT09ICdkaW1lbnNpb24nO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZmllbGRPYmplY3Rba2V5XSA9IGFyZ3Nba2V5XTtcbiAgICB9KTtcbiAgICBPYmplY3Qua2V5cyhhcmdzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgJ21ldHJpYycubGVuZ3RoKSA9PT0gJ21ldHJpYyc7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmaWVsZE9iamVjdFtrZXldID0gYXJnc1trZXldO1xuICAgIH0pOyAvLyBTZW5kIHRvIEdBXG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9XG59XG4vKipcbiAqIGV4Y2VwdGlvbjpcbiAqIEdBIGV4Y2VwdGlvbiB0cmFja2luZ1xuICogQHBhcmFtIGFyZ3MuZGVzY3JpcHRpb24ge1N0cmluZ30gb3B0aW9uYWxcbiAqIEBwYXJhbSBhcmdzLmZhdGFsIHtib29sZWFufSBvcHRpb25hbFxuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2VwdGlvbihfcmVmMywgdHJhY2tlck5hbWVzKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IF9yZWYzLmRlc2NyaXB0aW9uLFxuICAgICAgZmF0YWwgPSBfcmVmMy5mYXRhbDtcblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gUmVxdWlyZWQgRmllbGRzXG4gICAgdmFyIGZpZWxkT2JqZWN0ID0ge1xuICAgICAgaGl0VHlwZTogJ2V4Y2VwdGlvbidcbiAgICB9OyAvLyBPcHRpb25hbCBGaWVsZHNcblxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgZmllbGRPYmplY3QuZXhEZXNjcmlwdGlvbiA9IF9mb3JtYXQoZGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZmF0YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIGZhdGFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgd2FybignYGFyZ3MuZmF0YWxgIG11c3QgYmUgYSBib29sZWFuLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRPYmplY3QuZXhGYXRhbCA9IGZhdGFsO1xuICAgICAgfVxuICAgIH0gLy8gU2VuZCB0byBHQVxuXG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9XG59XG5leHBvcnQgdmFyIHBsdWdpbiA9IHtcbiAgLyoqXG4gICAqIHJlcXVpcmU6XG4gICAqIEdBIHJlcXVpcmVzIGEgcGx1Z2luXG4gICAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9IGUuZy4gJ2Vjb21tZXJjZScgb3IgJ215cGx1Z2luJ1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBvcHRpb25hbCBlLmcge3BhdGg6ICcvbG9nJywgZGVidWc6IHRydWV9XG4gICAqIEBwYXJhbSB0cmFja2VyTmFtZSB7U3RyaW5nfSBvcHRpb25hbCBlLmcgJ3RyYWNrZXJOYW1lJ1xuICAgKi9cbiAgcmVxdWlyZTogZnVuY3Rpb24gcmVxdWlyZShyYXdOYW1lLCBvcHRpb25zLCB0cmFja2VyTmFtZSkge1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJlcXVpcmVkIEZpZWxkc1xuICAgICAgaWYgKCFyYXdOYW1lKSB7XG4gICAgICAgIHdhcm4oJ2BuYW1lYCBpcyByZXF1aXJlZCBpbiAucmVxdWlyZSgpJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSB0cmltKHJhd05hbWUpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gJycpIHtcbiAgICAgICAgd2FybignYG5hbWVgIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcgaW4gLnJlcXVpcmUoKScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gdHJhY2tlck5hbWUgPyBcIlwiLmNvbmNhdCh0cmFja2VyTmFtZSwgXCIucmVxdWlyZVwiKSA6ICdyZXF1aXJlJzsgLy8gT3B0aW9uYWwgRmllbGRzXG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKG9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHdhcm4oJ0V4cGVjdGVkIGBvcHRpb25zYCBhcmcgdG8gYmUgYW4gT2JqZWN0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdhcm4oJ0VtcHR5IGBvcHRpb25zYCBnaXZlbiB0byAucmVxdWlyZSgpJyk7XG4gICAgICAgIH1cblxuICAgICAgICBnYShyZXF1aXJlU3RyaW5nLCBuYW1lLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgbG9nKFwiY2FsbGVkIGdhKCdyZXF1aXJlJywgJ1wiLmNvbmNhdChuYW1lLCBcIicsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2EocmVxdWlyZVN0cmluZywgbmFtZSk7XG5cbiAgICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICAgIGxvZyhcImNhbGxlZCBnYSgncmVxdWlyZScsICdcIi5jb25jYXQobmFtZSwgXCInKTtcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBleGVjdXRlOlxuICAgKiBHQSBleGVjdXRlIGFjdGlvbiBmb3IgcGx1Z2luXG4gICAqIFRha2VzIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHNcbiAgICogQHBhcmFtIHBsdWdpbk5hbWUge1N0cmluZ30gZS5nLiAnZWNvbW1lcmNlJyBvciAnbXlwbHVnaW4nXG4gICAqIEBwYXJhbSBhY3Rpb24ge1N0cmluZ30gZS5nLiAnYWRkSXRlbScgb3IgJ215Q3VzdG9tQWN0aW9uJ1xuICAgKiBAcGFyYW0gYWN0aW9uVHlwZSB7U3RyaW5nfSBvcHRpb25hbCBlLmcuICdkZXRhaWwnXG4gICAqIEBwYXJhbSBwYXlsb2FkIHtPYmplY3R9IG9wdGlvbmFsIGUuZyB7IGlkOiAnMXg1ZScsIG5hbWUgOiAnTXkgcHJvZHVjdCB0byB0cmFjaycgfVxuICAgKi9cbiAgZXhlY3V0ZTogZnVuY3Rpb24gZXhlY3V0ZShwbHVnaW5OYW1lLCBhY3Rpb24pIHtcbiAgICB2YXIgcGF5bG9hZDtcbiAgICB2YXIgYWN0aW9uVHlwZTtcblxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDIgPyBfbGVuMyAtIDIgOiAwKSwgX2tleTMgPSAyOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzIC0gMl0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcGF5bG9hZCA9IGFyZ3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvblR5cGUgPSBhcmdzWzBdO1xuICAgICAgcGF5bG9hZCA9IGFyZ3NbMV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW5OYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YXJuKCdFeHBlY3RlZCBgcGx1Z2luTmFtZWAgYXJnIHRvIGJlIGEgU3RyaW5nLicpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YXJuKCdFeHBlY3RlZCBgYWN0aW9uYCBhcmcgdG8gYmUgYSBTdHJpbmcuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29tbWFuZCA9IFwiXCIuY29uY2F0KHBsdWdpbk5hbWUsIFwiOlwiKS5jb25jYXQoYWN0aW9uKTtcbiAgICAgICAgcGF5bG9hZCA9IHBheWxvYWQgfHwgbnVsbDtcblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSAmJiBwYXlsb2FkKSB7XG4gICAgICAgICAgZ2EoY29tbWFuZCwgYWN0aW9uVHlwZSwgcGF5bG9hZCk7XG5cbiAgICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgICBsb2coXCJjYWxsZWQgZ2EoJ1wiLmNvbmNhdChjb21tYW5kLCBcIicpO1wiKSk7XG4gICAgICAgICAgICBsb2coXCJhY3Rpb25UeXBlOiBcXFwiXCIuY29uY2F0KGFjdGlvblR5cGUsIFwiXFxcIiB3aXRoIHBheWxvYWQ6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZCkge1xuICAgICAgICAgIGdhKGNvbW1hbmQsIHBheWxvYWQpO1xuXG4gICAgICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICAgICAgbG9nKFwiY2FsbGVkIGdhKCdcIi5jb25jYXQoY29tbWFuZCwgXCInKTtcIikpO1xuICAgICAgICAgICAgbG9nKFwid2l0aCBwYXlsb2FkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2EoY29tbWFuZCk7XG5cbiAgICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgICBsb2coXCJjYWxsZWQgZ2EoJ1wiLmNvbmNhdChjb21tYW5kLCBcIicpO1wiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBvdXRib3VuZExpbms6XG4gKiBHQSBvdXRib3VuZExpbmsgdHJhY2tpbmdcbiAqIEBwYXJhbSBhcmdzLmxhYmVsIHtTdHJpbmd9IGUuZy4gdXJsLCBvciAnQ3JlYXRlIGFuIEFjY291bnQnXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoaXRDYWxsYmFjayAtIENhbGxlZCBhZnRlciBwcm9jZXNzaW5nIGEgaGl0LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRib3VuZExpbmsoYXJncywgaGl0Q2FsbGJhY2ssIHRyYWNrZXJOYW1lcykge1xuICBpZiAodHlwZW9mIGhpdENhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybignaGl0Q2FsbGJhY2sgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gU2ltcGxlIFZhbGlkYXRpb25cbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGFiZWwpIHtcbiAgICAgIHdhcm4oJ2FyZ3MubGFiZWwgaXMgcmVxdWlyZWQgaW4gb3V0Ym91bmRMaW5rKCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlcXVpcmVkIEZpZWxkc1xuXG5cbiAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgZXZlbnRDYXRlZ29yeTogJ091dGJvdW5kJyxcbiAgICAgIGV2ZW50QWN0aW9uOiAnQ2xpY2snLFxuICAgICAgZXZlbnRMYWJlbDogX2Zvcm1hdChhcmdzLmxhYmVsKVxuICAgIH07XG4gICAgdmFyIHNhZmV0eUNhbGxiYWNrQ2FsbGVkID0gZmFsc2U7XG5cbiAgICB2YXIgc2FmZXR5Q2FsbGJhY2sgPSBmdW5jdGlvbiBzYWZldHlDYWxsYmFjaygpIHtcbiAgICAgIC8vIFRoaXMgcHJldmVudHMgYSBkZWxheWVkIHJlc3BvbnNlIGZyb20gR0FcbiAgICAgIC8vIGNhdXNpbmcgaGl0Q2FsbGJhY2sgZnJvbSBiZWluZyBmaXJlZCB0d2ljZVxuICAgICAgc2FmZXR5Q2FsbGJhY2tDYWxsZWQgPSB0cnVlO1xuICAgICAgaGl0Q2FsbGJhY2soKTtcbiAgICB9OyAvLyBVc2luZyBhIHRpbWVvdXQgdG8gZW5zdXJlIHRoZSBleGVjdXRpb24gb2YgY3JpdGljYWwgYXBwbGljYXRpb24gY29kZVxuICAgIC8vIGluIHRoZSBjYXNlIHdoZW4gdGhlIEdBIHNlcnZlciBtaWdodCBiZSBkb3duXG4gICAgLy8gb3IgYW4gYWQgYmxvY2tlciBwcmV2ZW50cyBzZW5kaW5nIHRoZSBkYXRhXG4gICAgLy8gcmVnaXN0ZXIgc2FmZXR5IG5ldCB0aW1lb3V0OlxuXG5cbiAgICB2YXIgdCA9IHNldFRpbWVvdXQoc2FmZXR5Q2FsbGJhY2ssIDI1MCk7XG5cbiAgICB2YXIgY2xlYXJhYmxlQ2FsbGJhY2tGb3JHQSA9IGZ1bmN0aW9uIGNsZWFyYWJsZUNhbGxiYWNrRm9yR0EoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodCk7XG5cbiAgICAgIGlmICghc2FmZXR5Q2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgICAgaGl0Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmllbGRPYmplY3QuaGl0Q2FsbGJhY2sgPSBjbGVhcmFibGVDYWxsYmFja0ZvckdBOyAvLyBTZW5kIHRvIEdBXG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGdhIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIHNvIHRoZSBhcHBsaWNhdGlvblxuICAgIC8vIGNvbnRpbnVlcyB0byB3b3JrIGFzIGV4cGVjdGVkXG4gICAgc2V0VGltZW91dChoaXRDYWxsYmFjaywgMCk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgdGVzdE1vZGVBUEkgPSBUZXN0TW9kZUFQSTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcbiAgZ2E6IGdhLFxuICBzZXQ6IHNldCxcbiAgc2VuZDogc2VuZCxcbiAgcGFnZXZpZXc6IHBhZ2V2aWV3LFxuICBtb2RhbHZpZXc6IG1vZGFsdmlldyxcbiAgdGltaW5nOiB0aW1pbmcsXG4gIGV2ZW50OiBldmVudCxcbiAgZXhjZXB0aW9uOiBleGNlcHRpb24sXG4gIHBsdWdpbjogcGx1Z2luLFxuICBvdXRib3VuZExpbms6IG91dGJvdW5kTGluayxcbiAgdGVzdE1vZGVBUEk6IFRlc3RNb2RlQVBJXG59OyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgVW5ib3VuZE91dGJvdW5kTGluayBmcm9tICcuL2NvbXBvbmVudHMvT3V0Ym91bmRMaW5rJztcbmltcG9ydCAqIGFzIERlZmF1bHRzIGZyb20gJy4vY29yZSc7XG52YXIgaW5pdGlhbGl6ZSA9IERlZmF1bHRzLmluaXRpYWxpemU7XG5leHBvcnQgeyBpbml0aWFsaXplIH07XG52YXIgYWRkVHJhY2tlcnMgPSBEZWZhdWx0cy5hZGRUcmFja2VycztcbmV4cG9ydCB7IGFkZFRyYWNrZXJzIH07XG52YXIgZ2EgPSBEZWZhdWx0cy5nYTtcbmV4cG9ydCB7IGdhIH07XG52YXIgc2V0ID0gRGVmYXVsdHMuc2V0O1xuZXhwb3J0IHsgc2V0IH07XG52YXIgc2VuZCA9IERlZmF1bHRzLnNlbmQ7XG5leHBvcnQgeyBzZW5kIH07XG52YXIgcGFnZXZpZXcgPSBEZWZhdWx0cy5wYWdldmlldztcbmV4cG9ydCB7IHBhZ2V2aWV3IH07XG52YXIgbW9kYWx2aWV3ID0gRGVmYXVsdHMubW9kYWx2aWV3O1xuZXhwb3J0IHsgbW9kYWx2aWV3IH07XG52YXIgdGltaW5nID0gRGVmYXVsdHMudGltaW5nO1xuZXhwb3J0IHsgdGltaW5nIH07XG52YXIgZXZlbnQgPSBEZWZhdWx0cy5ldmVudDtcbmV4cG9ydCB7IGV2ZW50IH07XG52YXIgZXhjZXB0aW9uID0gRGVmYXVsdHMuZXhjZXB0aW9uO1xuZXhwb3J0IHsgZXhjZXB0aW9uIH07XG52YXIgcGx1Z2luID0gRGVmYXVsdHMucGx1Z2luO1xuZXhwb3J0IHsgcGx1Z2luIH07XG52YXIgb3V0Ym91bmRMaW5rID0gRGVmYXVsdHMub3V0Ym91bmRMaW5rO1xuZXhwb3J0IHsgb3V0Ym91bmRMaW5rIH07XG52YXIgdGVzdE1vZGVBUEkgPSBEZWZhdWx0cy50ZXN0TW9kZUFQSTtcbmV4cG9ydCB7IHRlc3RNb2RlQVBJIH07XG5VbmJvdW5kT3V0Ym91bmRMaW5rLm9yaWdUcmFja0xpbmsgPSBVbmJvdW5kT3V0Ym91bmRMaW5rLnRyYWNrTGluaztcblVuYm91bmRPdXRib3VuZExpbmsudHJhY2tMaW5rID0gRGVmYXVsdHMub3V0Ym91bmRMaW5rO1xuZXhwb3J0IHZhciBPdXRib3VuZExpbmsgPSBVbmJvdW5kT3V0Ym91bmRMaW5rO1xuZXhwb3J0IGRlZmF1bHQgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0cyksIHt9LCB7XG4gIE91dGJvdW5kTGluazogT3V0Ym91bmRMaW5rXG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2cocykge1xuICBjb25zb2xlLmluZm8oJ1tyZWFjdC1nYV0nLCBzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuKHMpIHtcbiAgY29uc29sZS53YXJuKCdbcmVhY3QtZ2FdJywgcyk7XG59IiwiaW1wb3J0IHJlZGFjdEVtYWlsIGZyb20gJy4vcmVkYWN0RW1haWwnO1xuaW1wb3J0IHRvVGl0bGVDYXNlIGZyb20gJy4vdG9UaXRsZUNhc2UnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KCkge1xuICB2YXIgcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gIHZhciB0aXRsZUNhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHJlZGFjdGluZ0VtYWlsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gIHZhciBfc3RyID0gcyB8fCAnJztcblxuICBpZiAodGl0bGVDYXNlKSB7XG4gICAgX3N0ciA9IHRvVGl0bGVDYXNlKHMpO1xuICB9XG5cbiAgaWYgKHJlZGFjdGluZ0VtYWlsKSB7XG4gICAgX3N0ciA9IHJlZGFjdEVtYWlsKF9zdHIpO1xuICB9XG5cbiAgcmV0dXJuIF9zdHI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGdhQWRkcmVzcyA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2FBZGRyZXNzKSB7XG4gICAgZ2FBZGRyZXNzID0gb3B0aW9ucy5nYUFkZHJlc3M7XG4gIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKSB7XG4gICAgZ2FBZGRyZXNzID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljc19kZWJ1Zy5qcyc7XG4gIH1cblxuICB2YXIgb25lcnJvciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5vbmVycm9yOyAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvXG5cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuICAoZnVuY3Rpb24gKGksIHMsIG8sIGcsIHIsIGEsIG0pIHtcbiAgICBpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IHI7XG4gICAgaVtyXSA9IGlbcl0gfHwgZnVuY3Rpb24gKCkge1xuICAgICAgKGlbcl0ucSA9IGlbcl0ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpO1xuICAgIH0sIGlbcl0ubCA9IDEgKiBuZXcgRGF0ZSgpO1xuICAgIGEgPSBzLmNyZWF0ZUVsZW1lbnQobyksIG0gPSBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO1xuICAgIGEuYXN5bmMgPSAxO1xuICAgIGEuc3JjID0gZztcbiAgICBhLm9uZXJyb3IgPSBvbmVycm9yO1xuICAgIG0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgbSk7XG4gIH0pKHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCBnYUFkZHJlc3MsICdnYScpO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbn0iLCIvLyBTZWUgaWYgcyBjb3VsZCBiZSBhbiBlbWFpbCBhZGRyZXNzLiBXZSBkb24ndCB3YW50IHRvIHNlbmQgcGVyc29uYWwgZGF0YSBsaWtlIGVtYWlsLlxuLy8gaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYW5hbHl0aWNzL2Fuc3dlci8yNzk1OTgzP2hsPWVuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWdodEJlRW1haWwocykge1xuICAvLyBUaGVyZSdzIG5vIHBvaW50IHRyeWluZyB0byB2YWxpZGF0ZSByZmM4MjIgZnVsbHksIGp1c3QgbG9vayBmb3IgLi4uQC4uLlxuICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnICYmIHMuaW5kZXhPZignQCcpICE9PSAtMTtcbn0iLCJpbXBvcnQgd2FybiBmcm9tICcuL2NvbnNvbGUvd2Fybic7XG5pbXBvcnQgbWlnaHRCZUVtYWlsIGZyb20gJy4vbWlnaHRCZUVtYWlsJztcbnZhciByZWRhY3RlZCA9ICdSRURBQ1RFRCAoUG90ZW50aWFsIEVtYWlsIEFkZHJlc3MpJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZGFjdEVtYWlsKHN0cmluZykge1xuICBpZiAobWlnaHRCZUVtYWlsKHN0cmluZykpIHtcbiAgICB3YXJuKCdUaGlzIGFyZyBsb29rcyBsaWtlIGFuIGVtYWlsIGFkZHJlc3MsIHJlZGFjdGluZy4nKTtcbiAgICByZXR1cm4gcmVkYWN0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUxlYWRpbmdTbGFzaChzdHJpbmcpIHtcbiAgaWYgKHN0cmluZy5zdWJzdHJpbmcoMCwgMSkgPT09ICcvJykge1xuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDEpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iLCJleHBvcnQgdmFyIGdhQ2FsbHMgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2FsbHM6IGdhQ2FsbHMsXG4gIGdhOiBmdW5jdGlvbiBnYSgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZ2FDYWxscy5wdXNoKFtdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG4gIHJlc2V0Q2FsbHM6IGZ1bmN0aW9uIHJlc2V0Q2FsbHMoKSB7XG4gICAgZ2FDYWxscy5sZW5ndGggPSAwO1xuICB9XG59OyIsIi8qKlxuICogVG8gVGl0bGUgQ2FzZSAyLjEgLSBodHRwOi8vaW5kaXZpZGVkLmNvbS9jb2RlL3RvLXRpdGxlLWNhc2UvXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDEzIERhdmlkIEdvdWNoLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ291Y2gvdG8tdGl0bGUtY2FzZVxuICovXG5pbXBvcnQgdHJpbSBmcm9tICcuL3RyaW0nO1xudmFyIHNtYWxsV29yZHMgPSAvXihhfGFufGFuZHxhc3xhdHxidXR8Ynl8ZW58Zm9yfGlmfGlufG5vcnxvZnxvbnxvcnxwZXJ8dGhlfHRvfHZzP1xcLj98dmlhKSQvaTsgLy8gdGVzdFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHRyaW0oc3RyaW5nKS5yZXBsYWNlKC9bQS1aYS16MC05XFx1MDBDMC1cXHUwMEZGXStbXlxccy1dKi9nLCBmdW5jdGlvbiAobWF0Y2gsIGluZGV4LCB0aXRsZSkge1xuICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggKyBtYXRjaC5sZW5ndGggIT09IHRpdGxlLmxlbmd0aCAmJiBtYXRjaC5zZWFyY2goc21hbGxXb3JkcykgPiAtMSAmJiB0aXRsZS5jaGFyQXQoaW5kZXggLSAyKSAhPT0gJzonICYmICh0aXRsZS5jaGFyQXQoaW5kZXggKyBtYXRjaC5sZW5ndGgpICE9PSAnLScgfHwgdGl0bGUuY2hhckF0KGluZGV4IC0gMSkgPT09ICctJykgJiYgdGl0bGUuY2hhckF0KGluZGV4IC0gMSkuc2VhcmNoKC9bXlxccy1dLykgPCAwKSB7XG4gICAgICByZXR1cm4gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpLnNlYXJjaCgvW0EtWl18XFwuLi8pID4gLTEpIHtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gIH0pO1xufSIsIi8vIEdBIHN0cmluZ3MgbmVlZCB0byBoYXZlIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZSB0cmltbWVkLCBhbmQgbm90IGFsbFxuLy8gYnJvd3NlcnMgaGF2ZSBTdHJpbmcucHJvdG90b3lwZS50cmltKCkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmltKHMpIHtcbiAgcmV0dXJuIHMgJiYgcy50b1N0cmluZygpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUaGVtZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL3NyYy9jb250ZXh0cy9UaGVtZUNvbnRleHQnXG5pbXBvcnQgeyBQYWdlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vc3JjL2NvbnRleHRzL1BhZ2VzQ29udGV4dCdcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL3VpL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy91aS9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IHJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG5yZWFjdEdBLmluaXRpYWxpemUoJ0ctWlpWR1QwRlpXUCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlc1Byb3ZpZGVyPlxuICAgICAgICA8VGhlbWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvVGhlbWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8L1BhZ2VzUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==