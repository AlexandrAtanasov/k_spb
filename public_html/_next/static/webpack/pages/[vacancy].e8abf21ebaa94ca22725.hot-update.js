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
  console.log('ARR', text);
  var i = 0;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    title: data.title,
    description: "Description for ".concat(data.id, " page"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Heading_HeadingComponent__WEBPACK_IMPORTED_MODULE_3__["HeadingComponent"], {
      heading: _data_localization_data_pages_vacancy_vacancy__WEBPACK_IMPORTED_MODULE_4__["local"].main_layout_title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), text.map(function (text) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardComponents_CardComponentWithoutHeader__WEBPACK_IMPORTED_MODULE_2__["CardComponentWithoutHeader"] // cardHeader={data.header}
        // cardTitle={data.title}
        , {
          cardText: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3ZhY2FuY3ldLmpzIl0sIm5hbWVzIjpbIlZhY2FuY3lQYWdlIiwicGFnZSIsIm1kVGV4dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImkiLCJ0aXRsZSIsImlkIiwibG9jYWwiLCJtYWluX2xheW91dF90aXRsZSIsIm1hcCIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQWlEZSxTQUFTQSxXQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNuRCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixJQUFYLENBQWI7QUFDQSxNQUFNSyxJQUFJLEdBQUdKLE1BQWI7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkYsSUFBbkI7QUFDQSxNQUFJRyxDQUFDLEdBQUcsQ0FBUjtBQUNBLHNCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksU0FBSyxFQUFFTixJQUFJLENBQUNPLEtBRGhCO0FBRUksZUFBVyw0QkFBcUJQLElBQUksQ0FBQ1EsRUFBMUIsVUFGZjtBQUFBLDRCQUlJLHFFQUFDLHFGQUFEO0FBQ0ksYUFBTyxFQUFFQyxtRkFBSyxDQUFDQztBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFPS1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQVIsSUFBSSxFQUFJO0FBQ2QsMEJBQ0k7QUFBQSwrQkFDQSxxRUFBQyxnSEFBRCxDQUNJO0FBQ0E7QUFGSjtBQUdJLGtCQUFRLEVBQUVBO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLFNBQVVTLElBQUksQ0FBQ0MsTUFBTCxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVNFLEtBVkwsQ0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDtLQTNCdUJoQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t2YWNhbmN5XS5lOGFiZjIxZWJhYTk0Y2EyMjcyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCdcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudFdpdGhvdXRIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRDb21wb25lbnRzL0NhcmRDb21wb25lbnRXaXRob3V0SGVhZGVyJ1xyXG5pbXBvcnQgeyBIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkaW5nL0hlYWRpbmdDb21wb25lbnQnXHJcblxyXG5pbXBvcnQgeyBsb2NhbCB9IGZyb20gJy4uL2RhdGEvbG9jYWxpemF0aW9uX2RhdGEvcGFnZXMvdmFjYW5jeS92YWNhbmN5J1xyXG5pbXBvcnQgeyB2YWNhbmN5X3RleHRzIH0gZnJvbSAnLi4vZGF0YS9wYWdlcy92YWNhbmN5L3ZhY2FuY3lfcGFnZXNfaW5mby92YWNhbmN5X3RleHRzJ1xyXG5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGFnZXNJbmZvRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcvZGF0YS9wYWdlcy92YWNhbmN5L3ZhY2FuY3lfcGFnZXNfaW5mby8nKVxyXG4gICAgY29uc3QgZmlsZW5hbWVzID0gZnMucmVhZGRpclN5bmMocGFnZXNJbmZvRGlyZWN0b3J5KVxyXG4gICAgY29uc3QgcGF0aHMgPSBmaWxlbmFtZXMubWFwKChmaWxlbmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHsgcGFyYW1zOiB7IHZhY2FuY3k6IGZpbGVuYW1lLnNsaWNlKDAsIC01KSB9IH1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHBhZ2VzSW5mb0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnL2RhdGEvcGFnZXMvdmFjYW5jeS92YWNhbmN5X3BhZ2VzX2luZm8vJylcclxuICAgIGNvbnN0IGZpbGVuYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBhZ2VzSW5mb0RpcmVjdG9yeSlcclxuICAgIGNvbnN0IHBhZ2VGaWxlTmFtZSA9IGZpbGVuYW1lcy5maWx0ZXIoZmlsZW5hbWUgPT4gZmlsZW5hbWUuc2xpY2UoMCwgLTUpID09IGNvbnRleHQucGFyYW1zLnZhY2FuY3kpO1xyXG4gICAgY29uc3QgcGFnZUZpbGVQYXRoID0gcGF0aC5qb2luKHBhZ2VzSW5mb0RpcmVjdG9yeSwgcGFnZUZpbGVOYW1lWzBdKVxyXG4gICAgY29uc3QgcGFnZSA9IGZzLnJlYWRGaWxlU3luYyhwYWdlRmlsZVBhdGgsICd1dGY4JylcclxuICAgXHJcbiAgICAvLyBsb2FkIG1hcmtkb3duXHJcbiAgICBjb25zdCBwYWdlc1RleHREaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy9kYXRhL3BhZ2VzL3ZhY2FuY3kvdmFjYW5jeV9wYWdlc190ZXh0cy8nKVxyXG4gICAgY29uc3QgbWRUZXh0ID0gW11cclxuICAgIG1kVGV4dC5wdXNoKHZhY2FuY3lfdGV4dHMubWFwKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICBlbGVtLmFjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICBmcy5yZWFkRmlsZVN5bmMocGFnZXNUZXh0RGlyZWN0b3J5ICsgZWxlbS50ZXh0LCAndXRmOCcpXHJcbiAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIClcclxuICAgLy8gY29uc3QgcGFyc2VkUGFnZSA9IEpTT04ucGFyc2UocGFnZSlcclxuICAgIC8vY29uc3QgbWRUZXh0ID0gZnMucmVhZEZpbGVTeW5jKHBhZ2VzVGV4dERpcmVjdG9yeSArIHBhcnNlZFBhZ2UudGV4dCwgJ3V0ZjgnKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgbWRUZXh0XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmFjYW5jeVBhZ2UgKCB7cGFnZSwgbWRUZXh0fSApIHtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHBhZ2UpXHJcbiAgICBjb25zdCB0ZXh0ID0gbWRUZXh0XHJcbiAgICBjb25zb2xlLmxvZygnQVJSJywgdGV4dClcclxuICAgIGxldCBpID0gMFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dFxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2BEZXNjcmlwdGlvbiBmb3IgJHtkYXRhLmlkfSBwYWdlYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nQ29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZz17bG9jYWwubWFpbl9sYXlvdXRfdGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb21wb25lbnRXaXRob3V0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhcmRIZWFkZXI9e2RhdGEuaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXJkVGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9