webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main/CarouselComponent.jsx":
/*!***********************************************!*\
  !*** ./components/Main/CarouselComponent.jsx ***!
  \***********************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Main_MainPresaleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main/MainPresaleButton */ "./components/Main/MainPresaleButton.jsx");
/* harmony import */ var _styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/components/Carousel.module.scss */ "./styles/components/Carousel.module.scss");
/* harmony import */ var _styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\dev\\K_SPB\\components\\Main\\CarouselComponent.jsx";


 // import styles


function CarouselComponent(_ref) {
  var _this = this;

  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    style: {
      marginTop: '-56px'
    },
    children: data.map(function (img) {
      return img.text_disable ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "d-block w-100",
          src: "".concat(img.src),
          alt: img.alt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
          className: "d-flex flex-column h-100 align-items-center justify-content-center",
          style: {
            marginTop: '-56px',
            position: 'absolute',
            transform: 'translateY(51%)'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Main_MainPresaleButton__WEBPACK_IMPORTED_MODULE_3__["MainPresaleButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, _this)]
      }, img.id, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "d-block w-100",
          src: "".concat(img.src),
          alt: img.alt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
          className: "d-flex flex-column h-100 align-items-center justify-content-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: " ".concat(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h3_background, " "),
            children: img.h3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: " ".concat(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.p_background, " "),
            children: img.p
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Main_MainPresaleButton__WEBPACK_IMPORTED_MODULE_3__["MainPresaleButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, _this)]
      }, img.id, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
_c = CarouselComponent;

var _c;

$RefreshReg$(_c, "CarouselComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0Nhcm91c2VsQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDYXJvdXNlbENvbXBvbmVudCIsImRhdGEiLCJtYXJnaW5Ub3AiLCJtYXAiLCJpbWciLCJ0ZXh0X2Rpc2FibGUiLCJzcmMiLCJhbHQiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsImlkIiwic3R5bGUiLCJoM19iYWNrZ3JvdW5kIiwiaDMiLCJwX2JhY2tncm91bmQiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBO0FBRU8sU0FBU0EsaUJBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFeEMsc0JBQ0kscUVBQUMsd0RBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFO0FBQVosS0FBakI7QUFBQSxjQUNLRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBQyxHQUFHLEVBQUk7QUFDYixhQUNJQSxHQUFHLENBQUNDLFlBQUosZ0JBQ0kscUVBQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQUEsZ0NBQ0k7QUFDSSxtQkFBUyxFQUFDLGVBRGQ7QUFFSSxhQUFHLFlBQUtELEdBQUcsQ0FBQ0UsR0FBVCxDQUZQO0FBR0ksYUFBRyxFQUFFRixHQUFHLENBQUNHO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLHFFQUFDLHdEQUFELENBQVUsT0FBVjtBQUNJLG1CQUFTLEVBQUMsb0VBRGQ7QUFFSSxlQUFLLEVBQUU7QUFBQ0wscUJBQVMsRUFBRSxPQUFaO0FBQXFCTSxvQkFBUSxFQUFFLFVBQS9CO0FBQTJDQyxxQkFBUyxFQUFFO0FBQXRELFdBRlg7QUFBQSxpQ0FJRyxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBLFNBQW9CTCxHQUFHLENBQUNNLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixnQkFlSSxxRUFBQyx3REFBRCxDQUFVLElBQVY7QUFBQSxnQ0FDQTtBQUNJLG1CQUFTLEVBQUMsZUFEZDtBQUVJLGFBQUcsWUFBS04sR0FBRyxDQUFDRSxHQUFULENBRlA7QUFHSSxhQUFHLEVBQUVGLEdBQUcsQ0FBQ0c7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBTUEscUVBQUMsd0RBQUQsQ0FBVSxPQUFWO0FBQWtCLG1CQUFTLEVBQUMsb0VBQTVCO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxhQUFNSSw4RUFBSyxDQUFDQyxhQUFaLE1BRGI7QUFBQSxzQkFHS1IsR0FBRyxDQUFDUztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUNJLHFCQUFTLGFBQU1GLDhFQUFLLENBQUNHLFlBQVosTUFEYjtBQUFBLHNCQUdLVixHQUFHLENBQUNXO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQVdJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5BO0FBQUEsU0FBb0JYLEdBQUcsQ0FBQ00sRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCUjtBQXNDSCxLQXZDQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRDSDtLQTlDZVYsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGM0OTc1YzEyYWNhMzJjYjE0NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5pbXBvcnQgeyBNYWluUHJlc2FsZUJ1dHRvbiB9IGZyb20gJy4uL01haW4vTWFpblByZXNhbGVCdXR0b24nXHJcblxyXG4vLyBpbXBvcnQgc3R5bGVzXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9DYXJvdXNlbC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJvdXNlbENvbXBvbmVudCgge2RhdGF9ICkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTU2cHgnfX0+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChpbWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBpbWcudGV4dF9kaXNhYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2ltZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtpbWcuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWcuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICctNTZweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDUxJSknfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluUHJlc2FsZUJ1dHRvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2ltZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtpbWcuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltZy5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7c3R5bGUuaDNfYmFja2dyb3VuZH0gYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1nLmgzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7c3R5bGUucF9iYWNrZ3JvdW5kfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWcucH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluUHJlc2FsZUJ1dHRvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+ICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9