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
    function cut(counter) {
        if (counter === 6) {
            counter = 0
        }
        $(".switcher").find('.chosen').removeClass('chosen');
        $(".switcher a").eq(counter).addClass('chosen');
        $(".imgBox div").stop();
        if (counter == 0) {
            $(".imgBox div").slice(1).animate({ "opacity": 0 }, 1000);
        } else {
            $(".imgBox div").slice(0, counter).animate({ "opacity": 0 }, 1000);
            $(".imgBox div").slice(counter + 1).animate({ "opacity": 0 }, 1000);
        }
        $(".imgBox div").eq(counter).animate({ "opacity": 1 }, 1000);
    };
    var t = 1; //装载下一张图片的位置
    var change = setInterval(function() {
        cut(t);
        t++;
    }, 3000);

    //下方切换栏功能.重复mouseenter触发多个setinteral!
    $(".switcher a").map(function(index) {
        $(this).mouseenter(function() {
            clearInterval(change);
            cut(index);
            t = index+1;
            change = setInterval(function() {
                cut(t)
                t++;
            }, 3000);
        });
    });





});
