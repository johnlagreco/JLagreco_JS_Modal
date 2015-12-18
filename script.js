$(document).ready(function(){

		var $surrounding = $(".surrounding");

		$("#butt").on("click",function(e){
		e.preventDefault();
		
		$para.attr("src", $(this).attr("src"));
		$(".surrounding").show();
		$(".surrounding").on("click",function(){
			$(".surrounding").hide();
		});

	});	

	
});