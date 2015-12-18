$(document).ready(function(){

	$(".modal").on("click",function(e){
		e.preventDefault();
		var $image = $("#tunnel");
		$(".outer").show();
		$image.attr("src", $(this).attr("src"));
		$(".outer").on("click",function(){
			$(".outer").hide();
		});

	});	
});