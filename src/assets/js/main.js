(function (window, document, $) {
    'use strict';

    // Placeholder IE9, IE8
    $('input').placeholder();

    // Validation Form
    function error(classname) {
        $(classname).animate({
            'background-color': '#e51d2a',
            'color': '#fff'
        });

    }

    function backanimation() {
        setTimeout(function () {
            $('#contact-genius input').attr('value', '');
        }, 5000);
    }
    var urlInit = location.href;
    if (urlInit.indexOf("#")>=0){
        var duration = 0;
        var urlA = urlInit.split('#')[1];
        if(urlA == "platforms") { var section = "#section5"; parent.location.hash = "platform"; var duration = 5;}
        else if(urlA == "about-us") { var section = "#section2"; var duration = 3;}
        else if (urlA == "scalability") { var section = "#section7"; parent.location.hash = "scalability"; var duration = 7;}
        else if (urlA == "our-team") { var section = "#section4"; parent.location.hash = "scalability"; var duration = 7;}
        else if(urlA == "our-work") { var section = "#section3"; var duration = 2; playWorks();}
        else if(urlA == "our-process") { var section = "#section6"; var duration = 6; parent.location.hash = "our-process"; }
        else if(urlA == "our-clients") { var section = "#section8"; var duration = 8; parent.location.hash = "our-clients"; } 
        else if(urlA == "contact-us") { var section = "#footer"; 
        var duration = 9;
            $('#footer-contact-button').hide(); 
            $("#contact-genius").delay(500).show('drop');  
            parent.location.hash = "contact-us";}
        if (section) {
            window.setTimeout(function() {
                $(document).scrollTop($(section).offset().top  - 61, { duration: (1000 * duration) ,easing: 'easeOutExpo'});  
            }, 1400);
        }

    }
    $(window).on('scroll', function () {
        event.preventDefault();
        var wad = $('#we-are-digital').offset().top;
        if(wad >= '420' && wad <= '660'){
            event.preventDefault();
            parent.location.hash = "about-us";
        }
        if(wad >= '770' && wad <= '1100'){
            event.preventDefault();
            parent.location.hash = "our-work";
        }
        if(wad >= '1350' && wad <= '1550'){
            event.preventDefault();            
            parent.location.hash = "our-team";
        }
        if(wad >= '1750' && wad <= '2500'){
            event.preventDefault();            
            parent.location.hash = "platforms";
        } 
        if(wad >= '2750' && wad <= '3150'){
            event.preventDefault();            
            parent.location.hash = "our-process";
        }  
        if(wad >= '3160' && wad <= '3450'){
            event.preventDefault();            
            parent.location.hash = "scalability";
        }
        if(wad >= '3660' && wad <= '3915'){
            event.preventDefault();
            parent.location.hash = "our-clients";
        }  
        if(wad >= '3915'){
            event.preventDefault();
            parent.location.hash = "contact-us";
        }          
    });

    $("#send-button").click(function () {

        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var phone = $("#phone-input").val();
        var message = $("#message-input").val();

        if (name === "") {
            error("#name-input");
            return false;
        } else if (email === "" || !validacion_email.test(email)) {
            error("#email-input");
            return false;
        } else if (message === "") {
            error("#message-input");
            return false;
        } else {
            backanimation();
            var datos = 'name=' + name + '&email=' + email + '&phone=' + phone + '&message=' + message;
            $.ajax({
                type: "POST",
                url: "./sendmail.php",
                data: datos,
                success: function () {
                    $('#contact-genius').hide();
                    $('#sucess-text').show();
                }
            });
            return false;
        }

    });
    $('#contact-genius input').focus(function () {
        $(this).css('background-color', '#307bbf');
    });


    // Anchor Links Menu
    var $root = $('html, body');
    $('#logo-genius').click(function () {
        $root.animate({
            scrollTop: $('body').offset().top
        }, 500);
        return false;
    });

    $('#about-us').click(function () {
                parent.location.hash = "about-us";
        $root.animate({
            scrollTop: $("#section2").offset().top - 61
        }, 500);
        return false;
    });
    window.countSlider = 0;
    var mainc = $('.slider-container');
    var sCn = $('.slider-container')
    function sliderS() {
        var mainWidth = $('#work-screen .container').outerWidth() - 20;
        sCn.css({'width':(sCn.width()*(sCn.find('>li').length)) + (sCn.find('>li').length * 100 )});
        sCn.find('>li').css('width', mainWidth);
    }
    $(document).ready(sliderS);
    $(window).resize(sliderS);
        function playWorks() {

            parent.location.hash = "our-work";
                var $root = $('html, body');

            if ($('#section3').find('#work-screen').length == 0) { $('#section3').append('<div id="work-screen"></div>'); }
            
            $root.animate({
                scrollTop: $("#section3").offset().top - (($(window).outerHeight() - $('#section3').outerHeight())/2)
            }, { duration: 1500,easing: 'easeOutExpo'});

            $('#work-screen').animate({height:($(window).outerHeight() - 61), top:'-' + ((($(window).outerHeight() - $('#section3').outerHeight())/2) - 60)}).css({'min-height':$('#section3').find('.container').outerHeight()});
        
            
            $('.close_btn').click(function(){
                $('#work-screen').animate({height:0}).css({'min-height':'0px'}); 
            });


            $('.controlslider .prev').click(function(){
                var firstLeft = sCn.find('>li:first-child').offset().left;
                var firstWidth = sCn.find('>li:first-child').outerWidth();
                if(window.countSlider == 0 ) { mainc.animate({marginLeft: "-" + (sCn.find('>li').length - 1)* firstWidth}); 
                window.countSlider = sCn.find('>li').length - 1;
            }
                else {
                    window.countSlider--;
                    mainc.animate({marginLeft:'-'+firstWidth*window.countSlider});
                
            }

            });
            $('.controlslider .next').click(function(){
                var firstLeft = sCn.find('>li:first-child').offset().left;
                var firstWidth = sCn.find('>li:first-child').outerWidth();
                if(window.countSlider == sCn.find('>li').length - 1 ) { mainc.animate({marginLeft: 0}); 
                window.countSlider = 0;
            }
                else{
                    window.countSlider++;
                    mainc.animate({marginLeft: parseFloat(sCn.find('>li:first-child').css('margin-left')) - (firstWidth*window.countSlider)}); 
            }
            });    
                    return false;
          
        }
    $('#our-work, #our-work-mobile').on('click touchstart', function() {
        playWorks();
    });

    $('#platform').click(function () {
        parent.location.hash = "platform";
        $root.animate({
            scrollTop: $("#section5").offset().top - 61 
        }, { duration: 1500,easing: 'easeOutExpo'});
        return false;
    });

    $('#our-process').click(function () {
        parent.location.hash = "our-process";
        $root.animate({
            scrollTop: $("#section6").offset().top - 61
        }, { duration: 1500,easing: 'easeOutExpo'});
        return false;
    });

    $('#our-clients').click(function () {
        parent.location.hash = "our-clients";        
        $root.animate({
            scrollTop: $("#section8").offset().top - 80
        }, { duration: 1500,easing: 'easeOutExpo'});
        return false;
    });

    $('#contact-us').click(function () {
        parent.location.hash = "contact-us";
        $root.animate({
            scrollTop: $("#footer").offset().top - 61
        }, { duration: 1500,easing: 'easeOutExpo'});
        return false;
    });

    // Anchor Links Menu Mobile

    $('#about-us-mobile').fastClick(function () {
        $root.animate({
            scrollTop: $("#section2").offset().top - 55
        }, 500);
        return false;
    });

    $('#our-work-mobile').fastClick(function () {
        $root.animate({
            scrollTop: $("#section3").offset().top - 55
        }, 500);
        return false;
    });

    $('#platforms-mobile').fastClick(function () {
        $root.animate({
            scrollTop: $("#section5").offset().top - 55
        }, 500);
        return false;
    });

    $('#our-process-mobile').fastClick(function () {
        $root.animate({
            scrollTop: $("#section6").offset().top - 55
        }, 500);
        return false;
    });

    $('#our-clients-mobile').fastClick(function () {
        $root.animate({
            scrollTop: $("#section8").offset().top - 55
        }, 500);
        return false;
    });

    $('#contact-us-mobile').fastClick(function () {
        $root.animate({
            scrollTop: $("#footer").offset().top + 500
        }, 500);
        return false;
    });

    // effect show menu mobile
    $('#toggle-nav, .container-menu-mobile ul li').fastClick(function () {
        $('#mobile-menu').stop(true, true).slideToggle(500);
    });

    if (screen.width >= 800) {

        // animations icons
        $('.container-plataforms img').mouseenter(function () {

            $(this).transition({
                perspective: '100px',
                rotateY: '360deg'
            }, function () {
                $(this).css('transform', 'none');
                $(this).css('-moz-transform', 'none');
                $(this).css('-ms-transform', 'none');
                $(this).css('-o-transform', 'none');
            });
        });

        // Animate Header
        var header = $('#header'), headerH = header.height();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                  header.stop().animate({
                    padding: '0'
                  }, 100);
                  $('#logo-genius img').stop().animate({ 'margin-top': '10px', height:45 }, 100);
                  $('#toggle-nav').stop().animate({ 'top': '23px' }, 100);
            } else {
                  header.stop().animate({
                    padding: '9px 0 5px 0'
                  }, 100);
                  $('#logo-genius img').stop().animate({ 'margin-top': '5px', height:52 }, 100);
                  $('#toggle-nav').stop().animate({ 'top': '18px' }, 100);
            }
        });
    }
    //Social Icons


