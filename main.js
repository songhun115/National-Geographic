/* pc menu_btn click to show and hide menu_bg */
$(function(){
  $('.toggle_btn').click(function() {
    $('.side_bg').addClass('active');
  });
  
  $('.close_toggle_btn').click(function() {
    $('.side_bg').removeClass('active');
  })

  
/* mobile menu_btn click to show and hide menu_bg */
$('.mobile_toggle_btn').click(function() {
  $('.mobile_side_bg').addClass('active');
});

$('.mobile_close_toggle_btn').click(function() {
  $('.mobile_side_bg').removeClass('active');
});

});

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