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
});
