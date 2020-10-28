webpackHotUpdate_N_E("pages/contact",{

/***/ "./src/ui/parts/ContactForm.jsx":
/*!**************************************!*\
  !*** ./src/ui/parts/ContactForm.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _functions_gtag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../functions/gtag */ "./src/functions/gtag.js");
/* harmony import */ var _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/contexts/LangContext */ "./src/contexts/LangContext.js");



var _jsxFileName = "C:\\Users\\callf\\Desktop\\DEV\\DigiDigi\\vr-nextjs\\src\\ui\\parts\\ContactForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    buttonSuccess: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][500],
      '&:hover': {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][700]
      }
    },
    fabProgress: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][500],
      verticalAlign: 'middle',
      marginLeft: '1em'
    },
    errorIcon: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["red"][500],
      verticalAlign: 'middle',
      marginLeft: '1em'
    },
    buttonProgress: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    },
    alert: {
      zIndex: '9999'
    }
  };
});

function TransitionLeft(props) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Slide"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    direction: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }
  }));
}

_c = TransitionLeft;

var ContactForm = function ContactForm(props) {
  _s();

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      nameErr = _useState2[0],
      setNameErr = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      emailErr = _useState4[0],
      setEmailErr = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      phoneErr = _useState6[0],
      setPhoneErr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      message = _useState7[0],
      setMessage = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      messageErr = _useState8[0],
      setMessageErr = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState9[0],
      setLoading = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      success = _useState10[0],
      setSuccess = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      sendError = _useState11[0],
      setSendError = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    open: false,
    message: '',
    color: ''
  }),
      alert = _useState12[0],
      setAlert = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (props.message) setMessage(props.message);
  }, [props.message]);
  var buttonClassname = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.buttonSuccess, success));
  var fieldMapping = {
    name: {
      set: setName,
      validate: /^[a-zA-Z א-ת\-]+$/,
      err: 'Invalid Name',
      setErr: setNameErr,
      isErr: nameErr
    },
    email: {
      set: setEmail,
      validate: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      err: 'Invalid Email',
      setErr: setEmailErr,
      isErr: emailErr
    },
    phone: {
      set: setPhone,
      validate: /^(\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}))+$/,
      err: 'Invalid Phone',
      setErr: setPhoneErr,
      isErr: phoneErr
    },
    message: {
      set: setMessage,
      validate: /^[0-9@a-zA-Z א-ת\-\!\$]*$/,
      err: 'Invalid. No special charecters please.',
      setErr: setMessageErr,
      isErr: messageErr
    }
  };

  var handleInput = function handleInput(event) {
    fieldMapping[event.target.id].set(event.target.value);

    if (fieldMapping[event.target.id].isErr) {
      checkError(event.target.id, event.target.value);
    }
  };

  var handleInputBlur = function handleInputBlur(event) {
    checkError(event.target.id, event.target.value);
  };

  var checkError = function checkError(targetId, value) {
    var valid = '';
    valid = fieldMapping[targetId].validate.test(value);
    if (!valid) fieldMapping[targetId].setErr(true);else fieldMapping[targetId].setErr(false);
    return valid;
  };

  var clearForm = function clearForm() {
    setName('');
    setNameErr(null);
    setEmail('');
    setEmailErr(null);
    setPhone('');
    setPhoneErr(null);
    setMessage('');
  };

  var checkAllErrors = function checkAllErrors() {
    var valid = true;

    if (nameErr !== false) {
      setNameErr(true);
      valid = false;
    }

    if (emailErr !== false) {
      setEmailErr(true);
      valid = false;
    }

    if (phoneErr !== false) {
      setPhoneErr(true);
      valid = false;
    }

    return valid;
  };

  var handleSubmit = function handleSubmit() {
    if (checkAllErrors()) {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        setSendError(false);
      }

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://us-central1-vrfunteam-mailer.cloudfunctions.net/sendLead', {
        name: name,
        email: email,
        phone: phone,
        message: message
      }).then(function (res) {
        setSuccess(true);
        setLoading(false);
        clearForm();
        setAlert({
          open: true,
          backgroundColor: '#4BB543',
          message: 'You message has been sent!'
        });
        Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_11__["event"])({
          category: 'Leads',
          action: 'Lead Sent',
          label: 'Website Conversions',
          value: '1'
        });
      })["catch"](function (err) {
        setLoading(false);
        setSendError(true);
        setAlert({
          open: true,
          backgroundColor: '#FF3232',
          message: 'There was an error sending your message'
        });
        Object(_functions_gtag__WEBPACK_IMPORTED_MODULE_11__["event"])({
          category: 'Errors',
          action: 'Lead Failed',
          label: 'Website Conversions Errors',
          value: '0'
        });
      });
    }
  };

  var _useLanguageContext = Object(_src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_12__["useLanguageContext"])(),
      siteData = _useLanguageContext.siteData,
      language = _useLanguageContext.language;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    direction: "column",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    variant: "filled",
    fullWidth: true,
    label: "Name",
    id: "name",
    value: name,
    onChange: handleInput,
    onBlur: handleInputBlur,
    error: nameErr,
    helperText: nameErr ? fieldMapping.name.err : '',
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    variant: "filled",
    fullWidth: true,
    label: "Phone",
    id: "phone",
    value: phone,
    onChange: handleInput,
    onBlur: handleInputBlur,
    error: phoneErr,
    helperText: phoneErr ? fieldMapping.phone.err : '',
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    variant: "filled",
    fullWidth: true,
    label: "Email",
    id: "email",
    value: email,
    onChange: handleInput,
    onBlur: handleInputBlur,
    error: emailErr,
    helperText: emailErr ? fieldMapping.email.err : '',
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    variant: "filled",
    fullWidth: true,
    placeholder: "How can we help you?",
    multiline: true,
    rows: 8,
    id: "message",
    value: message,
    onChange: handleInput,
    onBlur: handleInputBlur,
    style: {
      marginTop: '2em'
    },
    error: messageErr,
    helperText: messageErr ? fieldMapping.message.err : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    style: {
      marginTop: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "primary",
    disabled: nameErr || emailErr || phoneErr || messageErr || loading,
    onClick: handleSubmit,
    className: buttonClassname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, "Send Message", ' ', success ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      marginLeft: '0.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  })), loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], {
    size: 30,
    className: classes.fabProgress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }), sendError && __jsx(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_10___default.a, {
    size: 30,
    className: classes.errorIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Snackbar"], {
    className: classes.alert,
    open: alert.open,
    message: alert.message,
    ContentProps: {
      style: {
        backgroundColor: alert.backgroundColor
      }
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    onClose: function onClose() {
      return setAlert(_objectSpread(_objectSpread({}, alert), {}, {
        open: false
      }));
    },
    autoHideDuration: 4000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  })));
};

