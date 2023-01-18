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
        $(".deployable-media").css("background-image", "url('https://www.comingsoon.net/wp-content/uploads/sites/3/2022/05/attack-of-clones-toxicity-1.png')");
        $(".deployable-media").css("background-size", "180%");
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
        $(".deployable-media").css("background-image", "url('https://cdn.britannica.com/21/187421-050-B701E1D3/Star-Wars-The-Force-Awakens-characters-Wars.jpg')");
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
        $(".deployable-media").css("background-image", "url('https://imageio.forbes.com/specials-images/imageserve/5e0e0438ab5be6000762cb51/The-Last-Jedi/960x0.jpg?format=jpg&width=960')");
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
        $(".deployable-media").css("background-image", "url('https://imageio.forbes.com/specials-images/imageserve/5e00b8174e2917000783be59/Rise-of-Skywalker/960x0.jpg?format=jpg&width=960')");
        $(".deployable-media").css("background-size", "160%");
        $(".deployable-media li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-media").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-media").css({
        'transition': 'background-image 1s ease',
      });

  /*************************************************************************************************/

  // characters
    // anakin
      $("#li1st-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_0326586e.png?region=327%2C0%2C953%2C536')");
        $(".deployable-characters").css("background-size", "180%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li2nd-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://www.tonica.la/__export/1608330310946/sites/debate/img/2020/12/18/luke_skywalker-the_mandalorian-baby_yoda.jpg_1902800913.jpg')");
        $(".deployable-characters").css("background-size", "160%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li3rd-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://i.pinimg.com/474x/a2/9a/12/a29a12ec3994a7e77a765310e5773a22.jpg')");
        $(".deployable-characters").css("background-size", "160%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li4th-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://lumiere-a.akamaihd.net/v1/images/62bf0e03e8459d0001f4881b-image_71900d89.jpeg?region=192%2C0%2C1152%2C864')");
        $(".deployable-characters").css("background-size", "160%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li5th-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://sm.ign.com/ign_nordic/gallery/s/star-wars-/star-wars-leia-organa-force-fx-elite-lightsaber-gallery_5h7p.png')");
        $(".deployable-characters").css("background-size", "160%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li6th-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://lumiere-a.akamaihd.net/v1/images/finn-main_ad2b705b.jpeg?region=111%2C227%2C1169%2C585')");
        $(".deployable-characters").css("background-size", "160%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li7th-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/980px/public/media/image/2021/03/star-wars-padme-amidala-2284179.jpg?itok=eTBwDb5Y')");
        $(".deployable-characters").css("background-size", "162%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li8th-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://cdn.vox-cdn.com/thumbor/PuuA0NaURiBd9-c5XfG_sf0if2I=/0x0:1280x861/1200x800/filters:focal(518x181:722x385)/cdn.vox-cdn.com/uploads/chorus_image/image/57184081/image_9c6e8e68.0.jpeg')");
        $(".deployable-characters").css("background-size", "160%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

      $("#li9th-characters").hover(function(){
        $(".deployable-characters").css("background-image", "url('https://medias.spotern.com/spots/w640/97/97511-1532336916.jpg')");
        $(".deployable-characters").css("background-size", "200%");
        $(".deployable-characters li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-characters").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-characters").css({
        'transition': 'background-image 1s ease',
      });

  /*************************************************************************************************/

  // planets
    // tatooine
      $("#li1st-planets").hover(function(){
        $(".deployable-planets").css("background-image", "url('https://media.gq.com.mx/photos/5e2368ce73e13600083c0175/master/pass/nasa-planeta-tatooine-star-wars.jpg')");
        $(".deployable-planets").css("background-size", "160%");
        $(".deployable-planets li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-planets").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-planets").css({
        'transition': 'background-image 1s ease',
      });

      $("#li2nd-planets").hover(function(){
        $(".deployable-planets").css("background-image", "url('https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/12/star-wars-jakku-spy-virtual-reality-cardboard-1.jpg')");
        $(".deployable-planets").css("background-size", "160%");
        $(".deployable-planets li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-planets").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-planets").css({
        'transition': 'background-image 1s ease',
      });

      $("#li3rd-planets").hover(function(){
        $(".deployable-planets").css("background-image", "url('https://qph.cf2.quoracdn.net/main-qimg-6525fa59cbf38a1f8b81536276ab0302.webp')");
        $(".deployable-planets").css("background-size", "160%");
        $(".deployable-planets li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-planets").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-planets").css({
        'transition': 'background-image 1s ease',
      });

      $("#li4th-planets").hover(function(){
        $(".deployable-planets").css("background-image", "url('https://rpggamer.org/shippics/geonosis.jpg')");
        $(".deployable-planets").css("background-size", "160%");
        $(".deployable-planets li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-planets").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-planets").css({
        'transition': 'background-image 1s ease',
      });

      $("#li5th-planets").hover(function(){
        $(".deployable-planets").css("background-image", "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ab74cdc-17bd-4d44-94b7-cd5d9e030ba0/ddpao25-872b5986-6353-4a44-9614-d6e085ea8e5e.jpg/v1/fill/w_474,h_250,q_70,strp/dagobah_swamp_by_holboldoart_ddpao25-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMyIsInBhdGgiOiJcL2ZcLzBhYjc0Y2RjLTE3YmQtNGQ0NC05NGI3LWNkNWQ5ZTAzMGJhMFwvZGRwYW8yNS04NzJiNTk4Ni02MzUzLTRhNDQtOTYxNC1kNmUwODVlYThlNWUuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D9FPxO7dlruvlCOaCm-BVFCVyVyMyMeZrnSyrlW31nE')");
        $(".deployable-planets").css("background-size", "160%");
        $(".deployable-planets li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-planets").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-planets").css({
        'transition': 'background-image 1s ease',
      });

      $("#li6th-planets").hover(function(){
        $(".deployable-planets").css("background-image", "url('https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=98%2C0%2C1084%2C542')");
        $(".deployable-planets").css("background-size", "160%");
        $(".deployable-planets li b").css("color", "rgba(0, 0, 0, 0)");
      }, function(){
        $(".deployable-planets").css("background-image", "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAA1BMVEVOTlDY765vAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8XFAAFeol+kAAAAAElFTkSuQmCC')");
      });
      
      $(".deployable-planets").css({
        'transition': 'background-image 1s ease',
      });