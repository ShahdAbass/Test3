function deleteItem(e, i) {
    $(e).closest(i).remove()
}
var layer;
layui.use(["layer"], function() {
    layer = layui.layer
});

function showToast(e, i, a) {
    if (!arguments[1]) i = 1;
    if (!arguments[2]) i = "";
    if (i == 1) {
        layer.msg(e)
    } else if (i == 2) {
        layer.msg(e, {
            time: 2e3,
            end: function() {
                location.href = a
            }
        })
    } else if (i == 3) {
        layer.msg(e, {
            time: 2e3,
            end: function() {
                location.reload()
            }
        })
    } else {
        layer.msg(e)
    }
}

function playVideoDialog(e) {
    var i = `<div class="wrap-box wrap-video-dialog">
                    <div class="video-box">
                         <iframe width="100%" height="690px" src="${e}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                </div>`;
    layer.open({
        title: "",
        type: 1,
        shadeClose: false,
        shade: .5,
        skin: "layer-play-video-dialog",
        content: i
    })
}

function lookPicDialog(e) {
    var e = e;
    var l = `<div class='look-pic-dialog'>
                     <div class='box'>
                         <img src='${e}'/>
                     </div>
                 </div>`;
    getImageWidth(e, function(i, a) {
        layui.use("layer", function() {
            var e = layui.layer;
            e.open({
                type: 1,
                title: false,
                skin: "layer-look-pic-dialog",
                offset: "auto",
                area: [i + "px", a + "px"],
                shadeClose: true,
                content: l
            })
        })
    })
}

function getImageWidth(e, i) {
    var a = new Image;
    a.src = e;
    if (a.complete) {
        i(a.width, a.height)
    } else {
        a.onload = function() {
            i(a.width, a.height)
        }
    }
}