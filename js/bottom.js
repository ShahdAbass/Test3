function doAct(e) {
    var t = document.getElementById("nav");
    var i = document.getElementById("smdaohang");
    c = e.className;
    if (c != null && c.indexOf(" ") > -1) {
        e.className = c.replace(" ", "");
        t.className = t.className.replace("navh", "");
        i.className = i.className.replace(" smdaohangh", "")
    } else {
        e.className = c + " ";
        t.className = t.className + "navh";
        i.className = i.className + " smdaohangh"
    }
}(function(o) {
    o.fn.extend({
        accordion: function(e) {
            var t = {
                accordion: "true",
                speed: 300,
                closedSign: "[+]",
                openedSign: "[-]"
            };
            var n = o.extend(t, e);
            var i = o(this);
            i.find("li").each(function() {
                if (o(this).find("ul").size() != 0) {
                    o(this).prepend("<span class='shizi'></span>")
                }
            });
            i.find("li.active").each(function() {
                o(this).parents("ul").slideDown(n.speed);
                o(this).parents("ul").parent("li").find("span:first").attr("class", "yizi")
            });
            i.find("li span").click(function() {
                if (o(this).parent().find("ul").size() != 0) {
                    if (n.accordion) {
                        if (!o(this).parent().find("ul").is(":visible")) {
                            parents = o(this).parent().parents("ul");
                            visible = i.find("ul:visible");
                            visible.each(function(t) {
                                var i = true;
                                parents.each(function(e) {
                                    if (parents[e] == visible[t]) {
                                        i = false;
                                        return false
                                    }
                                });
                                if (i) {
                                    if (o(this).parent().find("ul") != visible[t]) {
                                        o(visible[t]).slideUp(n.speed, function() {
                                            o(this).parent("li").find("span:first").attr("class", "yizi")
                                        })
                                    }
                                }
                            })
                        }
                    }
                    if (o(this).parent().find("ul:first").is(":visible")) {
                        o(this).parent().find("ul:first").slideUp(n.speed, function() {
                            o(this).parent("li").find("span:first").delay(n.speed).attr("class", "shizi")
                        })
                    } else {
                        o(this).parent().find("ul:first").slideDown(n.speed, function() {
                            o(this).parent("li").find("span:first").delay(n.speed).attr("class", "yizi")
                        })
                    }
                }
            })
        }
    })
})(jQuery);
$(document).ready(function() {
    $(".topnav").accordion({
        accordion: false,
        speed: 500,
        closedSign: "[+]",
        openedSign: "[-]"
    })
});
$(".yvzhonga").click(function(e) {
    e.preventDefault();
    var t = $(".yvul");
    if (t.is(":hidden")) {
        t.show()
    } else {
        t.hide()
    }
});
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.scrollReveal = t()
}(this, function() {
    return window.scrollReveal = function(s) {
        "use strict";

        function e(e) {
            this.docElem = s.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = {}, 1 == this.options.init && this.init()
        }
        var n = 1,
            o = function() {
                return s.requestAnimationFrame || s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || function(e) {
                    s.setTimeout(e, 1e3 / 60)
                }
            }();
        return e.prototype = {
            defaults: {
                after: "0s",
                enter: "bottom",
                move: "24px",
                over: "0.66s",
                easing: "ease-in-out",
                opacity: 0,
                viewportFactor: .33,
                reset: !1,
                init: !0
            },
            init: function() {
                this.scrolled = !1;
                var i = this;
                this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function(e) {
                    var t = e.getAttribute("data-scroll-reveal-id");
                    t || (t = n++, e.setAttribute("data-scroll-reveal-id", t)), i.styleBank[t] || (i.styleBank[t] = e.getAttribute("style")), i.update(e)
                });
                var e = function() {
                        i.scrolled || (i.scrolled = !0, o(function() {
                            i._scrollPage()
                        }))
                    },
                    t = function() {
                        function e() {
                            i._scrollPage(), i.resizeTimeout = null
                        }
                        i.resizeTimeout && clearTimeout(i.resizeTimeout), i.resizeTimeout = setTimeout(e, 200)
                    };
                s.addEventListener("scroll", e, !1), s.addEventListener("resize", t, !1)
            },
            _scrollPage: function() {
                var t = this;
                this.elems.forEach(function(e) {
                    t.update(e)
                }), this.scrolled = !1
            },
            parseLanguage: function(e) {
                function t(e) {
                    var t = [],
                        i = ["from", "the", "and", "then", "but", "with"];
                    return e.forEach(function(e) {
                        i.indexOf(e) > -1 || t.push(e)
                    }), t
                }
                var i = e.getAttribute("data-scroll-reveal").split(/[, ]+/),
                    n = {};
                return i = t(i), i.forEach(function(e, t) {
                    switch (e) {
                        case "enter":
                            return void(n.enter = i[t + 1]);
                        case "after":
                            return void(n.after = i[t + 1]);
                        case "wait":
                            return void(n.after = i[t + 1]);
                        case "move":
                            return void(n.move = i[t + 1]);
                        case "ease":
                            return n.move = i[t + 1], void(n.ease = "ease");
                        case "ease-in":
                            return n.move = i[t + 1], void(n.easing = "ease-in");
                        case "ease-in-out":
                            return n.move = i[t + 1], void(n.easing = "ease-in-out");
                        case "ease-out":
                            return n.move = i[t + 1], void(n.easing = "ease-out");
                        case "over":
                            return void(n.over = i[t + 1]);
                        default:
                            return
                    }
                }), n
            },
            update: function(e) {
                var t = this.genCSS(e),
                    i = this.styleBank[e.getAttribute("data-scroll-reveal-id")];
                return null != i ? i += ";" : i = "", e.getAttribute("data-scroll-reveal-initialized") || (e.setAttribute("style", i + t.initial), e.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(e, this.options.viewportFactor) ? e.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(e, this.options.viewportFactor) ? (e.setAttribute("style", i + t.target + t.transition), void(this.options.reset || setTimeout(function() {
                    "" != i ? e.setAttribute("style", i) : e.removeAttribute("style"), e.setAttribute("data-scroll-reveal-complete", !0)
                }, t.totalDuration))) : void 0 : void(this.options.reset && e.setAttribute("style", i + t.initial + t.reset))
            },
            genCSS: function(e) {
                var t, i, n = this.parseLanguage(e);
                n.enter ? (("top" == n.enter || "bottom" == n.enter) && (t = n.enter, i = "y"), ("left" == n.enter || "right" == n.enter) && (t = n.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (t = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (t = this.options.enter, i = "x")), ("top" == t || "left" == t) && (n.move = n.move ? "-" + n.move : "-" + this.options.move);
                var o = n.move || this.options.move,
                    r = n.over || this.options.over,
                    a = n.after || this.options.after,
                    s = n.easing || this.options.easing,
                    l = n.opacity || this.options.opacity,
                    f = "-webkit-transition: -webkit-transform " + r + " " + s + " " + a + ",  opacity " + r + " " + s + " " + a + ";transition: transform " + r + " " + s + " " + a + ", opacity " + r + " " + s + " " + a + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    c = "-webkit-transition: -webkit-transform " + r + " " + s + " 0s,  opacity " + r + " " + s + " " + a + ";transition: transform " + r + " " + s + " 0s,  opacity " + r + " " + s + " " + a + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    d = "-webkit-transform: translate" + i + "(" + o + ");transform: translate" + i + "(" + o + ");opacity: " + l + ";",
                    u = "-webkit-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
                return {
                    transition: f,
                    initial: d,
                    target: u,
                    reset: c,
                    totalDuration: 1e3 * (parseFloat(r) + parseFloat(a))
                }
            },
            getViewportH: function() {
                var e = this.docElem.clientHeight,
                    t = s.innerHeight;
                return t > e ? t : e
            },
            getOffset: function(e) {
                var t = 0,
                    i = 0;
                do {
                    isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (i += e.offsetLeft)
                } while (e = e.offsetParent);
                return {
                    top: t,
                    left: i
                }
            },
            isElementInViewport: function(e, t) {
                var i = s.pageYOffset,
                    n = i + this.getViewportH(),
                    o = e.offsetHeight,
                    r = this.getOffset(e).top,
                    a = r + o,
                    t = t || 0;
                return n >= r + o * t && a >= i || "fixed" == (e.currentStyle ? e.currentStyle : s.getComputedStyle(e, null)).position
            },
            extend: function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
            }
        }, e
    }(window), scrollReveal
});
if (window.screen.width >= 1e3) {
    (function(e) {
        "use strict";
        window.scrollReveal = new scrollReveal({
            move: "50px"
        })
    })();
    try {
        Typekit.load()
    } catch (e) {}
}
$(window).scroll(function() {
    if ($(this).scrollTop() >= 120) {
        $(".top").addClass("bottom")
    } else {
        $(".top").removeClass("bottom")
    }
});
$(".top").click(function() {
    $(window).scrollTop(0)
});
$(function() {
    if (!placeholderSupport()) {
        $("[placeholder]").focus(function() {
            var e = $(this);
            if (e.val() == e.attr("placeholder")) {
                e.val("");
                e.removeClass("placeholder")
            }
        }).blur(function() {
            var e = $(this);
            if (e.val() == "" || e.val() == e.attr("placeholder")) {
                e.addClass("placeholder");
                e.val(e.attr("placeholder"))
            }
        }).blur()
    }
});

function placeholderSupport() {
    return "placeholder" in document.createElement("input")
}! function(s, n, o, l) {
    var f = s(n);
    s.fn.lazyload = function(e) {
        function t() {
            var t = 0;
            r.each(function() {
                var e = s(this);
                if (!a.skip_invisible || e.is(":visible"))
                    if (s.abovethetop(this, a) || s.leftofbegin(this, a));
                    else if (s.belowthefold(this, a) || s.rightoffold(this, a)) {
                    if (++t > a.failure_limit) return !1
                } else e.trigger("appear"), t = 0
            })
        }
        var i, r = this,
            a = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: n,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return e && (l !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), l !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), s.extend(a, e)), i = a.container === l || a.container === n ? f : s(a.container), 0 === a.event.indexOf("scroll") && i.bind(a.event, function() {
            return t()
        }), this.each(function() {
            var n = this,
                o = s(n);
            n.loaded = !1, (o.attr("src") === l || o.attr("src") === !1) && o.is("img") && o.attr("src", a.placeholder), o.one("appear", function() {
                if (!this.loaded) {
                    if (a.appear) {
                        var e = r.length;
                        a.appear.call(n, e, a)
                    }
                    s("<img />").bind("load", function() {
                        var e = o.attr("data-" + a.data_attribute);
                        o.hide(), o.is("img") ? o.attr("src", e) : o.css("background-image", "url('" + e + "')"), o[a.effect](a.effect_speed), n.loaded = !0;
                        var t = s.grep(r, function(e) {
                            return !e.loaded
                        });
                        if (r = s(t), a.load) {
                            var i = r.length;
                            a.load.call(n, i, a)
                        }
                    }).attr("src", o.attr("data-" + a.data_attribute))
                }
            }), 0 !== a.event.indexOf("scroll") && o.bind(a.event, function() {
                n.loaded || o.trigger("appear")
            })
        }), f.bind("resize", function() {
            t()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && f.bind("pageshow", function(e) {
            e.originalEvent && e.originalEvent.persisted && r.each(function() {
                s(this).trigger("appear")
            })
        }), s(o).ready(function() {
            t()
        }), this
    }, s.belowthefold = function(e, t) {
        var i;
        return i = t.container === l || t.container === n ? (n.innerHeight ? n.innerHeight : f.height()) + f.scrollTop() : s(t.container).offset().top + s(t.container).height(), i <= s(e).offset().top - t.threshold
    }, s.rightoffold = function(e, t) {
        var i;
        return i = t.container === l || t.container === n ? f.width() + f.scrollLeft() : s(t.container).offset().left + s(t.container).width(), i <= s(e).offset().left - t.threshold
    }, s.abovethetop = function(e, t) {
        var i;
        return i = t.container === l || t.container === n ? f.scrollTop() : s(t.container).offset().top, i >= s(e).offset().top + t.threshold + s(e).height()
    }, s.leftofbegin = function(e, t) {
        var i;
        return i = t.container === l || t.container === n ? f.scrollLeft() : s(t.container).offset().left, i >= s(e).offset().left + t.threshold + s(e).width()
    }, s.inviewport = function(e, t) {
        return !(s.rightoffold(e, t) || s.leftofbegin(e, t) || s.belowthefold(e, t) || s.abovethetop(e, t))
    }, s.extend(s.expr[":"], {
        "below-the-fold": function(e) {
            return s.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return !s.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return s.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return !s.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return s.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return !s.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return s.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return !s.rightoffold(e, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);
$(".nlazy").lazyload({
    effect: "fadeIn"
});
if (window.screen.width <= 767) {
    $(function() {
        $(".j-nextshow").click(function(e) {
            e.preventDefault();
            var t = $(this),
                i = t.next();
            if (i.is(":hidden")) {
                i.slideDown()
            } else {
                i.slideUp()
            }
        })
    })
}
$("table").wrap("<div class='table'></div>");
$(".sou2").click(function(e) {
    e.preventDefault();
    var t = $(".sousuo");
    if (t.is(".sousuof")) {
        t.removeClass("sousuof")
    } else {
        if (t.not(".sousuof")) {
            t.addClass("sousuof")
        }
    }
});