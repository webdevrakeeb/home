jQuery(document).ready(function(){
    //mobile menu icon
    jQuery(".mobile-menu-icon i").click(function(){
      jQuery(this).toggleClass("fa-solid, fa-xmark").css("transition", "1s");
      jQuery(".menu-area").slideToggle();      
    })

    jQuery(window).resize(function(){
      const windoWidth = jQuery(window).width();
      if (windoWidth >= 768) {
        jQuery(".menu-area").removeAttr('style');
      }
    })


    //menu dropdown sign
    jQuery(".dropdown").prev().append(" +");

    // owl carousel js
    jQuery(".owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout : 3000,
      smartSpeed : 1000,
      loop : true,
      nav : true,
      navText : ['<i class="fa-solid fa-circle-chevron-left"></i>', '<i class="fa-solid fa-circle-chevron-right"></i>'],
      
    });















})