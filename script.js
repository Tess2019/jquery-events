$(document).ready(function() {
 
//looking at writing jquery effects
 	$("#stream1_btn").on("click", function() {
 		$(".stream1").slideToggle();
		$(".stream2").fadeIn("slow");
		$(".stream3").fadeOut("medium");
          $(".stream1").fadeToggle("fast");
          	$(".stream1").fadeTo(1000, 0,5);
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
