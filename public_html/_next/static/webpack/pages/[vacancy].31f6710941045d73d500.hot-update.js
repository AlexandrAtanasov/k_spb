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
                    lineNumber: 139,
                    columnNumber: 45
                  }, _this)
                }, menu.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 41
                }, _this);
              } else {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
                    className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
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
                        lineNumber: 158,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 45
                  }, _this)]
                }, menu.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 41
                }, _this);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
                lineNumber: 174,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
              className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.dropdownDivider, " ")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/sales",
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
                className: "".concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.lineHeight, " ").concat(_styles_components_NavBarComponent_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wordBreak, " "),
                children: "\u0410\u043A\u0446\u0438\u0438 \u0438 \u0441\u043A\u0438\u0434\u043A\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL05hdmJhci9OYXZCYXJDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk5hdkJhckNvbXBvbmVudCIsInVzZVN0YXRlIiwic2hvdWxkSGlkZUhlYWRlciIsInNldFNob3VsZEhpZGVIZWFkZXIiLCJzaG91bGRTaG93U2hhZG93Iiwic2V0U2hvdWxkU2hvd1NoYWRvdyIsIk1JTklNVU1fU0NST0xMIiwiVElNRU9VVF9ERUxBWSIsInVzZURvY3VtZW50U2Nyb2xsVGhyb3R0bGVkIiwiY2FsbGJhY2tEYXRhIiwicHJldmlvdXNTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwiaXNTY3JvbGxlZERvd24iLCJpc01pbmltdW1TY3JvbGxlZCIsInNldFRpbWVvdXQiLCJzaGFkb3dTdHlsZSIsInN0eWxlIiwic2hhZG93IiwiaGlkZGVuU3R5bGUiLCJoaWRkZW4iLCJub2RlIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYmFzaWNOYXZiYXJOYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzaWNCYXZiYXJOYXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjbGljayIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9uZ01lbnUiLCJoZWFkZXIiLCJmaXhlZFRvcCIsImxvY2FsIiwibWVudV9yZXNvbHZhYmxlIiwicmVzb2x2YWJsZV9tZW51IiwibWFwIiwibWVudSIsImlkIiwicGlkIiwibGluZUhlaWdodCIsIndvcmRCcmVhayIsInRpdGxlIiwiZHJvcGRvd25EaXZpZGVyIiwibWVudV9jb250YWN0cyIsIm1lbnVfaG93X3RvX2ZpbmRfdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUVBOztBQUNBO0FBQ0E7Q0FJ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QkFBUyxZQUFLakMsc0ZBQUssQ0FBQzhCLFVBQVgsY0FBeUI5QixzRkFBSyxDQUFDK0IsU0FBL0IsTUFBM0I7QUFBQSwwQkFDS1IsMkZBQUssQ0FBQ1k7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEtKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFnTkg7O0dBclJlbkQsZTtVQU9aUSxtRTs7O0tBUFlSLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3ZhY2FuY3ldLjMxZjY3MTA5NDEwNDVkNzNkNTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTmF2LCBOYXZEcm9wZG93biwgTmF2YmFyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG4vLyBpbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcblxyXG4vLyBpbXBvcnQgQ29tcG9uZW50c1xyXG5pbXBvcnQgeyBNb2RhbENhbGxiYWNrIH0gZnJvbSAnLi4vLi4vTW9kYWxfQ2FsbGJhY2svTW9kYWxfQ2FsbGJhY2snXHJcbmltcG9ydCB7IE1vZGFsQ29udGFjdHMgfSBmcm9tICcuLi8uLi9Nb2RhbF9Db250YWN0cy9Nb2RhbF9Db250YWN0cydcclxuXHJcbmltcG9ydCB1c2VEb2N1bWVudFNjcm9sbFRocm90dGxlZCBmcm9tICcuL3VzZURvY3VtZW50U2Nyb2xsVGhyb3R0bGVkJ1xyXG5cclxuLy8gaW1wb3J0IGRhdGFcclxuaW1wb3J0IHtsb2NhbH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2NhbGl6YXRpb25fZGF0YS9jb21wb25lbnRzL01haW4vTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IHtyZXNvbHZhYmxlX21lbnV9IGZyb20gJy4uLy4uLy4uL2RhdGEvcGFnZXMvcmVzb2x2YWJsZS9yZXNvbHZhYmxlX21lbnUnXHJcbmltcG9ydCB7YWRkaXRpb25hbF9tZW51fSBmcm9tICcuLi8uLi8uLi9kYXRhL3BhZ2VzL2FkZGl0aW9uYWwvYWRkaXRpb25hbF9tZW51J1xyXG5cclxuLy8gaW1wb3J0IHN0eWxlc1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvTmF2QmFyQ29tcG9uZW50Lm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZCYXJDb21wb25lbnQoKSB7XHJcblxyXG4gICAgLy8gc2Nyb2xsIGxvZ2ljIHN0YXJ0XHJcbiAgICBjb25zdCBbc2hvdWxkSGlkZUhlYWRlciwgc2V0U2hvdWxkSGlkZUhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvdWxkU2hvd1NoYWRvdywgc2V0U2hvdWxkU2hvd1NoYWRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBNSU5JTVVNX1NDUk9MTCA9IDgwO1xyXG4gICAgY29uc3QgVElNRU9VVF9ERUxBWSA9IDQwMDsgIFxyXG4gICAgdXNlRG9jdW1lbnRTY3JvbGxUaHJvdHRsZWQoY2FsbGJhY2tEYXRhID0+IHtcclxuICAgICAgY29uc3QgeyBwcmV2aW91c1Njcm9sbFRvcCwgY3VycmVudFNjcm9sbFRvcCB9ID0gY2FsbGJhY2tEYXRhO1xyXG4gICAgICBjb25zdCBpc1Njcm9sbGVkRG93biA9IHByZXZpb3VzU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcDtcclxuICAgICAgY29uc3QgaXNNaW5pbXVtU2Nyb2xsZWQgPSBjdXJyZW50U2Nyb2xsVG9wID4gTUlOSU1VTV9TQ1JPTEw7XHJcbiAgXHJcbiAgICAgIHNldFNob3VsZFNob3dTaGFkb3coY3VycmVudFNjcm9sbFRvcCA+IDIpO1xyXG4gIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRTaG91bGRIaWRlSGVhZGVyKGlzU2Nyb2xsZWREb3duICYmIGlzTWluaW11bVNjcm9sbGVkKTtcclxuICAgICAgfSwgVElNRU9VVF9ERUxBWSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNoYWRvd1N0eWxlID0gc2hvdWxkU2hvd1NoYWRvdyA/IHN0eWxlLnNoYWRvdyA6ICcnO1xyXG4gICAgY29uc3QgaGlkZGVuU3R5bGUgPSBzaG91bGRIaWRlSGVhZGVyID8gc3R5bGUuaGlkZGVuIDogJyc7XHJcbiAgICAvLyBzY3JvbGwgbG9naWMgZW5kXHJcblxyXG4gICAgLy8gY2xvc2UgZHJvcGRvd24gYnkgY2xpY2sgb3V0c2lkZS4gc3RhcnRcclxuICAgIGNvbnN0IG5vZGUgPSB1c2VSZWYoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAvLyBpbnNpZGUgY2xpY2tcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdXRzaWRlIGNsaWNrXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFzaWNOYXZiYXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2ljLW5hdmJhci1uYXZcIik7XHJcbiAgICAgICAgY29uc3QgYmFzaWNCYXZiYXJOYXZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2ljLW5hdmJhci1uYXYtYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICBpZiAoYmFzaWNOYXZiYXJOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICAgICAgYmFzaWNCYXZiYXJOYXZCdXR0b24uY2xpY2soKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGJyb3dzZXIgaW5mb1xyXG4gICAgICAgIC8vIGNvbnN0IGJyb3dzZXI9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICB2YXIgdWE9IG5hdmlnYXRvci51c2VyQWdlbnQsIHRlbSxcclxuICAgICAgICAvLyAgICAgTT0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcclxuICAgICAgICAvLyAgICAgaWYoL3RyaWRlbnQvaS50ZXN0KE1bMV0pKXtcclxuICAgICAgICAvLyAgICAgICAgIHRlbT0gIC9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW107XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJ0lFICcrKHRlbVsxXSB8fCAnJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYoTVsxXT09PSAnQ2hyb21lJyl7XHJcbiAgICAgICAgLy8gICAgICAgICB0ZW09IHVhLm1hdGNoKC9cXGIoT1BSfEVkZ2U/KVxcLyhcXGQrKS8pO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYodGVtIT0gbnVsbCkgcmV0dXJuIHRlbS5zbGljZSgxKS5qb2luKCcgJykucmVwbGFjZSgnT1BSJywgJ09wZXJhJykucmVwbGFjZSgnRWRnICcsICdFZGdlICcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIE09IE1bMl0/IFtNWzFdLCBNWzJdXTogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J107XHJcbiAgICAgICAgLy8gICAgIGlmKCh0ZW09IHVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpKSE9IG51bGwpIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSk7XHJcbiAgICAgICAgLy8gICAgIC8vIHJldHVybiBNLmpvaW4oJyAnKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIE07XHJcbiAgICAgICAgLy8gfSkoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGljayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGljayk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIGNsb3NlIGRyb3Bkb3duIGJ5IGNsaWNrIG91dHNpZGUuIGVuZFxyXG5cclxuY29uc3QgbG9uZ01lbnUgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2YmFyXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZU9uU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmhlYWRlcn0gJHtzaGFkb3dTdHlsZX0gJHtoaWRkZW5TdHlsZX0gJHtzdHlsZS5maXhlZFRvcH1gfVxyXG4gICAgICAgICAgICAgICAgZXhwYW5kPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9tYWluL25hdmJhci9Mb2dvLmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQmtC40L3QtdC30LjRgVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdmJhci1uYXYtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9C70LDQstC90LDRjyDRgdGC0YDQsNC90LjRhtCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtsb2NhbC5tZW51X3Jlc29sdmFibGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtsb25nTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTWFrZUZpeGVkTWVudShsb25nTWVudSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVDbGlja01ha2VMb25nTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc29sdmFibGVfbWVudS5tYXAobWVudSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnUuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9yZXNvbHZhYmxlL1twaWRdYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzb2x2YWJsZS8ke21lbnUucGlkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZW51LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW51LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9yZXNvbHZhYmxlL1twaWRdYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Jlc29sdmFibGUvJHttZW51LnBpZH1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KbQtdC90Ysg0Lgg0LDQutGG0LjQuFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3ByaWNlYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9CzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zYWxlc2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkNC60YbQuNC4INC4INGB0LrQuNC00LrQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0JjQvdGE0L7RgNC80LDRhtC40Y9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvcGVyc29uc2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0YjQsCDQutC+0LzQsNC90LTQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvcmFkaW9gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KDQsNC00LjQvtC/0LXRgNC10LTQsNGH0LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBocmVmPXtgL3ZhY2FuY3lgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvW3ZhY2FuY3ldYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvdmFjYW5jeWB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCw0LrQsNC90YHQuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ydWxlc2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQv9C+0YHQtdGJ0LXQvdC40Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvbWV0aG9kb2xvZ3lgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JDQstGC0L7RgNGB0LrQsNGPINC60L7Qu9C+0L3QutCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL29yZ2FuaXphdGlvbnNgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvRiNC10YHRgtC+0Y/RidC40LUg0L7RgNCz0LDQvdC40LfQsNGG0LjQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3Jldmlld3NgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC30YvQstGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3NgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsLm1lbnVfbmV3c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXZEcm9wZG93biB0aXRsZT17bG9jYWwubWVudV9hZGRpdGlvbmFsfSBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZGl0aW9uYWxfbWVudS5tYXAobWVudSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnUuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVudS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FkZGl0aW9uYWwvW3BpZF1gfSBhcz17YC9hZGRpdGlvbmFsLyR7bWVudS5waWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW51LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hZGRpdGlvbmFsL1twaWRdYH0gYXM9e2AvYWRkaXRpb25hbC8ke21lbnUucGlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e2xvY2FsLm1lbnVfY29udGFjdHN9IGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2NhbGxiYWNrXCIgY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbENhbGxiYWNrIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2NhbGxUb0NlbnRlcnNcIiBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxDb250YWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jb250YWN0c2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYWwubWVudV9ob3dfdG9fZmluZF91c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9