$(document).ready(function(){function e(){var e={},t=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,r){e[n]=r});return e}$("#slider").slider({min:0,max:1,step:.1,value:.7}).bind("slidechange",function(){var e=$(this).slider("value"),t="#"+$(this).attr("data-wjs-element");$(t).css("opacity",e)}),$(".overlaySelector").click(function(){$(this).addClass("selected").siblings().removeClass("selected")}),$("#phone").click(function(){$("#guide").show().removeClass().addClass("phone")}),$("#tablet").click(function(){$("#guide").show().removeClass().addClass("tablet")}),$("#laptop").click(function(){$("#guide").show().removeClass().addClass("laptop")}),$("#refresh").click(function(e){$("iframe").attr("src",""),$("#url").val(""),$(".header").hide(),$(".main").fadeIn(),$("#guide").hide().removeClass(),$(this).siblings().removeClass("selected")});var t=e().url,t=decodeURIComponent(t),t=t.replace(/\#$/,"");t!=="undefined"&&($("iframe").attr("src",t),$("#url").attr("value",t),$(".main").hide(),$(".header").show()),$("#url").keypress(function(e){if(e.keyCode==13)if($(this).val().match(/^http/))$.noop();else{var t=$(this).val();$(this).val("http://"+t)}}),$("#go").click(function(e){if($("#url").val().match(/^http/))$.noop();else{var t=$("#url").val();$("#url").val("http://"+t)}$("iframe").attr("src",$("#url").val()),$(".main").hide(),$(".header").show()})});