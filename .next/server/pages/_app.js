/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ \"react-feather\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GoTop = ({ scrollStepInPx , delayInMs  })=>{\n    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        document.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 170) {\n                setThePosition(true);\n            } else {\n                setThePosition(false);\n            }\n        });\n    }, []);\n    const onScrollStep = ()=>{\n        if (window.pageYOffset === 0) {\n            clearInterval(timeoutRef.current);\n        }\n        window.scroll(0, window.pageYOffset - scrollStepInPx);\n    };\n    const scrollToTop = ()=>{\n        timeoutRef.current = setInterval(onScrollStep, delayInMs);\n    };\n    const renderGoTopIcon = ()=>{\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: `go-top ${thePosition ? 'active' : ''}`,\n            onClick: scrollToTop,\n            __source: {\n                fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/GoTop.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowUp, {\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/GoTop.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                },\n                __self: undefined\n            })\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        __source: {\n            fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/GoTop.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: renderGoTopIcon()\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUVyQyxLQUFLLENBQUNFLEtBQUssSUFBSSxDQUFDQyxDQUFBQSxjQUFjLEdBQUVDLFNBQVMsR0FBQyxHQUFLLENBQUM7SUFFNUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsSUFBSU4scURBQWMsQ0FBQyxLQUFLO0lBQzFELEtBQUssQ0FBQ1EsVUFBVSxHQUFHUixtREFBWSxDQUFDLElBQUk7SUFFcENBLHNEQUFlLEtBQU8sQ0FBQztRQUNuQlcsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFRLGFBQVEsQ0FBQztZQUN2QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUN2QlIsY0FBYyxDQUFDLElBQUk7WUFDdkIsQ0FBQyxNQUFNLENBQUM7Z0JBQ0pBLGNBQWMsQ0FBQyxLQUFLO1lBQ3hCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ1MsWUFBWSxPQUFTLENBQUM7UUFDeEIsRUFBRSxFQUFFRixNQUFNLENBQUNHLFdBQVcsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUMxQkMsYUFBYSxDQUFDVCxVQUFVLENBQUNVLE9BQU87UUFDcEMsQ0FBQztRQUNETCxNQUFNLENBQUNNLE1BQU0sQ0FBQyxDQUFDLEVBQUVOLE1BQU0sQ0FBQ0csV0FBVyxHQUFHYixjQUFjO0lBQ3hELENBQUM7SUFFRCxLQUFLLENBQUNpQixXQUFXLE9BQVMsQ0FBQztRQUN2QlosVUFBVSxDQUFDVSxPQUFPLEdBQUdHLFdBQVcsQ0FBQ04sWUFBWSxFQUFFWCxTQUFTO0lBQzVELENBQUM7SUFFRCxLQUFLLENBQUNrQixlQUFlLE9BQVMsQ0FBQztRQUMzQixNQUFNLHNFQUNEQyxDQUFHO1lBQUNDLFNBQVMsR0FBRyxPQUFPLEVBQUVuQixXQUFXLEdBQUcsQ0FBUSxVQUFHLENBQUU7WUFBSW9CLE9BQU8sRUFBRUwsV0FBVzs7Ozs7OzsyRkFDeEVuQixrREFBWTs7Ozs7Ozs7O0lBR3pCLENBQUM7SUFFRCxNQUFNLHNFQUNERCx1REFBYzs7Ozs7OztrQkFDVnNCLGVBQWU7O0FBRzVCLENBQUM7QUFFRCxpRUFBZXBCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0cC8uL2NvbXBvbmVudHMvX0FwcC9Hb1RvcC5qcz83ZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuXG5jb25zdCBHb1RvcCA9ICh7c2Nyb2xsU3RlcEluUHgsIGRlbGF5SW5Nc30pID0+IHtcblxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFN0ZXBJblB4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBkZWxheUluTXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICA8SWNvbi5BcnJvd1VwIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtyZW5kZXJHb1RvcEljb24oKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvVG9wOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkljb24iLCJHb1RvcCIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIiwidGhlUG9zaXRpb24iLCJzZXRUaGVQb3NpdGlvbiIsInVzZVN0YXRlIiwidGltZW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJvblNjcm9sbFN0ZXAiLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsInJlbmRlckdvVG9wSWNvbiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJBcnJvd1VwIiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_App/GoTop.js\n");

