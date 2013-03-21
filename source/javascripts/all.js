$(document).ready(function() {
    $('#slider').slider({ min: 0, max: 1, step: 0.1, value: 0.7 })
        .bind("slidechange", function() {
            var o = $(this).slider('value');
            var e = '#' + $(this).attr('data-wjs-element');
            $(e).css('opacity', o)
        });
    $('#off').click(function() {
        $('#guide').hide().removeClass();
    });
    $('#phone').click(function() {
    	$('#guide').show().removeClass().addClass('phone');
    });
    $('#tablet').click(function() {
    	$('#guide').show().removeClass().addClass('tablet');
    });
    $('#laptop').click(function() {
    	$('#guide').show().removeClass().addClass('laptop');
    });

    $(".button").click(function(event){
        $('iframe').attr('src', $( '#url' ).val());
        $('.main').hide();
    });
    $("#refresh").click(function(event){
        $('iframe').attr('src', '');
        $( '#url' ).val('');
        $('.main').show();
        $('#guide').hide().removeClass();
    });
});