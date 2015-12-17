$(document).ready(function(){

		$("#butt").on("click",function(e){
		e.preventDefault();
		var $para = $("#para");
		$para.attr("src", $(this).attr("src"));
		$(".surrounding").show();
		$(".surrounding").on("click",function(){
			$(".surrounding").hide();
		});

	});	

	
});