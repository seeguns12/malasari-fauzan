var Neela;
! function(u) {
    "use strict";
    (Neela = {
        initialized: !1,
        cDays: c_days,
        cHours: c_hours,
        cMinutes: c_minutes,
        cSeconds: c_seconds,
        countdownEndMsg: countdown_end_msg,
        contactFormErrorMsg: contact_form_error_msg,
        contactFormRecaptchaErrorMsg: contact_form_recaptcha_error_msg,
        contactFormSuccessMsg: contact_form_success_msg,
        sendingMail: !1,
        heroFullScreen: hero_full_screen,
        mapColor: map_color,
        mapInitialLatitude: map_initial_latitude,
        mapInitialLongitude: map_initial_longitude,
        mapInitialZoom: map_initial_zoom,
        mapMarkers: map_markers,
        useDefaultMapStyle: use_default_map_style,
        mobMenuFlag: !1,
        mobileMenuTitle: mobile_menu_title,
        onepageNav: onepage_nav,
        rtlFlag: rtl,
        slidehowImages: slidehow_images,
        timelineParallax: timeline_parallax,
        init: function() {
            var e = this;
            e.initialized || (e.initialized = !0, e.build(), e.events())
        },
        build: function() {
            var e = this;
            e.neelaStyle(), e.preloader(), e.navigation(), e.wtcheck(), e.createMobileMenu(), e.heroHeight(), u("input, textarea").placeholder(), e.googleMap(), e.createLightboxGallery(), e.createBackgroundSlideshow(), e.createOwlSliders(), e.createGallery(), e.bgImageGrid(), e.countdown(), e.parallaxBg()
        },
        events: function() {
            var e, t, a = this;
            a.windowResize(), e = setInterval(function() {
                /loaded|complete/.test(document.readyState) && (clearInterval(e), a.resizeVideos())
            }, 10), a.contactForm(), a.objEvents(), a.parallaxTimeline(), t = setInterval(function() {
                /loaded|complete/.test(document.readyState) && (clearInterval(t), a.animateElems())
            }, 10)
        },
        neelaStyle: function() {
            u(".neela-style, .btn.btn-primary, .btn.btn-light, .btn.btn-dark").prepend('<span class="h-lines"></span><span class="v-lines"></span>')
        },
        preloader: function() {
            var e = setInterval(function() {
                /loaded|complete/.test(document.readyState) && (clearInterval(e), u("#preloader").fadeOut(1e3))
            }, 10)
        },
        navigation: function() {
            u(".nav li a").on("click", function(e) {
                var t = u(this),
                    a = 0;
                if (u.browser.mobile && (!t.closest(".dropdown").hasClass("open") || "block" === t.closest(".dropdown-menu").css("display") || !t.parent().parent().hasClass("nav"))) return e.preventDefault(), !1;
                "#" === t.attr("href").charAt(0) && u(t.attr("href")).length ? (e.preventDefault(), "#hero" !== t.attr("href") && null !== u(t.attr("href")).offset() && (a = u(t.attr("href")).offset().top - 55), u("html, body").stop().animate({
                    scrollTop: a
                }, 1500, "easeOutExpo", function() {
                    t.blur()
                })) : window.open(t.attr("href"), "_self")
            }), void 0 !== window.Waypoint && new Waypoint.Sticky({
                element: u(".nav-section"),
                offset: -1
            }), u(".nav-section.light").length && u(window).on("scroll load", function() {
                180 < u(window).scrollTop() ? u(".nav-section.light").addClass("sticky") : u(".nav-section.light").removeClass("sticky")
            }), 0 !== u("#wrapper > section, #wrapper > div#hero").length && this.onepageNav && jQuery().waypoint && u("#wrapper > section, #wrapper > div#hero").waypoint({
                element: u("#wrapper > section"),
                handler: function(e) {
                    var t = u(this),
                        a = t[0].element.id;
                    "up" === e && (a = t[0].element.previousElementSibling.id), u(".nav a").removeClass("active"), (u(window).scrollTop() < 100 ? u('.nav a[href="#hero"]') : u('.nav a[href="#' + a + '"]')).addClass("active")
                },
                offset: "50%"
            }), u(window).on("load", function() {
                var e = location.hash.replace("#", "");
                "" !== e && (location.hash = "", u("html, body").stop().animate({
                    scrollTop: u("#" + e).offset().top - 65
                }, 1500, "easeInOutExpo")), void 0 !== window.Waypoint && new Waypoint.Sticky({
                    element: u(".nav-section")
                })
            })
        },
        createMobileMenu: function(e) {
            var n, t = this,
                o = u("#wrapper"),
                i = u.browser.mobile ? "touchstart" : "click";
            null !== e && (e = u(window).innerWidth()), e <= 975 && !t.mobMenuFlag && (u("body").prepend('<nav class="nav-mobile"><i class="fa fa-times"></i><h2>' + t.mobileMenuTitle + "</h2><ul></ul></nav>"), u(".nav-mobile > ul").html(u(".nav").html()), u(".nav-mobile b, .nav-mobile .nav-logo").remove(), u(".nav-mobile ul.dropdown-menu").removeClass().addClass("dropdown-mobile"), u(".navbar > a.btn").length && (u(".navbar > a.btn").each(function() {
                u(".nav-mobile").append(u(this).clone())
            }), u(".nav-mobile > a.btn").removeClass("btn-light").addClass("btn-primary btn-sm")), n = u(".nav-mobile"), u("#nav-mobile-btn").on(i, function(e) {
                e.stopPropagation(), e.preventDefault(), setTimeout(function() {
                    o.addClass("open"), n.addClass("open")
                }, 25), u(document).on(i, function(e) {
                    u(e.target).hasClass("nav-mobile") || u(e.target).parents(".nav-mobile").length || (o.removeClass("open"), n.removeClass("open"), u(document).off(i))
                }), u(">i", n).on(i, function() {
                    o.removeClass("open"), n.removeClass("open"), u(document).off(i)
                })
            }), t.mobMenuFlag = !0, u(".nav-mobile li a").on("click", function(e) {
                var t = u(this),
                    a = 0;
                "#hero" !== t.attr("href") && (a = u(t.attr("href")).offset().top - 65), u("html, body").stop().animate({
                    scrollTop: a
                }, 1500, "easeInOutExpo", function() {
                    t.blur()
                }), o.removeClass("open"), n.removeClass("open"), u(document).off(i), e.preventDefault()
            }))
        },
        heroHeight: function() {
            this.heroFullScreen && (u("#hero").css({
                minHeight: u(window).innerHeight() + "px"
            }), u(window).resize(function() {
                var e = parseInt(u("#hero").css("padding-bottom")) + 70,
                    t = parseInt(u("#hero").next("section").css("margin-top")),
                    a = u(window).innerHeight() - e,
                    n = u("#hero >.container").height(),
                    o = -10;
                t < 0 && !Number.isNaN(t) && (a += t + e), n = a - n, u(".nav-section.light").length && (o = 10), 0 < n && u(".v-center").length && u("#hero >.container").css({
                    "margin-top": n / 2 + o + "px"
                }), u("#hero").css({
                    minHeight: u(window).innerHeight() + "px"
                })
            }))
        },
        bgImageGrid: function() {
            u("#freewall").length && (u("#freewall .item").each(function() {
                var e = u(this);
                e.width(Math.floor(260 + 200 * Math.random())), e.css({
                    "background-image": "url(" + u(">img", e).attr("src") + ")"
                }), u(">img", e).remove()
            }), u("#freewall").appendTo("#wrapper"), u(document).ready(function() {
                var e = new Freewall("#freewall");
                e.reset({
                    selector: ".item",
                    animate: !1,
                    cellW: 20,
                    cellH: 320,
                    gutterX: 1,
                    gutterY: 1,
                    onResize: function() {
                        e.fitWidth()
                    }
                }), e.fitWidth()
            }))
        },
        googleMap: function() {
            var e, t, a, s, n, o, i, r, l = this,
                c = [],
                d = 0;
            if (0 === u(".gmap").length || "undefined" === l.mapMarkers || 0 === l.mapMarkers.length || void 0 === window.google) return !1;
            /^\d|\.|-$/.test(l.mapInitialLatitude) && /^\d|\.|-$/.test(l.mapInitialLongitude) || (l.mapInitialLatitude = l.mapMarkers[0].latitude, l.mapInitialLongitude = l.mapMarkers[0].longitude), t = new google.maps.LatLng(l.mapInitialLatitude, l.mapInitialLongitude), l.useDefaultMapStyle || (c = [{
                stylers: [{
                    hue: l.mapColor
                }, {
                    saturation: -75
                }, {
                    lightness: 5
                }]
            }, {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 20
                }, {
                    lightness: -70
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    saturation: -50
                }, {
                    lightness: 40
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    hue: l.mapColor
                }, {
                    saturation: -100
                }, {
                    lightness: 0
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    hue: l.mapColor
                }, {
                    saturation: 5
                }, {
                    lightness: 5
                }]
            }, {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                    saturation: 10
                }, {
                    lightness: 0
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    saturation: 0
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    hue: l.mapColor
                }, {
                    saturation: 30
                }, {
                    lightness: -30
                }]
            }]), e = new google.maps.StyledMapType(c, {
                name: "Neela"
            }), i = google.maps.ControlPosition.RIGHT_CENTER, r = google.maps.ControlPosition.RIGHT_BOTTOM, c = google.maps.ControlPosition.RIGHT_TOP, l.rtlFlag && (i = google.maps.ControlPosition.LEFT_CENTER, r = google.maps.ControlPosition.LEFT_BOTTOM, c = google.maps.ControlPosition.LEFT_TOP), a = {
                center: t,
                zoom: l.mapInitialZoom,
                scrollwheel: !1,
                panControl: !1,
                mapTypeControl: !1,
                zoomControl: !0,
                zoomControlOptions: {
                    position: i
                },
                streetViewControlOptions: {
                    position: r
                },
                fullscreenControlOptions: {
                    position: c
                }
            }, u(".gmap").each(function() {
                for (n = u(this).attr("id"), (s = new google.maps.Map(document.getElementById(n), a)).mapTypes.set("map_style", e), s.setMapTypeId("map_style"), o = function(e) {
                        var t = e.latitude,
                            a = e.longitude,
                            n = e.icon,
                            e = e.infoWindow,
                            o = new google.maps.InfoWindow({
                                content: '<div class="infoWindow">' + e + "</div>"
                            }),
                            i = new RichMarker({
                                position: new google.maps.LatLng(t, a),
                                map: s,
                                anchor: 8,
                                anchorPoint: new google.maps.Point(0, -50),
                                shadow: "none",
                                content: '<div class="marker"><i class="fa ' + n + '"></i></div>'
                            });
                        google.maps.event.addListener(i, "click", function() {
                            o.open(s, i)
                        })
                    }; d < l.mapMarkers.length;) o(l.mapMarkers[d]), d += 1
            })
        },
        wtcheck: function() {
        },
        createBackgroundSlideshow: function() {
            u(".bg-slideshow").length && this.slidehowImages.length && u(".bg-slideshow").zoomSlider({
                src: this.slidehowImages,
                bullets: !1,
                speed: 1e4,
                switchSpeed: 1e3,
                interval: 6e3
            })
        },
        createLightboxGallery: function() {
            void 0 !== window.lightbox && lightbox.option({
                resizeDuration: 200,
                wrapAround: !0,
                disableScrolling: !0,
                showImageNumberLabel: !1,
                positionFromBottom: 150
            })
        },
        createOwlSliders: function() {
            u(".timeline-gallery").length && u(".timeline-gallery").owlCarousel({
                nav: !0,
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    }
                },
                rtl: this.rtlFlag
            }), u(".testimonials").length && u(".testimonials").owlCarousel({
                nav: !1,
                dots: !0,
                responsive: {
                    0: {
                        items: 1
                    }
                },
                rtl: this.rtlFlag
            })
        },
        createGallery: function() {
            var e = u(".gallery-scroller"),
                t = !1;
            u(".gallery-scroller").length && (u(".gallery-right").on("click", function() {
                return !t && (t = !0, void e.animate({
                    scrollLeft: e.scrollLeft() + 380
                }, function() {
                    t = !1
                }))
            }), u(".gallery-left").on("click", function() {
                return !t && (t = !0, void e.animate({
                    scrollLeft: e.scrollLeft() - 380
                }, function() {
                    t = !1
                }))
            }), u(document).ready(function() {
                u(".gallery-scroller").niceScroll({
                    cursorcolor: "#fff",
                    cursorwidth: "0px",
                    background: "#fff",
                    cursorborder: "0px solid #1F2326",
                    zindex: "999",
                    autohidemode: !1,
                    enablemousewheel: !1,
                    touchbehavior: !0
                })
            }))
        },
        countdown: function() {
            var o, i = this;
            u(".countdown").length && (o = function(e, t, a) {
                var n, o = a - new Date;
                if (o < 0) return t.html('<div class="end">' + i.countdownEndMsg + "</div>"), clearInterval(e), !1;
                n = Math.floor(o / 864e5 * 1), a = Math.floor(o % 864e5 / 36e5 * 1), e = Math.floor(o % 864e5 % 36e5 / 6e4 * 1), o = Math.floor(o % 864e5 % 36e5 % 6e4 / 1e3 * 1), u(".days > div", t).html(n), u(".hours > div", t).html(a), u(".minutes > div", t).html(e), u(".seconds > div", t).html(o)
            }, u(".countdown").each(function() {
                var e, t, a = u(this),
                    n = new Date(a.data("date"));
                n && "[object Date]" === Object.prototype.toString.call(n) && !Number.isNaN(n) && (t = '<div class="days"><div></div><span>' + i.cDays + '</span></div><div class="hours"><div></div><span>' + i.cHours + '</span></div><div class="minutes"><div></div><span>' + i.cMinutes + '</span></div><div class="seconds"><div></div><span>' + i.cSeconds + "</span></div>", a.html(t)), e = setInterval(function() {
                    o(e, a, n)
                }, 1e3)
            }))
        },
        parallaxBg: function() {
            var o = this;
            !u.browser.mobile && 992 < u(window).innerWidth() ? u(window).on("scroll", function() {
                var n = u(window).scrollTop();
                u(".parallax-background").each(function() {
                    var e = u(this),
                        t = e.offset().top,
                        a = e.outerHeight();
                    o.isInViewport(this) && (t = n - t, t = Math.round(t / a * 100), e.css("background-position", "center " + parseInt(-t * (a / 250)) + "px"))
                })
            }) : u(".parallax-background").css({
                "background-position": "50% 50%",
                "background-size": "cover",
                "background-attachment": "scroll"
            })
        },
        isInViewport: function(e) {
            e = e.getBoundingClientRect();
            return (0 < e.height || 0 < e.width) && 0 <= e.bottom && 0 <= e.right && e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth)
        },
        windowResize: function() {
            var t = this;
            u(window).resize(function() {
                var e = u(window).innerWidth();
                t.createMobileMenu(e), t.blogMetas(), u(window).innerWidth() < 751 && (u(".navbar > a.btn").addClass("btn-sm"), u(".navbar > a.btn").width("auto"))
            })
        },
        resizeVideos: function() {
            var e = u('iframe[src^="http://player.vimeo.com"], iframe[src^="https://player.vimeo.com"], iframe[src^="http://www.youtube.com"], iframe[src^="https://www.youtube.com"], object, embed');
            e.each(function() {
                var e = u(this),
                    t = e.attr("height") / e.attr("width");
                (t < .3 || .8 < t || Number.isNaN(t)) && (t = .559), e.attr("data-aspectRatio", t).removeAttr("height").removeAttr("width")
            }), u(window).resize(function() {
                e.each(function() {
                    var e = u(this),
                        t = e.parent().width();
                    e.width(t).height(t * e.attr("data-aspectRatio"))
                })
            }).resize()
        },
        contactForm: function() {
            var m = this;
            u(".submit_form").on("click", function(e) {
                var t, a, n, o = u(this),
                    i = o.closest("form"),
                    s = u("input, textarea, select, fieldset", i),
                    r = 0,
                    l = /\S+@\S+\.\S+/,
                    c = "contact",
                    d = !1;
                return e.preventDefault(), n = function(e) {
                    return encodeURIComponent(e)
                }, o.width("auto"), u(".form_status_message").html(""), s.each(function() {
                    var e = u(this);
                    "hidden" === e.attr("type") ? e.hasClass("subject") ? c += "&subject=" + n(e.val()) : e.hasClass("fromName") || e.hasClass("fromname") ? c += "&fromname=" + n(e.val()) : e.hasClass("fromEmail") || e.hasClass("fromemail") ? c += "&fromemail=" + n(e.val()) : (e.hasClass("emailTo") || e.hasClass("emailto")) && (c += "&emailto=" + n(e.val())) : "checkbox" === e.attr("type") && 1 === e.parents("fieldset").length && e.parents("fieldset").hasClass("required") || (e.is("fieldset") && e.hasClass("required") && 0 === u("#" + e.attr("id") + " input:checkbox:checked").length ? (u("input", e).addClass("is-invalid"), d = !0) : e.hasClass("required") && "checkbox" === e.attr("type") && !u("input[id='" + e.attr("id") + "']").is(":checked") || e.hasClass("required") && "" === e.val() && "checkbox" !== e.attr("type") && !e.is("fieldset") || e.hasClass("required") && "radio" === e.attr("type") && !u("input[name='" + e.attr("name") + "']").is(":checked") || "email" === e.attr("type") && "" !== e.val() && !1 === l.test(e.val()) ? (e.addClass("is-invalid"), d = !0) : "g-recaptcha-response" !== e.attr("id") && "recaptcha-token" !== e.attr("id") && (e.removeClass("is-invalid"), u("input", e).removeClass("is-invalid"), e.hasClass("subject") ? (c += "&subject=" + n(e.val()), c += "&subject_label=" + n(e.attr("name"))) : e.hasClass("fromName") || e.hasClass("fromname") ? (c += "&fromname=" + n(e.val()), c += "&fromname_label=" + n(e.attr("name"))) : e.hasClass("fromEmail") || e.hasClass("fromemail") ? (c += "&fromemail=" + n(e.val()), c += "&fromemail_label=" + n(e.attr("name"))) : ("radio" === e.attr("type") ? u("input[id='" + e.attr("id") + "']").is(":checked") && (c += "&field" + r + "_label=" + n(e.attr("name")), c += "&field" + r + "_value=" + n(u.trim(u("label[for='" + e.attr("id") + "']").text()))) : e.is("fieldset") ? (c += "&field" + r + "_label=" + n(e.attr("name")), u("#" + e.attr("id") + " input:checkbox:checked").each(function(e) {
                        0 === e ? (c += "&field" + r + "_value=", c += n(u.trim(u("label[for='" + u(this).attr("id") + "']").text()))) : c += ", " + n(u.trim(u("label[for='" + u(this).attr("id") + "']").text()))
                    })) : (c += "&field" + r + "_label=" + n(e.attr("name")), c += "&field" + r + "_value=" + n(e.val())), r += 1)))
                }), c += "&len=" + r, u(".g-recaptcha").length && (c += "&recaptcha=" + grecaptcha.getResponse()), t = function() {
                    u(".form_status_message").html('<div class="alert alert-success alert-dismissible fade show" role="alert">' + m.contactFormSuccessMsg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
                }, a = function() {
                    u(".fa-spinner", o).remove(), o.removeClass("disabled")
                }, d || m.sendingMail ? m.showError() : (m.sendingMail = !0, o.append('<i class="fas fa-spinner fa-spin after"></i>'), o.addClass("disabled"), u.ajax({
                    type: "POST",
                    url: "contact.php",
                    data: c,
                    success: function(e) {
                        a(), "ok" === e ? (t(), i[0].reset()) : m.showError(m.contactFormRecaptchaErrorMsg), m.sendingMail = !1, u(".g-recaptcha").length && grecaptcha.reset()
                    },
                    error: function() {
                        a(), m.showError(), m.sendingMail = !1
                    }
                })), !1
            })
        },
        showError: function(e = "") {
            "" === e && (e = this.contactFormErrorMsg), u(".form_status_message").html('<div class="alert alert-danger alert-dismissible fade show" role="alert">' + e + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
        },
        objEvents: function() {
            u(".btn").each(function() {
                var e = u(this),
                    t = e.width(),
                    a = 2,
                    n = e.text().split(" ").length;
                2 < n || 0 !== e.find("i").length ? a = 15 : 1 < n && (a = 8), e.width(Math.round(t) + a)
            }), u("#about-us .element .image").on("mouseenter", function() {
                var e = u(this);
                if (e.parent().is(":first-child") && !u(">.divider-about-us", e.closest(".row")).hasClass("flip")) return !1;
                e.hasClass("flip") || ((u("#about-us .element .image.flip").length ? u("#about-us .element .image") : e).toggleClass("flip"), u(">.divider-about-us", e.closest(".row")).toggleClass("flip"))
            }), u("#map_canvas").on("mouseenter", function() {
                u(".location-info").addClass("open")
            }).on("mouseleave", function() {
                u(".location-info").removeClass("open")
            }), u(".nav-logo, .scrollto").on("click", function(e) {
                var t = u(this),
                    a = 0,
                    n = t.attr("href");
                /#/.test(n) && u(n).length && (e.preventDefault(), "#hero" !== n && (a = u(n).offset().top - 65), u("html, body").stop().animate({
                    scrollTop: a
                }, 1500, "easeInOutExpo", function() {
                    t.blur()
                }))
            }), u(".element-v2").length && u(".element-v2").each(function() {
                var e = u(">.image", u(this));
                e.css({
                    "background-image": "url(" + u(">img", e).attr("src") + ")"
                }), u(">img", e).hide()
            }), u(".overflow-image").length && u(".overflow-image").each(function() {
                var e = u(this);
                e.css({
                    "background-image": "url(" + u(">img", e).attr("src") + ")"
                })
            }), u(".progress").length && u(".progress").waypoint(function() {
                u(".progress").each(function() {
                    u("> .progress-bar", u(this)).delay(300).queue(function(e) {
                        var t = u(this);
                        t.css("width", t.attr("aria-valuenow") + "%"), e()
                    })
                })
            }, {
                triggerOnce: !0,
                offset: "bottom-in-view"
            })
        },
        parallaxTimeline: function() {
            var i;
            this.timelineParallax && (i = function(n) {
                u("> div", this).each(function() {
                    var e = u(this),
                        t = e.attr("data-parallax"),
                        a = n.clientX * t / 300,
                        t = n.clientY * t / 300;
                    e.css({
                        "-webkit-transform": "translateX(" + a + "px) translateY(" + t + "px)",
                        "-moz-transform": "translateX(" + a + "px) translateY(" + t + "px)",
                        "-ms-transform": "translateX(" + a + "px) translateY(" + t + "px)",
                        "-o-transform": "translateX(" + a + "px) translateY(" + t + "px)",
                        transform: "translateX(" + a + "px) translateY(" + t + "px)"
                    })
                })
            }, 992 < u(window).innerWidth() && u(window).scroll(function() {
                var n = u(window).scrollTop(),
                    o = u(window).height();
                u('.timeline [class^="template-"]').each(function() {
                    var e = u(this),
                        t = e.offset().top,
                        a = e.height();
                    t <= n + o && n <= t + a ? e.on("mousemove", i) : e.off("mousemove", i)
                })
            }))
        },
        blogMetas: function() {
            var e = u(".info-blog .bottom-info, .post-content .bottom-info");
            e.length && e.each(function() {
                var e = u(this);
                35 < e.height() ? e.addClass("center") : e.removeClass("center")
            })
        },
        animateElems: function() {
            function e() {
                u("[data-animation-delay]").each(function() {
                    var e = u(this),
                        t = u(window).scrollTop(),
                        a = u(window).height(),
                        n = parseInt(e.attr("data-animation-delay"), 10),
                        o = e.data("animation-direction");
                    if (void 0 === o) return !1;
                    e.addClass("animate-" + o), u(document).ready(function() {
                        t + a >= e.offset().top && (Number.isNaN(n) || 0 === n ? e.removeClass("animate-" + o).addClass("animation-" + o) : setTimeout(function() {
                            e.removeClass("animate-me").addClass("animation-" + o)
                        }, n))
                    })
                })
            }
            751 <= u(window).innerWidth() ? (u(window).scroll(function() {
                e()
            }), e()) : u("[data-animation-delay]").addClass("visible")
        }
    }).init()
}(jQuery);