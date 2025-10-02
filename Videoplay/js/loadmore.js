(function (jQuery) {
  "use strict";
  jQuery(document).ready(function () {

    function loadmore_n_infinityscroll() {
      const loadMoreWrapper = jQuery('.post-loadmore-wrapper'),
        infinityScrollWrapper = jQuery('.post-infscroll-wrapper'),
        sideScrollWrapper = jQuery('.post-infscroll-side-wrapper');

      if (loadMoreWrapper.length) {
        loadMore(loadMoreWrapper);
      }

      if (infinityScrollWrapper.length) {
        infinityScroll(infinityScrollWrapper);
      }

      if (sideScrollWrapper.length) {
        // infinityScrollSide(sideScrollWrapper);
      }
    }

    function loadMore(jQuerywrapper) {
      const button = jQuery('.gen-button-loadmore'),
        icon = jQuery('.loadmore-icon'),
        postData = jQuery('.post-loadmore-data');

      let CurrentPage = 1;
      const maxPage = postData.data('max'),
        query = postData.attr('data-query'),
        post_type = postData.data('post_type'),
        box_style = postData.data('box_style');

      icon.hide();

      button.on('click', function () {
        const data = {
          action: 'loadmore_post',
          context: 'frontend',
          nonce: postData.data('nonce'),
          query: query,
          post_type: post_type,
          box_style: box_style,
          view: jQuery('body').hasClass('product-list-view') ? 'list' : 'grid',
          paged: CurrentPage
        };

        jQuery.ajax({
          url: woo_obj.ajaxurl,
          type: 'POST',
          data: data,
          beforeSend: function () {
            disableBtn(button);
          },
          success: function (data) {
            if (data) {
              CurrentPage++;
              jQuerywrapper.append(data);
              jQuery(document).trigger("afterLoadMore");

              if (CurrentPage === maxPage) {
                removeBtn(button);
              } else {
                enableBtn(button);
              }
            } else {
              removeBtn(button);
            }

            updatePlusIcons();
          }
        });

        return false;
      });
    }

    function infinityScroll(jQuerywrapper) {
      let canBeLoaded = true;
      const icon = jQuery('.loadmore-icon'),
        postData = jQuery('.post-loadmore-data');

      let CurrentPage = 1;
      const maxPage = postData.data('max'),
        query = postData.attr('data-query'),
        post_type = postData.data('post_type'),
        box_style = postData.data('box_style'),
        taxo_type = postData.data('taxo_type') || '';
        icon.hide();
      jQuery(window).on('scroll load', function () {
        if (!canBeLoaded || CurrentPage > maxPage) return;

        if (isScrollable(jQuerywrapper)) {
          const data = {
            action: 'loadmore_post',
            context: 'frontend',
            nonce: postData.data('nonce'),
            query: query,
            post_type: post_type,
            box_style: box_style,
            taxo_type: taxo_type,
            paged: CurrentPage
          };

          jQuery.ajax({
            url: woo_obj.ajaxurl,
            type: 'POST',
            data: data,
            beforeSend: function () {
              canBeLoaded = false;
              icon.show();
            },
            success: function (data) {
              if (data) {
                CurrentPage++;
                canBeLoaded = true;
                jQuerywrapper.append(data);
                WcUpdateResultCount(jQuerywrapper);
                icon.hide();
                jQuery(document).trigger("afterInfinityScroll");
              } else {
                icon.hide();
              }

              updatePlusIcons();
            }
          });
        }
      });
    }

    let canBeLoadedSide = true;
    let CurrentPage = 1;

    function infinityScrollSide(jQuerywrapper) {
      const icon = jQuery('.loadmore-icon'),
        postData = jQuery('.post-loadmore-data');

      const maxPage = postData.data('max'),
        query = postData.attr('data-query'),
        post_type = postData.data('post_type'),
        box_style = postData.data('box_style'),
        taxo_type = postData.data('taxo_type') || '';
        icon.hide();
      if (!canBeLoadedSide || CurrentPage > maxPage) return;

      const data = {
        action: 'loadmore_post',
        context: 'frontend',
        nonce: postData.data('nonce'),
        query: query,
        post_type: post_type,
        box_style: box_style,
        taxo_type: taxo_type,
        paged: CurrentPage
      };

      jQuery.ajax({
        url: woo_obj.ajaxurl,
        type: 'POST',
        data: data,
        beforeSend: function () {
          canBeLoadedSide = false;
          icon.show();
        },
        success: function (data) {
          if (data) {
            CurrentPage++;
            canBeLoadedSide = true;
            jQuerywrapper.append(data);
            console.log('ajax call');
            DestroyScroll(jQuerywrapper);
            SetScroll(jQuerywrapper);
            WcUpdateResultCount(jQuerywrapper);
            icon.hide();
            jQuery(document).trigger("afterInfinityScroll");
          } else {
            icon.hide();
          }

          updatePlusIcons();
        }
      });
    }
    function updateSideVideo(jQuerywrapper,term_id,taxo_type_side) {
      const icon = jQuery('.loader-overlay'),
        postData = jQuery('.post-loadmore-data');
      //console.log(jQuerywrapper);
      const maxPage = postData.data('max'),
        query = postData.attr('data-query'),
        post_type = postData.data('post_type'),
        box_style = postData.data('box_style'),
        taxo_type = postData.data('taxo_type') || '';
       
        

      //if (!canBeLoadedSide || CurrentPage > maxPage) return;

      const data = {
        action: 'loadmore_post_side',
        context: 'frontend',
        nonce: postData.data('nonce'),
        query: query,
        post_type: post_type,
        box_style: box_style,
        taxo_type_side: taxo_type_side,
        taxo_type: taxo_type,
        term_id: term_id,
        paged: CurrentPage
      };
      console.log(post_type);
      console.log(data);

      jQuery.ajax({
        url: woo_obj.ajaxurl,
        type: 'POST',
        data: data,
        beforeSend: function () {
          canBeLoadedSide = false;
          icon.show();
          jQuery('.gt-player-side-video-wrapper').addClass('loading');
          //jQuerywrapper.find('.gt-right-content.col-lg-12').remove();
        },
        success: function (data) {
          //console.log(data);
          if (data) {
           
            //CurrentPage++;
            //canBeLoadedSide = true;
            jQuerywrapper.find('.gt-right-content.col-lg-12').remove();
            
            jQuerywrapper.append(data);
            jQuery('.gt-player-side-video-wrapper').removeClass('loading');
            console.log('ajax call');
            DestroyScroll(jQuerywrapper);
            SetScroll(jQuerywrapper);
            WcUpdateResultCount(jQuerywrapper);
            icon.hide();
            jQuery(document).trigger("afterInfinityScroll");
          } else {
            console.log('No Data');
            jQuerywrapper.find('.gt-right-content.col-lg-12').remove();
            jQuery('.gt-player-side-video-wrapper').removeClass('loading');
            jQuerywrapper.append(data);
            icon.hide();
          }

          updatePlusIcons();
        }
      });
    }

    function isScrollable(wrapper) {
      const visible = wrapper.offset().top + wrapper.outerHeight(true),
        scrollPos = jQuery(window).scrollTop() + jQuery(window).height();
      return visible <= scrollPos && visible + jQuery(window).height() > scrollPos;
    }

    function isScrollableSide(wrapper) {
      const scrollTop = wrapper.scrollTop();
      const scrollHeight = wrapper[0].scrollHeight;
      const containerHeight = wrapper.innerHeight();
      return (scrollTop + containerHeight + 50 >= scrollHeight);
    }

    function disableBtn(button) {
      button.attr('disabled', 'disabled');
      button.find('.button-text').hide();
      button.find('.loadmore-icon').show();
    }

    function enableBtn(button) {
      button.find('.loadmore-icon').hide();
      button.find('.button-text').show();
      button.removeAttr('disabled');
    }

    function removeBtn(button) {
      jQuery('.gen-load-more-button').hide();
    }

    function updatePlusIcons() {
      const svgIcon = `
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_195)">
            <path d="M16.1499 7.65H9.35005V0.849948C9.35005 0.38085 8.9692 0 8.49995 0C8.03085 0 7.65 0.38085 7.65 0.849948V7.65H0.849948C0.38085 7.65 0 8.03085 0 8.49995C0 8.9692 0.38085 9.35005 0.849948 9.35005H7.65V16.1499C7.65 16.6192 8.03085 17 8.49995 17C8.9692 17 9.35005 16.6192 9.35005 16.1499V9.35005H16.1499C16.6192 9.35005 17 8.9692 17 8.49995C17 8.03085 16.6192 7.65 16.1499 7.65Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_1_195">
              <rect width="17" height="17" fill="white"/>
            </clipPath>
          </defs>
        </svg>`;
      jQuery('.movie-actions--link_add-to-playlist .dropdown-toggle').html(svgIcon);
      jQuery('.tv-show-actions--link_add-to-playlist .dropdown-toggle').html(svgIcon);
      jQuery('.video-actions--link_add-to-playlist .dropdown-toggle').html(svgIcon);
    }

    function WcUpdateResultCount(wrapper) {
      // Placeholder for result count update logic
    }

    function SetScroll(jQuerywrapper) {
      jQuery('.gt-player-side-video-wrapper').mCustomScrollbar({
        scrollInertia: 1000,
        mouseWheel: {
          preventDefault: true
        },
        callbacks: {
          whileScrolling: function () {
            infinityScrollSide(jQuery('.post-infscroll-side-wrapper'));
          }
        },
        scrollButtons: { enable: true },
        autoHideScrollbar: { enable: true },
        advanced: { updateOnContentResize: true }
      });
    }

    function DestroyScroll(jQuerywrapper) {
      // Uncomment to destroy scrollbar if needed
      // jQuerywrapper.mCustomScrollbar("destroy");
    }

    loadmore_n_infinityscroll();
    SetScroll('.post-infscroll-side-wrapper');
    jQuery(document).on('click','.gt-filter-genre',function(e){
      e.preventDefault();
      var term_id = jQuery(this).data('term_id');
      var taxo_type = jQuery(this).data('taxo_type');      
      var sideScrollWrapper = jQuery('.post-infscroll-side-wrapper');
      updateSideVideo( sideScrollWrapper,term_id,taxo_type );
    });
    jQuery(document).on('click','.gt-filter-episode',function(e){
      e.preventDefault();
      var season_key = jQuery(this).data('season_key');
      console.log(season_key);
      jQuery('.season_episode').hide();
      jQuery('.season-'+season_key).show();
    });

  });
})(jQuery);
