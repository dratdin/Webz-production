var oswaldL=new FontFaceObserver("Oswald",{weight:300}),oswaldR=new FontFaceObserver("Oswald",{weight:500});Promise.all([oswaldL.load(),oswaldR.load()]).then(function(){$("body").css("font-family","Oswald")});var pL=new FontFaceObserver("Panton",{weight:100}),pB=new FontFaceObserver("Panton",{weight:"bold"});Promise.all([pL.load(),pB.load()]).then(function(){$(".title, .logo, .step__number, .form label").css("font-family","Panton")}),$(document).ready(function(){function o(o){null==o?$(".mosaicAlbum__Photo").show():($(".mosaicAlbum__Photo[data-info != "+o+"]").hide(),$(".mosaicAlbum__Photo[data-info = "+o+"]").show())}$(".menu_mobile .menu__lnk").click(function(){$(".btn-menu").click()}),$(".openForm").click(function(){$("#formPopup").fadeIn(),$("body").css("overflow","hidden")}),$(".modalContent__close").click(function(){$(".modalBg").fadeOut(),$("body").css("overflow","visible")}),$(".productCard__openInfo").click(function(){$(this).parent().find(".productCard__info").fadeIn(),$("body").css("overflow","hidden")}),$(".mosaicAlbum__Photo").click(function(){$(this).parent().find(".mosaicAlbum__Description").fadeIn(),$("body").css("overflow","hidden")}),$("input[name = phone]").mask("+375 (99) 999-99-99"),$(".picker__category").click(function(){$(".picker__category").removeClass("picker__category_selected"),$(this).addClass("picker__category_selected")}),$("#album-all").click(function(){o()}),$("#album-landings").click(function(){o("landing-page")}),$("#album-vitit-cards").click(function(){o("visit-card")}),$("#album-corporate").click(function(){o("corporate")}),$(".owl-carousel").owlCarousel({loop:!0,nav:!0,dots:!1,navText:["<",">"],margin:10,items:1}),Share={vkontakte:function(o,e,n,t){url="http://vk.com/share.php?",url+="url="+encodeURIComponent(o),url+="&title="+encodeURIComponent(e),url+="&image="+encodeURIComponent(n),url+="&noparse=true",Share.popup(url)},facebook:function(o,e,n,t){url="http://www.facebook.com/sharer.php?s=100",url+="&p[title]="+encodeURIComponent(e),url+="&p[summary]="+encodeURIComponent(t),url+="&p[url]="+encodeURIComponent(o),url+="&p[images][0]="+encodeURIComponent(n),Share.popup(url)},twitter:function(o,e){url="http://twitter.com/share?",url+="text="+encodeURIComponent(e),url+="&url="+encodeURIComponent(o),url+="&counturl="+encodeURIComponent(o),Share.popup(url)},popup:function(o){window.open(o,"","toolbar=0,status=0,width=626,height=436")}};var e="Webz.by - Разработка и создание сайтов.";$(".facebook").click(function(){Share.facebook("webz.by",e,"../img/logoWebz.png","Исследование вашего рынка и конкурентов, уникальный дизайн и гарантия. Цены ниже рыночных, имеется система скидок, если хотите еще девешле!")}),$(".tweeter").click(function(){Share.twitter("webz.by",e)}),$("form").submit(function(){var o=$(this);return $.ajax({type:"GET",url:"mail.php",data:o.serialize(),success:function(o){var e=JSON.parse(o);$(".modalBg").hide(),$("#thanks .title").html(e.title),$("#thanks .text").html(e.text).append(e.errors),$("#thanks").fadeIn()}}),!1})});