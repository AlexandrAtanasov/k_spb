webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modal_Presale/Form_Presale.jsx":
/*!***************************************************!*\
  !*** ./components/Modal_Presale/Form_Presale.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/localization_data/components/Modal_Presale/Form_Presale */ "./data/localization_data/components/Modal_Presale/Form_Presale.js");


var _jsxFileName = "D:\\dev\\K_SPB\\components\\Modal_Presale\\Form_Presale.jsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import { server } from '../../config'
// import localization data

 // TODO: normal validation 

var validate = function validate(values) {
  var errors = {};

  if (!values.userFirstName) {
    errors.userFirstName = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userFirstName_null);
  } else if (values.userFirstName.length > 30) {
    errors.userFirstName = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userName_long);
  }

  if (!values.userLastName) {
    errors.userLastName = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userLastName_null);
  } else if (values.userLastName.length > 30) {
    errors.userLastName = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userName_long);
  }

  if (!values.userNumber) {
    errors.userNumber = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userNumber_null);
  } else if (!/^[0-9]+$/i.test(values.userNumber)) {
    errors.userNumber = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userNumber_numb);
  }

  if (!values.userEmail) {
    errors.userEmail = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userEmail_null);
  } else if (!/.+@.+\..+/i.test(values.userEmail)) {
    errors.userEmail = "".concat(_data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userEmail_numb);
  }

  return errors;
};

var OrderCallForm = function OrderCallForm() {
  _s();

  var service = "service_8cqz3af";
  var template = "template_nsjdoql";
  var user = "user_gdhNtxqQYlTaHNchyfpym"; // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      userLastName: '',
      userFirstName: '',
      userPatronymic: '',
      userNumber: '',
      userEmail: '',
      userMessage: ''
    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
      emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send(service, template, values, user).then(function (response) {
        alert("".concat(values.userFirstName, ", \u0441\u043A\u043E\u0440\u043E \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u044F\u0442 \u0438\u0437 \u0446\u0435\u043D\u0442\u0440\u0430 \u041A\u0438\u043D\u0435\u0437\u0438\u0441!"));
        console.log('SUCCESS!', response.status, response.text); // go to main after submit 

        window.location.href = "/";
      }, function (error) {
        alert("".concat(values.userFirstName, ", \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A!"));
        console.log('FAILED...', error);
      });
    }
  });
  var basicNavbarNav = document.getElementById("basic-navbar-nav");
  var basicBavbarNavButton = document.getElementById("basic-navbar-nav-button");

  if (basicNavbarNav.classList.contains('show')) {
    basicBavbarNavButton.click();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formLastName",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_last_name_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "text",
        name: "userLastName",
        onChange: formik.handleChange,
        value: formik.values.userLastName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: formik.errors.userLastName ? "".concat(formik.errors.userLastName) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formFirstName",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_first_name_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "text",
        name: "userFirstName",
        onChange: formik.handleChange,
        value: formik.values.userFirstName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: formik.errors.userFirstName ? "".concat(formik.errors.userFirstName) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formPatronymic",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_patronymic_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "text",
        name: "userPatronymic",
        onChange: formik.handleChange,
        value: formik.values.userPatronymic
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formBasicNumber",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_number_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "tel",
        name: "userNumber",
        placeholder: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_number_info,
        onChange: formik.handleChange,
        value: formik.values.userNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: formik.errors.userNumber ? "".concat(formik.errors.userNumber) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formEmail",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_email_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "email",
        name: "userEmail",
        placeholder: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_email_info,
        onChange: formik.handleChange,
        value: formik.values.userEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: formik.errors.userEmail ? "".concat(formik.errors.userEmail) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formMessage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_user_message_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "text",
        name: "userMessage",
        onChange: formik.handleChange,
        value: formik.values.userMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userMessage_null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        textAlign: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "button_green_color",
        type: "submit",
        children: _data_localization_data_components_Modal_Presale_Form_Presale__WEBPACK_IMPORTED_MODULE_5__["local"].form_button
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, _this);
};

_s(OrderCallForm, "B/4rI4IXClQ7sG7psKj+pOuRe5Q=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"]];
});

_c = OrderCallForm;
/* harmony default export */ __webpack_exports__["default"] = (OrderCallForm);

var _c;

