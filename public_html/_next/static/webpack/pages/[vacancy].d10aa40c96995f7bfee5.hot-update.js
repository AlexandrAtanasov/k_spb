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
  console.log(text[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3ZhY2FuY3ldLmpzIl0sIm5hbWVzIjpbIlZhY2FuY3lQYWdlIiwicGFnZSIsIm1kVGV4dCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImkiLCJ0aXRsZSIsImlkIiwibG9jYWwiLCJtYWluX2xheW91dF90aXRsZSIsIm1hcCIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQWlEZSxTQUFTQSxXQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNuRCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixJQUFYLENBQWI7QUFDQSxNQUFNSyxJQUFJLEdBQUdKLE1BQWI7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQyxDQUFELENBQWhCO0FBQ0EsTUFBSUcsQ0FBQyxHQUFHLENBQVI7QUFDQSxzQkFDSSxxRUFBQyw4REFBRDtBQUNJLFNBQUssRUFBRU4sSUFBSSxDQUFDTyxLQURoQjtBQUVJLGVBQVcsNEJBQXFCUCxJQUFJLENBQUNRLEVBQTFCLFVBRmY7QUFBQSw0QkFJSSxxRUFBQyxxRkFBRDtBQUNJLGFBQU8sRUFBRUMsbUZBQUssQ0FBQ0M7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLEVBT0tQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUFSLElBQUksRUFBSTtBQUNkLDBCQUNJO0FBQUEsK0JBQ0EscUVBQUMsZ0hBQUQsQ0FDSTtBQUNBO0FBRko7QUFHSSxrQkFBUSxFQUFFQTtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxTQUFVUyxJQUFJLENBQUNDLE1BQUwsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFTRSxLQVZMLENBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7S0EzQnVCaEIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdmFjYW5jeV0uZDEwYWE0MGM5Njk5NWY3YmZlZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tICcuLi9sYXlvdXRzL01haW5MYXlvdXQnXHJcbmltcG9ydCB7IENhcmRDb21wb25lbnRXaXRob3V0SGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkQ29tcG9uZW50cy9DYXJkQ29tcG9uZW50V2l0aG91dEhlYWRlcidcclxuaW1wb3J0IHsgSGVhZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGluZy9IZWFkaW5nQ29tcG9uZW50J1xyXG5cclxuaW1wb3J0IHsgbG9jYWwgfSBmcm9tICcuLi9kYXRhL2xvY2FsaXphdGlvbl9kYXRhL3BhZ2VzL3ZhY2FuY3kvdmFjYW5jeSdcclxuaW1wb3J0IHsgdmFjYW5jeV90ZXh0cyB9IGZyb20gJy4uL2RhdGEvcGFnZXMvdmFjYW5jeS92YWNhbmN5X3BhZ2VzX2luZm8vdmFjYW5jeV90ZXh0cydcclxuXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhZ2VzSW5mb0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnL2RhdGEvcGFnZXMvdmFjYW5jeS92YWNhbmN5X3BhZ2VzX2luZm8vJylcclxuICAgIGNvbnN0IGZpbGVuYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBhZ2VzSW5mb0RpcmVjdG9yeSlcclxuICAgIGNvbnN0IHBhdGhzID0gZmlsZW5hbWVzLm1hcCgoZmlsZW5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB7IHBhcmFtczogeyB2YWNhbmN5OiBmaWxlbmFtZS5zbGljZSgwLCAtNSkgfSB9XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBwYWdlc0luZm9EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy9kYXRhL3BhZ2VzL3ZhY2FuY3kvdmFjYW5jeV9wYWdlc19pbmZvLycpXHJcbiAgICBjb25zdCBmaWxlbmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwYWdlc0luZm9EaXJlY3RvcnkpXHJcbiAgICBjb25zdCBwYWdlRmlsZU5hbWUgPSBmaWxlbmFtZXMuZmlsdGVyKGZpbGVuYW1lID0+IGZpbGVuYW1lLnNsaWNlKDAsIC01KSA9PSBjb250ZXh0LnBhcmFtcy52YWNhbmN5KTtcclxuICAgIGNvbnN0IHBhZ2VGaWxlUGF0aCA9IHBhdGguam9pbihwYWdlc0luZm9EaXJlY3RvcnksIHBhZ2VGaWxlTmFtZVswXSlcclxuICAgIGNvbnN0IHBhZ2UgPSBmcy5yZWFkRmlsZVN5bmMocGFnZUZpbGVQYXRoLCAndXRmOCcpXHJcbiAgIFxyXG4gICAgLy8gbG9hZCBtYXJrZG93blxyXG4gICAgY29uc3QgcGFnZXNUZXh0RGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcvZGF0YS9wYWdlcy92YWNhbmN5L3ZhY2FuY3lfcGFnZXNfdGV4dHMvJylcclxuICAgIGNvbnN0IG1kVGV4dCA9IFtdXHJcbiAgICBtZFRleHQucHVzaCh2YWNhbmN5X3RleHRzLm1hcChlbGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgZWxlbS5hY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgZnMucmVhZEZpbGVTeW5jKHBhZ2VzVGV4dERpcmVjdG9yeSArIGVsZW0udGV4dCwgJ3V0ZjgnKVxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcbiAgIC8vIGNvbnN0IHBhcnNlZFBhZ2UgPSBKU09OLnBhcnNlKHBhZ2UpXHJcbiAgICAvL2NvbnN0IG1kVGV4dCA9IGZzLnJlYWRGaWxlU3luYyhwYWdlc1RleHREaXJlY3RvcnkgKyBwYXJzZWRQYWdlLnRleHQsICd1dGY4JylcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgIG1kVGV4dFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhY2FuY3lQYWdlICgge3BhZ2UsIG1kVGV4dH0gKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShwYWdlKVxyXG4gICAgY29uc3QgdGV4dCA9IG1kVGV4dFxyXG4gICAgY29uc29sZS5sb2codGV4dFswXSlcclxuICAgIGxldCBpID0gMFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dFxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2BEZXNjcmlwdGlvbiBmb3IgJHtkYXRhLmlkfSBwYWdlYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nQ29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZz17bG9jYWwubWFpbl9sYXlvdXRfdGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb21wb25lbnRXaXRob3V0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhcmRIZWFkZXI9e2RhdGEuaGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXJkVGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUZXh0PXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgKX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9