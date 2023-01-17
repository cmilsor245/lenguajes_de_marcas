/*
  @author: Christian Millán Soria
  description: search script
*/

"use strict"

// searching
  const searchForm=document.getElementById("search-form");
  const searchInput=document.getElementById("search-input");

  searchForm.addEventListener("submit", e=>{
    e.preventDefault();
    const searchValue=searchInput.value.toLowerCase();
    if(searchValue==="characters"){
      window.location.href="pages/characters.html";
    }else if(searchValue==="media"){
      window.location.href="pages/media.html"; 
    }else if(searchValue==="planets"){
      window.location.href="pages/planets.html";

    // media
    }else if(searchValue==="the phantom menace"||searchValue==="episode 1"||searchValue==="tpm"){
      window.location.href="pages/sub-pages/media/episode1.html";
    }else if(searchValue==="attack of the clones"||searchValue==="episode 2"||searchValue==="aotc"){
      window.location.href="pages/sub-pages/media/episode2.html";
    }else if(searchValue==="the clone wars"||searchValue==="tcw"){
      window.location.href="pages/sub-pages/media/the_clone_wars.html";
    }else if(searchValue==="revenge of the sith"||searchValue==="episode 3"||searchValue==="rots"){
      window.location.href="pages/sub-pages/media/episode3.html";
    }else if(searchValue==="solo"){
      window.location.href="pages/sub-pages/media/solo.html";
    }else if(searchValue==="rogue one"){
      window.location.href="pages/sub-pages/media/rogue_one.html";
    }else if(searchValue==="a new hope"||searchValue==="episode 4"||searchValue==="anh"){
      window.location.href="pages/sub-pages/media/episode4.html";
    }else if(searchValue==="the empire strikes back"||searchValue==="episode 5"||searchValue==="tesb"){
      window.location.href="pages/sub-pages/media/episode5.html";
    }else if(searchValue==="return of the jedi"||searchValue==="episode 6"||searchValue==="rotj"){
      window.location.href="pages/sub-pages/media/episode6.html";
    }else if(searchValue==="the force awakens"||searchValue==="episode 7"||searchValue==="tfa"){
      window.location.href="pages/sub-pages/media/episode7.html";
    }else if(searchValue==="the last jedi"||searchValue==="episode 8"||searchValue==="tlj"){
      window.location.href="pages/sub-pages/media/episode8.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";

    // characters
    }else if(searchValue==="anakin skywalker"||searchValue==="anakin"){
      window.location.href="pages/sub-pages/characters/anakin.html";
    }else if(searchValue==="luke skywalker"||searchValue==="luke"){
      window.location.href="pages/sub-pages/characters/luke.html";
    }else if(searchValue==="rey skywalker"||searchValue==="rey"){
      window.location.href="pages/sub-pages/characters/rey.html";
    }else if(searchValue==="obi-wan kenobi"||searchValue==="obi"||searchValue==="kenobi"||searchValue==="obi-wan"){
      window.location.href="pages/sub-pages/characters/obi.html";
    }else if(searchValue==="leia organa"||searchValue==="leia"){
      window.location.href="pages/sub-pages/characters/leia.html";
    }else if(searchValue==="finn"||searchValue==="finn"){
      window.location.href="pages/sub-pages/characters/finn.html";
    }else if(searchValue==="padme amidala"||searchValue==="padme"||searchValue==="padmé"){
      window.location.href="pages/sub-pages/characters/padme.html";
    }else if(searchValue==="han solo"||searchValue==="han"||searchValue==="solo"){
      window.location.href="pages/sub-pages/characters/han.html";
    }else if(searchValue==="poe dameron"||searchValue==="poe"){
      window.location.href="pages/sub-pages/characters/poe.html";

    // planets
    }else if(searchValue==="tatooine"){
      window.location.href="pages/sub-pages/planets/tatooine.html";
    }else if(searchValue==="jakku"){
      window.location.href="pages/sub-pages/planets/jakku.html";
    }else if(searchValue==="coruscant"){
      window.location.href="pages/sub-pages/planets/coruscant.html";
    }else if(searchValue==="geonosis"){
      window.location.href="pages/sub-pages/planets/geonosis.html";
    }else if(searchValue==="dagobah"){
      window.location.href="pages/sub-pages/planets/dagobah.html";
    }else if(searchValue==="kamino"){
      window.location.href="pages/sub-pages/planets/kamino.html";
    }else{
      alert("Page not found. Please try again.");
    }
  });

/**************************************************************/

// suggestions
  $(document).ready(function(){
    var pages=["characters", "media", "planets"];
    $("#search-input").on("keyup", function(){
      var searchValue=$(this).val();
      var suggestions=pages.filter(function(page){
        return page.startsWith(searchValue);
      });
      $("#suggestions").empty();
      suggestions.forEach(function(suggestion){
        $("#suggestions").append("<li>"+suggestion+"</li>");
      });
    });
  });