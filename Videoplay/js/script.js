/*
Template: streamlab - Video Streaming WordPress Theme
Author: Gentechtree
Version: 1.0
Design and Developed by: Gentechtree.com
*/

/*====================================
[  Table of contents  ]
======================================
==> Page Loader
==> Search Button
==> Sidebar Toggle
==> Sticky Header
==> Back To Top
======================================
[ End table content ]
======================================
*/
// jQuery(document).ready(function($) {
//     function reload_cart() {

// //   var verificaHorario = jQuery("#mega-menu-wrap-primary").find(".mega-menu-toggle");
// //  // console.log(verificaHorario);
// // jQuery(".mega-menu-toggle").appendTo("#mega-menu-wrap-primary");


// }
//     // reload_cart();
// });



(function(jQuery) {
    "use strict";
    jQuery(window).on('load', function(e) {

// var s1 = jQuery("#mega-menu-wrap-primary").find(".mega-menu-toggle");
// jQuery(".mega-menu-toggle").appendTo("#mega-menu-wrap-primary");


        jQuery('p:empty').remove();

        /*------------------------
                Page Loader
        --------------------------*/
        jQuery("#gen-loading").fadeOut();
        jQuery("#gen-loading").delay(0).fadeOut("slow");
        /*------------------------
                Search Button
        --------------------------*/
        jQuery('#gen-seacrh-btn').on('click', function() {
            jQuery('.gen-search-form').slideToggle();
            jQuery('.gen-search-form').toggleClass('gen-form-show');
            if (jQuery('.gen-search-form').hasClass("gen-form-show")) {
                jQuery(this).html('<i class="fa fa-times"></i>');
            } else {
                jQuery(this).html('<i class="fa fa-search"></i>');
            }
        });

        jQuery('.gen-account-menu').hide();
         jQuery('#gen-user-btn').on('click', function(e) {

            jQuery('.gen-account-menu').slideToggle();

             e.stopPropagation();
            // jQuery('.gen-account-menu').toggleClass('gen-form-show');
            // if (jQuery('.gen-account-menu').hasClass("gen-form-show")) {
            //     jQuery(this).html('<i class="fa fa-times"></i>');
            // } else {
            //     jQuery(this).html('<i class="fa fa-user"></i>');
            // }
        });

        jQuery('body').on('click' , function(){
            if(jQuery('.gen-account-menu').is(":visible"))
            {
                jQuery('.gen-account-menu').slideUp();
            }
      });
        
        /*------------------------
                Sticky Header
        --------------------------*/
        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('gen-header-default') && view_width >= 1023)
        {
            var height = jQuery('header').height();
            jQuery('.gen-breadcrumb').css('padding-top', height * 1.3);
        }
        if (jQuery('header').hasClass('gen-header-default'))
        {
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.gen-bottom-header').addClass('gen-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.gen-bottom-header').removeClass('gen-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('gen-has-sticky')) {
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('header').addClass('gen-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('header').removeClass('gen-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        /*------------------------
                Back To Top
        --------------------------*/
        jQuery('#back-to-top').fadeOut();
        jQuery(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > 250) {
                jQuery('#back-to-top').fadeIn(1400);
            } else {
                jQuery('#back-to-top').fadeOut(400);
            }
        });
        jQuery('#top').on('click', function() {
            jQuery('top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        if(jQuery('.tv-show-back-data').length)
        {
            var url = jQuery('.tv-show-back-data').data('url');
            console.log(url);
            var html = '';
            html += `<div class="tv-single-background">
                <img src="`+url+`">
            </div>`;
            jQuery('#main').prepend(html);

        }
        jQuery(document).on('change','.gen-header-search-select',function(){
            var post_type = jQuery(this).val();
            jQuery('.gen-post-type').val(post_type);
        });
        
        const player = new Plyr('#gt-player', {  
            controls: [
                'play-large', 'play', 'progress', 'current-time',
                'mute', 'volume', 'captions', 'settings',
                'pip', 'airplay', 'fullscreen'
            ],   
            autoplay: false,
            muted: false,
            loop: { active: true },
          });
          player.on('enterfullscreen', function() {
            jQuery('body').addClass('gt-fullscreen-activated');
          });
        
          player.on('exitfullscreen', function() {
            jQuery('body').removeClass('gt-fullscreen-activated');
          });
          jQuery('.gt-genre-filter.owl-carousel').each(function () {
            var $this = jQuery(this);
            var rtl = jQuery('html').attr('dir') === 'rtl';
            var prev = 'fa fa-angle-left';  // or your custom class
            var next = 'fa fa-angle-right'; // or your custom class
    
            $this.owlCarousel({
                rtl: rtl,
                items: $this.data("desk_num"),
                loop: $this.data("loop"),
                margin: $this.data("margin"),
                nav: $this.data("nav"),
                dots: $this.data("dots"),
                center: $this.data("center"),
                autoplay: $this.data("autoplay"),
                autoplayHoverPause: true,
                autoplayTimeout: $this.data("autoplay-timeout"),
                navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
                responsiveClass: true,
                onInitialized: function () {
                    addActiveClasses($this);
                },
                onTranslated: function () {
                    addActiveClasses($this);
                },
                responsive: {
                    0: {
                        items: $this.data("mob_sm"),
                        nav: true,
                        dots: false
                    },
                    480: {
                        items: $this.data("mob_num"),
                        nav: true,
                        dots: false
                    },
                    786: {
                        items: $this.data("tab_num")
                    },
                    1023: {
                        items: $this.data("lap_num")
                    },
                    1199: {
                        items: $this.data("desk_num")
                    }
                }
            });
        });
        jQuery(document).on('click','.gt-filter-genre-btn',function(){
            jQuery('.gt-filter-genre-btn').removeClass('active');
            jQuery(this).toggleClass('active');
        });
        
    
    });
})(jQuery);