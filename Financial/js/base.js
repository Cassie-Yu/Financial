$(function(){
    base.addPage('../pages/basePage/baseTop.html','.topContainer');
})

var base = new Object();

base.addPage = function(url,target){
    $.ajax({
         type: "GET",
         url: url,
         data: {},
         async:false,
         success: function(data){
//             console.log(data);
            $(target).html(data);		 
         },
         error:function(){
             alert('页面加载出错！');
         }
     });
}