$RefreshReg$(_c, "OrderCallForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9QcmVzYWxlL0Zvcm1fUHJlc2FsZS5qc3giXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ1c2VyRmlyc3ROYW1lIiwibG9jYWwiLCJ1c2VyRmlyc3ROYW1lX251bGwiLCJsZW5ndGgiLCJ1c2VyTmFtZV9sb25nIiwidXNlckxhc3ROYW1lIiwidXNlckxhc3ROYW1lX251bGwiLCJ1c2VyTnVtYmVyIiwidXNlck51bWJlcl9udWxsIiwidGVzdCIsInVzZXJOdW1iZXJfbnVtYiIsInVzZXJFbWFpbCIsInVzZXJFbWFpbF9udWxsIiwidXNlckVtYWlsX251bWIiLCJPcmRlckNhbGxGb3JtIiwic2VydmljZSIsInByb2Nlc3MiLCJ0ZW1wbGF0ZSIsInVzZXIiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidXNlclBhdHJvbnltaWMiLCJ1c2VyTWVzc2FnZSIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbGpzIiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0Iiwic3RhdHVzIiwidGV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiYmFzaWNOYXZiYXJOYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzaWNCYXZiYXJOYXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsaWNrIiwiaGFuZGxlU3VibWl0IiwiZm9ybV9sYXN0X25hbWVfbGFiZWwiLCJoYW5kbGVDaGFuZ2UiLCJmb3JtX2ZpcnN0X25hbWVfbGFiZWwiLCJmb3JtX3BhdHJvbnltaWNfbGFiZWwiLCJmb3JtX251bWJlcl9sYWJlbCIsImZvcm1fbnVtYmVyX2luZm8iLCJmb3JtX2VtYWlsX2xhYmVsIiwiZm9ybV9lbWFpbF9pbmZvIiwiZm9ybV91c2VyX21lc3NhZ2VfbGFiZWwiLCJ1c2Vy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QUMwRDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNEZILENBdElEOztHQUFNN0MsYTtVQVVhTSxnRDs7O0tBVmJOLGE7QUF3SVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFhMDliZjUwYzAxYTkyMDQxOWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJztcclxuXHJcbi8vIGltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuXHJcbi8vIGltcG9ydCBsb2NhbGl6YXRpb24gZGF0YVxyXG5pbXBvcnQgeyBsb2NhbCB9IGZyb20gJy4uLy4uL2RhdGEvbG9jYWxpemF0aW9uX2RhdGEvY29tcG9uZW50cy9Nb2RhbF9QcmVzYWxlL0Zvcm1fUHJlc2FsZSdcclxuXHJcbi8vIFRPRE86IG5vcm1hbCB2YWxpZGF0aW9uIFxyXG5cclxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICBpZiAoIXZhbHVlcy51c2VyRmlyc3ROYW1lKSB7XHJcbiAgICAgIGVycm9ycy51c2VyRmlyc3ROYW1lID0gYCR7bG9jYWwuZXJyb3JzLnVzZXJGaXJzdE5hbWVfbnVsbH1gO1xyXG4gICAgfSBlbHNlIGlmICggdmFsdWVzLnVzZXJGaXJzdE5hbWUubGVuZ3RoID4gMzAgKSB7XHJcbiAgICAgIGVycm9ycy51c2VyRmlyc3ROYW1lID0gYCR7bG9jYWwuZXJyb3JzLnVzZXJOYW1lX2xvbmd9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbHVlcy51c2VyTGFzdE5hbWUpIHtcclxuICAgICAgZXJyb3JzLnVzZXJMYXN0TmFtZSA9IGAke2xvY2FsLmVycm9ycy51c2VyTGFzdE5hbWVfbnVsbH1gO1xyXG4gICAgfSBlbHNlIGlmICggdmFsdWVzLnVzZXJMYXN0TmFtZS5sZW5ndGggPiAzMCApIHtcclxuICAgICAgZXJyb3JzLnVzZXJMYXN0TmFtZSA9IGAke2xvY2FsLmVycm9ycy51c2VyTmFtZV9sb25nfWA7XHJcbiAgICB9XHJcbiBcclxuICAgIGlmICghdmFsdWVzLnVzZXJOdW1iZXIpIHtcclxuICAgICAgZXJyb3JzLnVzZXJOdW1iZXIgPSBgJHtsb2NhbC5lcnJvcnMudXNlck51bWJlcl9udWxsfWA7XHJcbiAgICB9IGVsc2UgaWYgKCEvXlswLTldKyQvaS50ZXN0KHZhbHVlcy51c2VyTnVtYmVyKSkge1xyXG4gICAgICBlcnJvcnMudXNlck51bWJlciA9IGAke2xvY2FsLmVycm9ycy51c2VyTnVtYmVyX251bWJ9YDtcclxuICAgIH1cclxuICAgXHJcbiAgICBpZiAoIXZhbHVlcy51c2VyRW1haWwpIHtcclxuICAgICAgZXJyb3JzLnVzZXJFbWFpbCA9IGAke2xvY2FsLmVycm9ycy51c2VyRW1haWxfbnVsbH1gO1xyXG4gICAgfSBlbHNlIGlmICghLy4rQC4rXFwuLisvaS50ZXN0KHZhbHVlcy51c2VyRW1haWwpKSB7XHJcbiAgICAgIGVycm9ycy51c2VyRW1haWwgPSBgJHtsb2NhbC5lcnJvcnMudXNlckVtYWlsX251bWJ9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG4gIH07XHJcblxyXG5cclxuY29uc3QgT3JkZXJDYWxsRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZXJ2aWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxfU0VSVklDRV9JRDtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxfVEVNUExBVEVfSUQ7XHJcbiAgICBjb25zdCB1c2VyID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxfVVNFUl9JRDtcclxuXHJcbiAgICAvLyBOb3RpY2UgdGhhdCB3ZSBoYXZlIHRvIGluaXRpYWxpemUgQUxMIG9mIGZpZWxkcyB3aXRoIHZhbHVlcy4gVGhlc2VcclxuICAgIC8vIGNvdWxkIGNvbWUgZnJvbSBwcm9wcywgYnV0IHNpbmNlIHdlIGRvbid0IHdhbnQgdG8gcHJlZmlsbCB0aGlzIGZvcm0sXHJcbiAgICAvLyB3ZSBqdXN0IHVzZSBhbiBlbXB0eSBzdHJpbmcuIElmIHlvdSBkb24ndCBkbyB0aGlzLCBSZWFjdCB3aWxsIHllbGxcclxuICAgIC8vIGF0IHlvdS5cclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICB1c2VyTGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICB1c2VyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgdXNlclBhdHJvbnltaWM6ICcnLFxyXG4gICAgICAgICAgICB1c2VyTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgdXNlckVtYWlsOiAnJyxcclxuICAgICAgICAgICAgdXNlck1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGUsXHJcbiAgICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpXHJcbiAgICAgICAgICAgIGVtYWlsanMuc2VuZChzZXJ2aWNlLCB0ZW1wbGF0ZSwgdmFsdWVzLCB1c2VyKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7dmFsdWVzLnVzZXJGaXJzdE5hbWV9LCDRgdC60L7RgNC+INCy0LDQvCDQv9C10YDQtdC30LLQvtC90Y/RgiDQuNC3INGG0LXQvdGC0YDQsCDQmtC40L3QtdC30LjRgSFgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyBnbyB0byBtYWluIGFmdGVyIHN1Ym1pdCBcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHt2YWx1ZXMudXNlckZpcnN0TmFtZX0sINGH0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LohYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRkFJTEVELi4uJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYmFzaWNOYXZiYXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2ljLW5hdmJhci1uYXZcIik7XHJcbiAgICBjb25zdCBiYXNpY0JhdmJhck5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzaWMtbmF2YmFyLW5hdi1idXR0b25cIik7XHJcblxyXG4gICAgaWYgKGJhc2ljTmF2YmFyTmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgYmFzaWNCYXZiYXJOYXZCdXR0b24uY2xpY2soKTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTGFzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPntsb2NhbC5mb3JtX2xhc3RfbmFtZV9sYWJlbH08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlckxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VyTGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudXNlckxhc3ROYW1lID8gYCR7Zm9ybWlrLmVycm9ycy51c2VyTGFzdE5hbWV9YCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUZpcnN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+e2xvY2FsLmZvcm1fZmlyc3RfbmFtZV9sYWJlbH08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlckZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlckZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy51c2VyRmlyc3ROYW1lID8gYCR7Zm9ybWlrLmVycm9ycy51c2VyRmlyc3ROYW1lfWAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1QYXRyb255bWljXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD57bG9jYWwuZm9ybV9wYXRyb255bWljX2xhYmVsfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyUGF0cm9ueW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlclBhdHJvbnltaWN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnVzZXJQYXRyb255bWljID8gYCR7Zm9ybWlrLmVycm9ycy51c2VyUGF0cm9ueW1pY31gIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PiAqL31cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljTnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD57bG9jYWwuZm9ybV9udW1iZXJfbGFiZWx9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9jYWwuZm9ybV9udW1iZXJfaW5mb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VyTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnVzZXJOdW1iZXIgPyBgJHtmb3JtaWsuZXJyb3JzLnVzZXJOdW1iZXJ9YCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtsb2NhbC5mb3JtX251bWJlcl9pbmZvfSAqL31cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtRW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPntsb2NhbC5mb3JtX2VtYWlsX2xhYmVsfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvY2FsLmZvcm1fZW1haWxfaW5mb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VyRW1haWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudXNlckVtYWlsID8gYCR7Zm9ybWlrLmVycm9ycy51c2VyRW1haWx9YCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtsb2NhbC5mb3JtX251bWJlcl9pbmZvfSAqL31cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+e2xvY2FsLmZvcm1fdXNlcl9tZXNzYWdlX2xhYmVsfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnVzZXJNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhbC5lcnJvcnMudXNlck1lc3NhZ2VfbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbl9ncmVlbl9jb2xvclwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYWwuZm9ybV9idXR0b259XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckNhbGxGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=