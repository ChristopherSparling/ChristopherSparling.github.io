// Toggles visibility of a selectable tag's children
$(document).ready(function(){
    $(".ns").click(function(){
        $(this).next("div").toggle();
        $(this).toggleClass('s');
    });
});

$(document).ready(function(){
    $(".s").click(function(){
        $(this).next("div").hide(1000);
        $(this).toggleClass('ns');
        });
});

// Used for projects, updates arrows
$(document).ready(function(){
    $(".ns").click(function(){
        $(this).prev(".arrow").text(function(i, text){
            return text === ">>" ? "<<" : ">>";
        });
    });
});

$( function() {
    $( ".ns, .s" ).click( function() {
    
        $(this).css("background-color", "#8a86857e")
        $(this).animate({
          backgroundColor: "#000"
        }, 2000 );
        $(this).css("background-color", "")
      
    });
});
