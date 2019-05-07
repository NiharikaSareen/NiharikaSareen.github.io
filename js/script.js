AOS.init();

$(document).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});

$(".rotate").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 3000 // How many milliseconds until the next word show.
});

$(document).ready(function(){
	$(".projectCard").toArray().forEach(function(card){
		$(card).find(".trigger").on('click',function(){
			$(card).toggleClass('activebtn');
		})
	})
});


 var typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
    smartBackspace: false,
 	typeSpeed:100,
 	backSpeed:100,
 	backDelay: 1500,
 	loop:true
  });

  var typed = new Typed('.typedProject', {
    stringsElement: '.typed-project',
    smartBackspace: false,
 	typeSpeed:100,
 	backSpeed:100,
 	backDelay: 1500,
 	loop:true
  });

  var typed = new Typed('.typedSkills', {
    stringsElement: '.typed-skills',
    smartBackspace: false,
 	typeSpeed:100,
 	backSpeed:100,
 	backDelay: 1500,
 	loop:true
  });

$('.contact').mousemove(function(e){
	var moveX = (e.pageX * -1/100);
	var moveY = (e.pageY * -1/100);
	$(this).css('background-position', moveX + 'px ' + moveY + 'px');
})
