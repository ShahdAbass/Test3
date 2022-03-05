var page_loading_gif;

function showLoading() {
    layer.close(page_loading_gif);
    page_loading_gif = layer.load(2, {
        skin: "layer-page-loading",
        anim: -1,
        shade: [.5, "#fff"]
    })
}

function hideLoading() {
    if (layer && page_loading_gif) {
        layer.close(page_loading_gif)
    }
}

function downloadCheck(e) {
    console.log("downloadCheck");
    var a = $(e);
    var n = $(a).attr("data-url");
    var o = $(a).attr("data-needInquiryUrl");
    $(".ajax-form-commit").attr("data-downloadUrl", n);
    $.ajax({
        type: "POST",
        url: o,
        data: {},
        dataType: "json",
        success: function(e) {
            if (e.code == 200) {
                if (1 == e.data.needInquiry) {
                    showDownloadInquiryPopup()
                } else {
                    a.attr("href", n);
                    window.open(n, "_blank")
                }
            } else if (e.code == 400) {} else {}
        },
        error: function() {
            console.log("请求失败")
        }
    })
}

function showDownloadInquiryPopup() {
    $(".hide").fadeIn()
}

function hideDownloadInquiryPopup() {
    $(".hide").fadeOut()
}

function subDownloadInquiry(e) {
    var n = $(e);
    var o = $(n).closest("form.ajax-form");
    var a = $(o).attr("action");
    var t = new FormData($(o)[0]);
    $.ajax({
        type: "POST",
        url: a,
        contentType: false,
        processData: false,
        data: t,
        dataType: "json",
        success: function(e) {
            if (e.code == 200) {
                $(o).find("img.refresh-inquiry-code").click();
                layer.msg(e.msg, {
                    time: 1500,
                    icon: 1
                });
                $(o)[0].reset();
                hideDownloadInquiryPopup();
                var a = $(n).attr("data-downloadUrl");
                n.attr("href", a);
                window.open(a, "_blank")
            } else if (e.code == 400) {
                $.each(e.msg, function(e, a) {
                    layer.msg(a.msg);
                    return false
                })
            } else {}
        },
        error: function() {
            console.log("请求失败")
        }
    })
}

function subCommonInquiry(e) {
    var a = $(e);
    var n = $(a).closest("form");
    var o = $(n).attr("action");
    var t = new FormData($(n)[0]);
    $.ajax({
        type: "POST",
        url: o,
        contentType: false,
        processData: false,
        data: t,
        dataType: "json",
        success: function(e) {
            console.log(e);
            if (e.code == 200) {
                $(n).find("img.refresh-inquiry-code").click();
                layer.msg(e.msg, {
                    time: 1500,
                    icon: 1,
                    skin: "inquiry-box"
                });
                $(n)[0].reset();
                deleteOldAttachment()
            } else if (e.code == 400) {
                $.each(e.msg, function(e, a) {
                    layer.msg(a.msg);
                    return false
                })
            } else {}
        },
        error: function() {
            console.log("请求失败")
        }
    })
}

function subBottomInquiry(e) {
    subCommonInquiry(e)
}

function subOtherInquiry(e) {
    subCommonInquiry(e)
}

function subSinglePageInquiry(e) {
    subCommonInquiry(e)
}

function subProductInquiry(e) {
    subCommonInquiry(e)
}

function checkProfile(e, a) {
    var n = e.files;
    var o = $(e).attr("data-url");
    if ("string" != typeof o || $.trim(o) == "") {
        showToast("未设置上传地址");
        return false
    }
    e.outerHTML = e.outerHTML;
    uploadProfile(n, o)
}

function uploadProfile(e, a) {
    deleteOldAttachment();
    var n = e[0].name;
    var o = new FormData;
    o.append("file", e[0]);
    $.ajax({
        url: a,
        type: "post",
        dataType: "json",
        data: o,
        processData: false,
        contentType: false,
        xhr: function() {
            var e = new XMLHttpRequest;
            e.upload.addEventListener("progress", function(e) {});
            return e
        },
        success: function(a) {
            if (a.code == 200) {
                let e = $(`<span>&nbsp;&nbsp;${n}</span>&nbsp;&nbsp;<i class="icon iconfont iconshanchu" onclick="deleteOldAttachment()"></i>`);
                $(".attachment-upload-result").html(e);
                $(".attachment_url").val(a.data.url);
                $(".attachment_file_name").val(n)
            } else {
                showToast(a.msg, 2)
            }
        },
        error: function() {},
        beforeSend: function() {
            showLoading()
        },
        complete: function() {
            hideLoading()
        }
    })
}

function deleteOldAttachment() {
    $(".attachment_url").val("");
    $(".attachment_file_name").val("");
    $(".attachment-upload-result").html("")
}

function deleteInquiryProductCache(a, n, o) {
    var t = $(a).closest(n).siblings(n).length;
    var e = $(a).attr("data-id");
    var r = $(a).attr("data-delcache");
    if (1 == r) {
        $.ajax({
            type: "POST",
            url: deleteInquiryProductUrl,
            data: {
                id: e
            },
            dataType: "json",
            success: function(e) {
                if (e.code == 200) {
                    if (0 == t) {
                        $(a).closest(o).remove()
                    } else {
                        $(a).closest(n).remove()
                    }
                    layer.msg(e.msg, {
                        time: 1500,
                        icon: 1
                    })
                } else {}
            },
            error: function() {
                console.log("请求失败")
            }
        })
    } else {
        if (0 == t) {
            $(a).closest(o).remove()
        } else {
            $(a).closest(n).remove()
        }
        layer.msg(data.msg, {
            time: 1500,
            icon: 1
        })
    }
}

function addInquiryProductCache(e) {
    var n = [];
    $(e).closest("form").find("input[type='checkbox'][name='ids[]']:checked").each(function(e, a) {
        n.push($(a).val())
    });
    var a = $(e).closest("form").attr("action");
    $.ajax({
        type: "POST",
        url: a,
        data: {
            ids: n
        },
        dataType: "json",
        success: function(e) {
            window.location.href = e.data.url
        },
        error: function() {}
    })
}

function goBatchInquiry(e) {
    window.location.href = e
}

function attributeSearch(e) {
    var n = [];
    $(e).closest("form").find("input[type='checkbox'][name='attributes_ids[]']:checked").each(function(e, a) {
        n.push($(a).val())
    });
    var a = $("#keyword").val();
    if (a) {
        var o = n.join("-");
        window.location.href = "?keyword=" + a + "&attribute=" + o
    } else {
        var o = n.join("-");
        window.location.href = "?attribute=" + o
    }
}