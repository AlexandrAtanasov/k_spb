webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL05hdmJhci9OYXZCYXJDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk5hdkJhckNvbXBvbmVudCIsInVzZVN0YXRlIiwic2hvdWxkSGlkZUhlYWRlciIsInNldFNob3VsZEhpZGVIZWFkZXIiLCJzaG91bGRTaG93U2hhZG93Iiwic2V0U2hvdWxkU2hvd1NoYWRvdyIsIk1JTklNVU1fU0NST0xMIiwiVElNRU9VVF9ERUxBWSIsInVzZURvY3VtZW50U2Nyb2xsVGhyb3R0bGVkIiwiY2FsbGJhY2tEYXRhIiwicHJldmlvdXNTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwiaXNTY3JvbGxlZERvd24iLCJpc01pbmltdW1TY3JvbGxlZCIsInNldFRpbWVvdXQiLCJzaGFkb3dTdHlsZSIsInN0eWxlIiwic2hhZG93IiwiaGlkZGVuU3R5bGUiLCJoaWRkZW4iLCJub2RlIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYmFzaWNOYXZiYXJOYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzaWNCYXZiYXJOYXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjbGljayIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9uZ01lbnUiLCJoZWFkZXIiLCJmaXhlZFRvcCIsImxvY2FsIiwibWVudV9yZXNvbHZhYmxlIiwicmVzb2x2YWJsZV9tZW51IiwibWFwIiwibWVudSIsImlkIiwicGlkIiwibGluZUhlaWdodCIsIndvcmRCcmVhayIsInRpdGxlIiwiZHJvcGRvd25EaXZpZGVyIiwibWVudV9jb250YWN0cyIsIm1lbnVfaG93X3RvX2ZpbmRfdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUVBOztBQUNBO0FBQ0E7Q0FJ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QkFBUyxZQUFLakMsc0ZBQUssQ0FBQzhCLFVBQVgsY0FBeUI5QixzRkFBSyxDQUFDK0IsU0FBL0IsTUFBM0I7QUFBQSwwQkFDS1IsMkZBQUssQ0FBQ1k7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEtKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFnTkg7O0dBclJlbkQsZTtVQU9aUSxtRTs7O0tBUFlSLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzFmNjcxMDk0MTA0NWQ3M2Q1MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBOYXYsIE5hdkRyb3Bkb3duLCBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbi8vIGltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuXHJcbi8vIGltcG9ydCBDb21wb25lbnRzXHJcbmltcG9ydCB7IE1vZGFsQ2FsbGJhY2sgfSBmcm9tICcuLi8uLi9Nb2RhbF9DYWxsYmFjay9Nb2RhbF9DYWxsYmFjaydcclxuaW1wb3J0IHsgTW9kYWxDb250YWN0cyB9IGZyb20gJy4uLy4uL01vZGFsX0NvbnRhY3RzL01vZGFsX0NvbnRhY3RzJ1xyXG5cclxuaW1wb3J0IHVzZURvY3VtZW50U2Nyb2xsVGhyb3R0bGVkIGZyb20gJy4vdXNlRG9jdW1lbnRTY3JvbGxUaHJvdHRsZWQnXHJcblxyXG4vLyBpbXBvcnQgZGF0YVxyXG5pbXBvcnQge2xvY2FsfSBmcm9tICcuLi8uLi8uLi9kYXRhL2xvY2FsaXphdGlvbl9kYXRhL2NvbXBvbmVudHMvTWFpbi9OYXZiYXIvTmF2YmFyJ1xyXG5pbXBvcnQge3Jlc29sdmFibGVfbWVudX0gZnJvbSAnLi4vLi4vLi4vZGF0YS9wYWdlcy9yZXNvbHZhYmxlL3Jlc29sdmFibGVfbWVudSdcclxuaW1wb3J0IHthZGRpdGlvbmFsX21lbnV9IGZyb20gJy4uLy4uLy4uL2RhdGEvcGFnZXMvYWRkaXRpb25hbC9hZGRpdGlvbmFsX21lbnUnXHJcblxyXG4vLyBpbXBvcnQgc3R5bGVzXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9OYXZCYXJDb21wb25lbnQubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkJhckNvbXBvbmVudCgpIHtcclxuXHJcbiAgICAvLyBzY3JvbGwgbG9naWMgc3RhcnRcclxuICAgIGNvbnN0IFtzaG91bGRIaWRlSGVhZGVyLCBzZXRTaG91bGRIaWRlSGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG91bGRTaG93U2hhZG93LCBzZXRTaG91bGRTaG93U2hhZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IE1JTklNVU1fU0NST0xMID0gODA7XHJcbiAgICBjb25zdCBUSU1FT1VUX0RFTEFZID0gNDAwOyAgXHJcbiAgICB1c2VEb2N1bWVudFNjcm9sbFRocm90dGxlZChjYWxsYmFja0RhdGEgPT4ge1xyXG4gICAgICBjb25zdCB7IHByZXZpb3VzU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wIH0gPSBjYWxsYmFja0RhdGE7XHJcbiAgICAgIGNvbnN0IGlzU2Nyb2xsZWREb3duID0gcHJldmlvdXNTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wO1xyXG4gICAgICBjb25zdCBpc01pbmltdW1TY3JvbGxlZCA9IGN1cnJlbnRTY3JvbGxUb3AgPiBNSU5JTVVNX1NDUk9MTDtcclxuICBcclxuICAgICAgc2V0U2hvdWxkU2hvd1NoYWRvdyhjdXJyZW50U2Nyb2xsVG9wID4gMik7XHJcbiAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3VsZEhpZGVIZWFkZXIoaXNTY3JvbGxlZERvd24gJiYgaXNNaW5pbXVtU2Nyb2xsZWQpO1xyXG4gICAgICB9LCBUSU1FT1VUX0RFTEFZKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2hhZG93U3R5bGUgPSBzaG91bGRTaG93U2hhZG93ID8gc3R5bGUuc2hhZG93IDogJyc7XHJcbiAgICBjb25zdCBoaWRkZW5TdHlsZSA9IHNob3VsZEhpZGVIZWFkZXIgPyBzdHlsZS5oaWRkZW4gOiAnJztcclxuICAgIC8vIHNjcm9sbCBsb2dpYyBlbmRcclxuXHJcbiAgICAvLyBjbG9zZSBkcm9wZG93biBieSBjbGljayBvdXRzaWRlLiBzdGFydFxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIC8vIGluc2lkZSBjbGlja1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG91dHNpZGUgY2xpY2tcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNpY05hdmJhck5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzaWMtbmF2YmFyLW5hdlwiKTtcclxuICAgICAgICBjb25zdCBiYXNpY0JhdmJhck5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFzaWMtbmF2YmFyLW5hdi1idXR0b25cIik7XHJcblxyXG4gICAgICAgIGlmIChiYXNpY05hdmJhck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgICAgICBiYXNpY0JhdmJhck5hdkJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYnJvd3NlciBpbmZvXHJcbiAgICAgICAgLy8gY29uc3QgYnJvd3Nlcj0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIHZhciB1YT0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgdGVtLFxyXG4gICAgICAgIC8vICAgICBNPSB1YS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpIHx8IFtdO1xyXG4gICAgICAgIC8vICAgICBpZigvdHJpZGVudC9pLnRlc3QoTVsxXSkpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGVtPSAgL1xcYnJ2WyA6XSsoXFxkKykvZy5leGVjKHVhKSB8fCBbXTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiAnSUUgJysodGVtWzFdIHx8ICcnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZihNWzFdPT09ICdDaHJvbWUnKXtcclxuICAgICAgICAvLyAgICAgICAgIHRlbT0gdWEubWF0Y2goL1xcYihPUFJ8RWRnZT8pXFwvKFxcZCspLyk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih0ZW0hPSBudWxsKSByZXR1cm4gdGVtLnNsaWNlKDEpLmpvaW4oJyAnKS5yZXBsYWNlKCdPUFInLCAnT3BlcmEnKS5yZXBsYWNlKCdFZGcgJywgJ0VkZ2UgJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgTT0gTVsyXT8gW01bMV0sIE1bMl1dOiBbbmF2aWdhdG9yLmFwcE5hbWUsIG5hdmlnYXRvci5hcHBWZXJzaW9uLCAnLT8nXTtcclxuICAgICAgICAvLyAgICAgaWYoKHRlbT0gdWEubWF0Y2goL3ZlcnNpb25cXC8oXFxkKykvaSkpIT0gbnVsbCkgTS5zcGxpY2UoMSwgMSwgdGVtWzFdKTtcclxuICAgICAgICAvLyAgICAgLy8gcmV0dXJuIE0uam9pbignICcpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gTTtcclxuICAgICAgICAvLyB9KSgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gY2xvc2UgZHJvcGRvd24gYnkgY2xpY2sgb3V0c2lkZS4gZW5kXHJcblxyXG5jb25zdCBsb25nTWVudSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXJcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlT25TZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuaGVhZGVyfSAke3NoYWRvd1N0eWxlfSAke2hpZGRlblN0eWxlfSAke3N0eWxlLmZpeGVkVG9wfWB9XHJcbiAgICAgICAgICAgICAgICBleHBhbmQ9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL21haW4vbmF2YmFyL0xvZ28uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCa0LjQvdC10LfQuNGBXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2YmFyLW5hdi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2xvY2FsLm1lbnVfcmVzb2x2YWJsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2xvbmdNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17aGFuZGxlQ2xpY2tNYWtlRml4ZWRNZW51KGxvbmdNZW51KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTWFrZUxvbmdNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb2x2YWJsZV9tZW51Lm1hcChtZW51ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVudS5pZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc29sdmFibGUvW3BpZF1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9yZXNvbHZhYmxlLyR7bWVudS5waWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbnUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc29sdmFibGUvW3BpZF1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzb2x2YWJsZS8ke21lbnUucGlkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQptC10L3RiyDQuCDQsNC60YbQuNC4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJpY2VgfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NhbGVzYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LrRhtC40Lgg0Lgg0YHQutC40LTQutC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQmNC90YTQvtGA0LzQsNGG0LjRj1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9wZXJzb25zYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRiNCwINC60L7QvNCw0L3QtNCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9yYWRpb2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQoNCw0LTQuNC+0L/QtdGA0LXQtNCw0YfQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhyZWY9e2AvdmFjYW5jeWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9bdmFjYW5jeV1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC92YWNhbmN5YH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LDQutCw0L3RgdC40LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3J1bGVzYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQsNCy0LjQu9CwINC/0L7RgdC10YnQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9tZXRob2RvbG9neWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkNCy0YLQvtGA0YHQutCw0Y8g0LrQvtC70L7QvdC60LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2Avb3JnYW5pemF0aW9uc2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRi9GI0LXRgdGC0L7Rj9GJ0LjQtSDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZS5kcm9wZG93bkRpdmlkZXJ9IGB9ICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvcmV2aWV3c2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LfRi9Cy0YtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3c2B9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYWwubWVudV9uZXdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkRyb3Bkb3duIHRpdGxlPXtsb2NhbC5tZW51X2FkZGl0aW9uYWx9IGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRkaXRpb25hbF9tZW51Lm1hcChtZW51ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVudS5pZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW51LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRkaXRpb25hbC9bcGlkXWB9IGFzPXtgL2FkZGl0aW9uYWwvJHttZW51LnBpZH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbnUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FkZGl0aW9uYWwvW3BpZF1gfSBhcz17YC9hZGRpdGlvbmFsLyR7bWVudS5waWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17bG9jYWwubWVudV9jb250YWN0c30gaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjY2FsbGJhY2tcIiBjbGFzc05hbWU9e2Ake3N0eWxlLmxpbmVIZWlnaHR9ICR7c3R5bGUud29yZEJyZWFrfSBgfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2FsbGJhY2sgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIGNsYXNzTmFtZT17YCR7c3R5bGUuZHJvcGRvd25EaXZpZGVyfSBgfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjY2FsbFRvQ2VudGVyc1wiIGNsYXNzTmFtZT17YCR7c3R5bGUubGluZUhlaWdodH0gJHtzdHlsZS53b3JkQnJlYWt9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbENvbnRhY3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciBjbGFzc05hbWU9e2Ake3N0eWxlLmRyb3Bkb3duRGl2aWRlcn0gYH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NvbnRhY3RzYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPXtgJHtzdHlsZS5saW5lSGVpZ2h0fSAke3N0eWxlLndvcmRCcmVha30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbC5tZW51X2hvd190b19maW5kX3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=