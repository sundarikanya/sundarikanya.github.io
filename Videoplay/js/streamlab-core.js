(function (jQuery) {
  "use strict";
  function addActiveClasses(selector) {
    var visibleItems = selector.find(".owl-item.active");
    var owl_items = selector.find(".owl-item");
    
    // Remove existing classes
    owl_items.removeClass("gen-first-active gen-last-active");

    // Add new classes
    visibleItems.first().addClass("gen-first-active");
    visibleItems.last().addClass("gen-last-active");
}
  function isScrollable(jQuerywrapper) {
    var ajaxVisible = jQuerywrapper.offset().top + jQuerywrapper.outerHeight(true),
      ajaxScrollTop = jQuery(window).scrollTop() + jQuery(window).height();
    if (ajaxVisible <= ajaxScrollTop && ajaxVisible + jQuery(window).height() > ajaxScrollTop) {
      return true;
    }
    return false;
  }
  function WcUpdateResultCount(jQuerywrapper) {
  }
  function disableBtn(button, id) {
    button.attr('disabled', 'disabled');
    button.find('.button-text-' + id).hide();
    button.find('#loadmore-icon-' + id).show();
  }
  function enableBtn(button, id) {
    //console.log(id);
    button.find('#loadmore-icon-' + id).hide();
    button.find('.button-text-' + id).show();
    button.removeAttr('disabled');
  }
  function removeBtn(button, id) {
    jQuery('#gen-load-more-button-' + id).hide();
  }
  
  var registerDependencies = function () {
      if (null != PluginJsConfig && null != PluginJsConfig.js_dependencies) {
        var js_dependencies = PluginJsConfig.js_dependencies;
        for (var dependency in js_dependencies) {
          asyncloader.register(js_dependencies[dependency], dependency);
        }
      }
      //console.log(PluginJsConfig.js_dependencies);
    },
    timer = function () {
      jQuery('.timer').countTo();
    },
    slick = function () {
      jQuery('.slider-for').each(function () {
        jQuery('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
      });
      jQuery('.slider-nav').each(function () {
        var prev = 'ion-chevron-up';
        var next = 'ion-chevron-down';
        jQuery('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          vertical: true,
          focusOnSelect: true,
          centerMode: true,
          
          prevArrow: '<div class="prev"><span class="' + prev + '"></span></div>',
          nextArrow: '<div class="next"><span class="' + next + '"></span></div>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });
      
      jQuery('.gt-verticle-bg').each(function () {
        jQuery('.gt-verticle-bg').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-verticle-thumb'
        });
      });
      jQuery('.slider-verticle-thumb').each(function () {
        var prev = 'ion-chevron-up';
        var next = 'ion-chevron-down';
        jQuery('.slider-verticle-thumb').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.gt-verticle-bg',
          dots: true,
          vertical: true,
          focusOnSelect: true,
          centerMode: false,          
          prevArrow: '<div class="prev"><span class="' + prev + '"></span></div>',
          nextArrow: '<div class="next"><span class="' + next + '"></span></div>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });

         jQuery('.slider-main').each(function () {
        jQuery('.slider-main').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-horizontal-thumb'
        });
      });
      jQuery('.slider-horizontal-thumb').each(function () {
        var prev = 'ion-chevron-up';
        var next = 'ion-chevron-down';
        jQuery('.slider-horizontal-thumb').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-main',
          dots: false,
          vertical: false,
          focusOnSelect: true,
          centerMode: false,          
          prevArrow: '<div class="prev"><span class="' + prev + '"></span></div>',
          nextArrow: '<div class="next"><span class="' + next + '"></span></div>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });


      jQuery('.slider-main').each(function () {
        jQuery('.slider-main').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-horizontal-thumb'
        });
      });
      jQuery('.slider-horizontal-thumb').each(function () {
        var prev = 'ion-chevron-up';
        var next = 'ion-chevron-down';
        jQuery('.slider-horizontal-thumb').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-main',
          dots: false,
          vertical: false,
          focusOnSelect: true,
          centerMode: false,          
          prevArrow: '<div class="prev"><span class="' + prev + '"></span></div>',
          nextArrow: '<div class="next"><span class="' + next + '"></span></div>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });

      jQuery('.slider-for-1').each(function () {
        jQuery('.slider-for-1').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav-1'
        });
      });
      jQuery('.slider-nav-1').each(function () {
        var prev = 'ion-chevron-up';
        var next = 'ion-chevron-down';
        jQuery('.slider-nav-1').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.slider-for-1',
          dots: true,
          focusOnSelect: true,
          centerMode: true,
          prevArrow: '<div class="prev"><span class="' + prev + '"></span></div>',
          nextArrow: '<div class="next"><span class="' + next + '"></span></div>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });
      jQuery('.banner-style-2 .slider').slick({
        centerMode: true,
        centerPadding: '500px',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        infinite: true,
      });
    },
    owl_carousel = function () {
      jQuery('.owl-carousel').each(function () {        
        var rtl = false;
        var prev = 'ion-ios-arrow-back';
        var next = 'ion-ios-arrow-forward';
        var prev_text = 'Prev';
        var next_text = 'Next';    
        var $this = jQuery(this);    
        if (jQuery(this).data('prev_text') && jQuery(this).data('prev_text') != '') {
          prev_text = jQuery(this).data('prev_text');
        }
        if (jQuery(this).data('next_text') && jQuery(this).data('next_text') != '') {
          next_text = jQuery(this).data('next_text');
        }
        
        jQuery(this).owlCarousel({
          rtl: rtl,
          items: jQuery(this).data("desk_num"),
          loop: jQuery(this).data("loop"),
          margin: jQuery(this).data("margin"),
          nav: jQuery(this).data("nav"),
          dots: jQuery(this).data("dots"),
          
          center: jQuery(this).data("center"),
          autoplay: jQuery(this).data("autoplay"),
          autoplayHoverPause: true,
          autoplayTimeout: jQuery(this).data("autoplay-timeout"),
          navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
          responsiveClass: true,
          onInitialized: function (event) {
            addActiveClasses($this);
        },
        onTranslated: function (event) {
            addActiveClasses($this);
        },
          responsive: {
            // breakpoint from 0 up
            0: {
              items: jQuery(this).data("mob_sm"),
              nav: true,
              dots: false
            },
            // breakpoint from 480 up
            480: {
              items: jQuery(this).data("mob_num"),
              nav: true,
              dots: false
            },
            // breakpoint from 786 up
            786: {
              items: jQuery(this).data("tab_num")
            },
            // breakpoint from 1023 up
            1023: {
              items: jQuery(this).data("lap_num")
            },
            1199: {
              items: jQuery(this).data("desk_num")
            }
          }
        });
      });
    },
    pop_video = function () {
      jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps, .button-play').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
      });
    },
    PMS = function () {
      if (jQuery('#pms_login').length > 0) {
        var url = '';
        var title = '';
        if (jQuery('#gen-login-page-url').length) {
          url = jQuery('#gen-login-page-url').data('url');
          title = jQuery('#gen-login-page-url').data('title');
          jQuery('#pms_login').prepend('<h4>' + title + '</h4>');
        }
        var html = '';
        html += `<div class="gen-login-page-background" style="background:url(` + url + `)">
                            
                        </div>`;
        jQuery('#main').prepend(html);
        jQuery('body').addClass('gen-pms-login');
      }
      if (jQuery('#pms_register-form').length > 0) {
        var url = '';
        var title = '';
        if (jQuery('#gen-register-page-url').length) {
          url = jQuery('#gen-register-page-url').data('url');
          title = jQuery('#gen-register-page-url').data('title');
          jQuery('#pms_register-form').prepend('<h4>' + title + '</h4>');
        }
        var html = '';
        html += `<div class="gen-register-page-background" style="background:url(` + url + `)">
                            
                        </div>`;
        jQuery('#main').prepend(html);
        jQuery('body').addClass('gen-pms-register');
      }
      if (jQuery('#pms_recover_password_form').length > 0) {
        var url = '';
        var title = '';
        if (jQuery('#gen-recover-page-url').length) {
          url = jQuery('#gen-recover-page-url').data('url');
          //console.log(url);
          title = jQuery('#gen-recover-page-url').data('title');
          jQuery('#pms_recover_password_form').prepend('<h4>' + title + '</h4>');
        }
        var html = '';
        html += `<div class="recover-password-page-background" style="background:url(` + url + `)">
                            
                        </div>`;
        jQuery('#main').prepend(html);
        jQuery('body').addClass('gen-pms-recover-password');
      }
    },
    loadmore = function () {
      jQuery('.page-post-loadmore-data').each(function () {
        var id = jQuery(this).data('id');
        var jQuerywrapper = jQuery('.post-loadmore-wrapper-' + id);
        var postData, maxPage, query, post_type, taxo_type, box_style, layout;
        var button = jQuery('#gen-button-' + id),
          icon = jQuery('#loadmore-icon-' + id),
          CurrentPage = 1;
        var sThisVal = '';
        postData = jQuery(this);
        maxPage = postData.data('max');
        query = postData.attr('data-query');
        post_type = jQuery(this).data('post_type');
        box_style = jQuery(this).data('box_style');
        layout = '';
        var dimentions = '';
        if (jQuery(this).data('layout')) {
          layout = jQuery(this).data('layout');
        }
         if (jQuery(this).data('dimentions')) {
          dimentions = jQuery(this).data('dimentions');
        }
        icon.hide();
       
        button.on('click', button, function () {
          var data = {
            'action': 'loadmore_post_page',
            'context': 'frontend',
            'nonce': postData.data('nonce'),
            'query': query,
            'post_type': post_type,
            'box_style': box_style,
            'layout': layout,
            'paged': CurrentPage,
            'dimentions': dimentions
          };
          jQuery.ajax({
            url: woo_obj.ajaxurl,
            type: 'POST',
            data: data,
            beforeSend: function beforeSend() {
              disableBtn(button, id);
            },
            success: function success(data) {
              //console.log(data);
              if (data) {
                CurrentPage++;
                jQuerywrapper.append(data);
                
                var plus_svg_icon = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_195)">
      <path d="M16.1499 7.65H9.35005V0.849948C9.35005 0.38085 8.9692 0 8.49995 0C8.03085 0 7.65 0.38085 7.65 0.849948V7.65H0.849948C0.38085 7.65 0 8.03085 0 8.49995C0 8.9692 0.38085 9.35005 0.849948 9.35005H7.65V16.1499C7.65 16.6192 8.03085 17 8.49995 17C8.9692 17 9.35005 16.6192 9.35005 16.1499V9.35005H16.1499C16.6192 9.35005 17 8.9692 17 8.49995C17 8.03085 16.6192 7.65 16.1499 7.65Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_195">
      <rect width="17" height="17" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `;
      jQuery('.movie-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
      jQuery('.tv-show-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
      jQuery('.video-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
                //jQuery('.movie-actions--link_add-to-playlist .dropdown-toggle').html('<i class="fa fa-plus"></i>')
                WcUpdateResultCount(jQuerywrapper);
                if (CurrentPage == maxPage) {
                  removeBtn(button, id);
                } else {
                  enableBtn(button, id);
                }
                jQuery(document).trigger("afterLoadMore");
              } else {
                removeBtn(button, id);
              }
            },
                error: function (jqXHR, exception) {
                	console.log(jqXHR);
                	console.log(exception);
                }
          });
          return false;
        });
      });
    },
    infinityScroll = function () {
      jQuery('.page-post-infscroll-data').each(function () {
        var id = jQuery(this).data('id');
        var jQuerywrapper = jQuery('.post-infscroll-wrapper-' + id);
       
        var postData, maxPage, query, post_type, taxo_type, box_style , dimentions;
        var canBeLoaded = true,
         icon = jQuery('#loadmore-icon-' + id),
          CurrentPage = 1;
      
        postData = jQuery(this);
        maxPage = postData.data('max');
        query = postData.attr('data-query');
        post_type = jQuery(this).data('post_type');
        box_style = jQuery(this).data('box_style');
        var layout = '';
        if (jQuery(this).data('layout')) {
          layout = jQuery(this).data('layout');
        }
          if (jQuery(this).data('dimentions')) {
          dimentions = jQuery(this).data('dimentions');
        }
        jQuery(window).on('scroll load', function () {
          if (!canBeLoaded) {
            return;
          }
          if (isScrollable(jQuerywrapper)) {
            var data = {
              'action': 'loadmore_post_page',
              'context': 'frontend',
              'nonce': postData.data('nonce'),
              'query': query,
              'post_type': post_type,
              'box_style': box_style,
              'taxo_type': taxo_type,
              'query': query,
              'layout': layout,
              'dimentions': dimentions,
              'paged': CurrentPage
            };
            jQuery.ajax({
              url: woo_obj.ajaxurl,
              type: 'POST',
              data: data,
              beforeSend: function beforeSend() {
                canBeLoaded = false;
                icon.show();
              },
              success: function success(data) {
                if (data) {
                  CurrentPage++;
                  canBeLoaded = true;
                  jQuerywrapper.append(data);
                  WcUpdateResultCount(jQuerywrapper);
                  icon.hide();
                  jQuery(document).trigger("afterInfinityScroll");
                  if (CurrentPage == maxPage) {
                    //removeBtn(button , id);
                  } else {
                    //enableBtn(button , id);
                  }
                } else {
                  icon.hide();
                }
                var plus_svg_icon = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_195)">
      <path d="M16.1499 7.65H9.35005V0.849948C9.35005 0.38085 8.9692 0 8.49995 0C8.03085 0 7.65 0.38085 7.65 0.849948V7.65H0.849948C0.38085 7.65 0 8.03085 0 8.49995C0 8.9692 0.38085 9.35005 0.849948 9.35005H7.65V16.1499C7.65 16.6192 8.03085 17 8.49995 17C8.9692 17 9.35005 16.6192 9.35005 16.1499V9.35005H16.1499C16.6192 9.35005 17 8.9692 17 8.49995C17 8.03085 16.6192 7.65 16.1499 7.65Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_195">
      <rect width="17" height="17" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `;
      jQuery('.movie-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
      jQuery('.tv-show-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
      jQuery('.video-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
      
                // jQuery('.gen-movie-contain .movie-actions--link_add-to-playlist .dropdown-toggle').html('<i class="fa fa-plus"></i>')
                // jQuery('.gen-movie-contain .tv-show-actions--link_add-to-playlist .dropdown-toggle').html('<i class="fa fa-plus"></i>')
                // jQuery('.gen-movie-contain .video-actions--link_add-to-playlist .dropdown-toggle').html('<i class="fa fa-plus"></i>')
              }
            });
          }
        });
      });
    },
    playlist = function(){
      jQuery(document).on('mouseover','.movie-actions--link_add-to-playlist.dropdown ,.tv-show-actions--link_add-to-playlist.dropdown , .video-actions--link_add-to-playlist.dropdown',function(e){

        e.preventDefault();

        jQuery('.dropdown-menu').addClass('mCustomScrollbar');
        asyncloader.require(['jquery.mCustomScrollbar'], function () {
        
        jQuery('.dropdown-menu').mCustomScrollbar({
              scrollInertia: 0,
              mouseWheel: {preventDefault: true}
        });
        
       
        
      });
        jQuery('.dropdown-menu').removeClass('show');
        
       
        jQuery(this).find('.dropdown-menu').toggleClass('show');
         e.stopPropagation();
      });
      jQuery('body').on('click' , function(){
        jQuery('.dropdown-menu').removeClass('show');
      });
      jQuery('.movie-actions--link_add-to-playlist.dropdown').on('mouseout',function(e){
        jQuery('.dropdown-menu').removeClass('show');
        e.preventDefault();
       
      });
   
    },
    likes = function (){
      jQuery(document).on('click', '.sl-button', function() {
    var button = jQuery(this);
    var post_id = button.attr('data-post-id');
    var security = button.attr('data-nonce');
    var iscomment = button.attr('data-iscomment');
    var allbuttons;
    if ( iscomment === '1' ) { /* Comments can have same id */
      allbuttons = jQuery('.sl-comment-button-'+post_id);
    } else {
      allbuttons = jQuery('.sl-button-'+post_id);
    }
    var loader = allbuttons.next('#sl-loader');
    if (post_id !== '') {
      jQuery.ajax({
        type: 'POST',
        url: simpleLikes.ajaxurl,
        data : {
          action : 'streamlab_core_process_simple_like',
          post_id : post_id,
          nonce : security,
          is_comment : iscomment,
        },
        beforeSend:function(){
          loader.html('&nbsp;<div class="loader">Loading...</div>');
        },  
        success: function(response){
          var icon = response.icon;
          var count = response.count;
          allbuttons.html(icon);
          if(response.status === 'unliked') {
            var like_text = simpleLikes.like;
            allbuttons.prop('title', like_text);
            allbuttons.removeClass('liked');
          } else {
            var unlike_text = simpleLikes.unlike;
            allbuttons.prop('title', unlike_text);
            allbuttons.addClass('liked');
          }
          loader.empty();         
        }
      });
      
    }
    return false;
  });
    }
    ;
  jQuery(document).ready(function () {
    registerDependencies();
    PMS();
    loadmore();
    infinityScroll();
    playlist();
    likes();
   jQuery('.masvideos-MyAccount-content table').wrap('<div class="table-responsive"></div>');
   
    jQuery(document).on('click','.gen-season-text',function(e){
      e.preventDefault();
      var name = jQuery(this).data('season_name');
      
        jQuery('.gen-season-number').text(" "+name);
      });
      jQuery('.gen-tab-season-holder .gen-season-text.active').trigger('click');
      jQuery(document).on("mouseenter touchstart hover mouseover", ".gen-hover-effect-active .owl-item.active", function() {
        jQuery(this).addClass("gen-hovered");
    });
    
    jQuery(document).on("mouseleave touchend mouseout", ".gen-hover-effect-active .owl-item.active", function() {
      jQuery(this).removeClass("gen-hovered");
    });
    
    if(jQuery('#pms_register-form').length > 0 ) {


        jQuery('.gen-register-page-background').addClass('mCustomScrollbar');
         asyncloader.require(['jquery.mCustomScrollbar'], function () {
        
          jQuery('.gen-register-page-background').mCustomScrollbar({
                scrollInertia: 0,
                mouseWheel: {preventDefault: true}
          });
        
       });
    }
    asyncloader.require(['jquery.mCustomScrollbar'], function () {
        
      jQuery('.gt-player-side-video-wrapper').mCustomScrollbar({
        scrollInertia: 0,
        mouseWheel: {preventDefault: true}
     });
    
   });
    
    if (jQuery('.timer').length > 0) {
      asyncloader.require(['jquery.countTo'], function () {
        timer();
      });
    }
    if (jQuery('.owl-carousel').length > 0) {
      asyncloader.require(['owl.carousel'], function () {
        owl_carousel();
      });
    }
    if (jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps, .button-play').length > 0) {
      asyncloader.require(['jquery.magnific-popup'], function () {
        pop_video();
      });
    }
    if (jQuery('.gen-circle-progress-bar').length > 0) {
      asyncloader.require(['circle-progress'], function () {
        circle_progress();
      });
    }
    if (jQuery('.slider').length > 0) {
      asyncloader.require(['slick'], function () {
        slick();
      });
    }
    var plus_svg_icon = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_195)">
<path d="M16.1499 7.65H9.35005V0.849948C9.35005 0.38085 8.9692 0 8.49995 0C8.03085 0 7.65 0.38085 7.65 0.849948V7.65H0.849948C0.38085 7.65 0 8.03085 0 8.49995C0 8.9692 0.38085 9.35005 0.849948 9.35005H7.65V16.1499C7.65 16.6192 8.03085 17 8.49995 17C8.9692 17 9.35005 16.6192 9.35005 16.1499V9.35005H16.1499C16.6192 9.35005 17 8.9692 17 8.49995C17 8.03085 16.6192 7.65 16.1499 7.65Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_195">
<rect width="17" height="17" fill="white"/>
</clipPath>
</defs>
</svg>
`;
    jQuery('p:empty').remove();
    jQuery('.movie-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
    jQuery('.tv-show-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
    jQuery('.video-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
    //jQuery('.gen-info-hover-contain .movie-actions--link_add-to-playlist .dropdown-toggle').html(plus_svg_icon);
    setTimeout(function () {
      jQuery('.owl-carousel').trigger('refresh.owl.carousel');
    }, 500);
  });
})(jQuery);