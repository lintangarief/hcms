// JavaScript Document

  $(document).ready(function(){
  	"use strict";
	 if( $( window ).width() >= "768" ) {
		$(".header-wrapper").sticky({topSpacing:0});
    }
    $('.header-wrapper').on('sticky-start', function() {
      $('#li-home').css("display","block");
    });
     $('.header-wrapper').on('sticky-end', function() {
       $('#li-home').css("display","none");


     });
  });