$(document).on({
    mouseenter: function () {$(this).find('div').animate({'width':'105px'});},
    mouseleave: function () {$(this).find('div').animate({'width':'0px'});}
    }, '.facebook');

$(document).on({
    mouseenter: function () {$(this).find('div').animate({'width':'95px'});},
    mouseleave: function () {$(this).find('div').animate({'width':'0px'});}
    }, '.share');

$(document).on({
    mouseenter: function () {$(this).find('.grey').animate({'opacity':'0'});},
    mouseleave: function () {$(this).find('.grey').animate({'opacity':'1'});}
    }, '.domgrey');

    // Smoth Scroll
    function niceScrollInit() {
        $("html").niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 8,
            cursorfixedheight: 50,
            cursorborder: 0,
            cursorcolor: '#3b9ccf',
            cursorborderradius: 0,
            autohidemode: false,
            horizrailenabled: false,
            zindex: 9999
        });

        $('html').addClass('no-overflow-y');
    }

    var $smoothActive = $('body').attr('data-smooth-scrolling');
    if ($smoothActive == 1 && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height()) {
        niceScrollInit();
    }

    // click contact
    $('#footer-contact-button').fastClick(function (e) {
        e.preventDefault();
        $(this).hide(backForm());

        function backForm() {
            $("#contact-genius").show('drop');
        }
    });

    $('#contact-us, #contact-us-mobile').fastClick(function () {
        $('#footer-contact-button').hide();
        $("#contact-genius").delay(500).show('drop');
    });

    // fix "position: fixed" in mobile
    if (Modernizr.touch) {

        $(document)

        .on('focus', 'input', function (e) {
            $('body').addClass('fixfixed');
        })

        .on('blur', 'input', function (e) {
            $('body').removeClass('fixfixed');
        });

    }
    var d = document;
    var ss = swiffy.Stage;
     // ANIMATIONS SVG
     var svgManos = new ss(d.getElementById('manos'), manossvg);
     var svgBalanza = new ss(d.getElementById('balanza'), balanzasvg);
     var svgBrain = new ss(d.getElementById('brain'), brainsvg);
     var svgEstatua = new ss(d.getElementById('estatua'), estatuasvg);
     var svgInnovation = new ss(d.getElementById('innovationsvg'), innovation);
     var svgSuper = new ss(d.getElementById('doidosvg'), svgsuper);


     /*Callback Hand*/

    /*d.addEventListener("animation_hand_done", callHand, false);
    d.addEventListener("box_ready", callHandb, false);*/
    if(html.hasClass('touch')){
        $('body').addClass('onMobile');
    }
    function callHand(){
        if (!html.hasClass('touch')){
            $('#section8 .container #manosafter').css({top:'0px', right:'-10.1%', 'width':'100%'});
        }
        $('#section8').animate({'padding-bottom':'70px'});
                svgManos.destroy();
                            var svgManosAfter = new ss(d.getElementById('manos'), manosafter);
                svgManosAfter.start();
                    svgManosAfter.stop(); svgManosAfter.destroy(); $('#manosafter').remove(); callHandb(); ; 

        }
    function callHandb(){
        if(!html.hasClass('touch')){
            $('#section8 .container #manos').css({top:'195px', right:'-10.1%', 'width':'100%'});
        }
        var svgManosCinta = new ss(d.getElementById('manos'), svgmanoscinta);
        svgManosCinta.start();
        startLogos();
            window.setTimeout(function() {
                $('.tape-head').animate({'opacity':'0'});
                $('.tape-head').css({'z-index':'0'});
                $('#manos').css({'z-index':'0'});
            }, 13000);        
    }
    
    function startLogos() {
        window.setTimeout(function() {
            /*
            $('.rbc').animate({'marginTop':'16%'}, 600);
            window.setTimeout(function() {
                $('.rbc').css({'z-index':'999', 'display':'block'});
            }, 500);

            $('.rbc').animate({'marginTop':'33%','opacity':'0.5'}, 900, "easeOutBounce");   
            $('.rbc').animate({'marginLeft':'-124%'}, 3250, "linear"); 
            $('.rbc').animate({rotate: '-=90deg', 'marginTop':'52%', 'marginLeft':'-166%'}, 100, "easeOutBounce");
            */
        }, 1200);

    }

     // GROUP all 
     var groupSvg = [svgManos, svgSuper, svgInnovation, svgEstatua, svgBrain, svgBalanza];
     
    // Start Animation
    var length = groupSvg.length;   
    for (var i = 0; i < length; i++) {
      groupSvg[i].start();
      groupSvg[i].setBackground(null);
    }

    // Stop animation
    setTimeout(function(){

        for(var svg in groupSvg){
            groupSvg[svg].stop();
        }
    }, 100);

    // Load Animations
    function loadAnimation(selector, svgObject, offset) {
        $(selector).each(function () {
            var imagePos = $(selector).offset().top,
                topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 250) {
                svgObject.start();
                if (svgObject == svgManos) {
                    window.setTimeout(function() {
                        if(!html.hasClass('touch')){
                            callHand();
                        }

                    }, 2500); 
                }
            }
        });
    }
        // Scroll
        $(window).scroll(function () {
            loadAnimation('#section6', svgEstatua, 200);
            loadAnimation('#section2', svgBrain, 200);
            loadAnimation('#section7', svgBalanza, 200);
            loadAnimation('#section8', svgManos, 200);
            loadAnimation('#section3', svgSuper, 200);
            loadAnimation('#section4', svgInnovation, 200);
        });



})(window, document, jQuery);