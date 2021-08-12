webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9DYWxsYmFjay9Gb3JtX0NhbGxiYWNrLmpzeCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInVzZXJOYW1lIiwibG9jYWwiLCJ1c2VyTmFtZV9udWxsIiwibGVuZ3RoIiwidXNlck5hbWVfbG9uZyIsInVzZXJOdW1iZXIiLCJ1c2VyTnVtYmVyX251bGwiLCJ0ZXN0IiwidXNlck51bWJlcl9udW1iIiwiT3JkZXJDYWxsRm9ybSIsInNlcnZpY2UiLCJwcm9jZXNzIiwidGVtcGxhdGUiLCJ1c2VyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbGpzIiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0Iiwic3RhdHVzIiwidGV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiYmFzaWNOYXZiYXJOYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzaWNCYXZiYXJOYXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsaWNrIiwiaGFuZGxlU3VibWl0IiwiZm9ybV9uYW1lX2xhYmVsIiwiaGFuZGxlQ2hhbmdlIiwiZm9ybV9udW1iZXJfbGFiZWwiLCJmb3JtX251bWJlcl9pbmZvIiwidGV4dEFsaWduIiwiZm9ybV9idXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7QUFFQTs7Q0FHQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxNQUFNLEVBQUk7QUFDdkIsTUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFFBQVosRUFBc0I7QUFDcEJELFVBQU0sQ0FBQ0MsUUFBUCxhQUFxQkMs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LFlBQUksRUFBQyxRQUE1QztBQUFBLGtCQUNLNUMscUdBQUssQ0FBQzZDO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvREgsQ0EzRkQ7O0dBQU1yQyxhO1VBVWFNLGdEOzs7S0FWYk4sYTtBQTZGU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2IyMTNmMGUyYzA1ODJhYzc2ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5cclxuLy8gaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuLy8gaW1wb3J0IGxvY2FsaXphdGlvbiBkYXRhXHJcbmltcG9ydCB7IGxvY2FsIH0gZnJvbSAnLi4vLi4vZGF0YS9sb2NhbGl6YXRpb25fZGF0YS9jb21wb25lbnRzL01vZGFsX0NhbGxiYWNrL0Zvcm1fQ2FsbGJhY2snXHJcblxyXG4vLyBUT0RPOiBub3JtYWwgdmFsaWRhdGlvbiBcclxuXHJcbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgaWYgKCF2YWx1ZXMudXNlck5hbWUpIHtcclxuICAgICAgZXJyb3JzLnVzZXJOYW1lID0gYCR7bG9jYWwuZXJyb3JzLnVzZXJOYW1lX251bGx9YDtcclxuICAgIH0gZWxzZSBpZiAoIHZhbHVlcy51c2VyTmFtZS5sZW5ndGggPiAzMCApIHtcclxuICAgICAgZXJyb3JzLnVzZXJOYW1lID0gYCR7bG9jYWwuZXJyb3JzLnVzZXJOYW1lX2xvbmd9YDtcclxuICAgIH1cclxuIFxyXG4gICAgaWYgKCF2YWx1ZXMudXNlck51bWJlcikge1xyXG4gICAgICBlcnJvcnMudXNlck51bWJlciA9IGAke2xvY2FsLmVycm9ycy51c2VyTnVtYmVyX251bGx9YDtcclxuICAgIH0gZWxzZSBpZiAoIS9eWzAtOV0rJC9pLnRlc3QodmFsdWVzLnVzZXJOdW1iZXIpKSB7XHJcbiAgICAgIGVycm9ycy51c2VyTnVtYmVyID0gYCR7bG9jYWwuZXJyb3JzLnVzZXJOdW1iZXJfbnVtYn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnM7XHJcbiAgfTtcclxuXHJcblxyXG5jb25zdCBPcmRlckNhbGxGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlcnZpY2UgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTF9TRVJWSUNFX0lEO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTF9URU1QTEFURV9JRDtcclxuICAgIGNvbnN0IHVzZXIgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTF9VU0VSX0lEO1xyXG5cclxuICAgIC8vIE5vdGljZSB0aGF0IHdlIGhhdmUgdG8gaW5pdGlhbGl6ZSBBTEwgb2YgZmllbGRzIHdpdGggdmFsdWVzLiBUaGVzZVxyXG4gICAgLy8gY291bGQgY29tZSBmcm9tIHByb3BzLCBidXQgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0byBwcmVmaWxsIHRoaXMgZm9ybSxcclxuICAgIC8vIHdlIGp1c3QgdXNlIGFuIGVtcHR5IHN0cmluZy4gSWYgeW91IGRvbid0IGRvIHRoaXMsIFJlYWN0IHdpbGwgeWVsbFxyXG4gICAgLy8gYXQgeW91LlxyXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgICAgICAgdXNlck51bWJlcjogJycsXHJcbiAgICAgICAgICAgIC8vIHVzZXJMb2NhdGlvbjogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INGD0LrQsNC30LDQuyDQsNC00YDQtdGBIScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0ZSxcclxuICAgICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSlcclxuICAgICAgICAgICAgZW1haWxqcy5zZW5kKHNlcnZpY2UsIHRlbXBsYXRlLCB2YWx1ZXMsIHVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHt2YWx1ZXMudXNlck5hbWV9LCDRgdC60L7RgNC+INCy0LDQvCDQv9C10YDQtdC30LLQvtC90Y/RgiDQuNC3INGG0LXQvdGC0YDQsCDQmtC40L3QtdC30LjRgSFgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyBnbyB0byBtYWluIGFmdGVyIHN1Ym1pdCBcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgJHt2YWx1ZXMudXNlck5hbWV9LCDRh9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6IWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBSUxFRC4uLicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGJhc2ljTmF2YmFyTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNpYy1uYXZiYXItbmF2XCIpO1xyXG4gICAgY29uc3QgYmFzaWNCYXZiYXJOYXZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2ljLW5hdmJhci1uYXYtYnV0dG9uXCIpO1xyXG5cclxuICAgIGlmIChiYXNpY05hdmJhck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgIGJhc2ljQmF2YmFyTmF2QnV0dG9uLmNsaWNrKCk7XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD57bG9jYWwuZm9ybV9uYW1lX2xhYmVsfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudXNlck5hbWUgPyBgJHtmb3JtaWsuZXJyb3JzLnVzZXJOYW1lfWAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY051bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+e2xvY2FsLmZvcm1fbnVtYmVyX2xhYmVsfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGVsJyBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvY2FsLmZvcm1fbnVtYmVyX2luZm99XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlck51bWJlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy51c2VyTnVtYmVyID8gYCR7Zm9ybWlrLmVycm9ycy51c2VyTnVtYmVyfWAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7bG9jYWwuZm9ybV9udW1iZXJfaW5mb30gKi99XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG57LyogXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY0Nob29zZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+e2xvY2FsLmZvcm1fbG9jYXRpb25fbGFiZWx9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBcclxuICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnVzZXJMb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPntsb2NhbC5mb3JtX2xvY2F0aW9uX29wdGlvbnMub3B0aW9uXzF9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57bG9jYWwuZm9ybV9sb2NhdGlvbl9vcHRpb25zLm9wdGlvbl8yfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2xvY2FsLmZvcm1fbG9jYXRpb25fb3B0aW9ucy5vcHRpb25fM308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbl9ncmVlbl9jb2xvclwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYWwuZm9ybV9idXR0b259XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckNhbGxGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=