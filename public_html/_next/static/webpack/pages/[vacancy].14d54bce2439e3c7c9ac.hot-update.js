webpackHotUpdate_N_E("pages/[vacancy]",{

/***/ "./pages/[vacancy].js":
/*!****************************!*\
  !*** ./pages/[vacancy].js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VacancyPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.jsx");
/* harmony import */ var _components_CardComponents_CardComponentWithoutHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CardComponents/CardComponentWithoutHeader */ "./components/CardComponents/CardComponentWithoutHeader.jsx");
/* harmony import */ var _components_Heading_HeadingComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Heading/HeadingComponent */ "./components/Heading/HeadingComponent.jsx");
/* harmony import */ var _data_localization_data_pages_vacancy_vacancy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/localization_data/pages/vacancy/vacancy */ "./data/localization_data/pages/vacancy/vacancy.js");

var _jsxFileName = "D:\\dev\\K_SPB\\pages\\[vacancy].js";




var __N_SSG = true;
function VacancyPage(_ref) {
  var _this = this;

  var page = _ref.page,
      mdText = _ref.mdText;
  var data = JSON.parse(page);
  var text = mdText;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    title: data.title,
    description: "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u043A\u0438\u043D\u0435\u0437\u0438\u0442\u0430\u0440\u0430\u043F\u0438\u0438",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Heading_HeadingComponent__WEBPACK_IMPORTED_MODULE_3__["HeadingComponent"], {
      heading: _data_localization_data_pages_vacancy_vacancy__WEBPACK_IMPORTED_MODULE_4__["local"].main_layout_title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), text.map(function (text) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardComponents_CardComponentWithoutHeader__WEBPACK_IMPORTED_MODULE_2__["CardComponentWithoutHeader"] // cardHeader={data.header}
        // cardTitle={data.title}
        , {
          cardText: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, _this)
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}
_c = VacancyPage;

var _c;

$RefreshReg$(_c, "VacancyPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3ZhY2FuY3ldLmpzIl0sIm5hbWVzIjpbIlZhY2FuY3lQYWdlIiwicGFnZSIsIm1kVGV4dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwidGl0bGUiLCJsb2NhbCIsIm1haW5fbGF5b3V0X3RpdGxlIiwibWFwIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBaURlLFNBQVNBLFdBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ25ELE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLElBQVgsQ0FBYjtBQUNBLE1BQU1LLElBQUksR0FBR0osTUFBYjtBQUVBLHNCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksU0FBSyxFQUFFQyxJQUFJLENBQUNJLEtBRGhCO0FBRUksZUFBVywrS0FGZjtBQUFBLDRCQUlJLHFFQUFDLHFGQUFEO0FBQ0ksYUFBTyxFQUFFQyxtRkFBSyxDQUFDQztBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFPS0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQUosSUFBSSxFQUFJO0FBQ2QsMEJBQ0k7QUFBQSwrQkFHSSxxRUFBQyxnSEFBRCxDQUNJO0FBQ0E7QUFGSjtBQUdJLGtCQUFRLEVBQUVBO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLFNBQ1NLLElBQUksQ0FBQ0MsTUFBTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVFLEtBWEwsQ0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVCSDtLQTNCdUJaLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3ZhY2FuY3ldLjE0ZDU0YmNlMjQzOWUzYzdjOWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0cy9NYWluTGF5b3V0J1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50V2l0aG91dEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZENvbXBvbmVudHMvQ2FyZENvbXBvbmVudFdpdGhvdXRIZWFkZXInXHJcbmltcG9ydCB7IEhlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRpbmcvSGVhZGluZ0NvbXBvbmVudCdcclxuXHJcbmltcG9ydCB7IGxvY2FsIH0gZnJvbSAnLi4vZGF0YS9sb2NhbGl6YXRpb25fZGF0YS9wYWdlcy92YWNhbmN5L3ZhY2FuY3knXHJcbmltcG9ydCB7IHZhY2FuY3lfdGV4dHMgfSBmcm9tICcuLi9kYXRhL3BhZ2VzL3ZhY2FuY3kvdmFjYW5jeV9wYWdlc19pbmZvL3ZhY2FuY3lfdGV4dHMnXHJcblxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYWdlc0luZm9EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy9kYXRhL3BhZ2VzL3ZhY2FuY3kvdmFjYW5jeV9wYWdlc19pbmZvLycpXHJcbiAgICBjb25zdCBmaWxlbmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwYWdlc0luZm9EaXJlY3RvcnkpXHJcbiAgICBjb25zdCBwYXRocyA9IGZpbGVuYW1lcy5tYXAoKGZpbGVuYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgeyBwYXJhbXM6IHsgdmFjYW5jeTogZmlsZW5hbWUuc2xpY2UoMCwgLTUpIH0gfVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcGFnZXNJbmZvRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcvZGF0YS9wYWdlcy92YWNhbmN5L3ZhY2FuY3lfcGFnZXNfaW5mby8nKVxyXG4gICAgY29uc3QgZmlsZW5hbWVzID0gZnMucmVhZGRpclN5bmMocGFnZXNJbmZvRGlyZWN0b3J5KVxyXG4gICAgY29uc3QgcGFnZUZpbGVOYW1lID0gZmlsZW5hbWVzLmZpbHRlcihmaWxlbmFtZSA9PiBmaWxlbmFtZS5zbGljZSgwLCAtNSkgPT0gY29udGV4dC5wYXJhbXMudmFjYW5jeSk7XHJcbiAgICBjb25zdCBwYWdlRmlsZVBhdGggPSBwYXRoLmpvaW4ocGFnZXNJbmZvRGlyZWN0b3J5LCBwYWdlRmlsZU5hbWVbMF0pXHJcbiAgICBjb25zdCBwYWdlID0gZnMucmVhZEZpbGVTeW5jKHBhZ2VGaWxlUGF0aCwgJ3V0ZjgnKVxyXG4gICBcclxuICAgIC8vIGxvYWQgbWFya2Rvd25cclxuICAgIGNvbnN0IHBhZ2VzVGV4dERpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnL2RhdGEvcGFnZXMvdmFjYW5jeS92YWNhbmN5X3BhZ2VzX3RleHRzLycpXHJcbiAgICAgY29uc3QgbWRUZXh0ID0gdmFjYW5jeV90ZXh0cy5tYXAoZWxlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBlbGVtLmFjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgIGZzLnJlYWRGaWxlU3luYyhwYWdlc1RleHREaXJlY3RvcnkgKyBlbGVtLnRleHQsICd1dGY4JylcclxuICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtZHRleHQgLSAnLCBtZFRleHQpXHJcbiAgIC8vIGNvbnN0IHBhcnNlZFBhZ2UgPSBKU09OLnBhcnNlKHBhZ2UpXHJcbiAgICAvL2NvbnN0IG1kVGV4dCA9IGZzLnJlYWRGaWxlU3luYyhwYWdlc1RleHREaXJlY3RvcnkgKyBwYXJzZWRQYWdlLnRleHQsICd1dGY4JylcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgIG1kVGV4dFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhY2FuY3lQYWdlICgge3BhZ2UsIG1kVGV4dH0gKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShwYWdlKVxyXG4gICAgY29uc3QgdGV4dCA9IG1kVGV4dFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5MYXlvdXRcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtg0JLQsNC60LDQvdGB0LjQuCDQsiDRhtC10L3RgtGA0LUg0LrQuNC90LXQt9C40YLQsNGA0LDQv9C40LhgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRpbmdDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nPXtsb2NhbC5tYWluX2xheW91dF90aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RleHQubWFwKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29tcG9uZW50V2l0aG91dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FyZEhlYWRlcj17ZGF0YS5oZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXJkVGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==