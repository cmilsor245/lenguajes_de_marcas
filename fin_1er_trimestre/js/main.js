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

// deployable
  $("#li1st-media").hover(function(){
    $(".deployable-media").css("background-image", "url('https://eadn-wc01-5964675.nxedge.io/wp-content/uploads/2022/09/RandomSuccessatInnovation-SocialGraphic01-760x394.jpg')");
  }, function(){
    $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
  });
  
  $(".deployable-media").css({
    'transition': 'background-image 1s ease',
  });