_s(ContactForm, "qWjrz0KeWNjJ409O+6vVLYQbgHs=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useTheme"], _src_contexts_LangContext__WEBPACK_IMPORTED_MODULE_12__["useLanguageContext"]];
});

_c2 = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c, _c2;

$RefreshReg$(_c, "TransitionLeft");
$RefreshReg$(_c2, "ContactForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL3BhcnRzL0NvbnRhY3RGb3JtLmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ3cmFwcGVyIiwibWFyZ2luIiwic3BhY2luZyIsInBvc2l0aW9uIiwiYnV0dG9uU3VjY2VzcyIsImJhY2tncm91bmRDb2xvciIsImdyZWVuIiwiZmFiUHJvZ3Jlc3MiLCJjb2xvciIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5MZWZ0IiwiZXJyb3JJY29uIiwicmVkIiwiYnV0dG9uUHJvZ3Jlc3MiLCJ0b3AiLCJsZWZ0IiwibWFyZ2luVG9wIiwiYWxlcnQiLCJ6SW5kZXgiLCJUcmFuc2l0aW9uTGVmdCIsInByb3BzIiwiQ29udGFjdEZvcm0iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibmFtZUVyciIsInNldE5hbWVFcnIiLCJlbWFpbCIsInNldEVtYWlsIiwiZW1haWxFcnIiLCJzZXRFbWFpbEVyciIsInBob25lIiwic2V0UGhvbmUiLCJwaG9uZUVyciIsInNldFBob25lRXJyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlRXJyIiwic2V0TWVzc2FnZUVyciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJzZW5kRXJyb3IiLCJzZXRTZW5kRXJyb3IiLCJvcGVuIiwic2V0QWxlcnQiLCJ1c2VFZmZlY3QiLCJidXR0b25DbGFzc25hbWUiLCJjbHN4IiwiZmllbGRNYXBwaW5nIiwic2V0IiwidmFsaWRhdGUiLCJlcnIiLCJzZXRFcnIiLCJpc0VyciIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiY2hlY2tFcnJvciIsImhhbmRsZUlucHV0Qmx1ciIsInRhcmdldElkIiwidmFsaWQiLCJ0ZXN0IiwiY2xlYXJGb3JtIiwiY2hlY2tBbGxFcnJvcnMiLCJoYW5kbGVTdWJtaXQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiR0FldmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJ1c2VMYW5ndWFnZUNvbnRleHQiLCJzaXRlRGF0YSIsImxhbmd1YWdlIiwic3R5bGUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFO0FBRlIsS0FEK0I7QUFLckNDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxjQUFRLEVBQUU7QUFGSCxLQUw0QjtBQVNyQ0MsaUJBQWEsRUFBRTtBQUNiQyxxQkFBZSxFQUFFQyw4REFBSyxDQUFDLEdBQUQsQ0FEVDtBQUViLGlCQUFXO0FBQ1RELHVCQUFlLEVBQUVDLDhEQUFLLENBQUMsR0FBRDtBQURiO0FBRkUsS0FUc0I7QUFlckNDLGVBQVcsRUFBRTtBQUNYQyxXQUFLLEVBQUVGLDhEQUFLLENBQUMsR0FBRCxDQUREO0FBRVhHLG1CQUFhLEVBQUUsUUFGSjtBQUdYQyxnQkFBVSxFQUFFO0FBSEQsS0Fmd0I7QUFvQnJDQyxhQUFTLEVBQUU7QUFDVEgsV0FBSyxFQUFFSSw0REFBRyxDQUFDLEdBQUQsQ0FERDtBQUVUSCxtQkFBYSxFQUFFLFFBRk47QUFHVEMsZ0JBQVUsRUFBRTtBQUhILEtBcEIwQjtBQXlCckNHLGtCQUFjLEVBQUU7QUFDZEwsV0FBSyxFQUFFRiw4REFBSyxDQUFDLEdBQUQsQ0FERTtBQUVkSCxjQUFRLEVBQUUs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WSxLQUFLLENBQUNaO0FBRGxCO0FBREssS0FKaEI7QUFTRSxnQkFBWSxFQUFFO0FBQUU4RSxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsZ0JBQVUsRUFBRTtBQUFsQyxLQVRoQjtBQVVFLFdBQU8sRUFBRTtBQUFBLGFBQU1wQyxRQUFRLGlDQUFNL0IsS0FBTjtBQUFhOEIsWUFBSSxFQUFFO0FBQW5CLFNBQWQ7QUFBQSxLQVZYO0FBV0Usb0JBQWdCLEVBQUUsSUFYcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQTNERixDQURGO0FBa0dELENBNVBEOztHQUFNMUIsVztVQUNZM0IsUyxFQUNGNkIsMEQsRUF1SmlCd0QsNkU7OztNQXpKM0IxRCxXO0FBOFBTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0Ljc5MGQyY2IzNzQ0YWRjN2JlNDQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEdyaWQsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIHVzZVRoZW1lLFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgU25hY2tiYXIsXHJcbiAgU2xpZGUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IGdyZWVuLCByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCdcclxuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snXHJcbmltcG9ydCBFcnJvck91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvck91dGxpbmUnXHJcbmltcG9ydCB7IGV2ZW50IGFzIEdBZXZlbnQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZ3RhZydcclxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRleHRzL0xhbmdDb250ZXh0J1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgYnV0dG9uU3VjY2Vzczoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmVlbls1MDBdLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JlZW5bNzAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmYWJQcm9ncmVzczoge1xyXG4gICAgY29sb3I6IGdyZWVuWzUwMF0sXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgIG1hcmdpbkxlZnQ6ICcxZW0nLFxyXG4gIH0sXHJcbiAgZXJyb3JJY29uOiB7XHJcbiAgICBjb2xvcjogcmVkWzUwMF0sXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgIG1hcmdpbkxlZnQ6ICcxZW0nLFxyXG4gIH0sXHJcbiAgYnV0dG9uUHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBncmVlbls1MDBdLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICBtYXJnaW5Ub3A6IC0xMixcclxuICAgIG1hcmdpbkxlZnQ6IC0xMixcclxuICB9LFxyXG4gIGFsZXJ0OiB7XHJcbiAgICB6SW5kZXg6ICc5OTk5JyxcclxuICB9LFxyXG59KSlcclxuXHJcbmZ1bmN0aW9uIFRyYW5zaXRpb25MZWZ0KHByb3BzKSB7XHJcbiAgcmV0dXJuIDxTbGlkZSB7Li4ucHJvcHN9IGRpcmVjdGlvbj0nbGVmdCcgLz5cclxufVxyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lRXJyLCBzZXROYW1lRXJyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZW1haWxFcnIsIHNldEVtYWlsRXJyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGhvbmVFcnIsIHNldFBob25lRXJyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21lc3NhZ2VFcnIsIHNldE1lc3NhZ2VFcnJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlbmRFcnJvciwgc2V0U2VuZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoe1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICAgIGNvbG9yOiAnJyxcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLm1lc3NhZ2UpIHNldE1lc3NhZ2UocHJvcHMubWVzc2FnZSlcclxuICB9LCBbcHJvcHMubWVzc2FnZV0pXHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNsYXNzbmFtZSA9IGNsc3goe1xyXG4gICAgW2NsYXNzZXMuYnV0dG9uU3VjY2Vzc106IHN1Y2Nlc3MsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZmllbGRNYXBwaW5nID0ge1xyXG4gICAgbmFtZToge1xyXG4gICAgICBzZXQ6IHNldE5hbWUsXHJcbiAgICAgIHZhbGlkYXRlOiAvXlthLXpBLVog15At16pcXC1dKyQvLFxyXG4gICAgICBlcnI6ICdJbnZhbGlkIE5hbWUnLFxyXG4gICAgICBzZXRFcnI6IHNldE5hbWVFcnIsXHJcbiAgICAgIGlzRXJyOiBuYW1lRXJyLFxyXG4gICAgfSxcclxuXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICBzZXQ6IHNldEVtYWlsLFxyXG4gICAgICB2YWxpZGF0ZTogL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLFxyXG4gICAgICBlcnI6ICdJbnZhbGlkIEVtYWlsJyxcclxuICAgICAgc2V0RXJyOiBzZXRFbWFpbEVycixcclxuICAgICAgaXNFcnI6IGVtYWlsRXJyLFxyXG4gICAgfSxcclxuICAgIHBob25lOiB7XHJcbiAgICAgIHNldDogc2V0UGhvbmUsXHJcbiAgICAgIHZhbGlkYXRlOiAvXihcXCg/KFswLTldezN9KVxcKT9bLS4gXT8oWzAtOV17M30pWy0uIF0/KFswLTldezR9KSkrJC8sXHJcbiAgICAgIGVycjogJ0ludmFsaWQgUGhvbmUnLFxyXG4gICAgICBzZXRFcnI6IHNldFBob25lRXJyLFxyXG4gICAgICBpc0VycjogcGhvbmVFcnIsXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZToge1xyXG4gICAgICBzZXQ6IHNldE1lc3NhZ2UsXHJcbiAgICAgIHZhbGlkYXRlOiAvXlswLTlAYS16QS1aINeQLdeqXFwtXFwhXFwkXSokLyxcclxuICAgICAgZXJyOiAnSW52YWxpZC4gTm8gc3BlY2lhbCBjaGFyZWN0ZXJzIHBsZWFzZS4nLFxyXG4gICAgICBzZXRFcnI6IHNldE1lc3NhZ2VFcnIsXHJcbiAgICAgIGlzRXJyOiBtZXNzYWdlRXJyLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gZXZlbnQgPT4ge1xyXG4gICAgZmllbGRNYXBwaW5nW2V2ZW50LnRhcmdldC5pZF0uc2V0KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIGlmIChmaWVsZE1hcHBpbmdbZXZlbnQudGFyZ2V0LmlkXS5pc0Vycikge1xyXG4gICAgICBjaGVja0Vycm9yKGV2ZW50LnRhcmdldC5pZCwgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRCbHVyID0gZXZlbnQgPT4ge1xyXG4gICAgY2hlY2tFcnJvcihldmVudC50YXJnZXQuaWQsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrRXJyb3IgPSAodGFyZ2V0SWQsIHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSAnJ1xyXG4gICAgdmFsaWQgPSBmaWVsZE1hcHBpbmdbdGFyZ2V0SWRdLnZhbGlkYXRlLnRlc3QodmFsdWUpXHJcbiAgICBpZiAoIXZhbGlkKSBmaWVsZE1hcHBpbmdbdGFyZ2V0SWRdLnNldEVycih0cnVlKVxyXG4gICAgZWxzZSBmaWVsZE1hcHBpbmdbdGFyZ2V0SWRdLnNldEVycihmYWxzZSlcclxuICAgIHJldHVybiB2YWxpZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0TmFtZSgnJylcclxuICAgIHNldE5hbWVFcnIobnVsbClcclxuICAgIHNldEVtYWlsKCcnKVxyXG4gICAgc2V0RW1haWxFcnIobnVsbClcclxuICAgIHNldFBob25lKCcnKVxyXG4gICAgc2V0UGhvbmVFcnIobnVsbClcclxuICAgIHNldE1lc3NhZ2UoJycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0FsbEVycm9ycyA9ICgpID0+IHtcclxuICAgIGxldCB2YWxpZCA9IHRydWVcclxuICAgIGlmIChuYW1lRXJyICE9PSBmYWxzZSkge1xyXG4gICAgICBzZXROYW1lRXJyKHRydWUpXHJcbiAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmIChlbWFpbEVyciAhPT0gZmFsc2UpIHtcclxuICAgICAgc2V0RW1haWxFcnIodHJ1ZSlcclxuICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHBob25lRXJyICE9PSBmYWxzZSkge1xyXG4gICAgICBzZXRQaG9uZUVycih0cnVlKVxyXG4gICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2tBbGxFcnJvcnMoKSkge1xyXG4gICAgICBpZiAoIWxvYWRpbmcpIHtcclxuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBzZXRTZW5kRXJyb3IoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChcclxuICAgICAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLXZyZnVudGVhbS1tYWlsZXIuY2xvdWRmdW5jdGlvbnMubmV0L3NlbmRMZWFkJyxcclxuICAgICAgICAgIHsgbmFtZSwgZW1haWwsIHBob25lLCBtZXNzYWdlIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBjbGVhckZvcm0oKVxyXG4gICAgICAgICAgc2V0QWxlcnQoe1xyXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNEJCNTQzJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBtZXNzYWdlIGhhcyBiZWVuIHNlbnQhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdMZWFkcycsXHJcbiAgICAgICAgICAgIGFjdGlvbjogJ0xlYWQgU2VudCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBDb252ZXJzaW9ucycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgc2V0U2VuZEVycm9yKHRydWUpXHJcbiAgICAgICAgICBzZXRBbGVydCh7XHJcbiAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRjMyMzInLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBHQWV2ZW50KHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdFcnJvcnMnLFxyXG4gICAgICAgICAgICBhY3Rpb246ICdMZWFkIEZhaWxlZCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnV2Vic2l0ZSBDb252ZXJzaW9ucyBFcnJvcnMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCB7IHNpdGVEYXRhLCBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2VDb250ZXh0KClcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgbGFiZWw9J05hbWUnXHJcbiAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICBlcnJvcj17bmFtZUVycn1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e25hbWVFcnIgPyBmaWVsZE1hcHBpbmcubmFtZS5lcnIgOiAnJ31cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgbGFiZWw9J1Bob25lJ1xyXG4gICAgICAgICAgaWQ9J3Bob25lJ1xyXG4gICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICBlcnJvcj17cGhvbmVFcnJ9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtwaG9uZUVyciA/IGZpZWxkTWFwcGluZy5waG9uZS5lcnIgOiAnJ31cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgbGFiZWw9J0VtYWlsJ1xyXG4gICAgICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICBlcnJvcj17ZW1haWxFcnJ9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtlbWFpbEVyciA/IGZpZWxkTWFwcGluZy5lbWFpbC5lcnIgOiAnJ31cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0hvdyBjYW4gd2UgaGVscCB5b3U/J1xyXG4gICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgaWQ9J21lc3NhZ2UnXHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cclxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlSW5wdXRCbHVyfVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fVxyXG4gICAgICAgICAgZXJyb3I9e21lc3NhZ2VFcnJ9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXttZXNzYWdlRXJyID8gZmllbGRNYXBwaW5nLm1lc3NhZ2UuZXJyIDogJyd9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogJzFlbScgfX0+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICBkaXNhYmxlZD17bmFtZUVyciB8fCBlbWFpbEVyciB8fCBwaG9uZUVyciB8fCBtZXNzYWdlRXJyIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzbmFtZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTZW5kIE1lc3NhZ2V7JyAnfVxyXG4gICAgICAgICAge3N1Y2Nlc3MgPyAoXHJcbiAgICAgICAgICAgIDxDaGVja0ljb24gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxTZW5kSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC41ZW0nIH19IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXszMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZhYlByb2dyZXNzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3NlbmRFcnJvciAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JPdXRsaW5lSWNvbiBzaXplPXszMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9ySWNvbn0gLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFsZXJ0fVxyXG4gICAgICAgICAgb3Blbj17YWxlcnQub3Blbn1cclxuICAgICAgICAgIG1lc3NhZ2U9e2FsZXJ0Lm1lc3NhZ2V9XHJcbiAgICAgICAgICBDb250ZW50UHJvcHM9e3tcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFsZXJ0LmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAnbGVmdCcgfX1cclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEFsZXJ0KHsgLi4uYWxlcnQsIG9wZW46IGZhbHNlIH0pfVxyXG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NDAwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9