$(function(){
    sheet.scrollChange('.sheetContainerA');
    sheet.scrollChange('.sheetContainerB');
    sheet.scrollChange('.sheetContainerC');
    sheet.scrollChange('.sheetContainerD');
    sheet.scrollChange('.sheetContainerE');//表格变化相关js
    sheet.change();//表单切换展示
})

var sheet = new Object();

//表格变化相关js
sheet.scrollChange = function(parent){
    var left =$(parent).find('.sheetBox').scrollLeft();
    // console.log(left);
    var top = $(parent).find('.sheetBox').scrollTop();

    $(parent).find('.sheetRowTitle').css({'position':'relative','left':-left,'top':top,'z-index':'1'});
    $(parent).find('.sheetLineTitle').css({'position':'relative','left':left,'top':-top,'z-index':'1'});
    $(parent).find('.sheetContant').css({'position':'relative','left':left,'top':-top-1,'z-index':'0'});

    $(parent).find('.sheetBox').scroll(function(){
        // console.log("滚动了！")
        var Left = $(parent).find('.sheetBox').scrollLeft();
        var Top = $(parent).find('.sheetBox').scrollTop();
        // console.log(Top);
        if(Left != left){
//                     console.log("左右滚动！");
             $(parent).find('.sheetLineTitle').css({'position':'absolute','z-index':'990'});
        }else if(Top != top){
            // console.log("上下滚动！");
            $(parent).find('.sheetRowTitle').css({'position':'absolute','z-index':'990'});
        }
        left = Left;
        top = Top;
        // console.log(left);
        // console.log(top);
        $(parent).find('.sheetRowTitle').css({'position':'relative','left':-left,'top':top,'z-index':'1'});
        $(parent).find('.sheetLineTitle').css({'position':'relative','left':left,'top':-top,'z-index':'1'});
        $(parent).find('.sheetContant').css({'position':'relative','left':-left,'top':-top-1,'z-index':'0'});
    });
}

//表单切换展示
var order;
sheet.change = function(){
    $(document).on('click','.changeBtn',function(){
//        console.log($(this).attr('index'));
        $(this).css('background-color','#a3c6e0').siblings('.changeBtn').css('background-color','#66a1cb');
        order = $(this).attr('index');
        $('.mainItem').eq(order).removeClass('hideSheet').siblings('.mainItem').addClass('hideSheet');
    })
}