/***/ }),

/***/ "./components/_App/Layout.tsx":
/*!************************************!*\
  !*** ./components/_App/Layout.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ \"./components/_App/GoTop.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ \"./components/_App/Sidebar.js\");\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Layout.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 4\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        charSet: \"utf-8\",\n                        __source: {\n                            fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Layout.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 5\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\",\n                        __source: {\n                            fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Layout.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 5\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Layout.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 5\n                        },\n                        __self: undefined,\n                        children: \"StartP - React Next IT Startup & Digital Agency Template\"\n                    })\n                ]\n            }),\n            children,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GoTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                scrollStepInPx: \"100\",\n                delayInMs: \"10.50\",\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Layout.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 4\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Layout.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 4\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0c7QUFDRDtBQUNJO0FBRS9CLEtBQUssQ0FBQ0ksTUFBTSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFNLENBQUMsR0FBSyxDQUFDO0lBQ3RDLE1BQU07O2tGQUVISixrREFBSTs7Ozs7Ozs7eUZBQ0hLLENBQUk7d0JBQUNDLE9BQU8sRUFBQyxDQUFPOzs7Ozs7Ozt5RkFDcEJELENBQUk7d0JBQUNFLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBcUM7Ozs7Ozs7O3lGQUNsRUMsQ0FBSzs7Ozs7OztrQ0FBQyxDQUF3RDs7OztZQUcvREwsUUFBUTtpRkFFUkgsOENBQUs7Z0JBQUNTLGNBQWMsRUFBQyxDQUFLO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7aUZBRTVDVCxnREFBTzs7Ozs7Ozs7OztBQUdYLENBQUM7QUFFRCxpRUFBZUMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0cC8uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQudHN4P2U5NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBHb1RvcCBmcm9tIFwiLi9Hb1RvcFwiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyXCJcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXHRcdFx0XHQ8dGl0bGU+U3RhcnRQIC0gUmVhY3QgTmV4dCBJVCBTdGFydHVwICYgRGlnaXRhbCBBZ2VuY3kgVGVtcGxhdGU8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHR7Y2hpbGRyZW59XG5cblx0XHRcdDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cblxuXHRcdFx0PFNpZGViYXIgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJHb1RvcCIsIlNpZGViYXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1ldGEiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_App/Layout.tsx\n");

/***/ }),

