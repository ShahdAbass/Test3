! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(d) {
    "use strict";
    var r = window.Slick || {};
    r = function() {
        function i(i, e) {
            var t, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(i),
                appendDots: d(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(i, e) {
                    return d('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, d.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = d(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, t = d(i).data("slick") || {}, s.options = d.extend({}, s.defaults, e, t), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = d.proxy(s.autoPlay, s), s.autoPlayClear = d.proxy(s.autoPlayClear, s), s.autoPlayIterator = d.proxy(s.autoPlayIterator, s), s.changeSlide = d.proxy(s.changeSlide, s), s.clickHandler = d.proxy(s.clickHandler, s), s.selectHandler = d.proxy(s.selectHandler, s), s.setPosition = d.proxy(s.setPosition, s), s.swipeHandler = d.proxy(s.swipeHandler, s), s.dragHandler = d.proxy(s.dragHandler, s), s.keyHandler = d.proxy(s.keyHandler, s), s.instanceUid = o++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
        var o = 0;
        return i
    }(), r.prototype.activateADA = function() {
        var i = this;
        i.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(i, e, t) {
        var s = this;
        if ("boolean" == typeof e) t = e, e = null;
        else if (0 > e || e >= s.slideCount) return !1;
        s.unload(), "number" == typeof e ? 0 === e && 0 === s.$slides.length ? d(i).appendTo(s.$slideTrack) : t ? d(i).insertBefore(s.$slides.eq(e)) : d(i).insertAfter(s.$slides.eq(e)) : t === !0 ? d(i).prependTo(s.$slideTrack) : d(i).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(i, e) {
            d(e).attr("data-slick-index", i)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, r.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, r.prototype.animateSlide = function(i, e) {
        var t = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (i = -i), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
            left: i
        }, s.options.speed, s.options.easing, e) : s.$slideTrack.animate({
            top: i
        }, s.options.speed, s.options.easing, e) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), d({
            animStart: s.currentLeft
        }).animate({
            animStart: i
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), s.options.vertical === !1 ? (t[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(t)) : (t[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(t))
            },
            complete: function() {
                e && e.call()
            }
        })) : (s.applyTransition(), i = Math.ceil(i), s.options.vertical === !1 ? t[s.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[s.animType] = "translate3d(0px," + i + "px, 0px)", s.$slideTrack.css(t), e && setTimeout(function() {
            s.disableTransition(), e.call()
        }, s.options.speed))
    }, r.prototype.getNavTarget = function() {
        var i = this,
            e = i.options.asNavFor;
        return e && null !== e && (e = d(e).not(i.$slider)), e
    }, r.prototype.asNavFor = function(e) {
        var i = this,
            t = i.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var i = d(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, r.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, r.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
    }, r.prototype.buildArrows = function() {
        var i = this;
        i.options.arrows === !0 && (i.$prevArrow = d(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = d(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var i, e, t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"), e = d("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) e.append(d("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, r.prototype.buildOut = function() {
        var i = this;
        i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, e) {
            d(e).attr("data-slick-index", i).data("originalStyling", d(e).attr("style") || "")
        }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? d('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), (i.options.centerMode === !0 || i.options.swipeToSlide === !0) && (i.options.slidesToScroll = 1), d("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.options.draggable === !0 && i.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var i, e, t, s, o, n, r, l = this;
        if (s = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, o = Math.ceil(n.length / r), i = 0; o > i; i++) {
                var a = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var d = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    a.appendChild(d)
                }
                s.appendChild(a)
            }
            l.$slider.empty().append(s), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(i, e) {
        var t, s, o, n = this,
            r = !1,
            l = n.$slider.width(),
            a = window.innerWidth || d(window).width();
        if ("window" === n.respondTo ? o = a : "slider" === n.respondTo ? o = l : "min" === n.respondTo && (o = Math.min(a, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            s = null;
            for (t in n.breakpoints) n.breakpoints.hasOwnProperty(t) && (n.originalSettings.mobileFirst === !1 ? o < n.breakpoints[t] && (s = n.breakpoints[t]) : o > n.breakpoints[t] && (s = n.breakpoints[t]));
            null !== s ? null !== n.activeBreakpoint ? (s !== n.activeBreakpoint || e) && (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), i === !0 && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = s) : (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), i === !0 && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = s) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, i === !0 && (n.currentSlide = n.options.initialSlide), n.refresh(i), r = s), i || r === !1 || n.$slider.trigger("breakpoint", [n, r])
        }
    }, r.prototype.changeSlide = function(i, e) {
        var t, s, o, n = this,
            r = d(i.currentTarget);
        switch (r.is("a") && i.preventDefault(), r.is("li") || (r = r.closest("li")), o = n.slideCount % n.options.slidesToScroll !== 0, t = o ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, i.data.message) {
            case "previous":
                s = 0 === t ? n.options.slidesToScroll : n.options.slidesToShow - t, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, e);
                break;
            case "next":
                s = 0 === t ? n.options.slidesToScroll : t, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, e);
                break;
            case "index":
                var l = 0 === i.data.index ? 0 : i.data.index || r.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(l), !1, e), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(i) {
        var e, t, s = this;
        if (e = s.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, r.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && d("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", d.proxy(i.interrupt, i, !0)).off("mouseleave.slick", d.proxy(i.interrupt, i, !1)), i.$slider.off("focus.slick blur.slick"), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), d(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && d(i.$slideTrack).children().off("click.slick", i.selectHandler), d(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), d(window).off("resize.slick.slick-" + i.instanceUid, i.resize), d("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), d(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), d(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", d.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", d.proxy(i.interrupt, i, !1))
    }, r.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
    }, r.prototype.clickHandler = function(i) {
        var e = this;
        e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, r.prototype.destroy = function(i) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            d(this).attr("style", d(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, i || e.$slider.trigger("destroy", [e])
    }, r.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, r.prototype.fadeSlide = function(i, e) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, r.prototype.fadeSlideOut = function(i) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var e = d(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        var i = this;
        return i.currentSlide
    }, r.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            s = 0;
        if (i.options.infinite === !0)
            for (; e < i.slideCount;) ++s, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (i.options.centerMode === !0) s = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++s, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else s = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return s - 1
    }, r.prototype.getLeft = function(i) {
        var e, t, s, o = this,
            n = 0;
        return o.slideOffset = 0, t = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = t * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && i + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (i > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (i - o.slideCount)) * o.slideWidth * -1, n = (o.options.slidesToShow - (i - o.slideCount)) * t * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, n = o.slideCount % o.options.slidesToScroll * t * -1))) : i + o.options.slidesToShow > o.slideCount && (o.slideOffset = (i + o.options.slidesToShow - o.slideCount) * o.slideWidth, n = (i + o.options.slidesToShow - o.slideCount) * t), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, n = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? i * o.slideWidth * -1 + o.slideOffset : i * t * -1 + n, o.options.variableWidth === !0 && (s = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(i) : o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow), e = o.options.rtl === !0 ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, o.options.centerMode === !0 && (s = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(i) : o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (o.$list.width() - s.outerWidth()) / 2)), e
    }, r.prototype.getOption = r.prototype.slickGetOption = function(i) {
        var e = this;
        return e.options[i]
    }, r.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            s = 0,
            o = [];
        for (e.options.infinite === !1 ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); i > t;) o.push(t), t = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var i, t, s, o = this;
        return s = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(i, e) {
            return e.offsetLeft - s + d(e).outerWidth() / 2 > -1 * o.swipeLeft ? (t = e, !1) : void 0
        }), i = Math.abs(d(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(i, e) {
        var t = this;
        t.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, r.prototype.init = function(i) {
        var e = this;
        d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [e]), e.options.accessibility === !0 && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, r.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            d(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            d(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide))
    }, r.prototype.initDotEvents = function() {
        var i = this;
        i.options.dots === !0 && i.slideCount > i.options.slidesToShow && d("li", i.$dots).on("click.slick", {
            message: "index"
        }, i.changeSlide), i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && d("li", i.$dots).on("mouseenter.slick", d.proxy(i.interrupt, i, !0)).on("mouseleave.slick", d.proxy(i.interrupt, i, !1))
    }, r.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", d.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", d.proxy(i.interrupt, i, !1)))
    }, r.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), d(document).on(i.visibilityChange, d.proxy(i.visibility, i)), i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && d(i.$slideTrack).children().on("click.slick", i.selectHandler), d(window).on("orientationchange.slick.slick-" + i.instanceUid, d.proxy(i.orientationChange, i)), d(window).on("resize.slick.slick-" + i.instanceUid, d.proxy(i.resize, i)), d("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), d(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), d(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, r.prototype.initUI = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, r.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        function i(i) {
            d("img[data-lazy]", i).each(function() {
                var i = d(this),
                    e = d(this).attr("data-lazy"),
                    t = document.createElement("img");
                t.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        i.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, i, e])
                    })
                }, t.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, e])
                }, t.src = e
            })
        }
        var e, t, s, o, n = this;
        n.options.centerMode === !0 ? n.options.infinite === !0 ? (s = n.currentSlide + (n.options.slidesToShow / 2 + 1), o = s + n.options.slidesToShow + 2) : (s = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), o = 2 + (n.options.slidesToShow / 2 + 1) + n.currentSlide) : (s = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, o = Math.ceil(s + n.options.slidesToShow), n.options.fade === !0 && (s > 0 && s--, o <= n.slideCount && o++)), e = n.$slider.find(".slick-slide").slice(s, o), i(e), n.slideCount <= n.options.slidesToShow ? (t = n.$slider.find(".slick-slide"), i(t)) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? (t = n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow), i(t)) : 0 === n.currentSlide && (t = n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow), i(t))
    }, r.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        var i = this;
        i.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, r.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        var i = this;
        i.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var e, t, s, o = this,
            n = d("img[data-lazy]", o.$slider);
        n.length ? (e = n.first(), t = e.attr("data-lazy"), s = document.createElement("img"), s.onload = function() {
            e.attr("src", t).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, e, t]), o.progressiveLazyLoad()
        }, s.onerror = function() {
            3 > i ? setTimeout(function() {
                o.progressiveLazyLoad(i + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, t]), o.progressiveLazyLoad())
        }, s.src = t) : o.$slider.trigger("allImagesLoaded", [o])
    }, r.prototype.refresh = function(i) {
        var e, t, s = this;
        t = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > t && (s.currentSlide = t), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), e = s.currentSlide, s.destroy(!0), d.extend(s, s.initials, {
            currentSlide: e
        }), s.init(), i || s.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var i, e, t, s = this,
            o = s.options.responsive || null;
        if ("array" === d.type(o) && o.length) {
            s.respondTo = s.options.respondTo || "window";
            for (i in o)
                if (t = s.breakpoints.length - 1, e = o[i].breakpoint, o.hasOwnProperty(i)) {
                    for (; t >= 0;) s.breakpoints[t] && s.breakpoints[t] === e && s.breakpoints.splice(t, 1), t--;
                    s.breakpoints.push(e), s.breakpointSettings[e] = o[i].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, r.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), i.options.focusOnSelect === !0 && d(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, r.prototype.resize = function() {
        var i = this;
        d(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
            i.windowWidth = d(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(i, e, t) {
        var s = this;
        return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : s.slideCount - 1) : i = e === !0 ? --i : i, s.slideCount < 1 || 0 > i || i > s.slideCount - 1 ? !1 : (s.unload(), t === !0 ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(i).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, void s.reinit())
    }, r.prototype.setCSS = function(i) {
        var e, t, s = this,
            o = {};
        s.options.rtl === !0 && (i = -i), e = "left" == s.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == s.positionProp ? Math.ceil(i) + "px" : "0px", o[s.positionProp] = i, s.transformsEnabled === !1 ? s.$slideTrack.css(o) : (o = {}, s.cssTransitions === !1 ? (o[s.animType] = "translate(" + e + ", " + t + ")", s.$slideTrack.css(o)) : (o[s.animType] = "translate3d(" + e + ", " + t + ", 0px)", s.$slideTrack.css(o)))
    }, r.prototype.setDimensions = function() {
        var i = this;
        i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, r.prototype.setFade = function() {
        var t, s = this;
        s.$slides.each(function(i, e) {
            t = s.slideWidth * i * -1, s.options.rtl === !0 ? d(e).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0
            }) : d(e).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0
            })
        }), s.$slides.eq(s.currentSlide).css({
            zIndex: s.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var i, e, t, s, o, n = this,
            r = !1;
        if ("object" === d.type(arguments[0]) ? (t = arguments[0], r = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (t = arguments[0], s = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) n.options[t] = s;
        else if ("multiple" === o) d.each(t, function(i, e) {
            n.options[i] = e
        });
        else if ("responsive" === o)
            for (e in s)
                if ("array" !== d.type(n.options.responsive)) n.options.responsive = [s[e]];
                else {
                    for (i = n.options.responsive.length - 1; i >= 0;) n.options.responsive[i].breakpoint === s[e].breakpoint && n.options.responsive.splice(i, 1), i--;
                    n.options.responsive.push(s[e])
                }
        r && (n.unload(), n.reinit())
    }, r.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, r.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
    }, r.prototype.setSlideClasses = function(i) {
        var e, t, s, o, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0 ? (e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + i, t.slice(s - e + 1, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : t.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var i, e, t, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (e = null, s.slideCount > s.options.slidesToShow)) {
            for (t = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, i = s.slideCount; i > s.slideCount - t; i -= 1) e = i - 1, d(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (i = 0; t > i; i += 1) e = i, d(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                d(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, r.prototype.selectHandler = function(i) {
        var e = this,
            t = d(i.target).is(".slick-slide") ? d(i.target) : d(i.target).parents(".slick-slide"),
            s = parseInt(t.attr("data-slick-index"));
        return s || (s = 0), e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(s), void e.asNavFor(s)) : void e.slideHandler(s)
    }, r.prototype.slideHandler = function(i, e, t) {
        var s, o, n, r, l, a = null,
            d = this;
        return e = e || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === i || d.slideCount <= d.options.slidesToShow ? void 0 : (e === !1 && d.asNavFor(i), s = i, a = d.getLeft(s), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > i || i > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (s = d.currentSlide, t !== !0 ? d.animateSlide(r, function() {
            d.postSlide(s)
        }) : d.postSlide(s))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > i || i > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (s = d.currentSlide, t !== !0 ? d.animateSlide(r, function() {
            d.postSlide(s)
        }) : d.postSlide(s))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = 0 > s ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), n = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = d.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (t !== !0 ? (d.fadeSlideOut(n), d.fadeSlide(o, function() {
            d.postSlide(o)
        })) : d.postSlide(o), void d.animateHeight()) : void(t !== !0 ? d.animateSlide(a, function() {
            d.postSlide(o)
        }) : d.postSlide(o))))
    }, r.prototype.startLoad = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var i, e, t, s, o = this;
        return i = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, t = Math.atan2(e, i), s = Math.round(180 * t / Math.PI), 0 > s && (s = 360 - Math.abs(s)), 45 >= s && s >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= s && s >= 315 ? o.options.rtl === !1 ? "left" : "right" : s >= 135 && 225 >= s ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? s >= 35 && 135 >= s ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(i) {
        var e, t, s = this;
        if (s.dragging = !1, s.interrupted = !1, s.shouldClick = s.touchObject.swipeLength > 10 ? !1 : !0, void 0 === s.touchObject.curX) return !1;
        if (s.touchObject.edgeHit === !0 && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (t = s.swipeDirection()) {
                case "left":
                case "down":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != t && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, t]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, r.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, r.prototype.swipeMove = function(i) {
        var e, t, s, o, n, r = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !r.dragging || n && 1 !== n.length ? !1 : (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), t = r.swipeDirection(), "vertical" !== t ? (void 0 !== i.originalEvent && r.touchObject.swipeLength > 4 && i.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + s * o : r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = e + s * o), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
    }, r.prototype.swipeStart = function(i) {
        var e, t = this;
        return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, r.prototype.unload = function() {
        var i = this;
        d(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, r.prototype.updateArrows = function() {
        var i, e = this;
        i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, r.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, d.fn.slick = function() {
        var i, e, t = this,
            s = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            n = t.length;
        for (i = 0; n > i; i++)
            if ("object" == typeof s || "undefined" == typeof s ? t[i].slick = new r(t[i], s) : e = t[i].slick[s].apply(t[i].slick, o), "undefined" != typeof e) return e;
        return t
    }
});
(function(T) {
    T.fn.slide1 = function(i) {
        var e = {
            zs_lunLock: true,
            autoplay: true,
            autoTime: 4e3,
            curentImg: 0,
            height: 0,
            clickLunTime: 500
        };
        var p = T.extend(e, i);
        var u = T(this).find(".slideItem");
        var h = T(this).find(".slideItem").width();
        var t;
        var s = false;
        var f = this;
        var o = "<ul>";
        var v;
        var n = 0;
        var r = 0;
        if (p.height == 0) {
            t = setInterval(function() {
                T(f).find(".slideItem img").each(function() {
                    if (this.height === 0 && T(this).is(":visible")) {
                        s = false;
                        return false
                    } else {
                        n = n > T(this).height() ? n : T(this).height();
                        s = true
                    }
                });
                if (s) {
                    n = n > T(f).height() ? n : T(f).height();
                    clearInterval(t);
                    if (T(f).find(".slideItem").find("video").length > 0 && r == 0) {
                        r = 1
                    }
                    if (r > 0) {
                        T(f).find(".carouse").height(n - 5)
                    } else {
                        T(f).find(".carouse").height(n)
                    }
                    T(f).find(".playBtn").css("top", (n - 50) / 2);
                    d()
                }
            }, 100)
        }

        function d() {
            h = T(f).find(".slideItem").width();
            if (p.height == 0) {
                if (r > 0) {
                    T(f).find(".carouse").height(T(f).find(".slideItem").height() - 5)
                } else {
                    T(f).find(".carouse").height(T(f).find(".slideItem").height())
                }
                T(f).find(".playBtn").css("top", (T(f).find(".slideItem").height() - 50) / 2)
            } else {
                T(f).find(".carouse").height(p.height)
            }
            for (var i = 0; i < u.length; i++) {
                T(f).find(".itemIndex" + i).css("left", h * i)
            }
        }
        T(window).resize(function() {
            d()
        });
        for (var l = 0; l < u.length; l++) {
            var a = h * l;
            T(this).find(u[l]).css("left", a);
            T(this).find(u[l]).addClass("itemIndex" + l);
            o += '<li class="dot" dotIndex=' + l + "></li>";
            if (l == u.length - 1) {
                o += "</ul>";
                var c = "<p class='showLunWord'></p>";
                T(this).find(".dotList").html(o);
                T(this).find(".arti-content").html(c);
                T(this).find(".dotList ul li").first().addClass("active");
                T(f).find(".arti-content .showLunWord").html(T(f).find(u[0]).find(".slidedetail").html());
                v = T(this).find(".dot")
            }
        }
        var g = function() {
            d();
            if (p.zs_lunLock) {
                p.zs_lunLock = false;
                var i = 0;
                var e = u.length - 1;
                T(f).find(".itemIndex" + e).css("left", -h);
                for (var t = 0; t < u.length; t++) {
                    i = parseFloat(T(f).find(".itemIndex" + t).css("left")) + parseFloat(T(f).find(".slideItem").width());
                    T(f).find(".itemIndex" + t).animate({
                        left: i
                    }, 500)
                }
                for (var s = 0; s < u.length; s++) {
                    var o = T(f).find(u[s]).attr("class") + "";
                    var n = o.indexOf("itemIndex");
                    var r = o.substring(n, o.length);
                    var l = r.indexOf(" ");
                    if (l > 0) {
                        r = r.substring(9, l)
                    } else {
                        r = r.substring(9, r.length)
                    }
                    T(f).find(u[s]).removeClass("itemIndex" + r);
                    var a = parseInt(r) + 1;
                    if (a == u.length) {
                        a = 0
                    }
                    T(f).find(v[s]).removeClass("active");
                    if (a == 0) {
                        T(f).find(v[s]).addClass("active");
                        T(f).find(".arti-content .showLunWord").html(T(f).find(u[s]).find(".slidedetail").html())
                    }
                    T(f).find(u[s]).addClass("itemIndex" + a)
                }
                setTimeout(function() {
                    p.zs_lunLock = true
                }, 500)
            }
        };
        var k = function() {
            d();
            if (p.zs_lunLock) {
                p.zs_lunLock = false;
                var i = 0;
                for (var e = 0; e < u.length; e++) {
                    i = parseFloat(T(f).find(".itemIndex" + e).css("left")) - parseFloat(T(f).find(".slideItem").width());
                    T(f).find(" .itemIndex" + e).animate({
                        left: i
                    }, 500)
                }
                for (var t = 0; t < u.length; t++) {
                    var s = T(f).find(u[t]).attr("class") + "";
                    var o = s.indexOf("itemIndex");
                    var n = s.substring(o, s.length);
                    var r = n.indexOf(" ");
                    if (r > 0) {
                        n = n.substring(9, r)
                    } else {
                        n = n.substring(9, n.length)
                    }
                    T(f).find(u[t]).removeClass("itemIndex" + n);
                    var l = parseInt(n) - 1;
                    if (l == -1) {
                        l = u.length - 1
                    }
                    T(f).find(v[t]).removeClass("active");
                    if (l == 0) {
                        T(f).find(v[t]).addClass("active");
                        T(f).find(".arti-content .showLunWord").html(T(f).find(u[t]).find(".slidedetail").html())
                    }
                    T(f).find(u[t]).addClass("itemIndex" + l)
                }
                setTimeout(function() {
                    var i = parseFloat(h) * (u.length - 1);
                    T(f).find(".itemIndex" + (u.length - 1)).animate({
                        left: i
                    }, .01);
                    p.zs_lunLock = true
                }, 500)
            }
        };
        T(this).find(".Next").click(function() {
            g()
        });
        T(this).find(".Previous").click(function() {
            k()
        });
        T(this).find(".dot").click(function() {
            d();
            var i = T(this).attr("dotIndex");
            var e = "";
            for (var t = 0; t < u.length; t++) {
                var s = T(f).find(u[t]).attr("class") + "";
                if (s.indexOf("itemIndex0") > 0) {
                    e = t
                }
            }
            var o = i - e;
            if (o > 0) {
                w(o)
            } else {
                y(-o)
            }
        });
        var w = function(i) {
            if (p.zs_lunLock) {
                p.zs_lunLock = false;
                var e = 0;
                for (var t = 0; t < u.length; t++) {
                    e = parseFloat(T(f).find(".itemIndex" + t).css("left")) - i * parseFloat(T(f).find(".slideItem").width());
                    T(f).find(" .itemIndex" + t).animate({
                        left: e
                    }, p.clickLunTime)
                }
                for (var s = 0; s < u.length; s++) {
                    var o = T(f).find(u[s]).attr("class") + "";
                    var n = o.indexOf("itemIndex");
                    var r = o.substring(n, o.length);
                    var l = r.indexOf(" ");
                    if (l > 0) {
                        r = r.substring(9, l)
                    } else {
                        r = r.substring(9, r.length)
                    }
                    T(f).find(u[s]).removeClass("itemIndex" + r);
                    var a = parseInt(r) - i;
                    if (a < 0) {
                        a = u.length + a
                    }
                    T(f).find(v[s]).removeClass("active");
                    if (a == 0) {
                        T(f).find(v[s]).addClass("active");
                        T(f).find(".arti-content .showLunWord").html(T(f).find(u[s]).find(".slidedetail").html())
                    }
                    T(f).find(u[s]).addClass("itemIndex" + a)
                }
                setTimeout(function() {
                    for (var i = 0; i < u.length; i++) {
                        var e = parseFloat(h) * (u.length - 1 - i);
                        T(f).find(".itemIndex" + (u.length - 1 - i)).animate({
                            left: e
                        }, .01)
                    }
                    p.zs_lunLock = true
                }, 500)
            }
        };
        var y = function(i) {
            if (p.zs_lunLock) {
                p.zs_lunLock = false;
                var e = 0;
                var t = u.length - 1;
                for (var s = 0; s < i; s++) {
                    T(f).find(".itemIndex" + t).css("left", -h - s * h);
                    t--
                }
                for (var o = 0; o < u.length; o++) {
                    e = parseFloat(T(f).find(".itemIndex" + o).css("left")) + i * parseFloat(T(f).find(".slideItem").width());
                    T(f).find(" .itemIndex" + o).animate({
                        left: e
                    }, p.clickLunTime)
                }
                for (var n = 0; n < u.length; n++) {
                    var r = T(f).find(u[n]).attr("class") + "";
                    var l = r.indexOf("itemIndex");
                    var a = r.substring(l, r.length);
                    var d = a.indexOf(" ");
                    if (d > 0) {
                        a = a.substring(9, d)
                    } else {
                        a = a.substring(9, a.length)
                    }
                    T(f).find(u[n]).removeClass("itemIndex" + a);
                    var c = parseInt(a) + i;
                    if (c >= u.length) {
                        c = c - u.length
                    }
                    T(f).find(v[n]).removeClass("active");
                    if (c == 0) {
                        T(f).find(v[n]).addClass("active");
                        T(f).find(".arti-content .showLunWord").html(T(f).find(u[n]).find(".slidedetail").html())
                    }
                    T(f).find(u[n]).addClass("itemIndex" + c)
                }
                setTimeout(function() {
                    p.zs_lunLock = true
                }, 500)
            }
        };
        T(this).bind("touchstart", function(i) {
            startX = i.originalEvent.changedTouches[0].pageX, startY = i.originalEvent.changedTouches[0].pageY
        });
        T(this).bind("touchend", function(i) {
            endX = i.originalEvent.changedTouches[0].pageX, endY = i.originalEvent.changedTouches[0].pageY;
            distanceX = endX - startX;
            distanceY = endY - startY;
            if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
                g()
            } else {
                if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
                    k()
                }
            }
        });
        var m = setInterval(function() {
            if (p.autoplay) {
                k()
            }
        }, p.autoTime);
        if (!p.autoplay) {
            clearInterval(m)
        }
        u.hover(function() {
            p.autoplay = false
        }, function() {
            p.autoplay = true
        })
    }
})(jQuery);