module.exports = {

"[project]/src/app/components/HeroBtn.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroBtn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function HeroBtn({ name, target }) {
    const handleScrollTo = (section)=>{
        // Aqui você pode implementar o scroll suave se quiser
        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        onClick: ()=>handleScrollTo(target),
        className: `btn-hero animated fadeInUp scrollto ${name.includes('book') ? 'ms-4' : undefined}`,
        children: name
    }, void 0, false, {
        fileName: "[project]/src/app/components/HeroBtn.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/sections/Hero.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$glightbox$2f$dist$2f$js$2f$glightbox$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/glightbox/dist/js/glightbox.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeroBtn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/HeroBtn.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Hero() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$glightbox$2f$dist$2f$js$2f$glightbox$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            selector: '.glightbox'
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "d-flex align-items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container position-relative text-center text-lg-start",
            "data-aos": "zoom-in",
            "data-aos-delay": "100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "Welcome to yammy ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Advocacia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sections/Hero.tsx",
                                        lineNumber: 23,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sections/Hero.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Delivering great food for more than 18 years!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sections/Hero.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btns",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeroBtn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: "our menu",
                                        target: "menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sections/Hero.tsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeroBtn$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: "book a table",
                                        target: "book-a-table"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sections/Hero.tsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sections/Hero.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sections/Hero.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-4 d-flex align-items-center justify-content-center position-relative",
                        "data-aos": "zoom-in",
                        "data-aos-delay": "200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.youtube.com/watch?v=F3zw1Gvn4Mk",
                            className: "glightbox play-btn"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sections/Hero.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/sections/Hero.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sections/Hero.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sections/Hero.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sections/Hero.tsx",
        lineNumber: 14,
        columnNumber: 13
    }, this);
}
}}),
"[project]/src/app/data/data.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bookings": (()=>bookings),
    "chefs": (()=>chefs),
    "events": (()=>events),
    "filters": (()=>filters),
    "gallery": (()=>gallery),
    "menu": (()=>menu),
    "navs": (()=>navs),
    "specials": (()=>specials),
    "specialsFilters": (()=>specialsFilters),
    "testimonials": (()=>testimonials),
    "whyUs": (()=>whyUs)
});
const whyUs = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
        consectetur ducimus vero placeat`
    },
    {
        id: 2,
        title: 'Repellat Nihil',
        content: `Dolorem est fugiat occaecati voluptate velit esse. Dicta
    veritatis dolor quod et vel dire leno para dest`
    },
    {
        id: 3,
        title: 'Ad ad velit qui',
        content: `Molestiae officiis omnis illo asperiores. Aut doloribus vitae
    sunt debitis quo vel nam quis`
    }
];
const menu = [
    {
        id: 1,
        name: 'Lobster Bisque',
        price: 5.95,
        preview: '/assets/images/menu/lobster-bisque.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'starters',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 2,
        name: 'Bread Barrel',
        price: 6.95,
        preview: '/assets/images/menu/bread-barrel.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'specialty',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 3,
        name: 'Crab Cake',
        price: 7.95,
        preview: '/assets/images/menu/cake.jpg',
        ingredients: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce',
        category: 'starters',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 4,
        name: 'Caesar Selections',
        price: 8.95,
        preview: '/assets/images/menu/caesar.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'salads',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 5,
        name: 'Tuscan Grilled',
        price: 9.95,
        preview: '/assets/images/menu/tuscan-grilled.jpg',
        ingredients: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
        category: 'specialty',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 6,
        name: 'Mozzarella Stick',
        price: 4.95,
        preview: '/assets/images/menu/mozzarella.jpg',
        ingredients: 'Lorem, deren, trataro, filede, nerada',
        category: 'starters',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 7,
        name: 'Greek Salad',
        price: 9.95,
        preview: '/assets/images/menu/greek-salad.jpg',
        ingredients: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives',
        category: 'salads',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 8,
        name: 'Spinach Salad',
        price: 9.95,
        preview: '/assets/images/menu/spinach-salad.jpg',
        ingredients: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
        category: 'salads',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    },
    {
        id: 9,
        name: 'Lobster Roll',
        price: 12.95,
        preview: '/assets/images/menu/lobster-roll.jpg',
        ingredients: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
        category: 'specialty',
        description: `Phasellus malesuada sapien erat, non lacinia tortor tincidunt at. Donec auctor nisi congue placerat blandit. In hac habitasse platea dictumst. Nunc dictum pellentesque maximus. Vivamus sit amet augue fringilla, aliquam arcu eu, iaculis massa. Duis condimentum nulla et erat dictum, eu consectetur lorem consequat. In hac habitasse platea dictumst. Vivamus scelerisque luctus est vel facilisis. Etiam accumsan mollis orci, viverra gravida ex. Ut aliquet sem et condimentum ultrices.
    Ut ut felis aliquet, fringilla magna eu, ullamcorper lorem. Phasellus porta sollicitudin massa, at porttitor tortor auctor at. Mauris venenatis efficitur fringilla. Fusce at ligula nisi. Suspendisse commodo commodo lectus, non tempus sem luctus vel. Donec at lorem ipsum. Aliquam a venenatis augue. Aenean eget nisi enim. Integer convallis euismod luctus.
    Morbi rhoncus dui elit, vitae facilisis quam pulvinar eu. In maximus, augue vitae ultricies scelerisque, nisl odio convallis felis, a elementum neque nisl in nisi. Aliquam a lorem nec mi interdum.`
    }
];
const filters = [
    {
        id: 1,
        name: 'All',
        category: 'all',
        active: true
    },
    {
        id: 2,
        name: 'Starters',
        category: 'starters',
        active: false
    },
    {
        id: 3,
        name: 'Salads',
        category: 'salads',
        active: false
    },
    {
        id: 4,
        name: 'Specialty',
        category: 'specialty',
        active: false
    }
];
const specials = [
    {
        id: 1,
        image: './assets/images/specials/specials-1.png',
        title: 'Architecto ut aperiam autem id',
        subtitle: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        content: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
        active: true
    },
    {
        id: 2,
        image: './assets/images/specials/specials-2.png',
        title: 'Et blanditiis nemo veritatis excepturi',
        subtitle: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        content: 'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
        active: false
    },
    {
        id: 3,
        image: './assets/images/specials/specials-3.png',
        title: 'Impedit facilis occaecati odio neque aperiam sit',
        subtitle: 'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut',
        content: 'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
        active: false
    },
    {
        id: 4,
        image: './assets/images/specials/specials-4.png',
        title: 'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
        subtitle: 'Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus',
        content: 'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore',
        active: false
    },
    {
        id: 5,
        image: './assets/images/specials/specials-5.png',
        title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
        subtitle: 'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.',
        content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
        active: false
    }
];
const specialsFilters = [
    {
        id: 1,
        name: 'Modi sit est',
        active: true
    },
    {
        id: 2,
        name: 'Unde praesentium sed',
        active: false
    },
    {
        id: 3,
        name: 'Pariatur explicabo vel',
        active: false
    },
    {
        id: 4,
        name: 'Nostrum qui quasi',
        active: false
    },
    {
        id: 5,
        name: 'Iusto ut expedita aut',
        active: false
    }
];
const events = [
    {
        id: 1,
        image: './assets/images/events/event-birthday.jpg',
        title: 'Birthday Parties',
        price: 189,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua.`,
        details: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`
    },
    {
        id: 2,
        image: './assets/images/events/event-private.jpg',
        title: 'Private Parties',
        price: 290,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua.`,
        details: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`
    },
    {
        id: 3,
        image: './assets/images/events/event-custom.jpg',
        title: 'Custom Parties',
        price: 99,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua.`,
        details: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        summary: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`
    }
];
const testimonials = [
    {
        id: 1,
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. 
    Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
        avatar: './assets/images/testimonials/testimonials-1.jpg',
        client: 'Saul Goodman',
        position: 'CEO'
    },
    {
        id: 2,
        content: `Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum 
    eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.`,
        avatar: './assets/images/testimonials/testimonials-2.jpg',
        client: 'Sara Wilsson',
        position: 'Consultant'
    },
    {
        id: 3,
        content: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis 
    minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.`,
        avatar: './assets/images/testimonials/testimonials-3.jpg',
        client: 'Jena Karlis',
        position: 'Store Owner'
    },
    {
        id: 4,
        content: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim 
    velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.`,
        avatar: './assets/images/testimonials/testimonials-4.jpg',
        client: 'Matt Brandon',
        position: 'Freelancer'
    },
    {
        id: 5,
        content: `Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
     culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.`,
        avatar: './assets/images/testimonials/testimonials-5.jpg',
        client: 'John Larson',
        position: 'Entrepreneur'
    }
];
const gallery = [
    {
        id: 1,
        image: '/assets/images/gallery/gallery-1.jpg'
    },
    {
        id: 2,
        image: '/assets/images/gallery/gallery-2.jpg'
    },
    {
        id: 3,
        image: '/assets/images/gallery/gallery-3.jpg'
    },
    {
        id: 4,
        image: '/assets/images/gallery/gallery-4.jpg'
    },
    {
        id: 5,
        image: '/assets/images/gallery/gallery-5.jpg'
    },
    {
        id: 6,
        image: '/assets/images/gallery/gallery-6.jpg'
    },
    {
        id: 7,
        image: '/assets/images/gallery/gallery-7.jpg'
    },
    {
        id: 8,
        image: '/assets/images/gallery/gallery-8.jpg'
    }
];
const chefs = [
    {
        id: 1,
        name: 'Walter White',
        photo: './assets/images/chefs/chefs-1.jpg',
        position: 'Master Chef',
        delay: '100'
    },
    {
        id: 2,
        name: 'Sarah Jhonson',
        photo: './assets/images/chefs/chefs-2.jpg',
        position: 'Patissier',
        delay: '200'
    },
    {
        id: 3,
        name: 'William Anderson',
        photo: './assets/images/chefs/chefs-3.jpg',
        position: 'Cook',
        delay: '300'
    }
];
const navs = [
    {
        id: 1,
        name: 'Home',
        target: 'hero',
        active: true
    },
    {
        id: 2,
        name: 'About',
        target: 'about',
        active: false
    },
    {
        id: 3,
        name: 'Menu',
        target: 'menu',
        active: false
    },
    {
        id: 4,
        name: 'Specials',
        target: 'specials',
        active: false
    },
    {
        id: 5,
        name: 'Events',
        target: 'events',
        active: false
    },
    {
        id: 6,
        name: 'Chefs',
        target: 'chefs',
        active: false
    },
    {
        id: 7,
        name: 'Gallery',
        target: 'gallery',
        active: false
    },
    {
        id: 8,
        name: 'Contact',
        target: 'contact',
        active: false
    }
];
const bookings = [
    {
        id: 1,
        details: {
            name: 'Example Name',
            email: 'info@example.com',
            phone: '12345678',
            date: '2024-2-06',
            time: '11:30',
            people: 3,
            message: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`
        }
    }
];
}}),
"[project]/src/app/components/SectionTitle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SectionTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function SectionTitle({ title, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/components/SectionTitle.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/app/components/SectionTitle.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SectionTitle.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/components/MenuItem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function MenuItem({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col-lg-6 menu-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.preview,
                className: "menu-img",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/src/app/components/MenuItem.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/menu/${item.id}`,
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/MenuItem.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "$",
                            item.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/MenuItem.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MenuItem.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-ingredients",
                children: item.ingredients
            }, void 0, false, {
                fileName: "[project]/src/app/components/MenuItem.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/MenuItem.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/components/PreLoader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Preloader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function Preloader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "preloader"
    }, void 0, false, {
        fileName: "[project]/src/app/components/PreLoader.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/app/sections/Menu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Menu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MenuItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PreLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PreLoader.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Menu() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const getMenuData = ()=>{
        fetch('/api/menu').then((res)=>res.json()).then((menu)=>setData(menu)).catch((e)=>console.log(e.message));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getMenuData();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setItems(data);
    }, [
        data
    ]);
    const handleFilterActive = (id)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filters"].map((filter)=>{
            filter.active = false;
            if (filter.id === id) filter.active = true;
        });
    };
    const handleFilterChange = (id, category)=>{
        handleFilterActive(id);
        if (category === 'all') {
            setItems(data);
        } else {
            setItems(data.filter((item)=>item.category === category));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "menu",
        className: "menu section-bg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            "data-aos": "fade-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Our Menu",
                    subtitle: "Check Our Tasty Menu"
                }, void 0, false, {
                    fileName: "[project]/src/app/sections/Menu.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-12 d-flex justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            id: "menu-filters",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filters"].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: `${filter.active ? 'filter-active' : undefined}`,
                                    onClick: ()=>handleFilterChange(filter.id, filter.category),
                                    children: filter.name
                                }, filter.id, false, {
                                    fileName: "[project]/src/app/sections/Menu.tsx",
                                    lineNumber: 56,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/sections/Menu.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/sections/Menu.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/sections/Menu.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row menu-container",
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: !items ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PreLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/sections/Menu.tsx",
                        lineNumber: 74,
                        columnNumber: 25
                    }, this) : items.length > 0 ? items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            item: item
                        }, item.id, false, {
                            fileName: "[project]/src/app/sections/Menu.tsx",
                            lineNumber: 83,
                            columnNumber: 35
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PreLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/sections/Menu.tsx",
                        lineNumber: 86,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/sections/Menu.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sections/Menu.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sections/Menu.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/components/SpecialsItem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SpecialsItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function SpecialsItem({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `tab-pane ${item.active ? 'active show' : ''}`,
        id: `tab-${item.id.toString()}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-lg-8 details order-2 order-lg-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SpecialsItem.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fst-italic",
                            children: item.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SpecialsItem.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: item.content
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SpecialsItem.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/SpecialsItem.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-lg-4 text-center order-1 order-lg-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.image,
                        alt: "",
                        className: "img-fluid"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SpecialsItem.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SpecialsItem.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SpecialsItem.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/SpecialsItem.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/sections/Specials.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Specials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SpecialsItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SpecialsItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PreLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PreLoader.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Specials() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const getSpecialsData = ()=>{
        fetch('/api/specials').then((res)=>res.json()).then((data)=>setData(data)).catch((e)=>console.log(e.message));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getSpecialsData();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setItems(data);
    }, [
        data
    ]);
    const handleSpecialChange = (id)=>{
        const updatedItems = items.map((item)=>{
            item.active = false;
            if (item.id === id) item.active = true;
            return item;
        });
        setItems(updatedItems);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "specials",
        className: "specials",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            "data-aos": "fade-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Specials",
                    subtitle: "Chec our Specials"
                }, void 0, false, {
                    fileName: "[project]/src/app/sections/Specials.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "nav nav-tabs flex-column",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["specialsFilters"].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: `nav-link ${filter.active ? 'active show' : ''}`,
                                            onClick: ()=>handleSpecialChange(filter.id),
                                            children: filter.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sections/Specials.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this)
                                    }, filter.id, false, {
                                        fileName: "[project]/src/app/sections/Specials.tsx",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/sections/Specials.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sections/Specials.tsx",
                            lineNumber: 52,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-9 mt-4 mt-lg-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tab-content",
                                children: !items ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PreLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/sections/Specials.tsx",
                                    lineNumber: 69,
                                    columnNumber: 29
                                }, this) : items.length > 0 ? items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SpecialsItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        item: item
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/sections/Specials.tsx",
                                        lineNumber: 79,
                                        columnNumber: 33
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PreLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/sections/Specials.tsx",
                                    lineNumber: 81,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/sections/Specials.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sections/Specials.tsx",
                            lineNumber: 66,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sections/Specials.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sections/Specials.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sections/Specials.tsx",
        lineNumber: 47,
        columnNumber: 13
    }, this);
}
}}),
"[project]/src/app/components/EventsItem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventsItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function EventsItem({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row event-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.image,
                    className: "img-fluid",
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/src/app/components/EventsItem.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/EventsItem.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-lg-6 pt-4 pt-lg-0 content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventsItem.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "price",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    item.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/EventsItem.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/EventsItem.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventsItem.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "fst-italic",
                        children: item.content
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventsItem.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: item.details.length > 0 && item.details.map((detail, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-check2-circle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EventsItem.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    detail
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/EventsItem.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventsItem.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: item.summary
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventsItem.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/EventsItem.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/EventsItem.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/sections/Events.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Events)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EventsItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/EventsItem.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Events() {
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const getEventsData = ()=>{
        fetch('/api/events').then((res)=>res.json()).then((data)=>setSlides(data)).catch((e)=>console.log(e.message));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getEventsData();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "events",
        className: "events",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            "data-aos": "fade-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Events",
                    subtitle: "Organize Your Events in our Advocacia"
                }, void 0, false, {
                    fileName: "[project]/src/app/sections/Events.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                            spaceBetween: 0,
                            autoplay: {
                                delay: 5000,
                                disableOnInteraction: false
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                            },
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                            ],
                            loop: true,
                            className: "events-slider swiper-container",
                            children: slides && slides.length > 0 && slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EventsItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        item: slide
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sections/Events.tsx",
                                        lineNumber: 54,
                                        columnNumber: 37
                                    }, this)
                                }, slide.id, false, {
                                    fileName: "[project]/src/app/sections/Events.tsx",
                                    lineNumber: 53,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/sections/Events.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper-pagination"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sections/Events.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sections/Events.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sections/Events.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sections/Events.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/components/Booking.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Booking)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionTitle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Booking() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: ''
    };
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const handleTextChange = (e)=>{
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value,
            validate: ' '
        });
    };
    const handleSubmitBooking = async (e)=>{
        e.preventDefault();
        // Simple form validation
        if (text.name === '' || text.email === '' || text.date === '' || text.time === '') {
            setText({
                ...text,
                validate: 'incomplete'
            });
            return;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "book-a-table",
        className: "book-a-table",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            "data-aos": "fade-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Reservation",
                    subtitle: "Book a Table"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Booking.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmitBooking,
                    className: "booking-form",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 form-group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: text.name,
                                        className: "form-control",
                                        placeholder: "Your Name",
                                        onChange: handleTextChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Booking.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 form-group mt-3 mt-md-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        className: "form-control",
                                        name: "email",
                                        value: text.email,
                                        placeholder: "Your Email",
                                        onChange: handleTextChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Booking.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 form-group mt-3 mt-md-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "form-control",
                                        name: "phone",
                                        value: text.phone,
                                        placeholder: "Your Phone",
                                        onChange: handleTextChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Booking.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 form-group mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: "form-control",
                                        name: "date",
                                        value: text.date,
                                        placeholder: "Date",
                                        onChange: handleTextChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Booking.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 form-group mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        className: "form-control",
                                        name: "time",
                                        value: text.time,
                                        placeholder: "Time",
                                        onChange: handleTextChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Booking.tsx",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 form-group mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "form-control",
                                        name: "people",
                                        value: text.people,
                                        placeholder: "# of people",
                                        onChange: handleTextChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Booking.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Booking.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-control",
                                name: "message",
                                value: text.message,
                                rows: 5,
                                placeholder: "Message",
                                onChange: handleTextChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Booking.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Booking.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                text.validate === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loading",
                                    children: "Send Booking"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this),
                                text.validate === 'incomplete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "error-message",
                                    children: "Please fill in all above details for booking"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, this),
                                text.validate === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sent-message",
                                    children: "Your booking request was sent. We will call back or email to confirm your reservation. Thank you!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, this),
                                text.validate === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "error-message",
                                    children: "Server Error"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Booking.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Booking.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                children: "Book a Table"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Booking.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Booking.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Booking.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Booking.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Booking.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ebccd41d._.js.map