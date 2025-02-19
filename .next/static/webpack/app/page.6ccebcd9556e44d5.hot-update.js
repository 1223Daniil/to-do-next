/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/assets/svg lazy recursive ^\\.\\/.*\\.svg$":
/*!*************************************************************!*\
  !*** ./src/assets/svg/ lazy ^\.\/.*\.svg$ namespace object ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bxs_ghost.svg": [
		"(app-pages-browser)/./src/assets/svg/bxs_ghost.svg",
		"_app-pages-browser_src_assets_svg_bxs_ghost_svg"
	],
	"./bxs_happy-alt.svg": [
		"(app-pages-browser)/./src/assets/svg/bxs_happy-alt.svg",
		"_app-pages-browser_src_assets_svg_bxs_happy-alt_svg"
	],
	"./bxs_smile.svg": [
		"(app-pages-browser)/./src/assets/svg/bxs_smile.svg",
		"_app-pages-browser_src_assets_svg_bxs_smile_svg"
	],
	"./bxs_upside-down.svg": [
		"(app-pages-browser)/./src/assets/svg/bxs_upside-down.svg",
		"_app-pages-browser_src_assets_svg_bxs_upside-down_svg"
	],
	"./check.svg": [
		"(app-pages-browser)/./src/assets/svg/check.svg",
		"_app-pages-browser_src_assets_svg_check_svg"
	],
	"./cross.svg": [
		"(app-pages-browser)/./src/assets/svg/cross.svg",
		"_app-pages-browser_src_assets_svg_cross_svg"
	],
	"./edit.svg": [
		"(app-pages-browser)/./src/assets/svg/edit.svg",
		"_app-pages-browser_src_assets_svg_edit_svg"
	],
	"./loader.svg": [
		"(app-pages-browser)/./src/assets/svg/loader.svg"
	],
	"./search.svg": [
		"(app-pages-browser)/./src/assets/svg/search.svg",
		"_app-pages-browser_src_assets_svg_search_svg"
	],
	"./trash.svg": [
		"(app-pages-browser)/./src/assets/svg/trash.svg",
		"_app-pages-browser_src_assets_svg_trash_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(app-pages-browser)/./src/assets/svg lazy recursive ^\\.\\/.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(app-pages-browser)/./src/assets/svg/loader.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/loader.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _defs, _g;\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n\nvar SvgLoader = function SvgLoader(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 80,\n    height: 80,\n    viewBox: \"0 0 38 38\"\n  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"defs\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"linearGradient\", {\n    id: \"loader_svg__a\",\n    x1: \"8.042%\",\n    x2: \"65.682%\",\n    y1: \"0%\",\n    y2: \"23.865%\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"stop\", {\n    offset: \"0%\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"stop\", {\n    offset: \"63.146%\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"stop\", {\n    offset: \"100%\"\n  })))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"g\", {\n    fill: \"none\",\n    transform: \"translate(1 1)\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    stroke: \"url(#loader_svg__a)\",\n    d: \"M36 18c0-9.94-8.06-18-18-18\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"animateTransform\", {\n    attributeName: \"transform\",\n    dur: \"0.9s\",\n    from: \"0 18 18\",\n    repeatCount: \"indefinite\",\n    to: \"360 18 18\",\n    type: \"rotate\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"circle\", {\n    cx: 36,\n    cy: 18,\n    r: 1,\n    fill: \"currentColor\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"animateTransform\", {\n    attributeName: \"transform\",\n    dur: \"0.9s\",\n    from: \"0 18 18\",\n    repeatCount: \"indefinite\",\n    to: \"360 18 18\",\n    type: \"rotate\"\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLoader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hc3NldHMvc3ZnL2xvYWRlci5zdmciLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxzQkFBc0Isd0VBQXdFLGdCQUFnQixzQkFBc0IsT0FBTyxzQkFBc0Isb0JBQW9CLGdEQUFnRCxXQUFXO0FBQ2pOO0FBQy9CO0FBQ0Esc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseUNBQXlDLGdEQUFtQiw0QkFBNEIsZ0RBQW1CO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CO0FBQ3JDO0FBQ0EsR0FBRyxnQkFBZ0IsZ0RBQW1CO0FBQ3RDO0FBQ0EsR0FBRyxnQkFBZ0IsZ0RBQW1CO0FBQ3RDO0FBQ0EsR0FBRywrQkFBK0IsZ0RBQW1CO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaUJBQWlCLGdEQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZSxnREFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxUZW1pa1xcRGVza3RvcFxcdG8tZG8tbmV4dFxcc3JjXFxhc3NldHNcXHN2Z1xcbG9hZGVyLnN2ZyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2RlZnMsIF9nO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IHJldHVybiBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uIChuKSB7IGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7IHZhciB0ID0gYXJndW1lbnRzW2VdOyBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pOyB9IHJldHVybiBuOyB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBTdmdMb2FkZXIgPSBmdW5jdGlvbiBTdmdMb2FkZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiA4MCxcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHZpZXdCb3g6IFwiMCAwIDM4IDM4XCJcbiAgfSwgcHJvcHMpLCBfZGVmcyB8fCAoX2RlZnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lYXJHcmFkaWVudFwiLCB7XG4gICAgaWQ6IFwibG9hZGVyX3N2Z19fYVwiLFxuICAgIHgxOiBcIjguMDQyJVwiLFxuICAgIHgyOiBcIjY1LjY4MiVcIixcbiAgICB5MTogXCIwJVwiLFxuICAgIHkyOiBcIjIzLjg2NSVcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogXCIwJVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgIG9mZnNldDogXCI2My4xNDYlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7XG4gICAgb2Zmc2V0OiBcIjEwMCVcIlxuICB9KSkpKSwgX2cgfHwgKF9nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEgMSlcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIHN0cm9rZTogXCJ1cmwoI2xvYWRlcl9zdmdfX2EpXCIsXG4gICAgZDogXCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgZHVyOiBcIjAuOXNcIixcbiAgICBmcm9tOiBcIjAgMTggMThcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCIsXG4gICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgdHlwZTogXCJyb3RhdGVcIlxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogMzYsXG4gICAgY3k6IDE4LFxuICAgIHI6IDEsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgZHVyOiBcIjAuOXNcIixcbiAgICBmcm9tOiBcIjAgMTggMThcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCIsXG4gICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgdHlwZTogXCJyb3RhdGVcIlxuICB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ZnTG9hZGVyOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/assets/svg/loader.svg\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/UI/Loader.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Loader.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_svg_loader_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/svg/loader.svg */ \"(app-pages-browser)/./src/assets/svg/loader.svg\");\n\n\n\nconst Loader = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-full w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_svg_loader_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"text-gray-300 w-20 h-20\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Temik\\\\Desktop\\\\to-do-next\\\\src\\\\components\\\\UI\\\\Loader.tsx\",\n            lineNumber: 6,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Temik\\\\Desktop\\\\to-do-next\\\\src\\\\components\\\\UI\\\\Loader.tsx\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n_c = Loader;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VJL0xvYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ3VCO0FBRXpELE1BQU1FLFNBQWEsa0JBQ2pCLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNmLDRFQUFDSCw4REFBa0JBO1lBQUNHLFdBQVU7Ozs7Ozs7Ozs7O0tBRjFCRjtBQU1OLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFRlbWlrXFxEZXNrdG9wXFx0by1kby1uZXh0XFxzcmNcXGNvbXBvbmVudHNcXFVJXFxMb2FkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRpbmdTcGlubmVySWNvbiBmcm9tICdAL2Fzc2V0cy9zdmcvbG9hZGVyLnN2Zyc7XHJcblxyXG5jb25zdCBMb2FkZXI6IEZDID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctZnVsbFwiPlxyXG4gIDxMb2FkaW5nU3Bpbm5lckljb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB3LTIwIGgtMjBcIiAvPlxyXG48L2Rpdj5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvYWRpbmdTcGlubmVySWNvbiIsIkxvYWRlciIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UI/Loader.tsx\n"));

/***/ })

});