"use strict";
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 8646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Et: () => (/* binding */ WorkGridItem),
/* harmony export */   Pg: () => (/* binding */ GridItemStyle)
/* harmony export */ });
/* unused harmony export GridItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const GridItem = ({ children, href, title, thumbnail })=>{
    return /*#__PURE__*/ _jsx(Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ _jsxs(Link, {
            href: href,
            target: "_blank",
            sx: styles,
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: thumbnail,
                    alt: title,
                    className: "grid-item-thumbnail",
                    placeholder: "blur",
                    loading: "lazy"
                }),
                /*#__PURE__*/ _jsx(Text, {
                    mt: 2,
                    children: title
                }),
                /*#__PURE__*/ _jsx(Text, {
                    fontSize: 14,
                    children: children
                })
            ]
        })
    });
};
const WorkGridItem = ({ children, id, title, thumbnail })=>{
    const variants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };
    const width = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "300px",
        md: "300px"
    });
    const height = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "150px",
        md: "200px"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        whileHover: "hover",
        initial: "initial",
        variants: variants,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            w: "100%",
            textAlign: "center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: `${id}`,
                target: "_blank",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: thumbnail,
                        alt: title,
                        className: "grid-item-thumbnail",
                        style: {
                            width: width,
                            height: height,
                            objectFit: "cover",
                            objectPosition: "center"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        mt: {
                            base: 2,
                            md: 4
                        },
                        mb: {
                            base: 2,
                            md: 0
                        },
                        fontSize: {
                            base: 16,
                            md: 16
                        },
                        fontWeight: 650,
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontSize: {
                            base: 13,
                            md: 14
                        },
                        textAlign: "center",
                        children: children
                    })
                ]
            })
        })
    });
};
const GridItemStyle = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {
        styles: `
      .grid-item-thumbnail {
        border-radius: 30px;
      }
      
      .hover-animation:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
      }
    `
    });


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;