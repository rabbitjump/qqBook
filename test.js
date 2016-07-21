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
    function cut(nowEl, nextEl) {
        var imgBox = $(".imgBox div");
        var a = $(".switcher a");
        imgBox.eq(nowEl).stop();
        a.eq(nowEl).removeClass('chosen');
        a.eq(nextEl).addClass('chosen');
        imgBox.eq(nowEl).animate({ "opacity": 0 }, 1000);
        imgBox.eq(nextEl).animate({ "opacity": 1 }, 1000);
    };

    var nAdd = function() {
        n = (n+1)%6;
    };

    var tAdd = function() {
        t = (t+1)%6;
    };

    var n = 0; //存放现在显示的图片位置
    var t = 1; //存放下一张图片的位置
    var interalId = setInterval(function() {
        cut(n, t);
        tAdd();
        nAdd();
    }, 2000); //只能每次初始化setinteral时对interalId赋值，因setinteral的ID值唯一

    //下方切换栏功能.
    $(".switcher a").map(function(index) {
        $(this).mouseenter(function() {
            clearInterval(interalId);
            cut(n, index);
            n = index;
            t = (index + 1)%6;
            interalId = setInterval(function() {
                cut(n, t);
                tAdd();
                nAdd();
            }, 3000);
        });
    });





});
