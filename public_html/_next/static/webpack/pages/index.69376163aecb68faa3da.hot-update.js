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
            marginTop: '-56px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0Nhcm91c2VsQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDYXJvdXNlbENvbXBvbmVudCIsImRhdGEiLCJtYXJnaW5Ub3AiLCJtYXAiLCJpbWciLCJ0ZXh0X2Rpc2FibGUiLCJzcmMiLCJhbHQiLCJpZCIsInN0eWxlIiwiaDNfYmFja2dyb3VuZCIsImgzIiwicF9iYWNrZ3JvdW5kIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFDQTtBQUVPLFNBQVNBLGlCQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXhDLHNCQUNJLHFFQUFDLHdEQUFEO0FBQVUsU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRTtBQUFaLEtBQWpCO0FBQUEsY0FDS0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQUMsR0FBRyxFQUFJO0FBQ2IsYUFDSUEsR0FBRyxDQUFDQyxZQUFKLGdCQUNJLHFFQUFDLHdEQUFELENBQVUsSUFBVjtBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBQyxlQURkO0FBRUksYUFBRyxZQUFLRCxHQUFHLENBQUNFLEdBQVQsQ0FGUDtBQUdJLGFBQUcsRUFBRUYsR0FBRyxDQUFDRztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFNSSxxRUFBQyx3REFBRCxDQUFVLE9BQVY7QUFDSSxtQkFBUyxFQUFDLG9FQURkO0FBRUksZUFBSyxFQUFFO0FBQUNMLHFCQUFTLEVBQUU7QUFBWixXQUZYO0FBQUEsaUNBSUcscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQSxTQUFvQkUsR0FBRyxDQUFDSSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZ0JBZUkscUVBQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQUEsZ0NBQ0E7QUFDSSxtQkFBUyxFQUFDLGVBRGQ7QUFFSSxhQUFHLFlBQUtKLEdBQUcsQ0FBQ0UsR0FBVCxDQUZQO0FBR0ksYUFBRyxFQUFFRixHQUFHLENBQUNHO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQU1BLHFFQUFDLHdEQUFELENBQVUsT0FBVjtBQUFrQixtQkFBUyxFQUFDLG9FQUE1QjtBQUFBLGtDQUNJO0FBQ0kscUJBQVMsYUFBTUUsOEVBQUssQ0FBQ0MsYUFBWixNQURiO0FBQUEsc0JBR0tOLEdBQUcsQ0FBQ087QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFDSSxxQkFBUyxhQUFNRiw4RUFBSyxDQUFDRyxZQUFaLE1BRGI7QUFBQSxzQkFHS1IsR0FBRyxDQUFDUztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFXSSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOQTtBQUFBLFNBQW9CVCxHQUFHLENBQUNJLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQlI7QUFzQ0gsS0F2Q0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Q0g7S0E5Q2VSLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5Mzc2MTYzYWVjYjY4ZmFhM2RhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgTWFpblByZXNhbGVCdXR0b24gfSBmcm9tICcuLi9NYWluL01haW5QcmVzYWxlQnV0dG9uJ1xyXG5cclxuLy8gaW1wb3J0IHN0eWxlc1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2Fyb3VzZWwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2Fyb3VzZWxDb21wb25lbnQoIHtkYXRhfSApIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbCBzdHlsZT17e21hcmdpblRvcDogJy01NnB4J319PlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoaW1nID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnRleHRfZGlzYWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpbWcuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7aW1nLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTU2cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluUHJlc2FsZUJ1dHRvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2ltZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtpbWcuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltZy5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7c3R5bGUuaDNfYmFja2dyb3VuZH0gYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1nLmgzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7c3R5bGUucF9iYWNrZ3JvdW5kfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWcucH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluUHJlc2FsZUJ1dHRvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+ICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9