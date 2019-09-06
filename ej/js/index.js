$(function(){
	$(".left_nav").on({
			click:function(event){
				var url = $(this).attr("url");
				$(this).addClass("current");
				$(this).siblings().removeClass("current");
				$("#wrapper").load(url);

			}
		},'li')
	$("ul.left_nav > li:first-child").trigger("click");
});
