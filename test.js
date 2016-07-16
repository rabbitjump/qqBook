$(document).ready(function() {
    // 导航栏hover显示列表
    var MOUSE_ATTR = (function() {
        var changeAttr = function(element1, element2, attrName, value1, value2, value3) {
            $(element1).mouseenter(function() {
                $(this).attr(attrName, value1);
                $(this).find(element2).addClass(value2);
            });
            $(element1).mouseleave(function() {
                $(this).attr(attrName, value3);
                $(this).find(element2).removeClass(value2);
            })

        };
        return { changeAttr: changeAttr }
    })();
    MOUSE_ATTR.changeAttr(".topNav li", "i", "class", "fl listShow", "iShow", "fl list");

    //.inputSearch搜索栏下拉菜单
    $(".searchClass").mouseenter(function() {
            $(".searchBox").show()
        })
        .mouseleave(function() {
            $(".searchBox").hide();
        });
    $(".searchBox > a").click(function() {
        var chosen = $(this).text();
        $(".searchClass > span").text(chosen);
        $(".searchBox").hide();
    });

    //.searchText
    var searchText = "我的21岁未婚妻";
    $(".searchText").focus(function() {
            $(this).val("");
        })
        .blur(function() {
            $(this).val(searchText)
        });

    //.codeImg二维码消失
    $(".close").click(function() {
        $(".codeImg").hide();
    });

    //.recommend图片切换
    //自动换图功能
    var t = 0;
    var change = function() {
        return setInterval(function() {
            $(".switcher").find('.chosen').removeClass('chosen');
            if (t < 7) {
                $(".switcher a").eq(t).addClass('chosen');
                $(".imgBox div").stop();
                $(".imgBox div").slice(0, t).animate({ "opacity": 0 }, 1000);
                $(".imgBox div").slice(t + 1).animate({ "opacity": 0 }, 1000);
                $(".imgBox div").eq(t).animate({ "opacity": 1 }, 1000);
            } else {
                t = 0;
                $(".switcher a").eq(t).addClass('chosen');
                $(".imgBox div").stop();
                $(".imgBox div").slice(0, t).animate({ "opacity": 0 }, 1000);
                $(".imgBox div").slice(t + 1).animate({ "opacity": 0 }, 1000);
                $(".imgBox div").eq(t).animate({ "opacity": 1 }, 1000);
            }
            t++;
        }, 3000);
    };
    change();

    //下方切换栏功能
    $(".switcher a").map(function(index) {
        $(this).mouseenter(function() {
            clearInterval(change);
            $(".switcher").find(".chosen").removeClass("chosen");
            $(this).addClass("chosen");
            $(".imgBox div").stop();
            $(".imgBox div").slice(0, index).animate({ "opacity": 0 }, 1000);
            $(".imgBox div").slice(index + 1).animate({ "opacity": 0 }, 1000);
            $(".imgBox div").eq(index).animate({ "opacity": 1 }, 1000);
            t = index;
            change();
        });

    });



});
