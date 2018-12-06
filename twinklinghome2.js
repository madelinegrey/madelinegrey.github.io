$(document).ready(function(){
/* TWINKLING LIGHTS - from my codepen */
	let stars = 350;
	let $stars = $('#stars');

	for(var i=0;i<stars;i++){
		$stars.append('<div class="star"></div>');
	}
	$('.star').each(function(index) {
	   	$(this).css({
	   		left: Math.random() * ($stars.width() - ($(this).width() + 5)),
	        top: Math.random() * ($stars.height() - ($(this).height()+ 5)),
	        animation: 'rotation ' + Math.floor(Math.random()*10 + 3) +'s ease infinite alternate'
	    })
	})
});