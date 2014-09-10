<?php
//Simple CMS
//Extremely Simple CMS system

// include function files for this application
// require_once('inc/bookmark_fns.php');

if (filter_has_var(INPUT_GET, "menu")){
	$menu = filter_input(INPUT_GET, "menu");
}else {
	$menu = "menu.html";
} // end if


if (isset($_GET['content']))
	// menu selection	
	$content = $_GET['content'];	
else
	$content = 'home';
//print($content);
/*
if (filter_has_var(INPUT_GET, "footer")){
	$footer = filter_input(INPUT_GET, "footer");
}else {
	$footer = "footer.html";
} // end if
*/
require_once("views/top.html");	// header and nav

echo '<div class="container">';

include ($content . ".html");	// there is a probelm here as at this point footer hasn't been loaded nor the scripts.

print "</div> \n";

// include ('views/sidebar.html');

require_once('views/footer.html');

?>

<script src="https://maps.googleapis.com/maps/api/js"></script>
<script async src="https://www.google-analytics.com/analytics.js"></script>
<script src="./js/myjs.js"></script>
<script>
$(document).ready(function() {		
	$('#gallery img').each(function(i) {
	var imgFile = $(this).attr('src');
	var preloadImage = new Image();
  var imgExt = /(\.\w{3,4}$)/;
  preloadImage.src = imgFile.replace(imgExt,'_h$1');
		
	$(this).hover(
		function() {
			$(this).attr('src', preloadImage.src);
		},
		function () {
		var currentSource=$(this).attr('src');
			$(this).attr('src', imgFile);
	}); // end hover
}); // end each
	
	$('#gallery a').click(function(evt) {
		//don't follow link
		 evt.preventDefault();
		 //get path to new image
	   var imgPath = $(this).attr('href');
		 //get reference to old image
		 var oldImage = $('#photo img');
		 			
			 //create HTML for new image
			 var newImage = $('<img src="' + imgPath +'">');
			 //make new image invisible
			 newImage.hide();
			 //add to the #photo div
			 $('#photo').prepend(newImage);
			 //fade in new image
			 newImage.fadeIn(1000);
			 
			 //fade out old image and remove from DOM
			 oldImage.fadeOut(1000,function(){
		     $(this).remove();
				});
			 
		 
	}); // end click
		
		$('#gallery a:first').click();
}); // end ready
</script>

</body>
</html>