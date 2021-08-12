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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "d-block w-100",
          src: "".concat(img.src),
          alt: img.alt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
          className: "d-flex flex-column h-100 align-items-center justify-content-center",
          children: [img.text_active, " ? ()", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: " ".concat(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h3_background, " "),
            children: img.h3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: " ".concat(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.p_background, " "),
            children: img.p
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Main_MainPresaleButton__WEBPACK_IMPORTED_MODULE_3__["MainPresaleButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, _this)]
      }, img.id, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0Nhcm91c2VsQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDYXJvdXNlbENvbXBvbmVudCIsImRhdGEiLCJtYXJnaW5Ub3AiLCJtYXAiLCJpbWciLCJzcmMiLCJhbHQiLCJ0ZXh0X2FjdGl2ZSIsInN0eWxlIiwiaDNfYmFja2dyb3VuZCIsImgzIiwicF9iYWNrZ3JvdW5kIiwicCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUtBOztBQUNBO0FBRU8sU0FBU0EsaUJBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFeEMsc0JBQ0kscUVBQUMsd0RBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFO0FBQVosS0FBakI7QUFBQSxjQUNLRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBQyxHQUFHLEVBQUk7QUFDYiwwQkFDSSxxRUFBQyx3REFBRCxDQUFVLElBQVY7QUFBQSxnQ0FDSTtBQUNJLG1CQUFTLEVBQUMsZUFEZDtBQUVJLGFBQUcsWUFBS0EsR0FBRyxDQUFDQyxHQUFULENBRlA7QUFHSSxhQUFHLEVBQUVELEdBQUcsQ0FBQ0U7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUkscUVBQUMsd0RBQUQsQ0FBVSxPQUFWO0FBQWtCLG1CQUFTLEVBQUMsb0VBQTVCO0FBQUEscUJBQ0tGLEdBQUcsQ0FBQ0csV0FEVCx3QkFHSTtBQUNJLHFCQUFTLGFBQU1DLDhFQUFLLENBQUNDLGFBQVosTUFEYjtBQUFBLHNCQUdLTCxHQUFHLENBQUNNO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQVFJO0FBQ0kscUJBQVMsYUFBTUYsOEVBQUssQ0FBQ0csWUFBWixNQURiO0FBQUEsc0JBR0tQLEdBQUcsQ0FBQ1E7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBYUkscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQSxTQUFvQlIsR0FBRyxDQUFDUyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3QkgsS0F6QkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Qkg7S0FoQ2ViLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3Y2IyOTI5YjdkNDRhNzBjZDdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgTWFpblByZXNhbGVCdXR0b24gfSBmcm9tICcuLi9NYWluL01haW5QcmVzYWxlQnV0dG9uJ1xyXG5cclxuXHJcbi8vIGltcG9ydCBzdHlsZXNcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL0Nhcm91c2VsLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcm91c2VsQ29tcG9uZW50KCB7ZGF0YX0gKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWwgc3R5bGU9e3ttYXJnaW5Ub3A6ICctNTZweCd9fT5cclxuICAgICAgICAgICAge2RhdGEubWFwKGltZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aW1nLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2ltZy5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24gY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1nLnRleHRfYWN0aXZlfSA/ICgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke3N0eWxlLmgzX2JhY2tncm91bmR9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltZy5oM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke3N0eWxlLnBfYmFja2dyb3VuZH0gYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1nLnB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpblByZXNhbGVCdXR0b24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==