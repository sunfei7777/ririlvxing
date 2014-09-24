
/*
 *	sun-tab
 *	made by sunpengfei 2014-9-21
 *	作者：孙鹏飞  2014-9-21
 * http://ririlvxing.com
 */
 //添加-删除天数
 $(document).ready(function() {

$("img.add").bind("click",function(){
	var i = $("ul.sidebar li").length+1;
 	$("ul.sidebar").append(	"<li><div class='item'><a href='#'>第"+i+"天 (0)</a></div><div class='num'>"+i+"</div><div class='arrow'></div></li>");
});
$("img.minus").bind("click",function(){
	var i = $("ul.sidebar li").length-1;
 	$("ul.sidebar li:last").replaceWith();
});
$(".right-list a").bind("click",function(){
	var o = this.id;
	$("#tab1").addClass("hov");
});
var l = $(".div-1 h2").val.length;
alert(l);
});

