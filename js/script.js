var clicked = false, moved = false, clickX, clickY;

$("#layer").on({
	'mousemove': function(e) {
		moved = true;
		clicked && updateScrollPos(e);
	},
	'mousedown': function(e) {
		clicked = true;
		moved = false;
		clickX = e.pageX;
		clickY = e.pageY;
	},
	'mouseleave': function(e) {
		clicked = false;
		$('body').removeClass('scrolling');
	},
	'mouseup': function(e) {
		clicked = false;
		if (!moved) {
			// not moved
		}
		$('body').removeClass('scrolling');
	}
});

var updateScrollPos = function(e) {
	$('body').addClass('scrolling');
	$(window)
		.scrollLeft($(window).scrollLeft() + (clickX - e.pageX))
		.scrollTop($(window).scrollTop() + (clickY - e.pageY));
}

$(".marker").click(function() {
	$(this).find(".marker-body").fadeToggle();
});
