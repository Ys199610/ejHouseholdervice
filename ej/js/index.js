$(function(){
	$(".left_nav").on({
			click:function(event){
				var url = $(this).attr("url");
				$(this).addClass("current");
				$(this).siblings().removeClass("current");
				// if(url ===  "./pages/customer.html" ){
				// 	$(".mb_nav").className = "customer";
				// 	$(".customer").css("display","block");
				// 	$(".customer").siblings().css("display","none");
				// }else if(url === "./pages/waiter.html"){
				// 	$(".mb_nav").className = "waiter";
				// 	$(".waiter").css("display","block");
				// 	$(".waiter").siblings().css("display","none");
				// };
				switch(url){
					case "./pages/customer.html":
						$(".mb_nav").className = "customer";
						$(".customer").css("display","block");
						$(".customer").siblings().css("display","none");
						break;
					case "./pages/waiter.html":
						$(".mb_nav").className = "waiter";
						$(".waiter").css("display","block");
						$(".waiter").siblings().css("display","none");
						break;
					case "./pages/category.html":
						$(".mb_nav").className = "category";
						$(".category").css("display","block");
						$(".category").siblings().css("display","none");
						break;
					case "./pages/product.html":
						$(".mb_nav").className = "product";
						$(".product").css("display","block");
						$(".product").siblings().css("display","none");
						break
					case "./pages/order.html":
						$(".mb_nav").className = "order";
						$(".order").css("display","block");
						$(".order").siblings().css("display","none");
						break;
					case "./pages/comment.html":
						$(".mb_nav").className = "comment";
						$(".comment").css("display","block");
						$(".comment").siblings().css("display","none");
						break;
				}
				$("#wrapper").load(url);

			}
		},'li')
	$("ul.left_nav > li:first-child").trigger("click");
});
