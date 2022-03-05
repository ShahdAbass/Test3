$(function() {
    $(".subNav").click(function(n) {
        _src = $(this).find("a").attr("href");
        if ($(this).is(".currentDd")) {
            window.location.href = _src
        } else {
            if ($(this).not(".currentDd")) {
                n.preventDefault();
                $(this).addClass("currentDd").siblings(".subNav").removeClass("currentDd");
                $(this).next(".navContent").slideDown(500).siblings(".navContent").slideUp(500)
            }
        }
    })
});
$(function() {
    $(".subNav2").click(function(n) {
        _src = $(this).find("a").attr("");
        if ($(this).is(".currentDd2")) {} else {
            if ($(this).not(".currentDd2")) {
                n.preventDefault();
                $(this).addClass("currentDd2").siblings(".subNav2").removeClass("currentDd2");
                $(this).next(".navContent2").slideDown(500).siblings(".navContent2").slideUp(500)
            }
        }
    })
});