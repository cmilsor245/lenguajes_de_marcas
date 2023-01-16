/*
  @author: Christian Millán Soria
  description: main script
*/

"use strict"

// automatic slideshow
  var slideIndex=0;

  var auto;

  var time=3750;

  function plusSlides(n){
    showSlides(slideIndex+=n);

    clearTimeout(auto);
  }

  showSlides();
    function showSlides(){
      var i;

      var slides=document.getElementsByClassName("mySlides");

      for(i=0; i<slides.length; i++){
        slides[i].style.display="none"; 
      }

      slideIndex++;

      if (slideIndex>slides.length){
        slideIndex=1
      }

      var rand=Math.floor((Math.random()*slides.length));

      slides[rand].style.display = "block"; 

      auto=setTimeout(showSlides, time);
    }

/***********************************************************/

// loader
  $(window).load(function() {
    $(".loader").fadeOut("slow");
  });

/***********************************************************/

// scrollbar
  