$(document).ready(function() {
    $('#slider').slider({ min: 0, max: 1, step: 0.1, value: 0.7 })
        .bind("slidechange", function() {
            var o = $(this).slider('value');
            var e = '#' + $(this).attr('data-wjs-element');
            $(e).css('opacity', o)
        });
    $('#phone').click(function() {
    	$('#guide').removeClass().addClass('phone');
    });
    $('#tablet').click(function() {
    	$('#guide').removeClass().addClass('tablet');
    });
    $('#laptop').click(function() {
    	$('#guide').removeClass().addClass('laptop');
    });

    /* Change iFrame on a Button Click Event
    $(document).ready(function() {

        $(".button").click(function(event){
            $("iframe").attr('src', $( '#url' ).val());
        });
    });
	*/
});