/***/ "./components/_App/Sidebar.js":
/*!************************************!*\
  !*** ./components/_App/Sidebar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Sidebar = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"lang-didebar\",\n        __source: {\n            fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Sidebar.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: \"/\",\n                title: \"Default Demo\",\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Sidebar.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"LTR\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: \"/ar\",\n                title: \"RTL Demo\",\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/components/_App/Sidebar.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"RTL\"\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvU2lkZWJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFFekIsS0FBSyxDQUFDQyxPQUFPLE9BQVMsQ0FBQztJQUNuQixNQUFNLHVFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjOzs7Ozs7OztpRkFDeEJDLENBQUM7Z0JBQUNDLElBQUksRUFBQyxDQUFHO2dCQUFDQyxLQUFLLEVBQUMsQ0FBYzs7Ozs7OzswQkFBQyxDQUFHOztpRkFDbkNGLENBQUM7Z0JBQUNDLElBQUksRUFBQyxDQUFLO2dCQUFDQyxLQUFLLEVBQUMsQ0FBVTs7Ozs7OzswQkFBQyxDQUFHOzs7O0FBRzlDLENBQUM7QUFFRCxpRUFBZUwsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRwLy4vY29tcG9uZW50cy9fQXBwL1NpZGViYXIuanM/MDVmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1kaWRlYmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIHRpdGxlPVwiRGVmYXVsdCBEZW1vXCI+TFRSPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9hclwiIHRpdGxlPVwiUlRMIERlbW9cIj5SVEw8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2lkZWJhciIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_App/Sidebar.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/css/boxicons.min.css */ \"./public/css/boxicons.min.css\");\n/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/css/flaticon.css */ \"./public/css/flaticon.css\");\n/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/css/slick.css */ \"./public/css/slick.css\");\n/* harmony import */ var _public_css_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_rtl_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/public/css/rtl.css */ \"./public/css/rtl.css\");\n/* harmony import */ var _public_css_rtl_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_rtl_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/_App/Layout */ \"./components/_App/Layout.tsx\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toast-notifications */ \"react-toast-notifications\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n// Multicolor if you want this color comment out \n// import '@/public/css/colors/brink-pink-style.css'\n// import '@/public/css/colors/pink-style.css'\n// import '@/public/css/colors/purple-style.css'  \n\n\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_11__.ToastProvider, {\n        placement: \"bottom-left\",\n        autoDismissTimeout: 6000,\n        autoDismiss: true,\n        __source: {\n            fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/pages/_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/pages/_app.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/macbookpro/Aadil_Projects/Kenad/KenadTrading/pages/_app.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ25CO0FBQ2tCO0FBQ0o7QUFDSDtBQUMyQjtBQUMzQjtBQUNLO0FBQ1A7QUFFN0IsRUFBaUQ7QUFDakQsRUFBb0Q7QUFDcEQsRUFBOEM7QUFDOUMsRUFBa0Q7QUFFTDtBQUVZO0FBRTFDLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVUsQ0FBQyxFQUFFLENBQUM7SUFFNUQsTUFBTSx1RUFDREgscUVBQWE7UUFDVkksU0FBUyxFQUFHLENBQWE7UUFDekJDLGtCQUFrQixFQUFFLElBQUk7UUFDeEJDLFdBQVc7Ozs7Ozs7O2lGQUdOUCwrREFBTTs7Ozs7Ozs7aUZBQ05HLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0cC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvYm94aWNvbnMubWluLmNzcydcbmltcG9ydCAnQC9wdWJsaWMvY3NzL2ZsYXRpY29uLmNzcydcbmltcG9ydCBcIkAvcHVibGljL2Nzcy9zbGljay5jc3NcIlxuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0ICdAL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MnXG5pbXBvcnQgJ0AvcHVibGljL2Nzcy9ydGwuY3NzJ1xuXG4vLyBNdWx0aWNvbG9yIGlmIHlvdSB3YW50IHRoaXMgY29sb3IgY29tbWVudCBvdXQgXG4vLyBpbXBvcnQgJ0AvcHVibGljL2Nzcy9jb2xvcnMvYnJpbmstcGluay1zdHlsZS5jc3MnXG4vLyBpbXBvcnQgJ0AvcHVibGljL2Nzcy9jb2xvcnMvcGluay1zdHlsZS5jc3MnXG4vLyBpbXBvcnQgJ0AvcHVibGljL2Nzcy9jb2xvcnMvcHVycGxlLXN0eWxlLmNzcycgIFxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9fQXBwL0xheW91dCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTpBcHBQcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRvYXN0UHJvdmlkZXIgXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBcImJvdHRvbS1sZWZ0XCJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17NjAwMH1cbiAgICAgICAgICAgIGF1dG9EaXNtaXNzXG4gICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxMYXlvdXQgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICAgICAgPC9Ub2FzdFByb3ZpZGVyPlxuICAgIClcbn1cblxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlRvYXN0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwbGFjZW1lbnQiLCJhdXRvRGlzbWlzc1RpbWVvdXQiLCJhdXRvRGlzbWlzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/rtl.css":
/*!****************************!*\
  !*** ./public/css/rtl.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/slick.css":
/*!******************************!*\
  !*** ./public/css/slick.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-feather");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toast-notifications");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();