(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);


///* ==========  START GOOGLE MAP ========== */
//
//// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);
//
//function init() {
//    // Basic options for a simple Google Map
//    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//
//	    var myLatLng = new google.maps.LatLng(19.4377664,-99.2126664);
//
//	    var mapOptions = {
//	        zoom: 15,
//	        center: myLatLng,
//	        disableDefaultUI: true,
//	        scrollwheel: false,
//	        navigationControl: true,
//	        mapTypeControl: false,
//	        scaleControl: false,
//	        draggable: true,
//
//        // How you would like to style the map. 
//        // This is where you would paste any style found on Snazzy Maps.
//        styles: [{
//            featureType: 'water',
//            stylers: [{
//                color: '#1d8cad'
//            }, {
//                visibility: 'on'
//            }]
//        }, {
//            featureType: 'landscape',
//            stylers: [{
//                color: '#f2f2f2'
//            }]
//        }, {
//            featureType: 'road',
//            stylers: [{
//                saturation: -100
//            }, {
//                lightness: 45
//            }]
//        }, {
//            featureType: 'road.highway',
//            stylers: [{
//                visibility: 'simplified'
//            }]
//        }, {
//            featureType: 'road.arterial',
//            elementType: 'labels.icon',
//            stylers: [{
//                visibility: 'off'
//            }]
//        }, {
//            featureType: 'administrative',
//            elementType: 'labels.text.fill',
//            stylers: [{
//                color: '#444444'
//            }]
//        }, {
//            featureType: 'transit',
//            stylers: [{
//                visibility: 'off'
//            }]
//        }, {
//            featureType: 'poi',
//            stylers: [{
//                visibility: 'off'
//            }]
//        }]
//    };
//
//    // Get the HTML DOM element that will contain your map 
//    // We are using a div with id="map" seen below in the <body>
//    var mapElement = document.getElementById('map-canvas');
//
//    // Create the Google Map using our element and options defined above
//    var map = new google.maps.Map(mapElement, mapOptions);
//
//    // Let's also add a marker while we're at it
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(19.4377664,-99.2126664),
//        map: map,
//		icon: 'img/icons/map-marker.png',
//    });
//}
//
//// ========== END GOOGLE MAP ========== //