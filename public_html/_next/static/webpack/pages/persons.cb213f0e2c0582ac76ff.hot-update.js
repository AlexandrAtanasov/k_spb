webpackHotUpdate_N_E("pages/persons",{

/***/ "./components/Modal_Callback/Form_Callback.jsx":
/*!*****************************************************!*\
  !*** ./components/Modal_Callback/Form_Callback.jsx ***!
  \*****************************************************/
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
/* harmony import */ var _data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/localization_data/components/Modal_Callback/Form_Callback */ "./data/localization_data/components/Modal_Callback/Form_Callback.js");


var _jsxFileName = "D:\\dev\\K_SPB\\components\\Modal_Callback\\Form_Callback.jsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import { server } from '../../config'
// import localization data

 // TODO: normal validation 

var validate = function validate(values) {
  var errors = {};

  if (!values.userName) {
    errors.userName = "".concat(_data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userName_null);
  } else if (values.userName.length > 30) {
    errors.userName = "".concat(_data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userName_long);
  }

  if (!values.userNumber) {
    errors.userNumber = "".concat(_data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userNumber_null);
  } else if (!/^[0-9]+$/i.test(values.userNumber)) {
    errors.userNumber = "".concat(_data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].errors.userNumber_numb);
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
      userName: '',
      userNumber: '' // userLocation: 'Пользователь не указал адрес!',

    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
      emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send(service, template, values, user).then(function (response) {
        alert("".concat(values.userName, ", \u0441\u043A\u043E\u0440\u043E \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u044F\u0442 \u0438\u0437 \u0446\u0435\u043D\u0442\u0440\u0430 \u041A\u0438\u043D\u0435\u0437\u0438\u0441!"));
        console.log('SUCCESS!', response.status, response.text); // go to main after submit 

        window.location.href = "/";
      }, function (error) {
        alert("".concat(values.userName, ", \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A!"));
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
      controlId: "formBasicName",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].form_name_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "text",
        name: "userName",
        onChange: formik.handleChange,
        value: formik.values.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: formik.errors.userName ? "".concat(formik.errors.userName) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      controlId: "formBasicNumber",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        children: _data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].form_number_label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        type: "tel",
        name: "userNumber",
        placeholder: _data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].form_number_info,
        onChange: formik.handleChange,
        value: formik.values.userNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
        className: "text-muted",
        children: formik.errors.userNumber ? "".concat(formik.errors.userNumber) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        textAlign: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "button_green_color",
        type: "submit",
        children: _data_localization_data_components_Modal_Callback_Form_Callback__WEBPACK_IMPORTED_MODULE_5__["local"].form_button
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9DYWxsYmFjay9Gb3JtX0NhbGxiYWNrLmpzeCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInVzZXJOYW1lIiwibG9jYWwiLCJ1c2VyTmFtZV9udWxsIiwibGVuZ3RoIiwidXNlck5hbWVfbG9uZyIsInVzZXJOdW1iZXIiLCJ1c2VyTnVtYmVyX251bGwiLCJ0ZXN0IiwidXNlck51bWJlcl9udW1iIiwiT3JkZXJDYWxsRm9ybSIsInNlcnZpY2UiLCJwcm9jZXNzIiwidGVtcGxhdGUiLCJ1c2VyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbGpzIiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0Iiwic3RhdHVzIiwidGV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiYmFzaWNOYXZiYXJOYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzaWNCYXZiYXJOYXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsaWNrIiwiaGFuZGxlU3VibWl0IiwiZm9ybV9uYW1lX2xhYmVsIiwiaGFuZGxlQ2hhbmdlIiwiZm9ybV9udW1iZXJfbGFiZWwiLCJmb3JtX251bWJlcl9pbmZvIiwidGV4dEFsaWduIiwiZm9ybV9idXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7QUFFQTs7Q0FHQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxNQUFNLEVBQUk7QUFDdkIsTUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFFBQVosRUFBc0I7QUFDcEJELFVBQU0sQ0FBQ0MsUUFBUCxhQUFxQkMs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LFlBQUksRUFBQyxRQUE1QztBQUFBLGtCQUNLNUMscUdBQUssQ0FBQzZDO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvREgsQ0EzRkQ7O0dBQU1yQyxhO1VBVWFNLGdEOzs7S0FWYk4sYTtBQTZGU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyc29ucy5jYjIxM2YwZTJjMDU4MmFjNzZmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XHJcblxyXG4vLyBpbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcblxyXG4vLyBpbXBvcnQgbG9jYWxpemF0aW9uIGRhdGFcclxuaW1wb3J0IHsgbG9jYWwgfSBmcm9tICcuLi8uLi9kYXRhL2xvY2FsaXphdGlvbl9kYXRhL2NvbXBvbmVudHMvTW9kYWxfQ2FsbGJhY2svRm9ybV9DYWxsYmFjaydcclxuXHJcbi8vIFRPRE86IG5vcm1hbCB2YWxpZGF0aW9uIFxyXG5cclxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICBpZiAoIXZhbHVlcy51c2VyTmFtZSkge1xyXG4gICAgICBlcnJvcnMudXNlck5hbWUgPSBgJHtsb2NhbC5lcnJvcnMudXNlck5hbWVfbnVsbH1gO1xyXG4gICAgfSBlbHNlIGlmICggdmFsdWVzLnVzZXJOYW1lLmxlbmd0aCA+IDMwICkge1xyXG4gICAgICBlcnJvcnMudXNlck5hbWUgPSBgJHtsb2NhbC5lcnJvcnMudXNlck5hbWVfbG9uZ31gO1xyXG4gICAgfVxyXG4gXHJcbiAgICBpZiAoIXZhbHVlcy51c2VyTnVtYmVyKSB7XHJcbiAgICAgIGVycm9ycy51c2VyTnVtYmVyID0gYCR7bG9jYWwuZXJyb3JzLnVzZXJOdW1iZXJfbnVsbH1gO1xyXG4gICAgfSBlbHNlIGlmICghL15bMC05XSskL2kudGVzdCh2YWx1ZXMudXNlck51bWJlcikpIHtcclxuICAgICAgZXJyb3JzLnVzZXJOdW1iZXIgPSBgJHtsb2NhbC5lcnJvcnMudXNlck51bWJlcl9udW1ifWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9ycztcclxuICB9O1xyXG5cclxuXHJcbmNvbnN0IE9yZGVyQ2FsbEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMX1NFUlZJQ0VfSUQ7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMX1RFTVBMQVRFX0lEO1xyXG4gICAgY29uc3QgdXNlciA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMX1VTRVJfSUQ7XHJcblxyXG4gICAgLy8gTm90aWNlIHRoYXQgd2UgaGF2ZSB0byBpbml0aWFsaXplIEFMTCBvZiBmaWVsZHMgd2l0aCB2YWx1ZXMuIFRoZXNlXHJcbiAgICAvLyBjb3VsZCBjb21lIGZyb20gcHJvcHMsIGJ1dCBzaW5jZSB3ZSBkb24ndCB3YW50IHRvIHByZWZpbGwgdGhpcyBmb3JtLFxyXG4gICAgLy8gd2UganVzdCB1c2UgYW4gZW1wdHkgc3RyaW5nLiBJZiB5b3UgZG9uJ3QgZG8gdGhpcywgUmVhY3Qgd2lsbCB5ZWxsXHJcbiAgICAvLyBhdCB5b3UuXHJcbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6ICcnLFxyXG4gICAgICAgICAgICB1c2VyTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgLy8gdXNlckxvY2F0aW9uOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0YPQutCw0LfQsNC7INCw0LTRgNC10YEhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRlLFxyXG4gICAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKVxyXG4gICAgICAgICAgICBlbWFpbGpzLnNlbmQoc2VydmljZSwgdGVtcGxhdGUsIHZhbHVlcywgdXNlcilcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3ZhbHVlcy51c2VyTmFtZX0sINGB0LrQvtGA0L4g0LLQsNC8INC/0LXRgNC10LfQstC+0L3Rj9GCINC40Lcg0YbQtdC90YLRgNCwINCa0LjQvdC10LfQuNGBIWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vIGdvIHRvIG1haW4gYWZ0ZXIgc3VibWl0IFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3ZhbHVlcy51c2VyTmFtZX0sINGH0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LohYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRkFJTEVELi4uJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYmFzaWNOYXZiYXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2ljLW5hdmJhci1uYXZcIik7XHJcbiAgICBjb25zdCBiYXNpY0JhdmJhck5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzaWMtbmF2YmFyLW5hdi1idXR0b25cIik7XHJcblxyXG4gICAgaWYgKGJhc2ljTmF2YmFyTmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgYmFzaWNCYXZiYXJOYXZCdXR0b24uY2xpY2soKTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY05hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPntsb2NhbC5mb3JtX25hbWVfbGFiZWx9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy51c2VyTmFtZSA/IGAke2Zvcm1pay5lcnJvcnMudXNlck5hbWV9YCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljTnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD57bG9jYWwuZm9ybV9udW1iZXJfbGFiZWx9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9jYWwuZm9ybV9udW1iZXJfaW5mb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VyTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnVzZXJOdW1iZXIgPyBgJHtmb3JtaWsuZXJyb3JzLnVzZXJOdW1iZXJ9YCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtsb2NhbC5mb3JtX251bWJlcl9pbmZvfSAqL31cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbnsvKiBcclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljQ2hvb3NlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD57bG9jYWwuZm9ybV9sb2NhdGlvbl9sYWJlbH08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJMb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlckxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2xvY2FsLmZvcm1fbG9jYXRpb25fb3B0aW9ucy5vcHRpb25fMX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPntsb2NhbC5mb3JtX2xvY2F0aW9uX29wdGlvbnMub3B0aW9uXzJ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57bG9jYWwuZm9ybV9sb2NhdGlvbl9vcHRpb25zLm9wdGlvbl8zfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uX2dyZWVuX2NvbG9yXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhbC5mb3JtX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ2FsbEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==