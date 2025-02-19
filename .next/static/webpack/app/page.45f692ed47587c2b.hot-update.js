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
		"(app-pages-browser)/./src/assets/svg/loader.svg",
		"_app-pages-browser_src_assets_svg_loader_svg"
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
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(app-pages-browser)/./src/assets/svg lazy recursive ^\\.\\/.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(app-pages-browser)/./src/components/UI/Icon.tsx":
/*!************************************!*\
  !*** ./src/components/UI/Icon.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UI/Loader */ \"(app-pages-browser)/./src/components/UI/Loader.tsx\");\n/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst lazySvgCache = {};\nfunction getLazySvg(name) {\n    if (!lazySvgCache[name]) {\n        lazySvgCache[name] = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__(\"(app-pages-browser)/./src/assets/svg lazy recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\".concat(name, \".svg\")));\n    }\n    return lazySvgCache[name];\n}\nconst SvgIcon = (param)=>{\n    let { name, className } = param;\n    const LazySvg = getLazySvg(name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_UI_Loader__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Temik\\\\Desktop\\\\to-do-next\\\\src\\\\components\\\\UI\\\\Icon.tsx\",\n            lineNumber: 22,\n            columnNumber: 25\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_UI_Loader__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Temik\\\\Desktop\\\\to-do-next\\\\src\\\\components\\\\UI\\\\Icon.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Temik\\\\Desktop\\\\to-do-next\\\\src\\\\components\\\\UI\\\\Icon.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SvgIcon;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_c1 = react__WEBPACK_IMPORTED_MODULE_1___default().memo(SvgIcon));\nvar _c, _c1;\n$RefreshReg$(_c, \"SvgIcon\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VJL0ljb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDQTtBQU81QyxNQUFNRyxlQUFvRixDQUFDO0FBRTNGLFNBQVNDLFdBQVdDLElBQVk7SUFDOUIsSUFBSSxDQUFDRixZQUFZLENBQUNFLEtBQUssRUFBRTtRQUN2QkYsWUFBWSxDQUFDRSxLQUFLLGlCQUFHTCxpREFBVSxDQUFDLElBQU0sNEZBQU8sS0FBcUIsT0FBTEssTUFBSztJQUNwRTtJQUNBLE9BQU9GLFlBQVksQ0FBQ0UsS0FBSztBQUMzQjtBQUVBLE1BQU1FLFVBQXFCO1FBQUMsRUFBRUYsSUFBSSxFQUFFRyxTQUFTLEVBQUU7SUFDN0MsTUFBTUMsVUFBVUwsV0FBV0M7SUFFM0IscUJBQ0UsOERBQUNKLDJDQUFRQTtRQUFDUyx3QkFBVSw4REFBQ1IsOERBQU1BOzs7OztrQkFFekIsNEVBQUNBLDhEQUFNQTs7Ozs7Ozs7OztBQUdiO0tBVE1LO0FBV04sb0ZBQWVQLGlEQUFVLENBQUNPLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGVtaWtcXERlc2t0b3BcXHRvLWRvLW5leHRcXHNyY1xcY29tcG9uZW50c1xcVUlcXEljb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL1VJL0xvYWRlcic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBsYXp5U3ZnQ2FjaGU6IFJlY29yZDxzdHJpbmcsIFJlYWN0LkxhenlFeG90aWNDb21wb25lbnQ8UmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+Pj4gPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdldExhenlTdmcobmFtZTogc3RyaW5nKSB7XHJcbiAgaWYgKCFsYXp5U3ZnQ2FjaGVbbmFtZV0pIHtcclxuICAgIGxhenlTdmdDYWNoZVtuYW1lXSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KGBAL2Fzc2V0cy9zdmcvJHtuYW1lfS5zdmdgKSk7XHJcbiAgfVxyXG4gIHJldHVybiBsYXp5U3ZnQ2FjaGVbbmFtZV07XHJcbn1cclxuXHJcbmNvbnN0IFN2Z0ljb246IEZDPFByb3BzPiA9ICh7IG5hbWUsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgTGF6eVN2ZyA9IGdldExhenlTdmcobmFtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxMb2FkZXIgLz59PlxyXG4gICAgICB7LyogPExhenlTdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+ICovfVxyXG4gICAgICA8TG9hZGVyIC8+XHJcbiAgICA8L1N1c3BlbnNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFN2Z0ljb24pO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsIkxvYWRlciIsImxhenlTdmdDYWNoZSIsImdldExhenlTdmciLCJuYW1lIiwibGF6eSIsIlN2Z0ljb24iLCJjbGFzc05hbWUiLCJMYXp5U3ZnIiwiZmFsbGJhY2siLCJtZW1vIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UI/Icon.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/UI/Loader.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Loader.tsx ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});