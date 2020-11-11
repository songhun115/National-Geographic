/* menu_btn click to show and hide menu_bg */
$('.toggle_btn').click(function() {l
  $('.side_bg').addClass('active');
});

$('.close_toggle_btn').click(function() {
  $('.side_bg').removeClass('active');
})
 

/*scroll down shrink */
$(function(){
	const shrinkHeader = 1;
    $(window).scroll(function(){
    	var scroll = getCurrentScroll();
        if(scroll >= shrinkHeader){
        	$('.nav_bar').addClass('shrink');
        }else{
        	$('.nav_bar').removeClass('shrink');
        }
    });
    function getCurrentScroll(){
    	return window.pageYOffset || document.documentElement.scrollTop;
    }
});