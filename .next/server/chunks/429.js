"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 3429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const styles = {
    global: (props)=>({
            body: {
                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("#e4dcc9", "#202023")(props)
            }
        })
};
const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 19,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 3,
                marginTop: 3,
                marginBottom: 4,
                fontWeight: "bold"
            }
        }
    },
    Link: {
        baseStyle: (props)=>({
                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("teal", "#ff63c3")(props)
            })
    }
};
const fonts = {
    heading: "'M PLUS Rounded 1c'"
};
const color = {
    glassTeal: "#24221b"
};
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    styles,
    components,
    fonts,
    color,
    config
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;