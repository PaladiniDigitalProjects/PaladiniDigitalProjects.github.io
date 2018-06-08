$(document).ready(function(){
	$('#menu').click(function() {
    $(this).toggleClass('menu-on');
    $('.menu-sidebar').toggleClass('active-sidebar');
		$('#main').toggleClass('active-sidebar');
  });

	$(function(){
		var url = window.location.pathname;
		var filename = url.substring(url.lastIndexOf('/')+1);

    $('.menu-sidebar ul li a').each(function(){
        var $this = $(this);
				// if the current path is like this link, make it active
				if($this.attr('href').indexOf(filename) !== -1){
          $this.addClass('active');
        }
    });
	});

	[].forEach.call(document.querySelectorAll('img[data-src]'),
	function(img) {
  	img.setAttribute('src', img.getAttribute('data-src'));
  	img.onload = function() { img.removeAttribute('data-src');
		};
	});

	(function() { // DON'T EDIT BELOW THIS LINE
	  var d = document, s = d.createElement('script');
	  s.src = 'https://paladinidigitalprojets.disqus.com/embed.js';
	  s.setAttribute('data-timestamp', +new Date());
	  (d.head || d.body).appendChild(s);
	  })();


	// CARROUSELL

	$( "<div class='slider-counter'></div>" ).appendTo( ".slider" );

	$('.owl-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
		var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
		items:1,
		loop:true,
		margin:0,
		autoPlay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		autoHeight:true,
		nav:true,
		navText: ["<img class='img-svg' src='public/images/prev-ico.svg'>","<img class='img-svg' src='public/images/next-ico.svg'>"]
  });







});
