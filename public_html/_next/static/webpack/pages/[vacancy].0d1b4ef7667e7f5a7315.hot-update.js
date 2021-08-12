webpackHotUpdate_N_E("pages/[vacancy]",{

/***/ "./components/Main/Navbar/NavBarComponent.jsx":
/*!****************************************************!*\
  !*** ./components/Main/Navbar/NavBarComponent.jsx ***!
  \****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Modal_Callback_Modal_Callback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Modal_Callback/Modal_Callback */ "./components/Modal_Callback/Modal_Callback.jsx");
/* harmony import */ var _Modal_Contacts_Modal_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modal_Contacts/Modal_Contacts */ "./components/Modal_Contacts/Modal_Contacts.jsx");
/* harmony import */ var _useDocumentScrollThrottled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useDocumentScrollThrottled */ "./components/Main/Navbar/useDocumentScrollThrottled.js");
/* harmony import */ var _data_localization_data_components_Main_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/localization_data/components/Main/Navbar/Navbar */ "./data/localization_data/components/Main/Navbar/Navbar.js");
/* harmony import */ var _data_pages_resolvable_resolvable_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/pages/resolvable/resolvable_menu */ "./data/pages/resolvable/resolvable_menu.js");
/* harmony import */ var _data_pages_additional_additional_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/pages/additional/additional_menu */ "./data/pages/additional/additional_menu.js");
/* harmony import */ var _styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../styles/components/NavBarComponent.module.scss */ "./styles/components/NavBarComponent.module.scss");
/* harmony import */ var _styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\dev\\K_SPB\\components\\Main\\Navbar\\NavBarComponent.jsx",
    _s = $RefreshSig$();



 // import { server } from '../../config'
// import Components



 // import data



 // import styles


