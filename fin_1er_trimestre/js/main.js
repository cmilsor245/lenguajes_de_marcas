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
    // episode 1
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

    // episode 2
      $("#li2nd-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://cdn.vox-cdn.com/thumbor/VcG3hnQRoEEZngg7-5Bm4idt9-E=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23157223/star_wars_4k_attack_clones_anakin_tatooine_bike.jpg')");
        $(".deployable-media").css("background-size", "120%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // tcw
      $("#li3rd-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://lumiere-a.akamaihd.net/v1/images/clone-wars-chronological-order-ahsoka_tall_6768d628.jpeg?region=0,0,1536,864')");
        $(".deployable-media").css("background-size", "170%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // episode 3
      $("#li4th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://belcourt-production.s3.amazonaws.com/wp-content/uploads/2022/08/12085635/Star-Wars-Revenge-Of-The-Sith-web.jpg')");
        $(".deployable-media").css("background-size", "170%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // solo
      $("#li5th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://www.indiewire.com/wp-content/uploads/2018/05/emilia-clarke-solo-a-star-wars-story.jpg')");
        $(".deployable-media").css("background-size", "160%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // rogue one
      $("#li6th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://lumiere-a.akamaihd.net/v1/images/au_featuretitle_liveevents_rogueone_1_m_58366f2b.jpeg?region=0,0,1024,768')");
        $(".deployable-media").css("background-size", "150%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

      // episode 4
        $("#li7th-media").hover(function(){
          $(".deployable-media").css("background-image", "url('https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8a23ffd5542a5b850f162c0ed2a33240f657e1b884988ba1aa9dddcaf4fa0942._RI_V_TTW_.png')");
          $(".deployable-media").css("background-size", "160%");
          $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
        }, function(){
          $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
        });
        
        $(".deployable-media").css({
          'transition': 'background-image 1s ease',
        });

    // episode 5
      $("#li8th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://belcourt-production.s3.amazonaws.com/wp-content/uploads/2022/07/11102615/Star-Wars-Empire-Strikes-Back-web.jpg')");
        $(".deployable-media").css("background-size", "160%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // episode 6
      $("#li9th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('https://belcourt-production.s3.amazonaws.com/wp-content/uploads/2022/07/11102907/Star-Wars-Return-Of-The-Jedi-web.jpg')");
        $(".deployable-media").css("background-size", "160%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // episode 7
      $("#li10th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('')");
        $(".deployable-media").css("background-size", "150%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // episode 8
      $("#li11th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('')");
        $(".deployable-media").css("background-size", "160%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

    // episode 9
      $("#li12th-media").hover(function(){
        $(".deployable-media").css("background-image", "url('')");
        $(".deployable-media").css("background-size", "160%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });