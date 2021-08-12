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
          lineNumber: 18,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
          className: "d-flex flex-column h-100 align-items-center justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Main_MainPresaleButton__WEBPACK_IMPORTED_MODULE_3__["MainPresaleButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }, _this)]
      }, img.id, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "d-block w-100",
          src: "".concat(img.src),
          alt: img.alt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
          className: "d-flex flex-column h-100 align-items-center justify-content-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: " ".concat(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h3_background, " "),
            children: img.h3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: " ".concat(_styles_components_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.p_background, " "),
            children: img.p
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Main_MainPresaleButton__WEBPACK_IMPORTED_MODULE_3__["MainPresaleButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, _this)]
      }, img.id, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0Nhcm91c2VsQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDYXJvdXNlbENvbXBvbmVudCIsImRhdGEiLCJtYXJnaW5Ub3AiLCJtYXAiLCJpbWciLCJ0ZXh0X2Rpc2FibGUiLCJzcmMiLCJhbHQiLCJpZCIsInN0eWxlIiwiaDNfYmFja2dyb3VuZCIsImgzIiwicF9iYWNrZ3JvdW5kIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FLQTs7QUFDQTtBQUVPLFNBQVNBLGlCQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXhDLHNCQUNJLHFFQUFDLHdEQUFEO0FBQVUsU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRTtBQUFaLEtBQWpCO0FBQUEsY0FDS0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQUMsR0FBRyxFQUFJO0FBQ2IsYUFDSUEsR0FBRyxDQUFDQyxZQUFKLGdCQUNJLHFFQUFDLHdEQUFELENBQVUsSUFBVjtBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBQyxlQURkO0FBRUksYUFBRyxZQUFLRCxHQUFHLENBQUNFLEdBQVQsQ0FGUDtBQUdJLGFBQUcsRUFBRUYsR0FBRyxDQUFDRztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFNSSxxRUFBQyx3REFBRCxDQUFVLE9BQVY7QUFBa0IsbUJBQVMsRUFBQyxvRUFBNUI7QUFBQSxpQ0FDRyxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBLFNBQW9CSCxHQUFHLENBQUNJLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixnQkFZSSxxRUFBQyx3REFBRCxDQUFVLElBQVY7QUFBQSxnQ0FDQTtBQUNJLG1CQUFTLEVBQUMsZUFEZDtBQUVJLGFBQUcsWUFBS0osR0FBRyxDQUFDRSxHQUFULENBRlA7QUFHSSxhQUFHLEVBQUVGLEdBQUcsQ0FBQ0c7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBTUEscUVBQUMsd0RBQUQsQ0FBVSxPQUFWO0FBQWtCLG1CQUFTLEVBQUMsb0VBQTVCO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxhQUFNRSw4RUFBSyxDQUFDQyxhQUFaLE1BRGI7QUFBQSxzQkFHS04sR0FBRyxDQUFDTztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUNJLHFCQUFTLGFBQU1GLDhFQUFLLENBQUNHLFlBQVosTUFEYjtBQUFBLHNCQUdLUixHQUFHLENBQUNTO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQVdJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5BO0FBQUEsU0FBb0JULEdBQUcsQ0FBQ0ksRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJSO0FBbUNILEtBcENBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIO0tBM0NlUixpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNmYyZDMzZWZlNzM3NmUxZDYzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IE1haW5QcmVzYWxlQnV0dG9uIH0gZnJvbSAnLi4vTWFpbi9NYWluUHJlc2FsZUJ1dHRvbidcclxuXHJcblxyXG4vLyBpbXBvcnQgc3R5bGVzXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9DYXJvdXNlbC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJvdXNlbENvbXBvbmVudCgge2RhdGF9ICkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTU2cHgnfX0+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChpbWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBpbWcudGV4dF9kaXNhYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2ltZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtpbWcuc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWcuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5QcmVzYWxlQnV0dG9uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aW1nLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2ltZy5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24gY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtzdHlsZS5oM19iYWNrZ3JvdW5kfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWcuaDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtzdHlsZS5wX2JhY2tncm91bmR9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltZy5wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5QcmVzYWxlQnV0dG9uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=