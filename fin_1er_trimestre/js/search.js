/*
  @author: Christian Millán Soria
  description: search script
*/

"use strict"

// searching
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", e=>{
    e.preventDefault();

    const searchValue=searchInput.value;

    if (searchValue==="characters"){
      window.location.href="pages/characters.html";
    } else if (searchValue==="media"){
      window.location.href="pages/media.html"; 
    } else if (searchValue==="planets"){
      window.location.href="pages/planets.html";
    } else{
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

/**************************************************************/

// placeholder
  