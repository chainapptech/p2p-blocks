(window.webpackJsonp_table_of_contents = window.webpackJsonp_table_of_contents || [])
.push([
        [1], {
            8: function(e, t, o) {}
        }
    ]),
    function(e) {
        function t(t) {
            for (var l, n, r = t[0], i = t[1], b = t[2], d = 0, u = []; d < r.length; d++) n = r[d], Object.prototype.hasOwnProperty.call(a, n) && a[n] && u.push(a[n][0]), a[n] = 0;
            for (l in i) Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l]);
            for (s && s(t); u.length;) u.shift()();
            return c.push.apply(c, b || []), o()
        }

        function o() {
            for (var e, t = 0; t < c.length; t++) {
                for (var o = c[t], l = !0, r = 1; r < o.length; r++) {
                    var i = o[r];
                    0 !== a[i] && (l = !1)
                }
                l && (c.splice(t--, 1), e = n(n.s = o[0]))
            }
            return e
        }
        var l = {},
            a = {
                0: 0
            },
            c = [];

        function n(t) {
            if (l[t]) return l[t].exports;
            var o = l[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        n.m = e, n.c = l, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var l in e) n.d(o, l, function(t) {
                    return e[t]
                }.bind(null, l));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "";
        var r = window.webpackJsonp_table_of_contents = window.webpackJsonp_table_of_contents || [],
            i = r.push.bind(r);
        r.push = t, r = r.slice();
        for (var b = 0; b < r.length; b++) t(r[b]);
        var s = i;
        c.push([9, 1]), o()
    }([function(e, t) {
        e.exports = window.wp.element
    }, function(e, t) {
        e.exports = window.wp.i18n
    }, function(e, t) {
        e.exports = window.wp.components
    }, function(e, t) {
        e.exports = window.wp.blockEditor
    }, function(e, t) {
        e.exports = window.wp.primitives
    }, function(e, t, o) {
        var l;
        ! function() {
            "use strict";
            var o = {}.hasOwnProperty;

            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var l = arguments[t];
                    if (l) {
                        var c = typeof l;
                        if ("string" === c || "number" === c) e.push(l);
                        else if (Array.isArray(l)) {
                            if (l.length) {
                                var n = a.apply(null, l);
                                n && e.push(n)
                            }
                        } else if ("object" === c)
                            if (l.toString === Object.prototype.toString)
                                for (var r in l) o.call(l, r) && l[r] && e.push(r);
                            else e.push(l.toString())
                    }
                }
                return e.join(" ")
            }
            e.exports ? (a.default = a, e.exports = a) : void 0 === (l = function() {
                return a
            }.apply(t, [])) || (e.exports = l)
        }()
    }, function(e, t) {
        e.exports = window.wp.blocks
    }, , , function(e, t, o) {
        "use strict";
        o.r(t);
        var l = o(6),
            a = o(0),
            c = o(4),
            n = Object(a.createElement)(c.SVG, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, Object(a.createElement)(c.Path, {
                d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"
            })),
            r = (o(8), o(1)),
            i = {
                title: {
                    type: "sring",
                    default: Object(r.__)("Summary", "ib-block-toc")
                },
                headerFontSize: {
                    type: "integer",
                    default: ""
                },
                headerBgColor: {
                    type: "string",
                    default: ""
                },
                headerTextColor: {
                    type: "string",
                    default: ""
                },
                separatorHeight: {
                    type: "integer",
                    default: 2
                },
                separatorColor: {
                    type: "string",
                    default: ""
                },
                listStyle: {
                    type: "string",
                    default: "numbers"
                },
                toctext: {
                    type: "string",
                    default: Object(r.__)("read more", "ib-block-toc")
                },
                hierarchicalView: {
                    type: "boolean",
                    default: !0
                },
                bgColor: {
                    type: "string",
                    default: ""
                },
                textColor: {
                    type: "string",
                    default: ""
                },
                linkColor: {
                    type: "string",
                    default: "#000"
                },
                fontSize: {
                    type: "integer",
                    default: ""
                },
                listSpacing: {
                    type: "integer",
                    default: ""
                },
                borderWidth: {
                    type: "integer",
                    default: ""
                },
                borderColor: {
                    type: "string",
                    default: ""
                },
                borderRadius: {
                    type: "integer",
                    default: ""
                },
                anchorsByTags: {
                    type: "array",
                    default: ["h2", "h3", "h4", "h5", "h6"]
                },
                includeContainer: {
                    type: "string",
                    default: ".entry,.post,.page,article"
                },
                excludeContainer: {
                    type: "string",
                    default: ".agencies-tables-container,.wp-block-summary"
                },
                collapsable: {
                    type: "boolean",
                    default: !0
                },
                collapsableIcons: {
                    type: "string",
                    default: "standard"
                },
                extraOffset: {
                    type: "integer",
                    default: ""
                }
            },
            b = o(5),
            s = o.n(b),
            d = o(3),
            u = o(2),
            p = Object(a.createElement)(c.SVG, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, Object(a.createElement)(c.Path, {
                d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
            })),
            h = Object(a.createElement)(c.SVG, {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, Object(a.createElement)(c.Path, {
                d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
            }));
        const {
            BaseControl: m,
            Button: O,
            ColorPicker: g,
            Dropdown: j,
            Dashicon: f,
            Tooltip: C
        } = wp.components, {
            Fragment: v
        } = wp.element, {
            __: __
        } = wp.i18n;
        var _ = e => {
                const t = e.value;
                return Object(a.createElement)(m, {
                    label: e.label,
                    help: e.help,
                    className: "ib-block-control__color-picker"
                }, Object(a.createElement)(j, {
                    className: "ib-block-control__color-picker-dropdown",
                    contentClassName: "ib-block-control__color-picker-inner",
                    renderToggle: ({
                        isOpen: o,
                        onToggle: l
                    }) => Object(a.createElement)(v, null, t && Object(a.createElement)(C, {
                        text: __("Reset", "pp-gutenberg")
                    }, Object(a.createElement)(O, {
                        onClick: () => e.onChange(void 0),
                        "aria-label": __("Reset", "pp-gutenberg"),
                        className: "ib-block-control__color-picker-reset"
                    }, Object(a.createElement)(f, {
                        icon: "image-rotate"
                    }))), Object(a.createElement)(O, {
                        "aria-expanded": o,
                        onClick: l,
                        "aria-label": e.label,
                        className: "ib-block-control__color-picker-value"
                    }, Object(a.createElement)("span", {
                        style: {
                            backgroundColor: t
                        }
                    }))),
                    renderContent: () => Object(a.createElement)(g, {
                        color: t,
                        onChangeComplete: t => e.onChange((e => {
                            if ("object" == typeof e) {
                                const t = "undefined" === e.a ? 1 : e.a;
                                if (void 0 !== e.h) return `hsl(${e.h}%, ${e.s}%, ${e.l}%, ${t})`;
                                if (void 0 !== e.r) return `rgba(${e.r}, ${e.g}, ${e.b}, ${t})`
                            }
                            return e
                        })(t[t.source])),
                        disableAlpha: e.disableAlpha
                    })
                }))
            },
            y = e => {
                const {
                    attributes: t,
                    setAttributes: o
                } = e;
                return Object(a.createElement)(d.InspectorControls, null, Object(a.createElement)(u.PanelBody, {
                    title: Object(r.__)("Header", "ib-block-toc"),
                    initialOpen: !0
                }, Object(a.createElement)(u.TextControl, {
                    label: Object(r.__)("Title", "ib-block-toc"),
                    value: t.title,
                    onChange: e => o({
                        title: e
                    })
                }), Object(a.createElement)(_, {
                    label: Object(r.__)("Background Color", "ib-block-toc"),
                    value: t.headerBgColor,
                    onChange: e => o({
                        headerBgColor: e
                    })
                }), Object(a.createElement)(_, {
                    label: Object(r.__)("Text Color", "ib-block-toc"),
                    value: t.headerTextColor,
                    onChange: e => o({
                        headerTextColor: e
                    })
                }), Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("Text Size", "ib-block-toc"),
                    value: t.headerFontSize,
                    min: "1",
                    max: "100",
                    allowReset: !0,
                    onChange: e => o({
                        headerFontSize: e
                    })
                })), Object(a.createElement)(u.PanelBody, {
                    title: Object(r.__)("Separator", "ib-block-toc"),
                    initialOpen: !1
                }, Object(a.createElement)(_, {
                    label: Object(r.__)("Separator Color", "ib-block-toc"),
                    value: t.separatorColor,
                    onChange: e => o({
                        separatorColor: e
                    })
                }), Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("Separator Thickness", "ib-block-toc"),
                    value: t.separatorHeight,
                    min: "0",
                    max: "20",
                    initialPosition: "2",
                    allowReset: !0,
                    onChange: e => {
                        o(void 0 === e ? {
                            separatorHeight: 2
                        } : {
                            separatorHeight: e
                        })
                    }
                })), Object(a.createElement)(u.PanelBody, {
                    title: Object(r.__)("Body", "ib-block-toc"),
                    initialOpen: !1
                }, Object(a.createElement)(u.SelectControl, {
                    label: Object(r.__)("List Style", "ib-block-toc"),
                    value: t.listStyle,
                    onChange: e => o({
                        listStyle: e
                    }),
                    options: [{
                        value: "numbers",
                        label: Object(r.__)("Numbers", "ib-block-toc")
                    }, {
                        value: "bullets",
                        label: Object(r.__)("Bullets", "ib-block-toc")
                    }]
                }), Object(a.createElement)(u.ToggleControl, {
                    label: Object(r.__)("Hierarchical View", "ib-block-toc"),
                    checked: t.hierarchicalView,
                    onChange: e => o({
                        hierarchicalView: e
                    })
                }), Object(a.createElement)(_, {
                    label: Object(r.__)("Background Color", "ib-block-toc"),
                    value: t.bgColor,
                    onChange: e => o({
                        bgColor: e
                    })
                }), Object(a.createElement)(_, {
                    label: Object(r.__)("Text Color", "ib-block-toc"),
                    value: t.textColor,
                    onChange: e => o({
                        textColor: e
                    })
                }), Object(a.createElement)(_, {
                    label: Object(r.__)("Link Color", "ib-block-toc"),
                    value: t.linkColor,
                    onChange: e => o({
                        linkColor: e
                    })
                }), Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("Text Size", "ib-block-toc"),
                    value: t.fontSize,
                    min: "1",
                    max: "100",
                    allowReset: !0,
                    onChange: e => o({
                        fontSize: e
                    })
                }), Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("List Spacing", "ib-block-toc"),
                    value: t.listSpacing,
                    min: "1",
                    max: "100",
                    allowReset: !0,
                    onChange: e => o({
                        listSpacing: e
                    })
                }), Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("Border Width", "ib-block-toc"),
                    value: t.borderWidth,
                    min: "0",
                    max: "10",
                    initialPosition: "0",
                    allowReset: !0,
                    onChange: e => {
                        o(void 0 === e ? {
                            borderWidth: 0
                        } : {
                            borderWidth: e
                        })
                    }
                }), Object(a.createElement)(_, {
                    label: Object(r.__)("Border Color", "ib-block-toc"),
                    value: t.borderColor,
                    onChange: e => o({
                        borderColor: e
                    })
                }), Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("Border Radius", "ib-block-toc"),
                    value: t.borderRadius,
                    min: "0",
                    max: "10",
                    initialPosition: "0",
                    allowReset: !0,
                    onChange: e => {
                        o(void 0 === e ? {
                            borderRadius: 0
                        } : {
                            borderRadius: e
                        })
                    }
                })), Object(a.createElement)(u.PanelBody, {
                    title: Object(r.__)("Include/Exclude", "ib-block-toc"),
                    initialOpen: !1
                }, Object(a.createElement)(u.SelectControl, {
                    multiple: !0,
                    label: Object(r.__)("Include Anchors by Tags", "ib-block-toc"),
                    value: t.anchorsByTags,
                    onChange: e => o({
                        anchorsByTags: e
                    }),
                    options: [{
                        value: "h1",
                        label: "H1"
                    }, {
                        value: "h2",
                        label: "H2"
                    }, {
                        value: "h3",
                        label: "H3"
                    }, {
                        value: "h4",
                        label: "H4"
                    }, {
                        value: "h5",
                        label: "H5"
                    }, {
                        value: "h6",
                        label: "H6"
                    }],
                    help: Object(r.__)("Select multiple headings you want to include with Shift + Click", "ib-block-toc"),
                    className: "ib-block-control--selector"
                }), Object(a.createElement)(u.TextControl, {
                    label: Object(r.__)("Include Container", "ib-block-toc"),
                    value: t.includeContainer,
                    onChange: e => o({
                        includeContainer: e
                    }),
                    help: Object(r.__)("Ex: body or .container-class, #container-id", "ib-block-toc")
                }), Object(a.createElement)(u.TextControl, {
                    label: Object(r.__)("Exclude Container", "ib-block-toc"),
                    value: t.excludeContainer,
                    onChange: e => o({
                        excludeContainer: e
                    }),
                    help: Object(r.__)("Ex: .container-class, #container-id", "ib-block-toc")
                })), Object(a.createElement)(u.PanelBody, {
                    title: Object(r.__)("Collapsable ToC", "ib-block-toc"),
                    initialOpen: !1
                }, Object(a.createElement)(u.ToggleControl, {
                    label: Object(r.__)("Enable Collapsable", "ib-block-toc"),
                    checked: t.collapsable,
                    onChange: e => o({
                        collapsable: e
                    })
                }), Object(a.createElement)(u.BaseControl, {
                    label: Object(r.__)("Collapsable Icons", "ib-block-toc"),
                    className: "ib-block-control--dropdown-menu"
                }, Object(a.createElement)(u.DropdownMenu, {
                    label: Object(r.__)("Choose icon", "ib-block-toc"),
                    icon: "standard" === t.collapsableIcons ? p : h,
                    controls: [{
                        icon: p,
                        title: Object(r.__)("Plus / Minus", "ib-block-toc"),
                        onClick: () => o({
                            collapsableIcons: "standard"
                        })
                    }, {
                        icon: h,
                        title: Object(r.__)("Chevrons", "ib-block-toc"),
                        onClick: () => o({
                            collapsableIcons: "chevrons"
                        })
                    }]
                }))), Object(a.createElement)(u.PanelBody, {
                    title: Object(r.__)("Additional Settings", "ib-block-toc"),
                    initialOpen: !1
                }, Object(a.createElement)(u.RangeControl, {
                    label: Object(r.__)("Extra Offset", "ib-block-toc"),
                    help: Object(r.__)("You can define some extra offset if your site has sticky header.", "ib-block-toc"),
                    value: t.extraOffset,
                    min: "0",
                    max: "300",
                    onChange: e => {
                        o(void 0 === e ? {
                            extraOffset: 0
                        } : {
                            extraOffset: e
                        })
                    }
                })))
            },
            k = e => {
                const {
                    headerFontSize: t,
                    headerBgColor: o,
                    headerTextColor: l,
                    separatorHeight: a,
                    separatorColor: c,
                    bgColor: n,
                    textColor: r,
                    linkColor: i,
                    fontSize: b,
                    listSpacing: s,
                    borderWidth: d,
                    borderColor: u,
                    borderRadius: p
                } = e;
                return {
                    container: {
                        borderWidth: d || void 0,
                        borderStyle: d ? "solid" : void 0,
                        borderColor: u || void 0,
                        borderRadius: p || void 0,
                        overflow: p ? "hidden" : void 0
                    },
                    header: {
                        fontSize: t || void 0,
                        backgroundColor: o || void 0,
                        color: l || void 0,
                        "--fill": l || void 0
                    },
                    separator: {
                        backgroundColor: c || void 0,
                        height: a ? a + "px" : "2px"
                    },
                    body: {
                        backgroundColor: n || void 0,
                        color: r || void 0,
                        "--linkColor": i || void 0,
                        fontSize: b || void 0,
                        "--listSpacing": s ? s + "px" : void 0
                    }
                }
            };
        Object(l.registerBlockType)("ppmcb/toc", {
            edit: function({
                attributes: e,
                setAttributes: t
            }) {
                const o = "numbers" === e.listStyle ? "ol" : "ul",
                    l = k(e);
                return "undefined" != typeof IBToCBlock && setTimeout((function() {
                    new IBToCBlock({
                        anchors: e.anchorsByTags.join(),
                        includeContainer: e.includeContainer,
                        excludeContainer: e.excludeContainer,
                        isHierarchical: e.hierarchicalView,
                        isCollapsable: e.collapsable,
                        extraOffset: e.extraOffset
                    })
                }), 500), Object(a.createElement)(a.Fragment, null, Object(a.createElement)(y, {
                    attributes: e,
                    setAttributes: t
                }), Object(a.createElement)("div", Object(d.useBlockProps)(), Object(a.createElement)("div", {
                    className: s()("ib-toc-container", "ib-toc-list-style-" + e.listStyle, {
                        "ib-toc-hierarchical": e.hierarchicalView
                    }, "ib-toc-expanded"),
                    style: l.container
                }, Object(a.createElement)("div", {
                    className: "ib-toc-header",
                    style: l.header
                }, Object(a.createElement)("div", {
                    className: "ib-toc-header-title"
                }, Object(a.createElement)(d.RichText, {
                    placeholder: Object(r.__)("Table of Contents", "ib-block-toc"),
                    value: e.title,
                    onChange: e => t({
                        title: e
                    }),
                    allowedFormats: ["core/bold", "core/italic"],
                    disableLineBreaks: !0,
                    withoutIteractiveFormatting: !0,
                    identifier: "text"
                }))), Object(a.createElement)("div", {
                    className: "ib-toc-separator",
                    style: l.separator
                }), Object(a.createElement)("div", {
                    className: "ib-toc-body",
                    style: l.body
                }, Object(a.createElement)(o, {
                    className: "ib-toc-anchors"
                })),e.collapsable && Object(a.createElement)("button", {
		                className: "toc_button"
		            }, wp.element.createElement(d.RichText, {
		                value: e.toctext,
		                allowedFormats: ["core/bold", "core/italic"],
		                onChange: function(e) {
		                    return r({
		                        toctext: e
		                    })
		                },
		                placeholder: __("read more text")
		            }))
                )))
            },
            save: function({
                attributes: e
            }) {
                const t = "numbers" === e.listStyle ? "ol" : "ul",
                    o = k(e),
                    l = d.useBlockProps.save();
                return Object(a.createElement)("div", l, Object(a.createElement)("div", {
                    className: s()("ib-toc-container", "ib-toc-list-style-" + e.listStyle, {
                        "ib-toc-hierarchical": e.hierarchicalView
                    }, "ib-toc-expanded"),
                    style: o.container
                }, Object(a.createElement)("div", {
                    className: "ib-toc-header",
                    style: o.header
                }, !d.RichText.isEmpty(e.title) && Object(a.createElement)(d.RichText.Content, {
                    tagName: "div",
                    className: "ib-toc-header-title",
                    value: e.title
                })), Object(a.createElement)("div", {
                    className: "ib-toc-separator",
                    style: o.separator
                }), Object(a.createElement)("div", {
                    className: "ib-toc-body",
                    style: o.body
                }, Object(a.createElement)(t, {
                    className: "ib-toc-anchors"
                })),e.collapsable && Object(a.createElement)("button", {
		                className: "toc_button "
		            }, wp.element.createElement(d.RichText.Content, {
		                value: e.toctext
		            }))
                ))
            },
            attributes: i,
            icon: n,
            keywords: ["toc"],
            getEditWrapperProps: e => ({
                className: "ib-block-toc",
                "data-anchors": e.anchorsByTags.join(),
                "data-include": e.includeContainer,
                "data-exclude": e.excludeContainer,
                "data-collapsable": e.collapsable,
                "data-offset": e.extraOffset
            })
        })
    }]);