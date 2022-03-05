(function(v, C) {
    function e(e) {
        var n = he[e] = {};
        return fe.each(e.split(ee), function(e, t) {
            n[t] = !0
        }), n
    }

    function c(e, t, n) {
        if (n === C && e.nodeType === 1) {
            var r = "data-" + t.replace(me, "-$1").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : ge.test(n) ? fe.parseJSON(n) : n
                } catch ($) {}
                fe.data(e, t, n)
            } else n = C
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e) {
            if (t === "data" && fe.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function s() {
        return !1
    }

    function n() {
        return !0
    }

    function i(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function t(e, t) {
        do {
            e = e[t]
        } while (e && e.nodeType !== 1);
        return e
    }

    function r(e, r, i) {
        r = r || 0;
        if (fe.isFunction(r)) return fe.grep(e, function(e, t) {
            var n = !!r.call(e, t, e);
            return n === i
        });
        if (r.nodeType) return fe.grep(e, function(e, t) {
            return e === r === i
        });
        if (typeof r == "string") {
            var t = fe.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (_e.test(r)) return fe.filter(r, t, !i);
            r = fe.filter(r, t)
        }
        return fe.grep(e, function(e, t) {
            return fe.inArray(e, r) >= 0 === i
        })
    }

    function b(e) {
        var t = We.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function l(e, t) {
        if (t.nodeType !== 1 || !fe.hasData(e)) return;
        var n, r, i, o = fe._data(e),
            a = fe._data(t, o),
            s = o.events;
        if (s) {
            delete a.handle, a.events = {};
            for (n in s)
                for (r = 0, i = s[n].length; r < i; r++) fe.event.add(t, n, s[n][r])
        }
        a.data && (a.data = fe.extend({}, a.data))
    }

    function p(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.support.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Ve.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(fe.expando)
    }

    function d(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function x(e) {
        Ve.test(e.type) && (e.defaultChecked = e.checked)
    }

    function h(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = mt.length;
        while (i--) {
            t = mt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function m(e, t) {
        return e = t || e, fe.css(e, "display") === "none" || !fe.contains(e.ownerDocument, e)
    }

    function o(e, t) {
        var n, r, i = [],
            o = 0,
            a = e.length;
        for (; o < a; o++) {
            n = e[o];
            if (!n.style) continue;
            i[o] = fe._data(n, "olddisplay"), t ? (!i[o] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && m(n) && (i[o] = fe._data(n, "olddisplay", w(n.nodeName)))) : (r = nt(n, "display"), !i[o] && r !== "none" && fe._data(n, "olddisplay", r))
        }
        for (o = 0; o < a; o++) {
            n = e[o];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[o] || "" : "none"
        }
        return e
    }

    function a(e, t, n) {
        var r = ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function g(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; i < 4; i += 2) n === "margin" && (o += fe.css(e, n + gt[i], !0)), r ? (n === "content" && (o -= parseFloat(nt(e, "padding" + gt[i])) || 0), n !== "margin" && (o -= parseFloat(nt(e, "border" + gt[i] + "Width")) || 0)) : (o += parseFloat(nt(e, "padding" + gt[i])) || 0, n !== "padding" && (o += parseFloat(nt(e, "border" + gt[i] + "Width")) || 0));
        return o
    }

    function y(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            o = fe.support.boxSizing && fe.css(e, "boxSizing") === "border-box";
        if (r <= 0) {
            r = nt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (ct.test(r)) return r;
            i = o && (fe.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + g(e, t, n || (o ? "border" : "content"), i) + "px"
    }

    function w(e) {
        if (pt[e]) return pt[e];
        var t = fe("<" + e + ">").appendTo(R.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            rt = R.body.appendChild(rt || fe.extend(R.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!it || !rt.createElement) it = (rt.contentWindow || rt.contentDocument).document, it.write("<!doctype html><html><body>"), it.close();
            t = it.body.appendChild(it.createElement(e)), n = nt(t, "display"), R.body.removeChild(rt)
        }
        return pt[e] = n, n
    }

    function T(n, e, r, i) {
        var t;
        if (fe.isArray(e)) fe.each(e, function(e, t) {
            r || bt.test(n) ? i(n, t) : T(n + "[" + (typeof t == "object" ? e : "") + "]", t, r, i)
        });
        else if (!r && fe.type(e) === "object")
            for (t in e) T(n + "[" + t + "]", e[t], r, i);
        else i(n, e)
    }

    function N(l) {
        return function(e, t) {
            typeof e != "string" && (t = e, e = "*");
            var n, r, i, o = e.toLowerCase().split(ee),
                a = 0,
                s = o.length;
            if (fe.isFunction(t))
                for (; a < s; a++) n = o[a], i = /^\+/.test(n), i && (n = n.substr(1) || "*"), r = l[n] = l[n] || [], r[i ? "unshift" : "push"](t)
        }
    }

    function E(e, t, n, r, i, o) {
        i = i || t.dataTypes[0], o = o || {}, o[i] = !0;
        var a, s = e[i],
            l = 0,
            u = s ? s.length : 0,
            c = e === Ot;
        for (; l < u && (c || !a); l++) a = s[l](t, n, r), typeof a == "string" && (!c || o[a] ? a = C : (t.dataTypes.unshift(a), a = E(e, t, n, r, a, o)));
        return (c || !a) && !o["*"] && (a = E(e, t, n, r, "*", o)), a
    }

    function k(e, t) {
        var n, r, i = fe.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== C && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        r && fe.extend(!0, e, r)
    }

    function S(e, t, n) {
        var r, i, o, a, s = e.contents,
            l = e.dataTypes,
            u = e.responseFields;
        for (i in u) i in n && (t[u[i]] = n[i]);
        while (l[0] === "*") l.shift(), r === C && (r = e.mimeType || t.getResponseHeader("content-type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function A(e, t) {
        var n, r, i, o, a = e.dataTypes.slice(),
            s = a[0],
            l = {},
            u = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (a[1])
            for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
        for (; i = a[++u];)
            if (i !== "*") {
                if (s !== "*" && s !== i) {
                    n = l[s + " " + i] || l["* " + i];
                    if (!n)
                        for (r in l) {
                            o = r.split(" ");
                            if (o[1] === i) {
                                n = l[s + " " + o[0]] || l["* " + o[0]];
                                if (n) {
                                    n === !0 ? n = l[r] : l[r] !== !0 && (i = o[0], a.splice(u--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (Y) {
                            return {
                                state: "parsererror",
                                error: n ? Y : "No conversion from " + s + " to " + i
                            }
                        }
                }
                s = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function j() {
        try {
            return new v.XMLHttpRequest
        } catch (C) {}
    }

    function D() {
        try {
            return new v.ActiveXObject("Microsoft.XMLHTTP")
        } catch (C) {}
    }

    function L() {
        return setTimeout(function() {
            Xt = C
        }, 0), Xt = fe.now()
    }

    function H(o, e) {
        fe.each(e, function(e, t) {
            var n = (Qt[e] || []).concat(Qt["*"]),
                r = 0,
                i = n.length;
            for (; r < i; r++)
                if (n[r].call(o, e, t)) return
        })
    }

    function F(o, e, t) {
        var n, r = 0,
            i = 0,
            a = Gt.length,
            s = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                var e = Xt || L(),
                    t = Math.max(0, u.startTime + u.duration - e),
                    n = 1 - (t / u.duration || 0),
                    r = 0,
                    i = u.tweens.length;
                for (; r < i; r++) u.tweens[r].run(n);
                return s.notifyWith(o, [u, n, t]), n < 1 && i ? t : (s.resolveWith(o, [u]), !1)
            },
            u = s.promise({
                elem: o,
                props: fe.extend({}, e),
                opts: fe.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Xt || L(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t, n) {
                    var r = fe.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    for (; t < n; t++) u.tweens[t].run(1);
                    return e ? s.resolveWith(o, [u, e]) : s.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        M(c, u.opts.specialEasing);
        for (; r < a; r++) {
            n = Gt[r].call(u, o, c, u.opts);
            if (n) return n
        }
        return H(u, c), fe.isFunction(u.opts.start) && u.opts.start.call(o, u), fe.fx.timer(fe.extend(l, {
            anim: u,
            queue: u.opts.queue,
            elem: o
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function M(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            r = fe.camelCase(n), i = t[r], o = e[n], fe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = fe.cssHooks[r];
            if (a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }
    }

    function O(t, e, n) {
        var r, i, o, a, s, l, u, c, f = this,
            p = t.style,
            d = {},
            h = [],
            g = t.nodeType && m(t);
        n.queue || (u = fe._queueHooks(t, "fx"), u.unqueued == null && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--, fe.queue(t, "fx").length || u.empty.fire()
            })
        })), t.nodeType === 1 && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], fe.css(t, "display") === "inline" && fe.css(t, "float") === "none" && (!fe.support.inlineBlockNeedsLayout || w(t.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", fe.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in e) {
            o = e[r];
            if (Yt.exec(o)) {
                delete e[r];
                if (o === (g ? "hide" : "show")) continue;
                h.push(r)
            }
        }
        a = h.length;
        if (a) {
            s = fe._data(t, "fxshow") || fe._data(t, "fxshow", {}), g ? fe(t).show() : f.done(function() {
                fe(t).hide()
            }), f.done(function() {
                var e;
                fe.removeData(t, "fxshow", !0);
                for (e in d) fe.style(t, e, d[e])
            });
            for (r = 0; r < a; r++) i = h[r], l = f.createTween(i, g ? s[i] : 0), d[i] = s[i] || fe.style(t, i), i in s || (s[i] = l.start, g && (l.end = l.start, l.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i)
    }

    function q(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (; i < 4; i += 2 - t) n = gt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e) {
        return fe.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var W, P, R = v.document,
        $ = v.location,
        I = v.navigator,
        z = v.jQuery,
        X = v.$,
        U = Array.prototype.push,
        Y = Array.prototype.slice,
        J = Array.prototype.indexOf,
        V = Object.prototype.toString,
        G = Object.prototype.hasOwnProperty,
        Q = String.prototype.trim,
        fe = function(e, t) {
            return new fe.fn.init(e, t, W)
        },
        K = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Z = /\S/,
        ee = /\s+/,
        te = Z.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
        ne = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ie = /^[\],:{}\s]*$/,
        oe = /(?:^|:|,)(?:\s*\[)+/g,
        ae = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        se = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        le = /^-ms-/,
        ue = /-([\da-z])/gi,
        ce = function(e, t) {
            return (t + "").toUpperCase()
        },
        pe = function() {
            R.addEventListener ? (R.removeEventListener("DOMContentLoaded", pe, !1), fe.ready()) : R.readyState === "complete" && (R.detachEvent("onreadystatechange", pe), fe.ready())
        },
        de = {};
    fe.fn = fe.prototype = {
        constructor: fe,
        init: function(e, t, n) {
            var r, i, o, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? r = [null, e, null] : r = ne.exec(e);
                if (r && (r[1] || !t)) {
                    if (r[1]) return t = t instanceof fe ? t[0] : t, a = t && t.nodeType ? t.ownerDocument || t : R, e = fe.parseHTML(r[1], a, !0), re.test(r[1]) && fe.isPlainObject(t) && this.attr.call(e, t, !0), fe.merge(this, e);
                    i = R.getElementById(r[2]);
                    if (i && i.parentNode) {
                        if (i.id !== r[2]) return n.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = R, this.selector = e, this
                }
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
            }
            return fe.isFunction(e) ? n.ready(e) : (e.selector !== C && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = fe.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return fe.each(this, e, t)
        },
        ready: function(e) {
            return fe.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(","))
        },
        map: function(n) {
            return this.pushStack(fe.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    }, fe.fn.init.prototype = fe.fn, fe.extend = fe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        typeof a == "boolean" && (u = a, a = arguments[1] || {}, s = 2), typeof a != "object" && !fe.isFunction(a) && (a = {}), l === s && (a = this, --s);
        for (; s < l; s++)
            if ((e = arguments[s]) != null)
                for (t in e) {
                    n = a[t], r = e[t];
                    if (a === r) continue;
                    u && r && (fe.isPlainObject(r) || (i = fe.isArray(r))) ? (i ? (i = !1, o = n && fe.isArray(n) ? n : []) : o = n && fe.isPlainObject(n) ? n : {}, a[t] = fe.extend(u, o, r)) : r !== C && (a[t] = r)
                }
        return a
    }, fe.extend({
        noConflict: function(e) {
            return v.$ === fe && (v.$ = X), e && v.jQuery === fe && (v.jQuery = z), fe
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --fe.readyWait : fe.isReady) return;
            if (!R.body) return setTimeout(fe.ready, 1);
            fe.isReady = !0;
            if (e !== !0 && --fe.readyWait > 0) return;
            P.resolveWith(R, [fe]), fe.fn.trigger && fe(R).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return fe.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return fe.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : de[V.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || fe.type(e) !== "object" || e.nodeType || fe.isWindow(e)) return !1;
            try {
                if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (W) {
                return !1
            }
            var t;
            for (t in e);
            return t === C || G.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || R, (r = re.exec(e)) ? [t.createElement(r[1])] : (r = fe.buildFragment([e], t, n ? null : []), fe.merge([], (r.cacheable ? fe.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(e) {
            if (!e || typeof e != "string") return null;
            e = fe.trim(e);
            if (v.JSON && v.JSON.parse) return v.JSON.parse(e);
            if (ie.test(e.replace(ae, "@").replace(se, "]").replace(oe, ""))) return new Function("return " + e)();
            fe.error("Invalid JSON: " + e)
        },
        parseXML: function(e) {
            var t, n;
            if (!e || typeof e != "string") return null;
            try {
                v.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch ($) {
                t = C
            }
            return (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) && fe.error("Invalid XML: " + e), t
        },
        noop: function() {},
        globalEval: function(e) {
            e && Z.test(e) && (v.execScript || function(e) {
                v.eval.call(v, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(le, "ms-").replace(ue, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = o === C || fe.isFunction(e);
            if (n) {
                if (a) {
                    for (r in e)
                        if (t.apply(e[r], n) === !1) break
                } else
                    for (; i < o;)
                        if (t.apply(e[i++], n) === !1) break
            } else if (a) {
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break
            } else
                for (; i < o;)
                    if (t.call(e[i], i, e[i++]) === !1) break;
            return e
        },
        trim: Q ? function(e) {
            return e == null ? "" : Q.call(e)
        } : function(e) {
            return e == null ? "" : e.toString().replace(te, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = fe.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || fe.isWindow(e) ? U.call(r, e) : fe.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (J) return J.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = t.length,
                r = e.length,
                i = 0;
            if (typeof n == "number")
                for (; i < n; i++) e[r++] = t[i];
            else
                while (t[i] !== C) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            n = !!n;
            for (; o < a; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = [],
                a = 0,
                s = e.length,
                l = e instanceof fe || s !== C && typeof s == "number" && (s > 0 && e[0] && e[s - 1] || s === 0 || fe.isArray(e));
            if (l)
                for (; a < s; a++) r = t(e[a], a, n), r != null && (o[o.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (o[o.length] = r);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return typeof t == "string" && (n = e[t], t = e, e = n), fe.isFunction(e) ? (r = Y.call(arguments, 2), i = function() {
                return e.apply(t, r.concat(Y.call(arguments)))
            }, i.guid = e.guid = e.guid || i.guid || fe.guid++, i) : C
        },
        access: function(e, t, n, r, i, o, a) {
            var s, l = n == null,
                u = 0,
                c = e.length;
            if (n && typeof n == "object") {
                for (u in n) fe.access(e, t, u, n[u], 1, o, r);
                i = 1
            } else if (r !== C) {
                s = a === C && fe.isFunction(r), l && (s ? (s = t, t = function(e, t, n) {
                    return s.call(fe(e), n)
                }) : (t.call(e, r), t = null));
                if (t)
                    for (; u < c; u++) t(e[u], n, s ? r.call(e[u], u, t(e[u], n)) : r, a);
                i = 1
            }
            return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), fe.ready.promise = function(e) {
        if (!P) {
            P = fe.Deferred();
            if (R.readyState === "complete" || R.readyState !== "loading" && R.addEventListener) setTimeout(fe.ready, 1);
            else if (R.addEventListener) R.addEventListener("DOMContentLoaded", pe, !1), v.addEventListener("load", fe.ready, !1);
            else {
                R.attachEvent("onreadystatechange", pe), v.attachEvent("onload", fe.ready);
                var t = !1;
                try {
                    t = v.frameElement == null && R.documentElement
                } catch ($) {}
                t && t.doScroll && function I() {
                    if (!fe.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (v) {
                            return setTimeout(I, 50)
                        }
                        fe.ready()
                    }
                }()
            }
        }
        return P.promise(e)
    }, fe.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    }), W = fe(R);
    var he = {};
    fe.Callbacks = function(n) {
        n = typeof n == "string" ? he[n] || e(n) : fe.extend({}, n);
        var t, r, i, o, a, s, l = [],
            u = !n.once && [],
            c = function(e) {
                t = n.memory && e, r = !0, s = o || 0, o = 0, a = l.length, i = !0;
                for (; l && s < a; s++)
                    if (l[s].apply(e[0], e[1]) === !1 && n.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : f.disable())
            },
            f = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        (function r(e) {
                            fe.each(e, function(e, t) {
                                fe.isFunction(t) && (!n.unique || !f.has(t)) ? l.push(t) : t && t.length && r(t)
                            })
                        })(arguments), i ? a = l.length : t && (o = e, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && fe.each(arguments, function(e, t) {
                        var n;
                        while ((n = fe.inArray(t, l, n)) > -1) l.splice(n, 1), i && (n <= a && a--, n <= s && s--)
                    }), this
                },
                has: function(e) {
                    return fe.inArray(e, l) > -1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = u = t = C, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = C, t || f.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], l && (!r || u) && (i ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return f
    }, fe.extend({
        Deferred: function(e) {
            var a = [
                    ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fe.Callbacks("memory")]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return fe.Deferred(function(i) {
                            fe.each(a, function(e, t) {
                                var n = t[0],
                                    r = o[e];
                                s[t[1]](fe.isFunction(r) ? function() {
                                    var e = r.apply(this, arguments);
                                    e && fe.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[n + "With"](this === s ? i : this, [e])
                                } : i[n])
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return typeof e == "object" ? fe.extend(e, o) : o
                    }
                },
                s = {};
            return o.pipe = o.then, fe.each(a, function(e, t) {
                var n = t[2],
                    r = t[3];
                o[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, a[e ^ 1][2].disable, a[2][2].lock), s[t[0]] = n.fire, s[t[0] + "With"] = n.fireWith
            }), o.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var t = 0,
                n = Y.call(arguments),
                r = n.length,
                i = r !== 1 || e && fe.isFunction(e.promise) ? r : 0,
                o = i === 1 ? e : fe.Deferred(),
                a = function(t, n, r) {
                    return function(e) {
                        n[t] = this, r[t] = arguments.length > 1 ? Y.call(arguments) : e, r === s ? o.notifyWith(n, r) : --i || o.resolveWith(n, r)
                    }
                },
                s, l, u;
            if (r > 1) {
                s = new Array(r), l = new Array(r), u = new Array(r);
                for (; t < r; t++) n[t] && fe.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
            }
            return i || o.resolveWith(u, n), o.promise()
        }
    }), fe.support = function() {
        var a, e, t, n, r, i, o, s, l, u, c, f = R.createElement("div");
        f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = f.getElementsByTagName("*"), t = f.getElementsByTagName("a")[0], t.style.cssText = "top:1px;float:left;opacity:.5";
        if (!e || !e.length || !t) return {};
        n = R.createElement("select"), r = n.appendChild(R.createElement("option")), i = f.getElementsByTagName("input")[0], a = {
            leadingWhitespace: f.firstChild.nodeType === 3,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(t.getAttribute("style")),
            hrefNormalized: t.getAttribute("href") === "/a",
            opacity: /^0.5/.test(t.style.opacity),
            cssFloat: !!t.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: r.selected,
            getSetAttribute: f.className !== "t",
            enctype: !!R.createElement("form").enctype,
            html5Clone: R.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: R.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, a.noCloneChecked = i.cloneNode(!0).checked, n.disabled = !0, a.optDisabled = !r.disabled;
        try {
            delete f.test
        } catch (Q) {
            a.deleteExpando = !1
        }!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", c = function() {
            a.noCloneEvent = !1
        }), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", c)), i = R.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), a.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), f.appendChild(i), o = R.createDocumentFragment(), o.appendChild(f.lastChild), a.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, a.appendChecked = i.checked, o.removeChild(i), o.appendChild(f);
        if (f.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) s = "on" + l, u = s in f, u || (f.setAttribute(s, "return;"), u = typeof f[s] == "function"), a[l + "Bubbles"] = u;
        return fe(function() {
            var e, t, n, r, i = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = R.getElementsByTagName("body")[0];
            if (!o) return;
            e = R.createElement("div"), e.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(e, o.firstChild), t = R.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = t.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = n[0].offsetHeight === 0, n[0].style.display = "", n[1].style.display = "none", a.reliableHiddenOffsets = u && n[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", a.boxSizing = t.offsetWidth === 4, a.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, v.getComputedStyle && (a.pixelPosition = (v.getComputedStyle(t, null) || {}).top !== "1%", a.boxSizingReliable = (v.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px", r = R.createElement("div"), r.style.cssText = t.style.cssText = i, r.style.marginRight = r.style.width = "0", t.style.width = "1px", t.appendChild(r), a.reliableMarginRight = !parseFloat((v.getComputedStyle(r, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", a.shrinkWrapBlocks = t.offsetWidth !== 3, e.style.zoom = 1), o.removeChild(e), e = t = n = r = null
        }), o.removeChild(f), e = t = n = r = i = o = f = null, a
    }();
    var ge = /^(?:\{.*\}|\[.*\])$/,
        me = /([A-Z])/g;
    fe.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (fe.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !u(e)
        },
        data: function(e, t, n, r) {
            if (!fe.acceptData(e)) return;
            var i, o, a = fe.expando,
                s = typeof t == "string",
                l = e.nodeType,
                u = l ? fe.cache : e,
                c = l ? e[a] : e[a] && a;
            if ((!c || !u[c] || !r && !u[c].data) && s && n === C) return;
            c || (l ? e[a] = c = fe.deletedIds.pop() || ++fe.uuid : c = a), u[c] || (u[c] = {}, l || (u[c].toJSON = fe.noop));
            if (typeof t == "object" || typeof t == "function") r ? u[c] = fe.extend(u[c], t) : u[c].data = fe.extend(u[c].data, t);
            return i = u[c], r || (i.data || (i.data = {}), i = i.data), n !== C && (i[fe.camelCase(t)] = n), s ? (o = i[t], o == null && (o = i[fe.camelCase(t)])) : o = i, o
        },
        removeData: function(e, t, n) {
            if (!fe.acceptData(e)) return;
            var r, i, o, a = e.nodeType,
                s = a ? fe.cache : e,
                l = a ? e[fe.expando] : fe.expando;
            if (!s[l]) return;
            if (t) {
                r = n ? s[l] : s[l].data;
                if (r) {
                    fe.isArray(t) || (t in r ? t = [t] : (t = fe.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (!(n ? u : fe.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete s[l].data;
                if (!u(s[l])) return
            }
            a ? fe.cleanData([e], !0) : fe.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null
        },
        _data: function(e, t, n) {
            return fe.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && fe.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), fe.fn.extend({
        data: function(n, e) {
            var r, i, t, o, a, s = this[0],
                l = 0,
                u = null;
            if (n === C) {
                if (this.length) {
                    u = fe.data(s);
                    if (s.nodeType === 1 && !fe._data(s, "parsedAttrs")) {
                        t = s.attributes;
                        for (a = t.length; l < a; l++) o = t[l].name, o.indexOf("data-") === 0 && (o = fe.camelCase(o.substring(5)), c(s, o, u[o]));
                        fe._data(s, "parsedAttrs", !0)
                    }
                }
                return u
            }
            return typeof n == "object" ? this.each(function() {
                fe.data(this, n)
            }) : (r = n.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", fe.access(this, function(t) {
                if (t === C) return u = this.triggerHandler("getData" + i, [r[0]]), u === C && s && (u = fe.data(s, n), u = c(s, n, u)), u === C && r[1] ? this.data(r[0]) : u;
                r[1] = t, this.each(function() {
                    var e = fe(this);
                    e.triggerHandler("setData" + i, r), fe.data(this, n, t), e.triggerHandler("changeData" + i, r)
                })
            }, null, e, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                fe.removeData(this, e)
            })
        }
    }), fe.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = fe._data(e, t), n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t),
                r = n.shift(),
                i = fe._queueHooks(e, t),
                o = function() {
                    fe.dequeue(e, t)
                };
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), delete i.stop, r.call(e, o, i)), !n.length && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    fe.removeData(e, t + "queue", !0), fe.removeData(e, n, !0)
                })
            })
        }
    }), fe.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return typeof t != "string" && (n = t, t = "fx", e--), arguments.length < e ? fe.queue(this[0], t) : n === C ? this : this.each(function() {
                var e = fe.queue(this, t, n);
                fe._queueHooks(this, t), t === "fx" && e[0] !== "inprogress" && fe.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        delay: function(r, e) {
            return r = fe.fx ? fe.fx.speeds[r] || r : r, e = e || "fx", this.queue(e, function(e, t) {
                var n = setTimeout(e, r);
                t.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = fe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            typeof e != "string" && (t = e, e = C), e = e || "fx";
            while (a--)(n = fe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ye, ve, be, xe = /[\t\r\n]/g,
        we = /\r/g,
        Te = /^(?:button|input)$/i,
        Ne = /^(?:button|input|object|select|textarea)$/i,
        Ce = /^a(?:rea|)$/i,
        Ee = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ke = fe.support.getSetAttribute;
    fe.fn.extend({
        attr: function(e, t) {
            return fe.access(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return fe.access(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = fe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = C, delete this[e]
                } catch (W) {}
            })
        },
        addClass: function(t) {
            var e, n, r, i, o, a, s;
            if (fe.isFunction(t)) return this.each(function(e) {
                fe(this).addClass(t.call(this, e, this.className))
            });
            if (t && typeof t == "string") {
                e = t.split(ee);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && e.length === 1) i.className = t;
                        else {
                            o = " " + i.className + " ";
                            for (a = 0, s = e.length; a < s; a++) ~o.indexOf(" " + e[a] + " ") || (o += e[a] + " ");
                            i.className = fe.trim(o)
                        }
                }
            }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s;
            if (fe.isFunction(t)) return this.each(function(e) {
                fe(this).removeClass(t.call(this, e, this.className))
            });
            if (t && typeof t == "string" || t === C) {
                e = (t || "").split(ee);
                for (a = 0, s = this.length; a < s; a++) {
                    r = this[a];
                    if (r.nodeType === 1 && r.className) {
                        n = (" " + r.className + " ").replace(xe, " ");
                        for (i = 0, o = e.length; i < o; i++)
                            while (n.indexOf(" " + e[i] + " ") > -1) n = n.replace(" " + e[i] + " ", " ");
                        r.className = t ? fe.trim(n) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(o, a) {
            var s = typeof o,
                l = typeof a == "boolean";
            return fe.isFunction(o) ? this.each(function(e) {
                fe(this).toggleClass(o.call(this, e, this.className, a), a)
            }) : this.each(function() {
                if (s === "string") {
                    var e, t = 0,
                        n = fe(this),
                        r = a,
                        i = o.split(ee);
                    while (e = i[t++]) r = l ? r : !n.hasClass(e), n[r ? "addClass" : "removeClass"](e)
                } else if (s === "undefined" || s === "boolean") this.className && fe._data(this, "__className__", this.className), this.className = this.className || o === !1 ? "" : fe._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(xe, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(r) {
            var i, e, o, t = this[0];
            if (!arguments.length) {
                if (t) return i = fe.valHooks[t.type] || fe.valHooks[t.nodeName.toLowerCase()], i && "get" in i && (e = i.get(t, "value")) !== C ? e : (e = t.value, typeof e == "string" ? e.replace(we, "") : e == null ? "" : e);
                return
            }
            return o = fe.isFunction(r), this.each(function(e) {
                var t, n = fe(this);
                if (this.nodeType !== 1) return;
                o ? t = r.call(this, e, n.val()) : t = r, t == null ? t = "" : typeof t == "number" ? t += "" : fe.isArray(t) && (t = fe.map(t, function(e) {
                    return e == null ? "" : e + ""
                })), i = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()];
                if (!i || !("set" in i) || i.set(this, t, "value") === C) this.value = t
            })
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex,
                        a = [],
                        s = e.options,
                        l = e.type === "select-one";
                    if (o < 0) return null;
                    n = l ? o : 0, r = l ? o + 1 : s.length;
                    for (; n < r; n++) {
                        i = s[n];
                        if (i.selected && (fe.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !fe.nodeName(i.parentNode, "optgroup"))) {
                            t = fe(i).val();
                            if (l) return t;
                            a.push(t)
                        }
                    }
                    return l && !a.length && s.length ? fe(s[o]).val() : a
                },
                set: function(e, t) {
                    var n = fe.makeArray(t);
                    return fe(e).find("option").each(function() {
                        this.selected = fe.inArray(fe(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, t, n, r) {
            var i, o, a, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2) return;
            if (r && fe.isFunction(fe.fn[t])) return fe(e)[t](n);
            if (typeof e.getAttribute == "undefined") return fe.prop(e, t, n);
            a = s !== 1 || !fe.isXMLDoc(e), a && (t = t.toLowerCase(), o = fe.attrHooks[t] || (Ee.test(t) ? ve : ye));
            if (n !== C) {
                if (n === null) {
                    fe.removeAttr(e, t);
                    return
                }
                return o && "set" in o && a && (i = o.set(e, n, t)) !== C ? i : (e.setAttribute(t, "" + n), n)
            }
            return o && "get" in o && a && (i = o.get(e, t)) !== null ? i : (i = e.getAttribute(t), i === null ? C : i)
        },
        removeAttr: function(e, t) {
            var n, r, i, o, a = 0;
            if (t && e.nodeType === 1) {
                r = t.split(ee);
                for (; a < r.length; a++) i = r[a], i && (n = fe.propFix[i] || i, o = Ee.test(i), o || fe.attr(e, i, ""), e.removeAttribute(ke ? i : n), o && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Te.test(e.nodeName) && e.parentNode) fe.error("type property can't be changed");
                    else if (!fe.support.radioValue && t === "radio" && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return ye && fe.nodeName(e, "button") ? ye.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (ye && fe.nodeName(e, "button")) return ye.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            return o = a !== 1 || !fe.isXMLDoc(e), o && (t = fe.propFix[t] || t, i = fe.propHooks[t]), n !== C ? i && "set" in i && (r = i.set(e, n, t)) !== C ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = e.getAttributeNode("tabindex");
                    return t && t.specified ? parseInt(t.value, 10) : Ne.test(e.nodeName) || Ce.test(e.nodeName) && e.href ? 0 : C
                }
            }
        }
    }), ve = {
        get: function(e, t) {
            var n, r = fe.prop(e, t);
            return r === !0 || typeof r != "boolean" && (n = e.getAttributeNode(t)) && n.nodeValue !== !1 ? t.toLowerCase() : C
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? fe.removeAttr(e, n) : (r = fe.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, ke || (be = {
        name: !0,
        id: !0,
        coords: !0
    }, ye = fe.valHooks.button = {
        get: function(e, t) {
            var n;
            return n = e.getAttributeNode(t), n && (be[t] ? n.value !== "" : n.specified) ? n.value : C
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = R.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, fe.each(["width", "height"], function(e, n) {
        fe.attrHooks[n] = fe.extend(fe.attrHooks[n], {
            set: function(e, t) {
                if (t === "") return e.setAttribute(n, "auto"), t
            }
        })
    }), fe.attrHooks.contenteditable = {
        get: ye.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), ye.set(e, t, n)
        }
    }), fe.support.hrefNormalized || fe.each(["href", "src", "width", "height"], function(e, n) {
        fe.attrHooks[n] = fe.extend(fe.attrHooks[n], {
            get: function(e) {
                var t = e.getAttribute(n, 2);
                return t === null ? C : t
            }
        })
    }), fe.support.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || C
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), fe.support.optSelected || (fe.propHooks.selected = fe.extend(fe.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), fe.support.enctype || (fe.propFix.enctype = "encoding"), fe.support.checkOn || fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = fe.extend(fe.valHooks[this], {
            set: function(e, t) {
                if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) >= 0
            }
        })
    });
    var Se = /^(?:textarea|input|select)$/i,
        Ae = /^([^\.]*|)(?:\.(.+)|)$/,
        je = /(?:^|\s)hover(\.\S+|)\b/,
        De = /^key/,
        Le = /^(?:mouse|contextmenu)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        Fe = function(e) {
            return fe.event.special.hover ? e : e.replace(je, "mouseenter$1 mouseleave$1")
        };
    fe.event = {
            add: function(e, t, n, r, i) {
                var o, a, s, l, u, c, f, p, d, h, g;
                if (e.nodeType === 3 || e.nodeType === 8 || !t || !n || !(o = fe._data(e))) return;
                n.handler && (d = n, n = d.handler, i = d.selector), n.guid || (n.guid = fe.guid++), s = o.events, s || (o.events = s = {}), a = o.handle, a || (o.handle = a = function(e) {
                    return typeof fe != "undefined" && (!e || fe.event.triggered !== e.type) ? fe.event.dispatch.apply(a.elem, arguments) : C
                }, a.elem = e), t = fe.trim(Fe(t)).split(" ");
                for (l = 0; l < t.length; l++) {
                    u = Ae.exec(t[l]) || [], c = u[1], f = (u[2] || "").split(".").sort(), g = fe.event.special[c] || {}, c = (i ? g.delegateType : g.bindType) || c, g = fe.event.special[c] || {}, p = fe.extend({
                        type: c,
                        origType: u[1],
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        namespace: f.join(".")
                    }, d), h = s[c];
                    if (!h) {
                        h = s[c] = [], h.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, r, f, a) === !1) e.addEventListener ? e.addEventListener(c, a, !1) : e.attachEvent && e.attachEvent("on" + c, a)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, p) : h.push(p), fe.event.global[c] = !0
                }
                e = null
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var o, a, s, l, u, c, f, p, d, h, g, m = fe.hasData(e) && fe._data(e);
                if (!m || !(p = m.events)) return;
                t = fe.trim(Fe(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    a = Ae.exec(t[o]) || [], s = l = a[1], u = a[2];
                    if (!s) {
                        for (s in p) fe.event.remove(e, s + t[o], n, r, !0);
                        continue
                    }
                    d = fe.event.special[s] || {}, s = (r ? d.delegateType : d.bindType) || s, h = p[s] || [], c = h.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (f = 0; f < h.length; f++) g = h[f], (i || l === g.origType) && (!n || n.guid === g.guid) && (!u || u.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (h.splice(f--, 1), g.selector && h.delegateCount--, d.remove && d.remove.call(e, g));
                    h.length === 0 && c !== h.length && ((!d.teardown || d.teardown.call(e, u, m.handle) === !1) && fe.removeEvent(e, s, m.handle), delete p[s])
                }
                fe.isEmptyObject(p) && (delete m.handle, fe.removeData(e, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(e, t, n, r) {
                if (!n || n.nodeType !== 3 && n.nodeType !== 8) {
                    var i, o, a, s, l, u, c, f, p, d, h = e.type || e,
                        g = [];
                    if (He.test(h + fe.event.triggered)) return;
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), o = !0), h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort());
                    if ((!n || fe.event.customEvent[h]) && !fe.event.global[h]) return;
                    e = typeof e == "object" ? e[fe.expando] ? e : new fe.Event(h, e) : new fe.Event(h), e.type = h, e.isTrigger = !0, e.exclusive = o, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!n) {
                        i = fe.cache;
                        for (a in i) i[a].events && i[a].events[h] && fe.event.trigger(e, t, i[a].handle.elem, !0);
                        return
                    }
                    e.result = C, e.target || (e.target = n), t = t != null ? fe.makeArray(t) : [], t.unshift(e), c = fe.event.special[h] || {};
                    if (c.trigger && c.trigger.apply(n, t) === !1) return;
                    p = [
                        [n, c.bindType || h]
                    ];
                    if (!r && !c.noBubble && !fe.isWindow(n)) {
                        d = c.delegateType || h, s = He.test(d + h) ? n : n.parentNode;
                        for (l = n; s; s = s.parentNode) p.push([s, d]), l = s;
                        l === (n.ownerDocument || R) && p.push([l.defaultView || l.parentWindow || v, d])
                    }
                    for (a = 0; a < p.length && !e.isPropagationStopped(); a++) s = p[a][0], e.type = p[a][1], f = (fe._data(s, "events") || {})[e.type] && fe._data(s, "handle"), f && f.apply(s, t), f = u && s[u], f && fe.acceptData(s) && f.apply(s, t) === !1 && e.preventDefault();
                    return e.type = h, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(n.ownerDocument, t) === !1) && (h !== "click" || !fe.nodeName(n, "a")) && fe.acceptData(n) && u && n[h] && (h !== "focus" && h !== "blur" || e.target.offsetWidth !== 0) && !fe.isWindow(n) && (l = n[u], l && (n[u] = null), fe.event.triggered = h, n[h](), fe.event.triggered = C, l && (n[u] = l)), e.result
                }
                return
            },
            dispatch: function(e) {
                e = fe.event.fix(e || v.event);
                var t, n, r, i, o, a, s, l, u, c, f, p = (fe._data(this, "events") || {})[e.type] || [],
                    d = p.delegateCount,
                    h = [].slice.call(arguments),
                    g = !e.exclusive && !e.namespace,
                    m = fe.event.special[e.type] || {},
                    y = [];
                h[0] = e, e.delegateTarget = this;
                if (m.preDispatch && m.preDispatch.call(this, e) === !1) return;
                if (d && (!e.button || e.type !== "click")) {
                    i = fe(this), i.context = this;
                    for (r = e.target; r != this; r = r.parentNode || this)
                        if (r.disabled !== !0 || e.type !== "click") {
                            a = {}, l = [], i[0] = r;
                            for (t = 0; t < d; t++) u = p[t], c = u.selector, a[c] === C && (a[c] = i.is(c)), a[c] && l.push(u);
                            l.length && y.push({
                                elem: r,
                                matches: l
                            })
                        }
                }
                p.length > d && y.push({
                    elem: this,
                    matches: p.slice(d)
                });
                for (t = 0; t < y.length && !e.isPropagationStopped(); t++) {
                    s = y[t], e.currentTarget = s.elem;
                    for (n = 0; n < s.matches.length && !e.isImmediatePropagationStopped(); n++) {
                        u = s.matches[n];
                        if (g || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace)) e.data = u.data, e.handleObj = u, o = ((fe.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, h), o !== C && (e.result = o, o === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return m.postDispatch && m.postDispatch.call(this, e), e.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, o = t.button,
                        a = t.fromElement;
                    return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || R, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), !e.which && o !== C && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[fe.expando]) return e;
                var t, n, r = e,
                    i = fe.event.fixHooks[e.type] || {},
                    o = i.props ? this.props.concat(i.props) : this.props;
                e = fe.Event(r);
                for (t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || R), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
            },
            special: {
                ready: {
                    setup: fe.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        fe.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = fe.extend(new fe.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? fe.event.trigger(i, null, t) : fe.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, fe.event.handle = fe.event.dispatch, fe.removeEvent = R.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, fe.Event = function(e, t) {
            if (this instanceof fe.Event) e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? n : s) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0;
            else return new fe.Event(e, t)
        }, fe.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = n;
                var e = this.originalEvent;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = n;
                var e = this.originalEvent;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = n, this.stopPropagation()
            },
            isDefaultPrevented: s,
            isPropagationStopped: s,
            isImmediatePropagationStopped: s
        }, fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, a) {
            fe.event.special[e] = {
                delegateType: a,
                bindType: a,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj,
                        o = i.selector;
                    if (!r || r !== n && !fe.contains(n, r)) e.type = i.origType, t = i.handler.apply(this, arguments), e.type = a;
                    return t
                }
            }
        }), fe.support.submitBubbles || (fe.event.special.submit = {
            setup: function() {
                if (fe.nodeName(this, "form")) return !1;
                fe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? t.form : C;
                    n && !fe._data(n, "_submit_attached") && (fe.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), fe._data(n, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (fe.nodeName(this, "form")) return !1;
                fe.event.remove(this, "._submit")
            }
        }), fe.support.changeBubbles || (fe.event.special.change = {
            setup: function() {
                if (Se.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") fe.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), fe.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), fe.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                fe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Se.test(t.nodeName) && !fe._data(t, "_change_attached") && (fe.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && fe.event.simulate("change", this.parentNode, e, !0)
                    }), fe._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return fe.event.remove(this, "._change"), Se.test(this.nodeName)
            }
        }), fe.support.focusinBubbles || fe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    fe.event.simulate(t, e.target, fe.event.fix(e), !0)
                };
            fe.event.special[t] = {
                setup: function() {
                    n++ === 0 && R.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && R.removeEventListener(e, r, !0)
                }
            }
        }), fe.fn.extend({
            on: function(e, t, n, r, i) {
                var o, a;
                if (typeof e == "object") {
                    typeof t != "string" && (n = n || t, t = C);
                    for (a in e) this.on(a, t, n, e[a], i);
                    return this
                }
                n == null && r == null ? (r = t, n = t = C) : r == null && (typeof t == "string" ? (r = n, n = C) : (r = n, n = t, t = C));
                if (r === !1) r = s;
                else if (!r) return this;
                return i === 1 && (o = r, r = function(e) {
                    return fe().off(e), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = fe.guid++)), this.each(function() {
                    fe.event.add(this, e, r, n, t)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if (typeof e == "object") {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                if (t === !1 || typeof t == "function") n = t, t = C;
                return n === !1 && (n = s), this.each(function() {
                    fe.event.remove(this, e, n, t)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return fe(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return fe(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length == 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                if (this[0]) return fe.event.trigger(e, t, this[0], !0)
            },
            toggle: function(n) {
                var r = arguments,
                    e = n.guid || fe.guid++,
                    i = 0,
                    t = function(e) {
                        var t = (fe._data(this, "lastToggle" + n.guid) || 0) % i;
                        return fe._data(this, "lastToggle" + n.guid, t + 1), e.preventDefault(), r[t].apply(this, arguments) || !1
                    };
                t.guid = e;
                while (i < r.length) r[i++].guid = e;
                return this.click(t)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
            fe.fn[n] = function(e, t) {
                return t == null && (t = e, e = null), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }, De.test(n) && (fe.event.fixHooks[n] = fe.event.keyHooks), Le.test(n) && (fe.event.fixHooks[n] = fe.event.mouseHooks)
        }),
        function(e, v) {
            function b(e, t, n, r) {
                var i = 0,
                    o = t.length;
                for (; i < o; i++) ie(e, t[i], n, r)
            }

            function x(e, t, n, r, i, o) {
                var a, s = oe.setFilters[t.toLowerCase()];
                return s || ie.error(t), (e || !(a = i)) && b(e || "*", r, a = [], i), a.length > 0 ? s(a, n, o) : []
            }

            function y(e, t, n, r, i) {
                var o, a, s, l, u, c, f, p, d = 0,
                    h = i.length,
                    g = z.POS,
                    m = new RegExp("^" + g.source + "(?!" + E + ")", "i"),
                    y = function() {
                        var e = 1,
                            t = arguments.length - 2;
                        for (; e < t; e++) arguments[e] === v && (o[e] = v)
                    };
                for (; d < h; d++) {
                    g.exec(""), e = i[d], l = [], s = 0, u = r;
                    while (o = g.exec(e)) {
                        p = g.lastIndex = o.index + o[0].length;
                        if (p > s) {
                            f = e.slice(s, o.index), s = p, c = [t], M.test(f) && (u && (c = u), u = r);
                            if (a = P.test(f)) f = f.slice(0, -5).replace(M, "$&*");
                            o.length > 1 && o[0].replace(m, y), u = x(f, o[1], o[2], c, u, a)
                        }
                    }
                    u ? (l = l.concat(u), (f = e.slice(s)) && f !== ")" ? M.test(f) ? b(f, l, n, r) : ie(f, t, n, r ? r.concat(u) : u) : C.apply(n, l)) : ie(e, t, n, r)
                }
                return h === 1 ? n : ie.uniqueSort(n)
            }

            function s(e, t, n) {
                var r, i, o, a = [],
                    s = 0,
                    l = _.exec(e),
                    u = !l.pop() && !l.pop(),
                    c = u && e.match(O) || [""],
                    f = oe.preFilter,
                    p = oe.filter,
                    d = !n && t !== h;
                for (;
                    (i = c[s]) != null && u; s++) {
                    a.push(r = []), d && (i = " " + i);
                    while (i) {
                        u = !1;
                        if (l = M.exec(i)) i = i.slice(l[0].length), u = r.push({
                            part: l.pop().replace(F, " "),
                            captures: l
                        });
                        for (o in p)(l = z[o].exec(i)) && (!f[o] || (l = f[o](l, t, n))) && (i = i.slice(l.shift().length), u = r.push({
                            part: o,
                            captures: l
                        }));
                        if (!u) break
                    }
                }
                return u || ie.error(e), a
            }

            function a(o, e, t) {
                var a = e.dir,
                    s = g++;
                return o || (o = function(e) {
                    return e === t
                }), e.first ? function(e, t) {
                    while (e = e[a])
                        if (e.nodeType === 1) return o(e, t) && e
                } : function(e, t) {
                    var n, r = s + "." + T,
                        i = r + "." + w;
                    while (e = e[a])
                        if (e.nodeType === 1) {
                            if ((n = e[m]) === i) return e.sizset;
                            if (typeof n == "string" && n.indexOf(r) === 0) {
                                if (e.sizset) return e
                            } else {
                                e[m] = i;
                                if (o(e, t)) return e.sizset = !0, e;
                                e.sizset = !1
                            }
                        }
                }
            }

            function l(r, i) {
                return r ? function(e, t) {
                    var n = i(e, t);
                    return n && r(n === !0 ? e : n, t)
                } : i
            }

            function u(e, t, n) {
                var r, i, o = 0;
                for (; r = e[o]; o++) oe.relative[r.part] ? i = a(i, oe.relative[r.part], t) : (r.captures.push(t, n), i = l(i, oe.filter[r.part].apply(null, r.captures)));
                return i
            }

            function c(i) {
                return function(e, t) {
                    var n, r = 0;
                    for (; n = i[r]; r++)
                        if (n(e, t)) return !0;
                    return !1
                }
            }
            var w, T, r, f, n, h = e.document,
                p = h.documentElement,
                i = "undefined",
                d = !1,
                o = !0,
                g = 0,
                N = [].slice,
                C = [].push,
                m = ("sizcache" + Math.random()).replace(".", ""),
                E = "[\\x20\\t\\r\\n\\f]",
                t = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                k = t.replace("w", "w#"),
                S = "([*^$|!~]?=)",
                A = "\\[" + E + "*(" + t + ")" + E + "*(?:" + S + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + k + ")|)|)" + E + "*\\]",
                j = ":(" + t + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
                D = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
                L = E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*",
                H = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + A + "|" + j.replace(2, 7) + "|[^\\\\(),])+",
                F = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                M = new RegExp("^" + L),
                O = new RegExp(H + "?(?=" + E + "*,|$)", "g"),
                _ = new RegExp("^(?:(?!,)(?:(?:^|,)" + E + "*" + H + ")*?|" + E + "*(.*?))(\\)|$)"),
                q = new RegExp(H.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + L, "g"),
                B = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                W = /[\x20\t\r\n\f]*[+~]/,
                P = /:not\($/,
                R = /h\d/i,
                $ = /input|select|textarea|button/i,
                I = /\\(?!\\)/g,
                z = {
                    ID: new RegExp("^#(" + t + ")"),
                    CLASS: new RegExp("^\\.(" + t + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + t + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + t.replace("[-", "[-\\*") + ")"),
                    ATTR: new RegExp("^" + A),
                    PSEUDO: new RegExp("^" + j),
                    CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                    POS: new RegExp(D, "ig"),
                    needsContext: new RegExp("^" + E + "*[>+~]|" + D, "i")
                },
                X = {},
                U = [],
                Y = {},
                J = [],
                V = function(e) {
                    return e.sizzleFilter = !0, e
                },
                G = function(t) {
                    return function(e) {
                        return e.nodeName.toLowerCase() === "input" && e.type === t
                    }
                },
                Q = function(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && e.type === n
                    }
                },
                K = function(e) {
                    var t = !1,
                        n = h.createElement("div");
                    try {
                        t = e(n)
                    } catch (T) {}
                    return n = null, t
                },
                Z = K(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                ee = K(function(e) {
                    e.id = m + 0, e.innerHTML = "<a name='" + m + "'></a><div name='" + m + "'></div>", p.insertBefore(e, p.firstChild);
                    var t = h.getElementsByName && h.getElementsByName(m).length === 2 + h.getElementsByName(m + 0).length;
                    return n = !h.getElementById(m), p.removeChild(e), t
                }),
                te = K(function(e) {
                    return e.appendChild(h.createComment("")), e.getElementsByTagName("*").length === 0
                }),
                ne = K(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== i && e.firstChild.getAttribute("href") === "#"
                }),
                re = K(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || e.getElementsByClassName("e").length === 0 ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length !== 1)
                }),
                ie = function(e, t, n, r) {
                    n = n || [], t = t || h;
                    var i, o, a, s, l = t.nodeType;
                    if (l !== 1 && l !== 9) return [];
                    if (!e || typeof e != "string") return n;
                    a = ae(t);
                    if (!a && !r)
                        if (i = B.exec(e))
                            if (s = i[1]) {
                                if (l === 9) {
                                    o = t.getElementById(s);
                                    if (!o || !o.parentNode) return n;
                                    if (o.id === s) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && se(t, o) && o.id === s) return n.push(o), n
                            } else {
                                if (i[2]) return C.apply(n, N.call(t.getElementsByTagName(e), 0)), n;
                                if ((s = i[3]) && re && t.getElementsByClassName) return C.apply(n, N.call(t.getElementsByClassName(s), 0)), n
                            }
                    return ce(e, t, n, r, a)
                },
                oe = ie.selectors = {
                    cacheLength: 50,
                    match: z,
                    order: ["ID", "TAG"],
                    attrHandle: {},
                    createPseudo: V,
                    find: {
                        ID: n ? function(e, t, n) {
                            if (typeof t.getElementById !== i && !n) {
                                var r = t.getElementById(e);
                                return r && r.parentNode ? [r] : []
                            }
                        } : function(e, t, n) {
                            if (typeof t.getElementById !== i && !n) {
                                var r = t.getElementById(e);
                                return r ? r.id === e || typeof r.getAttributeNode !== i && r.getAttributeNode("id").value === e ? [r] : v : []
                            }
                        },
                        TAG: te ? function(e, t) {
                            if (typeof t.getElementsByTagName !== i) return t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n = t.getElementsByTagName(e);
                            if (e === "*") {
                                var r, i = [],
                                    o = 0;
                                for (; r = n[o]; o++) r.nodeType === 1 && i.push(r);
                                return i
                            }
                            return n
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(I, ""), e[3] = (e[4] || e[5] || "").replace(I, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || ie.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && ie.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = e[4];
                            return z.CHILD.test(e[0]) ? null : (n && (t = _.exec(n)) && t.pop() && (e[0] = e[0].slice(0, t[0].length - n.length - 1), n = t[0].slice(0, -1)), e.splice(2, 3, n || e[3]), e)
                        }
                    },
                    filter: {
                        ID: n ? function(t) {
                            return t = t.replace(I, ""),
                                function(e) {
                                    return e.getAttribute("id") === t
                                }
                        } : function(n) {
                            return n = n.replace(I, ""),
                                function(e) {
                                    var t = typeof e.getAttributeNode !== i && e.getAttributeNode("id");
                                    return t && t.value === n
                                }
                        },
                        TAG: function(t) {
                            return t === "*" ? function() {
                                return !0
                            } : (t = t.replace(I, "").toLowerCase(), function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            })
                        },
                        CLASS: function(e) {
                            var t = X[e];
                            return t || (t = X[e] = new RegExp("(^|" + E + ")" + e + "(" + E + "|$)"), U.push(e), U.length > oe.cacheLength && delete X[U.shift()]),
                                function(e) {
                                    return t.test(e.className || typeof e.getAttribute !== i && e.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(r, i, o) {
                            return i ? function(e) {
                                var t = ie.attr(e, r),
                                    n = t + "";
                                if (t == null) return i === "!=";
                                switch (i) {
                                    case "=":
                                        return n === o;
                                    case "!=":
                                        return n !== o;
                                    case "^=":
                                        return o && n.indexOf(o) === 0;
                                    case "*=":
                                        return o && n.indexOf(o) > -1;
                                    case "$=":
                                        return o && n.substr(n.length - o.length) === o;
                                    case "~=":
                                        return (" " + n + " ").indexOf(o) > -1;
                                    case "|=":
                                        return n === o || n.substr(0, o.length + 1) === o + "-"
                                }
                            } : function(e) {
                                return ie.attr(e, r) != null
                            }
                        },
                        CHILD: function(n, e, o, a) {
                            if (n === "nth") {
                                var s = g++;
                                return function(e) {
                                    var t, n, r = 0,
                                        i = e;
                                    if (o === 1 && a === 0) return !0;
                                    t = e.parentNode;
                                    if (t && (t[m] !== s || !e.sizset)) {
                                        for (i = t.firstChild; i; i = i.nextSibling)
                                            if (i.nodeType === 1) {
                                                i.sizset = ++r;
                                                if (i === e) break
                                            }
                                        t[m] = s
                                    }
                                    return n = e.sizset - a, o === 0 ? n === 0 : n % o === 0 && n / o >= 0
                                }
                            }
                            return function(e) {
                                var t = e;
                                switch (n) {
                                    case "only":
                                    case "first":
                                        while (t = t.previousSibling)
                                            if (t.nodeType === 1) return !1;
                                        if (n === "first") return !0;
                                        t = e;
                                    case "last":
                                        while (t = t.nextSibling)
                                            if (t.nodeType === 1) return !1;
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function(e, t, n, r) {
                            var i = oe.pseudos[e] || oe.pseudos[e.toLowerCase()];
                            return i || ie.error("unsupported pseudo: " + e), i.sizzleFilter ? i(t, n, r) : i
                        }
                    },
                    pseudos: {
                        not: V(function(e, t, n) {
                            var r = ue(e.replace(F, "$1"), t, n);
                            return function(e) {
                                return !r(e)
                            }
                        }),
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function(e) {
                            return !oe.pseudos.empty(e)
                        },
                        empty: function(e) {
                            var t;
                            e = e.firstChild;
                            while (e) {
                                if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                                e = e.nextSibling
                            }
                            return !0
                        },
                        contains: V(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || le(e)).indexOf(t) > -1
                            }
                        }),
                        has: V(function(t) {
                            return function(e) {
                                return ie(t, e).length > 0
                            }
                        }),
                        header: function(e) {
                            return R.test(e.nodeName)
                        },
                        text: function(e) {
                            var t, n;
                            return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                        },
                        radio: G("radio"),
                        checkbox: G("checkbox"),
                        file: G("file"),
                        password: G("password"),
                        image: G("image"),
                        submit: Q("submit"),
                        reset: Q("reset"),
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        input: function(e) {
                            return $.test(e.nodeName)
                        },
                        focus: function(e) {
                            var t = e.ownerDocument;
                            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!e.type || !!e.href)
                        },
                        active: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t, n) {
                            return n ? e.slice(1) : [e[0]]
                        },
                        last: function(e, t, n) {
                            var r = e.pop();
                            return n ? e : [r]
                        },
                        even: function(e, t, n) {
                            var r = [],
                                i = n ? 1 : 0,
                                o = e.length;
                            for (; i < o; i = i + 2) r.push(e[i]);
                            return r
                        },
                        odd: function(e, t, n) {
                            var r = [],
                                i = n ? 0 : 1,
                                o = e.length;
                            for (; i < o; i = i + 2) r.push(e[i]);
                            return r
                        },
                        lt: function(e, t, n) {
                            return n ? e.slice(+t) : e.slice(0, +t)
                        },
                        gt: function(e, t, n) {
                            return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                        },
                        eq: function(e, t, n) {
                            var r = e.splice(+t, 1);
                            return n ? e : r
                        }
                    }
                };
            oe.setFilters.nth = oe.setFilters.eq, oe.filters = oe.pseudos, ne || (oe.attrHandle = {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            }), ee && (oe.order.push("NAME"), oe.find.NAME = function(e, t) {
                if (typeof t.getElementsByName !== i) return t.getElementsByName(e)
            }), re && (oe.order.splice(1, 0, "CLASS"), oe.find.CLASS = function(e, t, n) {
                if (typeof t.getElementsByClassName !== i && !n) return t.getElementsByClassName(e)
            });
            try {
                N.call(p.childNodes, 0)[0].nodeType
            } catch (Fe) {
                N = function(e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            var ae = ie.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                },
                se = ie.contains = p.compareDocumentPosition ? function(e, t) {
                    return !!(e.compareDocumentPosition(t) & 16)
                } : p.contains ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
                } : function(e, t) {
                    while (t = t.parentNode)
                        if (t === e) return !0;
                    return !1
                },
                le = ie.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (i === 1 || i === 9 || i === 11) {
                            if (typeof e.textContent == "string") return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += le(e)
                        } else if (i === 3 || i === 4) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += le(t);
                    return n
                };
            ie.attr = function(e, t) {
                var n, r = ae(e);
                return r || (t = t.toLowerCase()), oe.attrHandle[t] ? oe.attrHandle[t](e) : Z || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, [0, 0].sort(function() {
                return o = 0
            }), p.compareDocumentPosition ? r = function(e, t) {
                return e === t ? (d = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : (r = function(e, t) {
                if (e === t) return d = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    o = [],
                    a = e.parentNode,
                    s = t.parentNode,
                    l = a;
                if (a === s) return f(e, t);
                if (!a) return -1;
                if (!s) return 1;
                while (l) i.unshift(l), l = l.parentNode;
                l = s;
                while (l) o.unshift(l), l = l.parentNode;
                n = i.length, r = o.length;
                for (var u = 0; u < n && u < r; u++)
                    if (i[u] !== o[u]) return f(i[u], o[u]);
                return u === n ? f(e, o[u], -1) : f(i[u], t, 1)
            }, f = function(e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }), ie.uniqueSort = function(e) {
                var t, n = 1;
                if (r) {
                    d = o, e.sort(r);
                    if (d)
                        for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1)
                }
                return e
            };
            var ue = ie.compile = function(e, t, n) {
                var r, i, o, a = Y[e];
                if (a && a.context === t) return a;
                i = s(e, t, n);
                for (o = 0; r = i[o]; o++) i[o] = u(r, t, n);
                return a = Y[e] = c(i), a.context = t, a.runs = a.dirruns = 0, J.push(e), J.length > oe.cacheLength && delete Y[J.shift()], a
            };
            ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                return ie(t, null, null, [e]).length > 0
            };
            var ce = function(e, t, n, r, i) {
                e = e.replace(F, "$1");
                var o, a, s, l, u, c, f, p, d, h = e.match(O),
                    g = e.match(q),
                    m = t.nodeType;
                if (z.POS.test(e)) return y(e, t, n, r, h);
                if (r) o = N.call(r, 0);
                else if (h && h.length === 1) {
                    if (g.length > 1 && m === 9 && !i && (h = z.ID.exec(g[0]))) {
                        t = oe.find.ID(h[1], t, i)[0];
                        if (!t) return n;
                        e = e.slice(g.shift().length)
                    }
                    p = (h = W.exec(g[0])) && !h.index && t.parentNode || t, d = g.pop(), c = d.split(":not")[0];
                    for (s = 0, l = oe.order.length; s < l; s++) {
                        f = oe.order[s];
                        if (h = z[f].exec(c)) {
                            o = oe.find[f]((h[1] || "").replace(I, ""), p, i);
                            if (o == null) continue;
                            c === d && (e = e.slice(0, e.length - d.length) + c.replace(z[f], ""), e || C.apply(n, N.call(o, 0)));
                            break
                        }
                    }
                }
                if (e) {
                    a = ue(e, t, i), T = a.dirruns++, o == null && (o = oe.find.TAG("*", W.test(e) && t.parentNode || t));
                    for (s = 0; u = o[s]; s++) w = a.runs++, a(u, t) && n.push(u)
                }
                return n
            };
            h.querySelectorAll && function() {
                var r, l = ce,
                    u = /'|\\/g,
                    i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    c = [],
                    o = [":active"],
                    a = p.matchesSelector || p.mozMatchesSelector || p.webkitMatchesSelector || p.oMatchesSelector || p.msMatchesSelector;
                K(function(e) {
                    e.innerHTML = "<select><option selected></option></select>", e.querySelectorAll("[selected]").length || c.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || c.push(":checked")
                }), K(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && c.push("[*^$]=" + E + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'>", e.querySelectorAll(":enabled").length || c.push(":enabled", ":disabled")
                }), c = c.length && new RegExp(c.join("|")), ce = function(e, t, n, r, i) {
                    if (!r && !i && (!c || !c.test(e)))
                        if (t.nodeType === 9) try {
                            return C.apply(n, N.call(t.querySelectorAll(e), 0)), n
                        } catch (p) {} else if (t.nodeType === 1 && t.nodeName.toLowerCase() !== "object") {
                            var o = t.getAttribute("id"),
                                a = o || m,
                                s = W.test(e) && t.parentNode || t;
                            o ? a = a.replace(u, "\\$&") : t.setAttribute("id", a);
                            try {
                                return C.apply(n, N.call(s.querySelectorAll(e.replace(O, "[id='" + a + "'] $&")), 0)), n
                            } catch (p) {} finally {
                                o || t.removeAttribute("id")
                            }
                        }
                    return l(e, t, n, r, i)
                }, a && (K(function(e) {
                    r = a.call(e, "div");
                    try {
                        a.call(e, "[test!='']:sizzle"), o.push(oe.match.PSEUDO)
                    } catch (u) {}
                }), o = new RegExp(o.join("|")), ie.matchesSelector = function(e, t) {
                    t = t.replace(i, "='$1']");
                    if (!ae(e) && !o.test(t) && (!c || !c.test(t))) try {
                        var n = a.call(e, t);
                        if (n || r || e.document && e.document.nodeType !== 11) return n
                    } catch (p) {}
                    return ie(t, null, null, [e]).length > 0
                })
            }(), ie.attr = fe.attr, fe.find = ie, fe.expr = ie.selectors, fe.expr[":"] = fe.expr.pseudos, fe.unique = ie.uniqueSort, fe.text = ie.getText, fe.isXMLDoc = ie.isXML, fe.contains = ie.contains
        }(v);
    var Me = /Until$/,
        Oe = /^(?:parents|prev(?:Until|All))/,
        _e = /^.[^:#\[\.,]*$/,
        qe = fe.expr.match.needsContext,
        Be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        find: function(e) {
            var t, n, r, i, o, a, s = this;
            if (typeof e != "string") return fe(e).filter(function() {
                for (t = 0, n = s.length; t < n; t++)
                    if (fe.contains(s[t], this)) return !0
            });
            a = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = a.length, fe.find(e, this[t], a);
                if (t > 0)
                    for (i = r; i < a.length; i++)
                        for (o = 0; o < r; o++)
                            if (a[o] === a[i]) {
                                a.splice(i--, 1);
                                break
                            }
            }
            return a
        },
        has: function(e) {
            var t, n = fe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (fe.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(r(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(r(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? qe.test(e) ? fe(e, this.context).index(this[0]) >= 0 : fe.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = qe.test(e) || typeof e != "string" ? fe(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (a ? a.index(n) > -1 : fe.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return o = o.length > 1 ? fe.unique(o) : o, this.pushStack(o, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? fe(e, t) : fe.makeArray(e && e.nodeType ? [e] : e),
                r = fe.merge(this.get(), n);
            return this.pushStack(i(n[0]) || i(r[0]) ? r : fe.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.fn.andSelf = fe.fn.addBack, fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return fe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return fe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return t(e, "nextSibling")
        },
        prev: function(e) {
            return t(e, "previousSibling")
        },
        nextAll: function(e) {
            return fe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return fe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return fe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return fe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return fe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe.sibling(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(r, i) {
        fe.fn[r] = function(e, t) {
            var n = fe.map(this, i, e);
            return Me.test(r) || (t = e), t && typeof t == "string" && (n = fe.filter(t, n)), n = this.length > 1 && !Be[r] ? fe.unique(n) : n, this.length > 1 && Oe.test(r) && (n = n.reverse()), this.pushStack(n, r, Y.call(arguments).join(","))
        }
    }), fe.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? fe.find.matchesSelector(t[0], e) ? [t[0]] : [] : fe.find.matches(e, t)
        },
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && i.nodeType !== 9 && (n === C || i.nodeType !== 1 || !fe(i).is(n))) i.nodeType === 1 && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pe = / jQuery\d+="(?:null|\d+)"/g,
        Re = /^\s+/,
        $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        ze = /<tbody/i,
        Xe = /<|&#?\w+;/,
        Ue = /<(?:script|style|link)/i,
        Ye = /<(?:script|object|embed|option|style)/i,
        Je = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
        Ve = /^(?:checkbox|radio)$/,
        Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qe = /\/(java|ecma)script/i,
        Ke = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Ze = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        et = b(R),
        tt = et.appendChild(R.createElement("div"));
    Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, fe.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]), fe.fn.extend({
            text: function(e) {
                return fe.access(this, function(e) {
                    return e === C ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(t) {
                if (fe.isFunction(t)) return this.each(function(e) {
                    fe(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = fe(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                return fe.isFunction(n) ? this.each(function(e) {
                    fe(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = fe(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = fe.isFunction(t);
                return this.each(function(e) {
                    fe(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!i(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = fe.clean(arguments);
                    return this.pushStack(fe.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!i(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = fe.clean(arguments);
                    return this.pushStack(fe.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || fe.filter(e, [n]).length) !t && n.nodeType === 1 && (fe.cleanData(n.getElementsByTagName("*")), fe.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                return this
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && fe.cleanData(e.getElementsByTagName("*"));
                    while (e.firstChild) e.removeChild(e.firstChild)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return fe.clone(this, e, t)
                })
            },
            html: function(e) {
                return fe.access(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === C) return t.nodeType === 1 ? t.innerHTML.replace(Pe, "") : C;
                    if (typeof e == "string" && !Ue.test(e) && (fe.support.htmlSerialize || !Je.test(e)) && (fe.support.leadingWhitespace || !Re.test(e)) && !Ze[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace($e, "<$1></$2>");
                        try {
                            for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (fe.cleanData(t.getElementsByTagName("*")), t.innerHTML = e);
                            t = 0
                        } catch ($) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(r) {
                return i(this[0]) ? this.length ? this.pushStack(fe(fe.isFunction(r) ? r() : r), "replaceWith", r) : this : fe.isFunction(r) ? this.each(function(e) {
                    var t = fe(this),
                        n = t.html();
                    t.replaceWith(r.call(this, e, n))
                }) : (typeof r != "string" && (r = fe(r).detach()), this.each(function() {
                    var e = this.nextSibling,
                        t = this.parentNode;
                    fe(this).remove(), e ? fe(e).before(r) : fe(t).append(r)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(n, r, i) {
                n = [].concat.apply([], n);
                var e, t, o, a, s = 0,
                    l = n[0],
                    u = [],
                    c = this.length;
                if (!fe.support.checkClone && c > 1 && typeof l == "string" && Ge.test(l)) return this.each(function() {
                    fe(this).domManip(n, r, i)
                });
                if (fe.isFunction(l)) return this.each(function(e) {
                    var t = fe(this);
                    n[0] = l.call(this, e, r ? t.html() : C), t.domManip(n, r, i)
                });
                if (this[0]) {
                    e = fe.buildFragment(n, this, u), o = e.fragment, t = o.firstChild, o.childNodes.length === 1 && (o = t);
                    if (t) {
                        r = r && fe.nodeName(t, "tr");
                        for (a = e.cacheable || c - 1; s < c; s++) i.call(r && fe.nodeName(this[s], "table") ? f(this[s], "tbody") : this[s], s === a ? o : fe.clone(o, !0, !0))
                    }
                    o = t = null, u.length && fe.each(u, function(e, t) {
                        t.src ? fe.ajax ? fe.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : fe.error("no ajax") : fe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ke, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), fe.buildFragment = function(e, t, n) {
            var r, i, o, a = e[0];
            return t = t || R, t = (t[0] || t).ownerDocument || t[0] || t, typeof t.createDocumentFragment == "undefined" && (t = R), e.length === 1 && typeof a == "string" && a.length < 512 && t === R && a.charAt(0) === "<" && !Ye.test(a) && (fe.support.checkClone || !Ge.test(a)) && (fe.support.html5Clone || !Je.test(a)) && (i = !0, r = fe.fragments[a], o = r !== C), r || (r = t.createDocumentFragment(), fe.clean(e, t, r, n), i && (fe.fragments[a] = o && r)), {
                fragment: r,
                cacheable: i
            }
        }, fe.fragments = {}, fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(s, l) {
            fe.fn[s] = function(e) {
                var t, n = 0,
                    r = [],
                    i = fe(e),
                    o = i.length,
                    a = this.length === 1 && this[0].parentNode;
                if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && o === 1) return i[l](this[0]), this;
                for (; n < o; n++) t = (n > 0 ? this.clone(!0) : this).get(), fe(i[n])[l](t), r = r.concat(t);
                return this.pushStack(r, s, i.selector)
            }
        }), fe.extend({
            clone: function(e, t, n) {
                var r, i, o, a;
                fe.support.html5Clone || fe.isXMLDoc(e) || !Je.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(a = tt.firstChild));
                if ((!fe.support.noCloneEvent || !fe.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !fe.isXMLDoc(e)) {
                    p(e, a), r = d(e), i = d(a);
                    for (o = 0; r[o]; ++o) i[o] && p(r[o], i[o])
                }
                if (t) {
                    l(e, a);
                    if (n) {
                        r = d(e), i = d(a);
                        for (o = 0; r[o]; ++o) l(r[o], i[o])
                    }
                }
                return r = i = null, a
            },
            clean: function(e, t, n, r) {
                var i, o, a, s, l, u, c, f, p, d, h, g, m = 0,
                    y = [];
                if (!t || typeof t.createDocumentFragment == "undefined") t = R;
                for (o = t === R && et;
                    (a = e[m]) != null; m++) {
                    typeof a == "number" && (a += "");
                    if (!a) continue;
                    if (typeof a == "string")
                        if (!Xe.test(a)) a = t.createTextNode(a);
                        else {
                            o = o || b(t), c = c || o.appendChild(t.createElement("div")), a = a.replace($e, "<$1></$2>"), s = (Ie.exec(a) || ["", ""])[1].toLowerCase(), l = Ze[s] || Ze._default, u = l[0], c.innerHTML = l[1] + a + l[2];
                            while (u--) c = c.lastChild;
                            if (!fe.support.tbody) {
                                f = ze.test(a), p = s === "table" && !f ? c.firstChild && c.firstChild.childNodes : l[1] === "<table>" && !f ? c.childNodes : [];
                                for (i = p.length - 1; i >= 0; --i) fe.nodeName(p[i], "tbody") && !p[i].childNodes.length && p[i].parentNode.removeChild(p[i])
                            }!fe.support.leadingWhitespace && Re.test(a) && c.insertBefore(t.createTextNode(Re.exec(a)[0]), c.firstChild), a = c.childNodes, c = o.lastChild
                        }
                    a.nodeType ? y.push(a) : y = fe.merge(y, a)
                }
                c && (o.removeChild(c), a = c = o = null);
                if (!fe.support.appendChecked)
                    for (m = 0;
                        (a = y[m]) != null; m++) fe.nodeName(a, "input") ? x(a) : typeof a.getElementsByTagName != "undefined" && fe.grep(a.getElementsByTagName("input"), x);
                if (n) {
                    h = function(e) {
                        if (!e.type || Qe.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    };
                    for (m = 0;
                        (a = y[m]) != null; m++)
                        if (!fe.nodeName(a, "script") || !h(a)) n.appendChild(a), typeof a.getElementsByTagName != "undefined" && (g = fe.grep(fe.merge([], a.getElementsByTagName("script")), h), y.splice.apply(y, [m + 1, 0].concat(g)), m += g.length)
                }
                return y
            },
            cleanData: function(e, t) {
                var n, r, i, o, a = 0,
                    s = fe.expando,
                    l = fe.cache,
                    u = fe.support.deleteExpando,
                    c = fe.event.special;
                for (;
                    (i = e[a]) != null; a++)
                    if (t || fe.acceptData(i)) {
                        r = i[s], n = r && l[r];
                        if (n) {
                            if (n.events)
                                for (o in n.events) c[o] ? fe.event.remove(i, o) : fe.removeEvent(i, o, n.handle);
                            l[r] && (delete l[r], u ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, fe.deletedIds.push(r))
                        }
                    }
            }
        }),
        function() {
            var e, t;
            fe.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = fe.uaMatch(I.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.webkit && (t.safari = !0), fe.browser = t, fe.sub = function() {
                function n(e, t) {
                    return new n.fn.init(e, t)
                }
                fe.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function W(W, e) {
                    return e && e instanceof fe && !(e instanceof n) && (e = n(e)), fe.fn.init.call(this, W, e, t)
                }, n.fn.init.prototype = n.fn;
                var t = n(R);
                return n
            }
        }();
    var nt, rt, it, ot = /alpha\([^)]*\)/i,
        at = /opacity=([^)]*)/,
        st = /^(top|right|bottom|left)$/,
        lt = /^margin/,
        ut = new RegExp("^(" + K + ")(.*)$", "i"),
        ct = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
        ft = new RegExp("^([-+])=(" + K + ")", "i"),
        pt = {},
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ht = {
            letterSpacing: 0,
            fontWeight: 400,
            lineHeight: 1
        },
        gt = ["Top", "Right", "Bottom", "Left"],
        mt = ["Webkit", "O", "Moz", "ms"],
        yt = fe.fn.toggle;
    fe.fn.extend({
        css: function(e, t) {
            return fe.access(this, function(e, t, n) {
                return n !== C ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return o(this, !0)
        },
        hide: function() {
            return o(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return fe.isFunction(e) && fe.isFunction(t) ? yt.apply(this, arguments) : this.each(function() {
                (n ? e : m(this)) ? fe(this).show(): fe(this).hide()
            })
        }
    }), fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": fe.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var i, o, a, s = fe.camelCase(t),
                l = e.style;
            t = fe.cssProps[s] || (fe.cssProps[s] = h(l, s)), a = fe.cssHooks[t] || fe.cssHooks[s];
            if (n === C) return a && "get" in a && (i = a.get(e, !1, r)) !== C ? i : l[t];
            o = typeof n, o === "string" && (i = ft.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(fe.css(e, t)), o = "number");
            if (n == null || o === "number" && isNaN(n)) return;
            o === "number" && !fe.cssNumber[s] && (n += "px");
            if (!a || !("set" in a) || (n = a.set(e, n, r)) !== C) try {
                l[t] = n
            } catch (Y) {}
        },
        css: function(e, t, n, r) {
            var i, o, a, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = h(e.style, s)), a = fe.cssHooks[t] || fe.cssHooks[s], a && "get" in a && (i = a.get(e, !0, r)), i === C && (i = nt(e, t)), i === "normal" && t in ht && (i = ht[t]), n || r !== C ? (o = parseFloat(i), n || fe.isNumeric(o) ? o || 0 : i) : i
        },
        swap: function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = o[i];
            return r
        }
    }), v.getComputedStyle ? nt = function(e, t) {
        var n, r, i, o, a = getComputedStyle(e, null),
            s = e.style;
        return a && (n = a[t], n === "" && !fe.contains(e.ownerDocument.documentElement, e) && (n = fe.style(e, t)), ct.test(n) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = n, n = a.width, s.width = r, s.minWidth = i, s.maxWidth = o)), n
    } : R.documentElement.currentStyle && (nt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return i == null && o && o[t] && (i = o[t]), ct.test(i) && !st.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), fe.each(["height", "width"], function(e, r) {
        fe.cssHooks[r] = {
            get: function(e, t, n) {
                if (t) return e.offsetWidth !== 0 || nt(e, "display") !== "none" ? y(e, r, n) : fe.swap(e, dt, function() {
                    return y(e, r, n)
                })
            },
            set: function(e, t, n) {
                return a(e, t, n ? g(e, r, n, fe.support.boxSizing && fe.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), fe.support.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = fe.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && fe.trim(o.replace(ot, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i
        }
    }), fe(function() {
        fe.support.reliableMarginRight || (fe.cssHooks.marginRight = {
            get: function(e, t) {
                return fe.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return nt(e, "marginRight")
                })
            }
        }), !fe.support.pixelPosition && fe.fn.position && fe.each(["top", "left"], function(e, r) {
            fe.cssHooks[r] = {
                get: function(e, t) {
                    if (t) {
                        var n = nt(e, r);
                        return ct.test(n) ? fe(e).position()[r] + "px" : n
                    }
                }
            }
        })
    }), fe.expr && fe.expr.filters && (fe.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !fe.support.reliableHiddenOffsets && (e.style && e.style.display || nt(e, "display")) === "none"
    }, fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        fe.cssHooks[i + o] = {
            expand: function(e) {
                var t, n = typeof e == "string" ? e.split(" ") : [e],
                    r = {};
                for (t = 0; t < 4; t++) r[i + gt[t] + o] = n[t] || n[t - 2] || n[0];
                return r
            }
        }, lt.test(i) || (fe.cssHooks[i + o].set = a)
    });
    var vt = /%20/g,
        bt = /\[\]$/,
        xt = /\r?\n/g,
        wt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Tt = /^(?:select|textarea)/i;
    fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? fe.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Tt.test(this.nodeName) || wt.test(this.type))
            }).map(function(e, n) {
                var t = fe(this).val();
                return t == null ? null : fe.isArray(t) ? fe.map(t, function(e, t) {
                    return {
                        name: n.name,
                        value: e.replace(xt, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: t.replace(xt, "\r\n")
                }
            }).get()
        }
    }), fe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = fe.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        t === C && (t = fe.ajaxSettings && fe.ajaxSettings.traditional);
        if (fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) T(n, e[n], t, i);
        return r.join("&").replace(vt, "+")
    };
    var Nt, Ct, Et = /#.*$/,
        kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        St = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        At = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Dt = /\?/,
        Lt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ht = /([?&])_=[^&]*/,
        Ft = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Mt = fe.fn.load,
        Ot = {},
        _t = {},
        qt = ["*/"] + ["*"];
    try {
        Nt = $.href
    } catch (Zt) {
        Nt = R.createElement("a"), Nt.href = "", Nt = Nt.href
    }
    Ct = Ft.exec(Nt.toLowerCase()) || [], fe.fn.load = function(e, t, n) {
        if (typeof e != "string" && Mt) return Mt.apply(this, arguments);
        if (!this.length) return this;
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = e.slice(s, e.length), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = C) : typeof t == "object" && (i = "POST"), fe.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t,
            complete: function(e, t) {
                n && a.each(n, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, a.html(r ? fe("<div>").append(e.replace(Lt, "")).find(r) : e)
        }), this
    }, fe.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.each(["get", "post"], function(e, i) {
        fe[i] = function(e, t, n, r) {
            return fe.isFunction(t) && (r = r || n, n = t, t = C), fe.ajax({
                type: i,
                url: e,
                data: t,
                success: n,
                dataType: r
            })
        }
    }), fe.extend({
        getScript: function(e, t) {
            return fe.get(e, C, t, "script")
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? k(e, fe.ajaxSettings) : (t = e, e = fe.ajaxSettings), k(e, t), e
        },
        ajaxSettings: {
            url: Nt,
            isLocal: St.test(Ct[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": qt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": v.String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: N(Ot),
        ajaxTransport: N(_t),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, l, u = t;
                if (w === 2) return;
                w = 2, d && clearTimeout(d), p = C, f = r || "", T.readyState = e > 0 ? 4 : 0, n && (s = S(g, T, n));
                if (e >= 200 && e < 300 || e === 304) g.ifModified && (l = T.getResponseHeader("Last-Modified"), l && (fe.lastModified[c] = l), l = T.getResponseHeader("Etag"), l && (fe.etag[c] = l)), e === 304 ? (u = "notmodified", i = !0) : (i = A(g, s), u = i.state, o = i.data, a = i.error, i = !a);
                else {
                    a = u;
                    if (!u || e) u = "error", e < 0 && (e = 0)
                }
                T.status = e, T.statusText = "" + (t || u), i ? v.resolveWith(m, [o, u, T]) : v.rejectWith(m, [T, u, a]), T.statusCode(x), x = C, h && y.trigger("ajax" + (i ? "Success" : "Error"), [T, g, i ? o : a]), b.fireWith(m, [T, u]), h && (y.trigger("ajaxComplete", [T, g]), --fe.active || fe.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (t = e, e = C), t = t || {};
            var c, f, r, p, d, i, h, o, g = fe.ajaxSetup({}, t),
                m = g.context || g,
                y = m !== g && (m.nodeType || m instanceof fe) ? fe(m) : fe.event,
                v = fe.Deferred(),
                b = fe.Callbacks("once memory"),
                x = g.statusCode || {},
                a = {},
                s = {},
                w = 0,
                l = "canceled",
                T = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!w) {
                            var n = e.toLowerCase();
                            e = s[n] = s[n] || e, a[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return w === 2 ? f : null
                    },
                    getResponseHeader: function(e) {
                        var t;
                        if (w === 2) {
                            if (!r) {
                                r = {};
                                while (t = kt.exec(f)) r[t[1].toLowerCase()] = t[2]
                            }
                            t = r[e.toLowerCase()]
                        }
                        return t === C ? null : t
                    },
                    overrideMimeType: function(e) {
                        return w || (g.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || l, p && p.abort(e), n(0, e), this
                    }
                };
            v.promise(T), T.success = T.done, T.error = T.fail, T.complete = b.add, T.statusCode = function(e) {
                if (e) {
                    var t;
                    if (w < 2)
                        for (t in e) x[t] = [x[t], e[t]];
                    else t = e[T.status], T.always(t)
                }
                return this
            }, g.url = ((e || g.url) + "").replace(Et, "").replace(jt, Ct[1] + "//"), g.dataTypes = fe.trim(g.dataType || "*").toLowerCase().split(ee), g.crossDomain == null && (i = Ft.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] == Ct[1] && i[2] == Ct[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (Ct[3] || (Ct[1] === "http:" ? 80 : 443)))), g.data && g.processData && typeof g.data != "string" && (g.data = fe.param(g.data, g.traditional)), E(Ot, g, t, T);
            if (w === 2) return T;
            h = g.global, g.type = g.type.toUpperCase(), g.hasContent = !At.test(g.type), h && fe.active++ === 0 && fe.event.trigger("ajaxStart");
            if (!g.hasContent) {
                g.data && (g.url += (Dt.test(g.url) ? "&" : "?") + g.data, delete g.data), c = g.url;
                if (g.cache === !1) {
                    var u = fe.now(),
                        N = g.url.replace(Ht, "$1_=" + u);
                    g.url = N + (N === g.url ? (Dt.test(g.url) ? "&" : "?") + "_=" + u : "")
                }
            }(g.data && g.hasContent && g.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), g.ifModified && (c = c || g.url, fe.lastModified[c] && T.setRequestHeader("If-Modified-Since", fe.lastModified[c]), fe.etag[c] && T.setRequestHeader("If-None-Match", fe.etag[c])), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + qt + "; q=0.01" : "") : g.accepts["*"]);
            for (o in g.headers) T.setRequestHeader(o, g.headers[o]);
            if (!g.beforeSend || g.beforeSend.call(m, T, g) !== !1 && w !== 2) {
                l = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[o](g[o]);
                p = E(_t, g, t, T);
                if (!p) n(-1, "No Transport");
                else {
                    T.readyState = 1, h && y.trigger("ajaxSend", [T, g]), g.async && g.timeout > 0 && (d = setTimeout(function() {
                        T.abort("timeout")
                    }, g.timeout));
                    try {
                        w = 1, p.send(a, n)
                    } catch (ue) {
                        if (w < 2) n(-1, ue);
                        else throw ue
                    }
                }
                return T
            }
            return T.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Bt = [],
        Wt = /\?/,
        Pt = /(=)\?(?=&|$)|\?\?/,
        Rt = fe.now();
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || fe.expando + "_" + Rt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = e.data,
            s = e.url,
            l = e.jsonp !== !1,
            u = l && Pt.test(s),
            c = l && !u && typeof a == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(a);
        if (e.dataTypes[0] === "jsonp" || u || c) return r = e.jsonpCallback = fe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, i = v[r], u ? e.url = s.replace(Pt, "$1" + r) : c ? e.data = a.replace(Pt, "$1" + r) : l && (e.url += (Wt.test(s) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || fe.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", v[r] = function() {
            o = arguments
        }, n.always(function() {
            v[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Bt.push(r)), o && fe.isFunction(i) && i(o[0]), o = i = C
        }), "script"
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        e.cache === C && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
            return {
                send: function(e, n) {
                    r = R.createElement("script"), r.async = "async", t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        if (t || !r.readyState || /loaded|complete/.test(r.readyState)) r.onload = r.onreadystatechange = null, i && r.parentNode && i.removeChild(r), r = C, t || n(200, "success")
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(0, 1)
                }
            }
        }
    });
    var $t, It = v.ActiveXObject ? function() {
            for (var e in $t) $t[e](0, 1)
        } : !1,
        zt = 0;
    fe.ajaxSettings.xhr = v.ActiveXObject ? function() {
            return !this.isLocal && j() || D()
        } : j,
        function(e) {
            fe.extend(fe.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(fe.ajaxSettings.xhr()), fe.support.ajax && fe.ajaxTransport(function(c) {
            if (!c.crossDomain || fe.support.cors) {
                var f;
                return {
                    send: function(e, s) {
                        var l, t, u = c.xhr();
                        c.username ? u.open(c.type, c.url, c.async, c.username, c.password) : u.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (t in c.xhrFields) u[t] = c.xhrFields[t];
                        c.mimeType && u.overrideMimeType && u.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (t in e) u.setRequestHeader(t, e[t])
                        } catch (U) {}
                        u.send(c.hasContent && c.data || null), f = function(e, t) {
                            var n, r, i, o, a;
                            try {
                                if (f && (t || u.readyState === 4)) {
                                    f = C, l && (u.onreadystatechange = fe.noop, It && delete $t[l]);
                                    if (t) u.readyState !== 4 && u.abort();
                                    else {
                                        n = u.status, i = u.getAllResponseHeaders(), o = {}, a = u.responseXML, a && a.documentElement && (o.xml = a);
                                        try {
                                            o.text = u.responseText
                                        } catch (e) {}
                                        try {
                                            r = u.statusText
                                        } catch (G) {
                                            r = ""
                                        }!n && c.isLocal && !c.crossDomain ? n = o.text ? 200 : 404 : n === 1223 && (n = 204)
                                    }
                                }
                            } catch (Q) {
                                t || s(-1, Q)
                            }
                            o && s(n, r, o, i)
                        }, c.async ? u.readyState === 4 ? setTimeout(f, 0) : (l = ++zt, It && ($t || ($t = {}, fe(v).unload(It)), $t[l] = f), u.onreadystatechange = f) : f()
                    },
                    abort: function() {
                        f && f(0, 1)
                    }
                }
            }
        });
    var Xt, Ut, Yt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([-+])=|)(" + K + ")([a-z%]*)$", "i"),
        Vt = /queueHooks$/,
        Gt = [O],
        Qt = {
            "*": [function(e, t) {
                var n, r, i, o = this.createTween(e, t),
                    a = Jt.exec(t),
                    s = o.cur(),
                    l = +s || 0,
                    u = 1;
                if (a) {
                    n = +a[2], r = a[3] || (fe.cssNumber[e] ? "" : "px");
                    if (r !== "px" && l) {
                        l = fe.css(o.elem, e, !0) || n || 1;
                        do {
                            i = u = u || ".5", l = l / u, fe.style(o.elem, e, l + r), u = o.cur() / s
                        } while (u !== 1 && u !== i)
                    }
                    o.unit = r, o.start = l, o.end = a[1] ? l + (a[1] + 1) * n : n
                }
                return o
            }]
        };
    fe.Animation = fe.extend(F, {
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Qt[n] = Qt[n] || [], Qt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gt.unshift(e) : Gt.push(e)
        }
    }), fe.Tween = _, _.prototype = {
        constructor: _,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = fe.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : e.elem.style && (e.elem.style[fe.cssProps[e.prop]] != null || fe.cssHooks[e.prop]) ? fe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.each(["toggle", "show", "hide"], function(r, i) {
        var o = fe.fn[i];
        fe.fn[i] = function(e, t, n) {
            return e == null || typeof e == "boolean" || !r && fe.isFunction(e) && fe.isFunction(t) ? o.apply(this, arguments) : this.animate(q(i, !0), e, t, n)
        }
    }), fe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(m).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = fe.isEmptyObject(t),
                o = fe.speed(e, n, r),
                a = function() {
                    var e = F(this, fe.extend({}, t), o);
                    i && e.stop(!0)
                };
            return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return typeof i != "string" && (o = e, e = i, i = C), e && i !== !1 && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = i != null && i + "queueHooks",
                    n = fe.timers,
                    r = fe._data(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Vt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem === this && (i == null || n[t].queue === i) && (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                (e || !o) && fe.dequeue(this, i)
            })
        }
    }), fe.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        fe.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), fe.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        r.duration = fe.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            fe.isFunction(r.old) && r.old.call(this), r.queue && fe.dequeue(this, r.queue)
        }, r
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, fe.timers = [], fe.fx = _.prototype.init, fe.fx.tick = function() {
        var e, t = fe.timers,
            n = 0;
        for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
        t.length || fe.fx.stop()
    }, fe.fx.timer = function(e) {
        e() && fe.timers.push(e) && !Ut && (Ut = setInterval(fe.fx.tick, fe.fx.interval))
    }, fe.fx.interval = 13, fe.fx.stop = function() {
        clearInterval(Ut), Ut = null
    }, fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fe.fx.step = {}, fe.expr && fe.expr.filters && (fe.expr.filters.animated = function(t) {
        return fe.grep(fe.timers, function(e) {
            return t === e.elem
        }).length
    });
    var Kt = /^(?:body|html)$/i;
    fe.fn.offset = function(t) {
        if (arguments.length) return t === C ? this : this.each(function(e) {
            fe.offset.setOffset(this, t, e)
        });
        var e, n, r, i, o, a, s, l, u, c, f = this[0],
            p = f && f.ownerDocument;
        if (!p) return;
        return (r = p.body) === f ? fe.offset.bodyOffset(f) : (n = p.documentElement, fe.contains(n, f) ? (e = f.getBoundingClientRect(), i = B(p), o = n.clientTop || r.clientTop || 0, a = n.clientLeft || r.clientLeft || 0, s = i.pageYOffset || n.scrollTop, l = i.pageXOffset || n.scrollLeft, u = e.top + s - o, c = e.left + l - a, {
            top: u,
            left: c
        }) : {
            top: 0,
            left: 0
        })
    }, fe.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return fe.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(fe.css(e, "marginTop")) || 0, n += parseFloat(fe.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = fe.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = fe(e),
                o = i.offset(),
                a = fe.css(e, "top"),
                s = fe.css(e, "left"),
                l = (r === "absolute" || r === "fixed") && fe.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                f, p;
            l ? (c = i.position(), f = c.top, p = c.left) : (f = parseFloat(a) || 0, p = parseFloat(s) || 0), fe.isFunction(t) && (t = t.call(e, n, o)), t.top != null && (u.top = t.top - o.top + f), t.left != null && (u.left = t.left - o.left + p), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, fe.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Kt.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(fe.css(e, "marginTop")) || 0, n.left -= parseFloat(fe.css(e, "marginLeft")) || 0, r.top += parseFloat(fe.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(fe.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || R.body;
                while (e && !Kt.test(e.nodeName) && fe.css(e, "position") === "static") e = e.offsetParent;
                return e || R.body
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        fe.fn[t] = function(e) {
            return fe.access(this, function(e, t, n) {
                var r = B(e);
                if (n === C) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? fe(r).scrollLeft() : n, o ? n : fe(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        fe.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            fe.fn[e] = function(e, t) {
                var n = arguments.length && (r || typeof e != "boolean"),
                    i = r || (e === !0 || t === !0 ? "margin" : "border");
                return fe.access(this, function(e, t, n) {
                    var r;
                    return fe.isWindow(e) ? e.document.documentElement["client" + o] : e.nodeType === 9 ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === C ? fe.css(e, t, n, i) : fe.style(e, t, n, i)
                }, a, n ? e : C, n)
            }
        })
    }), v.jQuery = v.$ = fe, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return fe
    })
})(window);