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
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";

    // planets
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
    }else if(searchValue==="the rise of skywalker"||searchValue==="episode 9"||searchValue==="tros"){
      window.location.href="pages/sub-pages/media/episode9.html";
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