function NavBarComponent() {
  _s();

  var _this = this;

  // scroll logic start
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      shouldHideHeader = _useState[0],
      setShouldHideHeader = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      shouldShowShadow = _useState2[0],
      setShouldShowShadow = _useState2[1];

  var MINIMUM_SCROLL = 80;
  var TIMEOUT_DELAY = 400;
  Object(_useDocumentScrollThrottled__WEBPACK_IMPORTED_MODULE_6__["default"])(function (callbackData) {
    var previousScrollTop = callbackData.previousScrollTop,
        currentScrollTop = callbackData.currentScrollTop;
    var isScrolledDown = previousScrollTop < currentScrollTop;
    var isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setShouldShowShadow(currentScrollTop > 2);
    setTimeout(function () {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  var shadowStyle = shouldShowShadow ? _styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.shadow : '';
  var hiddenStyle = shouldHideHeader ? _styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.hidden : ''; // scroll logic end
  // close dropdown by click outside. start

  var node = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var handleClick = function handleClick(e) {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    } // outside click


    var basicNavbarNav = document.getElementById("basic-navbar-nav");
    var basicBavbarNavButton = document.getElementById("basic-navbar-nav-button");

    if (basicNavbarNav.classList.contains('show')) {
      basicBavbarNavButton.click();
    } // browser info
    // const browser= (function(){
    //     var ua= navigator.userAgent, tem,
    //     M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    //     if(/trident/i.test(M[1])){
    //         tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
    //         return 'IE '+(tem[1] || '');
    //     }
    //     if(M[1]=== 'Chrome'){
    //         tem= ua.match(/\b(OPR|Edge?)\/(\d+)/);
    //         if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');            
    //     }
    //     M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    //     if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    //     // return M.join(' ');
    //     return M;
    // })();

  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("mousedown", handleClick);
    return function () {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []); // close dropdown by click outside. end

  var longMenu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      collapseOnSelect: true,
      className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header, " ").concat(shadowStyle, " ").concat(hiddenStyle, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.fixedTop),
      expand: "lg",
      ref: node,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/',
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "logo",
            src: "/img/main/navbar/Logo.jpg",
            width: "auto",
            height: "30",
            className: "d-inline-block align-top"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), ' ', "\u041A\u0438\u043D\u0435\u0437\u0438\u0441"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav",
        id: "basic-navbar-nav-button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
          className: "mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: '/',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
              children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
            title: "\u0426\u0435\u043D\u044B \u0438 \u0430\u043A\u0446\u0438\u0438",
            id: "basic-nav-dropdown",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/price",
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/sales",
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                children: "\u0410\u043A\u0446\u0438\u0438 \u0438 \u0441\u043A\u0438\u0434\u043A\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
            title: _data_localization_data_components_Main_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__["local"].menu_resolvable,
            id: "basic-nav-dropdown",
            ref: longMenu // onClick={handleClickMakeFixedMenu(longMenu)}
            // onClick={handleClickMakeLongMenu}
            ,
            children: _data_pages_resolvable_resolvable_menu__WEBPACK_IMPORTED_MODULE_8__["resolvable_menu"].map(function (menu) {
              if (menu.id == 1) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/resolvable/[pid]",
                  as: "/resolvable/".concat(menu.pid),
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                    className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                    children: menu.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 45
                  }, _this)
                }, menu.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 41
                }, _this);
              } else {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
                    className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/resolvable/[pid]",
                    as: "/resolvable/".concat(menu.pid),
                    passHref: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                      className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: menu.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 45
                  }, _this)]
                }, menu.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 41
                }, _this);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
            title: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
            id: "basic-nav-dropdown",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a // href={`/vacancy`}
            , {
              href: "/[vacancy]",
              as: "/vacancy",
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                children: "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/rules",
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                children: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
            title: _data_localization_data_components_Main_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__["local"].menu_contacts,
            id: "basic-nav-dropdown",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
              href: "#callback",
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal_Callback_Modal_Callback__WEBPACK_IMPORTED_MODULE_4__["ModalCallback"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
              href: "#callToCenters",
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal_Contacts_Modal_Contacts__WEBPACK_IMPORTED_MODULE_5__["ModalContacts"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/contacts",
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                children: _data_localization_data_components_Main_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__["local"].menu_how_to_find_us
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(NavBarComponent, "dDr62+cO0HJ+orPZXOYnDpa/l5I=", false, function () {
  return [_useDocumentScrollThrottled__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = NavBarComponent;

var _c;

$RefreshReg$(_c, "NavBarComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL05hdmJhci9OYXZCYXJDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk5hdkJhckNvbXBvbmVudCIsInVzZVN0YXRlIiwic2hvdWxkSGlkZUhlYWRlciIsInNldFNob3VsZEhpZGVIZWFkZXIiLCJzaG91bGRTaG93U2hhZG93Iiwic2V0U2hvdWxkU2hvd1NoYWRvdyIsIk1JTklNVU1fU0NST0xMIiwiVElNRU9VVF9ERUxBWSIsInVzZURvY3VtZW50U2Nyb2xsVGhyb3R0bGVkIiwiY2FsbGJhY2tEYXRhIiwicHJldmlvdXNTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwiaXNTY3JvbGxlZERvd24iLCJpc01pbmltdW1TY3JvbGxlZCIsInNldFRpbWVvdXQiLCJzaGFkb3dTdHlsZSIsInN0eWxlIiwic2hhZG93IiwiaGlkZGVuU3R5bGUiLCJoaWRkZW4iLCJub2RlIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYmFzaWNOYXZiYXJOYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzaWNCYXZiYXJOYXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjbGljayIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9uZ01lbnUiLCJoZWFkZXIiLCJmaXhlZFRvcCIsImxpbmVIZWlnaHQiLCJ3b3JkQnJlYWsiLCJkcm9wZG93bkRpdmlkZXIiLCJsb2NhbCIsIm1lbnVfcmVzb2x2YWJsZSIsInJlc29sdmFibGVfbWVudSIsIm1hcCIsIm1lbnUiLCJpZCIsInBpZCIsInRpdGxlIiwibWVudV9jb250YWN0cyIsIm1lbnVfaG93X3RvX2ZpbmRfdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUVBOztBQUNBO0FBQ0E7Q0FJ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QVMsWUFBS3pCLHNGQUFLLENBQUN1QixVQUFYLGNBQXlCdkIsc0ZBQUssQ0FBQ3dCLFNBQS9CLE1BQTNCO0FBQUEsMEJBQ0tFLDJGQUFLLENBQUNTO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxLSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBZ05IOztHQXJSZW5ELGU7VUFPWlEsbUU7OztLQVBZUixlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t2YWNhbmN5XS4wZDFiNGVmNzY2N2U3ZjVhNzMxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IE5hdiwgTmF2RHJvcGRvd24sIE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gaW1wb3J0IHsgc2VydmVyIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuLy8gaW1wb3J0IENvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWxDYWxsYmFjayB9IGZyb20gJy4uLy4uL01vZGFsX0NhbGxiYWNrL01vZGFsX0NhbGxiYWNrJ1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhY3RzIH0gZnJvbSAnLi4vLi4vTW9kYWxfQ29udGFjdHMvTW9kYWxfQ29udGFjdHMnXHJcblxyXG5pbXBvcnQgdXNlRG9jdW1lbnRTY3JvbGxUaHJvdHRsZWQgZnJvbSAnLi91c2VEb2N1bWVudFNjcm9sbFRocm90dGxlZCdcclxuXHJcbi8vIGltcG9ydCBkYXRhXHJcbmltcG9ydCB7bG9jYWx9IGZyb20gJy4uLy4uLy4uL2RhdGEvbG9jYWxpemF0aW9uX2RhdGEvY29tcG9uZW50cy9NYWluL05hdmJhci9OYXZiYXInXHJcbmltcG9ydCB7cmVzb2x2YWJsZV9tZW51fSBmcm9tICcuLi8uLi8uLi9kYXRhL3BhZ2VzL3Jlc29sdmFibGUvcmVzb2x2YWJsZV9tZW51J1xyXG5pbXBvcnQge2FkZGl0aW9uYWxfbWVudX0gZnJvbSAnLi4vLi4vLi4vZGF0YS9wYWdlcy9hZGRpdGlvbmFsL2FkZGl0aW9uYWxfbWVudSdcclxuXHJcbi8vIGltcG9ydCBzdHlsZXNcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL05hdkJhckNvbXBvbmVudC5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyQ29tcG9uZW50KCkge1xyXG5cclxuICAgIC8vIHNjcm9sbCBsb2dpYyBzdGFydFxyXG4gICAgY29uc3QgW3Nob3VsZEhpZGVIZWFkZXIsIHNldFNob3VsZEhpZGVIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3VsZFNob3dTaGFkb3csIHNldFNob3VsZFNob3dTaGFkb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgTUlOSU1VTV9TQ1JPTEwgPSA4MDtcclxuICAgIGNvbnN0IFRJTUVPVVRfREVMQVkgPSA0MDA7ICBcclxuICAgIHVzZURvY3VtZW50U2Nyb2xsVGhyb3R0bGVkKGNhbGxiYWNrRGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgcHJldmlvdXNTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AgfSA9IGNhbGxiYWNrRGF0YTtcclxuICAgICAgY29uc3QgaXNTY3JvbGxlZERvd24gPSBwcmV2aW91c1Njcm9sbFRvcCA8IGN1cnJlbnRTY3JvbGxUb3A7XHJcbiAgICAgIGNvbnN0IGlzTWluaW11bVNjcm9sbGVkID0gY3VycmVudFNjcm9sbFRvcCA+IE1JTklNVU1fU0NST0xMO1xyXG4gIFxyXG4gICAgICBzZXRTaG91bGRTaG93U2hhZG93KGN1cnJlbnRTY3JvbGxUb3AgPiAyKTtcclxuICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvdWxkSGlkZUhlYWRlcihpc1Njcm9sbGVkRG93biAmJiBpc01pbmltdW1TY3JvbGxlZCk7XHJcbiAgICAgIH0sIFRJTUVPVVRfREVMQVkpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzaGFkb3dTdHlsZSA9IHNob3VsZFNob3dTaGFkb3cgPyBzdHlsZS5zaGFkb3cgOiAnJztcclxuICAgIGNvbnN0IGhpZGRlblN0eWxlID0gc2hvdWxkSGlkZUhlYWRlciA/IHN0eWxlLmhpZGRlbiA6ICcnO1xyXG4gICAgLy8gc2Nyb2xsIGxvZ2ljIGVuZFxyXG5cclxuICAgIC8vIGNsb3NlIGRyb3Bkb3duIGJ5IGNsaWNrIG91dHNpZGUuIHN0YXJ0XHJcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGUuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgLy8gaW5zaWRlIGNsaWNrXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gb3V0c2lkZSBjbGlja1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2ljTmF2YmFyTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNpYy1uYXZiYXItbmF2XCIpO1xyXG4gICAgICAgIGNvbnN0IGJhc2ljQmF2YmFyTmF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNpYy1uYXZiYXItbmF2LWJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgaWYgKGJhc2ljTmF2YmFyTmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgIGJhc2ljQmF2YmFyTmF2QnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAvLyBicm93c2VyIGluZm9cclxuICAgICAgICAvLyBjb25zdCBicm93c2VyPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgdmFyIHVhPSBuYXZpZ2F0b3IudXNlckFnZW50LCB0ZW0sXHJcbiAgICAgICAgLy8gICAgIE09IHVhLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSkgfHwgW107XHJcbiAgICAgICAgLy8gICAgIGlmKC90cmlkZW50L2kudGVzdChNWzFdKSl7XHJcbiAgICAgICAgLy8gICAgICAgICB0ZW09ICAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWModWEpIHx8IFtdO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICdJRSAnKyh0ZW1bMV0gfHwgJycpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGlmKE1bMV09PT0gJ0Nocm9tZScpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGVtPSB1YS5tYXRjaCgvXFxiKE9QUnxFZGdlPylcXC8oXFxkKykvKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHRlbSE9IG51bGwpIHJldHVybiB0ZW0uc2xpY2UoMSkuam9pbignICcpLnJlcGxhY2UoJ09QUicsICdPcGVyYScpLnJlcGxhY2UoJ0VkZyAnLCAnRWRnZSAnKTsgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBNPSBNWzJdPyBbTVsxXSwgTVsyXV06IFtuYXZpZ2F0b3IuYXBwTmFtZSwgbmF2aWdhdG9yLmFwcFZlcnNpb24sICctPyddO1xyXG4gICAgICAgIC8vICAgICBpZigodGVtPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKSkhPSBudWxsKSBNLnNwbGljZSgxLCAxLCB0ZW1bMV0pO1xyXG4gICAgICAgIC8vICAgICAvLyByZXR1cm4gTS5qb2luKCcgJyk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBNO1xyXG4gICAgICAgIC8vIH0pKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBjbG9zZSBkcm9wZG93biBieSBjbGljayBvdXRzaWRlLiBlbmRcclxuXHJcbmNvbnN0IGxvbmdNZW51ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhclxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VPblNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5oZWFkZXJ9ICR7c2hhZG93U3R5bGV9ICR7aGlkZGVuU3R5bGV9ICR7c3R5bGUuZml4ZWRUb3B9YH1cclxuICAgICAgICAgICAgICAgIGV4cGFuZD1cImxnXCJcclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvbWFpbi9uYXZiYXIvTG9nby5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JrQuNC90LXQt9C40YFcclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXZiYXItbmF2LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQptC10L3RiyDQuCDQsNC60YbQuNC4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJpY2VgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NhbGVzYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LrRhtC40Lgg0Lgg0YHQutC40LTQutC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2xvY2FsLm1lbnVfcmVzb2x2YWJsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2xvbmdNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17aGFuZGxlQ2xpY2tNYWtlRml4ZWRNZW51KGxvbmdNZW51KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTWFrZUxvbmdNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb2x2YWJsZV9tZW51Lm1hcChtZW51ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVudS5pZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc29sdmFibGUvW3BpZF1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9yZXNvbHZhYmxlLyR7bWVudS5waWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbnUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc29sdmFibGUvW3BpZF1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzb2x2YWJsZS8ke21lbnUucGlkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCY0L3RhNC+0YDQvNCw0YbQuNGPXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3BlcnNvbnNgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGI0LAg0LrQvtC80LDQvdC00LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3JhZGlvYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCg0LDQtNC40L7Qv9C10YDQtdC00LDRh9C4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHJlZj17YC92YWNhbmN5YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL1t2YWNhbmN5XWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3ZhY2FuY3lgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQsNC60LDQvdGB0LjQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcnVsZXNgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNCw0LLQuNC70LAg0L/QvtGB0LXRidC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL21ldGhvZG9sb2d5YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LLRgtC+0YDRgdC60LDRjyDQutC+0LvQvtC90LrQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9vcmdhbml6YXRpb25zYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGL0YjQtdGB0YLQvtGP0YnQuNC1INC+0YDQs9Cw0L3QuNC30LDRhtC40LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9yZXZpZXdzYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQt9GL0LLRi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbC5tZW51X25ld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2RHJvcGRvd24gdGl0bGU9e2xvY2FsLm1lbnVfYWRkaXRpb25hbH0gaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRpdGlvbmFsX21lbnUubWFwKG1lbnUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZW51LmlkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbnUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hZGRpdGlvbmFsL1twaWRdYH0gYXM9e2AvYWRkaXRpb25hbC8ke21lbnUucGlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVudS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRkaXRpb25hbC9bcGlkXWB9IGFzPXtgL2FkZGl0aW9uYWwvJHttZW51LnBpZH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtsb2NhbC5tZW51X2NvbnRhY3RzfSBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNjYWxsYmFja1wiIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxDYWxsYmFjayAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNjYWxsVG9DZW50ZXJzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ29udGFjdHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY29udGFjdHNgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsLm1lbnVfaG93X3RvX2ZpbmRfdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==