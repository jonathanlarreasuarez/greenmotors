"use strict";
/* -------------------------------------
/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
jQuery(document).ready(function ($) {
    /* -------------------------------------
     FOR QUOTATION FORM RADIO
     -------------------------------------- */
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body);
        }, false);
    }
    /* -------------------------------------
     OPEN CLOSE
     -------------------------------------- */
    $('#tg-languages-button').on('click', function (event) {
        event.preventDefault();
        $('.tg-languages > ul').slideToggle();
    });
	
	
	$('.nav-inner li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
			}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(300).fadeOut(200);
	});
	
	/*$('.woocommerce-info').on('click','a.showcoupon', function (event) {
        event.preventDefault();
        $(".checkout_coupon").slideToggle();
    });*/
    /*$('#tg-minicart-button').on('click', function (event) {
        event.preventDefault();
		var $this	= jQuery(this);
        $this.parents('.tg-minicart').find('.tg-minicart-box').slideToggle();
    });*/
    /*$('.tg-addnav li a').on('click', function (event) {
        event.preventDefault();
    });*/

    /* -------------------------------------
     COUNTER
     -------------------------------------- */
    try {
        $('.tg-counters').appear(function () {
            $('.tg-timer').countTo()
        });
    } catch (err) {
    }
	
	try {
        jQuery('.progress').each(function () {
			jQuery(this).find('.progress-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 7000);
		});
    } catch (err) {
    }

    /* -------------------------------------
     PRETTY PHOTO GALLERY
     -------------------------------------- */
    $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"));
    });
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
    });
    
    /*--------------------------------------
			PRODUCT INCREASE
	--------------------------------------*/
	jQuery('.minus').on('click', function() {
		var $this	= jQuery(this);
		if (jQuery('#quantity1').val() == '1') {
			$this.parents('.quantity').find('.quantity_variation').val(1);
		} else {
			$this.parents('.quantity').find('.quantity_variation').val(parseInt(jQuery('#quantity1').val()) - 1);
		}
	});
	jQuery('.plus').on('click', function() {
		var $this	= jQuery(this);
		if ($this.parents('.quantity').find('#quantity1').val() == jQuery('#quantity1').attr('max')) {
		} else {
			$this.parents('.quantity').find('.quantity_variation').val(parseInt(jQuery('#quantity1').val()) + 1);
		}
	});
    /* -------------------------------------
     MASNORY GALLERY
     -------------------------------------- */
    $(window).load(function () {
        $('.portfolio-content, .tg-blog-posts').isotope({
            itemSelector: '.portfolio-item, .blog-item',
            masonry: {columnWidth: 2}
        });
        /* -------------------------------------
         PRELOADER
         -------------------------------------- */

        jQuery("#status").delay(2000).fadeOut();
        jQuery("#preloader").delay(2000).fadeOut("slow");

        /* ---------------------------------------
         OUR PORTFOLIO GALLERY
         -------------------------------------- */
        $('.portfolio-content').isotope({
            itemSelector: '.portfolio-item'
        });
    });
    /* ---------------------------------------
     OUR PORTFOLIO GALLERY
     -------------------------------------- */
    var $container = $('.portfolio-content');
    var $optionSets = $('.option-set');
    var $optionLinks = $optionSets.find('a');
    function doIsotopeFilter() {
        if ($().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function () {
                var selector = $(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            $container.isotope({
                itemSelector: '.portfolio-item',
                filter: isotopeFilter
            });
            $optionLinks.each(function () {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                if (selector == isotopeFilter) {
                    if (!$this.hasClass('active')) {
                        var $optionSet = $this.parents('.option-set');
                        $optionSet.find('.active').removeClass('active');
                        $this.addClass('active');
                    }
                }
            });
            $optionLinks.on('click', function () {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                $container.isotope({itemSelector: '.portfolio-item', filter: selector});
                if (!$this.hasClass('active')) {
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.active').removeClass('active');
                    $this.addClass('active');
                }
                return false;
            });
        }
    }
    var isotopeTimer = window.setTimeout(function () {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
    }, 1000);
    /* -------------------------------------
     SCROLL TO TOP
     -------------------------------------- */
    $('.tg-back-to-top').on('click',function () {
        $('html, body').animate({scrollTop: 0}, 3000);
        return false;
    });
	
	/* ---------------------------------------
     Login Ajax
     --------------------------------------- */
	jQuery('.do-login-form').on('click', '.do-login-button', function (event) {
		event.preventDefault();
		var $this	= jQuery(this);
		$this.parents(".login_wrap").append('<i class="fa fa-refresh fa-spin"></i>');
		jQuery('.login-message').html('').hide();
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: jQuery('.do-login-form').serialize() + '&action=mechanico_ajax_login',
			dataType: "json",
			success: function (response) {
				$this.parents(".login_wrap").find('i.fa-spin').remove();
				jQuery('.login-message').show();
				if (response.type == 'success') {
					jQuery('.login-message').html(response.message);
					window.location.reload();
				} else {
					jQuery('.login-message').html(response.message);
				}
			}
	   });
	});
	
	/* ---------------------------------------
     Swap POPUP
     --------------------------------------- */
	jQuery('.register-me').on('click', function () {
	  // Load up a new modal...
	  jQuery('.tg-signin-modal').modal('hide');
	  jQuery('.tg-signup-modal').modal('show');
	});
	
	jQuery('.login-me').on('click', function () {
	  // Load up a new modal...
	  jQuery('.tg-signup-modal').modal('hide');
	  jQuery('.tg-signin-modal').modal('show');
	});
	
	/* ---------------------------------------
     rtegistration Ajax
     --------------------------------------- */
	jQuery('.do-registration-form').on('click', '.do-register-button', function (event) {
		event.preventDefault();
		var $this	= jQuery(this);
		$this.parents(".registration_wrap").append('<i class="fa fa-refresh fa-spin"></i>');
		jQuery('.registration-message').html('').hide();
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: jQuery('.do-registration-form').serialize() + '&action=mechanico_user_registration',
			dataType: "json",
			success: function (response) {
				$this.parents(".registration_wrap").find('i.fa-spin').remove();
				jQuery('.registration-message').show();
				if (response.type == 'success') {
					jQuery('.registration-message').html(response.message);
					window.location.reload();
				} else {
					jQuery('.registration-message').html(response.message);
				}
			}
	   });
	});
	
	/*
	 * @Contact Form
	 * @return{}
	*/
	jQuery('.contact_wrap_pg').on('click','.contact_now_pg',function(e){
		e.preventDefault();
		var $this 	= jQuery(this);

		var serialize_data	= $this.parents('.contact_wrap_pg').find('.contact_form').serialize();
		var dataString = serialize_data+'&action=mechanico_submit_contact';
		
		$this.parents('.contact_wrap_pg').find('.message_contact').html('').hide();
		$this.parents('.form-action').append("<i class='fa fa-refresh fa-spin'></i>");
		$this.parents('.contact_wrap_pg').find('.message_contact').removeClass('alert-success');
		$this.parents('.contact_wrap_pg').find('.message_contact').removeClass('alert-danger');

		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType:"json",
			success: function(response) {
				$this.parents('form').find('i').remove();
				jQuery('.message_contact').show();
				if( response.type == 'error' ) {
					$this.parents('.contact_wrap_pg').find('.message_contact').addClass('alert alert-danger').show();
					$this.parents('.contact_wrap_pg').find('.message_contact').html(response.message);
				} else{
					$this.parents('.contact_wrap_pg').find('.contact_form').get(0).reset();
					$this.parents('.contact_wrap_pg').find('.message_contact').addClass('alert alert-success').show();
					$this.parents('.contact_wrap_pg').find('.message_contact').html(response.message);
				}
			}
		});
		
		return false;
		
	});
	
	/*
	 * @Make Appointment
	 * @return{}
	*/
	jQuery(document).on('click','.make-appointment',function(e){
		e.preventDefault();
		var $this 	= jQuery(this);
		
		var serialize_data	= $this.parents('.appointment_wrap').find('.appointment_form').serialize();
		var dataString = serialize_data+'&action=mechanico_submit_appointment';
		
		$this.parents('.appointment_wrap').find('.message_contact').html('').hide();
		$this.parent('.form-action').append("<i class='fa fa-refresh fa-spin'></i>");
		$this.parents('.appointment_wrap').find('.message_apt').removeClass('alert-success');
		$this.parents('.appointment_wrap').find('.message_apt').removeClass('alert-danger');
		
		jQuery.ajax({
			type: "POST",
			url: scripts_vars.ajaxurl,
			data: dataString,
			dataType:"json",
			success: function(response) {
				$this.parent('.form-action').find('i').remove();
				jQuery('.message_appointment').show();
				if( response.type == 'error' ) {
					$this.parents('.appointment_wrap').find('.message_apt').addClass('alert alert-danger').show();
					$this.parents('.appointment_wrap').find('.message_apt').html(response.message);
				} else{
					$this.parents('.appointment_wrap').find('.appointment_form').get(0).reset();
					$this.parents('.appointment_wrap').find('.message_apt').addClass('alert alert-success').show();
					$this.parents('.appointment_wrap').find('.message_apt').html(response.message);
				}
			}
		});
		
		return false;
		
	});	
	
	//Dummy Data Gallery
    jQuery('#gallery-1').isotope({
        itemSelector: '.gallery-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 50
        }
    });
});

function mechanico_get_map_styles(style){
	var styles = '';
	if(style == 'view_1'){
		var styles = [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}];
	}else if(style == 'view_2'){
		var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}];
	}else if(style == 'view_3'){
		var styles = [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}];
	
	}else if(style == 'view_4'){
		var styles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}];
	
	}else if(style == 'view_5'){
		var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
	
	}else if(style == 'view_6'){
		var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
	}
	return styles;
}