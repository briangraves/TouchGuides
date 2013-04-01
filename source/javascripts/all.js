$(document).ready(function() {

    $('#slider').slider({ min: 0, max: 1, step: 0.1, value: 0.7 })
        .bind("slidechange", function() {
            var o = $(this).slider('value');
            var e = '#' + $(this).attr('data-wjs-element');
            $(e).css('opacity', o)
    });
    $('.overlaySelector').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
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
    $("#refresh").click(function(event){
        $('iframe').attr('src', '');
        $( '#url' ).val('');
        $('.header').hide();
        $('.main').fadeIn();
        $('#guide').hide().removeClass();
        $(this).siblings().removeClass('selected');
    });

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    var first = getUrlVars()["url"];
    var first = decodeURIComponent(first);
    var first = first.replace(/\#$/, '');

    if(first === "undefined") {
      // don't do anything.
    }
    else {
    //  take the url variable and update the iframes and input field
      $("iframe").attr('src',(first));
      $('#url').attr('value',(first));
      $('.main').hide();
      $('.header').show();
    }

    $('#url').keypress(function(e) {
        if(e.keyCode == 13) {

            if ($(this).val().match(/^http/)) {
                $.noop()
            }
            else {
                // get value from field
                var cur_val = $(this).val();
                // do with cur_val
                $(this).val('http://' + cur_val);
            }
        }
    });
    $("#go").click(function(event){
        if ($('#url').val().match(/^http/)) {
            $.noop()
        }
        else {
            // get value from field
            var cur_val = $('#url').val();
            // do with cur_val
            $('#url').val('http://' + cur_val);
        }
        $('iframe').attr('src', $( '#url' ).val());
        $('.main').hide();
        $('.header').show();
    });
});

