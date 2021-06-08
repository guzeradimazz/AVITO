$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.ask__mobile').each(function() {
			var self = $('.bar'),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.removeClass('hidden3')
			}
            // else{
            //     $('.bar').addClass('hidden3');
            // }
		});
	});
});