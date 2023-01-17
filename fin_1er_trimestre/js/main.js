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
  // media
    $("#li1st-media").hover(function(){
      $(".deployable-media").css("background-image", "url('https://m.media-amazon.com/images/M/MV5BOTg3NzY0MDgxMF5BMl5BanBnXkFtZTgwNzkyMjc4MjI@._V1_.jpg')");
      $(".deployable-media").css("background-size", "200%");
      $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
    }, function(){
      $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
    });
    
    $(".deployable-media").css({
      'transition': 'background-image 1s ease',
    });